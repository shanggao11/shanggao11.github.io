const translations = {
  en: {
    skip: 'Skip to content', siteName: 'Shang Gao (Gale)', navAbout: 'About', navResearch: 'Research', navCv: 'CV', navBlog: 'Blog', navLife: 'Life', navContact: 'Contact',
    heroEyebrow: 'CALTECH / NEUROSCIENCE', heroLineOne: 'Shang Gao', heroLineTwo: '(Gale)', heroSubtitle: 'PhD Student at Caltech', heroIntro: 'How does the brain learn from a few examples, keep learning, and imagine what it has never seen? I approach these questions through neural computation, from visual cortex to cognition.', exploreResearch: 'Explore my research', heroAsideLabel: 'Three scales I think about', heroTrailOne: 'Vision', heroTrailTwo: 'Neurons', heroTrailThree: 'Cognition',
    aboutTitle: 'About', aboutLead: 'I use models and experiments to ask how neural systems learn and adapt.', aboutBody: 'I am a PhD student at Caltech, where I began in September 2025. My interests span neural computation, cognitive flexibility, generalization from limited examples, and imagination. Earlier work at CMU and MIT shaped how I think about computation across scales.', positionLabel: 'CURRENT POSITION', positionValue: 'PhD student · Caltech', interestsLabel: 'INTERESTS', interestsValue: 'Neural computation · Cognitive flexibility · Learning',
    researchTitle: 'Research & projects', researchIntro: 'My work has taken me from macaque V1 to dendrites and cortical rhythms.', projectOneType: 'CMU · NEURAL COMPUTATION', projectOneTitle: 'Modeling macaque V1', projectOneBody: 'At CMU, I used deep learning models to study V1 in macaques. I also gained some experience with macaque experiments involving noise correlations, familiarity, and suppression.', projectTwoType: 'MIT · DENDRITIC COMPUTATION', projectTwoTitle: 'Dendritic information processing', projectTwoBody: 'At MIT, I studied how neuronal subcomponents, including apical and basal dendrites, may contribute to distinct streams of information processing.', projectThreeType: 'MIT · COLLABORATIVE PROJECT', projectThreeTitle: 'Delta oscillations in early visual cortex', projectThreeBody: 'I also contributed to a collaborative project investigating delta oscillations in early visual cortex.',
    cvTitle: 'Curriculum vitae', cvLead: 'CMU, MIT, and now Caltech.', cvDateOne: 'Sep 2025–present', cvRoleOne: 'PhD student', cvPlaceOne: 'California Institute of Technology', cvDateTwo: '2023–2025', cvRoleTwo: 'Research Technician', cvPlaceTwo: 'Massachusetts Institute of Technology', cvDateThree: '2021–2023', cvRoleThree: 'Master’s degree', cvPlaceThree: 'Carnegie Mellon University · Neural computation research', cvNote: 'Full CV available upon request.',
    blogTitle: 'Blog', blogLead: 'Things I am still thinking through.', blogBody: 'Notes on neuroscience, physics, and questions that do not fit neatly into a paper.', blogCount: '00 / POSTS', blogEmptyTitle: 'No posts yet.', blogEmptyBody: 'I will put the first one here when it is ready.',
    lifeTitle: 'Personal life', lifeLead: 'What I read and think about away from the lab.', lifeBody: 'I enjoy physics, and I will use this space for other interests and bits of life as they come.', lifeInterestLabel: 'AN INTEREST BEYOND THE LAB', lifeInterestTitle: 'Physics', lifeInterestBody: 'I enjoy physics and the connections between physical and neural systems.',
    contactLabel: 'CONTACT', contactTitle: 'Get in touch.', contactBody: 'For research questions or collaborations, you can reach me here.', emailLabel: 'EMAIL', emailValue: '[your academic email]', linksLabel: 'LINKS', linksValue: '[Google Scholar] · [GitHub] · [LinkedIn]', footerLine: 'Neural computation · Caltech', backToTop: 'Back to top ↑'
  },
  zh: {
    skip: '跳到正文', siteName: 'Shang Gao (Gale)', navAbout: '关于', navResearch: '研究', navCv: '经历', navBlog: '博客', navLife: '生活', navContact: '联系',
    heroEyebrow: '加州理工学院 / 神经科学', heroLineOne: 'Shang Gao', heroLineTwo: '(Gale)', heroSubtitle: '加州理工学院博士生', heroIntro: '大脑怎样凭少量经验学会新事物，又怎样在不断学习中保留旧知、想象未见之物？我想从神经计算出发，慢慢把这些问题弄清楚。', exploreResearch: '看看我的研究', heroAsideLabel: '我关心的三个尺度', heroTrailOne: '视觉', heroTrailTwo: '神经元', heroTrailThree: '认知',
    aboutTitle: '关于我', aboutLead: '我想知道，大脑如何在有限经验里学会适应。', aboutBody: '2025 年 9 月，我来到加州理工学院开始博士阶段的研究。此前在 CMU，我用模型研究猕猴视觉皮层；在 MIT，我转向树突与神经元内的信息处理。这些经历让我想把不同尺度的问题连起来，理解学习、泛化与想象。', positionLabel: '目前', positionValue: '博士生 · 加州理工学院', interestsLabel: '关注的问题', interestsValue: '神经计算 · 认知灵活性 · 小样本泛化 · 想象力',
    researchTitle: '研究', researchIntro: '从猕猴 V1 到树突，再到皮层振荡，我一直在追问信息是怎样被处理的。', projectOneType: 'CMU · 视觉计算', projectOneTitle: '用模型理解猕猴 V1', projectOneBody: '在 CMU，我用深度学习模型研究猕猴初级视觉皮层（V1）。我也有一些猕猴实验经验，接触过噪声相关性、熟悉度和抑制等问题。', projectTwoType: 'MIT · 树突计算', projectTwoTitle: '树突如何分工', projectTwoBody: '在 MIT，我关注顶端树突与基底树突等不同结构，想了解它们如何分别参与信息处理。', projectThreeType: 'MIT · 合作研究', projectThreeTitle: '早期视觉皮层的 Delta 振荡', projectThreeBody: '在一项合作研究中，我参与探讨早期视觉皮层里的 Delta 振荡。',
    cvTitle: '经历', cvLead: '从 CMU 到 MIT，现在在 Caltech。', cvDateOne: '2025.09—至今', cvRoleOne: '博士生', cvPlaceOne: '加州理工学院', cvDateTwo: '2023—2025', cvRoleTwo: '研究技术员', cvPlaceTwo: '麻省理工学院', cvDateThree: '2021—2023', cvRoleThree: '硕士研究生', cvPlaceThree: '卡内基梅隆大学 · 神经计算方向', cvNote: '完整简历稍后补充。',
    blogTitle: '随笔与记录', blogLead: '把还没想明白的事记下来。', blogBody: '这里会写研究中的疑问、读书时的旁枝末节，也会写一点物理。', blogCount: '暂无文章', blogEmptyTitle: '还没有文章。', blogEmptyBody: '第一篇写好就放在这里。',
    lifeTitle: '研究之外', lifeLead: '实验室之外，也有我喜欢琢磨的事。', lifeBody: '我喜欢物理，也想在这里慢慢记下研究之外的兴趣和日常。', lifeInterestLabel: '一个长期兴趣', lifeInterestTitle: '物理', lifeInterestBody: '我喜欢物理，也常常忍不住用物理的眼光回头看神经科学。',
    contactLabel: '联系', contactTitle: '欢迎联系。', contactBody: '想交流研究或合作，可以从这里联系我。', emailLabel: '邮箱', emailValue: '[你的学术邮箱]', linksLabel: '其他链接', linksValue: '[Google Scholar] · [GitHub] · [LinkedIn]', footerLine: '神经计算 · 加州理工学院', backToTop: '回到顶部 ↑'
  }
};

