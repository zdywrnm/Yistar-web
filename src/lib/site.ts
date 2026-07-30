export type Locale = "zh-CN" | "en";
export type ProductSlug = "openacad" | "opentrad" | "openvac" | "star-nexus";
export type ProductStage =
  | "in-use"
  | "developing"
  | "pre-development"
  | "concept";

export const SITE_URL = "https://yixingretail.cn";
export const CONTACT_EMAIL = "zhaodingyi@yixingretail.cn";
export const productOrder: ProductSlug[] = [
  "openacad",
  "opentrad",
  "openvac",
  "star-nexus",
];

export const pathFor = (locale: Locale, path = "/") =>
  locale === "en" ? (path === "/" ? "/en/" : `/en${path}`) : path;

export const productPath = (locale: Locale, slug: ProductSlug) =>
  pathFor(locale, `/products/${slug}/`);

export const counterpartPath = (path: string) => {
  const cleanPath = path.split("#")[0] || "/";
  if (cleanPath === "/en" || cleanPath === "/en/") return "/";
  if (cleanPath.startsWith("/en/")) return cleanPath.slice(3);
  return cleanPath === "/" ? "/en/" : `/en${cleanPath}`;
};

type SharedCopy = {
  lang: string;
  brand: string;
  legalName: string;
  nav: {
    products: string;
    overview: string;
    technology: string;
    careers: string;
    language: string;
    contact: string;
    menu: string;
    close: string;
  };
  stages: Record<ProductStage, string>;
  common: {
    learnMore: string;
    exploreProducts: string;
    about: string;
    businessContact: string;
    directEmail: string;
    privacy: string;
    currentStage: string;
    sceneIllustration: string;
    backHome: string;
  };
  footerLine: string;
};

export const shared: Record<Locale, SharedCopy> = {
  "zh-CN": {
    lang: "zh-CN",
    brand: "YiStar Technology",
    legalName: "宁波义星科技有限公司",
    nav: {
      products: "产品",
      overview: "产品概览",
      technology: "技术路线",
      careers: "加入我们",
      language: "English",
      contact: "业务联系",
      menu: "打开菜单",
      close: "关闭菜单",
    },
    stages: {
      "in-use": "已有投入使用项目",
      developing: "研发中",
      "pre-development": "即将进入产品研发",
      concept: "概念规划",
    },
    common: {
      learnMore: "了解更多",
      exploreProducts: "探索产品",
      about: "了解义星科技",
      businessContact: "业务联系",
      directEmail: "直接邮件",
      privacy: "隐私说明",
      currentStage: "当前阶段",
      sceneIllustration: "场景示意",
      backHome: "返回首页",
    },
    footerLine: "从真实行业出发，让模型协同创造价值。",
  },
  en: {
    lang: "en",
    brand: "YiStar Technology",
    legalName: "Ningbo YiStar Technology Co., Ltd.",
    nav: {
      products: "Products",
      overview: "Product overview",
      technology: "Technology",
      careers: "Careers",
      language: "中文",
      contact: "Contact",
      menu: "Open menu",
      close: "Close menu",
    },
    stages: {
      "in-use": "Project in use",
      developing: "In development",
      "pre-development": "Preparing for development",
      concept: "Concept planning",
    },
    common: {
      learnMore: "Learn more",
      exploreProducts: "Explore products",
      about: "About YiStar",
      businessContact: "Business inquiry",
      directEmail: "Email us directly",
      privacy: "Privacy",
      currentStage: "Current stage",
      sceneIllustration: "Scene illustration",
      backHome: "Back home",
    },
    footerLine: "Starting from real industries, enabling models to create value together.",
  },
};

