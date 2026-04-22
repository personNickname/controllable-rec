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
        // User control details
        'user.explicit': 'Explicit Intent',
        'user.explicit_1': 'Natural language instructions → OxygenREC, InstructRec',
        'user.explicit_2': 'Prompt templates → P5',
        'user.implicit': 'Implicit Preference',
        'user.implicit_1': 'Preference pairs (DPO) → DPO, RankGR',
        'user.implicit_2': 'Sequential patterns → TIGER, GPR',
        'user.multi': 'Multi-Interest',
        'user.multi_1': 'Multi-head prediction → GPR, OneRanker',
        'user.multi_2': 'Beam diversity → PROMISE',
        'user.insight': 'Key Insight: OxygenREC\'s Contextual Reasoning Instructions bridge natural language to generative backbone.',
        // Item control details
        'item.semantic': 'Semantic Similarity',
        'item.semantic_1': 'Hierarchical Semantic IDs → TIGER, GPR',
        'item.semantic_2': 'Context-aware tokenization → ActionPiece',
        'item.attribute': 'Attribute Match',
        'item.attribute_1': 'Constrained decoding → GRank',
        'item.attribute_gap': 'Gap: Explicit attribute control unexplored',
        'item.insight': 'Key Insight: Semantic ID hierarchy enables coarse-to-fine control.',
        // Business control details
        'biz.value': 'Value Optimization',
        'biz.value_1': 'Value-aware fine-tuning → GPR',
        'biz.value_2': 'Task decoupling → OneRanker',
        'biz.value_3': 'Hierarchical DPO → RankGR',
        'biz.diversity': 'Diversity/Fairness',
        'biz.diversity_1': 'Beam diversity → PROMISE',
        'biz.diversity_gap': 'Gap: Fairness in GR is underexplored',
        'biz.insight': 'Key Insight: OneRanker separates interest from value optimization via task tokens.',
        // Interaction control details
        'int.timing': 'Control Timing',
        'int.timing_1': 'Pre-generation → OxygenREC, P5',
        'int.timing_2': 'Mid-generation (PRM) → PROMISE',
        'int.timing_3': 'Post-generation → RankGR, GRank',
        'int.explain': 'Explainability',
        'int.explain_1': 'Prompt-based explanation → PEPLER',
        'int.explain_gap': 'Gap: Explaining Semantic ID paths unexplored',
        'int.insight': 'Key Insight: PROMISE applies control at every step via Process Reward Model.',
        // Mechanisms section
        'mechanisms.title': 'Control Mechanisms',
        'mech.cond_desc': 'Prepending tokens, instructions, or embeddings to steer generation.',
        'mech.cond_1': 'Control Tokens',
        'mech.cond_2': 'Natural Language',
        'mech.cond_3': 'Embedding Injection',
        'mech.lat_desc': 'Editing discrete codes or latent representations.',
        'mech.lat_1': 'Hierarchical Editing',
        'mech.lat_2': 'Code Composition',
        'mech.lat_3': 'Context-Aware Tokenization',
        'mech.pref_desc': 'Aligning generation with preferences via DPO/RLHF.',
        'mech.pref_3': 'Value-Aware Training',
        'mech.dec_desc': 'Steering output via PRM guidance during inference.',
        'mech.dec_1': 'Process Reward Model',
        'mech.dec_2': 'Guided Beam Search',
        'mech.dec_3': 'Refined Scoring',
        'mech.multi_desc': 'Balancing conflicting objectives through task tokens, separate heads, or Pareto optimization.',
        'mech.multi_1': 'Task Tokens — OneRanker',
        'mech.multi_2': 'Multi-Head — GPR',
        'mech.multi_3': 'Decoupled Training — OneRanker',
        'mech.trade_1': 'Interest vs Value',
        'mech.trade_2': 'Diversity vs Relevance',
        'mech.trade_3': 'Short-term vs Long-term',
        // Papers section
        'papers.title': 'Paper Mapping',
        'papers.intro': '19 papers mapped to the taxonomy. Highlighted rows indicate comprehensive coverage.',
        // Gaps section
        'gaps.title': 'Research Gaps',
        'gaps.intro': 'Open problems and future research directions.',
        'gap.high': 'High Impact',
        'gap.medium': 'Medium Impact',
        'gap.high_diff': 'High Difficulty',
        'gap.medium_diff': 'Medium Difficulty',
        'gap.papers_3_5': '3-5 papers needed',
        'gap.papers_5_7': '5-7 papers needed',
        'gap.attr_title': 'Explicit Attribute Control',
        'gap.attr_desc': '"Show me items with attribute X and price < Y"',
        'gap.fair_title': 'Diversity and Fairness',
        'gap.fair_desc': 'Fair exposure across items/creators in generative recommendation.',
        'gap.feedback_title': 'Real-Time Feedback Loop',
        'gap.feedback_desc': '"Not this, more like that" in real-time.',
        'gap.explain_title': 'Explainable Control',
        'gap.explain_desc': 'Why did the model generate this Semantic ID sequence?',
        'gap.stake_title': 'Multi-Stakeholder Balance',
        'gap.stake_desc': 'Balancing user, business, and creator objectives.',
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
        'mech.multi': '多目标控制',
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
        // User control details
        'user.explicit': '显式意图',
        'user.explicit_1': '自然语言指令 → OxygenREC, InstructRec',
        'user.explicit_2': '提示词模板 → P5',
        'user.implicit': '隐式偏好',
        'user.implicit_1': '偏好对 (DPO) → DPO, RankGR',
        'user.implicit_2': '序列模式 → TIGER, GPR',
        'user.multi': '多兴趣',
        'user.multi_1': '多头预测 → GPR, OneRanker',
        'user.multi_2': 'Beam多样性 → PROMISE',
        'user.insight': '核心洞察：OxygenREC的上下文推理指令将自然语言与生成主干连接。',
        // Item control details
        'item.semantic': '语义相似性',
        'item.semantic_1': '层次化语义ID → TIGER, GPR',
        'item.semantic_2': '上下文感知分词 → ActionPiece',
        'item.attribute': '属性匹配',
        'item.attribute_1': '约束解码 → GRank',
        'item.attribute_gap': '缺口：显式属性控制尚未探索',
        'item.insight': '核心洞察：语义ID层次结构实现从粗到细的控制。',
        // Business control details
        'biz.value': '价值优化',
        'biz.value_1': '价值感知微调 → GPR',
        'biz.value_2': '任务解耦 → OneRanker',
        'biz.value_3': '层次化DPO → RankGR',
        'biz.diversity': '多样性/公平性',
        'biz.diversity_1': 'Beam多样性 → PROMISE',
        'biz.diversity_gap': '缺口：生成式推荐中的公平性研究不足',
        'biz.insight': '核心洞察：OneRanker通过任务令牌分离兴趣与价值优化。',
        // Interaction control details
        'int.timing': '控制时机',
        'int.timing_1': '生成前 → OxygenREC, P5',
        'int.timing_2': '生成中 (PRM) → PROMISE',
        'int.timing_3': '生成后 → RankGR, GRank',
        'int.explain': '可解释性',
        'int.explain_1': '基于提示词的解释 → PEPLER',
        'int.explain_gap': '缺口：语义ID路径解释尚未探索',
        'int.insight': '核心洞察：PROMISE通过过程奖励模型在每一步应用控制。',
        // Mechanisms section
        'mechanisms.title': '控制机制',
        'mech.cond_desc': '通过在输入前添加令牌、指令或嵌入来引导生成。',
        'mech.cond_1': '控制令牌',
        'mech.cond_2': '自然语言',
        'mech.cond_3': '嵌入注入',
        'mech.lat_desc': '编辑离散码或隐表示。',
        'mech.lat_1': '层次化编辑',
        'mech.lat_2': '码组合',
        'mech.lat_3': '上下文感知分词',
        'mech.pref_desc': '通过DPO/RLHF将生成与偏好对齐。',
        'mech.pref_3': '价值感知训练',
        'mech.dec_desc': '在推理时通过PRM引导来控制输出。',
        'mech.dec_1': '过程奖励模型',
        'mech.dec_2': '引导式Beam搜索',
        'mech.dec_3': '精细化评分',
        'mech.multi_desc': '通过任务令牌、独立头或帕累托优化平衡冲突目标。',
        'mech.multi_1': '任务令牌 — OneRanker',
        'mech.multi_2': '多头 — GPR',
        'mech.multi_3': '解耦训练 — OneRanker',
        'mech.trade_1': '兴趣 vs 价值',
        'mech.trade_2': '多样性 vs 相关性',
        'mech.trade_3': '短期 vs 长期',
        // Papers section
        'papers.title': '论文映射',
        'papers.intro': '19篇论文映射到分类体系。高亮行表示覆盖全面。',
        // Gaps section
        'gaps.title': '研究缺口',
        'gaps.intro': '开放问题与未来研究方向。',
        'gap.high': '高影响力',
        'gap.medium': '中等影响力',
        'gap.high_diff': '高难度',
        'gap.medium_diff': '中等难度',
        'gap.papers_3_5': '需要3-5篇论文',
        'gap.papers_5_7': '需要5-7篇论文',
        'gap.attr_title': '显式属性控制',
        'gap.attr_desc': '"展示属性X且价格<Y的物品"',
        'gap.fair_title': '多样性与公平性',
        'gap.fair_desc': '生成式推荐中物品/创作者的公平曝光。',
        'gap.feedback_title': '实时反馈循环',
        'gap.feedback_desc': '实时"不要这个，要更像那个"。',
        'gap.explain_title': '可解释控制',
        'gap.explain_desc': '为什么模型生成了这个语义ID序列？',
        'gap.stake_title': '多方利益平衡',
        'gap.stake_desc': '平衡用户、业务和创作者目标。',
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
