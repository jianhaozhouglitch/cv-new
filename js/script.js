// Edit this object to update the portfolio. The page is generated from this data.
const PORTFOLIO_DATA = {
  profile: {
    name: '周健豪', role: '室内设计 · BIM 建模 · 空间视觉表达', avatar: './d20721c3c2c8df9002894e4747423eda.png',
    summary: '专注于室内空间规划、BIM 建模与效果图表现，能够从客户需求和现场条件出发，将设计方案推进至真实落地。',
    highlights: ['46 个饮品店项目落地', 'BIM 建模与空间设计', '效果图渲染与方案沟通']
  },
  about: { basics: ['姓名：周健豪', '电话：+852 62636348', '电邮：jianhaozhou930@gmail.com'], intro: '具备环境设计与室内设计专业背景，熟悉从平面规划、数字建模到效果图渲染的完整流程，重视设计方案的可实施性与沟通效率。' },
  education: [
    { period: '2026 - 2027', title: 'MSc Arts and Technology for Business（ATB）', detail: '硕士在读 · 香港岭南大学' },
    { period: '2021 - 2025', title: '环境设计（室内方向）', detail: '学士 · 广州软件学院' }
  ],
  skills: [
    { title: '空间设计', detail: '室内平面规划、商业空间布局、展厅与办公区设计' },
    { title: '建模与渲染', detail: 'AutoCAD、SketchUp + Enscape、D5 Render、3Ds Max、Revit、Lumion、酷家乐' },
    { title: '视觉表达', detail: 'Photoshop、效果图后期、方案汇报与设计展示' },
    { title: '办公与语言', detail: 'PPT、Word、Excel；雅思 5.5；普通话二乙；精通粤语' }
  ],
  experience: [
    { period: '2026.03 - 2026.07', title: '室内设计师 — 广州合纵信息发展有限公司', detail: '与客户沟通需求，根据现场实际情况完成饮品店平面规划、3D 建模和效果图渲染，并根据客户意见持续微调方案。业绩：46 个饮品店全部落地。' }
  ],
  projects: [
    { slug: 'ncda-future-design', title: '第十三届 NCDA 未来设计师·全国高校数字艺术设计大赛', tags: ['展览设计', '数字艺术', '省赛二等奖'], detail: '将碉楼建筑风格、特色与使用功能通过现代科技呈现，以通俗易懂的展览方式和富有趣味的互动形式帮助观众了解碉楼。', result: '省赛二等奖', link: './projects/ncda-future-design.html' },
    { slug: 'icad-commercial-street', title: '第四届 ICAD 国际当代青年美术设计大赛', tags: ['城市更新', '商业街设计', '银奖'], detail: '对广州市从化区太平商业步行街进行优化改造设计，探索商业空间与城市公共体验的结合。', result: '银奖', link: './projects/icad-commercial-street.html' },
    { slug: 'bim-master-modeling', title: '第六届“BIM 建模大师”杯全国建筑信息模型大赛', tags: ['BIM', '建筑信息模型', '二等奖'], detail: '围绕房建、轨道交通、市政与装配式等方向完成 BIM 建模竞赛要求。', result: '二等奖', link: './projects/bim-master-modeling.html' },
    { slug: 'villa-bim-modeling', title: '小别墅 BIM 建模大赛', tags: ['Revit', 'BIM 建模', '一等奖'], detail: '运用 Revit 对照项目平面图完成小别墅数字建模。', result: '一等奖', link: './projects/villa-bim-modeling.html' },
    { slug: 'furniture-showroom', title: '家具厂展厅与办公区设计', tags: ['空间规划', '建模', '效果图渲染'], detail: '根据甲方要求重新布局原始平面，完成空间建模与效果图渲染，项目最终落地。', result: '项目落地', link: './projects/furniture-showroom.html' },
    { slug: 'campus-plaza-renovation', title: '校园教学楼架空层广场改造项目', tags: ['校园更新', '实景还原', '项目落地'], detail: '对学校教学楼架空层广场进行翻新改造，完成实景建模还原与效果图渲染。', result: '项目落地', link: './projects/campus-plaza-renovation.html' }
  ],
  campus: [
    { period: '2023 - 2024', title: '广软 BIM 工作室', detail: '校内部门经历' },
    { period: '2021 - 2022', title: '学生自我管理服务工作站', detail: '校内部门经历' },
    { period: '2021 - 2022', title: '班级生活委员', detail: '班级学生工作' },
    { period: '2022 - 2025', title: '班级班长', detail: '班级学生工作' }
  ],
  honors: ['2023 - 2024 学年 · 系部“优秀学生骨干”', '2024 - 2025 学年 · “学生奖学金”二等奖', '优秀毕业设计', 'BIM 一级证书', '计算机一级证书'],
  contact: { email: 'jianhaozhou930@gmail.com', phone: '+852 62636348', socials: [] }
};

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));

