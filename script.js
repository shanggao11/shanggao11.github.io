const translations = {
  en: {
    skip: 'Skip to content', siteName: '[Shang Gao (Gale)]', navAbout: 'About', navResearch: 'Research', navCv: 'CV', navContact: 'Contact',
    heroEyebrow: 'ACADEMIC PROFILE', heroLineOne: 'Questions worth', heroLineTwo: 'exploring.', heroSubtitle: 'Shang Gao (Gale) · Phd Student at Caltech', heroIntro: 'I am interested in the computational mechanisms underlying cognitive flexibility and imagination, and in how humans generalize from limited examples and continue learning over time.', exploreResearch: 'Explore my research', artLabel: 'A CONTINUING INQUIRY',
    aboutTitle: 'About', aboutLead: 'I study [your field], with a focus on [your central question or topic].', aboutBody: 'Use this space for a concise academic biography: your current position, the questions you pursue, and what motivates your approach. A few specific details will make this feel personal and memorable.', positionLabel: 'CURRENT POSITION', positionValue: '[Title] · [Institution]', interestsLabel: 'INTERESTS', interestsValue: '[Interest 1] · [Interest 2] · [Interest 3]',
    researchTitle: 'Research & projects', researchIntro: 'Selected questions and projects that shape my work.', projectOneType: 'RESEARCH AREA', projectOneTitle: '[Project or research theme one]', projectOneBody: 'Describe the central question, your approach, and why this work matters in one or two clear sentences.', projectTwoType: 'SELECTED PROJECT', projectTwoTitle: '[Project or research theme two]', projectTwoBody: 'Add a second project, collaboration, publication, or research direction here.', projectThreeType: 'ONGOING WORK', projectThreeTitle: '[Project or research theme three]', projectThreeBody: 'Highlight a current line of inquiry or the next question you hope to answer.',
    cvTitle: 'Curriculum vitae', cvLead: 'A brief view of my academic path.', cvDateOne: '[Year–present]', cvRoleOne: '[Current position]', cvPlaceOne: '[Institution · Department]', cvDateTwo: '[Year–year]', cvRoleTwo: '[Degree or prior position]', cvPlaceTwo: '[Institution · Department]', cvDateThree: '[Year–year]', cvRoleThree: '[Degree or prior position]', cvPlaceThree: '[Institution · Department]', cvNote: 'Full CV available upon request.',
    contactLabel: 'CONTACT', contactTitle: 'Let’s connect.', contactBody: 'For research conversations, collaborations, or other inquiries, please get in touch.', emailLabel: 'EMAIL', emailValue: '[your academic email]', linksLabel: 'LINKS', linksValue: '[Google Scholar] · [GitHub] · [LinkedIn]', footerLine: 'Made for thoughtful work and open exchange.', backToTop: 'Back to top ↑'
  },
  zh: {
    skip: '跳转到主要内容', siteName: '[你的姓名]', navAbout: '关于', navResearch: '研究', navCv: '简历', navContact: '联系',
    heroEyebrow: '学术主页', heroLineOne: '探索值得追问的', heroLineTwo: '问题。', heroSubtitle: '[你的姓名] · [职位] · [机构]', heroIntro: '在这里简要介绍你的研究兴趣，以及贯穿研究工作的核心想法。建议用两到三句话，写出你自己的学术视角。', exploreResearch: '了解我的研究', artLabel: '持续探索',
    aboutTitle: '关于我', aboutLead: '我研究[你的领域]，主要关注[核心问题或主题]。', aboutBody: '在这里写一段简洁的学术简介：你目前的职位、正在探索的问题，以及你为什么选择这样的研究方法。加入几处具体细节，会让介绍更有个人特色。', positionLabel: '目前职位', positionValue: '[职位] · [机构]', interestsLabel: '研究兴趣', interestsValue: '[方向一] · [方向二] · [方向三]',
    researchTitle: '研究与项目', researchIntro: '塑造我研究工作的几个问题与项目。', projectOneType: '研究方向', projectOneTitle: '[研究方向或项目一]', projectOneBody: '用一两句话说明核心问题、研究方法，以及这项工作的意义。', projectTwoType: '代表项目', projectTwoTitle: '[研究方向或项目二]', projectTwoBody: '在这里介绍第二个项目、合作研究、论文或研究方向。', projectThreeType: '进行中的工作', projectThreeTitle: '[研究方向或项目三]', projectThreeBody: '介绍目前正在推进的研究，或你希望接下来回答的问题。',
    cvTitle: '学术简历', cvLead: '我的学术经历概览。', cvDateOne: '[年份至今]', cvRoleOne: '[目前职位]', cvPlaceOne: '[机构 · 院系]', cvDateTwo: '[起止年份]', cvRoleTwo: '[学位或此前职位]', cvPlaceTwo: '[机构 · 院系]', cvDateThree: '[起止年份]', cvRoleThree: '[学位或此前职位]', cvPlaceThree: '[机构 · 院系]', cvNote: '完整简历可邮件索取。',
    contactLabel: '联系方式', contactTitle: '期待交流。', contactBody: '欢迎就研究、合作或其他事宜与我联系。', emailLabel: '邮箱', emailValue: '[你的学术邮箱]', linksLabel: '链接', linksValue: '[谷歌学术] · [GitHub] · [LinkedIn]', footerLine: '为深入思考与开放交流而建。', backToTop: '返回顶部 ↑'
  }
};

const languageButton = document.querySelector('.language-switch');
const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

function setLanguage(language) {
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = translations[language][element.dataset.i18n]; });
  document.querySelector('.lang-current').textContent = language === 'zh' ? '中文' : 'EN';
  document.querySelector('.lang-next').textContent = language === 'zh' ? 'EN' : '中文';
  languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
  languageButton.setAttribute('aria-pressed', language === 'zh');
  document.querySelector('.wordmark').setAttribute('aria-label', language === 'zh' ? '返回顶部' : 'Back to top');
  document.querySelector('.desktop-nav').setAttribute('aria-label', language === 'zh' ? '主导航' : 'Main navigation');
  document.title = language === 'zh' ? '[你的姓名] — 学术主页' : '[Shang Gao (Gale)] — Academic Website';
  document.querySelector('meta[name="description"]').content = language === 'zh' ? '[你的姓名]的学术主页：研究、项目、简历和联系方式。' : 'Academic website for [Shang Gao (Gale)]: research, projects, CV, and contact.';
  try { localStorage.setItem('academicSiteLanguage', language); } catch (error) { /* The switch still works if storage is unavailable. */ }
}

languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang === 'zh-CN' ? 'en' : 'zh'));
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('academicSiteLanguage') || 'en'; } catch (error) { /* Use English when storage is unavailable. */ }
setLanguage(savedLanguage === 'zh' ? 'zh' : 'en');
