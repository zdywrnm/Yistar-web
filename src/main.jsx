import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Code2,
  Globe2,
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
  nameCn: "宁波义星互联网零售有限公司",
  nameEn: "Ningbo Yixing Internet Retail Co., Ltd",
  creditCode: "91330212MAK5HGAJ3C",
  addressCn: "浙江省宁波市鄞州区首南街道钱湖南路8号浙江万里学院51号楼F座747室",
  addressEn:
    "Room 747, Block F, Building 51, Zhejiang Wanli College, No. 8 Qianhu South Road, Shounan Street, Yinzhou District, Ningbo, Zhejiang 315000, China",
  postalCode: "315000",
  email: "zhaodingyi@yixingretail.cn",
  website: "https://www.yixingretail.cn",
  scopeCn: "互联网零售、移动应用开发、跨境电商工具与数字化软件服务。",
  scopeEn:
    "Internet retail, mobile application development, cross-border e-commerce tools, and digital software services."
};

const services = [
  {
    name: "Internet Retail",
    copy: "Digital retail operations and online business presentation for modern commerce."
  },
  {
    name: "Mobile Application Development",
    copy: "Mobile app planning and development support for customer-facing digital services."
  },
  {
    name: "Cross-Border E-Commerce Tools",
    copy: "Workflow tools for overseas storefronts, operations, product data, and order coordination."
  },
  {
    name: "Digital Software Services",
    copy: "Lightweight software services that help retail teams manage repeatable digital workflows."
  }
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Verified Company Profile",
    copy: "Clear registered company information, official contact details, and a dedicated corporate website."
  },
  {
    icon: MonitorSmartphone,
    title: "Digital-First Services",
    copy: "Internet retail and mobile application services designed around online customer journeys."
  },
  {
    icon: PackageCheck,
    title: "Cross-Border Focus",
    copy: "Tools and service thinking for cross-border e-commerce operations, data, and digital execution."
  }
];

const storySteps = [
  ["01", "Retail", "Build internet retail workflows around products, users, and repeatable operations."],
  ["02", "App", "Turn mobile scenarios into usable application structures and customer touchpoints."],
  ["03", "Tools", "Create cross-border e-commerce tools for product, order, channel, and data work."],
  ["04", "Service", "Support digital software needs with practical implementation and maintenance thinking."]
];

const companyFacts = [
  ["Company Name", company.nameEn],
  ["Unified Social Credit Identifier", company.creditCode],
  ["Business Address", company.addressEn],
  ["Postal Code", company.postalCode],
  ["Email", company.email],
  ["Website", company.website],
  ["Business Scope", company.scopeEn]
];

const contactItems = [
  ["公司名称", company.nameCn],
  ["英文名称", company.nameEn],
  ["联系邮箱", company.email],
  ["联系地址", company.addressCn],
  ["邮政编码", company.postalCode],
  ["官方网站", company.website]
];

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