function renderPortfolio(data) {
  const { profile, about, education, skills, experience, projects, campus, honors, contact } = data;
  const basics = about.basics.map((item) => escapeHtml(item)).join('<br>');
  const socialLinks = contact.socials.map((item) => `<a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.label)}</a>`).join(' · ');
  const socialSection = socialLinks ? `<h3>社交</h3><p>${socialLinks}</p>` : '';
  document.getElementById('portfolio-content').innerHTML = `
    <section class="hero" id="home"><div class="container hero-inner"><div class="hero-profile"><img class="avatar" src="${escapeHtml(profile.avatar)}" alt="${escapeHtml(profile.name)} 的头像" /><div class="profile-meta reveal"><h1>${escapeHtml(profile.name)}</h1><p class="muted">${escapeHtml(profile.role)}</p><div class="cta"><a class="btn" href="#projects">查看项目</a><a class="btn ghost" href="#contact">联系我</a></div></div><div class="model-frame reveal"><iframe src="https://3d.hunyuan.tencent.com/share?shareId=496a2f5e-f062-4acf-98f1-2613a34bf89e" title="周健豪的混元 3D 模型" loading="eager" allow="fullscreen; autoplay"></iframe><a class="model-fallback" href="https://3d.hunyuan.tencent.com/share?shareId=496a2f5e-f062-4acf-98f1-2613a34bf89e" target="_blank" rel="noreferrer">打开 3D 模型</a></div></div><div class="hero-summary reveal"><p>${escapeHtml(profile.summary)}</p><ul class="hero-highlights">${profile.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div></div></section>
    <section class="container section" id="about"><div class="section-grid"><div class="card reveal"><h2>个人信息</h2><p>${basics}</p></div><div class="card reveal"><h2>自我介绍</h2><p>${escapeHtml(about.intro)}</p></div></div></section>
    <section class="container section" id="education"><h2 class="section-title reveal">教育背景</h2><div class="timeline">${education.map((item) => `<div class="timeline-item reveal"><div class="time">${escapeHtml(item.period)}</div><div class="desc"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.detail)}</p></div></div>`).join('')}</div></section>
    <section class="container section" id="skills"><h2 class="section-title reveal">专业技能</h2><div class="skills-grid">${skills.map((item) => `<div class="skill-card reveal"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.detail)}</p></div>`).join('')}</div></section>
    <section class="container section" id="experience"><h2 class="section-title reveal">工作经历</h2><div class="timeline">${experience.map((item) => `<div class="timeline-item reveal"><div class="time">${escapeHtml(item.period)}</div><div class="desc"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.detail)}</p></div></div>`).join('')}</div></section>
    <section class="container section" id="projects"><h2 class="section-title reveal">项目展示</h2><div class="projects-grid">${projects.map((item, index) => `<article class="project-card reveal"><a class="project-card-link" href="${escapeHtml(item.link)}" aria-label="查看 ${escapeHtml(item.title)} 详情"><div class="project-media project-media-${index % 3}" aria-hidden="true"></div><h3>${escapeHtml(item.title)}</h3><p class="muted">${item.tags.map(escapeHtml).join(' · ')}</p><span class="btn btn-sm">查看详情</span></a></article>`).join('')}</div></section>
    <section class="container section" id="campus"><h2 class="section-title reveal">校内经历</h2><div class="timeline">${campus.map((item) => `<div class="timeline-item reveal"><div class="time">${escapeHtml(item.period)}</div><div class="desc"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.detail)}</p></div></div>`).join('')}</div></section>
    <section class="container section" id="honors"><h2 class="section-title reveal">荣誉与证书</h2><div class="honors-grid">${honors.map((item) => `<div class="honor-card reveal">${escapeHtml(item)}</div>`).join('')}</div></section>
    <section class="container section" id="contact"><h2 class="section-title reveal">联系方式</h2><div class="contact-grid"><div class="card reveal"><h3>邮箱</h3><p><a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a></p><h3>电话</h3><p>${escapeHtml(contact.phone)}</p>${socialSection}</div><form class="card contact-form reveal" id="contact-form"><label for="name">姓名</label><input id="name" name="name" required /><label for="email">邮件</label><input id="email" name="email" type="email" required /><label for="message">信息</label><textarea id="message" name="message" rows="4" required></textarea><button class="btn" type="submit">发送</button></form></div></section>`;
}

document.addEventListener('DOMContentLoaded', ()=> {
  renderPortfolio(PORTFOLIO_DATA);
  const doc = document.documentElement;

  // Move the background glow with the pointer without affecting page layout.
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!prefersReduced){
    document.addEventListener('pointermove', (event)=>{
      doc.style.setProperty('--pointer-x', `${event.clientX}px`);
      doc.style.setProperty('--pointer-y', `${event.clientY}px`);
    }, { passive: true });
  }

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
      if(target && target.startsWith('#') && target !== '#'){
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
  const modalLink = document.getElementById('modal-link');
  const modalClose = modal?.querySelector('.modal-close');

  function openModal(title, desc, link){
    if(!modal) return;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalLink.href = link || '#';
    modalLink.hidden = !link || link === '#';
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

  // Project details now live on dedicated pages, so cards use normal links.
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
