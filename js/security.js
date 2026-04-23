/* =============================================
   SECURITY.JS — Pragadeesh B Portfolio
   Basic client-side security hardening
   ============================================= */

/* ---- 1. DISABLE RIGHT-CLICK CONTEXT MENU ---- */
document.addEventListener('contextmenu', e => e.preventDefault());

/* ---- 2. DISABLE TEXT SELECTION on sensitive areas ---- */
document.addEventListener('selectstart', e => {
  const tag = e.target.tagName.toLowerCase();
  // Allow selection inside form inputs and textareas
  if (tag === 'input' || tag === 'textarea') return;
  e.preventDefault();
});

/* ---- 3. BLOCK COMMON KEYBOARD SHORTCUTS ---- */
document.addEventListener('keydown', e => {
  // Block F12 (DevTools)
  if (e.key === 'F12') { e.preventDefault(); return; }

  // Block Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C (DevTools)
  if (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key.toUpperCase())) {
    e.preventDefault(); return;
  }

  // Block Ctrl+U (View Source)
  if (e.ctrlKey && e.key.toUpperCase() === 'U') {
    e.preventDefault(); return;
  }

  // Block Ctrl+S (Save page)
  if (e.ctrlKey && e.key.toUpperCase() === 'S') {
    e.preventDefault(); return;
  }
});

/* ---- 4. DEVTOOLS DETECTION (size-based) ---- */
(function devToolsGuard() {
  const threshold = 160;
  let warned = false;

  function check() {
    const widthDiff  = window.outerWidth  - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;
    if ((widthDiff > threshold || heightDiff > threshold) && !warned) {
      warned = true;
      console.clear();
      console.log(
        '%c⚡ PRAGADEESH B — Portfolio',
        'color:#00d4ff;font-size:1.2rem;font-weight:bold;'
      );
      console.log(
        '%cThis site is protected. Unauthorised inspection is not permitted.',
        'color:#ff6b35;font-size:0.9rem;'
      );
    }
    if (widthDiff <= threshold && heightDiff <= threshold) warned = false;
  }

  setInterval(check, 1000);
})();

/* ---- 5. DISABLE DRAG on images ---- */
document.querySelectorAll('img').forEach(img => {
  img.setAttribute('draggable', 'false');
  img.addEventListener('dragstart', e => e.preventDefault());
});

// Re-apply to dynamically added images (e.g. modal photos)
const imgObserver = new MutationObserver(() => {
  document.querySelectorAll('img:not([draggable="false"])').forEach(img => {
    img.setAttribute('draggable', 'false');
    img.addEventListener('dragstart', e => e.preventDefault());
  });
});
imgObserver.observe(document.body, { childList: true, subtree: true });

/* ---- 6. XSS INPUT SANITIZER (used by contact form) ---- */
function sanitize(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .trim();
}

/* ---- 7. SPAM / BOT HONEYPOT (hidden field check — must stay empty) ---- */
// The honeypot field is a hidden input added to the form.
// Bots fill all fields; real users never see or touch it.
// Checked during form submission in main.js via window.honeyPotClear()
window.honeyPotClear = function() {
  const pot = document.getElementById('_hp_field');
  return pot ? pot.value === '' : true;
};

/* ---- 8. RATE LIMITER — prevent form spam ---- */
// Returns true if allowed, false if rate-limited
const _rateLimitLog = [];
window.rateLimitCheck = function(maxPerWindow = 3, windowMs = 60000) {
  const now = Date.now();
  // Remove entries older than the window
  while (_rateLimitLog.length && now - _rateLimitLog[0] > windowMs) {
    _rateLimitLog.shift();
  }
  if (_rateLimitLog.length >= maxPerWindow) return false;
  _rateLimitLog.push(now);
  return true;
};

/* ---- 9. CONSOLE WARNING MESSAGE ---- */
console.clear();
console.log(
  '%c⚡ PRAGADEESH B',
  'color:#00d4ff;font-size:2rem;font-weight:900;font-family:monospace;'
);
console.log(
  '%cElectronics & Embedded Systems Engineer\npragadeeshb404@gmail.com',
  'color:#00ff9d;font-size:0.9rem;'
);
console.log(
  '%c⚠ Unauthorised copying or scraping of this site is not permitted.',
  'color:#ff6b35;font-size:0.85rem;font-weight:bold;'
);
