// ============================================
// Premier Thoroughbreds — Main JS
// ============================================

let currentFilter = 'all';

// ---- NAV scroll effect ----
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ---- Mobile menu ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ---- Render horse cards ----
function renderHorses(filter) {
  currentFilter = filter || 'all';
  const grid = document.getElementById('horsesGrid');
  if (!grid) return;

  const filtered = currentFilter === 'all'
    ? HORSES
    : HORSES.filter(h => h.gender === currentFilter);

  grid.innerHTML = filtered.map(horse => {
    const name = horse.name;
    const gender = getHorseText(horse, 'gender');
    const color = getHorseText(horse, 'color');
    const price = getHorseText(horse, 'price');
    const statusLabel = horse.status === 'available' ? t('card_available') : t('card_sold');
    const viewLabel = t('card_view');

    return `
      <div class="horse-card" onclick="window.location='horse.html?id=${horse.id}'">
        <div class="horse-img-wrap">
          <img class="horse-img" src="${horse.images[0]}" alt="${name}" loading="lazy">
          <span class="horse-status">${statusLabel}</span>
        </div>
        <div class="horse-body">
          <p class="horse-gender">${gender} · ${color} · ${horse.age} ${currentLang === 'ja' ? '歳' : 'yrs'}</p>
          <h3 class="horse-name">${name}</h3>
          <p class="horse-lineage">${currentLang === 'ja' ? '父' : 'By'} ${horse.sire} ${currentLang === 'ja' ? '母' : 'out of'} ${horse.dam}</p>
          <div class="horse-meta">
            <div class="meta-item">
              <span class="meta-label">${currentLang === 'ja' ? '所在地' : 'Location'}</span>
              <span class="meta-value">${getHorseText(horse, 'location')}</span>
            </div>
          </div>
          <div class="horse-footer">
            <span class="horse-price">${price}</span>
            <span class="horse-cta">${viewLabel}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Re-attach scroll animations
  grid.querySelectorAll('.horse-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 50);
  });
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
function populateHorseSelect() {
  const horseSelect = document.getElementById('horse');
  if (!horseSelect) return;

  // Clear existing options except first
  while (horseSelect.options.length > 1) horseSelect.remove(1);

  HORSES.forEach(h => {
    const opt = document.createElement('option');
    opt.value = h.id;
    opt.textContent = h.name;
    horseSelect.appendChild(opt);
  });

  const urlParams = new URLSearchParams(window.location.search);
  const preselect = urlParams.get('horse');
  if (preselect) horseSelect.value = preselect;
}

// ---- Contact form (EmailJS) ----
const EMAILJS_CONFIG = {
  serviceId:  'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey:  'YOUR_PUBLIC_KEY'
};

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const successMsg = document.getElementById('formSuccess');

    btn.disabled = true;
    btnText.textContent = t('form_sending');

    const formData = {
      from_name:  form.name.value,
      from_email: form.email.value,
      country:    form.country.value,
      horse:      form.horse.value,
      budget:     form.budget.value,
      message:    form.message.value,
      video_call: form.video_call.checked ? 'Yes' : 'No',
      reply_to:   form.email.value,
      language:   currentLang === 'ja' ? 'Japanese' : 'English'
    };

    if (EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
      try {
        await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, formData, EMAILJS_CONFIG.publicKey);
      } catch (err) {
        console.error('EmailJS error:', err);
        btnText.textContent = t('form_submit');
        btn.disabled = false;
        return;
      }
    }

    form.reset();
    successMsg.innerHTML = '<span>✦</span> ' + t('form_success');
    successMsg.classList.add('show');
    btn.style.display = 'none';
    setTimeout(() => {
      successMsg.classList.remove('show');
      btn.style.display = '';
      btn.disabled = false;
      btnText.textContent = t('form_submit');
    }, 6000);
  });
}

// ---- Scroll reveal ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.testimonial, .stat').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ---- Init ----
renderHorses('all');
populateHorseSelect();

// Apply language after everything is rendered
if (typeof applyLanguage === 'function') applyLanguage();
