/**
 * 金融职场生存游戏 - 场景数据
 * 公司：宇宙证券
 * 共10章，每章10个场景，合计100个场景
 */

// ============================================================
// 知识点数据库
// ============================================================
window.KNOWLEDGE_DB = {
  financial_statements: {
    name: '财务报表分析',
    desc: '财务报表是企业经营的"体检报告"，包括资产负债表、利润表和现金流量表三大核心报表。分析师需要通过横向纵向对比、比率分析等方法，透视企业真实的盈利能力和偿债能力，识别潜在的财务风险信号。'
  },
  revenue_recognition: {
    name: '收入确认原则',
    desc: '收入确认是财务会计的核心问题之一。新收入准则要求按"五步法"模型确认收入：识别合同、识别履约义务、确定交易价格、分摊交易价格、在履约义务完成时确认收入。提前或延迟确认收入都可能构成财务造假。'
  },
  compliance_basics: {
    name: '合规基础知识',
    desc: '证券行业合规管理涵盖信息隔离墙制度、利益冲突防范、内幕信息管理、适当性管理等核心领域。从业人员必须严守合规底线，任何违规行为不仅会导致个人处罚，还可能牵连公司面临巨额罚款和业务资格暂停。'
  },
  insider_trading: {
    name: '内幕交易防范',
    desc: '内幕交易是指利用未公开的重大信息进行证券交易的行为。证券法对内幕信息的定义、内幕知情人的范围、法律责任等都有明确规定。内幕交易一经查实，将面临行政处罚、民事赔偿甚至刑事追诉。'
  },
  risk_management: {
    name: '风险管理',
    desc: '金融机构风险管理的核心框架包括市场风险、信用风险、操作风险和流动性风险四大类。VaR模型、压力测试、情景分析是常用的风险度量工具。有效的风控体系是金融机构稳健运营的基石，也是监管审查的重点领域。'
  },
  ipo_process: {
    name: 'IPO流程',
    desc: '首次公开发行（IPO）是企业上市的核心流程，包括改制设立、辅导备案、申报材料制作、审核问询、发审委审议、路演定价、挂牌上市等阶段。投行在其中扮演保荐人和主承销商角色，承担尽职调查、信息披露把关等重要责任。'
  },
  portfolio_theory: {
    name: '投资组合理论',
    desc: '马科维茨的投资组合理论是现代金融学的基石，核心思想是通过分散投资可以在不降低预期收益的情况下降低风险。有效前沿、资本市场线、夏普比率等概念帮助投资者构建最优资产配置方案，是资产管理的理论基础。'
  },
  client_management: {
    name: '客户关系管理',
    desc: '金融行业的客户关系管理强调深度理解客户需求、建立长期信任关系。包括客户分层管理、KYC尽职调查、投资者适当性匹配、售后服务等。优质的客户关系是金融机构核心竞争力的重要组成部分，直接影响业务留存率。'
  },
  behavioral_finance: {
    name: '行为金融学',
    desc: '行为金融学研究人类心理偏差如何影响金融决策。过度自信、损失厌恶、羊群效应、锚定效应等常见偏差会导致市场异象和非理性投资行为。理解行为金融学有助于识别市场泡沫和恐慌，做出更理性的投资判断。'
  },
  due_diligence: {
    name: '尽职调查',
    desc: '尽职调查是投行和投资机构在业务决策前的系统性调查过程，涵盖业务、财务、法律、税务等多个维度。目的是全面了解目标企业或项目的真实状况，识别潜在风险，为投资决策和交易定价提供依据。DD质量直接影响项目成败。'
  },
  market_making: {
    name: '做市商制度',
    desc: '做市商通过持续报出买卖价格来维持市场流动性，在买卖价差中获取收益。做市商制度在科创板、新三板等市场广泛应用。做市商需要具备较强的定价能力、风险管理能力和资金实力，是维护市场稳定运行的重要角色。'
  },
  asset_liability: {
    name: '资产负债管理',
    desc: '资产负债管理（ALM）是金融机构统筹管理资产端和负债端的核心方法论。核心目标是实现流动性、安全性和盈利性的平衡。久期管理、缺口分析、利率敏感性分析是常用工具，有效的ALM策略对防范系统性风险至关重要。'
  },
  anti_money_laundering: {
    name: '反洗钱',
    desc: '反洗钱（AML）是金融机构的法定义务，要求建立客户身份识别、交易监测、可疑交易报告等制度。洗钱通常通过放置、离析、整合三个阶段将非法资金"合法化"。违反AML规定将面临严厉处罚，从业人员须保持高度警觉。'
  },
  kyc_regulations: {
    name: 'KYC客户识别',
    desc: 'KYC（Know Your Customer）是金融机构在建立业务关系前必须完成的客户身份识别和风险评估程序。包括核实客户身份、了解资金来源、评估风险等级、持续监控等环节。KYC是反洗钱和反恐融资的第一道防线。'
  },
  securities_law: {
    name: '证券法律法规',
    desc: '证券法律体系以《证券法》为核心，配套行政法规、部门规章和自律规则。涵盖证券发行、交易、信息披露、投资者保护、违法处罚等核心内容。证券法2020年修订版大幅提高了违法成本，强化了注册制改革方向。'
  },
  corporate_governance: {
    name: '公司治理',
    desc: '公司治理是规范公司各利益相关方权责关系的制度安排，核心包括股东大会、董事会、监事会和经理层的权力制衡。良好的公司治理是上市公司质量的重要标志，也是投资者评估企业价值的关键维度之一。'
  },
  financial_technology: {
    name: '金融科技',
    desc: '金融科技（FinTech）利用人工智能、大数据、区块链、云计算等技术创新金融产品和服务。在智能投顾、风控模型、数字货币、供应链金融等领域广泛应用。金融科技正在重塑传统金融业态，是行业转型升级的重要驱动力。'
  },
  green_finance: {
    name: '绿色金融',
    desc: '绿色金融是支持环境改善、应对气候变化的金融活动总称，包括绿色信贷、绿色债券、碳金融等产品。中国在绿色金融领域发展迅速，绿色债券发行规模位居全球前列。ESG投资理念的普及推动了绿色金融的快速发展。'
  },
  cross_border_finance: {
    name: '跨境金融',
    desc: '跨境金融涉及不同司法管辖区之间的资金融通和金融服务，包括跨境结算、离岸金融、QFII/QDII、沪港通等业务。跨境金融需要应对汇率风险、监管差异、地缘政治等复杂因素，对从业人员的专业素养要求较高。'
  },
  mergers_acquisitions: {
    name: '并购重组',
    desc: '并购重组是企业通过合并、收购、资产置换等方式实现资源整合和价值创造的重要手段。涉及战略分析、目标筛选、估值定价、交易结构设计、尽职调查、反垄断审查、整合管理等多个环节，是投行业务的核心领域之一。'
  },
  valuation_methods: {
    name: '估值方法',
    desc: '企业估值是金融分析的核心技能，主要方法包括：DCF现金流折现法、可比公司法（PE/PB/EV-EBITDA）、可比交易法、资产基础法等。不同方法适用于不同场景，分析师需要综合运用多种方法交叉验证，得出合理的估值区间。'
  },
  bond_market: {
    name: '债券市场',
    desc: '债券市场是固定收益证券的发行和交易场所，包括银行间市场和交易所市场。债券定价受利率水平、信用评级、久期、流动性等因素影响。债券投资需要关注利率风险、信用风险和流动性风险，是资产配置的重要组成部分。'
  }
};