export const home = {
  "zh-CN": {
    metaTitle: "义星科技｜面向真实行业的 AI 产品",
    metaDescription:
      "义星科技面向科研、外贸与工业真空场景开发 AI 产品，并探索开放的多模型协作基础设施。",
    heroTitle: ["让专业行业拥有", "真正可用的 AI 工具"],
    heroBody:
      "从科研、外贸与工业场景出发，以真实产品验证多模型协作的长期价值。",
    productsTitle: "以产品验证方向",
    productsIntro:
      "不同阶段，不同责任。已投入使用的成果提供证据，研发与规划中的方向保持清晰边界。",
    methodTitle: "从真实问题出发",
    methodIntro:
      "宏大愿景必须由可验证的产品、真实用户和专业场景持续支撑。",
    methodSteps: [
      {
        title: "行业问题",
        body: "进入科研、外贸与工业真空等专业场景，识别真实任务。",
      },
      {
        title: "多模型协作",
        body: "根据任务特征探索模型选择、分工与结果校验。",
      },
      {
        title: "产品验证",
        body: "把能力组织成可使用的产品，以真实反馈判断价值。",
      },
      {
        title: "持续迭代",
        body: "在使用与反馈中完善方法，让能力服务更多专业工作。",
      },
    ],
    technologyTitle: ["开放构建，", "让不同模型各展所长"],
    technologyBody:
      "我们长期探索多模型协作与工程化落地的路径，构建开放、可组合的基础能力，让人工智能更高效地进入真实世界的专业场景。",
    visionLabel: "长期愿景",
    visionBody:
      "在可用产品的基础上，持续探索人工智能能力边界，推动人类迈向 AGI 时代。AGI 是长期方向，不是对当前能力的宣称。",
    careersTitle: "和我们一起，把 AI 做成真实世界的生产力",
    careersBody:
      "我们目前没有公开岗位，但欢迎研究、工程、产品与行业专家主动联系，一起探索有价值的方向。",
    contactTitle: "让我们从一个真实问题开始",
    contactBody:
      "如果你希望了解产品、探索合作，或带来一个值得解决的行业问题，请告诉我们。",
  },
  en: {
    metaTitle: "YiStar Technology | AI products for real industries",
    metaDescription:
      "YiStar Technology builds AI products for research, global trade, and industrial vacuum workflows while exploring open multi-model infrastructure.",
    heroTitle: ["AI tools that truly work", "for specialized industries"],
    heroBody:
      "Starting with research, global trade, and industrial settings, we use real products to validate the long-term value of multi-model collaboration.",
    productsTitle: "Validate direction through products",
    productsIntro:
      "Different stages carry different responsibilities. Products in use provide evidence; work in development and planning remains clearly identified.",
    methodTitle: "Start with real problems",
    methodIntro:
      "Long-term ambition must be sustained by verifiable products, real users, and professional contexts.",
    methodSteps: [
      {
        title: "Industry problem",
        body: "Enter specialized research, global trade, and industrial vacuum settings to identify real tasks.",
      },
      {
        title: "Model collaboration",
        body: "Explore model selection, division of work, and result validation for each task.",
      },
      {
        title: "Product validation",
        body: "Turn capability into usable products and let real feedback establish value.",
      },
      {
        title: "Continuous iteration",
        body: "Improve through use and feedback so the capability serves more professional work.",
      },
    ],
    technologyTitle: ["Build openly,", "let each model do what it does best"],
    technologyBody:
      "We are exploring how multi-model collaboration can become dependable engineering: open, composable capabilities that bring advanced AI into real professional settings.",
    visionLabel: "Long-term vision",
    visionBody:
      "Built on useful products, we continue to explore the boundaries of AI and contribute to the path toward AGI. AGI is a long-term direction, not a claim about our present capabilities.",
    careersTitle: "Build AI into real-world productivity with us",
    careersBody:
      "We do not have public openings today, but we welcome conversations with researchers, engineers, product builders, and industry experts.",
    contactTitle: "Let’s start with a real problem",
    contactBody:
      "Tell us if you want to learn about a product, explore a collaboration, or bring an industry problem worth solving.",
  },
} satisfies Record<Locale, unknown>;

export type ProductCopy = {
  slug: ProductSlug;
  name: string;
  shortName?: string;
  stage: ProductStage;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroTitleLines?: [string, string];
  summary: string;
  overviewTitle: string;
  overviewBody: string;
  focusTitle: string;
  focusItems: Array<{ title: string; body: string }>;
  proofTitle?: string;
  proofBody?: string;
  imageAlt?: string;
  caption?: string;
  externalLinks?: Array<{ label: string; href: string }>;
  contactLabel?: string;
};

