const WORKER_URL = "https://portfolio-chat.nduduzodlamini5.workers.dev";

(function () {
  // ---- Build the widget markup ----
  const toggle = document.createElement("button");
  toggle.id = "chatbot-toggle";
  toggle.setAttribute("aria-label", "Open chat");
  toggle.textContent = "💬";

  const win = document.createElement("div");
  win.id = "chatbot-window";
  win.innerHTML = `
    <div id="chatbot-header">
      <span>Ask about my work</span>
      <button id="chatbot-close" aria-label="Close chat">&times;</button>
    </div>
    <div id="chatbot-messages"></div>
    <div id="chatbot-input-row">
      <textarea id="chatbot-input" rows="1" placeholder="Ask a question..."></textarea>
      <button id="chatbot-send">Send</button>
    </div>
  `;

  // Desktop-only teaser: an arrow + speech bubble pointing at the chat
  // toggle, dismissible with its own close button. Hidden on mobile via
  // CSS (see chatbot-widget.css), so no JS width-checking needed here.
  const teaser = document.createElement("div");
  teaser.id = "chatbot-teaser";
  teaser.innerHTML = `
    <button id="chatbot-teaser-close" aria-label="Dismiss">&times;</button>
    <div class="chatbot-teaser-bubble">Hi. Need any help?</div>
  `;

  document.body.appendChild(toggle);
  document.body.appendChild(win);
  document.body.appendChild(teaser);

  const messagesEl = win.querySelector("#chatbot-messages");
  const inputEl = win.querySelector("#chatbot-input");
  const sendBtn = win.querySelector("#chatbot-send");
  const closeBtn = win.querySelector("#chatbot-close");

  // In-memory conversation history for this page session.
  // Format matches what the Worker expects: { role: "user" | "assistant", text }
  let history = [];
  let sending = false;

  // Escapes any HTML-special characters so raw text can never be
  // interpreted as markup when we later set innerHTML.
  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // Turns [Label] markers (plain text, no URL embedded) into clickable
  // inline links using the {label, url} pairs the Worker sent alongside
  // the reply. Since no URL ever appears inside the message text itself,
  // this single regex pass can't double-match or nest — each [Label] is
  // just a plain bracket lookup, not a URL to parse.
  function linkifyLabels(escapedText, links) {
    const urlByLabel = {};
    (links || []).forEach((l) => {
      if (l && l.label && l.url) urlByLabel[l.label] = l.url;
    });

    return escapedText.replace(/\[([^\]]+)\]/g, (match, label) => {
      const url = urlByLabel[label];
      return url ? `<a href="${url}">${label}</a>` : match;
    });
  }

  function addMessage(text, role, links) {
    const el = document.createElement("div");
    el.className = `chatbot-msg ${role === "user" ? "user" : "bot"}`;

    if (role === "user") {
      // User's own text is never treated as HTML.
      el.textContent = text;
    } else {
      // Bot text: escape first, then linkify the escaped (safe) text.
      el.innerHTML = linkifyLabels(escapeHtml(text), links);
    }

    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return el;
  }

  function openWindow() {
    win.classList.add("open");
    document.body.classList.add("chatbot-open");
    if (messagesEl.children.length === 0) {
      addMessage(
        "Hi! Ask me anything about Nduduzo's background, skills, or projects.",
        "bot"
      );
    }
    inputEl.focus();
  }

  function closeWindow() {
    win.classList.remove("open");
    document.body.classList.remove("chatbot-open");
  }

  toggle.addEventListener("click", () => {
    win.classList.contains("open") ? closeWindow() : openWindow();
    hideTeaser();
  });
  closeBtn.addEventListener("click", closeWindow);

  // When a link in a bot message points to a section of the page the visitor
  // is already on (e.g. the Contact section on the home page), close the chat
  // so the page can scroll into view — on mobile the full-screen chat would
  // otherwise keep covering it.
  messagesEl.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a || !a.hash) return;
    const norm = (p) => p.replace(/index\.html$/, "").replace(/\/+$/, "") || "/";
    if (a.origin === location.origin && norm(a.pathname) === norm(location.pathname)) {
      closeWindow();
    }
  });

  const teaserCloseBtn = teaser.querySelector("#chatbot-teaser-close");
  const teaserBubble = teaser.querySelector(".chatbot-teaser-bubble");
  function hideTeaser() {
    teaser.style.display = "none";
  }
  teaserCloseBtn.addEventListener("click", hideTeaser);
  teaserBubble.addEventListener("click", () => {
    openWindow();
    hideTeaser();
  });

  // Calls the Worker, retrying automatically on the kinds of failures that
  // are usually temporary (rate limits, overloaded upstream model, 5xx,
  // dropped connection). The loading bubbles stay visible during retries,
  // so the visitor only sees an error if every attempt fails.
  const MAX_RETRIES = 2;
  const RETRY_DELAYS_MS = [1000, 2500];

  async function requestReply(text) {
    let lastFailure = null;

    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        const res = await fetch(WORKER_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text, history }),
        });

        let data = null;
        try {
          data = await res.json();
        } catch (_) {
          // Non-JSON response (e.g. an HTML error page) — treat as failure.
        }

        if (res.ok && data && !data.error && data.reply) {
          return { ok: true, data };
        }

        lastFailure = { status: res.status, body: data };
        console.warn(
          `[chatbot] attempt ${attempt + 1} failed`,
          res.status,
          data
        );

        // 4xx (other than 429) means the request itself is bad — retrying
        // won't help.
        if (res.status >= 400 && res.status < 500 && res.status !== 429) break;
      } catch (err) {
        lastFailure = { error: err };
        console.warn(`[chatbot] attempt ${attempt + 1} network error`, err);
      }

      if (attempt < MAX_RETRIES) {
        await new Promise((r) => setTimeout(r, RETRY_DELAYS_MS[attempt]));
      }
    }

    console.error("[chatbot] all attempts failed", lastFailure);
    return { ok: false, failure: lastFailure };
  }

  async function sendMessage() {
    const text = inputEl.value.trim();
    if (!text || sending) return;

    sending = true;
    sendBtn.disabled = true;
    inputEl.value = "";
    addMessage(text, "user");

    // Animated loading bubbles instead of "Thinking..." text.
    const typingEl = addMessage("", "bot");
    typingEl.classList.add("typing");
    typingEl.setAttribute("role", "status");
    typingEl.setAttribute("aria-label", "Assistant is typing");
    typingEl.innerHTML =
      '<span class="chatbot-dot"></span><span class="chatbot-dot"></span><span class="chatbot-dot"></span>';
    messagesEl.scrollTop = messagesEl.scrollHeight;

    try {
      const result = await requestReply(text);
      typingEl.remove();

      if (!result.ok) {
        addMessage(
          "Sorry, something went wrong. Please try again in a moment.",
          "bot"
        );
      } else {
        const data = result.data;
        addMessage(data.reply, "bot", data.links);

        history.push({ role: "user", text });
        history.push({ role: "assistant", text: data.reply });
      }
    } finally {
      sending = false;
      sendBtn.disabled = false;
      inputEl.focus();
    }
  }

  sendBtn.addEventListener("click", sendMessage);
  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
})();