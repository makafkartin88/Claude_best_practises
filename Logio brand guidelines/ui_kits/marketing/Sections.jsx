// Logio marketing — page sections

const Hero = () => {
  return (
    <section style={{ background: 'var(--bg-20)', paddingTop: 48, paddingBottom: 112, position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <Eyebrow>European consulting &amp; technology company</Eyebrow>
        <h1 style={{ font: '700 clamp(48px,7vw,104px)/0.96 var(--font-display)', letterSpacing: '-0.025em', marginTop: 28, marginBottom: 40, maxWidth: 1100 }}>
          Data‑led strategy.<br/>
          Intelligent automation.<br/>
          <span style={{ color: 'var(--brand)' }}>Integrated software.</span>
        </h1>
        <p style={{ font: '400 20px/1.5 var(--font-sans)', color: 'var(--fg-muted)', maxWidth: 640, marginBottom: 40 }}>
          Logio transforms your supply chain into a competitive advantage through data‑led strategy and purpose‑built software.
        </p>
        <div style={{ display: 'flex', gap: 12 }}>
          <button className="btn btn--brand btn--lg">Get in touch <i className="ph ph-arrow-right"></i></button>
          <button className="btn btn--secondary btn--lg">See our work</button>
        </div>
      </div>
      <img src="../../assets/brand/bg-circles-green.png" style={{ position: 'absolute', right: -160, top: -120, width: 640, opacity: 0.25, pointerEvents: 'none' }} alt="" />
    </section>
  );
};

const StatsStrip = () => (
  <section style={{ padding: '80px 0', borderTop: '1px solid var(--bg-40)', borderBottom: '1px solid var(--bg-40)' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, alignItems: 'end' }}>
      <Stat n="2004" label="On the market for two decades" />
      <Stat n="180" label="Over 180 supply chain experts" />
      <Stat n="1.000+" label="Successfully completed projects" brand />
      <Stat n="∞" label="Countless ideas with added value" />
    </div>
  </section>
);

const HowWeWork = () => (
  <section className="section section--cream">
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <div>
          <Eyebrow>How we work</Eyebrow>
          <h2 style={{ font: '700 48px/1.05 var(--font-display)', letterSpacing: '-0.015em', marginTop: 16, marginBottom: 24 }}>
            Consulting &amp; Technology &nbsp;<span style={{ color: 'var(--brand)' }}>×</span>&nbsp; Software
          </h2>
          <p style={{ font: '400 18px/1.5 var(--font-sans)', color: 'var(--fg-muted)', marginBottom: 20 }}>
            Logio goes beyond traditional consulting by taking full responsibility for outcomes. Instead of simply handing over a strategic report, our team stays engaged to implement the necessary software and process changes directly in your operations.
          </p>
          <p style={{ font: '400 18px/1.5 var(--font-sans)', color: 'var(--fg-muted)' }}>
            By combining analytical precision with practical business sense, we ensure that every recommendation is backed by data and delivers measurable ROI.
          </p>
        </div>
        <div style={{ borderRadius: 20, overflow: 'hidden' }}>
          <img src="../../assets/photos/team-meeting.jpg" style={{ width: '100%', height: 460, objectFit: 'cover', display: 'block' }} alt="" />
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="section">
    <div className="container">
      <SectionHead
        eyebrow="Services"
        title="Smart solution for any challenge"
        copy="Eight practice areas, one integrated delivery approach. Pick any combination — we tailor the engagement to your processes and organisation."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        <ServiceCard icon="ph-compass"             title="Strategy & Transformation"          copy="Top‑down roadmaps aligned to measurable business outcomes." />
        <ServiceCard icon="ph-gear-six"            title="Process & Systems Optimization"     copy="Re‑engineer the way planning and execution flow end to end." />
        <ServiceCard icon="ph-warehouse"           title="Logistics, Warehousing & Distribution" copy="Layout, flow, and service‑level optimisation for complex networks." />
        <ServiceCard icon="ph-factory"             title="Manufacturing & Maintenance"         copy="Lean, predictive maintenance, and throughput improvements." />
        <ServiceCard icon="ph-chart-bar"           title="Data & Operations"                   copy="Make operational data actionable for every decision layer." />
        <ServiceCard icon="ph-rocket-launch"       title="Delivery & Execution"                copy="We stay on through rollout, adoption and steady‑state support." />
        <ServiceCard icon="ph-cube"                title="Product Development"                 copy="Assortment, lifecycle and range architecture." />
        <ServiceCard icon="ph-tag"                 title="Inventory, Pricing & Promotion"      copy="Joint optimisation across availability, margin and demand." />
      </div>
    </div>
  </section>
);

const Veritico = ({ openDemo, onDemo }) => (
  <section className="section section--cream" id="veritico">
    <div className="container">
      <SectionHead
        eyebrow="Veritico · software"
        title="An end‑to‑end software platform."
        copy="Advanced mathematical models and artificial intelligence. Standalone or combined for greater synergy — depending on your needs."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        <VeriticoCard dot="var(--veritico-stock-base)" title="Veritico STOCK" modules={['Demand Forecasting', 'Inventory Management', 'Replenishment']}   demoOpen={openDemo === 'stock'} onClick={() => onDemo('stock')} />
        <VeriticoCard dot="var(--veritico-promo-base)" title="Veritico PROMO" modules={['Promo Planning', 'Promo Management', 'Forecasting & Optimization']} demoOpen={openDemo === 'promo'} onClick={() => onDemo('promo')} />
        <VeriticoCard dot="var(--veritico-price-base)" title="Veritico PRICE" modules={['Price Management', 'Price Optimization', 'Markdown Management']}  demoOpen={openDemo === 'price'} onClick={() => onDemo('price')} />
        <VeriticoCard dot="var(--veritico-range-base)" title="Veritico RANGE" modules={['Assortment Planning', 'Shelf Optimization', 'Store Clustering']}   demoOpen={openDemo === 'range'} onClick={() => onDemo('range')} />
      </div>
    </div>
  </section>
);

const WhyLogio = () => (
  <section className="section">
    <div className="container">
      <SectionHead eyebrow="Why Logio" title="Eight reasons you'll keep calling us back." copy="Not a one‑off project shop. We build long‑term strategic partnerships." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
        <WhyCard icon="ph-package"        title="Delivery"            copy="We deliver complex solutions with measurable business impact." />
        <WhyCard icon="ph-chart-line-up"  title="Data‑driven"         copy="Our projects and recommendations are based on data, not assumptions." />
        <WhyCard icon="ph-code"           title="Software experts"    copy="Among the leading providers of inventory management solutions." />
        <WhyCard icon="ph-handshake"      title="Full‑Service"        copy="We support you from initial design to implementation and adoption." />
        <WhyCard icon="ph-scales"         title="Independence"        copy="Vendor‑independent and always acting in the best interest of our clients." />
        <WhyCard icon="ph-brain"          title="Know‑how"            copy="State‑of‑the‑art mathematics with deep industry expertise." />
        <WhyCard icon="ph-buildings"      title="References"          copy="Experience across retail, FMCG, manufacturing and logistics." />
        <WhyCard icon="ph-wrench"         title="Customization"       copy="Tailored to your processes and organisation." />
      </div>
    </div>
  </section>
);

const CaseStudy = () => (
  <section className="section section--dark">
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}><span className="dot"></span>Case study · Albert CZ</span>
          <h2 style={{ font: '700 44px/1.1 var(--font-display)', letterSpacing: '-0.015em', margin: '20px 0 24px' }}>
            Better availability and fresher stock, at scale.
          </h2>
          <p style={{ font: '400 17px/1.55 var(--font-sans)', color: 'rgba(255,255,255,0.75)', marginBottom: 28 }}>
            Albert Česká republika, s.r.o., is a division of the Netherlands/Belgium‑based Ahold Delhaize group, operating more than <strong>350 supermarkets and 3 distribution centres</strong>. Veritico STOCK, PROMO and PRICE support Albert's supply chain from pricing decisions to ordering for each individual store.
          </p>
          <div style={{ borderLeft: '3px solid var(--brand)', paddingLeft: 20, marginBottom: 32 }}>
            <p style={{ font: '400 16px/1.55 var(--font-sans)', color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', marginBottom: 12 }}>
              "The cooperation between our company and Logio wasn't just one of the many IT projects. We made Albert stronger and more efficient together."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--orange-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: '600 13px/1 var(--font-display)', color: '#fff' }}>JL</div>
              <div>
                <div style={{ font: '600 14px/1.2 var(--font-sans)' }}>Jesper Lauridsen</div>
                <div style={{ font: '400 13px/1.2 var(--font-sans)', color: 'rgba(255,255,255,0.6)' }}>CEO, Albert Czech Republic</div>
              </div>
            </div>
          </div>
          <button className="btn btn--outline-light">See solution <i className="ph ph-arrow-right"></i></button>
        </div>
        <div style={{ borderRadius: 20, overflow: 'hidden' }}>
          <img src="../../assets/photos/warehouse.jpg" style={{ width: '100%', height: 520, objectFit: 'cover', display: 'block' }} alt="" />
        </div>
      </div>
    </div>
  </section>
);

const Trust = () => (
  <section style={{ padding: '72px 0', background: 'var(--white)', borderTop: '1px solid var(--bg-40)' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
      <div style={{ display: 'flex', gap: 20 }}>
        <i className="ph ph-cloud-check" style={{ fontSize: 40, color: 'var(--fg)' }}></i>
        <div>
          <h5 style={{ font: '600 18px/1.2 var(--font-display)', margin: 0 }}>Trusted by Microsoft</h5>
          <p style={{ font: '400 14px/1.5 var(--font-sans)', color: 'var(--fg-muted)', marginTop: 8 }}>Veritico STOCK and Veritico PRICE are listed in the Microsoft Azure Marketplace.</p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        <i className="ph ph-trophy" style={{ fontSize: 40, color: 'var(--fg)' }}></i>
        <div>
          <h5 style={{ font: '600 18px/1.2 var(--font-display)', margin: 0 }}>Listed by Gartner</h5>
          <p style={{ font: '400 14px/1.5 var(--font-sans)', color: 'var(--fg-muted)', marginTop: 8 }}>Representative Vendor in Gartner's Market Guide for Retail Forecasting and Replenishment Solutions since 2020. Implemented at more than 80 clients.</p>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Hero, StatsStrip, HowWeWork, Services, Veritico, WhyLogio, CaseStudy, Trust });
