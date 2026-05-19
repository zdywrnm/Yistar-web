import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  ChevronDown,
  Factory,
  Globe2,
  Mail,
  Menu,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  X,
  Zap
} from "lucide-react";
import "./styles.css";

const collections = [
  {
    name: "Die-Cast Cars",
    copy: "Collector-style models with polished finishes for everyday retail."
  },
  {
    name: "Remote-Control Cars",
    copy: "Responsive RC play with bold shells and durable wheel systems."
  },
  {
    name: "Stunt Cars",
    copy: "Flip, drift, and climb designs made for high-energy demos."
  },
  {
    name: "Track Sets",
    copy: "Giftable sets with loops, ramps, and repeat-play layouts."
  },
  {
    name: "Construction Vehicles",
    copy: "Excavators, loaders, and site vehicles with realistic details."
  },
  {
    name: "Gift Sets",
    copy: "Shelf-ready bundles for holiday, marketplace, and channel programs."
  }
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    copy: "Material selection, rounded handling details, and compliance-aware sourcing for global toy retail."
  },
  {
    icon: Zap,
    title: "Built for Play",
    copy: "Durable wheels, bright finishes, and demo-friendly movement across classic, RC, and stunt lines."
  },
  {
    icon: PackageCheck,
    title: "Retail Ready",
    copy: "Packaging, bundle planning, and SKU presentation shaped for cross-border ecommerce conversion."
  }
];

const storySteps = [
  ["01", "Select", "Fast-moving toy car categories for overseas platforms and independent stores."],
  ["02", "Package", "Retail-ready boxes, bundles, and visual presentation for marketplace shelves."],
  ["03", "Launch", "Product pages, campaign assets, and clear collection stories for global buyers."],
  ["04", "Deliver", "Cross-border fulfillment coordination from Ningbo to customer markets."]
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
    ["Collections", "#collections"],
    ["Why Yistar", "#why"],
    ["OEM/ODM", "#oem"],
    ["Quality", "#quality"],
    ["Global", "#global"],
    ["Contact", "#contact"]
  ];

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label="Yistar home">
        <span className="brand-mark">Y</span>
        <span className="brand-text">
          <strong>YISTAR</strong>
          <small>Ningbo Yistar Internet Retail Co., Ltd.</small>
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
          Contact Sales
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
          Contact Sales
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
        <img src="/assets/hero-toy-cars.png" alt="" className="hero-image" />
        <div className="hero-light-trail" />
      </div>

      <div className="hero-content">
        <p className="company-name">Ningbo Yistar Internet Retail Co., Ltd. | 宁波义星互联网零售有限公司</p>
        <h1>
          Toy Cars Made for <span>Global Play</span>
        </h1>
        <p className="hero-copy">
          Yistar develops and supplies toy car collections for overseas ecommerce, combining bold product visuals,
          retail-ready packaging, and cross-border fulfillment thinking.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#collections">
            Explore Collections
            <ArrowRight size={19} />
          </a>
          <a className="button button-ghost" href="#contact">
            Contact Sales
            <ArrowRight size={19} />
          </a>
        </div>
        <div className="hero-metrics" aria-label="Yistar operating highlights">
          <div>
            <strong>6</strong>
            <span>Core categories</span>
          </div>
          <div>
            <strong>Global</strong>
            <span>Overseas customers</span>
          </div>
          <div>
            <strong>OEM</strong>
            <span>Packaging support</span>
          </div>
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
        <h2>Three reasons to choose Yistar.</h2>
        <p>
          The site is built around the buying questions overseas customers ask first: safety, play value, and retail
          execution.
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

