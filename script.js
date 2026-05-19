// Module lesson counts — must match server LESSON_MAP
const MODULE_LESSON_COUNTS = { 1: 19, 2: 5, 3: 43, 4: 16, 5: 41, 6: 7, 7: 4 };

// ── State ──
let selectedModule = null;
let selectedLesson = null;
let inputMethod = 'type';
let photoBase64 = null;
let photoMediaType = null;
let conversationHistory = [];
let isStreaming = false;

// ── DOM refs ──
const setupScreen = document.getElementById('setup-screen');
const chatScreen = document.getElementById('chat-screen');
const moduleSelect = document.getElementById('module-select');
const lessonInput = document.getElementById('lesson-input');
const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');
const newProblemBtn = document.getElementById('new-problem-btn');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatSubtitle = document.getElementById('chat-subtitle');
const photoInput = document.getElementById('photo-input');
const photoPreview = document.getElementById('photo-preview');
const photoPlaceholder = document.getElementById('photo-placeholder');
const clearPhotoBtn = document.getElementById('clear-photo-btn');

// ── Module → lesson range ──
moduleSelect.addEventListener('change', () => {
  const mod = parseInt(moduleSelect.value);
  const maxLessons = MODULE_LESSON_COUNTS[mod];
  const hint = document.getElementById('lesson-range-hint');
  if (maxLessons) {
    lessonInput.max = maxLessons;
    hint.textContent = `(1–${maxLessons})`;
    if (parseInt(lessonInput.value) > maxLessons) lessonInput.value = '';
  } else {
    lessonInput.max = 43;
    hint.textContent = '';
  }
});

// ── Tab switching ──
document.querySelectorAll('.method-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.method-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.method-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    inputMethod = tab.dataset.method;
    document.getElementById(`method-${inputMethod}`).classList.add('active');
  });
});

// ── Photo upload ──
photoInput.addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const dataUrl = ev.target.result;
    const commaIdx = dataUrl.indexOf(',');
    photoBase64 = dataUrl.slice(commaIdx + 1);
    photoMediaType = file.type || 'image/jpeg';

    photoPreview.src = dataUrl;
    photoPreview.style.display = 'block';
    photoPlaceholder.style.display = 'none';
    clearPhotoBtn.style.display = 'inline-block';
  };
  reader.readAsDataURL(file);
});

clearPhotoBtn.addEventListener('click', () => {
  photoBase64 = null;
  photoMediaType = null;
  photoPreview.style.display = 'none';
  photoPlaceholder.style.display = 'block';
  clearPhotoBtn.style.display = 'none';
  photoInput.value = '';
});

// ── Start session ──
startBtn.addEventListener('click', startSession);

function startSession() {
  selectedModule = parseInt(moduleSelect.value) || null;
  selectedLesson = parseInt(lessonInput.value) || null;

  let initialUserMessage = null;
  let imageData = null;

  if (inputMethod === 'type') {
    const text = document.getElementById('problem-text').value.trim();
    if (!text) {
      alert('Please type your math problem first! ✏️');
      return;
    }
    initialUserMessage = `I need help with this problem: ${text}`;
  } else if (inputMethod === 'photo') {
    if (!photoBase64) {
      alert('Please take or upload a photo of your problem first! 📷');
      return;
    }
    imageData = { base64: photoBase64, mediaType: photoMediaType };
  } else if (inputMethod === 'number') {
    const page = document.getElementById('page-number').value.trim();
    const num = document.getElementById('problem-number').value.trim();
    if (!page || !num) {
      alert('Please enter the page number and problem number! 🔢');
      return;
    }
    initialUserMessage = `I need help with page ${page}, problem number ${num}. I'll describe it to you: `;
  }

  // Switch screens
  setupScreen.classList.remove('active');
  chatScreen.style.display = 'flex';
  chatScreen.classList.add('active');

  // Update subtitle
  const moduleNames = {
    1: 'Module 1 – Place Value',
    2: 'Module 2 – Metric Measurement',
    3: 'Module 3 – Multiplication & Division',
    4: 'Module 4 – Angles & Shapes',
    5: 'Module 5 – Fractions',
    6: 'Module 6 – Decimals',
    7: 'Module 7 – Measurement'
  };
  const modLabel = selectedModule ? moduleNames[selectedModule] : 'Grade 4 Eureka Math';
  const lessonLabel = selectedLesson ? `, Lesson ${selectedLesson}` : '';
  chatSubtitle.textContent = `${modLabel}${lessonLabel}`;

  // Reset history
  conversationHistory = [];
  chatMessages.innerHTML = '';

  // Greeting
  appendBuddyMessage("Hi! I'm Math Buddy! 🦉 I'm so excited to work on math with you today!\n\nI'll never just give you the answer — we'll figure it out together, step by step. You've got this! 💪");

  // Kick off with the problem
  if (imageData) {
    appendUserImageMessage(imageData.base64, imageData.mediaType);
    streamImageAnalysis(imageData.base64, imageData.mediaType);
  } else if (inputMethod === 'number') {
    appendBuddyMessage("Great! Can you describe what the problem says? Tell me the numbers and what it's asking you to find.");
  } else {
    appendUserMessage(initialUserMessage);
    conversationHistory.push({ role: 'user', content: initialUserMessage });
    streamChat();
  }
}

// ── Navigation ──
backBtn.addEventListener('click', () => {
  chatScreen.style.display = 'none';
  chatScreen.classList.remove('active');
  setupScreen.classList.add('active');
});

newProblemBtn.addEventListener('click', () => {
  chatScreen.style.display = 'none';
  chatScreen.classList.remove('active');
  setupScreen.classList.add('active');
  // Clear problem fields
  document.getElementById('problem-text').value = '';
  clearPhotoBtn.click();
  document.getElementById('page-number').value = '';
  document.getElementById('problem-number').value = '';
});