export const products: Record<ProductSlug, Record<Locale, ProductCopy>> = {
  openacad: {
    "zh-CN": {
      slug: "openacad",
      name: "OpenAcad",
      stage: "in-use",
      metaTitle: "OpenAcad｜开放、实用的 AI 科研工具",
      metaDescription:
        "OpenAcad 面向科研工作场景建设开放、实用的 AI 工具，PaperBanana 与小程序 tuyan 已投入使用。",
      heroTitle: "开放、实用的 AI 科研工具",
      heroTitleLines: ["开放、实用的", "AI 科研工具"],
      summary:
        "OpenAcad 面向学术研究与科研工作场景，帮助研究者提升资料处理、知识组织与研究协作效率。",
      overviewTitle: "以真实使用证明产品方向",
      overviewBody:
        "PaperBanana 是 OpenAcad 体系下已经形成实际应用的项目。它让义星科技能够在真实反馈中验证产品设计、模型接入与研究工作流。",
      focusTitle: "当前进展",
      focusItems: [
        {
          title: "PaperBanana",
          body: "OpenAcad 体系下已投入使用的 AI 科研项目。",
        },
        {
          title: "小程序 tuyan",
          body: "现有小程序已投入使用，持续服务真实科研工作。",
        },
        {
          title: "移动端",
          body: "移动应用正在准备上架 App Store，尚未对外表述为已上架。",
        },
      ],
      proofTitle: "PaperBanana 工作台",
      proofBody:
        "真实产品界面，展示 PaperBanana 当前的科研内容处理与模型协作工作台。",
      imageAlt: "PaperBanana 桌面工作台真实界面",
      externalLinks: [
        { label: "访问 PaperBanana", href: "https://paperbanana.asia" },
        {
          label: "查看 GitHub",
          href: "https://github.com/zdywrnm/PaperBanana-clients",
        },
      ],
      contactLabel: "交流科研产品",
    },
    en: {
      slug: "openacad",
      name: "OpenAcad",
      stage: "in-use",
      metaTitle: "OpenAcad | Open, practical AI tools for research",
      metaDescription:
        "OpenAcad develops open and practical AI tools for research. PaperBanana and the tuyan mini program are already in use.",
      heroTitle: "Open, practical AI tools for research",
      heroTitleLines: ["Open, practical AI tools", "for research"],
      summary:
        "OpenAcad serves academic and research workflows, helping researchers handle information, organize knowledge, and collaborate more effectively.",
      overviewTitle: "Validate the direction through real use",
      overviewBody:
        "PaperBanana is an application already in use within OpenAcad. Real feedback helps YiStar validate product design, model access, and research workflows.",
      focusTitle: "Current progress",
      focusItems: [
        {
          title: "PaperBanana",
          body: "An AI research project within OpenAcad that is already in use.",
        },
        {
          title: "tuyan mini program",
          body: "The existing mini program is in use and supports real research work.",
        },
        {
          title: "Mobile app",
          body: "The mobile app is preparing for App Store submission and is not described as released.",
        },
      ],
      proofTitle: "PaperBanana workspace",
      proofBody:
        "A real product interface from the current PaperBanana research and multi-model workspace.",
      imageAlt: "Real desktop interface of the PaperBanana workspace",
      externalLinks: [
        { label: "Visit PaperBanana", href: "https://paperbanana.asia" },
        {
          label: "View on GitHub",
          href: "https://github.com/zdywrnm/PaperBanana-clients",
        },
      ],
      contactLabel: "Discuss research tools",
    },
  },
  opentrad: {
    "zh-CN": {
      slug: "opentrad",
      name: "OpenTrad",
      stage: "developing",
      metaTitle: "OpenTrad｜面向外贸场景研发的行业 AI 工具",
      metaDescription:
        "OpenTrad 正在研发面向外贸场景的行业 AI 工具，探索客户开发、信息处理与业务协作中的可验证能力。",
      heroTitle: "让 AI 更自然地进入外贸工作",
      heroTitleLines: ["让 AI 更自然地", "进入外贸工作"],
      summary:
        "OpenTrad 面向外贸工作场景研发行业 AI 工具，探索让人工智能进入客户开发、信息处理与业务协作过程。",
      overviewTitle: "从外贸工作的真实任务开始",
      overviewBody:
        "OpenTrad 当前处于产品研发阶段。我们会公开产品方向、研发目标与可验证进展，但不会把规划中的功能描述为已经可用。",
      focusTitle: "当前研发方向",
      focusItems: [
        {
          title: "客户开发",
          body: "探索 AI 如何辅助信息理解与客户开发过程中的具体任务。",
        },
        {
          title: "信息处理",
          body: "研究如何让模型帮助组织外贸工作中的多来源信息。",
        },
        {
          title: "业务协作",
          body: "形成能被验证、能持续迭代的外贸 AI 工作方式。",
        },
      ],
      contactLabel: "交流外贸场景",
    },
    en: {
      slug: "opentrad",
      name: "OpenTrad",
      stage: "developing",
      metaTitle: "OpenTrad | AI tools for global trade",
      metaDescription:
        "OpenTrad is developing AI tools for global trade, exploring verifiable capability in customer development, information handling, and business collaboration.",
      heroTitle: "Bring AI naturally into global trade work",
      heroTitleLines: ["Bring AI naturally into", "global trade work"],
      summary:
        "OpenTrad is developing AI tools for global trade, exploring how AI can support customer development, information handling, and business collaboration.",
      overviewTitle: "Start with real work in global trade",
      overviewBody:
        "OpenTrad is in product development. We share the direction, development goals, and verifiable progress without presenting planned features as available.",
      focusTitle: "Current development direction",
      focusItems: [
        {
          title: "Customer development",
          body: "Explore concrete tasks where AI can support information understanding and customer development.",
        },
        {
          title: "Information handling",
          body: "Study how models can help organize information from multiple sources.",
        },
        {
          title: "Business collaboration",
          body: "Build global-trade AI workflows that can be validated and improved.",
        },
      ],
      contactLabel: "Discuss global trade workflows",
    },
  },
  openvac: {
    "zh-CN": {
      slug: "openvac",
      name: "OpenVac",
      stage: "pre-development",
      metaTitle: "OpenVac｜面向工业真空的 AI 工具方向",
      metaDescription:
        "OpenVac 是面向工业真空领域规划的 AI 工具项目，即将进入产品研发阶段。",
      heroTitle: "面向工业真空的专业 AI 工具方向",
      heroTitleLines: ["面向工业真空的", "专业 AI 工具方向"],
      summary:
        "OpenVac 计划将 AI 与专业知识、工程任务和行业工作流程结合，建设服务于工业真空专业人员的工具。",
      overviewTitle: "保持专业边界，先验证值得解决的问题",
      overviewBody:
        "OpenVac 已明确工业真空方向，即将进入产品研发。现阶段不宣称已有成熟产品、客户或完整行业知识库。",
      focusTitle: "准备进入研发",
      focusItems: [
        {
          title: "专业知识",
          body: "探索人工智能与工业真空专业知识结合的合理边界。",
        },
        {
          title: "工程任务",
          body: "从专业人员真实面对的工程任务中识别产品机会。",
        },
        {
          title: "行业工作流",
          body: "在尊重行业流程的前提下逐步形成可验证工具。",
        },
      ],
      imageAlt: "工业真空设备场景示意",
      caption: "工业真空场景示意，非义星科技现有设备或产品。",
      contactLabel: "交流工业真空场景",
    },
    en: {
      slug: "openvac",
      name: "OpenVac",
      stage: "pre-development",
      metaTitle: "OpenVac | An AI direction for industrial vacuum work",
      metaDescription:
        "OpenVac is a planned AI tool project for the industrial vacuum field and is preparing to enter product development.",
      heroTitle: "A professional AI direction for industrial vacuum work",
      heroTitleLines: ["A professional AI direction", "for industrial vacuum work"],
      summary:
        "OpenVac plans to connect AI with domain knowledge, engineering tasks, and industry workflows for industrial vacuum professionals.",
      overviewTitle: "Respect the domain and validate the right problems first",
      overviewBody:
        "OpenVac has a defined industrial-vacuum direction and is preparing to enter product development. We do not claim a mature product, customers, or a complete industry knowledge base.",
      focusTitle: "Preparing for development",
      focusItems: [
        {
          title: "Domain knowledge",
          body: "Explore the responsible boundary between AI and industrial vacuum expertise.",
        },
        {
          title: "Engineering tasks",
          body: "Identify product opportunities in the real tasks professionals handle.",
        },
        {
          title: "Industry workflows",
          body: "Develop verifiable tools gradually while respecting established workflows.",
        },
      ],
      imageAlt: "Illustration of an industrial vacuum equipment setting",
      caption:
        "Industrial vacuum scene illustration; not an existing YiStar product or device.",
      contactLabel: "Discuss industrial vacuum work",
    },
  },
  "star-nexus": {
    "zh-CN": {
      slug: "star-nexus",
      name: "Star Nexus",
      shortName: "星枢",
      stage: "concept",
      metaTitle: "Star Nexus 星枢｜多模型连接与智能调度概念",
      metaDescription:
        "Star Nexus 是义星科技概念规划中的多模型连接与智能调度平台，尚未作为完成产品对外提供。",
      heroTitle: "连接模型，让协作服务真实任务",
      heroTitleLines: ["连接模型", "让协作服务真实任务"],
      summary:
        "Star Nexus 规划为统一的多模型连接与智能调度平台，未来为义星科技产品及外部用户提供可复用的模型能力。",
      overviewTitle: "长期技术底座，而不是当前已完成的产品",
      overviewBody:
        "Star Nexus 仍处于概念规划阶段。现阶段仅使用“计划、探索、规划能力”等表述，不宣称已经完成模型路由平台或集成所有 AI 厂商。",
      focusTitle: "规划能力",
      focusItems: [
        {
          title: "统一模型接入",
          body: "计划以一致方式连接不同厂商和不同能力类型的模型。",
        },
        {
          title: "用户自主配置",
          body: "探索让用户使用自有模型资源或调用凭证。",
        },
        {
          title: "智能模型调配",
          body: "根据任务特征，探索为不同环节选择更合适的模型。",
        },
        {
          title: "多模型协作",
          body: "探索任务拆解、模型分工、结果汇总与质量校验。",
        },
      ],
      contactLabel: "交流多模型基础设施",
    },
    en: {
      slug: "star-nexus",
      name: "Star Nexus",
      stage: "concept",
      metaTitle: "Star Nexus | A concept for multi-model connection and orchestration",
      metaDescription:
        "Star Nexus is YiStar’s concept-stage plan for multi-model connection and intelligent orchestration. It is not presented as a completed product.",
      heroTitle: "Connect models so collaboration serves real tasks",
      heroTitleLines: ["Connect models", "so collaboration serves real tasks"],
      summary:
        "Star Nexus is planned as a unified platform for multi-model connection and intelligent orchestration, intended to provide reusable model capability to YiStar products and external users.",
      overviewTitle: "A long-term technical foundation, not a finished product",
      overviewBody:
        "Star Nexus remains in concept planning. We describe planned and exploratory capabilities without claiming a completed routing platform or integration with every AI provider.",
      focusTitle: "Planned capabilities",
      focusItems: [
        {
          title: "Unified model access",
          body: "Plan a consistent way to connect models from different providers and capability categories.",
        },
        {
          title: "User-controlled configuration",
          body: "Explore support for users’ own model resources or access credentials.",
        },
        {
          title: "Intelligent model allocation",
          body: "Explore selecting a better-suited model for each part of a task.",
        },
        {
          title: "Multi-model collaboration",
          body: "Explore task decomposition, model roles, result synthesis, and quality checks.",
        },
      ],
      contactLabel: "Discuss multi-model infrastructure",
    },
  },
};

