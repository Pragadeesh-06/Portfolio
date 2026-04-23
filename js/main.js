/* =============================================
   PORTFOLIO MAIN JS — Pragadeesh B · ECE 2026
   ============================================= */

/* =============================================
   EMAIL SETUP — EmailJS
   =============================================
   1. Sign up free at https://www.emailjs.com
   2. Create a service (Gmail) → get SERVICE_ID
   3. Create an email template → get TEMPLATE_ID
      Template variables to use:
        {{from_name}}  {{from_email}}
        {{subject}}    {{message}}
   4. Copy your PUBLIC KEY from Account → API Keys
   5. Replace the three values below:
   ============================================= */
const EMAILJS_SERVICE_ID  = 'service_1nvj8ag';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_81o3ivc';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'wYIYGWZ3Hg5shXOyx';   // e.g. 'abcDEFghiJKL123'

/* ---- LOADER ---- */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hide');
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });
  }, 3200);
});

/* ---- LOADER STATUS CYCLE ---- */
const statusMessages = [
  'INITIALIZING SYSTEM...',
  'LOADING DATAS...',
  'SYSTEM READY.',
];
const loaderStatus = document.querySelector('.loader-status');
if (loaderStatus) {
  let idx = 0;
  const iv = setInterval(() => {
    idx = (idx + 1) % statusMessages.length;
    loaderStatus.textContent = statusMessages[idx];
    if (idx === statusMessages.length - 1) clearInterval(iv);
  }, 640);
}

/* ---- NAVBAR SCROLL SHADOW ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ---- MOBILE HAMBURGER ---- */
const hamburger    = document.getElementById('hamburger');
const navLinksList = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksList.classList.toggle('open');
});
navLinksList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksList.classList.remove('open');
  });
});

/* ---- PAGE NAVIGATION — Scroll to sections ---- */
function smoothScrollToSection(pageId) {
  const target = document.getElementById(pageId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

function updateActiveNavOnScroll() {
  const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
  const scrollPos = window.scrollY + 100;  // offset for navbar height
  
  let activeSection = 'home';
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section && section.offsetTop <= scrollPos) {
      activeSection = sectionId;
    }
  });
  
  document.querySelectorAll('.nav-btn').forEach(btn => {
    if (btn.dataset.page === activeSection) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const page = btn.dataset.page;
    if (page) smoothScrollToSection(page);
  });
});

window.addEventListener('scroll', updateActiveNavOnScroll, { passive: true });
updateActiveNavOnScroll();  // Set initial active nav

/* ---- KEYBOARD NAVIGATION ---- */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeProjectModal(); closeCertModal(); }
});

/* =============================================
   PROJECT DETAIL MODAL  (supports 1 or 2 photos)
   ============================================= */
const projectModal  = document.getElementById('project-modal');
const modalCloseBtn = document.getElementById('modal-close');

function buildPhotoHTML(src, alt, label) {
  if (src) {
    return `<img src="${src}" alt="${alt}"
      style="width:100%;height:auto;max-height:340px;object-fit:contain;background:#060d18;display:block;" />`;
  }
  return `
    <div class="modal-photo-placeholder" style="min-height:160px;">
      <span class="ph-icon">📷</span>
      <span class="ph-text">${label}<br>Add image to assets/ &amp; update projects-data.js</span>
    </div>`;
}

