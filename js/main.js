// ============================================
// Premier Thoroughbreds — Main JS
// ============================================

// ---- NAV scroll effect ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ---- Mobile menu ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ---- Render horse cards ----
function renderHorses(filter = 'all') {
  const grid = document.getElementById('horsesGrid');
  const filtered = filter === 'all' ? HORSES : HORSES.filter(h => h.gender === filter);

  grid.innerHTML = filtered.map(horse => `
    <div class="horse-card" onclick="window.location='horse.html?id=${horse.id}'">
      <div class="horse-img-wrap">
        <img class="horse-img" src="${horse.images[0]}" alt="${horse.name}" loading="lazy">
        <span class="horse-status">${horse.status === 'available' ? 'Available' : 'Sold'}</span>
      </div>
      <div class="horse-body">
        <p class="horse-gender">${horse.gender} · ${horse.color} · ${horse.age} yrs</p>
        <h3 class="horse-name">${horse.name}</h3>
        <p class="horse-lineage">By ${horse.sire} out of ${horse.dam}</p>
        <div class="horse-meta">
          <div class="meta-item">
            <span class="meta-label">Location</span>
            <span class="meta-value">${horse.location}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Record</span>
            <span class="meta-value">${horse.record.split('·')[0].trim()}</span>
          </div>
        </div>
        <div class="horse-footer">
          <span class="horse-price">${horse.price}</span>
          <span class="horse-cta">View Horse →</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ---- Filters ----
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderHorses(btn.dataset.filter);
  });
});

// ---- Populate horse select in form ----
const horseSelect = document.getElementById('horse');
if (horseSelect) {
  HORSES.forEach(h => {
    const opt = document.createElement('option');
    opt.value = h.id;
    opt.textContent = h.name;
    horseSelect.appendChild(opt);
  });

  // Pre-select if URL has ?horse=id
  const urlParams = new URLSearchParams(window.location.search);
  const preselect = urlParams.get('horse');
  if (preselect) horseSelect.value = preselect;
}

// ---- Contact form (EmailJS) ----
// TO ACTIVATE: Add your EmailJS keys in the config block below
const EMAILJS_CONFIG = {
  serviceId:  'YOUR_SERVICE_ID',   // from emailjs.com dashboard
  templateId: 'YOUR_TEMPLATE_ID', // create a template in EmailJS
  publicKey:  'YOUR_PUBLIC_KEY'   // under Account > API Keys
};

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const successMsg = document.getElementById('formSuccess');

    btn.disabled = true;
    btnText.textContent = 'Sending...';

    const formData = {
      from_name:    form.name.value,
      from_email:   form.email.value,
      country:      form.country.value,
      horse:        form.horse.value,
      budget:       form.budget.value,
      message:      form.message.value,
      video_call:   form.video_call.checked ? 'Yes' : 'No',
      reply_to:     form.email.value
    };

    // If EmailJS is configured, use it; otherwise show success anyway (for demo)
    if (EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
      try {
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          formData,
          EMAILJS_CONFIG.publicKey
        );
      } catch (err) {
        console.error('EmailJS error:', err);
        btnText.textContent = 'Error — Try Again';
        btn.disabled = false;
        return;
      }
    }

    // Log lead to Google Sheets (optional — add your sheet webhook URL)
    const SHEET_WEBHOOK = '';
    if (SHEET_WEBHOOK) {
      fetch(SHEET_WEBHOOK, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() })
      }).catch(console.error);
    }

    form.reset();
    successMsg.classList.add('show');
    btn.style.display = 'none';
    setTimeout(() => {
      successMsg.classList.remove('show');
      btn.style.display = '';
      btn.disabled = false;
      btnText.textContent = 'Send Inquiry';
    }, 6000);
  });
}

// ---- Scroll reveal animation ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.horse-card, .testimonial, .stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ---- Init ----
renderHorses();
