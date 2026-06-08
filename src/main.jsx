import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  Code2,
  Languages,
  Menu,
  MonitorSmartphone,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  X
} from "lucide-react";
import "./styles.css";

const company = {
  zh: {
    name: "宁波义星互联网零售有限公司",
    address: "浙江省宁波市鄞州区首南街道钱湖南路8号浙江万里学院51号楼F座747室",
    scope: "互联网零售、移动应用开发、跨境电商工具与数字化软件服务。"
  },
  en: {
    name: "Ningbo Yixing Internet Retail Co., Ltd",
    address:
      "Room 747, Block F, Building 51, Zhejiang Wanli College, No. 8 Qianhu South Road, Shounan Street, Yinzhou District, Ningbo, Zhejiang 315000, China",
    scope:
      "Internet retail, mobile application development, cross-border e-commerce tools, and digital software services."
  },
  creditCode: "91330212MAK5HGAJ3C",
  postalCode: "315000",
  email: "zhaodingyi@yixingretail.cn",
  website: "https://www.yixingretail.cn"
};

const capabilityIcons = [Store, Code2, Truck, BadgeCheck];

const content = {
  zh: {
    documentLang: "zh-CN",
    documentTitle: "宁波义星互联网零售有限公司",
    metaDescription: "宁波义星互联网零售有限公司主营互联网零售、移动应用开发、跨境电商工具与数字化软件服务。",
    header: {
      brandTitle: "义星互联网零售",
      brandSubtitle: company.zh.name,
      homeLabel: "返回首页",
      navLabel: "主导航",
      switchText: "英文",
      switchLabel: "切换至英文",
      contactCta: "联系我们",
      menuLabel: "打开或关闭菜单"
    },
    nav: [
      ["业务方向", "#services"],
      ["选择义星", "#why"],
      ["数字化流程", "#workflow"],
      ["公司信息", "#company"],
      ["联系我们", "#contact"]
    ],
    hero: {
      companyLine: company.zh.name,
      title: "以数字化能力服务",
      highlight: "跨境零售增长",
      copy:
        "宁波义星互联网零售有限公司主营互联网零售、移动应用开发、跨境电商工具与数字化软件服务，为跨境电商和线上零售团队提供清晰、可靠的数字化支持。",
      primaryCta: "查看业务方向",
      secondaryCta: "联系我们"
    },
    why: {
      title: "选择义星的三个理由。",
      copy: "官网集中展示公司身份、业务方向和联系方式，方便合作方、用户和技术支持需求快速核验与联系。",
      reasons: [
        {
          icon: ShieldCheck,
          title: "公司信息清晰",
          copy: "官网集中展示公司名称、统一社会信用代码、注册地址、邮箱和官方网站，便于合作方核验。"
        },
        {
          icon: MonitorSmartphone,
          title: "业务方向数字化",
          copy: "主营方向覆盖互联网零售、移动应用开发、跨境电商工具和数字化软件服务。"
        },
        {
          icon: PackageCheck,
          title: "服务跨境场景",
          copy: "围绕跨境电商运营中的流程、数据、工具和软件需求，提供务实的数字化支持。"
        }
      ]
    },
    services: {
      title: "覆盖零售与软件的业务方向。",
      copy: company.zh.scope,
      imageAlt: "数字化零售与软件服务视觉",
      items: [
        {
          name: "互联网零售",
          copy: "围绕线上经营、商品展示、用户触达和交易流程，提供面向互联网零售场景的数字化服务。"
        },
        {
          name: "移动应用开发",
          copy: "支持移动端应用规划、界面实现和业务流程落地，服务用户侧与运营侧数字需求。"
        },
        {
          name: "跨境电商工具",
          copy: "面向跨境电商的商品、订单、渠道、数据和运营流程，建设实用型工具能力。"
        },
        {
          name: "数字化软件服务",
          copy: "为零售与电商团队提供轻量、清晰、可持续维护的软件服务与数字化支持。"
        }
      ]
    },
    workflow: {
      title: "从线上零售到数字化运营。",
      copy: "义星将零售场景、移动应用、电商工具和软件服务连接成务实的数字化工作流。",
      routeLabel: "数字化业务流程动效路线",
      steps: [
        ["01", "零售", "围绕商品、用户和运营流程，搭建互联网零售相关数字化能力。"],
        ["02", "应用", "将移动端业务场景转化为可使用、可维护的应用功能与交互流程。"],
        ["03", "工具", "建设跨境电商所需的商品、订单、渠道和数据处理工具。"],
        ["04", "服务", "为业务数字化提供软件实现、维护和持续优化支持。"]
      ]
    },
    company: {
      title: "公司登记信息。",
      copy: "宁波义星互联网零售有限公司注册于浙江宁波。以下信息用于业务合作、产品咨询、用户反馈与技术支持联系。",
      imageAlt: "数字化零售与软件服务视觉",
      facts: [
        { label: "公司名称", value: company.zh.name },
        { label: "统一社会信用代码", value: company.creditCode },
        { label: "公司地址", value: company.zh.address },
        { label: "邮政编码", value: company.postalCode },
        { label: "联系邮箱", value: company.email, type: "email" },
        { label: "官方网站", value: company.website, type: "url" },
        { label: "主营方向", value: company.zh.scope }
      ]
    },
    capability: {
      title: "面向数字商业团队的服务能力。",
      copy: "公司专注软件化零售服务，不局限于单一产品品类。",
      items: [
        ["互联网零售", "服务线上商品展示、用户触达、交易流程与运营管理。"],
        ["移动应用开发", "支持移动端产品、服务场景和用户流程的应用建设。"],
        ["跨境电商工具", "围绕跨境电商流程需求提供清晰实用的数字工具。"],
        ["数字化软件服务", "为业务数字化和日常运营提供务实的软件服务支持。"]
      ]
    },
    profile: {
      title: "公司信息清晰可核验。",
      copy: "官网集中呈现法定公司名称、统一社会信用代码、注册地址和联系渠道，便于合作方确认信息。",
      rows: [
        ["公司名称", company.zh.name],
        ["统一社会信用代码", company.creditCode],
        ["主营方向", company.zh.scope]
      ]
    },
    contact: {
      title: "联系我们",
      copy: "如您有业务合作、产品咨询、用户反馈或技术支持需求，欢迎通过以下方式联系我们。",
      items: [
        { label: "公司名称", value: company.zh.name },
        { label: "联系邮箱", value: company.email, type: "email" },
        { label: "联系地址", value: company.zh.address },
        { label: "邮政编码", value: company.postalCode },
        { label: "官方网站", value: company.website, type: "url" }
      ]
    },
    footer: {
      brand: "义星互联网零售",
      companyName: company.zh.name
    }
  },
  en: {
    documentLang: "en",
    documentTitle: "Ningbo Yixing Internet Retail Co., Ltd",
    metaDescription:
      "Ningbo Yixing Internet Retail Co., Ltd provides internet retail, mobile application development, cross-border e-commerce tools, and digital software services.",
    header: {
      brandTitle: "Yixing Retail",
      brandSubtitle: company.en.name,
      homeLabel: "Yixing Retail home",
      navLabel: "Main navigation",
      switchText: "Chinese",
      switchLabel: "Switch to Chinese",
      contactCta: "Contact Us",
      menuLabel: "Open or close menu"
    },
    nav: [
      ["Services", "#services"],
      ["Why Yixing", "#why"],
      ["Workflow", "#workflow"],
      ["Company", "#company"],
      ["Contact", "#contact"]
    ],
    hero: {
      companyLine: company.en.name,
      title: "Digital Retail Built for",
      highlight: "Cross-Border Growth",
      copy:
        "Ningbo Yixing Internet Retail Co., Ltd focuses on internet retail, mobile application development, cross-border e-commerce tools, and digital software services for overseas-facing digital commerce teams.",
      primaryCta: "View Services",
      secondaryCta: "Contact Us"
    },
    why: {
      title: "Three Reasons to Know Yixing Retail.",
      copy:
        "The official website presents company identity, business direction, and contact information clearly for partners, users, and support requests.",
      reasons: [
        {
          icon: ShieldCheck,
          title: "Clear Company Identity",
          copy:
            "Company name, unified social credit identifier, business address, email, and official website are presented for easy verification."
        },
        {
          icon: MonitorSmartphone,
          title: "Digital Business Focus",
          copy:
            "The business scope covers internet retail, mobile application development, cross-border e-commerce tools, and digital software services."
        },
        {
          icon: PackageCheck,
          title: "Built for Cross-Border Scenarios",
          copy:
            "The service direction supports practical workflow, data, tooling, and software needs in cross-border e-commerce operations."
        }
      ]
    },
    services: {
      title: "Business Scope Across Retail and Software.",
      copy: company.en.scope,
      imageAlt: "Digital retail and software service visual",
      items: [
        {
          name: "Internet Retail",
          copy:
            "Digital services for online operations, product presentation, user reach, and transaction workflows."
        },
        {
          name: "Mobile Application Development",
          copy:
            "Planning, interface implementation, and business workflow delivery for mobile user and operations scenarios."
        },
        {
          name: "Cross-Border E-Commerce Tools",
          copy:
            "Practical tool capabilities for product, order, channel, data, and operations workflows in cross-border commerce."
        },
        {
          name: "Digital Software Services",
          copy:
            "Lightweight, clear, and maintainable software services and digital support for retail and e-commerce teams."
        }
      ]
    },
    workflow: {
      title: "From Online Retail to Digital Operations.",
      copy:
        "Yixing Retail connects retail scenarios, mobile applications, e-commerce tools, and software services into a practical digital workflow.",
      routeLabel: "Animated digital workflow route",
      steps: [
        ["01", "Retail", "Build digital capabilities around products, users, and online retail operations."],
        ["02", "Apps", "Turn mobile business scenarios into usable, maintainable application features and flows."],
        ["03", "Tools", "Create product, order, channel, and data tools needed by cross-border e-commerce teams."],
        ["04", "Service", "Support software delivery, maintenance, and continuous improvement for business digitization."]
      ]
    },
    company: {
      title: "Registered Company Information.",
      copy:
        "Ningbo Yixing Internet Retail Co., Ltd is registered in Ningbo, Zhejiang. The information below is provided for business cooperation, product inquiries, user feedback, and technical support.",
      imageAlt: "Digital retail and software service visual",
      facts: [
        { label: "Company Name", value: company.en.name },
        { label: "Unified Social Credit Identifier", value: company.creditCode },
        { label: "Business Address", value: company.en.address },
        { label: "Postal Code", value: company.postalCode },
        { label: "Email", value: company.email, type: "email" },
        { label: "Website", value: company.website, type: "url" },
        { label: "Business Scope", value: company.en.scope }
      ]
    },
    capability: {
      title: "Services Shaped for Digital Commerce Teams.",
      copy: "The company focuses on software-enabled retail services rather than a single product category.",
      items: [
        ["Internet Retail", "Support online product display, user reach, transaction flows, and retail operations."],
        ["Mobile Apps", "Build mobile applications for product, service, and user workflow scenarios."],
        ["Cross-Border Tools", "Provide clear and practical digital tools for cross-border e-commerce workflows."],
        ["Software Services", "Deliver practical software service support for digitization and daily operations."]
      ]
    },
    profile: {
      title: "Company Information Built for Verification.",
      copy:
        "The official website makes the legal company name, registered identifier, business address, and contact channels easy to verify.",
      rows: [
        ["Company Name", company.en.name],
        ["Unified Social Credit Identifier", company.creditCode],
        ["Business Scope", company.en.scope]
      ]
    },
    contact: {
      title: "Contact Us",
      copy:
        "For business cooperation, product inquiries, user feedback, or technical support, please contact us through the following information.",
      items: [
        { label: "Company Name", value: company.en.name },
        { label: "Email", value: company.email, type: "email" },
        { label: "Address", value: company.en.address },
        { label: "Postal Code", value: company.postalCode },
        { label: "Website", value: company.website, type: "url" }
      ]
    },
    footer: {
      brand: "Yixing Retail",
      companyName: company.en.name
    }
  }
};