function Header({ scrolled }) {
  const [open, setOpen] = useState(false);

  const links = [
    ["Services", "#services"],
    ["Why Yixing", "#why"],
    ["Workflow", "#workflow"],
    ["Company", "#company"],
    ["Contact", "#contact"]
  ];

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label="Yixing Retail home">
        <span className="brand-text">
          <strong>Yixing Retail</strong>
          <small>{company.nameEn}</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a href={href} key={label}>
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button className="language" type="button" aria-label="Language selector">
          <Globe2 size={17} />
          EN
          <ChevronDown size={14} />
        </button>
        <a className="button button-primary header-cta" href="#contact">
          Contact Us
          <ArrowRight size={18} />
        </a>
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-panel ${open ? "is-open" : ""}`}>
        {links.map(([label, href]) => (
          <a href={href} key={label} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="button button-primary" href="#contact" onClick={() => setOpen(false)}>
          Contact Us
          <ArrowRight size={18} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-image-wrap" aria-hidden="true">
        <img src="/assets/digital-commerce-hero.png" alt="" className="hero-image" />
        <div className="hero-light-trail" />
      </div>

      <div className="hero-content">
        <p className="company-name">
          {company.nameEn} | {company.nameCn}
        </p>
        <h1>
          Digital Retail Built for <span>Cross-Border Growth</span>
        </h1>
        <p className="hero-copy">
          {company.nameEn} focuses on internet retail, mobile application development, cross-border e-commerce tools,
          and digital software services.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#services">
            View Services
            <ArrowRight size={19} />
          </a>
          <a className="button button-ghost" href="#contact">
            Contact Us
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

function WhySection() {
  return (
    <section className="section section-tight" id="why">
      <div className="section-heading" data-reveal>
        <span className="section-number">01</span>
        <h2>Three reasons to know Yixing Retail.</h2>
        <p>
          The official website presents company identity, business direction, and contact information clearly for
          partners, users, and support requests.
        </p>
      </div>
      <div className="reason-grid">
        {reasons.map(({ icon: Icon, title, copy }, index) => (
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

function ServicesSection() {
  return (
    <section className="collections section" id="services">
      <div className="section-heading split" data-reveal>
        <div>
          <span className="section-number">02</span>
          <h2>Business scope across retail and software.</h2>
        </div>
        <p>
          {company.scopeEn}
          <br />
          {company.scopeCn}
        </p>
      </div>

      <div className="collection-hero" data-reveal>
        <img src="/assets/digital-commerce-hero.png" alt="Digital commerce dashboards and mobile software visuals" />
      </div>

      <div className="collection-grid">
        {services.map((item, index) => (
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

function ScrollStory({ trackRef }) {
  return (
    <section className="story section" id="workflow" ref={trackRef}>
      <div className="story-copy" data-reveal>
        <span className="section-number">03</span>
        <h2>From online retail to digital operations.</h2>
        <p>
          Yixing Retail connects retail scenarios, mobile applications, e-commerce tools, and software services into a
          practical digital workflow.
        </p>
      </div>

      <div className="track-stage" data-reveal>
        <svg className="route-svg" viewBox="0 0 960 360" role="img" aria-label="Animated digital workflow route">
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
          {storySteps.map(([num, title, copy]) => (
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

function CompanySection() {
  return (
    <section className="global section" id="company">
      <div className="global-image" data-reveal>
        <img src="/assets/digital-commerce-hero.png" alt="Digital retail and software service visual" />
      </div>
      <div className="global-copy" data-reveal>
        <span className="section-number">04</span>
        <h2>Registered company information.</h2>
        <p>
          {company.nameCn} is registered in Ningbo, Zhejiang. The company information below is provided for business
          cooperation, product consultation, user feedback, and technical support.
        </p>
        <div className="market-list company-fact-list">
          {companyFacts.map(([label, value]) => (
            <span key={label}>
              <Globe2 size={16} />
              <strong>{label}</strong>
              {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitySection() {
  const items = [
    [Store, "Internet Retail", "Online retail service direction for digital storefronts and retail operations."],
    [Code2, "Mobile Apps", "Mobile application development for product, service, and user scenarios."],
    [Truck, "Cross-Border Tools", "Digital tools that support cross-border e-commerce workflow needs."],
    [BadgeCheck, "Software Services", "Practical software services for business digitization and operations."]
  ];

  return (
    <section className="capability section" id="scope">
      <div className="section-heading" data-reveal>
        <span className="section-number">05</span>
        <h2>Services shaped for digital commerce teams.</h2>
        <p>The company focuses on software-enabled retail services rather than a single product category.</p>
      </div>
      <div className="capability-grid">
        {items.map(([Icon, title, copy], index) => (
          <article className="capability-card" data-reveal key={title} style={{ "--delay": `${index * 75}ms` }}>
            <Icon size={24} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProfileSection() {
  return (
    <section className="quality section" id="profile">
      <div className="quality-panel" data-reveal>
        <Sparkles size={30} />
        <h2>Company profile in Chinese and English.</h2>
        <p>
          The official website makes the legal company name, registered identifier, business address, and contact
          channels easy to verify.
        </p>
        <div className="quality-bars" aria-hidden="true">
          <span style={{ "--w": "92%" }} />
          <span style={{ "--w": "84%" }} />
          <span style={{ "--w": "76%" }} />
        </div>
      </div>
      <div className="quality-list" data-reveal>
        <article>
          <span>公司名称</span>
          <strong>{company.nameCn}</strong>
        </article>
        <article>
          <span>English Name</span>
          <strong>{company.nameEn}</strong>
        </article>
        <article>
          <span>Unified Social Credit Identifier</span>
          <strong>{company.creditCode}</strong>
        </article>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-copy" data-reveal>
        <span className="section-number">06</span>
        <h2>联系我们</h2>
        <p>如您有业务合作、产品咨询、用户反馈或技术支持需求，欢迎通过以下方式联系我们。</p>
        <p className="contact-english">
          Contact us for business cooperation, product inquiries, user feedback, or technical support.
        </p>
      </div>

      <div className="contact-details" data-reveal>
        {contactItems.map(([label, value]) => (
          <article className="contact-item" key={label}>
            <span>{label}</span>
            {label === "联系邮箱" ? (
              <a href={`mailto:${value}`}>{value}</a>
            ) : label === "官方网站" ? (
              <a href={value} target="_blank" rel="noreferrer">
                {value}
              </a>
            ) : (
              <strong>{value}</strong>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function App() {
  const trackRef = useRef(null);
  useReveal();
  const scrolled = usePageMotion(trackRef);

  return (
    <>
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <WhySection />
        <ServicesSection />
        <ScrollStory trackRef={trackRef} />
        <CompanySection />
        <CapabilitySection />
        <ProfileSection />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <strong>Yixing Retail</strong>
        <span>{company.nameCn}</span>
        <span>{company.nameEn}</span>
        <span>{company.website}</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