function CollectionsSection() {
  return (
    <section className="collections section" id="collections">
      <div className="section-heading split" data-reveal>
        <div>
          <span className="section-number">02</span>
          <h2>Collections that move fast online.</h2>
        </div>
        <p>
          From die-cast classics to stunt-ready RC products, Yistar can present toy car lines as clear collections for
          storefronts, campaigns, and channel programs.
        </p>
      </div>

      <div className="collection-hero" data-reveal>
        <img src="/assets/product-collections.png" alt="Yistar toy car product collections" />
      </div>

      <div className="collection-grid">
        {collections.map((item, index) => (
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
    <section className="story section" ref={trackRef}>
      <div className="story-copy" data-reveal>
        <span className="section-number">03</span>
        <h2>From selected SKU to global delivery.</h2>
        <p>
          A scroll-led product journey turns the company story into something visual: products move from sourcing and
          presentation into overseas ecommerce channels.
        </p>
      </div>

      <div className="track-stage" data-reveal>
        <svg className="route-svg" viewBox="0 0 960 360" role="img" aria-label="Animated toy car route">
          <path
            className="route-shadow"
            d="M36 250 C170 80 340 64 470 176 C600 288 760 306 922 118"
            fill="none"
          />
          <path className="route-line" d="M36 250 C170 80 340 64 470 176 C600 288 760 306 922 118" fill="none" />
          <path className="route-progress" d="M36 250 C170 80 340 64 470 176 C600 288 760 306 922 118" fill="none" />
        </svg>
        <div className="runner-car" aria-hidden="true">
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

function GlobalSection() {
  return (
    <section className="global section" id="global">
      <div className="global-image" data-reveal>
        <img src="/assets/global-ready.png" alt="Toy car products prepared for global ecommerce delivery" />
      </div>
      <div className="global-copy" data-reveal>
        <span className="section-number">04</span>
        <h2>Prepared for overseas markets.</h2>
        <p>
          Yistar is based in Ningbo, one of China's practical export hubs, and builds its independent site around clear
          category presentation, buyer communication, and global ecommerce readiness.
        </p>
        <div className="market-list">
          {["North America", "Europe", "Middle East", "Southeast Asia"].map((market) => (
            <span key={market}>
              <Globe2 size={16} />
              {market}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitySection() {
  const items = [
    [Factory, "OEM / ODM Packaging", "Private-label presentation, bundles, and channel-specific packaging direction."],
    [Boxes, "SKU Planning", "Collection structure for marketplace pages, seasonal campaigns, and gift sets."],
    [Truck, "Cross-Border Support", "Communication and handoff planning for international ecommerce fulfillment."],
    [BadgeCheck, "Quality Awareness", "Supplier-side checks and product positioning built around buyer trust."]
  ];

  return (
    <section className="capability section" id="oem">
      <div className="section-heading" data-reveal>
        <span className="section-number">05</span>
        <h2>Built for brand partners and retail channels.</h2>
        <p>
          The website should convert both overseas customers and business buyers, so product appeal and trade credibility
          need to work together.
        </p>
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

function QualitySection() {
  return (
    <section className="quality section" id="quality">
      <div className="quality-panel" data-reveal>
        <Sparkles size={30} />
        <h2>Quality and safety are part of the product story.</h2>
        <p>
          For a toy car brand site, trust needs to be visible before the customer reaches a form. This page presents
          safety, materials, packaging, and fulfillment as core buying reasons rather than footnotes.
        </p>
        <div className="quality-bars" aria-hidden="true">
          <span style={{ "--w": "92%" }} />
          <span style={{ "--w": "84%" }} />
          <span style={{ "--w": "76%" }} />
        </div>
      </div>
      <div className="quality-list" data-reveal>
        <article>
          <span>Materials</span>
          <strong>Compliance-aware sourcing</strong>
        </article>
        <article>
          <span>Packaging</span>
          <strong>Retail and gift presentation</strong>
        </article>
        <article>
          <span>Experience</span>
          <strong>Demo-friendly motion and finish</strong>
        </article>
      </div>
    </section>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);

  const submitInquiry = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact-copy" data-reveal>
        <span className="section-number">06</span>
        <h2>Start a toy car project with Yistar.</h2>
        <p>
          Share your target market, preferred product category, packaging needs, and launch timeline. Yistar can help
          shape toy car collections for overseas ecommerce channels.
        </p>
        <div className="mail-link">
          <Mail size={18} />
          Global business inquiries
        </div>
      </div>

      <form className="inquiry-form" data-reveal onSubmit={submitInquiry}>
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="name@company.com" required />
        </label>
        <label>
          Country / Region
          <input type="text" name="country" placeholder="United States, Germany, UAE..." />
        </label>
        <label>
          Product Interest
          <select name="interest" defaultValue="">
            <option value="" disabled>
              Select a collection
            </option>
            {collections.map((item) => (
              <option value={item.name} key={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label className="full">
          Message
          <textarea name="message" placeholder="Tell us about your channel, quantity, packaging, or timeline." />
        </label>
        {sent && (
          <p className="form-status full" role="status">
            Thank you. Your inquiry has been prepared for the Yistar sales team.
          </p>
        )}
        <button className="button button-primary full" type="submit">
          Send Inquiry
          <ArrowRight size={19} />
        </button>
      </form>
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
        <CollectionsSection />
        <ScrollStory trackRef={trackRef} />
        <GlobalSection />
        <CapabilitySection />
        <QualitySection />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <strong>YISTAR</strong>
        <span>Ningbo Yistar Internet Retail Co., Ltd.</span>
        <span>Global toy car retail and cross-border ecommerce supply.</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