function getInitialLanguage() {
  if (typeof window === "undefined") return "zh";

  try {
    const stored = window.localStorage.getItem("yistar-language");
    return stored === "en" ? "en" : "zh";
  } catch {
    return "zh";
  }
}

function renderDetailValue(item) {
  if (item.type === "email") {
    return <a href={`mailto:${item.value}`}>{item.value}</a>;
  }

  if (item.type === "url") {
    return (
      <a href={item.value} target="_blank" rel="noreferrer">
        {item.value}
      </a>
    );
  }

  return item.value;
}

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.16 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function usePageMotion(trackRef) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pageProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      document.documentElement.style.setProperty("--page-progress", pageProgress.toFixed(4));
      setScrolled(window.scrollY > 24);

      if (trackRef.current) {
        const rect = trackRef.current.getBoundingClientRect();
        const range = window.innerHeight + rect.height;
        const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / range));
        trackRef.current.style.setProperty("--track-progress", progress.toFixed(4));
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [trackRef]);

  return scrolled;
}

function LanguageButton({ className = "", onClick, t }) {
  return (
    <button className={`language-toggle ${className}`} type="button" onClick={onClick} aria-label={t.header.switchLabel}>
      <Languages size={17} />
      <span>{t.header.switchText}</span>
    </button>
  );
}