// ============================================================
// 场景数据（100个场景）
// ============================================================
window.SCENES = {

  // ============================================
  // 第一章 · 初入宇宙
  // ============================================

  'scene_1_1': {
    act: 1,
    title: '宇宙证券大厦',
    text: '<p class="narrator">清晨七点半，你站在宇宙证券大厦前。</p><p>这座矗立在金融区核心地带的摩天大楼，玻璃幕墙反射着初升的阳光，楼顶的金色LOGO"UNIVERSE SECURITIES"熠熠生辉。你深吸一口气——今天，是你入职宇宙证券的第一天。</p><p>从顶尖财经院校毕业，经过三轮面试和一轮笔试，你终于拿到了这份令无数人艳羡的offer。此刻，你的内心既兴奋又紧张。</p><p>大厦大堂里，穿着职业装的白领们步履匆匆。前台的电子屏幕上滚动着今日市场行情——<span class="highlight">上证综指涨0.3%，创业板指跌0.5%</span>。</p><p class="narrator">你的金融职业生涯，从这里开始。</p>',
    choices: [
      {
        text: '提前半小时到达，熟悉环境',
        hint: '展现积极态度，可能遇到重要人物',
        effects: { skill: 2, reputation: 3 },
        next: 'scene_1_2'
      },
      {
        text: '按正常时间到达，先去前台报到',
        hint: '稳妥选择，按流程办事',
        effects: { skill: 1, reputation: 1 },
        next: 'scene_1_2'
      },
      {
        text: '因为太紧张迟到了十分钟',
        hint: '第一印象可能受影响',
        effects: { reputation: -3, stress_mgmt: 2 },
        next: 'scene_1_2'
      }
    ]
  },

  'scene_1_2': {
    act: 1,
    title: '电梯偶遇',
    text: '<p class="narrator">你走进电梯，里面站着一位五十岁左右的男人，深灰色西装，胸前的金色胸针是MD级别的标志。</p><p>他扫了你一眼，目光停留在你崭新的工牌上。</p><p class="dialogue">"新来的？哪个部门？"他声音低沉但不失温和。</p><p>你注意到他的工牌上写着：<span class="highlight">张伟远，董事总经理，投资银行部</span>。在入职培训资料里你见过这个名字——他是宇宙证券投行业务的传奇人物，主导过多单百亿级IPO。</p>',
    choices: [
      {
        text: '"张总好！我是投行部新入职的分析师，很高兴认识您。"',
        hint: '大方得体，展示自信',
        effects: { relationship: 3, reputation: 2 },
        next: 'scene_1_3'
      },
      {
        text: '"您好，我是今天新入职的，请问投行部在几楼？"',
        hint: '谦虚请教，但不太出彩',
        effects: { relationship: 1, skill: 1 },
        next: 'scene_1_3'
      },
      {
        text: '紧张地点头微笑，没敢多说话',
        hint: '安全但可能错失建立关系的机会',
        effects: { stress_mgmt: -1 },
        next: 'scene_1_3'
      }
    ]
  },

  'scene_1_3': {
    act: 1,
    title: '入职培训',
    text: '<p class="narrator">上午九点，你和另外八位新同事坐在培训教室里。</p><p>HR总监王芳站在投影幕前，开始介绍宇宙证券的企业文化。</p><p class="dialogue">"宇宙证券成立于2001年，二十余年来，我们秉承<span class="highlight">"专业创造价值，合规守护底线"</span>的核心理念。公司目前拥有投行、资管、自营、研究、经纪五大业务线，在全国设有68家分支机构。"</p><p class="dialogue">"特别强调一点——合规是宇宙证券的生命线。我们实行合规一票否决制，任何业务决策都必须通过合规审查。"</p><p>你认真记下这些关键信息。旁边的同事悄悄递来一张纸条：<span class="highlight">"午饭一起吃？食堂三楼的川菜很好吃。——赵琳"</span></p>',
    knowledge: 'compliance_basics',
    choices: [
      {
        text: '认真记笔记，培训后主动提问',
        hint: '展现学习态度，加深对合规的理解',
        effects: { skill: 3, reputation: 2 },
        next: 'scene_1_4'
      },
      {
        text: '回复纸条，和赵琳建立友好关系',
        hint: '社交优先，积累人脉',
        effects: { relationship: 3, stress_mgmt: 1 },
        next: 'scene_1_4'
      },
      {
        text: '一边记笔记一边研究培训材料中的数据',
        hint: '深度思考，但可能显得不合群',
        effects: { skill: 4, relationship: -1 },
        next: 'scene_1_4'
      }
    ]
  },

  'scene_1_4': {
    act: 1,
    title: '直属上司',
    text: '<p class="narrator">下午两点，你被带到投行二部的办公区域。</p><p>你的直属上司李明，VP级别，三十五六岁，戴着一副金丝眼镜，桌上堆满了文件。</p><p class="dialogue">"欢迎加入。我是李明，负责TMT行业的投行业务。我们组目前在做三个项目：两个IPO，一个并购。"</p><p>他快速介绍了团队结构：你是组里第三个分析师，上面有一个高级分析师王浩，以及两个Associate。</p><p class="dialogue">"我的风格是直接——做得好我会表扬，做得不好我也会当面说。投行这一行，<span class="highlight">效率和准确性是命脉</span>。你的第一个任务是整理一份半导体行业的数据。"</p>',
    choices: [
      {
        text: '"好的李总，请问有什么具体要求？我需要关注哪些指标？"',
        hint: '主动确认需求，避免返工',
        effects: { skill: 3, relationship: 2 },
        next: 'scene_1_5'
      },
      {
        text: '"没问题，我这就开始。"（打算自己摸索）',
        hint: '展现独立性，但可能方向有误',
        effects: { skill: 2, stress_mgmt: -1 },
        next: 'scene_1_5'
      },
      {
        text: '先请教高级分析师王浩，了解团队的工作习惯',
        hint: '向同事学习，建立内部关系',
        effects: { relationship: 3, skill: 1 },
        next: 'scene_1_5'
      }
    ]
  },

  'scene_1_5': {
    act: 1,
    title: '第一个任务',
    text: '<p class="narrator">你坐在工位上，面对电脑屏幕，开始整理半导体行业研究数据。</p><p>李明发来的邮件里列出了要求：过去三年A股半导体上市公司的<span class="highlight">营收增长率、毛利率、研发投入占比、市盈率</span>等核心指标，以及行业竞争格局分析。</p><p>你打开Wind和Bloomberg终端，发现数据量远超预期。光是A股半导体上市公司就有六十多家，每家都有几百页的年报。</p><p>隔壁工位的王浩探过头来：</p><p class="dialogue">"第一次做行研吧？别试图看完所有年报，先看行业前三家的就够了。记住，<span class="highlight">投行的数据分析不是学术研究，关键是找到投资亮点和风险点</span>。"</p>',
    knowledge: 'financial_statements',
    choices: [
      {
        text: '采纳王浩建议，聚焦头部企业，快速出成果',
        hint: '效率优先，投行思维',
        effects: { skill: 4, relationship: 2 },
        next: 'scene_1_6'
      },
      {
        text: '坚持全面覆盖所有公司，用数据说话',
        hint: '追求完美，但可能超时',
        effects: { skill: 5, stress_mgmt: -3, reputation: 1 },
        next: 'scene_1_6'
      },
      {
        text: '先做一份框架大纲，请李明确认方向后再深入',
        hint: '专业做法，但可能显得效率不高',
        effects: { skill: 3, reputation: 2 },
        next: 'scene_1_6'
      }
    ]
  },

  'scene_1_6': {
    act: 1,
    title: '第一次组会',
    text: '<p class="narrator">周五下午三点，投行二部例行项目进度会。</p><p>会议室里坐了十几个人，李明主持会议。每个项目组汇报完进度后，李明突然看向你：</p><p class="dialogue">"新来的，你整理的那份半导体行业数据，给大家做个简要汇报吧。三到五分钟。"</p><p>你毫无准备，但数据是你亲手整理的，核心指标都记在脑子里。你站起来，心跳加速。</p><p>会议室里十几双眼睛看着你。你注意到角落坐着一个你不认识的人——似乎是公司高层。</p>',
    choices: [
      {
        text: '镇定下来，条理清晰地汇报核心发现',
        hint: '展示专业能力和抗压素质',
        effects: { skill: 3, reputation: 5 },
        next: 'scene_1_7'
      },
      {
        text: '谦虚地说自己还在学习中，简要介绍数据概况',
        hint: '保守策略，不会出彩但不会出错',
        effects: { skill: 1, reputation: 1 },
        next: 'scene_1_7'
      },
      {
        text: '大胆提出自己对行业趋势的独到见解',
        hint: '高风险高回报，可能惊艳全场也可能翻车',
        effects: { skill: 5, reputation: 4, stress_mgmt: -2 },
        next: 'scene_1_7'
      }
    ]
  },

  'scene_1_7': {
    act: 1,
    title: '合规培训',
    text: '<p class="narrator">第二周，所有新员工必须完成合规培训课程。</p><p>合规部的高级经理周婷站在讲台上，表情严肃：</p><p class="dialogue">"各位，我讲的不是理论课，而是<span class="highlight">保命课</span>。去年，某券商一名分析师因为在内幕信息敏感期交易股票，被判刑三年，终身市场禁入。"</p><p>她展示了一系列真实案例：内幕交易、老鼠仓、利益输送、信息泄露……每一个案例都以当事人被处罚、被开除、被起诉告终。</p><p class="dialogue">"记住三条红线：<span class="highlight">不碰内幕信息、不做利益输送、不违反信息隔离墙</span>。有任何疑问，随时找合规部。"</p><p>培训结束后需要参加在线考试，80分以上才能通过。</p>',
    knowledge: 'insider_trading',
    choices: [
      {
        text: '认真学习每个案例，考试轻松满分',
        hint: '扎实掌握合规知识，这是职业生涯的护身符',
        effects: { skill: 4, reputation: 2 },
        next: 'scene_1_8'
      },
      {
        text: '重点学习信息隔离墙制度，这跟投行业务最相关',
        hint: '抓住重点，实用主义',
        effects: { skill: 3, reputation: 1 },
        next: 'scene_1_8'
      },
      {
        text: '培训时偷偷处理手头工作，考试前突击复习',
        hint: '效率最大化，但合规知识可能不够扎实',
        effects: { skill: -1, stress_mgmt: 1 },
        next: 'scene_1_8'
      }
    ]
  },

  'scene_1_8': {
    act: 1,
    title: '食堂偶遇陈总',
    text: '<p class="narrator">午饭时间，你在食堂排队时，身后走来一位气质不凡的中年女性。</p><p>赵琳悄悄捅了捅你：</p><p class="dialogue">"那是陈雅文，我们部门的总监，ED级别。她可是宇宙证券投行业务的定海神针，管着整个TMT和医疗健康组。"</p><p>陈总端着餐盘，似乎在找座位。你注意到她旁边没有其他人。</p>',
    choices: [
      {
        text: '主动打招呼："陈总好，我是新入职的分析师，很高兴见到您。"',
        hint: '展示自信和礼貌，给高层留下好印象',
        effects: { relationship: 4, reputation: 3 },
        next: 'scene_1_9'
      },
      {
        text: '微笑点头致意，不过分打扰',
        hint: '保持距离感，避免唐突',
        effects: { relationship: 1, reputation: 1 },
        next: 'scene_1_9'
      },
      {
        text: '装作没认出来，继续和赵琳吃饭',
        hint: '安全但错失机会',
        effects: { stress_mgmt: 1 },
        next: 'scene_1_9'
      }
    ]
  },

  'scene_1_9': {
    act: 1,
    title: '紧急协助',
    text: '<p class="narrator">周四下午四点，组里突然陷入紧张氛围。</p><p>Associate张颖接到一个电话后脸色骤变：</p><p class="dialogue">"糟了，华兴项目的反馈函明天中午就截止了，但财务部分的回复还差两个大问题没有写完。王浩出差了，李明在开会……"</p><p>她环顾四周，目光落在你身上：</p><p class="dialogue">"你能帮忙吗？我需要有人帮我整理一家子公司的关联交易数据，越快越好。"</p><p>你手头还有自己的行业研究工作没做完。但张颖显然是真的着急。</p>',
    knowledge: 'securities_law',
    choices: [
      {
        text: '放下手头工作，全力协助张颖',
        hint: '团队协作，但自己的工作可能延期',
        effects: { relationship: 5, skill: 3, stress_mgmt: -2 },
        next: 'scene_1_10'
      },
      {
        text: '先完成自己的工作，然后加班帮张颖',
        hint: '两头兼顾，但会很辛苦',
        effects: { relationship: 3, skill: 2, stress_mgmt: -4, reputation: 2 },
        next: 'scene_1_10'
      },
      {
        text: '告诉张颖自己的工作还没做完，建议她找其他人',
        hint: '保护自己，但可能影响团队关系',
        effects: { relationship: -3, stress_mgmt: 2 },
        next: 'scene_1_10'
      }
    ]
  },

  'scene_1_10': {
    act: 1,
    title: '第一个周末',
    text: '<p class="narrator">入职第一周终于结束了。这个周末，你打算怎么过？</p><p>你躺在床上，回顾这一周的经历。从走进宇宙证券大厦的那一刻起，每一天都是新的挑战和收获。</p><p>手机上有几条未读消息：赵琳约你周日去聚餐认识其他部门的新人；李明在群里发了一份"推荐阅读材料"；你的大学室友也约你周六打球。</p><p class="narrator">如何分配这个周末，将影响你接下来的状态。</p>',
    choices: [
      {
        text: '加班研读李明推荐的材料和行业报告',
        hint: '提升专业能力，但可能过度劳累',
        effects: { skill: 5, stress_mgmt: -3, reputation: 2 },
        next: 'scene_2_1'
      },
      {
        text: '参加赵琳组织的聚餐，认识更多同事',
        hint: '拓展人脉，融入团队',
        effects: { relationship: 5, stress_mgmt: 2 },
        next: 'scene_2_1'
      },
      {
        text: '和室友打球，好好休息，调整状态',
        hint: '劳逸结合，保持身心健康',
        effects: { stress_mgmt: 5, relationship: 1 },
        next: 'scene_2_1'
      }
    ]
  },

  // ============================================
  // 第二章 · 项目历练
  // ============================================

  'scene_2_1': {
    act: 2,
    title: '华能科技IPO',
    text: '<p class="narrator">入职第三周，李明把你叫到办公室。</p><p class="dialogue">"好消息。华能科技的IPO项目正式启动了，我把你加进项目组。"</p><p>华能科技是一家新能源领域的高科技企业，计划在创业板上市，拟募资<span class="highlight">15亿元</span>。这是宇宙证券今年最重要的IPO项目之一。</p><p class="dialogue">"项目组由陈雅文总监挂帅，我负责日常推进。你负责财务数据整理和部分尽调工作。这个项目周期大约六个月，会很辛苦，但能学到很多东西。"</p><p>你心跳加速——终于可以参与真正的项目了。</p>',
    knowledge: 'ipo_process',
    choices: [
      {
        text: '"太好了！我一定全力以赴。请问我需要从哪些资料开始？"',
        hint: '积极主动，争取尽快进入角色',
        effects: { skill: 2, reputation: 3 },
        next: 'scene_2_2'
      },
      {
        text: '"谢谢李总信任。这个项目有什么特别需要注意的地方吗？"',
        hint: '关注风险点，体现专业素养',
        effects: { skill: 3, relationship: 2 },
        next: 'scene_2_2'
      },
      {
        text: '内心忐忑但表面淡定："好的，我准备好了。"',
        hint: '沉着冷静',
        effects: { stress_mgmt: 2, reputation: 1 },
        next: 'scene_2_2'
      }
    ]
  },

  'scene_2_2': {
    act: 2,
    title: '尽职调查准备',
    text: '<p class="narrator">项目组第一次全员会议，陈雅文亲自主持。</p><p class="dialogue">"尽职调查是IPO项目的基石。我们不仅要验证企业提供的信息是否真实，还要主动挖掘潜在风险。"</p><p>她在白板上画出DD框架：<span class="highlight">业务尽调、财务尽调、法律尽调、税务尽调</span>四大模块。</p><p class="dialogue">"华能科技的业务模式比较复杂，有三家子公司分布在不同省份。财务方面，他们近三年的收入增长率很高，但<span class="highlight">应收账款增速更快</span>——这需要重点关注。"</p><p>你被分配负责财务尽调的辅助工作，需要整理华能科技及其子公司的财务报表。</p>',
    knowledge: 'due_diligence',
    choices: [
      {
        text: '系统学习DD方法论，制作详细的尽调清单',
        hint: '方法论先行，事半功倍',
        effects: { skill: 5, reputation: 2 },
        next: 'scene_2_3'
      },
      {
        text: '直接向王浩请教实战经验和注意事项',
        hint: '向老手学习，避免踩坑',
        effects: { skill: 3, relationship: 3 },
        next: 'scene_2_3'
      },
      {
        text: '立即开始翻阅华能科技的公开资料和财报',
        hint: '快速进入状态，但可能遗漏重要维度',
        effects: { skill: 4, stress_mgmt: -2 },
        next: 'scene_2_3'
      }
    ]
  },

  'scene_2_3': {
    act: 2,
    title: '可疑关联交易',
    text: '<p class="narrator">在整理华能科技子公司——华能新材料的供应商数据时，你发现了一个异常。</p><p>华能新材料的前五大供应商中，排名第二的"鼎盛贸易"公司，其注册地址与华能科技一位董事的个人投资企业<span class="highlight">在同一栋楼的相邻房间</span>。</p><p>更巧的是，鼎盛贸易成立时间恰好在华能新材料获得大额订单的前两个月。你查看工商信息，发现鼎盛贸易的注册资本只有50万元，但与华能新材料的年交易额却高达<span class="highlight">8000万元</span>。</p><p>这可能是正常的商业关系，也可能是通过关联交易虚增收入。</p>',
    choices: [
      {
        text: '立即向李明报告这个发现，附上详细数据',
        hint: '专业负责，及时上报风险',
        effects: { skill: 3, reputation: 5, relationship: 2 },
        next: 'scene_2_4'
      },
      {
        text: '先深入调查鼎盛贸易的更多背景信息，再汇报',
        hint: '做更多功课，结论更扎实',
        effects: { skill: 5, stress_mgmt: -2 },
        next: 'scene_2_4'
      },
      {
        text: '可能只是巧合，先标记一下，继续做其他工作',
        hint: '节省时间，但可能忽略重大风险',
        effects: { skill: -1, reputation: -2 },
        next: 'scene_2_4'
      }
    ]
  },

  'scene_2_4': {
    act: 2,
    title: '财务异常分析',
    text: '<p class="narrator">李明对你的发现非常重视，让你进一步分析华能科技的财务数据。</p><p>你花了整整两天时间，把华能科技过去三年的财务数据做了详细对比：</p><p><span class="highlight">收入年增长率35%，但应收账款年增长率62%</span>。这意味着越来越多的销售收入尚未回款。经营性现金流连续两年为负，与报表上的高利润形成鲜明对比。</p><p>你还发现，华能科技在第四季度的收入占比异常高——<span class="highlight">全年45%的收入集中在12月</span>，这可能存在收入提前确认的问题。</p><p>李明看完你的分析后表情凝重：</p><p class="dialogue">"这个数据确实有问题。我们需要安排现场尽调，亲自去看看。"</p>',
    knowledge: 'revenue_recognition',
    choices: [
      {
        text: '建议同时调查同行业公司的应收账款水平作对比',
        hint: '通过行业对比增强分析的说服力',
        effects: { skill: 5, reputation: 3 },
        next: 'scene_2_5'
      },
      {
        text: '主动请缨参加现场尽调',
        hint: '争取一线实战经验',
        effects: { skill: 3, reputation: 2, relationship: 2 },
        next: 'scene_2_5'
      },
      {
        text: '将分析结论整理成PPT，方便项目组讨论',
        hint: '做好文档工作，支持团队决策',
        effects: { skill: 2, reputation: 3 },
        next: 'scene_2_5'
      }
    ]
  },

  'scene_2_5': {
    act: 2,
    title: '现场尽调',
    text: '<p class="narrator">你和李明、王浩一起前往华能科技总部进行为期三天的现场尽调。</p><p>华能科技位于一座工业园区内，厂房规模看起来与财报描述基本吻合。但在走访车间时，你注意到：</p><p>一个标称"满负荷运转"的生产线，<span class="highlight">实际开工率目测只有60%左右</span>。仓库里的库存堆积明显，有些包装已经落了灰。</p><p>更令人疑惑的是，当你要求查看与鼎盛贸易的交易合同原件时，CFO以"合同归档需要时间"为由推脱了两次。</p><p>晚上回到酒店，李明召开项目小组会议讨论当日发现。</p>',
    choices: [
      {
        text: '详细描述生产线和仓库的观察，建议调整收入预期',
        hint: '实事求是，数据说话',
        effects: { skill: 5, reputation: 4 },
        next: 'scene_2_6'
      },
      {
        text: '提出CFO回避合同问题的疑点，建议发函正式索取',
        hint: '关注合规程序，施加压力',
        effects: { skill: 4, reputation: 3, relationship: 1 },
        next: 'scene_2_6'
      },
      {
        text: '建议与一线工人私下交流，了解真实生产情况',
        hint: '从侧面验证，获取更多一手信息',
        effects: { skill: 3, relationship: 2, stress_mgmt: -1 },
        next: 'scene_2_6'
      }
    ]
  },

  'scene_2_6': {
    act: 2,
    title: '客户晚宴',
    text: '<p class="narrator">现场尽调最后一晚，华能科技的董事长刘总设宴款待项目组。</p><p>五星级酒店的包间里，觥筹交错。刘总频频举杯，气氛热烈。酒过三巡后，刘总端着酒杯走到你面前：</p><p class="dialogue">"小伙子很认真嘛，那天在车间看得很仔细。来，喝一杯！"</p><p>你不太能喝酒，但又不好扫兴。这时，刘总压低声音：</p><p class="dialogue">"你们在尽调中看到的都是一些小问题，不影响大局。<span class="highlight">我会给你们一个满意的结果的</span>。"</p><p>他说完，往你手里塞了一个信封。你低头一看，里面是一张<span class="highlight">购物卡</span>。</p>',
    knowledge: 'compliance_basics',
    choices: [
      {
        text: '婉拒购物卡，礼貌但坚定地退回',
        hint: '严守合规底线，可能得罪客户',
        effects: { reputation: 5, relationship: -2, skill: 2 },
        next: 'scene_2_7'
      },
      {
        text: '收下后立刻交给李明，说明情况',
        hint: '既不得罪客户，又保护自己',
        effects: { reputation: 3, skill: 3, relationship: 2 },
        next: 'scene_2_7'
      },
      {
        text: '收下购物卡，当作什么都没发生',
        hint: '短期便利，但埋下合规隐患',
        effects: { wealth: 2, reputation: -5, stress_mgmt: -3 },
        next: 'scene_2_7'
      }
    ]
  },

  'scene_2_7': {
    act: 2,
    title: '招股书撰写',
    text: '<p class="narrator">尽调结束后，项目组开始撰写招股说明书。你负责<span class="highlight">"财务会计信息"章节</span>。</p><p>这是一项极其繁琐但又要求精确的工作。你需要将华能科技过去三年的财务数据按照证监会要求的格式重新整理，并撰写管理层讨论与分析（MD&A）部分。</p><p>陈雅文在审阅你的初稿后给出了反馈：</p><p class="dialogue">"数据部分做得很扎实，但<span class="highlight">风险因素的描述过于笼统</span>。投资者需要看到具体的、量化的风险提示，不是套话。特别是应收账款和关联交易的风险，要写得更有针对性。"</p>',
    choices: [
      {
        text: '重新梳理风险点，用具体数据支撑每一项风险提示',
        hint: '精益求精，提升文档质量',
        effects: { skill: 5, reputation: 3, stress_mgmt: -2 },
        next: 'scene_2_8'
      },
      {
        text: '参考已上市同行的招股书措辞，对标修改',
        hint: '行业标准做法，效率较高',
        effects: { skill: 3, reputation: 2 },
        next: 'scene_2_8'
      },
      {
        text: '请王浩帮忙审阅，根据他的经验修改',
        hint: '借助团队力量，快速改进',
        effects: { skill: 2, relationship: 3 },
        next: 'scene_2_8'
      }
    ]
  },

  'scene_2_8': {
    act: 2,
    title: '内部评审会',
    text: '<p class="narrator">招股书初稿完成后，需要提交公司内部评审会审核。</p><p>评审会由公司质控部、合规部、风控部的资深人士组成。会议室里的气氛比你想象的紧张得多。</p><p>质控部总监刘军翻了几页就皱眉：</p><p class="dialogue">"这个项目的关联交易问题，你们怎么处理的？鼎盛贸易的背景查清楚了吗？"</p><p>所有人的目光投向你的方向——这部分是你负责调查的。李明看向你，微微点头，示意你来回答。</p>',
    choices: [
      {
        text: '详细汇报调查过程和结论，提出自己的专业判断',
        hint: '展示专业功底和独立判断能力',
        effects: { skill: 4, reputation: 5 },
        requires: { skill: 20 },
        next: 'scene_2_9'
      },
      {
        text: '如实汇报已知信息，坦诚说明还需要进一步调查的部分',
        hint: '诚实可靠，展示职业审慎',
        effects: { skill: 3, reputation: 4, relationship: 2 },
        next: 'scene_2_9'
      },
      {
        text: '简要回答问题，主要让李明来补充说明',
        hint: '保守应对，依赖上司',
        effects: { skill: 1, relationship: 1, reputation: 1 },
        next: 'scene_2_9'
      }
    ]
  },

  'scene_2_9': {
    act: 2,
    title: '猎头来电',
    text: '<p class="narrator">一个周五的下午，你接到一个陌生号码的电话。</p><p class="dialogue">"你好，我是瑞信猎头的Jessica。我们注意到你在宇宙证券做得不错。我手上有一个机会——<span class="highlight">金鼎证券投行部，Associate级别，薪酬涨幅50%</span>。不知道你有没有兴趣？"</p><p>你有些意外。入职才几个月，就收到了猎头的电话。金鼎证券是宇宙证券的直接竞争对手，近年来发展迅速。</p><p class="dialogue">"我可以先给你发一份JD看看，不着急做决定。周末考虑一下？"</p>',
    choices: [
      {
        text: '礼貌拒绝，表示目前专注于当前工作',
        hint: '展现忠诚度，专注发展',
        effects: { reputation: 3, stress_mgmt: 2 },
        next: 'scene_2_10'
      },
      {
        text: '表示愿意了解一下，但不做承诺',
        hint: '保持选项开放，了解市场行情',
        effects: { relationship: 1, wealth: 1 },
        next: 'scene_2_10'
      },
      {
        text: '详细询问对方公司的具体情况和待遇',
        hint: '认真评估机会，但可能分心',
        effects: { wealth: 3, stress_mgmt: -2, reputation: -1 },
        next: 'scene_2_10'
      }
    ]
  },

  'scene_2_10': {
    act: 2,
    title: '季度述职',
    text: '<p class="narrator">入职满一个季度，迎来了第一次绩效评估。</p><p>李明坐在办公桌对面，翻看着你的工作记录：</p><p class="dialogue">"这三个月你的表现总体不错。华能科技项目上的尽调工作做得比较细致，发现了关联交易的疑点，这一点值得肯定。"</p><p class="dialogue">"但也有些不足——你的<span class="highlight">报告写作还需要更精炼</span>，有时候数据堆砌太多，缺乏核心观点。另外，组会发言可以更主动一些。"</p><p>他递给你一份评分表：整体评级<span class="highlight">B+</span>，在同期新人中排名前三。</p><p class="dialogue">"继续保持，下一个季度争取A。"</p>',
    choices: [
      {
        text: '认真接受反馈，制定改进计划',
        hint: '积极改进，为下季度做准备',
        effects: { skill: 3, reputation: 2, stress_mgmt: 1 },
        next: 'scene_3_1'
      },
      {
        text: '询问如何才能达到A级，明确期望',
        hint: '目标明确，主动沟通',
        effects: { skill: 2, relationship: 3, reputation: 2 },
        next: 'scene_3_1'
      },
      {
        text: '觉得评分偏低，内心有些不服',
        hint: '自信心强，但可能影响心态',
        effects: { stress_mgmt: -2, skill: 1 },
        next: 'scene_3_1'
      }
    ]
  },

  // ============================================
  // 第三章 · 锋芒初露
  // ============================================

  'scene_3_1': {
    act: 3,
    title: '晋升高级分析师',
    text: '<p class="narrator">入职一年，凭借在华能科技IPO项目中的出色表现，你被提拔为高级分析师。</p><p>陈雅文在部门会议上宣布了这个消息：</p><p class="dialogue">"过去一年，他/她在多个项目中展现了扎实的专业能力和敏锐的风险意识。特别是在华能科技项目中，他/她发现的关联交易问题帮助我们避免了重大合规风险。"</p><p>同事们鼓掌祝贺。王浩拍拍你的肩膀：</p><p class="dialogue">"恭喜！以后你就是Senior了，开始带小朋友了。"</p><p>你注意到，同批入职的赵琳还没有得到晋升。</p>',
    knowledge: 'client_management',
    choices: [
      {
        text: '感谢团队支持，请同事们喝咖啡庆祝',
        hint: '分享喜悦，维护团队关系',
        effects: { relationship: 4, stress_mgmt: 2 },
        next: 'scene_3_2'
      },
      {
        text: '低调处理，把注意力放在下一个项目上',
        hint: '务实作风，避免引起嫉妒',
        effects: { skill: 2, reputation: 2, stress_mgmt: 1 },
        next: 'scene_3_2'
      },
      {
        text: '私下安慰赵琳，鼓励她一起进步',
        hint: '关心同事，维护友谊',
        effects: { relationship: 5, stress_mgmt: 1 },
        next: 'scene_3_2'
      }
    ]
  },

  'scene_3_2': {
    act: 3,
    title: '带实习生',
    text: '<p class="narrator">晋升后的第一个任务：带一名暑期实习生小陈。</p><p>小陈是大三学生，聪明但缺乏实务经验。你给他布置了第一个任务——整理一份可比公司估值表。</p><p>两天后，小陈交上来的表格让你头疼：数据格式不统一，计算公式有误，还有几家公司的数据明显过时了。</p><p>小陈一脸期待地看着你：</p><p class="dialogue">"学长/学姐，你看做得怎么样？"</p>',
    choices: [
      {
        text: '耐心逐项指出问题，手把手教他正确方法',
        hint: '花时间培养，长期回报',
        effects: { skill: 2, relationship: 4, stress_mgmt: -2 },
        next: 'scene_3_3'
      },
      {
        text: '给出总体评价和修改方向，让他自己改正',
        hint: '培养独立思考能力',
        effects: { skill: 3, relationship: 2 },
        next: 'scene_3_3'
      },
      {
        text: '自己重新做一遍，让他对比学习',
        hint: '确保质量，但可能惯坏实习生',
        effects: { skill: 1, stress_mgmt: -3, relationship: 2 },
        next: 'scene_3_3'
      }
    ]
  },

  'scene_3_3': {
    act: 3,
    title: '客户投诉',
    text: '<p class="narrator">一个周一早晨，你刚到办公室就收到一封紧急邮件。</p><p>华能科技上市后，股价表现不佳，从发行价<span class="highlight">下跌了25%</span>。一位认购了新股的机构投资者发来措辞激烈的投诉函：</p><p class="dialogue">"贵司作为保荐机构，在招股说明书中对华能科技的风险揭示严重不足，尤其是应收账款和关联交易风险。我们要求赔偿损失，否则将向监管部门投诉。"</p><p>李明紧急召集项目组开会：</p><p class="dialogue">"这个投诉必须妥善处理。如果我们当初的尽调和信披没有问题，就不用怕。但如果有疏漏……"</p>',
    choices: [
      {
        text: '主动整理当初的尽调底稿和信披记录，证明合规操作',
        hint: '用证据说话，专业应对',
        effects: { skill: 5, reputation: 4 },
        next: 'scene_3_4'
      },
      {
        text: '建议先与客户沟通，了解核心诉求再制定应对方案',
        hint: '以客户为中心，化解矛盾',
        effects: { relationship: 4, skill: 2 },
        next: 'scene_3_4'
      },
      {
        text: '建议合规部和法务部介入，按公司流程处理',
        hint: '按规章办事，降低个人风险',
        effects: { reputation: 2, skill: 2 },
        next: 'scene_3_4'
      }
    ]
  },

  'scene_3_4': {
    act: 3,
    title: '数据造假嫌疑',
    text: '<p class="narrator">某天深夜加班时，你无意间看到了隔壁组同事孙磊电脑上的一份文件。</p><p>那是一份某IPO项目的收入预测模型，你注意到孙磊似乎<span class="highlight">人为调高了未来三年的增长率假设</span>，从行业平均的15%改成了35%，且没有任何说明。</p><p>这意味着基于这个模型得出的估值将远高于合理水平。如果这个估值被用于招股书或投资建议，将严重误导投资者。</p><p>你和孙磊关系还不错，上个月他还帮你处理了一个紧急任务。</p>',
    knowledge: 'corporate_governance',
    choices: [
      {
        text: '先私下找孙磊确认，也许有合理的解释',
        hint: '给朋友机会，但可能让自己陷入被动',
        effects: { relationship: 2, stress_mgmt: -3 },
        next: 'scene_3_5'
      },
      {
        text: '直接向李明报告这个发现',
        hint: '职业操守优先，但可能得罪同事',
        effects: { reputation: 5, relationship: -3, stress_mgmt: -2 },
        next: 'scene_3_5'
      },
      {
        text: '当作没看到，这不关你的事',
        hint: '明哲保身，但可能承担连带责任',
        effects: { stress_mgmt: 1, reputation: -3 },
        next: 'scene_3_5'
      }
    ]
  },

  'scene_3_5': {
    act: 3,
    title: '举报的两难',
    text: '<p class="narrator">无论你之前如何选择，事情进一步发展了。</p><p>你了解到，孙磊调高增长率的项目已经通过了内部评审，正在向证监会申报。如果数据确实有问题，一旦上市后暴雷，不仅投资者会遭受损失，宇宙证券作为保荐机构也将面临严厉处罚。</p><p>公司内部有匿名举报渠道，但你也知道，一旦被查出是你举报的，同事关系将非常尴尬。</p><p class="narrator">你面临职业生涯中的第一次重大道德考验。</p>',
    choices: [
      {
        text: '通过匿名渠道向合规部举报',
        hint: '保护投资者利益，坚守职业道德',
        effects: { reputation: 5, stress_mgmt: -3, relationship: -2 },
        next: 'scene_3_6'
      },
      {
        text: '再次找孙磊谈话，劝他自行更正',
        hint: '给同事最后一次机会',
        effects: { relationship: 3, stress_mgmt: -2 },
        next: 'scene_3_6'
      },
      {
        text: '向李明透露疑虑，但不直接指认孙磊',
        hint: '迂回策略，让上司去调查',
        effects: { reputation: 3, relationship: 1, skill: 2 },
        next: 'scene_3_6'
      }
    ]
  },

  'scene_3_6': {
    act: 3,
    title: '供应商纠纷',
    text: '<p class="narrator">项目组需要选择一家评估机构对华能科技的一项专利资产进行评估。</p><p>你收到了三家评估机构的报价。其中，报价最低的"恒信评估"被华能科技的CFO强烈推荐，但你查到这家机构<span class="highlight">曾因评估报告失实被行业协会警告</span>。</p><p>而报价最高的"正源评估"是业内口碑最好的机构之一，但费用是恒信的三倍。</p><p>华能科技的CFO私下跟你说：</p><p class="dialogue">"选恒信就行了，大家都这么干的，省下来的钱也是帮投资者节省发行费用嘛。"</p>',
    choices: [
      {
        text: '坚持选择正源评估，向客户解释评估质量的重要性',
        hint: '质量优先，可能增加客户成本',
        effects: { skill: 3, reputation: 4, relationship: -1 },
        next: 'scene_3_7'
      },
      {
        text: '选择排名第二的机构，各方面比较平衡',
        hint: '折中方案，风险可控',
        effects: { skill: 2, relationship: 2 },
        next: 'scene_3_7'
      },
      {
        text: '接受CFO建议，选择恒信评估',
        hint: '迎合客户，但存在质量风险',
        effects: { relationship: 2, reputation: -3, wealth: 1 },
        next: 'scene_3_7'
      }
    ]
  },

  'scene_3_7': {
    act: 3,
    title: '行业峰会',
    text: '<p class="narrator">你代表公司参加了在深圳举办的"中国投资银行年度峰会"。</p><p>来自全国各大券商的投行精英齐聚一堂。茶歇期间，你遇到了大学时的学长——现在在证监会发行部工作的赵明。</p><p class="dialogue">"听说你在宇宙证券做得不错。我们部门最近在审一个你们的材料，华能科技？有些问题想跟你们沟通。"</p><p>此外，你还在论坛上结识了几位来自头部基金的基金经理，他们对新能源赛道的见解让你受益匪浅。</p>',
    knowledge: 'portfolio_theory',
    choices: [
      {
        text: '重点维护与赵明的关系，这对项目审批很有帮助',
        hint: '监管关系是投行的核心资源',
        effects: { relationship: 5, reputation: 2 },
        next: 'scene_3_8'
      },
      {
        text: '多认识几位基金经理，拓展机构投资者网络',
        hint: '积累客户资源，为未来铺路',
        effects: { relationship: 4, skill: 2, wealth: 1 },
        next: 'scene_3_8'
      },
      {
        text: '专注听论坛演讲，学习行业前沿知识',
        hint: '知识积累，提升专业视野',
        effects: { skill: 5, reputation: 1 },
        next: 'scene_3_8'
      }
    ]
  },

  'scene_3_8': {
    act: 3,
    title: '内部竞聘',
    text: '<p class="narrator">公司发布了一则内部竞聘公告：投行部新设的<span class="highlight">"科创业务组"需要一名组长</span>。</p><p>这是一个Associate级别就能申请的管理岗位，负责开拓科创板IPO业务。你虽然资历尚浅，但过去一年在TMT领域的表现有目共睹。</p><p>李明鼓励你：</p><p class="dialogue">"可以试试，就算这次没选上，也让领导看到你的上进心。不过你的竞争对手包括三组的王志强，他在公司已经五年了。"</p>',
    choices: [
      {
        text: '认真准备竞聘演讲，展示对科创业务的深度理解',
        hint: '全力争取，展示战略眼光',
        effects: { skill: 3, reputation: 4, stress_mgmt: -2 },
        requires: { skill: 30 },
        next: 'scene_3_9'
      },
      {
        text: '参加竞聘，但把重心放在学习竞聘过程中',
        hint: '以学习心态参与，积累面试经验',
        effects: { skill: 2, relationship: 2, stress_mgmt: 1 },
        next: 'scene_3_9'
      },
      {
        text: '觉得自己资历不够，决定不参加',
        hint: '等待更好的时机',
        effects: { stress_mgmt: 2, reputation: -1 },
        next: 'scene_3_9'
      }
    ]
  },

  'scene_3_9': {
    act: 3,
    title: '跨部门协作',
    text: '<p class="narrator">陈雅文安排你参与一个跨部门项目——配合研究部和资管部，为一家大型国企客户设计<span class="highlight">综合金融服务方案</span>。</p><p>项目需要投行部负责融资方案、研究部提供行业分析、资管部设计资产管理产品。三个部门的人坐在一起，很快就发现沟通并不顺畅。</p><p>研究部的同事认为投行部过于乐观，资管部的同事觉得方案太保守。每个人都在用自己的专业语言说话，互相之间缺乏理解。</p><p>作为项目协调人，你意识到需要有人来"翻译"和"协调"。</p>',
    choices: [
      {
        text: '主动做桥梁，把各方诉求翻译成统一语言',
        hint: '提升沟通协调能力，增加曝光度',
        effects: { relationship: 5, skill: 3, reputation: 3 },
        next: 'scene_3_10'
      },
      {
        text: '让各部门先分别出方案，再统一整合',
        hint: '分工明确的传统做法',
        effects: { skill: 3, stress_mgmt: 1 },
        next: 'scene_3_10'
      },
      {
        text: '请陈雅文出面协调，借助领导权威推进',
        hint: '借力上位，但可能显得自己能力不足',
        effects: { relationship: 1, reputation: -1 },
        next: 'scene_3_10'
      }
    ]
  },

  'scene_3_10': {
    act: 3,
    title: '年终奖金',
    text: '<p class="narrator">年底，最令人期待也最让人焦虑的时刻——年终奖公布。</p><p>你的年终奖是<span class="highlight">18万元</span>，相当于大约5个月工资。同组的高级分析师王浩据说拿了30万+。</p><p>李明找你谈话：</p><p class="dialogue">"今年的奖金主要参考了你在华能科技项目和跨部门协作中的表现。在同期入职的人里，你的奖金是最高的。明年如果能独立承担更多项目，奖金还会有较大提升。"</p><p>赵琳的奖金只有8万，她显得有些失落。</p>',
    choices: [
      {
        text: '对奖金表示满意，用一部分奖金请团队吃饭',
        hint: '分享成果，增进团队凝聚力',
        effects: { relationship: 4, stress_mgmt: 2, wealth: -1 },
        next: 'scene_4_1'
      },
      {
        text: '存下大部分奖金，开始学习投资理财',
        hint: '理性消费，积累财富',
        effects: { wealth: 4, skill: 2 },
        next: 'scene_4_1'
      },
      {
        text: '觉得与自己的贡献不匹配，考虑跳槽',
        hint: '不满现状，但跳槽需谨慎',
        effects: { stress_mgmt: -3, wealth: 2 },
        next: 'scene_4_1'
      }
    ]
  },

  // ============================================
  // 第四章 · 市场风暴
  // ============================================

  'scene_4_1': {
    act: 4,
    title: '黑天鹅降临',
    text: '<p class="narrator">周一早上九点十五分，你刚到办公室就感受到了异常的气氛。</p><p>所有人的眼睛都盯着屏幕。<span class="highlight">受突发地缘政治危机影响，亚太股市全面暴跌。</span>上证综指开盘就跌了4%，创业板指更是暴跌6%。</p><p>新闻推送不断弹出：某大国突然宣布军事行动，原油价格飙升30%，全球避险资产价格飞涨。这是自2008年金融危机以来最严重的单日跌幅。</p><p>李明的声音从会议室传来：</p><p class="dialogue">"所有人到会议室！紧急会议！"</p>',
    knowledge: 'risk_management',
    choices: [
      {
        text: '带着笔记本和最新的市场数据冲进会议室',
        hint: '准备好数据，随时可以贡献分析',
        effects: { skill: 3, reputation: 3 },
        next: 'scene_4_2'
      },
      {
        text: '先快速浏览所有持仓客户的风险敞口',
        hint: '优先关注客户风险，专业应对',
        effects: { skill: 4, relationship: 2, reputation: 2 },
        next: 'scene_4_2'
      },
      {
        text: '深呼吸让自己冷静，然后稳步走向会议室',
        hint: '保持冷静，不被恐慌情绪裹挟',
        effects: { stress_mgmt: 3, skill: 1 },
        next: 'scene_4_2'
      }
    ]
  },

  'scene_4_2': {
    act: 4,
    title: '恐慌性赎回',
    text: '<p class="narrator">暴跌持续到第三天，情况更加严峻。</p><p>宇宙证券资管部门管理的多只基金遭遇了<span class="highlight">大规模赎回申请</span>。其中一只债券基金的单日赎回申请达到了总规模的25%，触发了巨额赎回条款。</p><p>你被临时借调到资管部帮忙处理客户沟通。电话此起彼伏，客户的声音从焦虑到愤怒不等：</p><p class="dialogue">"你们为什么不早点提醒我风险？！"</p><p class="dialogue">"我要全部赎回！一分钱都不要留！"</p><p class="dialogue">"你们是不是把我的钱拿去炒股了？"</p><p>一位大妈在营业部现场哭闹，场面一度失控。</p>',
    knowledge: 'behavioral_finance',
    choices: [
      {
        text: '耐心向每位客户解释市场情况和赎回条款',
        hint: '专业服务，安抚情绪',
        effects: { relationship: 4, skill: 2, stress_mgmt: -3 },
        next: 'scene_4_3'
      },
      {
        text: '建议客户理性看待市场波动，不要恐慌性赎回',
        hint: '从专业角度提供建议',
        effects: { skill: 3, relationship: 2, reputation: 2 },
        next: 'scene_4_3'
      },
      {
        text: '严格按照合同条款处理，不做额外沟通',
        hint: '合规操作，但可能激化矛盾',
        effects: { skill: 1, relationship: -2, stress_mgmt: 1 },
        next: 'scene_4_3'
      }
    ]
  },

  'scene_4_3': {
    act: 4,
    title: '紧急风控会议',
    text: '<p class="narrator">公司高层召开紧急风控会议，各部门负责人悉数到场。</p><p>风控总监面色凝重：</p><p class="dialogue">"目前公司的<span class="highlight">自营投资组合浮亏超过3亿元</span>，资管端赎回压力持续加大，投行部有三个在途项目的定价窗口被迫推迟。我们的流动性缓冲还能支撑大约两周。"</p><p>CEO环视全场：</p><p class="dialogue">"现在需要各部门通力合作。投行部，你们评估一下在途项目受影响的程度。研究部出一份紧急市场分析报告。我需要每个人拿出应对方案。"</p><p>李明看向你，希望你能帮忙准备投行业务影响评估。</p>',
    knowledge: 'asset_liability',
    choices: [
      {
        text: '连夜完成在途项目影响评估报告',
        hint: '全力以赴，关键时刻展现担当',
        effects: { skill: 4, reputation: 5, stress_mgmt: -4 },
        next: 'scene_4_4'
      },
      {
        text: '主动请缨协助风控部做流动性压力测试',
        hint: '跨部门协作，接触核心风控技术',
        effects: { skill: 5, relationship: 3, stress_mgmt: -3 },
        next: 'scene_4_4'
      },
      {
        text: '做好本职工作，等上级安排具体任务',
        hint: '等待指令，保守应对',
        effects: { stress_mgmt: 1, reputation: -1 },
        next: 'scene_4_4'
      }
    ]
  },

  'scene_4_4': {
    act: 4,
    title: '市场分析报告',
    text: '<p class="narrator">研究部总监找到你，希望你能协助撰写一份<span class="highlight">市场危机分析报告</span>。</p><p>这份报告将同时供公司管理层决策参考和向重要客户发布。你需要在极短时间内完成：</p><p>1. 分析本次危机的传导路径和影响范围<br>2. 对主要资产类别的走势做出短期判断<br>3. 给出投资策略建议</p><p>你面前堆满了各种数据和新闻，时间只有24小时。</p>',
    choices: [
      {
        text: '聚焦核心逻辑，用简洁清晰的分析框架完成报告',
        hint: '高质量的分析胜过面面俱到',
        effects: { skill: 5, reputation: 4, stress_mgmt: -2 },
        next: 'scene_4_5'
      },
      {
        text: '尽可能多地收集数据和观点，做一份全面详尽的报告',
        hint: '信息量丰富，但可能错过截止时间',
        effects: { skill: 4, stress_mgmt: -4 },
        next: 'scene_4_5'
      },
      {
        text: '参考国际投行的类似报告，快速搭建框架',
        hint: '借鉴成熟框架，提高效率',
        effects: { skill: 3, reputation: 2 },
        next: 'scene_4_5'
      }
    ]
  },

  'scene_4_5': {
    act: 4,
    title: '媒体采访',
    text: '<p class="narrator">你的市场分析报告引起了关注。一家知名财经媒体的记者联系到你，希望能做一个简短的电话采访。</p><p class="dialogue">"我们是《财经观察》的记者。关于这次市场暴跌，我们想请宇宙证券的专业人士谈谈看法。您在报告中的一些观点非常有见地。"</p><p>你知道公司有严格的信息发布流程，未经公关部批准不能代表公司接受采访。但记者说：</p><p class="dialogue">"我们可以标注为\'个人观点\'，而且这对提升您的个人知名度很有帮助。"</p>',
    choices: [
      {
        text: '婉拒采访，建议记者联系公司公关部',
        hint: '严格遵守公司规定，保护自己',
        effects: { reputation: 4, relationship: 1 },
        next: 'scene_4_6'
      },
      {
        text: '先请示李明和公关部，获得批准后再接受',
        hint: '走正规流程，既合规又有曝光',
        effects: { reputation: 3, skill: 2, relationship: 2 },
        next: 'scene_4_6'
      },
      {
        text: '接受采访，以个人名义发表看法',
        hint: '快速获得知名度，但可能违规',
        effects: { reputation: -3, relationship: 2, stress_mgmt: -2 },
        next: 'scene_4_6'
      }
    ]
  },

  'scene_4_6': {
    act: 4,
    title: '交易对手风险',
    text: '<p class="narrator">危机进入第二周，一个更棘手的问题出现了。</p><p>宇宙证券的一家重要交易对手——某中小型券商传出<span class="highlight">流动性危机</span>的消息。如果这家券商违约，宇宙证券将有超过<span class="highlight">5000万元的应收款项</span>面临风险。</p><p>风控部紧急排查后发现，投行部有两个项目的承销团中就有这家券商。李明把你叫来：</p><p class="dialogue">"我需要你评估一下，如果对方违约，对我们的项目影响有多大，以及有没有替代方案。"</p>',
    choices: [
      {
        text: '立即量化风险敞口，并联系潜在替代承销商',
        hint: '迅速行动，制定应急预案',
        effects: { skill: 5, reputation: 4, stress_mgmt: -2 },
        next: 'scene_4_7'
      },
      {
        text: '深入分析对方违约概率，避免过度反应',
        hint: '冷静分析，不盲目恐慌',
        effects: { skill: 4, stress_mgmt: 1 },
        next: 'scene_4_7'
      },
      {
        text: '建议暂停所有涉及该券商的合作',
        hint: '最保守的做法，但可能影响项目进度',
        effects: { reputation: 2, skill: 1, relationship: -2 },
        next: 'scene_4_7'
      }
    ]
  },

  'scene_4_7': {
    act: 4,
    title: '做空报告',
    text: '<p class="narrator">屋漏偏逢连夜雨。一家海外做空机构发布了一份针对A股新能源板块的<span class="highlight">做空报告</span>，其中点名了宇宙证券保荐的华能科技。</p><p>报告指控华能科技<span class="highlight">虚增收入、关联交易输送利益</span>，并质疑公司的核心技术含量。华能科技股价开盘即跌停。</p><p>华能科技的董事长刘总打来电话，语气激动：</p><p class="dialogue">"你们是怎么做保荐的？！为什么不帮我们应对？我要追究你们的责任！"</p><p>公司内部也开始有人质疑当初的尽调是否到位。</p>',
    choices: [
      {
        text: '拿出当初的尽调底稿，证明保荐工作合规到位',
        hint: '用证据说话，保护自己和公司',
        effects: { skill: 3, reputation: 5 },
        next: 'scene_4_8'
      },
      {
        text: '建议华能科技发布澄清公告，同时协助准备应对材料',
        hint: '积极帮助客户，维护关系',
        effects: { relationship: 5, skill: 3, stress_mgmt: -3 },
        next: 'scene_4_8'
      },
      {
        text: '建议公司成立专项应对小组，系统性回应做空指控',
        hint: '组织化应对，展示大局观',
        effects: { reputation: 4, skill: 3, relationship: 2 },
        next: 'scene_4_8'
      }
    ]
  },

  'scene_4_8': {
    act: 4,
    title: '集体诉讼',
    text: '<p class="narrator">华能科技的投资者开始组织<span class="highlight">集体诉讼</span>，声称保荐机构在IPO过程中未尽到审慎义务。</p><p>法律部的同事告诉你，目前投资者索赔金额已经超过<span class="highlight">2亿元</span>。如果法院判定保荐机构有过错，宇宙证券可能面临巨额赔偿。</p><p>你被要求配合法律部整理所有与华能科技项目相关的底稿文件。在翻阅资料时，你发现了一份关键文件——当初你发现鼎盛贸易关联交易问题时，<span class="highlight">你写的一份内部备忘录</span>。</p><p>这份备忘录记录了你对关联交易的疑虑以及后续跟进的过程。</p>',
    knowledge: 'securities_law',
    choices: [
      {
        text: '如实提交所有文件，包括那份备忘录',
        hint: '坦诚配合，备忘录恰好证明你尽到了责任',
        effects: { reputation: 5, skill: 2 },
        next: 'scene_4_9'
      },
      {
        text: '提交文件前，先请法律部的同事帮你评估风险',
        hint: '谨慎行事，保护自己',
        effects: { skill: 3, stress_mgmt: 1, reputation: 2 },
        next: 'scene_4_9'
      },
      {
        text: '只提交被明确要求提供的文件',
        hint: '被动配合，不多不少',
        effects: { stress_mgmt: 1, reputation: -1 },
        next: 'scene_4_9'
      }
    ]
  },

  'scene_4_9': {
    act: 4,
    title: '监管问询',
    text: '<p class="narrator">证监会对宇宙证券发出了<span class="highlight">监管问询函</span>，要求就华能科技IPO项目的保荐工作做出书面说明。</p><p>这是你职业生涯中第一次面对监管问询。整个项目组被要求逐一接受内部访谈，回顾项目执行的每一个环节。</p><p>合规部周婷在访谈前找到你：</p><p class="dialogue">"你在项目中发现了关联交易的问题并且做了记录，这是好的。但监管可能会问你<span class="highlight">为什么发现了问题却没有进一步追查</span>。你要有心理准备。"</p>',
    choices: [
      {
        text: '坦诚回答所有问题，承认不足但展示尽职记录',
        hint: '诚实是最好的策略',
        effects: { reputation: 5, skill: 3, stress_mgmt: -3 },
        next: 'scene_4_10'
      },
      {
        text: '在合规律师的陪同下接受访谈，谨慎措辞',
        hint: '有法律支持，降低风险',
        effects: { skill: 2, reputation: 3, stress_mgmt: -1 },
        next: 'scene_4_10'
      },
      {
        text: '尽量淡化自己的角色，强调是按照上级指示行事',
        hint: '推卸责任，可能引起更多质疑',
        effects: { reputation: -3, stress_mgmt: -1 },
        next: 'scene_4_10'
      }
    ]
  },

  'scene_4_10': {
    act: 4,
    title: '风暴之后',
    text: '<p class="narrator">市场逐渐企稳，华能科技事件也有了初步结果。</p><p>证监会的调查结论是：宇宙证券的保荐工作<span class="highlight">"基本合规，但在关联交易核查方面存在不足"</span>，被出具监管警示函，但未被暂停业务资格。</p><p>公司决定对项目组进行内部追责。李明被扣发半年奖金，你收到了口头警告。</p><p>但陈雅文在部门会议上说了一句话：</p><p class="dialogue">"这次危机也让我们看到了谁在关键时刻靠得住。有些人在压力下选择了逃避，而有些人选择了面对。<span class="highlight">经验是最好的老师，挫折是成长的阶梯。</span>"</p><p>她看了你一眼，微微点头。</p>',
    choices: [
      {
        text: '深刻反思，撰写一份个人复盘报告',
        hint: '从失败中学习，为未来做准备',
        effects: { skill: 5, stress_mgmt: 3, reputation: 2 },
        next: 'scene_5_1'
      },
      {
        text: '主动找李明谈话，讨论如何改进工作流程',
        hint: '建设性态度，加强上下级沟通',
        effects: { relationship: 4, skill: 3 },
        next: 'scene_5_1'
      },
      {
        text: '虽然受了委屈，但选择默默消化',
        hint: '内心强大，但可能积累负面情绪',
        effects: { stress_mgmt: -2, reputation: 1 },
        next: 'scene_5_1'
      }
    ]
  },

  // ============================================
  // 第五章 · 权力游戏
  // ============================================

  'scene_5_1': {
    act: 5,
    title: '合伙人裂痕',
    text: '<p class="narrator">风暴过后，宇宙证券内部的权力格局悄然发生变化。</p><p>公司两位核心合伙人——<span class="highlight">主管投行的赵国栋和主管资管的林建华</span>——因为资源分配问题产生了严重分歧。</p><p>赵国栋认为投行业务是公司的核心竞争力，应该获得更多人力和资金支持；林建华则主张资管业务才是未来，应该大力发展主动管理能力。</p><p>两位合伙人在管理层会议上多次激烈交锋，整个公司的气氛变得微妙。各个部门的人开始不自觉地"站队"。</p><p>作为投行部的人，你不可避免地被卷入了这场权力游戏。</p>',
    choices: [
      {
        text: '保持中立，专注做好自己的工作',
        hint: '不卷入政治，但可能被两边都不信任',
        effects: { skill: 2, stress_mgmt: 2, reputation: 1 },
        next: 'scene_5_2'
      },
      {
        text: '暗中观察局势，寻找对自己最有利的位置',
        hint: '审时度势，但需要高超的政治智慧',
        effects: { relationship: 2, skill: 1 },
        next: 'scene_5_2'
      },
      {
        text: '主动向李明请教该如何应对这种局面',
        hint: '向上司寻求指导',
        effects: { relationship: 3, skill: 2 },
        next: 'scene_5_2'
      }
    ]
  },

  'scene_5_2': {
    act: 5,
    title: '被迫站队',
    text: '<p class="narrator">事情发展得比你预想的更快。</p><p>赵国栋直接找到投行部的几位骨干，包括你：</p><p class="dialogue">"公司即将召开合伙人会议，我需要投行部拿出一份<span class="highlight">业务发展规划</span>，证明投行业务值得更多投入。这份规划由陈雅文牵头，你来协助她。"</p><p>这实际上是让你公开站在赵国栋一边。如果拒绝，可能得罪直接管你的领导；如果接受，就会被林建华阵营视为"对手"。</p><p>更棘手的是，你私下觉得林建华的一些观点是有道理的——资管确实是行业未来的方向。</p>',
    choices: [
      {
        text: '接受任务，全力准备投行业务规划',
        hint: '支持直属领导，巩固在投行部的地位',
        effects: { relationship: 3, reputation: 3, skill: 2 },
        next: 'scene_5_3'
      },
      {
        text: '接受任务，但在规划中也提出投行与资管协同的方案',
        hint: '兼顾双方立场，展示战略视野',
        effects: { skill: 4, reputation: 2, relationship: 1 },
        next: 'scene_5_3'
      },
      {
        text: '以手头项目太忙为由婉拒',
        hint: '避免卷入政治，但可能得罪赵国栋',
        effects: { stress_mgmt: 1, relationship: -3, reputation: -2 },
        next: 'scene_5_3'
      }
    ]
  },

  'scene_5_3': {
    act: 5,
    title: '同事抢功',
    text: '<p class="narrator">你在业务规划中提出的一个创新思路——"投行+研究的行业深耕模式"——被陈雅文提交给了管理层。</p><p>然而在汇报会上，另一位VP王磊却把这个方案<span class="highlight">当作自己的想法</span>来陈述，甚至连PPT都是你做的。陈雅文当时不在场，没有人能证明这个方案的真正来源。</p><p>会后，同事小刘悄悄跟你说：</p><p class="dialogue">"那个方案不是你想出来的吗？怎么变成王磊的了？"</p>',
    choices: [
      {
        text: '找王磊私下沟通，要求他承认你的贡献',
        hint: '直接对质，维护权益',
        effects: { reputation: 2, relationship: -2, stress_mgmt: -2 },
        next: 'scene_5_4'
      },
      {
        text: '向陈雅文反映真实情况',
        hint: '通过正当渠道解决',
        effects: { reputation: 3, relationship: 2, skill: 1 },
        next: 'scene_5_4'
      },
      {
        text: '忍气吞声，相信长期来看能力会被看到',
        hint: '大度处理，但可能助长不公平',
        effects: { stress_mgmt: -3, reputation: -1 },
        next: 'scene_5_4'
      }
    ]
  },

  'scene_5_4': {
    act: 5,
    title: '客户争夺',
    text: '<p class="narrator">一个新的IPO客户——<span class="highlight">芯创微电子</span>——同时被投行二组和三组盯上了。</p><p>二组（你所在）的组长李明认为，芯创微属于TMT行业，应该归二组负责；三组的王磊则声称他早就跟这家公司的创始人建立了关系，项目应该归他。</p><p>双方僵持不下，事情闹到了陈雅文那里。陈雅文决定让两组分别做pitch，由客户自己选择。</p><p>李明把准备pitch book的任务交给了你：</p><p class="dialogue">"这是我们组的脸面，必须赢。"</p>',
    choices: [
      {
        text: '深入研究芯创微的业务，做一份极具针对性的pitch book',
        hint: '用专业说话，打动客户',
        effects: { skill: 5, reputation: 4, stress_mgmt: -3 },
        next: 'scene_5_5'
      },
      {
        text: '除了专业方案，还动用个人关系了解客户的真实需求',
        hint: '信息优势是竞争的关键',
        effects: { relationship: 3, skill: 2 },
        next: 'scene_5_5'
      },
      {
        text: '中规中矩地完成pitch book，避免引发更大冲突',
        hint: '完成任务但不出风头',
        effects: { skill: 2, stress_mgmt: 1 },
        next: 'scene_5_5'
      }
    ]
  },

  'scene_5_5': {
    act: 5,
    title: '流程改革',
    text: '<p class="narrator">在经历了多次项目中的沟通不畅后，你决定提出一个<span class="highlight">项目流程优化方案</span>。</p><p>你发现目前投行部的项目管理存在几个问题：信息传递不及时、底稿管理混乱、各岗位权责不清。你花了两个周末写了一份详细的改革建议书。</p><p>当你把建议书提交给李明时，他的反应有些微妙：</p><p class="dialogue">"想法不错，但你这是在暗示我们现在的管理有问题？"</p><p>陈雅文倒是表示了支持：</p><p class="dialogue">"年轻人有想法是好事，让他先在组内试行看看效果。"</p>',
    choices: [
      {
        text: '在组内小范围试行，用结果说话',
        hint: '循序渐进，减少阻力',
        effects: { skill: 4, reputation: 3, relationship: 2 },
        next: 'scene_5_6'
      },
      {
        text: '直接向陈雅文汇报，争取部门层面推广',
        hint: '越级汇报有风险，但推进更快',
        effects: { reputation: 3, relationship: -2, skill: 2 },
        next: 'scene_5_6'
      },
      {
        text: '放弃改革想法，专注于手头的业务工作',
        hint: '避免政治风险，但失去创新机会',
        effects: { stress_mgmt: 2, skill: 1 },
        next: 'scene_5_6'
      }
    ]
  },

  'scene_5_6': {
    act: 5,
    title: '客户跳槽危机',
    text: '<p class="narrator">一个令人震惊的消息传来：宇宙证券最重要的客户之一——<span class="highlight">宏达集团</span>——正在与金鼎证券接触，打算把下一个IPO项目交给他们。</p><p>宏达集团与宇宙证券合作了五年，贡献了超过<span class="highlight">3000万元的收入</span>。如果失去这个客户，将是一个巨大的打击。</p><p>陈雅文紧急召集团队分析原因。原来，宏达集团的CFO对宇宙证券在上一次项目中的服务不满意，觉得"响应太慢，不够重视"。</p><p class="dialogue">"我们需要一个方案来挽回这个客户。谁愿意负责？"</p>',
    choices: [
      {
        text: '主动请缨，制定一份全面的客户挽留方案',
        hint: '承担责任，展示领导潜力',
        effects: { skill: 3, reputation: 5, relationship: 2 },
        requires: { relationship: 30 },
        next: 'scene_5_7'
      },
      {
        text: '建议由李明出面，自己提供后台支持',
        hint: '让更有分量的人出面，自己在后方协助',
        effects: { skill: 2, relationship: 2, reputation: 1 },
        next: 'scene_5_7'
      },
      {
        text: '分析客户流失的深层原因，写一份分析报告',
        hint: '从根源找问题，为决策提供依据',
        effects: { skill: 4, reputation: 2 },
        next: 'scene_5_7'
      }
    ]
  },

  'scene_5_7': {
    act: 5,
    title: '客户谈判',
    text: '<p class="narrator">你跟随陈雅文前往宏达集团总部进行挽留谈判。</p><p>宏达集团的董事长赵宏达亲自出面，态度强硬：</p><p class="dialogue">"金鼎证券给了我们更好的条件——费率低20%，而且承诺安排更资深的团队。你们宇宙证券有什么优势？"</p><p>陈雅文让你来介绍服务方案的亮点。你事先做了充分准备，知道宏达集团最关心的不是费率，而是<span class="highlight">上市后的估值水平和投资者质量</span>。</p>',
    choices: [
      {
        text: '用数据和案例展示宇宙证券在估值和投资者网络方面的优势',
        hint: '抓住客户核心诉求，用专业说服',
        effects: { skill: 5, relationship: 4, reputation: 4 },
        requires: { skill: 35 },
        next: 'scene_5_8'
      },
      {
        text: '坦诚承认之前的服务不足，展示改进方案',
        hint: '以诚动人，承认问题比回避更有力量',
        effects: { relationship: 5, reputation: 3 },
        next: 'scene_5_8'
      },
      {
        text: '承诺给予费率优惠和更多增值服务',
        hint: '短期让利换取客户留存',
        effects: { wealth: -2, relationship: 3, reputation: 1 },
        next: 'scene_5_8'
      }
    ]
  },

  'scene_5_8': {
    act: 5,
    title: '组织调整',
    text: '<p class="narrator">公司宣布了一次重大组织架构调整。</p><p>投行部从原来的三个组扩充为<span class="highlight">五个行业组</span>：TMT、医疗健康、消费、制造业、新能源。每个组需要一名总监和两名副总监。</p><p>这意味着更多的管理岗位和晋升机会，但同时也带来了人员调整和利益重新分配。</p><p>你被暗示有可能成为TMT组的副总监——如果能在接下来的晋升评审中通过的话。</p><p>但竞争对手王磊也在觊觎这个位置。</p>',
    choices: [
      {
        text: '全力以赴准备晋升评审，用业绩说话',
        hint: '业绩是硬道理',
        effects: { skill: 4, reputation: 3, stress_mgmt: -2 },
        next: 'scene_5_9'
      },
      {
        text: '利用这次组织调整的机会，拓展自己在多个行业组的人脉',
        hint: '广结善缘，为未来发展铺路',
        effects: { relationship: 5, skill: 1 },
        next: 'scene_5_9'
      },
      {
        text: '保持平常心，做好当前工作',
        hint: '淡泊名利，专注本职',
        effects: { stress_mgmt: 3, skill: 2 },
        next: 'scene_5_9'
      }
    ]
  },

  'scene_5_9': {
    act: 5,
    title: 'VP晋升机会',
    text: '<p class="narrator">人力资源部正式发布了VP晋升评审通知。</p><p>申请条件：<span class="highlight">在公司服务满三年，至少主导或深度参与三个完整项目，绩效考核连续两次B+以上</span>。</p><p>你核对了条件，刚好满足。这是你职业生涯的关键一步——从Associate/Senior Analyst到VP，意味着从执行者到管理者的跨越。</p><p>评审包括三个环节：业绩汇报、案例分析、高管面试。每个环节都至关重要。</p><p>李明拍了拍你的肩膀：</p><p class="dialogue">"准备好了吗？这次评审的竞争很激烈。"</p>',
    choices: [
      {
        text: '用两周时间系统准备，模拟每个环节',
        hint: '充分准备，不打无准备之仗',
        effects: { skill: 4, stress_mgmt: -2, reputation: 2 },
        next: 'scene_5_10'
      },
      {
        text: '请已经晋升VP的同事分享经验',
        hint: '向前辈取经，了解评审重点',
        effects: { relationship: 3, skill: 3 },
        next: 'scene_5_10'
      },
      {
        text: '凭真实水平应考，不做特殊准备',
        hint: '自信从容，但可能低估评审难度',
        effects: { stress_mgmt: 2, skill: 1 },
        next: 'scene_5_10'
      }
    ]
  },

  'scene_5_10': {
    act: 5,
    title: '晋升答辩',
    text: '<p class="narrator">晋升评审日。</p><p>你坐在评审委员会面前——五位高管一字排开，包括赵国栋、林建华、HR总监和两位外部评委。</p><p>第一个环节是业绩汇报，你用15分钟展示了过去三年参与的项目和贡献。</p><p>第二个环节是案例分析：给你一个虚拟的并购案例，要求现场分析交易结构、估值和潜在风险。</p><p>最后一个环节，赵国栋问了一个尖锐的问题：</p><p class="dialogue">"在华能科技项目中，你发现了关联交易问题但最终公司还是被出了监管警示函。你觉得你当初应该怎么做？"</p>',
    choices: [
      {
        text: '坦诚反思不足，提出系统性的改进方案',
        hint: '从失败中学习的态度最有说服力',
        effects: { skill: 4, reputation: 5, relationship: 2 },
        next: 'scene_6_1'
      },
      {
        text: '客观分析当时的制度缺陷，强调个人的尽责表现',
        hint: '不卑不亢，用事实说话',
        effects: { skill: 3, reputation: 4 },
        next: 'scene_6_1'
      },
      {
        text: '强调这是团队决策，自己只是执行者',
        hint: '回避个人责任，可能减分',
        effects: { reputation: -2, skill: 1 },
        next: 'scene_6_1'
      }
    ]
  },

  // ============================================
  // 第六章 · 合规危机
  // ============================================

  'scene_6_1': {
    act: 6,
    title: '证监会突击检查',
    text: '<p class="narrator">一个普通的工作日上午，几位身着正装的人走进了宇宙证券的办公大楼。</p><p>前台确认后，整个公司陷入了紧张——<span class="highlight">证监会稽查组来了</span>，进行突击现场检查。</p><p>稽查人员出示了调查通知书，要求调取投行部近三年的所有项目底稿、通讯记录、会议纪要。同时要求所有相关人员不得离开办公区域。</p><p>李明在走廊里碰到你，压低声音说：</p><p class="dialogue">"别紧张，配合调查就好。记住，如实回答问题，不要隐瞒也不要多嘴。"</p>',
    knowledge: 'compliance_basics',
    choices: [
      {
        text: '冷静配合，主动提供自己负责的项目资料',
        hint: '专业配合，展示合规意识',
        effects: { reputation: 4, skill: 2 },
        next: 'scene_6_2'
      },
      {
        text: '先悄悄检查自己经手的文件，确保没有遗漏',
        hint: '自查自纠，避免意外',
        effects: { skill: 3, stress_mgmt: -2 },
        next: 'scene_6_2'
      },
      {
        text: '感到紧张不安，担心之前的工作有问题',
        hint: '心理压力增大',
        effects: { stress_mgmt: -4, skill: 1 },
        next: 'scene_6_2'
      }
    ]
  },

  'scene_6_2': {
    act: 6,
    title: '内部审计',
    text: '<p class="narrator">证监会现场检查结束后，公司内部也启动了<span class="highlight">全面审计调查</span>。</p><p>审计部对投行部近三年的所有项目进行了逐一排查。作为多个项目的核心成员，你被要求配合访谈。</p><p>审计人员的问题非常细致：从尽调过程中的每一步决策，到与客户的每一次沟通记录，到项目审批的每一个环节。</p><p>在回顾一个早期项目时，你隐约记得有些操作可能不太规范——当时是赶进度，跳过了一些程序。</p>',
    choices: [
      {
        text: '如实向审计人员说明所有情况，包括不够规范的地方',
        hint: '完全坦诚，长远来看是最安全的选择',
        effects: { reputation: 5, stress_mgmt: -2 },
        next: 'scene_6_3'
      },
      {
        text: '只回答被问到的问题，不主动提供额外信息',
        hint: '谨慎应对，避免自找麻烦',
        effects: { stress_mgmt: 1, reputation: 1 },
        next: 'scene_6_3'
      },
      {
        text: '提前找律师咨询，在法律建议下配合审计',
        hint: '保护自己，但可能被视为不配合',
        effects: { skill: 2, stress_mgmt: -1, reputation: -1 },
        next: 'scene_6_3'
      }
    ]
  },

  'scene_6_3': {
    act: 6,
    title: '历史合规漏洞',
    text: '<p class="narrator">审计过程中发现了一个严重问题：两年前一个已经完成的IPO项目存在<span class="highlight">重大合规漏洞</span>。</p><p>该项目的客户——一家房地产公司——在上市前存在大额的<span class="highlight">表外负债</span>，而当时的项目组在尽调中未能发现。更糟糕的是，这家公司现在已经暴雷，投资者损失惨重。</p><p>虽然那个项目不是你们组负责的，但审计报告点名指出，类似的问题可能在其他项目中也存在。</p><p>陈雅文在紧急会议上说：</p><p class="dialogue">"我们需要对所有在途和已完成项目做一次<span class="highlight">合规回头看</span>。工作量会非常大，但没有选择。"</p>',
    knowledge: 'due_diligence',
    choices: [
      {
        text: '主动承担更多项目的合规复查工作',
        hint: '展现担当，虽然辛苦但能学到更多',
        effects: { skill: 5, reputation: 4, stress_mgmt: -4 },
        next: 'scene_6_4'
      },
      {
        text: '制定高效的复查流程，提高团队整体效率',
        hint: '方法论创新，展示管理能力',
        effects: { skill: 4, reputation: 3, relationship: 2 },
        next: 'scene_6_4'
      },
      {
        text: '专注做好自己负责的项目复查',
        hint: '守住底线，不给团队添乱',
        effects: { skill: 2, stress_mgmt: 1 },
        next: 'scene_6_4'
      }
    ]
  },

  'scene_6_4': {
    act: 6,
    title: '反洗钱警报',
    text: '<p class="narrator">在合规复查中，公司的<span class="highlight">反洗钱系统</span>突然弹出了一条高风险警报。</p><p>系统检测到一位资管客户在过去半年内进行了大量异常交易：频繁的大额资金转入转出，交易对手涉及多个离岸公司，资金流向与客户的职业背景严重不符。</p><p>合规部要求你协助分析这位客户的交易记录。你发现这些交易模式与反洗钱培训中讲过的<span class="highlight">"分层洗白"模式高度相似</span>。</p><p>这位客户的账户余额超过<span class="highlight">5000万元</span>，是营业部的VIP客户。</p>',
    knowledge: 'anti_money_laundering',
    choices: [
      {
        text: '按规定提交可疑交易报告，不管客户身份',
        hint: '严格执行AML规定，可能得罪重要客户',
        effects: { reputation: 5, skill: 3, relationship: -2 },
        next: 'scene_6_5'
      },
      {
        text: '深入分析交易模式，形成完整的分析报告后再上报',
        hint: '证据更充分，但可能延迟上报',
        effects: { skill: 5, reputation: 3 },
        next: 'scene_6_5'
      },
      {
        text: '交给合规部处理，自己不再介入',
        hint: '不在其位不谋其政',
        effects: { stress_mgmt: 2, skill: 1, reputation: -1 },
        next: 'scene_6_5'
      }
    ]
  },

  'scene_6_5': {
    act: 6,
    title: '监管约谈',
    text: '<p class="narrator">由于华能科技项目的后续影响，你被证监会<span class="highlight">约谈作证</span>。</p><p>这是你第一次走进证监会的大楼。调查人员在一间简洁的会议室里等你，桌上放着一叠厚厚的文件。</p><p class="dialogue">"请如实回答我们的问题。你作为华能科技IPO项目的核心成员，我们需要了解尽调过程中的具体情况。"</p><p>问题一个比一个尖锐：为什么没有对鼎盛贸易做更深入的调查？谁决定接受华能科技CFO推荐的评估机构？项目组内部是否对关联交易问题有过分歧？</p>',
    choices: [
      {
        text: '如实回答每个问题，不隐瞒也不推卸',
        hint: '诚实作证，法律上最安全的选择',
        effects: { reputation: 5, stress_mgmt: -3, skill: 2 },
        next: 'scene_6_6'
      },
      {
        text: '有选择性地回答，强调自己尽责的部分',
        hint: '保护自己，但可能被认为不够配合',
        effects: { stress_mgmt: -1, reputation: 1 },
        next: 'scene_6_6'
      },
      {
        text: '请律师陪同，在法律框架内配合调查',
        hint: '最谨慎的做法，但可能激化关系',
        effects: { skill: 2, stress_mgmt: -2, reputation: 2 },
        next: 'scene_6_6'
      }
    ]
  },

  'scene_6_6': {
    act: 6,
    title: '媒体曝光',
    text: '<p class="narrator">一篇题为<span class="highlight">《宇宙证券：保荐业务合规黑洞》</span>的深度报道登上了财经媒体的头版。</p><p>文章详细披露了华能科技项目的诸多细节，包括关联交易的疑点、做空报告的指控、以及证监会调查的进展。文章还引用了"匿名消息人士"的爆料，称宇宙证券内部存在"系统性的合规松懈"。</p><p>公司股价当日<span class="highlight">下跌8%</span>。客户纷纷来电询问情况。公司内部人心惶惶。</p><p>公关部紧急召开会议讨论应对方案。你作为项目当事人之一，被要求提供事实核查的支持。</p>',
    choices: [
      {
        text: '配合公关部逐条核查文章内容，纠正不实之处',
        hint: '用事实回应，专业应对',
        effects: { skill: 3, reputation: 4, stress_mgmt: -2 },
        next: 'scene_6_7'
      },
      {
        text: '建议公司主动发布声明，公开回应市场关切',
        hint: '主动出击，掌握话语权',
        effects: { reputation: 3, relationship: 2 },
        next: 'scene_6_7'
      },
      {
        text: '保持沉默，等待公司统一口径',
        hint: '不多说，不多错',
        effects: { stress_mgmt: 1, reputation: 1 },
        next: 'scene_6_7'
      }
    ]
  },

  'scene_6_7': {
    act: 6,
    title: '合规整改',
    text: '<p class="narrator">在多方压力下，公司启动了<span class="highlight">全面合规整改</span>。</p><p>整改措施包括：升级合规管理系统、强化信息隔离墙制度、增加合规审查节点、提升合规培训频次。</p><p>陈雅文任命你为投行部的<span class="highlight">"合规联络员"</span>，负责协调部门与合规部之间的工作。这是一个没有额外薪酬但责任重大的角色。</p><p class="dialogue">"你在华能科技项目中有过一线经验，知道合规问题在实际操作中是怎么发生的。这个角色需要你来把关。"</p>',
    knowledge: 'corporate_governance',
    choices: [
      {
        text: '欣然接受，把合规联络员工作做到极致',
        hint: '承担责任，建立合规专家形象',
        effects: { reputation: 5, skill: 4, stress_mgmt: -3 },
        next: 'scene_6_8'
      },
      {
        text: '接受角色，但建议增加人手和资源支持',
        hint: '务实态度，确保有能力完成任务',
        effects: { skill: 3, relationship: 2, reputation: 2 },
        next: 'scene_6_8'
      },
      {
        text: '担心影响业务工作，婉拒这个角色',
        hint: '保护业务时间，但可能错失发展机会',
        effects: { stress_mgmt: 2, reputation: -2 },
        next: 'scene_6_8'
      }
    ]
  },

  'scene_6_8': {
    act: 6,
    title: 'KYC危机',
    text: '<p class="narrator">合规整改期间，一个严重的<span class="highlight">KYC问题</span>浮出水面。</p><p>营业部在自查中发现，有超过<span class="highlight">200个机构客户账户</span>的KYC资料不完整或已过期。部分客户甚至从未完成过完整的身份验证程序。</p><p>更严重的是，其中一个KYC缺失的客户正是之前触发反洗钱警报的那位VIP。如果监管机构在检查中发现这些问题，公司将面临巨额罚款。</p><p>合规部下达了死命令：一个月内完成所有客户KYC的补充和更新。</p>',
    knowledge: 'kyc_regulations',
    choices: [
      {
        text: '主动请缨负责最复杂的机构客户KYC补全工作',
        hint: '啃硬骨头，建立KYC专家形象',
        effects: { skill: 5, reputation: 4, stress_mgmt: -3 },
        next: 'scene_6_9'
      },
      {
        text: '设计一套高效的KYC补全流程，提升整体效率',
        hint: '系统化思维，展示管理能力',
        effects: { skill: 4, reputation: 3, relationship: 2 },
        next: 'scene_6_9'
      },
      {
        text: '按部就班完成分配给自己的KYC任务',
        hint: '完成本职工作',
        effects: { skill: 2, stress_mgmt: 1 },
        next: 'scene_6_9'
      }
    ]
  },

  'scene_6_9': {
    act: 6,
    title: '处罚结果',
    text: '<p class="narrator">经过数月的调查，证监会终于公布了<span class="highlight">行政处罚决定书</span>。</p><p>处罚结果：宇宙证券被<span class="highlight">暂停保荐业务资格三个月</span>，罚款500万元；三名相关责任人被给予警告和罚款。你的名字不在处罚名单上。</p><p>消息公布后，公司股价先跌后涨——市场认为"靴子落地"，处罚力度低于预期。</p><p>李明在部门群里发了一条消息：</p><p class="dialogue">"虽然处罚不算重，但这对公司的声誉影响是长远的。我们要引以为戒，把合规意识刻进骨子里。"</p><p>三个月的保荐业务暂停意味着多个项目被迫延期，团队的工作重心需要调整。</p>',
    choices: [
      {
        text: '利用暂停期完善项目底稿和合规文档',
        hint: '化被动为主动，为恢复业务做好准备',
        effects: { skill: 4, reputation: 3, stress_mgmt: 1 },
        next: 'scene_6_10'
      },
      {
        text: '转做非保荐类业务，如并购咨询和财务顾问',
        hint: '拓展业务领域，减少对保荐业务的依赖',
        effects: { skill: 3, wealth: 2, relationship: 2 },
        next: 'scene_6_10'
      },
      {
        text: '感到疲惫和失落，考虑休息一段时间',
        hint: '需要调整心态',
        effects: { stress_mgmt: -3, skill: 1 },
        next: 'scene_6_10'
      }
    ]
  },

  'scene_6_10': {
    act: 6,
    title: '重建合规体系',
    text: '<p class="narrator">保荐业务恢复后，公司推出了一套全新的<span class="highlight">合规管理体系</span>。</p><p>这套体系借鉴了国际投行的最佳实践，包括：三道防线制度、独立合规官机制、实时监控系统、举报人保护制度等。</p><p>你因为在合规整改期间的出色表现，被公司评为<span class="highlight">"年度合规标兵"</span>。这个荣誉虽然不直接与奖金挂钩，但在晋升评审中是一个重要加分项。</p><p>陈雅文在全员大会上说：</p><p class="dialogue">"合规不是业务的对立面，而是业务可持续发展的保障。这次危机让我们浴火重生。"</p><p class="narrator">经历了这场风暴，你对"合规"二字有了更深刻的理解。</p>',
    choices: [
      {
        text: '将合规经验整理成培训材料，分享给全部门',
        hint: '输出知识，建立行业影响力',
        effects: { skill: 4, reputation: 4, relationship: 3 },
        next: 'scene_7_1'
      },
      {
        text: '趁热打铁，推动建立行业合规标准',
        hint: '从公司层面提升到行业层面',
        effects: { reputation: 5, skill: 3, relationship: 2 },
        next: 'scene_7_1'
      },
      {
        text: '回归业务工作，把合规当作日常习惯',
        hint: '脚踏实地，专注业务',
        effects: { skill: 3, stress_mgmt: 2 },
        next: 'scene_7_1'
      }
    ]
  },

  // ============================================
  // 第七章 · 创新浪潮
  // ============================================

  'scene_7_1': {
    act: 7,
    title: '金融科技布局',
    text: '<p class="narrator">公司战略委员会通过了<span class="highlight">"科技赋能金融"五年战略</span>，决定大力投入金融科技领域。</p><p>CEO在全员大会上宣布：</p><p class="dialogue">"未来五年，我们将投入10亿元用于金融科技建设。我们要做的不是简单的IT升级，而是<span class="highlight">用科技重塑业务流程</span>。"</p><p>首批重点项目包括：智能投顾系统、AI辅助尽调工具、区块链存证平台、大数据风控系统。</p><p>公司成立了跨部门的"金融科技创新小组"，你因为在业务和技术理解方面的双重优势被选中加入。</p>',
    knowledge: 'financial_technology',
    choices: [
      {
        text: '积极参与，主动承担智能投顾项目的业务设计',
        hint: '拥抱变革，建立科技金融复合能力',
        effects: { skill: 5, reputation: 3, relationship: 2 },
        next: 'scene_7_2'
      },
      {
        text: '以审慎态度参与，关注科技项目的风险管控',
        hint: '风控视角，平衡创新与风险',
        effects: { skill: 3, reputation: 2 },
        next: 'scene_7_2'
      },
      {
        text: '对金融科技持保留态度，把重心放在传统业务上',
        hint: '稳健但可能错失未来趋势',
        effects: { skill: 2, stress_mgmt: 1, reputation: -1 },
        next: 'scene_7_2'
      }
    ]
  },

  'scene_7_2': {
    act: 7,
    title: '区块链+金融',
    text: '<p class="narrator">你参与的第一个创新项目是<span class="highlight">区块链存证平台</span>。</p><p>项目的核心理念是利用区块链技术不可篡改的特性，为投行业务中的关键文件（如尽调报告、合同、审计意见）提供可信存证。</p><p>技术团队负责人小张向你解释：</p><p class="dialogue">"每一次文件上传都会生成一个唯一的哈希值，记录在区块链上。任何后续的篡改都会被系统检测到。这将从根本上解决文件造假的问题。"</p><p>你被要求从业务角度定义系统需求：哪些文件需要存证？存证的频率和时间点如何设定？如何与现有的项目管理系统集成？</p>',
    choices: [
      {
        text: '深入研究区块链原理，设计全面的业务需求文档',
        hint: '跨界学习，成为业务与技术的桥梁',
        effects: { skill: 5, reputation: 3, relationship: 2 },
        next: 'scene_7_3'
      },
      {
        text: '邀请一线业务人员参与需求讨论，确保实用性',
        hint: '用户导向，提高系统采纳率',
        effects: { relationship: 4, skill: 3 },
        next: 'scene_7_3'
      },
      {
        text: '完成基本的需求定义，把更多精力放在传统业务上',
        hint: '分配精力，不完全投入创新项目',
        effects: { skill: 2, stress_mgmt: 1 },
        next: 'scene_7_3'
      }
    ]
  },

  'scene_7_3': {
    act: 7,
    title: '绿色金融债',
    text: '<p class="narrator">公司获得了一个创新项目——为一家大型新能源企业发行<span class="highlight">绿色债券</span>，规模30亿元。</p><p>这是宇宙证券首次主承销绿色债券，对整个部门来说都是全新的尝试。绿色债券的核心要求是：募集资金必须用于绿色环保项目，且需要第三方认证机构出具<span class="highlight">绿色评估报告</span>。</p><p>项目推进中遇到了一个挑战：发行人的部分项目是否真正符合"绿色"标准存在争议——一个水电站项目可能对当地生态环境造成负面影响。</p>',
    knowledge: 'green_finance',
    choices: [
      {
        text: '建议只纳入明确符合绿色标准的项目，确保发行质量',
        hint: '质量优先，建立绿色金融品牌',
        effects: { skill: 4, reputation: 5, relationship: -1 },
        next: 'scene_7_4'
      },
      {
        text: '引入权威第三方评估机构，用专业判断化解争议',
        hint: '借助外部力量，降低风险',
        effects: { skill: 3, relationship: 3, reputation: 2 },
        next: 'scene_7_4'
      },
      {
        text: '按照发行人的意愿推进，争议项目暂时搁置',
        hint: '以客户为中心，但可能留下隐患',
        effects: { relationship: 3, reputation: -2 },
        next: 'scene_7_4'
      }
    ]
  },

  'scene_7_4': {
    act: 7,
    title: '科创板IPO',
    text: '<p class="narrator">公司获得了一个<span class="highlight">科创板IPO项目</span>——某AI芯片公司拟在科创板上市。</p><p>科创板与主板不同，实行<span class="highlight">注册制</span>，审核流程更加透明但也更加注重信息披露。这对投行的尽调能力提出了更高要求。</p><p>你作为项目负责人，需要带领团队完成这家AI芯片公司的全面尽调。挑战在于：这是一家技术含量极高的公司，很多核心技术你们团队都不太懂。</p>',
    knowledge: 'ipo_process',
    choices: [
      {
        text: '聘请行业技术专家作为顾问，弥补团队技术短板',
        hint: '借助外脑，确保尽调质量',
        effects: { skill: 4, relationship: 2, reputation: 3 },
        next: 'scene_7_5'
      },
      {
        text: '自己学习AI芯片基础知识，同时依靠公司研究部支持',
        hint: '自力更生，提升跨界能力',
        effects: { skill: 5, stress_mgmt: -3 },
        next: 'scene_7_5'
      },
      {
        text: '主要依赖发行人提供的技术说明材料',
        hint: '效率高，但尽调独立性不足',
        effects: { skill: 1, stress_mgmt: 1, reputation: -2 },
        next: 'scene_7_5'
      }
    ]
  },

  'scene_7_5': {
    act: 7,
    title: '科技战略合作',
    text: '<p class="narrator">宇宙证券与一家头部科技公司签署<span class="highlight">战略合作协议</span>，共同开发智能金融解决方案。</p><p>你被指派为合作项目的业务侧负责人，需要与科技公司的技术团队对接。在第一次合作会议上，对方的技术总监提出了一个大胆的想法：</p><p class="dialogue">"我们可以用大模型技术自动生成招股说明书的初稿。系统学习了过去十年所有IPO招股书，能够根据不同的行业和企业特点生成定制化内容。"</p><p>这个想法令人兴奋，但也引发了合规方面的担忧——<span class="highlight">AI生成的内容如何确保准确性和合规性？</span></p>',
    choices: [
      {
        text: '积极推动，同时建立AI输出的人工审核机制',
        hint: '拥抱创新但确保安全，最佳平衡点',
        effects: { skill: 5, reputation: 4, relationship: 3 },
        next: 'scene_7_6'
      },
      {
        text: '建议先在内部小范围试点，验证效果后再推广',
        hint: '稳妥推进，降低风险',
        effects: { skill: 3, reputation: 2, stress_mgmt: 1 },
        next: 'scene_7_6'
      },
      {
        text: '对AI生成金融文件持保守态度，建议观望',
        hint: '谨慎但可能错失先机',
        effects: { stress_mgmt: 2, skill: 1 },
        next: 'scene_7_6'
      }
    ]
  },

  'scene_7_6': {
    act: 7,
    title: '跨境业务',
    text: '<p class="narrator">随着公司国际化战略的推进，你被安排参与一个<span class="highlight">跨境并购项目</span>。</p><p>一家中国上市公司拟收购德国一家精密仪器制造商，交易金额约<span class="highlight">2亿欧元</span>。宇宙证券担任中方财务顾问。</p><p>这个项目涉及复杂的跨境金融问题：外汇管制、两国监管审批、文化差异、时差……你需要协调中国、德国、香港三地的律师和会计师团队。</p><p>更棘手的是，德国方面对中方收购方的资金来源提出了质疑。</p>',
    knowledge: 'cross_border_finance',
    choices: [
      {
        text: '协调各方资源，制定详细的项目时间表和沟通机制',
        hint: '展示跨境项目管理能力',
        effects: { skill: 5, relationship: 3, stress_mgmt: -3 },
        next: 'scene_7_7'
      },
      {
        text: '重点解决资金来源合规性问题，打消德方疑虑',
        hint: '抓住核心矛盾，突破关键障碍',
        effects: { skill: 4, reputation: 4 },
        next: 'scene_7_7'
      },
      {
        text: '将跨境协调工作委托给香港团队，自己专注国内审批',
        hint: '分工明确，但可能失去全局把控',
        effects: { skill: 2, stress_mgmt: 1, relationship: 1 },
        next: 'scene_7_7'
      }
    ]
  },

  'scene_7_7': {
    act: 7,
    title: '创新产品路演',
    text: '<p class="narrator">公司推出了一款创新的<span class="highlight">"固收+"结构化产品</span>，需要你带队进行机构投资者路演。</p><p>这款产品结合了债券的稳健收益和期权的弹性，适合风险偏好中等的机构投资者。但产品的结构比较复杂，很多投资者表示"看不太懂"。</p><p>你在路演中发现，传统的PPT讲解效果有限。一位基金经理直言：</p><p class="dialogue">"你们能不能用更直观的方式告诉我，这个产品在什么情况下赚钱，什么情况下亏钱？"</p>',
    knowledge: 'portfolio_theory',
    choices: [
      {
        text: '连夜制作交互式收益模拟器，让投资者直观看到各种情景',
        hint: '创新展示方式，提升说服力',
        effects: { skill: 5, relationship: 4, reputation: 3 },
        next: 'scene_7_8'
      },
      {
        text: '简化产品说明，用案例和图表代替复杂的数学模型',
        hint: '降低理解门槛',
        effects: { skill: 3, relationship: 3 },
        next: 'scene_7_8'
      },
      {
        text: '坚持原有路演方式，产品好自然会有人买',
        hint: '保守但可能影响销售业绩',
        effects: { skill: 1, stress_mgmt: 1 },
        next: 'scene_7_8'
      }
    ]
  },

  'scene_7_8': {
    act: 7,
    title: '监管灰色地带',
    text: '<p class="narrator">创新业务推进中遇到了一个棘手问题：公司正在探索的一项<span class="highlight">数字资产业务</span>，在现有法律法规中找不到明确的监管规定。</p><p>这项业务涉及数字代币的发行和交易，可能涉及证券、支付、外汇等多个监管领域。法律团队的意见也不统一——有人认为应该按证券法监管，有人认为属于新兴领域暂不受限。</p><p>业务部门急于推进，合规部则持谨慎态度。你被要求从业务和合规两个角度给出分析意见。</p>',
    knowledge: 'securities_law',
    choices: [
      {
        text: '建议暂停推进，等待监管明确后再行动',
        hint: '保守策略，避免合规风险',
        effects: { reputation: 3, stress_mgmt: 2, wealth: -1 },
        next: 'scene_7_9'
      },
      {
        text: '建议在合规框架内小范围试点，同时主动与监管沟通',
        hint: '平衡创新与风险，最成熟的做法',
        effects: { skill: 5, reputation: 4, relationship: 2 },
        next: 'scene_7_9'
      },
      {
        text: '支持业务部门先行推进，抢占市场先机',
        hint: '激进策略，高风险高回报',
        effects: { wealth: 3, reputation: -3, stress_mgmt: -3 },
        next: 'scene_7_9'
      }
    ]
  },

  'scene_7_9': {
    act: 7,
    title: '金融科技论坛',
    text: '<p class="narrator">你受邀在<span class="highlight">"中国金融科技创新论坛"</span>上发表主题演讲。</p><p>这是你第一次在数百人面前做公开演讲。台下坐着来自各大金融机构、科技公司和监管机构的重要人物。</p><p>你的演讲主题是"科技如何重塑投行业务"。在准备演讲稿时，你需要在"展示公司创新成果"和"不过度承诺"之间找到平衡。</p><p>演讲结束后，有几位业内人士主动来交换名片，其中包括一位监管部门的处长。</p>',
    choices: [
      {
        text: '精心准备演讲，用数据和案例展示创新成果',
        hint: '展示专业实力，建立行业影响力',
        effects: { skill: 4, reputation: 5, relationship: 3 },
        next: 'scene_7_10'
      },
      {
        text: '重点分享行业痛点和思考，引发讨论和共鸣',
        hint: '思想领导力，建立深度连接',
        effects: { skill: 3, relationship: 5, reputation: 3 },
        next: 'scene_7_10'
      },
      {
        text: '低调完成演讲，把重心放在社交和人脉拓展上',
        hint: '人脉价值大于演讲本身',
        effects: { relationship: 5, reputation: 1 },
        next: 'scene_7_10'
      }
    ]
  },

  'scene_7_10': {
    act: 7,
    title: '创新成果展',
    text: '<p class="narrator">年底，公司举办了<span class="highlight">"金融科技创新成果展"</span>，向董事会和重要客户展示一年的创新成果。</p><p>你负责的几个项目都取得了显著进展：区块链存证平台已成功上线，智能尽调工具将尽调效率提升了<span class="highlight">40%</span>，绿色债券成功发行<span class="highlight">30亿元</span>。</p><p>CEO在参观你的展台时驻足良久：</p><p class="dialogue">"不错，这些成果很有价值。特别是区块链存证，这对我们重建合规信誉很有帮助。"</p><p>你的表现被写进了年度评优的候选名单。</p>',
    choices: [
      {
        text: '继续深化创新项目，争取明年更大的突破',
        hint: '深耕创新领域，建立差异化优势',
        effects: { skill: 4, reputation: 3, relationship: 2 },
        next: 'scene_8_1'
      },
      {
        text: '把创新经验应用到传统业务中，提升整体效率',
        hint: '创新与传统融合，务实推进',
        effects: { skill: 3, wealth: 3, reputation: 2 },
        next: 'scene_8_1'
      },
      {
        text: '趁势申请更多资源，扩大创新团队规模',
        hint: '扩展版图，但需要管理能力支撑',
        effects: { relationship: 2, reputation: 3, stress_mgmt: -2 },
        next: 'scene_8_1'
      }
    ]
  },

  // ============================================
  // 第八章 · 并购风云
  // ============================================

  'scene_8_1': {
    act: 8,
    title: '百亿并购案',
    text: '<p class="narrator">一个令人振奋的消息传来：宇宙证券被选中担任一笔<span class="highlight">百亿级跨境并购案</span>的财务顾问。</p><p>买方是中国最大的半导体集团"华芯控股"，拟收购一家日本半导体设备制造商，交易金额高达<span class="highlight">120亿元人民币</span>。这是当年中国最大的海外半导体并购案。</p><p>陈雅文亲自挂帅，你被任命为项目的执行负责人。团队包括五名投行成员、两名行业研究员、一名法务顾问。</p><p class="dialogue">"这个项目做成了，你们每个人都会在行业里留下名字。"陈雅文在启动会上说。</p>',
    knowledge: 'mergers_acquisitions',
    choices: [
      {
        text: '制定详细的项目计划，确保每个环节万无一失',
        hint: '系统化项目管理，控制复杂并购的执行风险',
        effects: { skill: 5, reputation: 3, stress_mgmt: -2 },
        next: 'scene_8_2'
      },
      {
        text: '重点研究目标公司和日本并购市场的规则',
        hint: '深入了解目标，做好功课',
        effects: { skill: 5, relationship: 2 },
        next: 'scene_8_2'
      },
      {
        text: '先组建最强团队，确保每个岗位都是精英',
        hint: '人才是项目成功的关键',
        effects: { relationship: 4, skill: 2, reputation: 2 },
        next: 'scene_8_2'
      }
    ]
  },

  'scene_8_2': {
    act: 8,
    title: '反垄断审查',
    text: '<p class="narrator">并购案面临的第一大挑战是<span class="highlight">反垄断审查</span>。</p><p>由于交易涉及半导体这一战略行业，需要同时通过中国、日本和欧盟的反垄断审查。三个司法管辖区的审查标准和流程各不相同，时间线也不一致。</p><p>更棘手的是，美国的外国投资委员会（CFIUS）也表示要审查这笔交易，理由是目标公司在美国有子公司。</p><p>律师团队给出了不太乐观的评估：</p><p class="dialogue">"通过中国和日本审查的问题不大，但欧盟和CFIUS的审查存在<span class="highlight">不确定性</span>。建议做好备选方案。"</p>',
    choices: [
      {
        text: '聘请各国顶级反垄断律师，制定全面的审批攻略',
        hint: '专业的事交给专业的人',
        effects: { skill: 4, reputation: 3, wealth: -2 },
        next: 'scene_8_3'
      },
      {
        text: '建议客户准备资产剥离方案，以应对审查要求',
        hint: '提前准备退路，展示战略思维',
        effects: { skill: 5, reputation: 4, relationship: 2 },
        next: 'scene_8_3'
      },
      {
        text: '专注于财务和交易层面，把审批问题留给律师处理',
        hint: '守住自己的专业领域',
        effects: { skill: 2, stress_mgmt: 1 },
        next: 'scene_8_3'
      }
    ]
  },

  'scene_8_3': {
    act: 8,
    title: '人才争夺',
    text: '<p class="narrator">项目进行到关键阶段，一个意外出现了——团队的核心成员、高级Associate林杰<span class="highlight">收到了竞争对手的offer</span>。</p><p>金鼎证券开出了双倍薪酬和总监级别的title来挖人。林杰在这个项目中负责关键的估值模型，如果他离开，项目进度将受到严重影响。</p><p>林杰找到你，表情纠结：</p><p class="dialogue">"我知道这个时候走不太合适，但金鼎的条件实在太好了。我还有房贷要还……"</p>',
    choices: [
      {
        text: '帮他分析利弊，建议他完成项目后再考虑跳槽',
        hint: '理性沟通，用项目价值说服',
        effects: { relationship: 4, skill: 2 },
        next: 'scene_8_4'
      },
      {
        text: '向陈雅文反映情况，争取给林杰更好的待遇',
        hint: '留住人才，但可能超出自己的权限',
        effects: { relationship: 3, reputation: 2 },
        next: 'scene_8_4'
      },
      {
        text: '尊重林杰的选择，同时做好他离开后的工作分配预案',
        hint: '未雨绸缪，确保项目不受影响',
        effects: { skill: 3, stress_mgmt: 2, relationship: 1 },
        next: 'scene_8_4'
      }
    ]
  },

  'scene_8_4': {
    act: 8,
    title: '恶意报价',
    text: '<p class="narrator">一个突发消息让整个项目组高度紧张。</p><p>一家美国私募基金突然对目标公司发起了<span class="highlight">敌意收购</span>，报价比华芯控股高出<span class="highlight">25%</span>。消息一出，目标公司的股价应声上涨。</p><p>华芯控股的董事长紧急约见陈雅文：</p><p class="dialogue">"我们的报价还能提高吗？如果提高，融资方案要重新设计。如果不提高，这笔交易可能就黄了。"</p><p>你连夜分析：如果加价，需要额外融资约<span class="highlight">30亿元</span>，杠杆率会显著上升；如果不加价，则可能失去这笔交易。</p>',
    knowledge: 'valuation_methods',
    choices: [
      {
        text: '设计一套创新的融资方案，在不大幅增加杠杆的前提下提高报价',
        hint: '金融工程能力的关键考验',
        effects: { skill: 6, reputation: 5, stress_mgmt: -3 },
        requires: { skill: 45 },
        next: 'scene_8_5'
      },
      {
        text: '建议客户保持原价，强调中方收购的战略协同优势',
        hint: '非价格竞争策略',
        effects: { skill: 3, relationship: 3, reputation: 2 },
        next: 'scene_8_5'
      },
      {
        text: '建议放弃这笔交易，避免价格战',
        hint: '理性止损，但可能让客户失望',
        effects: { skill: 2, reputation: -2, stress_mgmt: 2 },
        next: 'scene_8_5'
      }
    ]
  },

  'scene_8_5': {
    act: 8,
    title: '谈判僵局',
    text: '<p class="narrator">并购谈判陷入了<span class="highlight">僵局</span>。</p><p>双方在几个关键条款上无法达成一致：管理层留任期限、知识产权归属、以及一个关键工厂的处置方式。日方态度强硬，中方也不愿让步。</p><p>连续三天的高强度谈判让所有人都精疲力竭。你作为中间的财务顾问，需要在双方之间斡旋。</p><p>在一次私下交流中，日方的财务顾问向你透露：</p><p class="dialogue">"其实我们最在意的是<span class="highlight">知识产权</span>的归属问题，其他条款都可以商量。"</p>',
    choices: [
      {
        text: '设计一套知识产权共享方案，找到双方都能接受的平衡点',
        hint: '创造性解决问题，推动交易达成',
        effects: { skill: 5, relationship: 4, reputation: 5 },
        next: 'scene_8_6'
      },
      {
        text: '把这个信息传递给中方，建议中方在知识产权上做出让步',
        hint: '信息共享，加速谈判',
        effects: { relationship: 2, skill: 2 },
        next: 'scene_8_6'
      },
      {
        text: '建议双方各退一步，采取分阶段实施的方案',
        hint: '分步走策略，化解僵局',
        effects: { skill: 4, relationship: 3, reputation: 3 },
        next: 'scene_8_6'
      }
    ]
  },

  'scene_8_6': {
    act: 8,
    title: '合伙人离职',
    text: '<p class="narrator">一个深夜，你接到一个令人震惊的消息：项目的挂帅人<span class="highlight">陈雅文突然提交了辞呈</span>。</p><p>原来，陈雅文收到了一家国际投行的邀请，开出了三倍薪酬和合伙人的位置。在宇宙证券经历了合规危机和组织动荡后，她选择了离开。</p><p>李明在电话里语气沉重：</p><p class="dialogue">"陈总走了，这个项目群龙无首。上面可能会让我接手，但我需要你帮我。这个项目不能黄。"</p><p>项目正处于最关键的阶段，陈雅文的离开对团队士气是巨大的打击。</p>',
    choices: [
      {
        text: '全力支持李明接手，主动承担更多项目管理工作',
        hint: '危机中挺身而出，展示领导潜力',
        effects: { skill: 4, relationship: 5, reputation: 5, stress_mgmt: -3 },
        next: 'scene_8_7'
      },
      {
        text: '建议先稳定团队情绪，然后再讨论项目推进',
        hint: '先安人心，再做事',
        effects: { relationship: 4, stress_mgmt: 2 },
        next: 'scene_8_7'
      },
      {
        text: '感到迷茫和焦虑，不确定是否要继续留在这家公司',
        hint: '真实的情感反应',
        effects: { stress_mgmt: -4, skill: 1 },
        next: 'scene_8_7'
      }
    ]
  },

  'scene_8_7': {
    act: 8,
    title: '利益冲突',
    text: '<p class="narrator">项目推进中发现了一个<span class="highlight">利益冲突</span>问题。</p><p>宇宙证券的自营部门恰好持有目标公司少量的股票。如果并购成功，自营部门将从股价上涨中获利——这构成了<span class="highlight">内幕交易的潜在风险</span>。</p><p>合规部要求立即启动信息隔离程序，自营部门的交易被冻结。但自营部门的负责人非常不满：</p><p class="dialogue">"我们持有了两年的仓位，凭什么因为你们的项目就被冻结？你们的客户利益不应该凌驾于公司整体利益之上。"</p><p>李明让你协调解决这个问题。</p>',
    choices: [
      {
        text: '严格执行信息隔离制度，合规底线不可突破',
        hint: '坚守合规，可能得罪自营部门',
        effects: { reputation: 5, skill: 3, relationship: -2 },
        next: 'scene_8_8'
      },
      {
        text: '在合规框架内寻找折中方案，比如设定自营的交易限额',
        hint: '平衡各方利益',
        effects: { skill: 4, relationship: 2, reputation: 3 },
        next: 'scene_8_8'
      },
      {
        text: '提交给公司合规委员会裁决，不自己做决定',
        hint: '上交给更高层级，降低个人风险',
        effects: { stress_mgmt: 1, reputation: 1 },
        next: 'scene_8_8'
      }
    ]
  },

  'scene_8_8': {
    act: 8,
    title: '尽调重大发现',
    text: '<p class="narrator">在交割前的最后一轮尽调中，你发现了一个<span class="highlight">重大问题</span>。</p><p>目标公司的一项核心专利即将在两年后到期，而续期的法律程序存在不确定性。如果专利无法续期，目标公司的估值将<span class="highlight">下降至少30%</span>。</p><p>这个信息目前只有你和你的团队知道。如果披露给买方，可能导致交易价格重新谈判甚至交易失败；如果隐瞒，则违反了财务顾问的尽职义务。</p><p>李明听完后沉默了很久：</p><p class="dialogue">"这是一个非常棘手的问题。你怎么看？"</p>',
    knowledge: 'due_diligence',
    choices: [
      {
        text: '建议如实向买方披露，同时提出风险缓释方案',
        hint: '职业操守第一，同时提供解决方案',
        effects: { reputation: 6, skill: 4, relationship: -1 },
        next: 'scene_8_9'
      },
      {
        text: '建议先让律师评估专利续期的法律风险，再做决定',
        hint: '先获取专业意见，不急于判断',
        effects: { skill: 4, stress_mgmt: 1, reputation: 2 },
        next: 'scene_8_9'
      },
      {
        text: '认为这不是需要立即披露的重大问题，可以后续跟进',
        hint: '淡化处理，但存在合规风险',
        effects: { reputation: -4, stress_mgmt: 1 },
        next: 'scene_8_9'
      }
    ]
  },

  'scene_8_9': {
    act: 8,
    title: '交割倒计时',
    text: '<p class="narrator">距离计划交割日还有<span class="highlight">72小时</span>。</p><p>所有条件基本满足：反垄断审查已通过、融资方案已确认、法律文件已定稿。但最后关头，日方突然提出了一个额外要求——在交割后保留目标公司东京研发中心五年的运营控制权。</p><p>这个要求在中方看来是不可接受的——花了120亿买的公司，凭什么不能控制研发中心？</p><p>双方通过电话会议激烈争论了四个小时，依然无法达成一致。凌晨两点，所有人都在看着你——作为财务顾问，你需要提出一个<span class="highlight">打破僵局</span>的方案。</p>',
    choices: [
      {
        text: '提出"联合管理委员会"方案，双方共同管理研发中心',
        hint: '创造性地找到中间地带',
        effects: { skill: 6, relationship: 4, reputation: 5 },
        requires: { skill: 50 },
        next: 'scene_8_10'
      },
      {
        text: '建议中方接受条件，但在价格上做小幅调整',
        hint: '以小让步换取交易达成',
        effects: { skill: 3, relationship: 3, reputation: 3 },
        next: 'scene_8_10'
      },
      {
        text: '建议推迟交割，给双方更多时间协商',
        hint: '以时间换空间，但可能引发市场波动',
        effects: { stress_mgmt: -2, skill: 2 },
        next: 'scene_8_10'
      }
    ]
  },

  'scene_8_10': {
    act: 8,
    title: '并购庆功',
    text: '<p class="narrator">经过最后48小时的艰苦谈判，交易终于达成。</p><p>最终方案采用了你提出的"联合管理委员会"架构——中方获得研发中心的战略决策权，日方保留五年的运营管理权。双方都做出了让步，但也都得到了最核心的诉求。</p><p>庆功宴上，张明远举杯：</p><p class="dialogue">"这笔交易将被写入教科书。而提出关键方案的人，就坐在你们中间。"</p><p>所有目光看向你。陈总拍了拍你的肩膀：</p><p class="dialogue">"小{name}，你已经具备了一个优秀银行家最重要的素质——<span class="highlight">在复杂局面中找到让所有人都能接受的方案</span>。"</p><p class="narrator">这笔交易为宇宙证券带来了<span class="highlight">3.6亿元</span>的财务顾问费。你的年终奖也因此大幅提升。</p>',
    knowledge: 'mergers_acquisitions',
    choices: [
      { text: '举杯感谢团队，强调这是集体智慧的结晶', hint: '📈 人脉↑↑', effects: { relationship: 6, reputation: 3 }, next: 'scene_9_1' },
      { text: '私下开始规划下一个更大的项目', hint: '📈 专业↑', effects: { skill: 5, wealth: 3 }, next: 'scene_9_1' },
      { text: '趁热打铁，联系媒体为这笔交易做宣传', hint: '📈 声望↑↑', effects: { reputation: 8, relationship: -2 }, next: 'scene_9_1' }
    ]
  },

  // ==================== 第九章 · 行业风云 ====================

  'scene_9_1': {
    act: 9,
    title: '峰会主旨演讲',
    text: '<p>一年一度的<span class="highlight">亚洲金融论坛</span>在香港会展中心举行。作为宇宙证券最年轻的ED，你被邀请做主旨演讲。</p><p>台下坐着500多位金融从业者——分析师、基金经理、投行高管，还有不少财经记者。</p><p>你的演讲主题是：<span class="highlight">《注册制时代，投行的核心竞争力在哪里？》</span></p><p class="narrator">这是你第一次在国际舞台上展示自己。你的每一个观点、每一句话，都会被行业关注和解读。</p>',
    knowledge: 'securities_law',
    choices: [
      { text: '用华能科技和天宏并购的真实案例，阐述"专业能力是护城河"', hint: '📈 专业↑↑ 声望↑', effects: { skill: 6, reputation: 8 }, next: 'scene_9_2' },
      { text: '大胆预测行业趋势，引发全场讨论', hint: '📈 声望↑↑', effects: { reputation: 10, stress_mgmt: -3 }, next: 'scene_9_2' },
      { text: '低调分享经验，强调团队协作的重要性', hint: '📈 人脉↑', effects: { relationship: 5, reputation: 4 }, next: 'scene_9_2' }
    ]
  },

  'scene_9_2': {
    act: 9,
    title: '监管新规',
    text: '<p>峰会结束后第二天，证监会发布了<span class="highlight">《证券行业高质量发展指导意见》</span>，被称为"史上最严监管新规"。</p><p>新规要求：投行项目质量终身责任制、从业人员持股限制收紧、跨业务防火墙升级。</p><p>回到公司，陈总紧急召开会议：</p><p class="dialogue">"新规对我们影响很大。目前有3个在执行的项目需要重新评估合规性。谁来做这个评估？"</p><p class="narrator">这是一项吃力不讨好的工作——需要仔细审查每个项目的合规风险，但做好了能展示你的<span class="highlight">合规管理能力</span>。</p>',
    knowledge: 'compliance_basics',
    choices: [
      { text: '主动请缨，牵头合规评估工作', hint: '📈 声望↑↑ 压力↑', effects: { reputation: 8, skill: 5, stress_mgmt: -6 }, next: 'scene_9_3' },
      { text: '建议成立专项小组，你担任技术顾问', hint: '📈 专业↑ 均衡', effects: { skill: 4, reputation: 4 }, next: 'scene_9_3' },
      { text: '把精力集中在业务上，合规的事让合规部处理', hint: '📈 财富↑', effects: { wealth: 3, reputation: -3 }, next: 'scene_9_3' }
    ]
  },

  'scene_9_3': {
    act: 9,
    title: '国际金融市场震荡',
    text: '<p>美联储突然宣布<span class="highlight">加息75个基点</span>，远超市场预期。全球股市应声大跌。</p><p>A股虽然相对独立，但外资大幅流出、北向资金连续三天净卖出，市场情绪急剧恶化。</p><p>宇宙证券的自营部门持仓浮亏严重，风控总监在紧急会议上拍桌子：</p><p class="dialogue">"必须在一周内把风险敞口降低30%！"</p><p>作为投行部ED，你手上的几个项目也受到了影响——客户开始犹豫是否要在市场不好的时候推进融资。</p>',
    knowledge: 'risk_management',
    choices: [
      { text: '主动联系每个客户，分析市场情况，建议最佳时机', hint: '📈 人脉↑↑ 专业↑', effects: { relationship: 8, skill: 5, stress_mgmt: -5 }, next: 'scene_9_4' },
      { text: '撰写深度分析报告，为市场提供专业观点', hint: '📈 专业↑↑ 声望↑', effects: { skill: 8, reputation: 5 }, next: 'scene_9_4' },
      { text: '趁机抄底优质资产，为自营部门回血', hint: '📈 财富↑ 风险↑', effects: { wealth: 6, stress_mgmt: -8, reputation: -3 }, next: 'scene_9_4' }
    ]
  },

  'scene_9_4': {
    act: 9,
    title: 'CEO退休传闻',
    text: '<p>公司内部开始流传一个重磅消息——宇宙证券CEO<span class="highlight">马国强</span>即将退休。</p><p>马总在宇宙证券掌舵15年，从一家中型券商做到行业前五。他的离开意味着权力格局的重大变化。</p><p>潜在的继任者有三位：COO赵鹏（保守派）、投行部总经理陈总（改革派）、以及从外部空降的神秘人物。</p><p>在午餐时，陈总找到你：</p><p class="dialogue">"小{name}，我需要你帮我准备一份投行部的<span class="highlight">三年战略规划</span>。如果管理委员会讨论继任人选，这份规划将非常重要。"</p>',
    knowledge: 'corporate_governance',
    choices: [
      { text: '全力支持陈总，用心撰写战略规划', hint: '📈 人脉↑↑ 声望↑', effects: { relationship: 8, reputation: 5, skill: 3 }, next: 'scene_9_5' },
      { text: '保持中立，两边都不得罪', hint: '📈 稳妥', effects: { stress_mgmt: 3, relationship: -2 }, next: 'scene_9_5' },
      { text: '暗中了解其他候选人的情况，待价而沽', hint: '📈 人脉↑ 风险↑', effects: { relationship: 3, reputation: -4 }, next: 'scene_9_5' }
    ]
  },

  'scene_9_5': {
    act: 9,
    title: '权力之争',
    text: '<p>CEO之争进入白热化。投行部的陈总和COO赵鹏之间的矛盾公开化。</p><p>在全员大会上，赵鹏突然发难：</p><p class="dialogue">"投行部去年有几个项目的风控流程存在问题，我建议进行全面审查。"</p><p>这明显是在针对陈总。而你作为陈总的核心团队成员，也被卷入其中。</p><p>会后，赵鹏的助理找到你：</p><p class="dialogue">"赵总想约你单独聊聊。他说如果你愿意，可以在新的组织架构中给你一个更好的位置。"</p><p class="narrator">这是典型的<span class="highlight">选边站队</span>时刻。在大型金融机构中，这种政治博弈无处不在。</p>',
    choices: [
      { text: '拒绝赵鹏的邀请，坚定支持陈总', hint: '📈 声望↑ 人脉↓', effects: { reputation: 6, relationship: -5 }, next: 'scene_9_6' },
      { text: '去见赵鹏，了解他的提议，但不做承诺', hint: '📈 人脉↑ 风险↑', effects: { relationship: 5, reputation: -2 }, next: 'scene_9_6' },
      { text: '两边都不选，专注于业务本身', hint: '📈 专业↑', effects: { skill: 5, stress_mgmt: -3 }, next: 'scene_9_6' }
    ]
  },

  'scene_9_6': {
    act: 9,
    title: '董事会投票',
    text: '<p>董事会终于就CEO继任问题进行了投票。</p><p>结果出人意料——委员会选择了<span class="highlight">外部空降</span>的新CEO：来自国际投行的<span class="highlight">林嘉诚</span>。</p><p>林总上任第一周就找你谈话：</p><p class="dialogue">"我看过你做的华能科技和天宏并购的方案，非常出色。我打算在宇宙证券推行<span class="highlight">国际化管理</span>，需要一个既懂本土市场又有国际视野的人来牵头跨境业务。你有兴趣吗？"</p><p class="narrator">这是一个全新的挑战——跨境业务是宇宙证券的短板，也是未来增长的最大机会。</p>',
    knowledge: 'cross_border_finance',
    choices: [
      { text: '接受挑战，牵头跨境业务发展', hint: '📈 专业↑↑ 声望↑↑', effects: { skill: 8, reputation: 8, stress_mgmt: -5 }, next: 'scene_9_7' },
      { text: '表示兴趣但提出条件：需要更大的自主权和资源', hint: '📈 声望↑', effects: { reputation: 5, relationship: 3 }, next: 'scene_9_7' },
      { text: '婉拒，表示更愿意深耕国内业务', hint: '📈 稳妥', effects: { relationship: 3, stress_mgmt: 5 }, next: 'scene_9_7' }
    ]
  },

  'scene_9_7': {
    act: 9,
    title: '注册制全面推行',
    text: '<p>证监会宣布<span class="highlight">全面注册制</span>正式实施。这对整个证券行业是巨大的变革。</p><p>过去的核准制下，IPO是"稀缺资源"——谁能拿到批文谁就赚钱。注册制下，上市门槛降低，但定价和销售能力变得更加重要。</p><p>林总在全员大会上说：</p><p class="dialogue">"注册制时代，投行的核心竞争力从<span class="highlight">通道能力</span>转变为<span class="highlight">定价能力和销售能力</span>。我们必须转型。"</p><p>你被任命为"注册制转型工作组"的核心成员。</p>',
    knowledge: 'valuation_methods',
    choices: [
      { text: '推动建立行业研究驱动的定价模型', hint: '📈 专业↑↑', effects: { skill: 8, reputation: 5 }, next: 'scene_9_8' },
      { text: '大力拓展机构投资者网络，增强销售能力', hint: '📈 人脉↑↑', effects: { relationship: 8, wealth: 3 }, next: 'scene_9_8' },
      { text: '建议收购一家小型券商，快速获取项目储备', hint: '📈 声望↑ 财富↓', effects: { reputation: 6, wealth: -5, skill: 3 }, next: 'scene_9_8' }
    ]
  },

  'scene_9_8': {
    act: 9,
    title: '职业回顾',
    text: '<p>一个周末的下午，你在办公室整理文件时，翻到了入职第一天的工牌照片。</p><p>照片里的你，青涩而紧张。如今的你，已经是宇宙证券投行部最核心的管理者之一。</p><p>窗外，陆家嘴的天际线在夕阳下闪耀。你回想起这些年的每一个关键时刻——</p><p>第一次做报告被批评、发现华能科技的财务异常、在市场暴跌中稳住客户、在并购谈判中打破僵局……</p><p class="dialogue">"每一个选择都把我带到了这里。"</p><p class="narrator">你的手机响了——是猎头打来的电话。</p>',
    choices: [
      { text: '接听电话，听听对方说什么', hint: '📈 了解市场价值', effects: { wealth: 3 }, next: 'scene_9_9' },
      { text: '挂断电话，你对宇宙证券有归属感', hint: '📈 声望↑', effects: { reputation: 5, relationship: 3 }, next: 'scene_9_10' },
      { text: '接了电话，顺便思考自己到底想要什么', hint: '📈 均衡', effects: { stress_mgmt: 3, skill: 2 }, next: 'scene_9_9' }
    ]
  },

  'scene_9_9': {
    act: 9,
    title: '天价Offer',
    text: '<p>猎头带来了一个令人震惊的机会——一家<span class="highlight">华尔街顶级投行</span>在拓展中国业务，需要一个 Managing Director。</p><p>待遇是你在宇宙证券薪水的<span class="highlight">三倍</span>，还有股票期权和签字费。</p><p>但代价也很明显：离开你一手建设的团队、放弃在宇宙证券积累的所有关系和声望、去一个全新的文化环境中从头开始。</p><p>猎头说：</p><p class="dialogue">"这个机会只有48小时的窗口期。对方CEO下周来上海，可以安排你们面谈。"</p>',
    choices: [
      { text: '认真考虑这个机会，约对方CEO面谈', hint: '📈 财富↑↑ 声望↑', effects: { wealth: 10, reputation: 3, relationship: -5 }, next: 'scene_9_10' },
      { text: '婉拒，你决定留在宇宙证券', hint: '📈 人脉↑↑ 声望↑', effects: { relationship: 8, reputation: 5 }, next: 'scene_9_10' },
      { text: '用这个offer作为谈判筹码，要求宇宙证券加薪', hint: '📈 财富↑ 风险↑', effects: { wealth: 6, reputation: -3, relationship: -3 }, next: 'scene_9_10' }
    ]
  },

  'scene_9_10': {
    act: 9,
    title: '最终决定',
    text: '<p>经过深思熟虑，你做出了最终决定——<span class="highlight">留在宇宙证券</span>。</p><p>不是因为钱不重要，而是因为你在这里建立的一切：你的团队、你的客户、你的声誉——这些都是金钱无法衡量的。</p><p>林总得知你的决定后，专门请你吃了一顿饭：</p><p class="dialogue">"小{name}，我准备提名你为宇宙证券的<span class="highlight">合伙人</span>。这是公司最高的荣誉头衔，意味着你将参与公司最核心的决策。"</p><p class="narrator">从初级分析师到合伙人——这条路，你走了将近十年。</p>',
    choices: [
      { text: '接受提名，准备最后一段旅程', hint: '继续', effects: { reputation: 5, relationship: 3 }, next: 'scene_10_1' }
    ]
  },

  // ==================== 第十章 · 尘埃落定 ====================

  'scene_10_1': {
    act: 10,
    title: '最后的项目',
    text: '<p>成为合伙人后，你接手了职业生涯中最大的一笔交易——<span class="highlight">中国最大的新能源公司赴港上市</span>，融资规模200亿港元。</p><p>这不仅是宇宙证券历史上最大的IPO，也是当年全球最大规模的IPO之一。</p><p>项目启动会上，你看着台下50多人的项目团队——分析师、律师、会计师、公关团队——每个人都在看着你。</p><p class="dialogue">"各位，这将是一个载入史册的项目。我们的目标不仅是成功发行，更要为行业树立新的标杆。"</p><p class="narrator">掌声雷动。你知道，这是你职业生涯的<span class="highlight">巅峰之战</span>。</p>',
    knowledge: 'ipo_process',
    choices: [
      { text: '亲自把控每一个关键环节，确保万无一失', hint: '📈 专业↑↑ 压力↑', effects: { skill: 8, stress_mgmt: -8, reputation: 5 }, next: 'scene_10_2' },
      { text: '充分授权团队，自己专注战略决策和客户关系', hint: '📈 人脉↑ 领导力', effects: { relationship: 6, skill: 3, reputation: 4 }, next: 'scene_10_2' },
      { text: '邀请行业前辈担任顾问，组建"梦之队"', hint: '📈 均衡', effects: { skill: 4, relationship: 4, reputation: 4 }, next: 'scene_10_2' }
    ]
  },

  'scene_10_2': {
    act: 10,
    title: '新人入职',
    text: '<p>项目启动的同一天，宇宙证券新一批管培生入职。</p><p>在走廊里，你看到一个年轻人紧张地整理着领带——就像十年前的你一样。</p><p>他看到你，紧张地说：</p><p class="dialogue">"前辈好！我是新来的分析师，请问投行部怎么走？"</p><p>你微笑着给他指了路，然后想起了李伟当年对你说的话：</p><p class="dialogue">"在这个行业，发现问题的能力比解决问题的能力更重要。"</p><p class="narrator">你决定给这批新人做一次<span class="highlight">经验分享</span>。</p>',
    choices: [
      { text: '分享你犯过的错和学到的教训，真诚而坦率', hint: '📈 声望↑↑ 人脉↑', effects: { reputation: 8, relationship: 5 }, next: 'scene_10_3' },
      { text: '讲成功的案例，激励新人追求卓越', hint: '📈 声望↑', effects: { reputation: 5, skill: 2 }, next: 'scene_10_3' },
      { text: '重点讲合规和职业道德的重要性', hint: '📈 声望↑', effects: { reputation: 6, skill: 3 }, next: 'scene_10_3' }
    ]
  },

  'scene_10_3': {
    act: 10,
    title: '恩师告别',
    text: '<p>张明远——你在电梯里遇到的那位MD——正式退休了。</p><p>在他的告别晚宴上，整个投行部的人都来了。张总端着酒杯，走到你面前：</p><p class="dialogue">"小{name}，十年前我在那个电梯里遇到一个紧张的年轻人，就知道他会有出息。"</p><p>他递给你一个信封：</p><p class="dialogue">"这是我写了25年的一本笔记——关于这个行业的思考和感悟。现在，送给你。"</p><p>你打开扉页，上面写着一句话：</p><p class="highlight" style="text-align:center;font-size:15px;margin:12px 0">"金融的本质是信任。守住信任，就守住了一切。"</p>',
    choices: [
      { text: '感动地说：您是我职业生涯中最重要的引路人', hint: '📈 人脉↑↑', effects: { relationship: 8, stress_mgmt: 5 }, next: 'scene_10_4' },
      { text: '承诺会将这份精神传承下去', hint: '📈 声望↑↑', effects: { reputation: 8, relationship: 3 }, next: 'scene_10_4' }
    ]
  },

  'scene_10_4': {
    act: 10,
    title: '行业颁奖',
    text: '<p>年度<span class="highlight">中国金融年度人物</span>评选结果揭晓——你被评为"年度最佳投行家"。</p><p>颁奖典礼上，主持人念出颁奖词：</p><p class="dialogue">"从初级分析师到合伙人，ta用专业赢得尊重，用正直守住底线，用远见引领方向。在ta主导的项目中，没有一个出现重大合规问题——这在这个行业极为罕见。"</p><p>台下响起了经久不息的掌声。你走上台，接过奖杯。</p><p class="narrator">聚光灯下，你看到了台下坐着你的团队、你的客户、你的恩师张明远——他们在微笑。</p>',
    choices: [
      { text: '感谢所有人，特别提到了十年前电梯里的那次偶遇', hint: '📈 声望↑↑↑', effects: { reputation: 10, relationship: 5 }, next: 'scene_10_5' },
      { text: '借这个机会呼吁行业重视合规和职业道德', hint: '📈 声望↑↑', effects: { reputation: 8, skill: 3 }, next: 'scene_10_5' }
    ]
  },

  'scene_10_5': {
    act: 10,
    title: '终极道德考验',
    text: '<p>颁奖后的第二天，一个意想不到的电话打来了。</p><p>是你多年前参与的一个老客户——天宏集团的赵建国。他声音焦急：</p><p class="dialogue">"小{name}，我现在很需要你的帮助。天宏被一家国际做空机构盯上了，报告下周就要发布。我需要一个有公信力的人来做独立评估，证明我们的财务没有问题。你愿意帮忙吗？评估费不是问题。"</p><p>你犹豫了。天宏是你早期参与的客户，你和赵建国有着深厚的关系。但你也知道，天宏近几年的扩张非常激进，财务状况可能确实存在问题。</p><p class="narrator">如果你的独立评估为天宏背书，而后来发现财务造假，你的<span class="highlight">声誉将毁于一旦</span>。但如果拒绝，赵建国会觉得你忘恩负义。</p>',
    knowledge: 'due_diligence',
    choices: [
      { text: '同意做独立评估，但坚持完全独立——发现什么就报告什么', hint: '📈 声望↑↑ 专业↑', requires: { reputation: 40 }, effects: { reputation: 10, skill: 5, relationship: -3 }, next: 'scene_10_6' },
      { text: '婉拒，建议赵建国找其他机构', hint: '📈 人脉↓ 声望↑', effects: { relationship: -8, reputation: 5 }, next: 'scene_10_6' },
      { text: '同意帮忙，但在报告中适当"柔和"一些措辞', hint: '⚠️ 高风险', effects: { relationship: 5, reputation: -10, stress_mgmt: -8 }, next: 'scene_10_6' }
    ]
  },

  'scene_10_6': {
    act: 10,
    title: '最后的汇报',
    text: '<p>年度股东大会。作为合伙人，你需要向全体股东做投行部的年度业绩汇报。</p><p>你站在台上，背后是巨大的投影屏幕，上面显示着今年的成绩单：</p><p>• 完成IPO项目12个，融资总额<span class="highlight">480亿元</span></p><p>• 完成并购交易8个，交易总额<span class="highlight">620亿元</span></p><p>• 部门收入同比增长<span class="highlight">45%</span></p><p>• 合规评级：<span class="highlight">A+</span></p><p>台下响起了热烈的掌声。林总微笑着点头。</p><p class="narrator">汇报结束后，你走下台，一位年轻的分析师追上来问：</p><p class="dialogue">"前辈，在金融行业成功的秘诀是什么？"</p>',
    choices: [
      { text: '"永远保持学习的态度，永远对风险保持敬畏。"', hint: '📈 专业↑', effects: { skill: 5 }, next: 'scene_10_7' },
      { text: '"找到你信任的人，也让自己成为值得信任的人。"', hint: '📈 人脉↑', effects: { relationship: 5 }, next: 'scene_10_7' },
      { text: '"在最困难的时候，做最正确的事——而不是最容易的事。"', hint: '📈 声望↑', effects: { reputation: 5 }, next: 'scene_10_7' },
      { text: '"没有秘诀。只是每天早上比别人早到一点，晚上多想一点。"', hint: '📈 均衡', effects: { skill: 2, relationship: 2, reputation: 2 }, next: 'scene_10_7' }
    ]
  },

  'scene_10_7': {
    act: 10,
    title: '功成名就',
    text: '<p>深夜。你一个人站在宇宙证券大厦的顶楼，俯瞰着整个陆家嘴。</p><p>万家灯火中，有多少人在和你一样奋斗？有多少人在做着和你一样的选择？</p><p>你回想起张明远的那句话：</p><p class="dialogue">"你知道最后能站住脚的人有什么共同点吗？他们知道什么时候该说\'不\'。"</p><p>十年来，你说了很多次"不"——对内幕交易说不、对财务造假说不、对利益输送说不。每一次都不容易，但每一次都是正确的。</p><p class="narrator">现在是时候回顾你这一路的积累了。</p>',
    choices: [
      { text: '查看最终属性评估', hint: '查看结果', effects: {}, next: '_ending' }
    ]
  },

  'scene_10_8': {
    act: 10,
    title: '最终评价',
    text: '<p>十年磨一剑。你在宇宙证券的每一天、每一个选择，塑造了今天的你。</p>',
    choices: [
      { text: '查看结局', hint: '', effects: {}, next: '_ending' }
    ]
  },

  'scene_10_9': {
    act: 10,
    title: '尾声预告',
    text: '<p>你的故事即将画上句号……</p>',
    choices: [
      { text: '继续', hint: '', effects: {}, next: '_ending' }
    ]
  },

  'scene_10_10': {
    act: 10,
    title: '尾声',
    text: '<p>宇宙证券的故事还在继续，而你的篇章已经成为传奇。</p>',
    choices: [
      { text: '查看结局', hint: '', effects: {}, next: '_ending' }
    ]
  }
};
