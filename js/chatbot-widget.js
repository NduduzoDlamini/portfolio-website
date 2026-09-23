

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

  function addMessage(text, role) {
    const el = document.createElement("div");
    el.className = `chatbot-msg ${role === "user" ? "user" : "bot"}`;
    el.textContent = text;
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