function Header({ onToggleLanguage, scrolled, t }) {
  const [open, setOpen] = useState(false);

  const toggleAndClose = () => {
    onToggleLanguage();
    setOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label={t.header.homeLabel}>
        <span className="brand-text">
          <strong>{t.header.brandTitle}</strong>
          <small>{t.header.brandSubtitle}</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label={t.header.navLabel}>
        {t.nav.map(([label, href]) => (
          <a href={href} key={label}>
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <LanguageButton className="desktop-language" onClick={onToggleLanguage} t={t} />
        <a className="button button-primary header-cta" href="#contact">
          {t.header.contactCta}
          <ArrowRight size={18} />
        </a>
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label={t.header.menuLabel}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-panel ${open ? "is-open" : ""}`}>
        {t.nav.map(([label, href]) => (
          <a href={href} key={label} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <LanguageButton className="mobile-language" onClick={toggleAndClose} t={t} />
        <a className="button button-primary" href="#contact" onClick={() => setOpen(false)}>
          {t.header.contactCta}
          <ArrowRight size={18} />
        </a>
      </div>
    </header>
  );
}

function Hero({ t }) {
  return (
    <section className="hero" id="top">
      <div className="hero-image-wrap" aria-hidden="true">
        <img src="/assets/digital-commerce-hero.png" alt="" className="hero-image" />
        <div className="hero-light-trail" />
      </div>

      <div className="hero-content">
        <p className="company-name">{t.hero.companyLine}</p>
        <h1>
          {t.hero.title} <span>{t.hero.highlight}</span>
        </h1>
        <p className="hero-copy">{t.hero.copy}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#services">
            {t.hero.primaryCta}
            <ArrowRight size={19} />
          </a>
          <a className="button button-ghost" href="#contact">
            {t.hero.secondaryCta}
            <ArrowRight size={19} />
          </a>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

function WhySection({ t }) {
  return (
    <section className="section section-tight" id="why">
      <div className="section-heading" data-reveal>
        <span className="section-number">01</span>
        <h2>{t.why.title}</h2>
        <p>{t.why.copy}</p>
      </div>
      <div className="reason-grid">
        {t.why.reasons.map(({ icon: Icon, title, copy }, index) => (
          <article className="reason-card" data-reveal key={title} style={{ "--delay": `${index * 90}ms` }}>
            <div className="reason-icon">
              <Icon size={24} />
            </div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServicesSection({ t }) {
  return (
    <section className="collections section" id="services">
      <div className="section-heading split" data-reveal>
        <div>
          <span className="section-number">02</span>
          <h2>{t.services.title}</h2>
        </div>
        <p>{t.services.copy}</p>
      </div>

      <div className="collection-hero" data-reveal>
        <img src="/assets/digital-commerce-hero.png" alt={t.services.imageAlt} />
      </div>

      <div className="collection-grid">
        {t.services.items.map((item, index) => (
          <article className="collection-card" data-reveal key={item.name} style={{ "--delay": `${index * 55}ms` }}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.name}</h3>
            <p>{item.copy}</p>
            <ArrowRight size={18} />
          </article>
        ))}
      </div>
    </section>
  );
}

function ScrollStory({ t, trackRef }) {
  return (
    <section className="story section" id="workflow" ref={trackRef}>
      <div className="story-copy" data-reveal>
        <span className="section-number">03</span>
        <h2>{t.workflow.title}</h2>
        <p>{t.workflow.copy}</p>
      </div>

      <div className="track-stage" data-reveal>
        <svg className="route-svg" viewBox="0 0 960 360" role="img" aria-label={t.workflow.routeLabel}>
          <path
            className="route-shadow"
            d="M36 250 C170 80 340 64 470 176 C600 288 760 306 922 118"
            fill="none"
          />
          <path className="route-line" d="M36 250 C170 80 340 64 470 176 C600 288 760 306 922 118" fill="none" />
          <path className="route-progress" d="M36 250 C170 80 340 64 470 176 C600 288 760 306 922 118" fill="none" />
        </svg>
        <div className="runner-car workflow-node" aria-hidden="true">
          <span />
        </div>
        <div className="story-steps">
          {t.workflow.steps.map(([num, title, copy]) => (
            <article key={title}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanySection({ t }) {
  return (
    <section className="global section" id="company">
      <div className="global-image" data-reveal>
        <img src="/assets/digital-commerce-hero.png" alt={t.company.imageAlt} />
      </div>
      <div className="global-copy" data-reveal>
        <span className="section-number">04</span>
        <h2>{t.company.title}</h2>
        <p>{t.company.copy}</p>
        <div className="market-list company-fact-list">
          {t.company.facts.map((item) => (
            <span key={item.label}>
              <strong>{item.label}</strong>
              {renderDetailValue(item)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitySection({ t }) {
  return (
    <section className="capability section" id="scope">
      <div className="section-heading" data-reveal>
        <span className="section-number">05</span>
        <h2>{t.capability.title}</h2>
        <p>{t.capability.copy}</p>
      </div>
      <div className="capability-grid">
        {t.capability.items.map(([title, copy], index) => {
          const Icon = capabilityIcons[index];

          return (
            <article className="capability-card" data-reveal key={title} style={{ "--delay": `${index * 75}ms` }}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ProfileSection({ t }) {
  return (
    <section className="quality section" id="profile">
      <div className="quality-panel" data-reveal>
        <Sparkles size={30} />
        <h2>{t.profile.title}</h2>
        <p>{t.profile.copy}</p>
        <div className="quality-bars" aria-hidden="true">
          <span style={{ "--w": "92%" }} />
          <span style={{ "--w": "84%" }} />
          <span style={{ "--w": "76%" }} />
        </div>
      </div>
      <div className="quality-list" data-reveal>
        {t.profile.rows.map(([label, value]) => (
          <article key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection({ t }) {
  return (
    <section className="contact section" id="contact">
      <div className="contact-copy" data-reveal>
        <span className="section-number">06</span>
        <h2>{t.contact.title}</h2>
        <p>{t.contact.copy}</p>
      </div>

      <div className="contact-details" data-reveal>
        {t.contact.items.map((item) => (
          <article className="contact-item" key={item.label}>
            <span>{item.label}</span>
            {item.type ? renderDetailValue(item) : <strong>{item.value}</strong>}
          </article>
        ))}
      </div>
    </section>
  );
}

function App() {
  const [lang, setLang] = useState(getInitialLanguage);
  const trackRef = useRef(null);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = t.documentLang;
    document.title = t.documentTitle;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", t.metaDescription);
    }
  }, [t]);

  useReveal();
  const scrolled = usePageMotion(trackRef);

  const toggleLanguage = () => {
    setLang((current) => {
      const next = current === "zh" ? "en" : "zh";

      try {
        window.localStorage.setItem("yistar-language", next);
      } catch {
        // Language switching should keep working even if localStorage is unavailable.
      }

      return next;
    });
  };

  return (
    <>
      <Header onToggleLanguage={toggleLanguage} scrolled={scrolled} t={t} />
      <main>
        <Hero t={t} />
        <WhySection t={t} />
        <ServicesSection t={t} />
        <ScrollStory t={t} trackRef={trackRef} />
        <CompanySection t={t} />
        <CapabilitySection t={t} />
        <ProfileSection t={t} />
        <ContactSection t={t} />
      </main>
      <footer className="site-footer">
        <strong>{t.footer.brand}</strong>
        <span>{t.footer.companyName}</span>
        <span>{company.website}</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