const languageButton = document.querySelector('.language-switch');
const themeButton = document.querySelector('.theme-switch');
const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

function updateThemeButton(language) {
  const isDark = document.documentElement.dataset.theme !== 'light';
  document.querySelector('.theme-icon').textContent = isDark ? '☀' : '☾';
  document.querySelector('.theme-label').textContent = isDark ? (language === 'zh' ? '浅色' : 'Light') : (language === 'zh' ? '深色' : 'Dark');
  themeButton.setAttribute('aria-label', isDark ? (language === 'zh' ? '切换到浅色模式' : 'Switch to light theme') : (language === 'zh' ? '切换到深色模式' : 'Switch to dark theme'));
  themeButton.setAttribute('aria-pressed', isDark);
}

function setTheme(theme) {
  const selected = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = selected;
  document.querySelector('meta[name="theme-color"]').content = selected === 'light' ? '#ffffff' : '#121b1a';
  updateThemeButton(document.documentElement.lang === 'zh-CN' ? 'zh' : 'en');
  try { localStorage.setItem('academicSiteThemeV2', selected); } catch (error) { /* The switch still works if storage is unavailable. */ }
}

function setLanguage(language) {
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = translations[language][element.dataset.i18n]; });
  document.querySelector('.lang-current').textContent = language === 'zh' ? '中文' : 'EN';
  document.querySelector('.lang-next').textContent = language === 'zh' ? 'EN' : '中文';
  languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
  languageButton.setAttribute('aria-pressed', language === 'zh');
  document.querySelector('.wordmark').setAttribute('aria-label', language === 'zh' ? '返回顶部' : 'Back to top');
  document.querySelector('.desktop-nav').setAttribute('aria-label', language === 'zh' ? '主导航' : 'Main navigation');
  document.title = 'Shang Gao (Gale) | PhD Student at Caltech';
  document.querySelector('meta[name="description"]').content = language === 'zh' ? 'Shang Gao (Gale)，加州理工学院博士生，研究神经计算、学习与认知。' : 'Shang Gao (Gale) is a PhD student at Caltech studying neural computation, learning, and cognition.';
  updateThemeButton(language);
  try { localStorage.setItem('academicSiteLanguage', language); } catch (error) { /* The switch still works if storage is unavailable. */ }
}

themeButton.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang === 'zh-CN' ? 'en' : 'zh'));
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('academicSiteLanguage') || 'en'; } catch (error) { /* Use English when storage is unavailable. */ }
setLanguage(savedLanguage === 'zh' ? 'zh' : 'en');
setTheme(document.documentElement.dataset.theme);