function openProjectModal(projectId) {
  const data = PROJECTS[projectId];
  if (!data) return;

  /* ---- Photo section ---- */
  const photoWrap = document.getElementById('modal-photo-wrap');
  photoWrap.style.height = '';       /* always clear — let content set height */
  photoWrap.style.maxHeight = '';

  if (data.photo2) {
    // Two photos side by side — fixed height for side-by-side layout
    photoWrap.style.height = '220px';
    photoWrap.innerHTML = `
      <div style="display:flex;width:100%;height:100%;">
        <div style="flex:1;overflow:hidden;border-right:2px solid #0d1421;display:flex;align-items:center;background:#060d18;">
          ${buildPhotoHTML(data.photo,  data.title + ' — view 1', 'Photo 1')}
        </div>
        <div style="flex:1;overflow:hidden;display:flex;align-items:center;background:#060d18;">
          ${buildPhotoHTML(data.photo2, data.title + ' — view 2', 'Photo 2')}
        </div>
      </div>`;
  } else {
    // Single photo — let it breathe naturally, no fixed height
    photoWrap.innerHTML = buildPhotoHTML(data.photo, data.title, 'Project Photo');
  }

  document.getElementById('modal-num').textContent      = data.num;
  document.getElementById('modal-title').textContent    = data.title;
  document.getElementById('modal-category').textContent = data.category;
  document.getElementById('modal-overview').textContent = data.overview;
  document.getElementById('modal-outcome').textContent  = data.outcome;

  const featuresList = document.getElementById('modal-features');
  featuresList.innerHTML = '';
  data.features.forEach(f => {
    const li = document.createElement('li');
    li.textContent = f;
    featuresList.appendChild(li);
  });

  const tagsWrap = document.getElementById('modal-tags');
  tagsWrap.innerHTML = '';
  data.tags.forEach(t => {
    const span = document.createElement('span');
    span.className = 'modal-tag';
    span.textContent = t;
    tagsWrap.appendChild(span);
  });

  projectModal.classList.add('open');
  projectModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  projectModal.classList.remove('open');
  projectModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.view-project-btn').forEach(btn => {
  btn.addEventListener('click', () => openProjectModal(btn.dataset.project));
});
modalCloseBtn.addEventListener('click', closeProjectModal);
projectModal.addEventListener('click', e => { if (e.target === projectModal) closeProjectModal(); });

/* =============================================
   CERTIFICATE IMAGE MODAL
   ============================================= */
const certModal      = document.getElementById('cert-modal');
const certModalClose = document.getElementById('cert-modal-close');

function openCertModal(certId, source) {
  const data = source === 'exp' ? EXP_CERTS[certId] : CERTS[certId];
  if (!data) return;

  document.getElementById('cert-modal-title').textContent = data.title;
  document.getElementById('cert-modal-sub').textContent   = data.sub;

  const imgWrap = document.getElementById('cert-img-wrap');
  if (data.image) {
    imgWrap.innerHTML = `<img src="${data.image}" alt="${data.title}" />`;
  } else {
    imgWrap.innerHTML = `
      <div class="cert-img-placeholder">
        <span class="cph-icon">🖼</span>
        <span class="cph-text">
          Add your certificate image to assets/ and set the image path in projects-data.js
        </span>
      </div>`;
  }

  certModal.classList.add('open');
  certModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCertModal() {
  certModal.classList.remove('open');
  certModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.cert-card[data-cert]').forEach(card => {
  card.addEventListener('click', () => openCertModal(card.dataset.cert, 'cert'));
});
document.querySelectorAll('.tl-cert-btn[data-cert]').forEach(btn => {
  btn.addEventListener('click', () => openCertModal(btn.dataset.cert, 'exp'));
});
certModalClose.addEventListener('click', closeCertModal);
certModal.addEventListener('click', e => { if (e.target === certModal) closeCertModal(); });

/* =============================================
   EMAIL VALIDATION HELPERS
   ============================================= */

// Regex: strict RFC-5322 inspired — catches typos, fake domains, etc.
const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

// Known disposable/spam email domains to block
const BLOCKED_DOMAINS = [
  'mailinator.com','guerrillamail.com','tempmail.com','throwaway.email',
  'yopmail.com','trashmail.com','dispostable.com','sharklasers.com',
  'guerrillamailblock.com','grr.la','guerrillamail.info','spam4.me',
  'fakeinbox.com','maildrop.cc','nada.email','mintemail.com',
  'tempr.email','discard.email','spamgourmet.com','mailnull.com'
];

