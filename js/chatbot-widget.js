

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

  document.body.appendChild(toggle);
  document.body.appendChild(win);

  const messagesEl = win.querySelector("#chatbot-messages");
  const inputEl = win.querySelector("#chatbot-input");
  const sendBtn = win.querySelector("#chatbot-send");
  const closeBtn = win.querySelector("#chatbot-close");

  // In-memory conversation history for this page session.
  // Format matches what the Worker expects: { role, text }
  let history = [];
  let sending = false;

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function linkify(escapedText) {
    // escapedText has already been through escapeHtml, so this is safe to
    // insert as innerHTML — we're only wrapping links in <a> tags.

    // First, handle markdown-style [Label](url) links — tolerate a stray
    // space between "]" and "(" and strip trailing punctuation that ended
    // up inside the parens (e.g. "(url).") since models aren't always exact.
    let result = escapedText.replace(
      /\[([^\]]+)\]\s*\((https?:\/\/[^\s)]+?)[.,!?]*\)/g,
      (match, label, url) =>
        `<a href="${url}">${label}</a>`
    );

    // Then linkify any remaining bare URLs (fallback, in case the model
    // doesn't use the markdown format for some reply).
    result = result.replace(/(https?:\/\/[^\s<]+)/g, (url) => {
      const trailingMatch = url.match(/[.,!?)]+$/);
      const trailing = trailingMatch ? trailingMatch[0] : "";
      const cleanUrl = trailing ? url.slice(0, -trailing.length) : url;
      return `<a href="${cleanUrl}">${cleanUrl}</a>${trailing}`;
    });

    return result;
  }

  function addMessage(text, role) {
    const el = document.createElement("div");
    el.className = `chatbot-msg ${role === "user" ? "user" : "bot"}`;

    if (role === "user") {
      el.textContent = text;
    } else {
      el.innerHTML = linkify(escapeHtml(text));
    }

    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return el;
  }

  function openWindow() {
    win.classList.add("open");
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
  }

  toggle.addEventListener("click", () => {
    win.classList.contains("open") ? closeWindow() : openWindow();
  });
  closeBtn.addEventListener("click", closeWindow);

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
        addMessage(data.reply, "bot");
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
