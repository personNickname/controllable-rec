// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        // Update tabs
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Update panels
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        document.getElementById('panel-' + target).classList.add('active');
    });
});

// i18n translations
const translations = {
    en: {
        // Nav
        'nav.overview': 'Overview',
        'nav.dimensions': 'Dimensions',
        'nav.mechanisms': 'Mechanisms',
        'nav.papers': 'Papers',
        'nav.gaps': 'Gaps',
        // Hero
        'hero.title': 'Controllable Recommendation Generation',
        'hero.tagline': 'A taxonomy and research synthesis of control mechanisms in generative recommendation systems',
        'hero.dimensions': 'Dimensions',
        'hero.mechanisms': 'Mechanisms',
        'hero.papers': 'Papers',
        'hero.gaps': 'Gaps',
        // Overview
        'overview.title': 'Overview',
        'overview.intro': 'How can we steer what a generative recommender produces? This taxonomy covers user preferences, item attributes, business objectives, and interaction patterns.',
        'overview.framework': 'Taxonomy Framework',
        'overview.dimension': 'Dimension',
        'overview.question': 'Question',
        'overview.mechanisms': 'Control Mechanisms',
        'overview.mechanism': 'Mechanism',
        'overview.stage': 'Stage',
        // Dimensions
        'dim.user': 'User',
        'dim.user_q': 'What does the user want?',
        'dim.item': 'Item',
        'dim.item_q': 'What properties should items have?',
        'dim.business': 'Business',
        'dim.business_q': 'What does the platform optimize?',
        'dim.interaction': 'Interaction',
        'dim.interaction_q': 'How is control applied?',
        // Mechanisms table
        'mech.conditioning': 'Conditioning',
        'mech.latent': 'Latent Manipulation',
        'mech.preference': 'Preference Optimization',
        'mech.decoding': 'Constrained Decoding',
        'mech.multi': 'Multi-Objective',
        'stage.input': 'Input',
        'stage.encoding': 'Encoding',
        'stage.training': 'Training',
        'stage.generation': 'Generation',
        'stage.architecture': 'Architecture',
        // Dimensions section
        'dimensions.title': 'Control Dimensions',
        'dimensions.user_tab': 'User Control',
        'dimensions.item_tab': 'Item Control',
        'dimensions.business_tab': 'Business Control',
        'dimensions.interaction_tab': 'Interaction Control',
        'dimensions.user_title': 'User Control (Demand-Side)',
        'dimensions.user_desc': 'How to steer recommendations based on what the user wants.',
        'dimensions.item_title': 'Item Control (Supply-Side)',
        'dimensions.item_desc': 'How to steer recommendations based on item properties.',
        'dimensions.business_title': 'Business Control (Platform-Side)',
        'dimensions.business_desc': 'How to steer recommendations for platform objectives.',
        'dimensions.interaction_title': 'Interaction Control (Interface-Side)',
        'dimensions.interaction_desc': 'How control is applied and communicated.',
        // Mechanisms section
        'mechanisms.title': 'Control Mechanisms',
        // Papers section
        'papers.title': 'Paper Mapping',
        'papers.intro': '19 papers mapped to the taxonomy. Highlighted rows indicate comprehensive coverage.',
        // Gaps section
        'gaps.title': 'Research Gaps',
        'gaps.intro': 'Open problems and future research directions.',
        // Footer
        'footer.title': 'Controllable Recommendation Generation',
        'footer.subtitle': 'Research Synthesis',
        'footer.copy': '© 2026 · Last updated April 22'
    },
    zh: {
        // Nav
        'nav.overview': '概述',
        'nav.dimensions': '控制维度',
        'nav.mechanisms': '控制机制',
        'nav.papers': '论文',
        'nav.gaps': '研究缺口',
        // Hero
        'hero.title': '可控推荐生成',
        'hero.tagline': '生成式推荐系统中控制机制的分类体系与研究综述',
        'hero.dimensions': '维度',
        'hero.mechanisms': '机制',
        'hero.papers': '论文',
        'hero.gaps': '缺口',
        // Overview
        'overview.title': '概述',
        'overview.intro': '如何控制生成式推荐系统的输出？本分类体系涵盖用户偏好、物品属性、业务目标和交互模式。',
        'overview.framework': '分类框架',
        'overview.dimension': '维度',
        'overview.question': '核心问题',
        'overview.mechanisms': '控制机制',
        'overview.mechanism': '机制',
        'overview.stage': '阶段',
        // Dimensions
        'dim.user': '用户',
        'dim.user_q': '用户想要什么？',
        'dim.item': '物品',
        'dim.item_q': '物品应具备什么属性？',
        'dim.business': '业务',
        'dim.business_q': '平台优化什么目标？',
        'dim.interaction': '交互',
        'dim.interaction_q': '如何应用控制？',
        // Mechanisms table
        'mech.conditioning': '条件控制',
        'mech.latent': '隐空间操作',
        'mech.preference': '偏好优化',
        'mech.decoding': '约束解码',
        'mech.multi': '多目标',
        'stage.input': '输入',
        'stage.encoding': '编码',
        'stage.training': '训练',
        'stage.generation': '生成',
        'stage.architecture': '架构',
        // Dimensions section
        'dimensions.title': '控制维度',
        'dimensions.user_tab': '用户控制',
        'dimensions.item_tab': '物品控制',
        'dimensions.business_tab': '业务控制',
        'dimensions.interaction_tab': '交互控制',
        'dimensions.user_title': '用户控制（需求侧）',
        'dimensions.user_desc': '如何根据用户需求引导推荐。',
        'dimensions.item_title': '物品控制（供给侧）',
        'dimensions.item_desc': '如何根据物品属性引导推荐。',
        'dimensions.business_title': '业务控制（平台侧）',
        'dimensions.business_desc': '如何为平台目标引导推荐。',
        'dimensions.interaction_title': '交互控制（界面侧）',
        'dimensions.interaction_desc': '如何应用和传达控制。',
        // Mechanisms section
        'mechanisms.title': '控制机制',
        // Papers section
        'papers.title': '论文映射',
        'papers.intro': '19篇论文映射到分类体系。高亮行表示覆盖全面。',
        // Gaps section
        'gaps.title': '研究缺口',
        'gaps.intro': '开放问题与未来研究方向。',
        // Footer
        'footer.title': '可控推荐生成',
        'footer.subtitle': '研究综述',
        'footer.copy': '© 2026 · 最后更新 4月22日'
    }
};

let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Save preference
    localStorage.setItem('lang', lang);
}

// Language switcher event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        switchLanguage(btn.dataset.lang);
    });
});

// Load saved language preference
const savedLang = localStorage.getItem('lang');
if (savedLang && translations[savedLang]) {
    switchLanguage(savedLang);
}

// Mobile menu toggle
const menuBtn = document.querySelector('.header__menu');
const nav = document.querySelector('.header__nav');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        if (nav.style.display === 'flex') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.right = '0';
            nav.style.background = 'white';
            nav.style.padding = '16px 24px';
            nav.style.gap = '16px';
            nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        }
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: pos, behavior: 'smooth' });
            
            // Close mobile menu
            if (window.innerWidth <= 768 && nav) {
                nav.style.display = 'none';
            }
        }
    });
});

// Highlight active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.header__nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (window.pageYOffset >= top) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = '#6366f1';
        }
    });
});