function validateEmail(email) {
  email = email.trim().toLowerCase();

  if (!email) return { ok: false, msg: 'Email address is required.' };
  if (!EMAIL_REGEX.test(email)) return { ok: false, msg: 'Please enter a valid email address (e.g. name@domain.com).' };

  const domain = email.split('@')[1];
  if (BLOCKED_DOMAINS.includes(domain)) return { ok: false, msg: 'Disposable email addresses are not accepted.' };

  // Must have at least one dot in domain
  if (!domain.includes('.')) return { ok: false, msg: 'Email domain appears invalid.' };

  // TLD must be 2–6 chars
  const tld = domain.split('.').pop();
  if (tld.length < 2 || tld.length > 6) return { ok: false, msg: 'Email domain extension appears invalid.' };

  return { ok: true, msg: '✓ Valid email' };
}

function validateName(name) {
  name = name.trim();
  if (!name) return { ok: false, msg: 'Name is required.' };
  if (name.length < 2) return { ok: false, msg: 'Name must be at least 2 characters.' };
  if (name.length > 80) return { ok: false, msg: 'Name is too long.' };
  if (/[<>{}]/.test(name)) return { ok: false, msg: 'Name contains invalid characters.' };
  return { ok: true, msg: '' };
}

function validateMessage(msg) {
  msg = msg.trim();
  if (!msg) return { ok: false, msg: 'Message cannot be empty.' };
  if (msg.length < 10) return { ok: false, msg: 'Message is too short — please write at least 10 characters.' };
  if (msg.length > 2000) return { ok: false, msg: 'Message is too long (max 2000 characters).' };
  return { ok: true, msg: '' };
}

/* ---- Field UI feedback helper ---- */
function setFieldState(inputEl, isValid, msg) {
  const group = inputEl.closest('.form-group');
  if (!group) return;

  // Remove existing hint
  const existing = group.querySelector('.field-hint');
  if (existing) existing.remove();

  inputEl.style.borderColor = isValid ? 'var(--accent2)' : '#ff6b35';

  if (msg) {
    const hint = document.createElement('span');
    hint.className = 'field-hint';
    hint.textContent = msg;
    hint.style.cssText = `
      font-size:0.72rem;
      color:${isValid ? '#00ff9d' : '#ff6b35'};
      margin-top:0.3rem;
      display:block;
      letter-spacing:0.04em;
    `;
    group.appendChild(hint);
  }
}

function clearFieldState(inputEl) {
  const group = inputEl.closest('.form-group');
  if (!group) return;
  const existing = group.querySelector('.field-hint');
  if (existing) existing.remove();
  inputEl.style.borderColor = '';
}

/* =============================================
   CONTACT FORM — Validation + EmailJS + Security
   ============================================= */
const contactForm = document.getElementById('contact-form');
const formMsg     = document.getElementById('form-msg');

