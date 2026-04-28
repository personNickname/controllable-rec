// Collapsible toggle
document.querySelectorAll('.collapsible__toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('open');
        btn.nextElementSibling.classList.toggle('open');
    });
});

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
        'nav.business': 'Business',
        'nav.deployment': 'Deployment',
        // Hero
        'hero.title': 'Controllable Recommendation Generation',
        'hero.tagline': 'A 3-axis taxonomy and research synthesis of control mechanisms in generative recommendation systems',
        'hero.targets': 'Targets',
        'hero.interfaces': 'Interfaces',
        'hero.mechanisms': 'Mechanisms',
        'hero.papers': 'Papers',
        'hero.gift': 'Gift Value',
        'hero.consume': 'Consume Value',
        // Overview
        'overview.title': 'Overview',
        'overview.intro': 'How can we steer what a generative recommender produces? This 3-axis taxonomy organizes control along orthogonal dimensions: what to steer (Target), how to deliver control (Interface), and how to implement it (Mechanism).',
        'overview.punchline': 'Without enforceable control, gen-rec cannot replace production pipelines.',
        'overview.targets': 'Axis 1: Control Target',
        'overview.targets_q': 'What entity are we steering?',
        'overview.target': 'Target',
        'overview.question': 'Question',
        'overview.interfaces': 'Axis 2: Control Interface',
        'overview.interfaces_q': 'How is control delivered?',
        'overview.interface': 'Interface',
        'overview.mechanisms': 'Axis 3: Control Mechanism',
        'overview.mechanisms_q': 'How is control implemented?',
        'overview.axes_heading': 'Three Axes',
        'overview.pipeline_heading': 'Control Mechanisms Pipeline',
        'overview.cond_brief': 'Control tokens, instructions, embeddings prepended to steer generation.',
        'overview.pref_brief': 'Aligning generation with preferences via DPO/RLHF.',
        'overview.dec_brief': 'PRM/ORM guidance and code-level constraints during inference.',
        'overview.post_brief': 'Reranking, filtering, and diversifying after decoder output.',
        'overview.mechanism': 'Mechanism',
        'overview.stage': 'Stage',
        // Overview — Livestream comparison
        'overview.live_heading': 'Livestream Problems We Address',
        'overview.property': 'Problem',
        'overview.static_rec': 'Without Controllability',
        'overview.live_rec': 'With Our Taxonomy',
        'overview.dynamic': 'Dynamic Content',
        'overview.dynamic_s': 'Recommend stale snapshots, miss high-light moments',
        'overview.dynamic_l': 'Segment SID captures real-time state → recommend at peak moments',
        'overview.engage': 'Deep Engagement',
        'overview.engage_s': 'One-shot ranking, no session awareness',
        'overview.engage_l': 'Timing control decides when to transition between streams',
        'overview.realtime': 'Real-time Signals',
        'overview.realtime_s': 'Feedback only used in post-processing',
        'overview.realtime_l': 'Signals injected into decoding (PRM) for immediate response',
        'overview.creator': 'Creator Ecosystem',
        'overview.creator_s': 'New streamers starve, top dominate',
        'overview.creator_l': 'Business constraints enforce cold-start fairness in generation',
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
        // Papers section
        'papers.title': 'Paper Mapping',
        'papers.intro': '39 papers mapped to all 3 axes of the taxonomy: Target, Interface, and Mechanism. Highlighted rows indicate comprehensive coverage.',
        'papers.toggle': 'Show Full Paper Matrix (39 papers)',
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
        'gap.low_pri': 'Low Priority',
        'gap.explain_title': 'Explainable Generation Path',
        'gap.explain_desc': 'Least-covered area in literature — but deliberately deprioritized. High academic value, low business ROI. Useful as internal debugging tool only.',
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
        'thesis.punchline': 'Generation moves selection into the model. Control becomes first-class.',
        // Three Core Problems
        'thesis.p1_title': 'P1: Non-Stationary Item Vocabulary',
        'thesis.p1_desc': 'Gen-rec (TIGER, GPR, HSTU) assumes a fixed codebook — items encoded once, Semantic IDs stable. In livestream, the same stream is a different "item" every 30 seconds. Online training achieves <5% error on dynamic items, but the mechanism is unexplained. Without understanding why, we can\'t control or guarantee it.',
        'thesis.p1_evidence': '39 papers assume fixed codebooks',
        'thesis.p1_refs': 'Foresight, OneLive, HSTU, MERGE',
        'thesis.p2_title': 'P2: Cross-Domain Interest Transfer',
        'thesis.p2_desc': 'Livestream is one content type in a mixed feed. Cross-domain bridges already exist — e.g., "living" content where clicking an author\'s profile enters their active liveroom. But gen-rec models operate in isolated vocabularies per domain. How to condition livestream generation on interest signals from short video, articles, and other content types?',
        'thesis.p2_evidence': 'FARM tackles cross-domain, not in gen-rec',
        'thesis.p2_refs': 'FARM, Moment&Cross, SL-MGAC',
        'thesis.p3_title': 'P3: Sparse & Delayed Reward',
        'thesis.p3_desc': 'Gift value — the core business metric — has ~1% event density and arrives 10-30 minutes after the recommendation decision. Current DPO/RLHF needs dense, timely preference pairs. With gifts this sparse and this late, credit assignment to specific stream moments is ambiguous. This directly blocks gift-based preference optimization.',
        'thesis.p3_evidence': '0 gen-rec papers solve delayed reward',
        'thesis.p3_refs': 'MMBee (KDD\'24), FARM, Sliver, Moment&Cross',
        'thesis.problems_insight': 'These three problems compound: non-stationary vocabulary means the stream changed between recommendation and gift (P1×P3); cross-domain signals are needed precisely because in-domain gift signals are too sparse (P2×P3). A solution must address them jointly.',
        // Thesis — Livestream
        'thesis.scene_title': 'Livestream Recommendation',
        'thesis.solve': 'What We Solve',
        'thesis.problem': 'Problem',
        'thesis.solution': 'Solution',
        'thesis.s_p1': 'Content changes every second',
        'thesis.s_s1': 'Segment Semantic ID encodes 30s snapshots as discrete tokens for generation',
        'thesis.s_p2': 'Real-time feedback: gifts/comments arrive rapidly',
        'thesis.s_s2': 'Feedback signals injected into decoding as real-time PRM',
        'thesis.s_p3': 'Generated results must be valid — only active liverooms can be shown',
        'thesis.s_s3': 'Constrained decoding filters invalid (offline) candidates at generation time',
        'thesis.s_p4': 'Livestream is one content type among many — need cross-domain interest transfer',
        'thesis.s_s4': 'Conditioning on user interest from other domains to generate high-value livestream recommendations',
        'thesis.metrics': 'Core Metrics',
        'thesis.metric': 'Metric',
        'thesis.def': 'Definition',
        'thesis.role': 'Role',
        'thesis.gift_val': '💎 Gift Value',
        'thesis.gift_def': 'Total gifts to streamer',
        'thesis.gift_role': 'Revenue',
        'thesis.consume_val': '📊 Consume Value',
        'thesis.consume_def': 'Watch time, comments, follows',
        'thesis.consume_role': 'Engagement',
        'thesis.metrics_insight': 'These replace CTR/conversion. Gift value is livestream-unique — a real-time, voluntary revenue signal reflecting entertainment quality.',
        // Livestream mappings
        'ls.user_title': '🎬 In Livestream',
        'ls.user_desc': '<strong>Problem:</strong> Gift propensity is the strongest preference signal but ignored by click-based models. <strong>Solution:</strong> Preference optimization on gift-weighted pairs captures true entertainment preference — a ¥100 gift expresses far more intent than a click.',
        'ls.item_title': '🎬 In Livestream',
        'ls.item_desc': '<strong>Problem:</strong> A livestream is not one item — it evolves every 30s. <strong>Solution:</strong> Foresight Semantic ID encodes each segment; controlling WHEN to recommend (at high-light) directly boosts gift + consume value.',
        'ls.biz_title': '🎬 In Livestream',
        'ls.biz_desc': '<strong>Problem:</strong> Streamers who get no exposure quit — unlike products that stay in inventory. <strong>Solution:</strong> Business-constrained decoding enforces cold-start fairness during generation, not just post-hoc reranking.',
        'ls.timing_title': '🎬 In Livestream',
        'ls.timing_desc': '<strong>Problem:</strong> Interrupting during high-light kills gift value; waiting during lull loses the user. <strong>Solution:</strong> Session-level RL optimizes transition timing, balancing retention against gift potential.',
        'ls.gran_title': '🎬 In Livestream',
        'ls.gran_desc': '<strong>Problem:</strong> Recommending "this streamer" is too coarse — boring at minute 5, exciting at minute 8. <strong>Solution:</strong> 3-level granularity (genre → style → this-30s-moment) via hierarchical SID.',
        'ls.expl_title': '🎬 In Livestream',
        'ls.expl_desc': '<strong>Problem:</strong> Users can\'t tell why THIS stream was shown NOW. <strong>Solution:</strong> Temporal explanations — "high-energy moment" / "500 viewers gifting" — leverage real-time state for social-proof explanations.',
        'ls.fb_title': '🎬 In Livestream',
        'ls.fb_desc': '<strong>Problem:</strong> A gift mid-stream is both revenue AND preference signal, but systems treat it as revenue only. <strong>Solution:</strong> Dual-use feedback loop — same gift signal updates recommendations of this stream to OTHER users in real-time.',
        'ls.mech_live': '🎬 Livestream:',
        'ls.cond_live': 'Dynamic content → Segment SID + real-time state embedding (energy/topic/interaction) as conditioning inputs',
        'ls.pref_live': 'Rich preference hierarchy (大额 > 小额 > 评论 > 点击 > 跳过) → Gift-weighted Listwise DPO with continuous reward signal',
        'ls.dec_live': 'Need real-time quality signal → High-light PRM (LiveForesighter) scores each moment; crowd gift/comment rate as beam score',
        'ls.post_live': 'Multi-signal balancing → Rerank with α×relevance + β×gift_propensity + γ×consume_pred + δ×fairness; real-time state refresh',
        // Industry
        'nav.industry': 'Industry',
        'industry.title': 'Industry Grounding',
        'industry.intro': 'Two Kuaishou papers provide the industrial foundation — mapping taxonomy concepts to deployed systems serving 400M+ DAU.',
        'industry.foresight_desc': 'VQ-VAE Semantic ID for 30s livestream segments. Enables segment-level recall and recommendation.',
        'industry.live_desc': 'High-light moment detection and future prediction. Deployed at scale for real-time stream quality scoring.',
        'industry.tech': 'Technique',
        'industry.mapping': 'Taxonomy Mapping',
        'industry.f_sid': '30s Segment Semantic ID',
        'industry.f_next': 'Next-SID Prediction',
        'industry.f_recall': 'Segment-level Recall',
        'industry.l_highlight': 'High-light Detection',
        'industry.l_predict': 'Future Prediction',
        'industry.l_rerank': 'Real-time Reranking',
        'industry.insight': 'LiveForesighter\'s high-light detection is essentially a real-time PRM — it scores "is this moment worth recommending?" at each time step, directly analogous to PROMISE\'s process reward model.',
        // Livestream gaps
        'gap.live_heading': '🎬 Livestream-Specific Gaps',
        'gap.l1_title': 'L1: Temporal Semantic ID Evolution',
        'gap.l1_desc': 'No work models transitions between segments. Predicting "high-light in 2 minutes" enables proactive recommendation — boosting consume value by timing.',
        'gap.l4_title': 'L4: Gift Value Preference Hierarchy',
        'gap.l4_desc': 'Gift amounts have natural hierarchy (大额 > 小额 > 评论 > 点击 > 跳过). No work applies Listwise DPO to this continuous signal.',
        'gap.l2_title': 'L2: Real-time Feedback as Decoding Signal',
        'gap.l2_desc': 'Gift and comment signals arrive continuously but only used for post-processing. Feeding them into decoding could leverage social proof and gifting contagion.',
        'gap.l5_title': 'L5: Cross-Stream Session Control',
        'gap.l5_desc': 'Users hop between streams. Interrupting during high-light hurts gift value; waiting during lull loses the user. No work optimizes transition timing.',
        'gap.l3_title': 'L3: Streamer Cold-Start Fairness',
        'gap.l3_desc': 'New streamers have no gift history and no Semantic ID history. The "item" doesn\'t exist until the stream starts.',
        'gap.impact_consume': 'High Consume Value Impact',
        'gap.impact_gift': 'High Gift Value Impact',
        'gap.impact_both': 'High Consume + Gift Impact',
        'gap.impact_gift_m': 'Medium Gift Value Impact',
        // Livestream priorities
        'pri.p0_sid_title': 'Temporal SID Evolution (L1)',
        'pri.p0_sid_desc': 'Predicting "high-light in 2 minutes" enables proactive recommendation. Provides foundational representation for all other livestream controllability.',
        'pri.p0_gift_title': 'Gift Preference Hierarchy (L4)',
        'pri.p0_gift_desc': 'Listwise DPO on continuous gift amounts. Complementary to L1 — L1 provides representation, L4 provides training signal.',
        // Priorities
        'pri.title': 'Strategic Priorities',
        'pri.intro': 'From research gaps to investment decisions: what to build, what to skip, and why this order.',
        'pri.punchline': 'Backbone commoditizes. Control stack differentiates.',
        'pri.p0_biz_title': 'Business-Constrained Decoding',
        'pri.p0_biz_desc': 'Minimum bar for gen-rec to go online. Without business constraint enforcement, it cannot replace traditional pipelines. Technically mature, high feasibility.',
        'pri.p0_attr_title': 'Explicit Attribute Control',
        'pri.p0_attr_desc': '"Show items with attribute X and price < Y" — fundamental capability with near-total blank in generative retrieval. Blocks gen-rec from replacing traditional search.',
        'pri.p0_eval_title': 'Controllability Evaluation',
        'pri.p0_eval_desc': 'Evidence infrastructure: control success rate, relevance tax, Pareto fronts, stability, rollback-ability. Without this, controllability stays at "looks like it works."',
        'pri.p1_fb_title': 'Real-Time Feedback Loop',
        'pri.p1_fb_desc': 'High impact but high complexity — not just a model problem. Involves system architecture, interaction product, and data pipelines. Build on P0 constraints first.',
        'pri.p1_stake_title': 'Multi-Stakeholder Balance',
        'pri.p1_stake_desc': 'Generative selection may amplify exposure skew more than traditional ranking — creator churn from starvation is ecosystem-level risk. Multi-stakeholder balance is a launch governance condition, not a nice-to-have.',
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
        // P0 layer badges
        'pri.p0_eval_layer': 'Foundation',
        'pri.p0_biz_layer': 'Launch Gate',
        'pri.p0_attr_layer': 'Capability',
        // Business Mapping
        'bmap.title': 'Business Mapping',
        'bmap.intro': 'Why controllability is a business requirement, not a research luxury.',
        'bmap.punchline': 'In livestream recommendation, uncontrolled generation doesn\'t just underperform — it fails on all three sides.',
        'bmap.user_title': 'User (Demand)',
        'bmap.user_desc': 'Intent is implicit, dynamic, and conflicting. Users don\'t say what they want — they fatigue, switch between explore and exploit, hold multiple interests simultaneously.',
        'bmap.user_examples': 'Fatigue detection, explore/exploit, multi-interest',
        'bmap.content_title': 'Content (Supply)',
        'bmap.content_desc': 'Modality, topic, timeliness, and quality all matter — and they change in real-time. A stream that was exciting 2 minutes ago may be dead now.',
        'bmap.content_examples': 'Genre drift, highlight vs lull, cold-start streams',
        'bmap.platform_title': 'Platform (Ecosystem)',
        'bmap.platform_desc': 'Platform goals are multi-objective, not single-score. Optimizing watch time alone kills gift revenue; optimizing gifts alone starves new creators.',
        'bmap.platform_examples': 'Duration vs gift vs fairness vs creator support',
        'bmap.conclusion': 'Generative retrieval expands flexibility, but also expands failure modes. Controllability is the governance layer that makes generative rec deployable.',
        // Deployment Path
        'deploy.title': 'Deployment Path',
        'deploy.intro': 'How to get from current pipelines to controllable generation — without replacing anything overnight.',
        'deploy.punchline': 'Not replacing the existing pipeline — layering controllability on top, one phase at a time.',
        'deploy.p1_title': 'Evaluate & Rerank',
        'deploy.p1_desc': 'Keep existing pipeline. Add controllability evaluation metrics and constrained reranking as a post-processing layer.',
        'deploy.p1_adds': '+ Evaluation framework + constrained rerank',
        'deploy.p2_title': 'Bounded Generation',
        'deploy.p2_desc': 'Introduce constrained decoding for bounded, low-risk scenarios. Validate controllability in production with limited blast radius.',
        'deploy.p2_adds': '+ Constrained decoding for specific verticals',
        'deploy.p3_title': 'Expand Scope',
        'deploy.p3_desc': 'Extend generation to attribute-aware control and integrate real-time feedback loop for broader coverage.',
        'deploy.p3_adds': '+ Attribute-aware generation + feedback loop',
        'deploy.p4_title': 'Full Controllable Gen',
        'deploy.p4_desc': 'Multi-stakeholder optimization under governance constraints. Generation replaces retrieval with full controllability stack.',
        'deploy.p4_adds': '+ Multi-stakeholder optimization + governance',
        // Footer
        'footer.title': 'Controllable Recommendation Generation',
        'footer.subtitle': '3-Axis Research Taxonomy',
        'footer.copy': '\u00a9 2026 \u00b7 Last updated April 28'
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
        'nav.business': '业务映射',
        'nav.deployment': '落地路径',
        // Hero
        'hero.title': '可控推荐生成',
        'hero.tagline': '生成式推荐系统中控制机制的3轴分类体系与研究综述',
        'hero.targets': '目标',
        'hero.interfaces': '接口',
        'hero.mechanisms': '机制',
        'hero.papers': '论文',
        'hero.gift': '礼物价值',
        'hero.consume': '消费价值',
        'hero.tagline': '生成式推荐系统的3轴控制分类体系，扎根于直播推荐场景',
        // Overview
        'overview.title': '概述',
        'overview.intro': '如何控制生成式推荐系统的输出？本3轴分类体系沿正交维度组织控制：控制什么（目标）、如何传递控制（接口）、如何实现控制（机制）。',
        'overview.punchline': '没有可强制执行的控制，生成式推荐无法替代生产 pipeline。',
        'overview.targets': '轴1：控制目标',
        'overview.targets_q': '我们在控制哪个实体？',
        'overview.target': '目标',
        'overview.question': '核心问题',
        'overview.interfaces': '轴2：控制接口',
        'overview.interfaces_q': '控制如何传递？',
        'overview.interface': '接口',
        'overview.mechanisms': '轴3：控制机制',
        'overview.mechanisms_q': '控制如何实现？',
        'overview.axes_heading': '三个轴',
        'overview.pipeline_heading': '控制机制流水线',
        'overview.cond_brief': '通过控制令牌、指令、嵌入前置来引导生成。',
        'overview.pref_brief': '通过DPO/RLHF使生成与偏好对齐。',
        'overview.dec_brief': '推理时的PRM/ORM引导和代码级约束。',
        'overview.post_brief': '解码器输出后的重排序、过滤和多样化。',
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
        // Papers section
        'papers.title': '论文映射',
        'papers.intro': '39篇论文映射到分类体系的全部3个轴：目标、接口和机制。高亮行表示覆盖全面。',
        'papers.toggle': '展开完整论文矩阵（39篇）',
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
        'gap.low_pri': '低优先级',
        'gap.explain_title': '可解释生成路径',
        'gap.explain_desc': '文献覆盖最少的领域——但有意降低优先级。学术价值高，业务ROI低。仅作为内部调试工具有价值。',
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
        'thesis.punchline': '生成将选择过程内化到模型中。控制因此成为第一等需求。',
        // Three Core Problems
        'thesis.p1_title': 'P1：非平稳物品词表',
        'thesis.p1_desc': '生成式推荐（TIGER、GPR、HSTU）假设固定码本——物品编码一次，Semantic ID稳定。在直播中，同一直播间每30秒就是不同的"物品"。在线训练在动态物品上达到<5%错误率，但机制不明。不理解为什么，就无法控制或保证。',
        'thesis.p1_evidence': '39篇论文假设固定码本',
        'thesis.p1_refs': 'Foresight, OneLive, HSTU, MERGE',
        'thesis.p2_title': 'P2：跨域兴趣迁移',
        'thesis.p2_desc': '直播只是混合信息流中的一种内容形态。跨域桥梁已经存在——例如"living"内容，用户点击作者头像即可进入其直播间。但生成式推荐模型按域隔离词表。如何用短视频、图文等跨域兴趣信号条件化直播生成？',
        'thesis.p2_evidence': 'FARM处理跨域，但不在生成式推荐框架内',
        'thesis.p2_refs': 'FARM, Moment&Cross, SL-MGAC',
        'thesis.p3_title': 'P3：稀疏且延迟的奖励',
        'thesis.p3_desc': '礼物价值——核心业务指标——事件密度约1%，且在推荐决策后10-30分钟才到达。当前DPO/RLHF需要密集、及时的偏好对。礼物如此稀疏、如此滞后，对具体直播时刻的信用归因模糊。这直接阻碍了基于礼物的偏好优化。',
        'thesis.p3_evidence': '0篇生成式推荐论文解决延迟奖励',
        'thesis.p3_refs': 'MMBee (KDD\'24), FARM, Sliver, Moment&Cross',
        'thesis.problems_insight': '三个问题相互叠加：非平稳词表意味着推荐与打赏之间直播内容已变（P1×P3）；跨域信号之所以必要，恰恰因为域内礼物信号太稀疏（P2×P3）。解决方案必须联合应对。',
        // Thesis — Livestream
        'thesis.scene_title': '直播推荐',
        'thesis.solve': '我们解决什么',
        'thesis.problem': '问题',
        'thesis.solution': '解法',
        'thesis.s_p1': '内容逐秒变化',
        'thesis.s_s1': '片段Semantic ID将30秒快照编码为离散token用于生成',
        'thesis.s_p2': '实时反馈：打赏/评论快速涌入',
        'thesis.s_s2': '反馈信号作为实时PRM注入解码过程',
        'thesis.s_p3': '生成结果必须有效——只有开播中的直播间才能展示',
        'thesis.s_s3': '约束解码在生成阶段过滤无效（已下播）候选',
        'thesis.s_p4': '直播只是多种内容形态之一——需要跨域兴趣迁移',
        'thesis.s4': '基于用户在其他领域的兴趣做条件控制，生成高价值直播推荐',
        'thesis.metrics': '核心指标',
        'thesis.metric': '指标',
        'thesis.def': '定义',
        'thesis.role': '角色',
        'thesis.gift_val': '💎 礼物价值',
        'thesis.gift_def': '用户向主播赠送礼物总额',
        'thesis.gift_role': '收入指标',
        'thesis.consume_val': '📊 消费价值',
        'thesis.consume_def': '观看时长、评论、关注',
        'thesis.consume_role': '参与指标',
        'thesis.metrics_insight': '这些替代了CTR/转化率。礼物价值是直播独有的——实时、自愿的收入信号，反映娱乐质量。',
        // Livestream mappings
        'ls.user_title': '🎬 直播场景',
        'ls.user_desc': '<strong>问题：</strong>打赏倾向是最强偏好信号，但被点击模型忽略。<strong>解法：</strong>基于打赏加权对的偏好优化捕获真实娱乐偏好——¥100打赏比一次点击表达了远更多意图。',
        'ls.item_title': '🎬 直播场景',
        'ls.item_desc': '<strong>问题：</strong>直播不是一个物品——它每30秒在变化。<strong>解法：</strong>Foresight Semantic ID编码每个片段；控制何时推荐（在高光时刻）直接提升礼物价值+消费价值。',
        'ls.biz_title': '🎬 直播场景',
        'ls.biz_desc': '<strong>问题：</strong>得不到曝光的主播会离开——不像商品留在库存中。<strong>解法：</strong>业务约束解码在生成阶段强制冷启动公平性，而非仅靠后处理重排序。',
        'ls.timing_title': '🎬 直播场景',
        'ls.timing_desc': '<strong>问题：</strong>在高光时刻打断损害礼物价值；在低谷等待过久失去用户。<strong>解法：</strong>会话级RL优化转场时机，平衡留存与打赏潜力。',
        'ls.gran_title': '🎬 直播场景',
        'ls.gran_desc': '<strong>问题：</strong>推荐"这个主播"太粗——第5分钟无聊，第8分钟精彩。<strong>解法：</strong>3层粒度（类型→风格→这30秒时刻）通过层次SID实现。',
        'ls.expl_title': '🎬 直播场景',
        'ls.expl_desc': '<strong>问题：</strong>用户不知道为什么此刻被推荐这个直播间。<strong>解法：</strong>时间维度解释——"高能时刻"/"500人正在打赏"——利用实时状态做社交证明。',
        'ls.fb_title': '🎬 直播场景',
        'ls.fb_desc': '<strong>问题：</strong>观看中的打赏既是收入又是偏好信号，但系统只当收入用。<strong>解法：</strong>双用反馈闭环——同一打赏信号实时更新对其他用户的推荐。',
        'ls.mech_live': '🎬 直播：',
        'ls.cond_live': '动态内容 → 片段SID + 实时状态嵌入（能量/话题/互动强度）作为条件输入',
        'ls.pref_live': '丰富偏好层次（大额 > 小额 > 评论 > 点击 > 跳过）→ 礼物加权Listwise DPO，连续奖励信号',
        'ls.dec_live': '需要实时质量信号 → 高光PRM（LiveForesighter）为每个时刻打分；人群打赏/评论率作为beam分数',
        'ls.post_live': '多信号平衡 → 以 α×相关性 + β×打赏倾向 + γ×消费预测 + δ×公平性 重排；实时状态刷新',
        // Industry
        'nav.industry': '工业实践',
        'industry.title': '工业实践映射',
        'industry.intro': '两篇快手论文提供了工业基础——将分类概念映射到服务4亿+DAU的部署系统。',
        'industry.foresight_desc': 'VQ-VAE Semantic ID用于30秒直播片段。实现片段级召回和推荐。',
        'industry.live_desc': '高光时刻检测和未来预测。大规模部署用于实时直播质量评分。',
        'industry.tech': '技术',
        'industry.mapping': '分类映射',
        'industry.f_sid': '30秒片段Semantic ID',
        'industry.f_next': '下一片段预测',
        'industry.f_recall': '片段级召回',
        'industry.l_highlight': '高光时刻检测',
        'industry.l_predict': '未来预测',
        'industry.l_rerank': '实时重排序',
        'industry.insight': 'LiveForesighter的高光检测本质上是实时PRM——它为每个时间步评分"这个时刻值得推荐吗？"，直接类比PROMISE的过程奖励模型。',
        // Livestream gaps
        'gap.live_heading': '🎬 直播特有研究缺口',
        'gap.l1_title': 'L1：时序Semantic ID演化',
        'gap.l1_desc': '没有工作建模片段之间的转换。预测"2分钟后进入高光"将实现前瞻性推荐——通过时机提升消费价值。',
        'gap.l4_title': 'L4：礼物价值偏好层次',
        'gap.l4_desc': '礼物金额天然具有层次结构（大额 > 小额 > 评论 > 点击 > 跳过）。没有工作将Listwise DPO应用于这种连续信号。',
        'gap.l2_title': 'L2：实时反馈作为解码信号',
        'gap.l2_desc': '礼物和评论信号持续到达但仅用于后处理。将其注入解码过程可利用社交证明和打赏传染性。',
        'gap.l5_title': 'L5：跨直播间会话控制',
        'gap.l5_desc': '用户在直播间之间跳转。在高光时刻打断损害礼物价值；在低谷等待过久失去用户。没有工作优化切换时机。',
        'gap.l3_title': 'L3：主播冷启动公平性',
        'gap.l3_desc': '新主播没有打赏历史和Semantic ID历史。"物品"在开播前不存在。',
        'gap.impact_consume': '高消费价值影响',
        'gap.impact_gift': '高礼物价值影响',
        'gap.impact_both': '高消费价值+礼物影响',
        'gap.impact_gift_m': '中等礼物价值影响',
        // Livestream priorities
        'pri.p0_sid_title': '时序SID演化（L1）',
        'pri.p0_sid_desc': '预测"2分钟后进入高光"实现前瞻性推荐。为所有其他直播可控性提供基础表示能力。',
        'pri.p0_gift_title': '礼物偏好层次（L4）',
        'pri.p0_gift_desc': '基于连续礼物金额的Listwise DPO。与L1互补——L1提供表示能力，L4提供训练信号。',
        // Overview — Livestream comparison
        'overview.live_heading': '我们解决的直播问题',
        'overview.property': '问题',
        'overview.static_rec': '无可控性',
        'overview.live_rec': '应用本分类体系',
        'overview.dynamic': '动态内容',
        'overview.dynamic_s': '推荐过时快照，错过高光时刻',
        'overview.dynamic_l': '片段SID捕获实时状态 → 在高光时刻推荐',
        'overview.engage': '深度参与',
        'overview.engage_s': '一次性排序，无会话感知',
        'overview.engage_l': '时序控制决定何时在直播间之间切换',
        'overview.realtime': '实时信号',
        'overview.realtime_s': '反馈仅用于后处理',
        'overview.realtime_l': '信号注入解码（PRM）实现即时响应',
        'overview.creator': '创作者生态',
        'overview.creator_s': '新主播饥饿，头部垄断',
        'overview.creator_l': '业务约束在生成阶段强制冷启动公平性',
        // Priorities
        'pri.title': '战略优先级',
        'pri.intro': '从研究缺口到投资决策：做什么、不做什么、为什么这个顺序。',
        'pri.punchline': '主干能力会被拉平。控制栈才是差异化壁垒。',
        'pri.p0_biz_title': '业务约束解码',
        'pri.p0_biz_desc': '生成式推荐上线的最低门槛。不能执行业务约束就无法替代传统 pipeline。技术成熟，可行性高。',
        'pri.p0_attr_title': '显式属性控制',
        'pri.p0_attr_desc': '"展示属性X且价格<Y"——基础能力，在生成式检索中近乎空白。阻碍生成式推荐替代传统搜索。',
        'pri.p0_eval_title': '可控性评估体系',
        'pri.p0_eval_desc': '证据基础设施：控制成功率、相关性代价、Pareto曲线、稳定性、可回退性。没有评估，可控性停留在"看起来能控"。',
        'pri.p1_fb_title': '实时反馈闭环',
        'pri.p1_fb_desc': '影响大但工程复杂度高——不只是模型问题，涉及系统架构、交互产品和数据管道。先做好P0约束，再叠加反馈。',
        'pri.p1_stake_title': '多方利益平衡',
        'pri.p1_stake_desc': '生成式选择可能比传统排序更加放大曝光倾斜——创作者因流量饥饿而流失是生态级风险。多方利益平衡是上线治理条件，不是锦上添花。',
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
        // P0 layer badges
        'pri.p0_eval_layer': '基础设施',
        'pri.p0_biz_layer': '上线门槛',
        'pri.p0_attr_layer': '能力拓展',
        // Business Mapping
        'bmap.title': '业务映射',
        'bmap.intro': '为什么可控性是业务需求，而非研究奢侈品。',
        'bmap.punchline': '在直播推荐中，不可控的生成不只是表现不好——它在三个方面都会失败。',
        'bmap.user_title': '用户（需求侧）',
        'bmap.user_desc': '意图隐式、动态且矛盾。用户不会说出自己要什么——他们会疲劳、在探索与利用之间切换、同时持有多个兴趣。',
        'bmap.user_examples': '疲劳检测、探索/利用切换、多兴趣',
        'bmap.content_title': '内容（供给侧）',
        'bmap.content_desc': '模态、话题、时效性、质量都重要——且它们实时变化。2分钟前很精彩的直播现在可能已经冷了。',
        'bmap.content_examples': '类型漂移、高光vs低谷、冷启动直播',
        'bmap.platform_title': '平台（生态侧）',
        'bmap.platform_desc': '平台目标是多目标，不是单一分数。只优化观看时长会损害礼物收入；只优化打赏会饿死新创作者。',
        'bmap.platform_examples': '时长 vs 打赏 vs 公平性 vs 创作者扶持',
        'bmap.conclusion': '生成式检索扩大了灵活性，也扩大了失败模式。可控性是使生成式推荐可部署的治理层。',
        // Deployment Path
        'deploy.title': '落地路径',
        'deploy.intro': '如何从现有 pipeline 迁移到可控生成——无需一夜之间替换。',
        'deploy.punchline': '不是替换现有 pipeline——而是逐步叠加可控性。',
        'deploy.p1_title': '评估 & 重排',
        'deploy.p1_desc': '保留现有 pipeline。添加可控性评估指标和约束重排作为后处理层。',
        'deploy.p1_adds': '+ 评估框架 + 约束重排',
        'deploy.p2_title': '有界生成',
        'deploy.p2_desc': '在有界、低风险场景引入约束解码。在生产环境验证可控性，爆炸半径可控。',
        'deploy.p2_adds': '+ 特定垂类的约束解码',
        'deploy.p3_title': '扩大范围',
        'deploy.p3_desc': '将生成扩展到属性感知控制，集成实时反馈闭环以覆盖更广场景。',
        'deploy.p3_adds': '+ 属性感知生成 + 反馈闭环',
        'deploy.p4_title': '全面可控生成',
        'deploy.p4_desc': '在治理约束下进行多方利益优化。生成以完整可控性栈替代检索。',
        'deploy.p4_adds': '+ 多方利益优化 + 治理框架',
        // Footer
        'footer.title': '可控推荐生成',
        'footer.subtitle': '3轴研究综述',
        'footer.copy': '\u00a9 2026 \u00b7 最后更新 4月28日'
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
            const val = translations[lang][key];
            if (val.includes('<')) {
                el.innerHTML = val;
            } else {
                el.textContent = val;
            }
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