// ── Send message ──
sendBtn.addEventListener('click', sendMessage);

chatInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

function sendMessage() {
  if (isStreaming) return;
  const text = chatInput.value.trim();
  if (!text) return;

  appendUserMessage(text);
  conversationHistory.push({ role: 'user', content: text });
  chatInput.value = '';
  chatInput.style.height = 'auto';
  streamChat();
}

// Auto-resize textarea
chatInput.addEventListener('input', () => {
  chatInput.style.height = 'auto';
  chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + 'px';
});

// ── Streaming chat ──
async function streamChat() {
  isStreaming = true;
  sendBtn.disabled = true;

  const typingEl = appendTypingIndicator();

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: conversationHistory,
        module: selectedModule,
        lesson: selectedLesson,
      }),
    });

    typingEl.remove();

    const buddyBubble = appendBuddyMessage('', true);
    let fullText = '';

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop();

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const json = line.slice(6);
        try {
          const parsed = JSON.parse(json);
          if (parsed.text) {
            fullText += parsed.text;
            buddyBubble.innerHTML = formatMessage(fullText);
            scrollToBottom();
          } else if (parsed.done) {
            conversationHistory.push({ role: 'assistant', content: fullText });
          } else if (parsed.error) {
            buddyBubble.textContent = parsed.error;
          }
        } catch {}
      }
    }

    if (fullText && conversationHistory[conversationHistory.length - 1]?.role !== 'assistant') {
      conversationHistory.push({ role: 'assistant', content: fullText });
    }

    checkForComprehensionTrigger(fullText);
  } catch (err) {
    typingEl?.remove();
    appendBuddyMessage("Oops! I had trouble connecting. Can you try again? 🔄");
  } finally {
    isStreaming = false;
    sendBtn.disabled = false;
    chatInput.focus();
  }
}

async function streamImageAnalysis(base64, mediaType) {
  isStreaming = true;
  sendBtn.disabled = true;

  const typingEl = appendTypingIndicator();

  try {
    const response = await fetch('/api/analyze-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        imageBase64: base64,
        mediaType: mediaType,
        module: selectedModule,
        lesson: selectedLesson,
      }),
    });

    typingEl.remove();

    const buddyBubble = appendBuddyMessage('', true);
    let fullText = '';

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop();

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        try {
          const parsed = JSON.parse(line.slice(6));
          if (parsed.text) {
            fullText += parsed.text;
            buddyBubble.innerHTML = formatMessage(fullText);
            scrollToBottom();
          } else if (parsed.done) {
            // Image analysis creates the first exchange in history
            conversationHistory.push({
              role: 'user',
              content: "I took a photo of my homework problem. Can you see what problem I need help with? Please read it and then start guiding me through it step by step — but don't give me the answer! Ask me questions to help me figure it out."
            });
            conversationHistory.push({ role: 'assistant', content: fullText });
          } else if (parsed.error) {
            buddyBubble.textContent = parsed.error;
          }
        } catch {}
      }
    }

    checkForComprehensionTrigger(fullText);
  } catch (err) {
    typingEl?.remove();
    appendBuddyMessage("I couldn't read the photo. Could you type the problem instead? ✏️");
  } finally {
    isStreaming = false;
    sendBtn.disabled = false;
    chatInput.focus();
  }
}

// ── UI helpers ──
function appendUserMessage(text) {
  const el = document.createElement('div');
  el.className = 'message user';
  el.innerHTML = `
    <div class="message-avatar">😊</div>
    <div class="message-bubble">${escapeHtml(text)}</div>
  `;
  chatMessages.appendChild(el);
  scrollToBottom();
}

function appendUserImageMessage(base64, mediaType) {
  const el = document.createElement('div');
  el.className = 'message user';
  el.innerHTML = `
    <div class="message-avatar">😊</div>
    <div class="message-bubble">
      <img src="data:${mediaType};base64,${base64}" class="message-image" alt="Homework photo" />
      <div>Here's my homework problem!</div>
    </div>
  `;
  chatMessages.appendChild(el);
  scrollToBottom();
}

function appendBuddyMessage(text, streaming = false) {
  const el = document.createElement('div');
  el.className = 'message buddy';
  el.innerHTML = `
    <div class="message-avatar">🦉</div>
    <div class="message-bubble">${streaming ? '' : formatMessage(text)}</div>
  `;
  chatMessages.appendChild(el);
  scrollToBottom();
  return el.querySelector('.message-bubble');
}

function appendTypingIndicator() {
  const el = document.createElement('div');
  el.className = 'message buddy';
  el.innerHTML = `
    <div class="message-avatar">🦉</div>
    <div class="message-bubble">
      <div class="typing-dots">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  chatMessages.appendChild(el);
  scrollToBottom();
  return el;
}

function appendComprehensionBanner() {
  const el = document.createElement('div');
  el.className = 'comprehension-banner';
  el.textContent = '🌟 Comprehension Check Time! Let\'s make sure you really understand! 🌟';
  chatMessages.appendChild(el);
  scrollToBottom();
}

function checkForComprehensionTrigger(text) {
  const lower = text.toLowerCase();
  const triggers = [
    'comprehension check',
    'check your understanding',
    'let me check if you really understand',
    'try a similar problem',
    'practice problem',
    "you've solved it",
    "you got it",
    "you found the answer",
    "great work! now",
    "awesome work!"
  ];
  if (triggers.some(t => lower.includes(t))) {
    appendComprehensionBanner();
  }
}

function formatMessage(text) {
  // Escape HTML first, then apply formatting
  let html = escapeHtml(text);
  // Bold **text**
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Line breaks
  html = html.replace(/\n/g, '<br>');
  return html;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