if (contactForm) {

  const nameEl    = contactForm.querySelector('[name="from_name"]');
  const emailEl   = contactForm.querySelector('[name="from_email"]');
  const subjectEl = contactForm.querySelector('[name="subject"]');
  const messageEl = contactForm.querySelector('[name="message"]');

  /* ---- Real-time validation on blur ---- */
  nameEl.addEventListener('blur', () => {
    const r = validateName(nameEl.value);
    setFieldState(nameEl, r.ok, r.ok ? '' : r.msg);
  });
  nameEl.addEventListener('focus', () => clearFieldState(nameEl));

  emailEl.addEventListener('blur', () => {
    const r = validateEmail(emailEl.value);
    setFieldState(emailEl, r.ok, r.msg);
  });
  emailEl.addEventListener('input', () => {
    // Live green tick once format looks valid
    const r = validateEmail(emailEl.value);
    if (r.ok) setFieldState(emailEl, true, r.msg);
    else clearFieldState(emailEl);
  });
  emailEl.addEventListener('focus', () => clearFieldState(emailEl));

  messageEl.addEventListener('blur', () => {
    const r = validateMessage(messageEl.value);
    setFieldState(messageEl, r.ok, r.ok ? '' : r.msg);
  });
  messageEl.addEventListener('focus', () => clearFieldState(messageEl));

  /* ---- Submit ---- */
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();

    // 1. Honeypot check (bot trap)
    if (!window.honeyPotClear()) return;

    // 2. Rate limit — max 3 submissions per 60 seconds
    if (!window.rateLimitCheck(3, 60000)) {
      formMsg.textContent = '⚠ Too many attempts. Please wait a minute before trying again.';
      formMsg.style.color = '#ff6b35';
      setTimeout(() => { formMsg.textContent = ''; }, 6000);
      return;
    }

    // 3. Validate all fields
    const nameCheck    = validateName(nameEl.value);
    const emailCheck   = validateEmail(emailEl.value);
    const messageCheck = validateMessage(messageEl.value);

    setFieldState(nameEl,    nameCheck.ok,    nameCheck.ok    ? '' : nameCheck.msg);
    setFieldState(emailEl,   emailCheck.ok,   emailCheck.msg);
    setFieldState(messageEl, messageCheck.ok, messageCheck.ok ? '' : messageCheck.msg);

    if (!nameCheck.ok || !emailCheck.ok || !messageCheck.ok) {
      formMsg.textContent = '✗ Please fix the errors above before sending.';
      formMsg.style.color = '#ff6b35';
      setTimeout(() => { formMsg.textContent = ''; }, 4000);
      return;
    }

    // 4. Sanitize inputs (XSS protection)
    const safeName    = sanitize(nameEl.value);
    const safeEmail   = emailEl.value.trim().toLowerCase();
    const safeSubject = sanitize(subjectEl ? subjectEl.value : '');
    const safeMessage = sanitize(messageEl.value);

    const btn = contactForm.querySelector('.form-submit');
    btn.textContent = 'Sending...';
    btn.disabled    = true;
    formMsg.style.color = 'var(--text-muted)';
    formMsg.textContent = '';

    // 5. Send via EmailJS or fallback
    const keysReady = EMAILJS_SERVICE_ID  !== 'YOUR_SERVICE_ID' &&
                      EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
                      EMAILJS_PUBLIC_KEY  !== 'YOUR_PUBLIC_KEY';

    if (keysReady && typeof emailjs !== 'undefined') {
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name:  safeName,
            from_email: safeEmail,
            subject:    safeSubject || 'Portfolio Contact',
            message:    safeMessage,
          },
          EMAILJS_PUBLIC_KEY
        );
        formMsg.textContent = '✓ Message sent! I\'ll get back to you soon.';
        formMsg.style.color = '#00ff9d';
        contactForm.reset();
        [nameEl, emailEl, subjectEl, messageEl].forEach(el => { if (el) clearFieldState(el); });
      } catch (err) {
        formMsg.textContent = '✗ Failed to send. Please email me directly at pragadeeshb404@gmail.com';
        formMsg.style.color = '#ff6b35';
      }
    } else {
      // Fallback: open mail client prefilled
      const subject = encodeURIComponent(safeSubject || 'Portfolio Enquiry');
      const body    = encodeURIComponent(
        `Name: ${safeName}\nEmail: ${safeEmail}\n\n${safeMessage}`
      );
      window.location.href = `mailto:pragadeeshb404@gmail.com?subject=${subject}&body=${body}`;
      formMsg.textContent = '✓ Opening your email client...';
      formMsg.style.color = '#00ff9d';
      contactForm.reset();
      [nameEl, emailEl, subjectEl, messageEl].forEach(el => { if (el) clearFieldState(el); });
    }

    btn.textContent = 'Send Message →';
    btn.disabled    = false;
    setTimeout(() => { formMsg.textContent = ''; }, 6000);
  });
}