export const careers = {
  "zh-CN": {
    metaTitle: "加入我们｜义星科技",
    metaDescription:
      "义星科技长期关注研究、工程、产品与行业专家，欢迎围绕真实行业 AI 产品主动交流。",
    title: "加入我们",
    subtitle: "和我们一起，把 AI 做成真实世界的生产力",
    intro:
      "我们长期关注相信长期主义、愿意把研究与真实场景连接起来的人。",
    workTitle: "我们如何工作",
    principles: [
      {
        title: "从真实问题出发",
        body: "先理解工作与用户，再决定技术应该怎样进入场景。",
      },
      {
        title: "研究与工程并重",
        body: "既探索模型能力，也重视可靠、可用的产品实现。",
      },
      {
        title: "快速验证，持续迭代",
        body: "用小而真实的验证减少空想，在反馈中不断完善。",
      },
      {
        title: "面向长期价值",
        body: "不追逐短暂热度，把注意力放在值得持续建设的方向。",
      },
    ],
    directionsTitle: "我们持续关注的方向",
    directions: ["研究", "工程", "产品", "行业专家"],
    ctaTitle: "暂时没有公开岗位，也欢迎主动认识我们。",
    ctaLabel: "主动联系",
    mailSubject: "[YiStar 人才交流] 姓名 / 方向",
  },
  en: {
    metaTitle: "Careers | YiStar Technology",
    metaDescription:
      "YiStar welcomes long-term conversations with researchers, engineers, product builders, and industry experts working on real-world AI products.",
    title: "Careers",
    subtitle: "Build AI into real-world productivity with us",
    intro:
      "We keep an open door for people who think long term and want to connect research with real professional settings.",
    workTitle: "How we work",
    principles: [
      {
        title: "Start with real problems",
        body: "Understand the work and the user before deciding how technology should enter the setting.",
      },
      {
        title: "Research and engineering together",
        body: "Explore model capability while building dependable, usable products.",
      },
      {
        title: "Validate quickly, iterate continuously",
        body: "Use small, real tests to reduce speculation and improve through feedback.",
      },
      {
        title: "Build for long-term value",
        body: "Look beyond short-lived hype and keep attention on work worth sustaining.",
      },
    ],
    directionsTitle: "Directions we continue to follow",
    directions: ["Research", "Engineering", "Product", "Industry expertise"],
    ctaTitle: "No public openings today. We would still like to meet you.",
    ctaLabel: "Introduce yourself",
    mailSubject: "[YiStar Talent Conversation] Name / Direction",
  },
};

