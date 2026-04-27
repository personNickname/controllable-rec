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
        'nav.targets': 'Targets',
        'nav.interfaces': 'Interfaces',
        'nav.mechanisms': 'Mechanisms',
        'nav.papers': 'Papers',
        'nav.gaps': 'Gaps',
        'nav.thesis': 'Thesis',
        'nav.priorities': 'Priorities',
        // Hero
        'hero.title': 'Controllable Recommendation Generation',
        'hero.tagline': 'A 3-axis taxonomy and research synthesis of control mechanisms in generative recommendation systems',
        'hero.targets': 'Targets',
        'hero.interfaces': 'Interfaces',
        'hero.mechanisms': 'Mechanisms',
        'hero.papers': 'Papers',
        // Overview
        'overview.title': 'Overview',
        'overview.intro': 'How can we steer what a generative recommender produces? This 3-axis taxonomy organizes control along orthogonal dimensions: what to steer (Target), how to deliver control (Interface), and how to implement it (Mechanism).',
        'overview.targets': 'Axis 1: Control Target',
        'overview.targets_q': 'What entity are we steering?',
        'overview.target': 'Target',
        'overview.question': 'Question',
        'overview.interfaces': 'Axis 2: Control Interface',
        'overview.interfaces_q': 'How is control delivered?',
        'overview.interface': 'Interface',
        'overview.mechanisms': 'Axis 3: Control Mechanism',
        'overview.mechanisms_q': 'How is control implemented?',
        'overview.mechanism': 'Mechanism',
        'overview.stage': 'Stage',
        // Overview — Target table
        'target.user': 'User',
        'target.user_q': 'What does the user want?',
        'target.item': 'Item',
        'target.item_q': 'What properties should items have?',
        'target.business': 'Business',
        'target.business_q': 'What does the platform optimize?',
        // Overview — Interface table
        'iface.timing': 'Timing',
        'iface.timing_q': 'When is control applied?',
        'iface.granularity': 'Granularity',
        'iface.granularity_q': 'How fine-grained?',
        'iface.explain': 'Explainability',
        'iface.explain_q': 'Why this result?',
        'iface.feedback': 'Feedback',
        'iface.feedback_q': 'How to refine?',
        // Overview — Mechanism table
        'mech.conditioning': 'Conditioning',
        'mech.preference': 'Preference Optimization',
        'mech.decoding': 'Constrained Decoding',
        'mech.post': 'Post-Processing',
        'stage.input': 'Input',
        'stage.training': 'Training',
        'stage.generation': 'Generation',
        'stage.post': 'Post-generation',
        // Targets section
        'targets.title': 'Control Targets',
        'targets.intro': 'What entity are we steering? Targets are MECE by stakeholder.',
        'targets.user_tab': 'User Control',
        'targets.item_tab': 'Item Control',
        'targets.business_tab': 'Business Control',
        'targets.user_title': 'User Control (Demand-Side)',
        'targets.user_desc': 'How to steer recommendations based on what the user wants.',
        'targets.item_title': 'Item Control (Supply-Side)',
        'targets.item_desc': 'How to steer recommendations based on item properties.',
        'targets.business_title': 'Business Control (Platform-Side)',
        'targets.business_desc': 'How to steer recommendations for platform objectives.',
        // User control details
        'user.explicit': 'Explicit Intent',
        'user.explicit_1': 'Natural language instructions \u2192 OxygenREC, InstructRec',
        'user.explicit_2': 'Prompt templates \u2192 P5',
        'user.implicit': 'Implicit Preference',
        'user.implicit_1': 'Preference pairs (DPO) \u2192 DPO, RankGR',
        'user.implicit_2': 'Sequential patterns \u2192 TIGER, GPR',
        'user.multi': 'Multi-Interest',
        'user.multi_1': 'Multi-head prediction \u2192 GPR, OneRanker',
        'user.multi_2': 'Beam diversity \u2192 PROMISE',
        'user.insight': 'Key Insight: OxygenREC\'s Contextual Reasoning Instructions bridge natural language to generative backbone.',
        // Item control details
        'item.semantic': 'Semantic Similarity',
        'item.semantic_1': 'Hierarchical Semantic IDs \u2192 TIGER, GPR',
        'item.semantic_2': 'Context-aware tokenization \u2192 ActionPiece',
        'item.attribute': 'Attribute Match',
        'item.attribute_1': 'Constrained decoding \u2192 GRank',
        'item.attribute_gap': 'Gap: Explicit attribute control unexplored',
        'item.insight': 'Key Insight: Semantic ID hierarchy enables coarse-to-fine control.',
        // Business control details
        'biz.value': 'Value Optimization',
        'biz.value_1': 'Value-aware fine-tuning \u2192 GPR',
        'biz.value_2': 'Task decoupling \u2192 OneRanker',
        'biz.value_3': 'Hierarchical DPO \u2192 RankGR',
        'biz.diversity': 'Diversity/Fairness',
        'biz.diversity_1': 'Beam diversity \u2192 PROMISE',
        'biz.diversity_gap': 'Gap: Fairness in GR is underexplored',
        'biz.insight': 'Key Insight: OneRanker separates interest from value optimization via task tokens.',
        // Interfaces section
        'interfaces.title': 'Control Interfaces',
        'interfaces.intro': 'How is control delivered? Interfaces are orthogonal to targets \u2014 each applies to User, Item, and Business control alike.',
        'interfaces.timing_tab': 'Timing',
        'interfaces.granularity_tab': 'Granularity',
        'interfaces.explainability_tab': 'Explainability',
        'interfaces.feedback_tab': 'Feedback',
        // Timing
        'interfaces.timing_title': 'Control Timing',
        'interfaces.timing_desc': 'When in the generation pipeline control is applied.',
        'timing.pre': 'Pre-Generation',
        'timing.pre_1': 'Conditioning tokens, instructions \u2192 OxygenREC, P5',
        'timing.mid': 'Mid-Generation',
        'timing.mid_1': 'PRM guidance at each step \u2192 PROMISE',
        'timing.post': 'Post-Generation',
        'timing.post_1': 'Reranking, refined scoring \u2192 RankGR, GRank',
        'timing.insight': 'Key Insight: PROMISE applies control at every step via Process Reward Model \u2014 enables test-time scaling.',
        // Granularity
        'interfaces.granularity_title': 'Control Granularity',
        'interfaces.granularity_desc': 'How fine-grained the control resolution is.',
        'gran.coarse': 'Coarse',
        'gran.coarse_1': 'Category, scenario \u2192 OxygenREC scenario tokens',
        'gran.medium': 'Medium',
        'gran.medium_1': 'Semantic ID levels \u2192 TIGER hierarchy',
        'gran.fine': 'Fine',
        'gran.fine_gap': 'Gap: Attribute-level control is largely unexplored',
        'gran.insight': 'Key Insight: Hierarchical Semantic IDs naturally support multi-granularity \u2014 a built-in control knob.',
        // Explainability
        'interfaces.explainability_title': 'Control Explainability',
        'interfaces.explainability_desc': 'How the system communicates why a recommendation was generated.',
        'expl.prompt': 'Prompt-Based',
        'expl.prompt_1': 'LLM generates rationale \u2192 PEPLER, HF4Rec',
        'expl.path': 'Path Tracing',
        'expl.path_gap': 'Gap: Explaining Semantic ID generation paths unexplored',
        'expl.counter': 'Counterfactual',
        'expl.counter_1': 'Behavior revocation \u2192 User-Controllable-Rec',
        'expl.insight': 'Key Insight: PRM scores could serve as step-level explanations \u2014 surfacing them is an open opportunity.',
        // Feedback
        'interfaces.feedback_title': 'Control Feedback',
        'interfaces.feedback_desc': 'How users iteratively refine recommendations.',
        'fb.conv': 'Conversational',
        'fb.conv_1': 'Multi-turn dialogue \u2192 Chat-REC, TRIP',
        'fb.elicit': 'Preference Elicitation',
        'fb.elicit_1': 'Curiosity-driven querying \u2192 CURIO',
        'fb.online': 'Online Learning',
        'fb.online_gap': 'Gap: Real-time generation update is an open problem',
        'fb.insight': 'Key Insight: Most feedback currently goes through conditioning \u2014 closing the loop via latent/decoding mechanisms is unexplored.',
        // Mechanisms section
        'mechanisms.title': 'Control Mechanisms',
        'mech.cond_desc': 'Prepending tokens, instructions, or embeddings to steer generation. Includes code composition from Semantic IDs.',
        'mech.cond_1': 'Control Tokens',
        'mech.cond_2': 'Instruction Following',
        'mech.cond_3': 'Embedding Injection',
        'mech.cond_4': 'Prompt Tuning',
        'mech.cond_5': 'Code Composition',
        'mech.pref_desc': 'Aligning generation with preferences via DPO/RLHF.',
        'mech.pref_3': 'Reward Modeling',
        'mech.dec_desc': 'Steering output via PRM/ORM guidance, code-level constraints, and multi-head blending during inference.',
        'mech.dec_1': 'Process Reward',
        'mech.dec_2': 'Guided Beam Search',
        'mech.dec_3': 'Refined Scoring',
        'mech.dec_4': 'Outcome Reward',
        'mech.dec_5': 'Semantic ID Constraints',
        'mech.post_desc': 'Reranking, filtering, and diversifying candidates after decoder output.',
        'mech.post_1': 'Value Reranking',
        'mech.post_2': 'MMR Diversity',
        'mech.post_3': 'Fairness Filtering',
        'mech.multi_note': 'Multi-Objective is a cross-cutting attribute \u2014 any pipeline stage can optimize single or multiple objectives. See individual mechanism cards for multi-objective variants.',
        // Papers section
        'papers.title': 'Paper Mapping',
        'papers.intro': '39 papers mapped to all 3 axes of the taxonomy: Target, Interface, and Mechanism. Highlighted rows indicate comprehensive coverage.',
        // Gaps section
        'gaps.title': 'Research Gaps',
        'gaps.intro': 'Open problems framed using the 3-axis taxonomy (Target \u00d7 Interface \u00d7 Mechanism).',
        'gap.high': 'High Impact',
        'gap.medium': 'Medium Impact',
        'gap.high_diff': 'High Difficulty',
        'gap.medium_diff': 'Medium Difficulty',
        'gap.no_papers': 'No papers yet',
        'gap.attr_title': 'Explicit Attribute Control',
        'gap.attr_desc': '"Show me items with attribute X and price < Y" \u2014 fine-grained attribute specification unexplored.',
        'gap.fair_title': 'Diversity and Fairness',
        'gap.fair_desc': 'Does autoregressive generation amplify popularity bias? How to enforce exposure equity?',
        'gap.feedback_title': 'Real-Time Feedback Loop',
        'gap.feedback_desc': '"Not this, more like that" \u2014 interactive refinement in real-time.',
        'gap.explain_title': 'Explainable Generation Path',
        'gap.explain_desc': 'Why did the model choose this Semantic ID sequence? Generation path explanation unexplored.',
        'gap.stake_title': 'Multi-Stakeholder Balance',
        'gap.stake_desc': 'User, business, and creator objectives. Creator welfare is ignored in current systems.',
        'gap.online_title': 'Online Learning for Semantic IDs',
        'gap.online_desc': 'How to update Semantic IDs with streaming data? Current systems require batch retraining.',
        'gap.stat_title': 'LLM Statistical Learning Limitation',
        'gap.stat_desc': 'LLMs struggle to learn collaborative signals due to strong semantic priors.',
        'gap.drift_title': 'Semantic Drift in Hierarchy',
        'gap.drift_desc': 'Errors in high-level tokens propagate irreversibly into wrong semantic subspaces.',
        'gap.cross_title': 'Cross-Domain Transfer',
        'gap.cross_desc': 'Can Semantic IDs trained in one domain transfer to another?',
        'gap.loop_title': 'Loop Scaling for GenRec',
        'gap.loop_desc': 'Can LoopCTR\'s recursive computation apply to Semantic ID generation?',
        // Thesis
        'thesis.title': 'Direction Thesis',
        'thesis.intro': 'Why controllability is THE bottleneck for generative recommendation — not generation quality.',
        'thesis.why_gen': 'Why Generative Rec Now?',
        'thesis.why_gen_desc': 'Traditional rec scores and ranks from a candidate set. Generative rec produces item sequences directly. This shifts the selection space to the generator — making control a first-class problem, not an afterthought.',
        'thesis.why_ctrl': 'Why Controllability Is the Bottleneck?',
        'thesis.why_ctrl_desc': 'Generation quality is proven (TIGER/GPR/OxygenREC in production). But generation without precise control can\'t replace traditional pipelines — can\'t enforce business constraints, can\'t guarantee fairness, can\'t respond to feedback.',
        'thesis.diff': 'How It Differs from LLM Alignment',
        'thesis.diff_desc': 'LLM alignment is single-user generation. Rec controllability is multi-stakeholder constrained search — user, platform, and creator interests conflict. RLHF/Constitutional AI don\'t directly apply.',
        'thesis.moat': 'Where the Moat Is',
        'thesis.moat_desc': 'Large models will level generation capability. Differentiation comes from the controllability stack — verifiable constraints, calibrated tradeoffs, and rollback-able decisions. This is where engineering and business moats intersect.',
        'thesis.insights_title': 'Core Insights',
        'thesis.i1': 'Semantic ID gives controllability its first "structured control interface" — the key leap over pure ID generation. Hierarchical codebooks are native control knobs.',
        'thesis.i2': 'Training-time control (Pref Opt) internalizes tradeoffs — fast but rigid. Inference-time control (Constrained Decoding) externalizes tradeoffs — slower but tunable. They complement, not replace.',
        'thesis.i3': 'The real engineering value isn\'t explainability — it\'s verifiable, constrainable, rollback-able control. Can you prove it worked? Can you undo it?',
        'thesis.i4': 'Future differentiation comes from the controllability stack, not the generation backbone. Generation will be commoditized; precise control won\'t.',
        // Priorities
        'pri.title': 'Strategic Priorities',
        'pri.intro': 'From research gaps to investment decisions: what to build, what to skip, and why this order.',
        'pri.p0_biz_title': 'Business-Constrained Decoding',
        'pri.p0_biz_desc': 'Minimum bar for gen-rec to go online. Without business constraint enforcement, it cannot replace traditional pipelines. Technically mature, high feasibility.',
        'pri.p0_attr_title': 'Explicit Attribute Control',
        'pri.p0_attr_desc': '"Show items with attribute X and price < Y" — fundamental capability with near-total blank in generative retrieval. Blocks gen-rec from replacing traditional search.',
        'pri.p0_eval_title': 'Controllability Evaluation',
        'pri.p0_eval_desc': 'Evidence infrastructure: control success rate, relevance tax, Pareto fronts, stability, rollback-ability. Without this, controllability stays at "looks like it works."',
        'pri.p1_fb_title': 'Real-Time Feedback Loop',
        'pri.p1_fb_desc': 'High impact but high complexity — not just a model problem. Involves system architecture, interaction product, and data pipelines. Build on P0 constraints first.',
        'pri.p1_stake_title': 'Multi-Stakeholder Balance',
        'pri.p1_stake_desc': 'User-platform-creator balance is key to long-term ecosystem health. More of a mechanism design problem than a pure algorithm problem.',
        'pri.p2_expl_title': 'Explainable Generation Paths',
        'pri.p2_expl_desc': 'High academic value, low business ROI. Users need correct results, not Semantic ID path explanations. May have value as internal debugging tool only.',
        'pri.timeline_short': '1-3 months',
        'pri.timeline_mid': '3-6 months',
        'pri.timeline_long': '6-12 months',
        'pri.value_high': 'High Business Value',
        'pri.value_med': 'Medium Business Value',
        'pri.value_low': 'Low Business Value',
        'pri.value_infra': 'Infrastructure',
        'pri.dont_title': 'What We Don\'t Do',
        'pri.direction': 'Direction',
        'pri.why_not': 'Why Not',
        'pri.no_gen': 'Pure generation accuracy race',
        'pri.no_gen_why': 'Large models will level generation capability — differentiation isn\'t here',
        'pri.no_llm': 'Direct LLM alignment transfer',
        'pri.no_llm_why': 'Rec is a multi-stakeholder problem; RLHF/Constitutional AI don\'t directly apply',
        'pri.no_expl': 'Over-invest in explainability',
        'pri.no_expl_why': 'Low user ROI, limited help for launch decisions',
        'pri.no_online': 'Full online learning',
        'pri.no_online_why': 'System complexity too high; use inference-time constraints + periodic retraining first',
        // Evaluation
        'pri.eval_title': 'Evaluation Framework',
        'pri.eval_intro': 'How to prove controllability works — without evaluation, it stays at "looks like it controls."',
        'pri.eval_csr': 'Control Success Rate',
        'pri.eval_csr_desc': 'CSR = items satisfying constraints / generated items. The fundamental metric: did the control actually work?',
        'pri.eval_tax': 'Relevance Tax',
        'pri.eval_tax_desc': '(NDCG_unconstrained - NDCG_constrained) / NDCG_unconstrained. Good systems: < 5% tax for > 90% control success.',
        'pri.eval_pareto': 'Pareto Front',
        'pri.eval_pareto_desc': 'Multi-objective tradeoff curves: relevance vs diversity, satisfaction vs revenue, accuracy vs fairness.',
        'pri.eval_stable': 'Stability & Rollback',
        'pri.eval_stable_desc': 'Consistency across runs, calibrated control strength, and safe rollback without irreversible side effects.',
        // Footer
        'footer.title': 'Controllable Recommendation Generation',
        'footer.subtitle': '3-Axis Research Taxonomy',
        'footer.copy': '\u00a9 2026 \u00b7 Last updated April 24'
    },
    zh: {
        // Nav
        'nav.overview': '概述',
        'nav.targets': '控制目标',
        'nav.interfaces': '控制接口',
        'nav.mechanisms': '控制机制',
        'nav.papers': '论文',
        'nav.gaps': '研究缺口',
        'nav.thesis': '方向判断',
        'nav.priorities': '战略优先级',
        // Hero
        'hero.title': '可控推荐生成',
        'hero.tagline': '生成式推荐系统中控制机制的3轴分类体系与研究综述',
        'hero.targets': '目标',
        'hero.interfaces': '接口',
        'hero.mechanisms': '机制',
        'hero.papers': '论文',
        // Overview
        'overview.title': '概述',
        'overview.intro': '如何控制生成式推荐系统的输出？本3轴分类体系沿正交维度组织控制：控制什么（目标）、如何传递控制（接口）、如何实现控制（机制）。',
        'overview.targets': '轴1：控制目标',
        'overview.targets_q': '我们在控制哪个实体？',
        'overview.target': '目标',
        'overview.question': '核心问题',
        'overview.interfaces': '轴2：控制接口',
        'overview.interfaces_q': '控制如何传递？',
        'overview.interface': '接口',
        'overview.mechanisms': '轴3：控制机制',
        'overview.mechanisms_q': '控制如何实现？',
        'overview.mechanism': '机制',
        'overview.stage': '阶段',
        // Overview — Target table
        'target.user': '用户',
        'target.user_q': '用户想要什么？',
        'target.item': '物品',
        'target.item_q': '物品应具备什么属性？',
        'target.business': '业务',
        'target.business_q': '平台优化什么目标？',
        // Overview — Interface table
        'iface.timing': '时序',
        'iface.timing_q': '控制在何时施加？',
        'iface.granularity': '粒度',
        'iface.granularity_q': '控制多细粒度？',
        'iface.explain': '可解释性',
        'iface.explain_q': '为什么推荐这个？',
        'iface.feedback': '反馈',
        'iface.feedback_q': '如何迭代优化？',
        // Overview — Mechanism table
        'mech.conditioning': '条件控制',
        'mech.preference': '偏好优化',
        'mech.decoding': '约束解码',
        'mech.post': '后处理',
        'stage.input': '输入',
        'stage.training': '训练',
        'stage.generation': '生成',
        'stage.post': '生成后',
        // Targets section
        'targets.title': '控制目标',
        'targets.intro': '我们在控制哪个实体？目标按利益方MECE划分。',
        'targets.user_tab': '用户控制',
        'targets.item_tab': '物品控制',
        'targets.business_tab': '业务控制',
        'targets.user_title': '用户控制（需求侧）',
        'targets.user_desc': '如何根据用户需求引导推荐。',
        'targets.item_title': '物品控制（供给侧）',
        'targets.item_desc': '如何根据物品属性引导推荐。',
        'targets.business_title': '业务控制（平台侧）',
        'targets.business_desc': '如何为平台目标引导推荐。',
        // User control details
        'user.explicit': '显式意图',
        'user.explicit_1': '自然语言指令 \u2192 OxygenREC, InstructRec',
        'user.explicit_2': '提示词模板 \u2192 P5',
        'user.implicit': '隐式偏好',
        'user.implicit_1': '偏好对 (DPO) \u2192 DPO, RankGR',
        'user.implicit_2': '序列模式 \u2192 TIGER, GPR',
        'user.multi': '多兴趣',
        'user.multi_1': '多头预测 \u2192 GPR, OneRanker',
        'user.multi_2': 'Beam多样性 \u2192 PROMISE',
        'user.insight': '核心洞察：OxygenREC的上下文推理指令将自然语言与生成主干连接。',
        // Item control details
        'item.semantic': '语义相似性',
        'item.semantic_1': '层次化语义ID \u2192 TIGER, GPR',
        'item.semantic_2': '上下文感知分词 \u2192 ActionPiece',
        'item.attribute': '属性匹配',
        'item.attribute_1': '约束解码 \u2192 GRank',
        'item.attribute_gap': '缺口：显式属性控制尚未探索',
        'item.insight': '核心洞察：语义ID层次结构实现从粗到细的控制。',
        // Business control details
        'biz.value': '价值优化',
        'biz.value_1': '价值感知微调 \u2192 GPR',
        'biz.value_2': '任务解耦 \u2192 OneRanker',
        'biz.value_3': '层次化DPO \u2192 RankGR',
        'biz.diversity': '多样性/公平性',
        'biz.diversity_1': 'Beam多样性 \u2192 PROMISE',
        'biz.diversity_gap': '缺口：生成式推荐中的公平性研究不足',
        'biz.insight': '核心洞察：OneRanker通过任务令牌分离兴趣与价值优化。',
        // Interfaces section
        'interfaces.title': '控制接口',
        'interfaces.intro': '控制如何传递？接口与目标正交——每个接口均适用于用户、物品和业务控制。',
        'interfaces.timing_tab': '时序',
        'interfaces.granularity_tab': '粒度',
        'interfaces.explainability_tab': '可解释性',
        'interfaces.feedback_tab': '反馈',
        // Timing
        'interfaces.timing_title': '控制时序',
        'interfaces.timing_desc': '控制在生成流水线的哪个阶段施加。',
        'timing.pre': '生成前',
        'timing.pre_1': '条件令牌、指令 \u2192 OxygenREC, P5',
        'timing.mid': '生成中',
        'timing.mid_1': '每步PRM引导 \u2192 PROMISE',
        'timing.post': '生成后',
        'timing.post_1': '重排序、精细化评分 \u2192 RankGR, GRank',
        'timing.insight': '核心洞察：PROMISE通过过程奖励模型在每一步施加控制——实现测试时缩放。',
        // Granularity
        'interfaces.granularity_title': '控制粒度',
        'interfaces.granularity_desc': '控制的精细程度。',
        'gran.coarse': '粗粒度',
        'gran.coarse_1': '类目、场景 \u2192 OxygenREC场景令牌',
        'gran.medium': '中粒度',
        'gran.medium_1': '语义ID层级 \u2192 TIGER层次结构',
        'gran.fine': '细粒度',
        'gran.fine_gap': '缺口：属性级控制基本未被探索',
        'gran.insight': '核心洞察：层次化语义ID天然支持多粒度——一个内置的控制旋钮。',
        // Explainability
        'interfaces.explainability_title': '控制可解释性',
        'interfaces.explainability_desc': '系统如何解释推荐结果的生成原因。',
        'expl.prompt': '基于提示',
        'expl.prompt_1': 'LLM生成解释 \u2192 PEPLER, HF4Rec',
        'expl.path': '路径追踪',
        'expl.path_gap': '缺口：语义ID生成路径的解释尚未探索',
        'expl.counter': '反事实',
        'expl.counter_1': '行为撤销 \u2192 User-Controllable-Rec',
        'expl.insight': '核心洞察：PRM分数可作为步级解释——将其可视化是一个开放机会。',
        // Feedback
        'interfaces.feedback_title': '控制反馈',
        'interfaces.feedback_desc': '用户如何迭代优化推荐结果。',
        'fb.conv': '对话式',
        'fb.conv_1': '多轮对话 \u2192 Chat-REC, TRIP',
        'fb.elicit': '偏好引导',
        'fb.elicit_1': '好奇心驱动查询 \u2192 CURIO',
        'fb.online': '在线学习',
        'fb.online_gap': '缺口：实时生成更新是一个开放问题',
        'fb.insight': '核心洞察：当前反馈主要通过条件控制实现——通过隐空间/解码机制闭环尚未探索。',
        // Mechanisms section
        'mechanisms.title': '控制机制',
        'mech.cond_desc': '通过在输入前添加令牌、指令或嵌入来引导生成，包括语义ID码组合。',
        'mech.cond_1': '控制令牌',
        'mech.cond_2': '指令遵循',
        'mech.cond_3': '嵌入注入',
        'mech.cond_4': '提示调优',
        'mech.cond_5': '码组合',
        'mech.pref_desc': '通过DPO/RLHF将生成与偏好对齐。',
        'mech.pref_3': '奖励建模',
        'mech.dec_desc': '在推理时通过PRM/ORM引导、码级约束和多头融合来控制输出。',
        'mech.dec_1': '过程奖励',
        'mech.dec_2': '引导式Beam搜索',
        'mech.dec_3': '精细化评分',
        'mech.dec_4': '结果奖励',
        'mech.dec_5': '语义ID约束',
        'mech.post_desc': '在解码器输出后进行重排序、过滤和多样化。',
        'mech.post_1': '价值重排序',
        'mech.post_2': 'MMR多样性',
        'mech.post_3': '公平性过滤',
        'mech.multi_note': '多目标是一个横切属性——任何流水线阶段都可以优化单个或多个目标。详见各机制卡片中的多目标变体。',
        // Papers section
        'papers.title': '论文映射',
        'papers.intro': '39篇论文映射到分类体系的全部3个轴：目标、接口和机制。高亮行表示覆盖全面。',
        // Gaps section
        'gaps.title': '研究缺口',
        'gaps.intro': '基于3轴分类体系（目标 \u00d7 接口 \u00d7 机制）的开放问题。',
        'gap.high': '高影响力',
        'gap.medium': '中等影响力',
        'gap.high_diff': '高难度',
        'gap.medium_diff': '中等难度',
        'gap.no_papers': '尚无论文',
        'gap.attr_title': '显式属性控制',
        'gap.attr_desc': '"展示属性X且价格<Y的物品"——细粒度属性控制尚未探索。',
        'gap.fair_title': '多样性与公平性',
        'gap.fair_desc': '自回归生成是否放大流行度偏差？如何保证曝光公平？',
        'gap.feedback_title': '实时反馈循环',
        'gap.feedback_desc': '"不要这个，要更像那个"——实时交互式优化。',
        'gap.explain_title': '可解释生成路径',
        'gap.explain_desc': '为什么模型选择这个语义ID序列？生成路径解释尚未探索。',
        'gap.stake_title': '多方利益平衡',
        'gap.stake_desc': '用户、业务和创作者目标。创作者福利在当前系统中被忽视。',
        'gap.online_title': '语义ID在线学习',
        'gap.online_desc': '如何用流式数据更新语义ID？当前系统需要批量重训练。',
        'gap.stat_title': 'LLM统计学习局限',
        'gap.stat_desc': 'LLM因强语义先验难以学习协同过滤信号。',
        'gap.drift_title': '层次生成中的语义漂移',
        'gap.drift_desc': '高层token错误不可逆地传播到错误的语义子空间。',
        'gap.cross_title': '跨域迁移',
        'gap.cross_desc': '在一个领域训练的语义ID能否迁移到另一个领域？',
        'gap.loop_title': 'GenRec的循环缩放',
        'gap.loop_desc': 'LoopCTR的递归计算能否应用于语义ID生成？',
        // Thesis
        'thesis.title': '方向判断',
        'thesis.intro': '为什么可控性是生成式推荐的核心瓶颈——而非生成精度。',
        'thesis.why_gen': '为什么现在要看生成式推荐？',
        'thesis.why_gen_desc': '传统推荐从候选集中挑选评分。生成式推荐直接生成物品序列。这将选择空间交给了生成器——控制从附属能力变成第一性问题。',
        'thesis.why_ctrl': '为什么可控性是核心瓶颈？',
        'thesis.why_ctrl_desc': '生成能力已被验证（TIGER/GPR/OxygenREC已工业部署）。但能生成不等于能上线——不能约束业务指标、不能保证公平、不能响应反馈，就无法替代传统 pipeline。',
        'thesis.diff': '与LLM对齐的区别',
        'thesis.diff_desc': 'LLM对齐是单用户生成。推荐可控性是多利益主体约束搜索——用户、平台、创作者利益冲突。RLHF/Constitutional AI 不直接适用。',
        'thesis.moat': '壁垒在哪里',
        'thesis.moat_desc': '大模型会抹平生成能力。差异化来自可控性技术栈——可验证的约束、可校准的权衡、可回退的决策。这是工程壁垒与业务壁垒的交汇点。',
        'thesis.insights_title': '核心洞察',
        'thesis.i1': 'Semantic ID 让可控性首次拥有"结构化控制接口"——相对纯 ID generation 的关键跃迁。层次化码本是天然的控制旋钮。',
        'thesis.i2': '训练时控制（偏好优化）内化权衡——快但不灵活。推理时控制（约束解码）外显权衡——慢但可调。两者互补，非替代。',
        'thesis.i3': '真正有工程价值的控制不是可解释性——而是可验证、可约束、可回退。能证明生效了吗？能撤销吗？',
        'thesis.i4': '未来差异化来自可控性技术栈，而非生成主干。生成能力会被商品化；精准控制不会。',
        // Priorities
        'pri.title': '战略优先级',
        'pri.intro': '从研究缺口到投资决策：做什么、不做什么、为什么这个顺序。',
        'pri.p0_biz_title': '业务约束解码',
        'pri.p0_biz_desc': '生成式推荐上线的最低门槛。不能执行业务约束就无法替代传统 pipeline。技术成熟，可行性高。',
        'pri.p0_attr_title': '显式属性控制',
        'pri.p0_attr_desc': '"展示属性X且价格<Y"——基础能力，在生成式检索中近乎空白。阻碍生成式推荐替代传统搜索。',
        'pri.p0_eval_title': '可控性评估体系',
        'pri.p0_eval_desc': '证据基础设施：控制成功率、相关性代价、Pareto曲线、稳定性、可回退性。没有评估，可控性停留在"看起来能控"。',
        'pri.p1_fb_title': '实时反馈闭环',
        'pri.p1_fb_desc': '影响大但工程复杂度高——不只是模型问题，涉及系统架构、交互产品和数据管道。先做好P0约束，再叠加反馈。',
        'pri.p1_stake_title': '多方利益平衡',
        'pri.p1_stake_desc': '用户-平台-创作者平衡是长期生态健康的关键。更多是机制设计问题而非纯算法问题。',
        'pri.p2_expl_title': '可解释生成路径',
        'pri.p2_expl_desc': '学术价值高，业务收益弱。用户需要结果正确，不需要 Semantic ID 路径解释。仅作内部调试工具可能有价值。',
        'pri.timeline_short': '1-3个月',
        'pri.timeline_mid': '3-6个月',
        'pri.timeline_long': '6-12个月',
        'pri.value_high': '高业务价值',
        'pri.value_med': '中业务价值',
        'pri.value_low': '低业务价值',
        'pri.value_infra': '基础设施',
        'pri.dont_title': '我们不做什么',
        'pri.direction': '方向',
        'pri.why_not': '为什么不做',
        'pri.no_gen': '纯生成精度竞赛',
        'pri.no_gen_why': '大模型会抹平生成能力差距，差异化不在这里',
        'pri.no_llm': '直接迁移LLM对齐方法',
        'pri.no_llm_why': '推荐是多主体问题，RLHF/Constitutional AI 不直接适用',
        'pri.no_expl': '过度投资可解释性',
        'pri.no_expl_why': '对用户收益低，对上线决策帮助有限',
        'pri.no_online': '全量在线学习',
        'pri.no_online_why': '系统复杂度过高，先用推理时约束+周期性重训',
        // Evaluation
        'pri.eval_title': '评估体系',
        'pri.eval_intro': '如何证明可控性有效——没有评估，可控性停留在"看起来能控"。',
        'pri.eval_csr': '控制成功率',
        'pri.eval_csr_desc': 'CSR = 满足约束的物品数 / 生成物品总数。最基本的度量：控制到底生效了吗？',
        'pri.eval_tax': '相关性代价',
        'pri.eval_tax_desc': '(无约束NDCG - 有约束NDCG) / 无约束NDCG。好的系统：<5%代价下>90%控制成功率。',
        'pri.eval_pareto': 'Pareto曲线',
        'pri.eval_pareto_desc': '多目标权衡曲线：相关性vs多样性、满意度vs收入、准确性vs公平性。',
        'pri.eval_stable': '稳定性与可回退',
        'pri.eval_stable_desc': '多次运行一致性、控制强度校准、安全回退且无不可逆副作用。',
        // Footer
        'footer.title': '可控推荐生成',
        'footer.subtitle': '3轴研究综述',
        'footer.copy': '\u00a9 2026 \u00b7 最后更新 4月24日'
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
