// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('panel-' + target).classList.add('active');
    });
});

// Translations
const translations = {
    en: {
        // Nav
        "nav.overview": "Overview",
        "nav.targets": "Targets",
        "nav.interfaces": "Interfaces",
        "nav.mechanisms": "Mechanisms",
        "nav.industry": "Industry",
        "nav.gaps": "Gaps",
        // Hero
        "hero.title": "Controllable Entertainment Livestream Recommendation",
        "hero.tagline": "Mapping the 3-axis controllable recommendation taxonomy to entertainment livestream, with gift value and consume value as core metrics",
        "hero.axes": "Axes Mapped",
        "hero.gift": "Gift Value",
        "hero.click": "Consume Value",
        "hero.gaps": "Research Gaps",
        // Overview
        "overview.title": "Why Livestream Is Different",
        "overview.intro": "Entertainment livestream has 4 unique properties that make controllability both harder and more important than static-item recommendation.",
        "overview.properties": "Unique Properties",
        "overview.property": "Property",
        "overview.static": "Static Rec",
        "overview.live": "Livestream",
        "overview.dynamic": "Content Dynamism",
        "overview.dynamic_s": "Attributes fixed",
        "overview.dynamic_l": "Changes every second",
        "overview.engage": "Engagement Depth",
        "overview.engage_s": "Single click",
        "overview.engage_l": "10min+ viewing",
        "overview.realtime": "Real-time Feedback",
        "overview.realtime_s": "Post-consumption",
        "overview.realtime_l": "Comments, gifts during consumption",
        "overview.creator": "Creator Ecosystem",
        "overview.creator_s": "Supply stable",
        "overview.creator_l": "Streamer cold-start, fairness",
        "overview.metrics": "Core Metrics",
        "overview.metric": "Metric",
        "overview.definition": "Definition",
        "overview.role": "Role",
        "overview.gift_val": "Gift Value",
        "overview.gift_def": "Total gifts to streamer",
        "overview.gift_role": "Revenue",
        "overview.click_rate": "Consume Value",
        "overview.click_def": "Time, comments, follows, engagement",
        "overview.click_role": "Engagement",
        "overview.insight": "Gift value is unique to livestream — a real-time, voluntary revenue signal reflecting entertainment quality, not purchase intent.",
        // Targets
        "targets.title": "Axis 1: Control Targets",
        "targets.intro": "What entity are we steering? Mapped from static-item to livestream context.",
        "targets.user_tab": "User",
        "targets.item_tab": "Item",
        "targets.biz_tab": "Business",
        "targets.user_title": "User Control (Demand-Side)",
        "targets.user_desc": "Gift propensity, entertainment mood, watch duration intent.",
        "targets.item_title": "Item Control (Supply-Side)",
        "targets.item_desc": "Dynamic stream = sequence of 30s segments with real-time changing attributes.",
        "targets.biz_title": "Business Control (Platform-Side)",
        "targets.biz_desc": "Gift value, consume value, and streamer ecosystem health.",
        // Target User
        "tu.explicit": "Explicit Intent",
        "tu.explicit_1": "\"I want gaming streams\" — genre/mood intent",
        "tu.implicit": "Implicit Preference",
        "tu.implicit_1": "Gift history (strongest signal), watch duration, comment sentiment",
        "tu.context": "Context State",
        "tu.context_1": "Late-night vs daytime content, social context",
        "tu.multi": "Multi-Interest",
        "tu.multi_1": "Gaming + singing + chat — multiple entertainment genres",
        "tu.insight": "Key: Gift history provides a much stronger preference signal than clicks. A user who gifts 100元 to a singer has expressed far more intent than one who clicked.",
        // Target Item
        "ti.content": "Content Type",
        "ti.content_1": "Stream genre: gaming / singing / chat / outdoor",
        "ti.attr": "Attributes",
        "ti.attr_1": "Streamer style, energy level, interaction intensity, audience size",
        "ti.semantic": "Semantic Similarity",
        "ti.semantic_1": "Foresight Semantic ID: 30s segment → VQ-VAE → [genre, style, moment_type]",
        "ti.quality": "Quality Signal",
        "ti.quality_1": "Real-time: comments/min, gifts/min, viewer count trend",
        "ti.insight": "Key: A livestream is not one item — it's a sequence of evolving micro-items. Controlling \"when to recommend\" (during high-light) is where real value lies.",
        // Target Business
        "tb.value": "Value Optimization",
        "tb.value_1": "Gift value maximization: α×consume_value + β×gift_value",
        "tb.strategic": "Strategic Goals",
        "tb.strategic_1": "New streamer cold-start, genre diversity, ecosystem health",
        "tb.fairness": "Diversity / Fairness",
        "tb.fairness_1": "Prevent winner-take-all — streamers who get no exposure will quit",
        "tb.compliance": "Compliance",
        "tb.compliance_1": "Real-time content moderation, age-appropriate gating",
        "tb.insight": "Key: Streamer ecosystem is more fragile than product catalogs. A streamer who gets no exposure will quit (unlike a product that stays in inventory).",
        // Interfaces
        "interfaces.title": "Axis 2: Control Interfaces",
        "interfaces.intro": "How is control delivered? Real-time content creates fundamentally different interface requirements.",
        "interfaces.timing_tab": "Timing",
        "interfaces.gran_tab": "Granularity",
        "interfaces.expl_tab": "Explainability",
        "interfaces.fb_tab": "Feedback",
        "interfaces.timing_title": "Control Timing",
        "interfaces.timing_desc": "When in the pipeline control is applied — mid-generation is unique to livestream.",
        "interfaces.gran_title": "Control Granularity",
        "interfaces.gran_desc": "How fine-grained — from genre to 30-second segments.",
        "interfaces.expl_title": "Control Explainability",
        "interfaces.expl_desc": "Why this recommendation — temporal explanations become possible.",
        "interfaces.fb_title": "Control Feedback",
        "interfaces.fb_desc": "Continuous real-time signals instead of post-hoc ratings.",
        // Timing
        "lt.pre": "Pre-Generation",
        "lt.pre_1": "User opens feed → rank streams by predicted consume value and gift propensity",
        "lt.mid": "Mid-Generation",
        "lt.mid_1": "User watching → decide when to surface next stream. Interrupting during high-light hurts gift value; waiting during lull loses the user",
        "lt.post": "Post-Generation",
        "lt.post_1": "Rerank by real-time state — is streamer still live? Current energy? Recent gift surge?",
        "lt.insight": "Key: Mid-generation timing is unique to livestream. The system must decide WHEN to intervene, not just WHAT to recommend.",
        // Granularity
        "lg.coarse": "Coarse",
        "lg.coarse_1": "Stream type: gaming / singing / chat / outdoor",
        "lg.medium": "Medium",
        "lg.medium_1": "Streamer style + current content theme",
        "lg.fine": "Fine",
        "lg.fine_1": "This 30s window is a high-light → boost now. Maps to Foresight Semantic ID",
        "lg.insight": "Key: Foresight's 30s segment Semantic ID enables fine-grained control — distinguish \"this streamer right now\" from \"5 minutes ago.\"",
        // Explainability
        "le.prompt": "Prompt-Based",
        "le.prompt_1": "\"This streamer matches your interest in gaming\"",
        "le.moment": "Moment-Based",
        "le.moment_1": "\"This streamer is in a high-energy moment right now\" — real-time state as explanation",
        "le.social": "Social Proof",
        "le.social_1": "\"500 viewers are gifting right now\" — crowd signal as explanation",
        "le.insight": "Key: Livestream enables temporal explanations — \"why now\" is as important as \"why this streamer.\"",
        // Feedback
        "lf.realtime": "Implicit Real-time",
        "lf.realtime_1": "Watch duration, comments, gifts, follows, screen-off — continuous during consumption",
        "lf.gift": "Gift as Feedback",
        "lf.gift_1": "Strongest positive signal. Amount provides continuous preference value, not binary",
        "lf.leave": "Leave as Feedback",
        "lf.leave_1": "When they leave matters — leaving during lull vs high-light mean different things",
        "lf.insight": "Key: A gift mid-stream is both a business metric AND a feedback signal. This creates a closed loop: feedback → update recommendation of the SAME stream to other users.",
        // Mechanisms
        "mechanisms.title": "Axis 3: Control Mechanisms",
        "mechanisms.intro": "How is control implemented? Each mechanism maps to livestream-specific signals and techniques.",
        "stage.input": "Input",
        "stage.training": "Training",
        "stage.generation": "Generation",
        "stage.post": "Post-generation",
        "mech.conditioning": "Conditioning",
        "mech.cond_desc": "Segment Semantic ID, streamer profile tokens, real-time state embedding as inputs.",
        "mech.preference": "Preference Optimization",
        "mech.pref_desc": "DPO on gift/consume value preference pairs with natural hierarchy.",
        "mech.decoding": "Constrained Decoding",
        "mech.dec_desc": "High-light moment detection as real-time PRM, stream-state-aware beam search.",
        "mech.post": "Post-Processing",
        "mech.post_desc": "Multi-signal reranking with real-time state refresh at high frequency.",
        "mc.sid": "Segment Semantic ID",
        "mc.profile": "Streamer Profile",
        "mc.state": "Real-time State",
        "mc.context": "Context Tokens",
        "mp.gift_dpo": "Gift-based DPO",
        "mp.hier_dpo": "Hierarchical DPO",
        "mp.click_opt": "Consume Value Opt",
        "mp.joint": "Joint Training",
        "md.prm": "High-light PRM",
        "md.beam": "State-aware Beam",
        "md.constraint": "Segment Constraints",
        "md.crowd": "Crowd Signals",
        "mpp.rerank": "Multi-signal Reranking",
        "mpp.refresh": "State Refresh",
        "mpp.diversity": "Streamer Diversity",
        "mpp.fairness": "Fairness Bonus",
        // Industry
        "industry.title": "Industry Grounding",
        "industry.intro": "Two Kuaishou papers provide the industrial foundation for this taxonomy mapping.",
        "industry.foresight_desc": "VQ-VAE Semantic ID for 30s livestream segments. Enables segment-level recall and recommendation.",
        "industry.live_desc": "High-light moment detection and future prediction. Deployed at scale for real-time stream quality scoring.",
        "industry.tech": "Technique",
        "industry.mapping": "Taxonomy Mapping",
        "industry.f_sid": "30s Segment Semantic ID",
        "industry.f_next": "Next-SID Prediction",
        "industry.f_recall": "Segment-level Recall",
        "industry.l_highlight": "High-light Detection",
        "industry.l_predict": "Future Prediction",
        "industry.l_rerank": "Real-time Reranking",
        "industry.insight": "LiveForesighter's high-light detection is essentially a real-time PRM — it scores \"is this moment worth recommending?\" at each time step, directly analogous to PROMISE's process reward model.",
        // Gaps
        "gaps.title": "Research Gaps",
        "gaps.intro": "5 gaps unique to entertainment livestream, identified through the 3-axis taxonomy mapping.",
        "gap.l1_title": "Temporal Semantic ID Evolution",
        "gap.l1_desc": "No work models transitions between segments. Predicting \"high-light in 2 minutes\" enables proactive recommendation — boosting consume value by timing.",
        "gap.l4_title": "Gift Value Preference Hierarchy",
        "gap.l4_desc": "Gift amounts have natural hierarchy (大额 > 小额 > 评论 > 点击 > 跳过). No work applies Listwise DPO to this continuous signal.",
        "gap.l2_title": "Real-time Feedback as Decoding Signal",
        "gap.l2_desc": "Gift and comment signals arrive continuously but only used for post-processing. Feeding them into decoding could leverage social proof and gifting contagion.",
        "gap.l5_title": "Cross-Stream Session Control",
        "gap.l5_desc": "Users hop between streams. Interrupting during high-light hurts gift value; waiting during lull loses the user. No work optimizes transition timing.",
        "gap.l3_title": "Streamer Cold-Start Fairness",
        "gap.l3_desc": "New streamers have no gift history and no Semantic ID history. The \"item\" doesn't exist until the stream starts.",
        "gap.medium_diff": "Medium Difficulty",
        "gap.high_diff": "High Difficulty",
        "gap.impact_click": "High Consume Value Impact",
        "gap.impact_gift": "High Gift Value Impact",
        "gap.impact_both": "High Consume + Gift Impact",
        "gap.impact_gift_m": "Medium Gift Value Impact",
        "gaps.matrix_title": "Priority Matrix",
        "gaps.gap": "Gap",
        "gaps.coordinates": "Coordinates",
        "gaps.click_impact": "Consume Value",
        "gaps.gift_impact": "Gift Value",
        "gaps.difficulty": "Difficulty",
        "gaps.priority": "Priority",
        "gaps.m_l1": "L1 Temporal SID",
        "gaps.m_l4": "L4 Gift Hierarchy",
        "gaps.m_l2": "L2 RT Feedback",
        "gaps.m_l5": "L5 Cross-Stream",
        "gaps.m_l3": "L3 Cold-Start",
        "gaps.roadmap": "Recommended: L1 + L4 first — high impact, medium difficulty, complementary (L1 provides representation, L4 provides training signal).",
        // Footer
        "footer.title": "Controllable Livestream Recommendation",
        "footer.subtitle": "3-Axis Taxonomy Mapping for Entertainment Livestream"
    },
    zh: {
        // Nav
        "nav.overview": "概览",
        "nav.targets": "控制目标",
        "nav.interfaces": "控制接口",
        "nav.mechanisms": "控制机制",
        "nav.industry": "工业实践",
        "nav.gaps": "研究缺口",
        // Hero
        "hero.title": "可控娱乐直播推荐",
        "hero.tagline": "将3轴可控推荐分类体系映射到娱乐直播场景，以礼物价值和消费价值为核心指标",
        "hero.axes": "轴映射",
        "hero.gift": "礼物价值",
        "hero.click": "消费价值",
        "hero.gaps": "研究缺口",
        // Overview
        "overview.title": "为什么直播推荐不同",
        "overview.intro": "娱乐直播推荐具有4个静态物品推荐不具备的特性，使可控性更加困难也更加重要。",
        "overview.properties": "独特属性",
        "overview.property": "属性",
        "overview.static": "静态推荐",
        "overview.live": "直播推荐",
        "overview.dynamic": "内容动态性",
        "overview.dynamic_s": "属性固定",
        "overview.dynamic_l": "内容逐秒变化",
        "overview.engage": "参与深度",
        "overview.engage_s": "单次点击",
        "overview.engage_l": "10分钟+持续观看",
        "overview.realtime": "实时反馈",
        "overview.realtime_s": "消费后评分",
        "overview.realtime_l": "评论、礼物在消费中持续到达",
        "overview.creator": "创作者生态",
        "overview.creator_s": "供给侧稳定",
        "overview.creator_l": "主播冷启动、曝光公平",
        "overview.metrics": "核心指标",
        "overview.metric": "指标",
        "overview.definition": "定义",
        "overview.role": "角色",
        "overview.gift_val": "礼物价值",
        "overview.gift_def": "用户向主播赠送礼物总额",
        "overview.gift_role": "收入指标",
        "overview.click_rate": "消费价值",
        "overview.click_def": "用户时长、评论、关注等正向行为",
        "overview.click_role": "参与指标",
        "overview.insight": "礼物价值是直播独有的——实时、自愿的收入信号，反映娱乐质量而非购买意图。",
        // Targets
        "targets.title": "轴1：控制目标",
        "targets.intro": "我们在控制哪个实体？从静态物品到直播场景的映射。",
        "targets.user_tab": "用户",
        "targets.item_tab": "物品",
        "targets.biz_tab": "业务",
        "targets.user_title": "用户控制（需求侧）",
        "targets.user_desc": "打赏倾向、娱乐情绪、观看时长意图。",
        "targets.item_title": "物品控制（供给侧）",
        "targets.item_desc": "动态直播流 = 30秒片段序列，属性实时变化。",
        "targets.biz_title": "业务控制（平台侧）",
        "targets.biz_desc": "礼物价值、消费价值和主播生态健康。",
        // Target User
        "tu.explicit": "显式意图",
        "tu.explicit_1": ""我想看游戏直播" — 类型/情绪意图",
        "tu.implicit": "隐式偏好",
        "tu.implicit_1": "打赏历史（最强信号）、观看时长模式、评论情感",
        "tu.context": "上下文状态",
        "tu.context_1": "深夜 vs 白天内容差异、社交场景",
        "tu.multi": "多兴趣",
        "tu.multi_1": "游戏 + 唱歌 + 聊天 — 多种娱乐类型",
        "tu.insight": "关键：打赏历史提供远强于点击的偏好信号。向歌手主播打赏100元的用户，比仅点击过的用户表达了更多意图。",
        // Target Item
        "ti.content": "内容类型",
        "ti.content_1": "直播类型：游戏/唱歌/聊天/户外",
        "ti.attr": "属性",
        "ti.attr_1": "主播风格、能量值、互动强度、观众规模",
        "ti.semantic": "语义相似",
        "ti.semantic_1": "Foresight Semantic ID：30秒片段 → VQ-VAE → [类型, 风格, 时刻类型]",
        "ti.quality": "质量信号",
        "ti.quality_1": "实时指标：评论/分钟、礼物/分钟、观众趋势",
        "ti.insight": "关键：直播不是一个物品——它是一连串不断演变的微物品。控制"何时推荐"（在高光时刻）才是真正的价值所在。",
        // Target Business
        "tb.value": "价值优化",
        "tb.value_1": "礼物价值最大化：α×消费价值 + β×礼物价值",
        "tb.strategic": "战略目标",
        "tb.strategic_1": "新主播冷启动、类型多样性、生态健康",
        "tb.fairness": "多样性/公平性",
        "tb.fairness_1": "防止赢者通吃——得不到曝光的主播会流失",
        "tb.compliance": "合规约束",
        "tb.compliance_1": "实时内容审核、年龄适宜性管控",
        "tb.insight": "关键：主播生态比商品目录更脆弱。得不到曝光的主播会离开（不像商品会留在库存中）。",
        // Interfaces
        "interfaces.title": "轴2：控制接口",
        "interfaces.intro": "控制如何传递？实时内容创造了根本不同的接口需求。",
        "interfaces.timing_tab": "时序",
        "interfaces.gran_tab": "粒度",
        "interfaces.expl_tab": "可解释性",
        "interfaces.fb_tab": "反馈",
        "interfaces.timing_title": "控制时序",
        "interfaces.timing_desc": "控制在流水线的哪个阶段施加——生成中控制是直播独有的。",
        "interfaces.gran_title": "控制粒度",
        "interfaces.gran_desc": "控制的精细程度——从类型到30秒片段。",
        "interfaces.expl_title": "控制可解释性",
        "interfaces.expl_desc": "为什么推荐这个——时间维度的解释成为可能。",
        "interfaces.fb_title": "控制反馈",
        "interfaces.fb_desc": "连续实时信号替代事后评分。",
        // Timing
        "lt.pre": "生成前",
        "lt.pre_1": "用户打开信息流 → 按预测消费价值和打赏倾向排序直播间",
        "lt.mid": "生成中",
        "lt.mid_1": "用户正在观看 → 决定何时推荐下一个直播间。在高光时刻打断损害礼物价值；在低谷等待过久失去用户",
        "lt.post": "生成后",
        "lt.post_1": "按实时状态重排——主播是否还在播？当前能量值？最近打赏潮？",
        "lt.insight": "关键：生成中时序是直播独有的。系统必须决定何时介入，而非仅仅推荐什么。",
        // Granularity
        "lg.coarse": "粗粒度",
        "lg.coarse_1": "直播类型：游戏/唱歌/聊天/户外",
        "lg.medium": "中粒度",
        "lg.medium_1": "主播风格 + 当前内容主题",
        "lg.fine": "细粒度",
        "lg.fine_1": "这30秒是高光时刻 → 立即提权。对应 Foresight Semantic ID",
        "lg.insight": "关键：Foresight 的30秒片段 Semantic ID 实现了细粒度控制——区分"这个主播现在"和"5分钟前"。",
        // Explainability
        "le.prompt": "基于提示",
        "le.prompt_1": ""这个主播与你的游戏兴趣匹配"",
        "le.moment": "基于时刻",
        "le.moment_1": ""这个主播正处于高能时刻" — 实时状态作为解释",
        "le.social": "社交证明",
        "le.social_1": ""500位观众正在打赏" — 人群信号作为解释",
        "le.insight": "关键：直播支持时间维度的解释——"为什么是现在"和"为什么是这个主播"同样重要。",
        // Feedback
        "lf.realtime": "隐式实时",
        "lf.realtime_1": "观看时长、评论、礼物、关注、息屏——消费过程中持续到达",
        "lf.gift": "礼物即反馈",
        "lf.gift_1": "最强正向信号。金额提供连续偏好值，而非二值信号",
        "lf.leave": "离开即反馈",
        "lf.leave_1": "何时离开很重要——在低谷期离开和在高光时刻离开含义不同",
        "lf.insight": "关键：观看中的打赏既是业务指标又是反馈信号。这创造了闭环：反馈 → 更新对同一直播间向其他用户的推荐。",
        // Mechanisms
        "mechanisms.title": "轴3：控制机制",
        "mechanisms.intro": "控制如何实现？每种机制映射到直播特有的信号和技术。",
        "stage.input": "输入",
        "stage.training": "训练",
        "stage.generation": "生成",
        "stage.post": "生成后",
        "mech.conditioning": "条件控制",
        "mech.cond_desc": "片段 Semantic ID、主播画像令牌、实时状态嵌入作为输入。",
        "mech.preference": "偏好优化",
        "mech.pref_desc": "基于礼物/消费价值偏好对的 DPO，具有天然层次结构。",
        "mech.decoding": "约束解码",
        "mech.dec_desc": "高光时刻检测作为实时 PRM，直播状态感知的 Beam 搜索。",
        "mech.post": "后处理",
        "mech.post_desc": "多信号重排序，高频实时状态刷新。",
        "mc.sid": "片段 Semantic ID",
        "mc.profile": "主播画像",
        "mc.state": "实时状态",
        "mc.context": "上下文令牌",
        "mp.gift_dpo": "礼物 DPO",
        "mp.hier_dpo": "层次化 DPO",
        "mp.click_opt": "消费价值优化",
        "mp.joint": "联合训练",
        "md.prm": "高光 PRM",
        "md.beam": "状态感知 Beam",
        "md.constraint": "片段约束",
        "md.crowd": "人群信号",
        "mpp.rerank": "多信号重排序",
        "mpp.refresh": "状态刷新",
        "mpp.diversity": "主播多样性",
        "mpp.fairness": "公平性加分",
        // Industry
        "industry.title": "工业实践映射",
        "industry.intro": "两篇快手论文提供了本分类映射的工业基础。",
        "industry.foresight_desc": "VQ-VAE Semantic ID 用于30秒直播片段。实现片段级召回和推荐。",
        "industry.live_desc": "高光时刻检测和未来预测。大规模部署用于实时直播质量评分。",
        "industry.tech": "技术",
        "industry.mapping": "分类映射",
        "industry.f_sid": "30秒片段 Semantic ID",
        "industry.f_next": "下一片段预测",
        "industry.f_recall": "片段级召回",
        "industry.l_highlight": "高光时刻检测",
        "industry.l_predict": "未来预测",
        "industry.l_rerank": "实时重排序",
        "industry.insight": "LiveForesighter 的高光检测本质上是实时 PRM——它为每个时间步评分"这个时刻值得推荐吗？"，直接类比 PROMISE 的过程奖励模型。",
        // Gaps
        "gaps.title": "研究缺口",
        "gaps.intro": "通过3轴分类映射识别的5个直播特有研究缺口。",
        "gap.l1_title": "时序 Semantic ID 演化",
        "gap.l1_desc": "没有工作建模片段之间的转换。预测"2分钟后进入高光"将实现前瞻性推荐——通过时机提升消费价值。",
        "gap.l4_title": "礼物价值偏好层次",
        "gap.l4_desc": "礼物金额天然具有层次结构（大额 > 小额 > 评论 > 点击 > 跳过）。没有工作将 Listwise DPO 应用于这种连续信号。",
        "gap.l2_title": "实时反馈作为解码信号",
        "gap.l2_desc": "礼物和评论信号持续到达但仅用于后处理。将其注入解码过程可利用社交证明和打赏传染性。",
        "gap.l5_title": "跨直播间会话控制",
        "gap.l5_desc": "用户在直播间之间跳转。在高光时刻打断损害礼物价值；在低谷等待过久失去用户。没有工作优化切换时机。",
        "gap.l3_title": "主播冷启动公平性",
        "gap.l3_desc": "新主播没有打赏历史和 Semantic ID 历史。"物品"在开播前不存在。",
        "gap.medium_diff": "中等难度",
        "gap.high_diff": "高难度",
        "gap.impact_click": "高消费价值影响",
        "gap.impact_gift": "高礼物价值影响",
        "gap.impact_both": "高消费价值+礼物影响",
        "gap.impact_gift_m": "中等礼物价值影响",
        "gaps.matrix_title": "优先级矩阵",
        "gaps.gap": "缺口",
        "gaps.coordinates": "坐标",
        "gaps.click_impact": "消费价值",
        "gaps.gift_impact": "礼物价值",
        "gaps.difficulty": "难度",
        "gaps.priority": "优先级",
        "gaps.m_l1": "L1 时序SID",
        "gaps.m_l4": "L4 礼物层次",
        "gaps.m_l2": "L2 实时反馈",
        "gaps.m_l5": "L5 跨直播间",
        "gaps.m_l3": "L3 冷启动",
        "gaps.roadmap": "推荐路线：先做 L1 + L4——影响大、难度适中、互补（L1提供表示能力，L4提供训练信号）。",
        // Footer
        "footer.title": "可控娱乐直播推荐",
        "footer.subtitle": "3轴分类体系的直播场景映射"
    }
};

// Language switching
function switchLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
});

// Restore language
const savedLang = localStorage.getItem('lang');
if (savedLang) switchLanguage(savedLang);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
    });
});

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.header__nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 100) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
});

// Mobile menu
const menuBtn = document.querySelector('.header__menu');
const nav = document.querySelector('.header__nav');
if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}
