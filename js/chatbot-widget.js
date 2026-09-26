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
  // Format matches what the Worker expects: { role, text }
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

  async function sendMessage() {
    const text = inputEl.value.trim();
    if (!text || sending) return;

    sending = true;
    sendBtn.disabled = true;
    inputEl.value = "";
    addMessage(text, "user");

    const typingEl = addMessage("Thinking...", "bot");
    typingEl.classList.add("typing");

    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history }),
      });

      const data = await res.json();
      typingEl.remove();

      if (!res.ok || data.error) {
        addMessage(
          "Sorry, something went wrong. Please try again in a moment.",
          "bot"
        );
      } else {
        addMessage(data.reply, "bot", data.links);

        history.push({ role: "user", text });
        history.push({ role: "model", text: data.reply });
      }
    } catch (err) {
      typingEl.remove();
      addMessage("Network error — please check your connection.", "bot");
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