export const contact = {
  "zh-CN": {
    metaTitle: "业务联系｜义星科技",
    metaDescription:
      "联系义星科技，了解 OpenAcad、OpenTrad、OpenVac、Star Nexus 或探讨行业 AI 合作。",
    title: "业务联系",
    subtitle: "让我们从一个真实问题开始",
    intro:
      "如果你希望了解产品、探索合作，或带来一个值得解决的行业问题，请告诉我们。",
    labels: {
      cooperation: "合作类型",
      name: "姓名",
      organization: "组织",
      email: "工作邮箱",
      product: "关注产品",
      details: "需求详情",
      consent: "我已阅读并同意隐私说明，同意生成包含以上信息的预填邮件。",
      submit: "生成邮件并打开",
      copy: "复制邮件内容",
      copied: "已复制邮件内容",
      fallback:
        "网站不会直接发送。完成验证后，我们将生成预填邮件并请求打开你的默认邮件客户端，请由你确认发送。",
    },
    placeholders: {
      cooperation: "请选择合作类型",
      name: "你的姓名",
      organization: "公司或机构名称",
      email: "name@company.com",
      product: "请选择关注产品",
      details: "请简要描述场景、目标与时间预期",
    },
    cooperationOptions: [
      "产品咨询",
      "技术合作",
      "行业解决方案",
      "生态与渠道",
      "其他",
    ],
    productOptions: [
      "OpenAcad",
      "OpenTrad",
      "OpenVac",
      "Star Nexus",
      "公司层面",
    ],
    errors: {
      required: "请填写此项。",
      email: "请填写有效的工作邮箱。",
      consent: "请先阅读并同意隐私说明。",
      copy: "无法自动复制，请选择文字后手动复制。",
    },
    process: [
      {
        title: "浏览器内验证",
        body: "在你的浏览器中检查必填项与格式。",
      },
      {
        title: "生成预填邮件",
        body: `生成主题与正文，收件人设为 ${CONTACT_EMAIL}。`,
      },
      {
        title: "打开邮件客户端",
        body: "请求打开默认邮件客户端，由你确认并发送。",
      },
    ],
  },
  en: {
    metaTitle: "Business inquiry | YiStar Technology",
    metaDescription:
      "Contact YiStar Technology about OpenAcad, OpenTrad, OpenVac, Star Nexus, or an industry AI collaboration.",
    title: "Business inquiry",
    subtitle: "Let’s start with a real problem",
    intro:
      "Tell us if you want to learn about a product, explore a collaboration, or bring an industry problem worth solving.",
    labels: {
      cooperation: "Inquiry type",
      name: "Name",
      organization: "Organization",
      email: "Work email",
      product: "Product of interest",
      details: "What do you need?",
      consent:
        "I have read the privacy notice and agree to generate a pre-filled email containing this information.",
      submit: "Generate and open email",
      copy: "Copy email content",
      copied: "Email content copied",
      fallback:
        "The website does not send this form. After validation, it creates a pre-filled message and asks your default email app to open. You decide whether to send it.",
    },
    placeholders: {
      cooperation: "Select an inquiry type",
      name: "Your name",
      organization: "Company or organization",
      email: "name@company.com",
      product: "Select a product",
      details: "Briefly describe the setting, goal, and expected timeline",
    },
    cooperationOptions: [
      "Product inquiry",
      "Technical collaboration",
      "Industry solution",
      "Ecosystem or channel",
      "Other",
    ],
    productOptions: [
      "OpenAcad",
      "OpenTrad",
      "OpenVac",
      "Star Nexus",
      "Company-level inquiry",
    ],
    errors: {
      required: "Please complete this field.",
      email: "Enter a valid work email.",
      consent: "Please read and accept the privacy notice.",
      copy: "Automatic copy failed. Select the text and copy it manually.",
    },
    process: [
      {
        title: "Validate in your browser",
        body: "Required fields and formats are checked locally.",
      },
      {
        title: "Create a pre-filled email",
        body: `A subject and body are prepared for ${CONTACT_EMAIL}.`,
      },
      {
        title: "Open your email app",
        body: "Your default email app is requested to open. You review and send.",
      },
    ],
  },
};

