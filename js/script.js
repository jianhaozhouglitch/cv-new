// Interactive behaviors: nav toggle, reveal on scroll, modal project details, contact form feedback
document.addEventListener('DOMContentLoaded', ()=> {
  const doc = document.documentElement;

  // NAV TOGGLE (mobile)
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      const opened = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
      // simple animation on bars
      navToggle.classList.toggle('active');
    });
  }

  // Smooth focusable scroll (offset accounting if header is sticky)
  const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click', (e)=>{
      const target = link.getAttribute('href');
      if(target && target.startsWith('#')){
        const el = document.querySelector(target);
        if(el){
          e.preventDefault();
          const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  // Reveal on scroll using IntersectionObserver
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!prefersReduced){
    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries, observer)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(r=>obs.observe(r));
  } else {
    // if reduced motion, make everything visible immediately
    document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'));
  }

  // Project modal (reads data attributes for title/desc)
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalClose = modal?.querySelector('.modal-close');

  function openModal(title, desc){
    if(!modal) return;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modal.setAttribute('aria-hidden','false');
    // lock body scroll
    document.body.style.overflow = 'hidden';
    // focus for accessibility
    modal.querySelector('.modal-close')?.focus();
  }
  function closeModal(){
    if(!modal) return;
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.project-card').forEach(card=>{
    const btn = card.querySelector('button');
    btn?.addEventListener('click', ()=>{
      const title = card.dataset.title || card.querySelector('h3')?.textContent || '项目';
      const desc = card.dataset.desc || '项目详情未填写。';
      openModal(title, desc);
    });
  });
  modalClose?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e)=>{
    if(e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') closeModal();
  });

  // Simple contact form handling (demo: prevent submit, show success toast)
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();
      if(!name || !email || !message){
        alert('请填写完整信息。');
        return;
      }
      // In production you would POST to your endpoint. Here we just show feedback.
      contactForm.querySelector('button[type="submit"]').textContent = '已发送 ✓';
      contactForm.reset();
      setTimeout(()=> {
        contactForm.querySelector('button[type="submit"]').textContent = '发送';
      }, 2200);
    });
  }

  // Accessibility: ensure .btn focus-visible outline
  document.addEventListener('keyup', (e)=>{
    if(e.key === 'Tab') document.body.classList.add('user-is-tabbing');
  });

});