export const privacy = {
  "zh-CN": {
    metaTitle: "隐私说明｜义星科技",
    metaDescription:
      "义星科技官网隐私说明：网站不设置分析 Cookie，业务联系表单仅在浏览器中生成预填邮件。",
    title: "隐私说明",
    updated: "更新日期：2026 年 7 月 30 日",
    lead:
      "本网站不设置分析 Cookie，不建立用户账户，也不会把业务联系表单提交到网站服务器。",
    sections: [
      {
        title: "业务联系表单如何工作",
        body: "你填写的信息仅用于在当前浏览器中生成预填邮件。点击按钮后，网站会请求打开你的默认邮件客户端；只有当你在邮件客户端中确认发送后，信息才会由你的邮件服务商发送给我们。",
      },
      {
        title: "我们收到信息之后",
        body: "我们仅将你主动发送的邮件用于回复咨询、评估合作或继续你提出的交流。邮件的保存和传输同时受你所使用的邮件服务商及我们的邮件服务商规则约束。",
      },
      {
        title: "第三方链接",
        body: "网站可能链接至 PaperBanana、GitHub 等第三方服务。访问这些网站后，其隐私规则将独立适用。",
      },
      {
        title: "联系我们",
        body: `如需咨询或请求删除你曾通过邮件提供的信息，请发送邮件至 ${CONTACT_EMAIL}。`,
      },
    ],
  },
  en: {
    metaTitle: "Privacy | YiStar Technology",
    metaDescription:
      "YiStar’s website does not use analytics cookies. The business inquiry form only creates a pre-filled email in your browser.",
    title: "Privacy",
    updated: "Updated July 30, 2026",
    lead:
      "This website does not use analytics cookies, create user accounts, or submit the business inquiry form to a website server.",
    sections: [
      {
        title: "How the inquiry form works",
        body: "The information you enter is used only to create a pre-filled email in your current browser. The website then asks your default email app to open. Information is sent to us only if you review and send the message from that app.",
      },
      {
        title: "After we receive an email",
        body: "We use information you intentionally send only to respond, evaluate a possible collaboration, or continue the conversation you requested. Storage and transmission are also governed by your email provider and ours.",
      },
      {
        title: "Third-party links",
        body: "The site may link to third-party services such as PaperBanana and GitHub. Their own privacy terms apply when you visit them.",
      },
      {
        title: "Contact",
        body: `To ask a question or request deletion of information previously provided by email, contact ${CONTACT_EMAIL}.`,
      },
    ],
  },
};
