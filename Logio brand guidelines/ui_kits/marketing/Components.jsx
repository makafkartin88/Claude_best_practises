// Logio marketing — shared components
// All written into global scope so child script tags can use them.

const Logo = ({ color = "currentColor", height = 28 }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10, color }}>
    <img src="../../assets/logo/logio-wordmark.svg" style={{ height, filter: color === '#fff' || color === 'white' ? 'brightness(0) invert(1)' : 'none' }} alt="Logio" />
  </div>
);

const Nav = ({ active = "home" }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const items = [
    { id: 'home',      label: 'Home' },
    { id: 'services',  label: 'Services' },
    { id: 'veritico',  label: 'Veritico Software' },
    { id: 'clients',   label: 'Clients' },
    { id: 'about',     label: 'About' },
    { id: 'careers',   label: 'Careers' },
  ];
  return (
    <nav className={"nav " + (scrolled ? "scrolled" : "")}>
      <a className="nav__logo" href="#"><img src="../../assets/logo/logio-wordmark.svg" alt="Logio" /></a>
      <div className="nav__links">
        {items.map(i => <a key={i.id} className={active === i.id ? 'active' : ''}>{i.label}</a>)}
      </div>
      <div className="nav__cta">
        <button className="btn btn--ghost btn--sm">Contact</button>
        <button className="btn btn--brand btn--sm">Get in touch <i className="ph ph-arrow-right"></i></button>
      </div>
    </nav>
  );
};

const Eyebrow = ({ children }) => (
  <span className="eyebrow"><span className="dot"></span>{children}</span>
);

const SectionHead = ({ eyebrow, title, copy }) => (
  <div className="sh">
    <div className="sh__left">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
    </div>
    {copy && <div className="sh__right">{copy}</div>}
  </div>
);

const Stat = ({ n, label, brand }) => (
  <div className="stat">
    <span className={"stat__n " + (brand ? 'brand' : '')}>{n}</span>
    <span className="stat__l">{label}</span>
  </div>
);

const ServiceCard = ({ icon, title, copy }) => (
  <div className="service-card">
    <i className={"icon ph " + icon}></i>
    <h4>{title}</h4>
    <p>{copy}</p>
  </div>
);

const VeriticoCard = ({ dot, title, modules, demoOpen, onClick }) => (
  <div className="vprod" onClick={onClick}>
    <div className="vprod__tag">
      <span className="dot" style={{ background: dot }}></span>
      <span>{title}</span>
    </div>
    <h3 className="vprod__title">{title.split(' ')[1]}</h3>
    <div className="vprod__modules">
      {modules.map((m, i) => <div key={i}>• {m}</div>)}
    </div>
    <div className="vprod__footer">
      <span className="vprod__trust">Trusted by Microsoft</span>
      <span className="vprod__demo">{demoOpen ? 'Opened demo ✓' : 'Show demo →'}</span>
    </div>
  </div>
);

const WhyCard = ({ icon, title, copy }) => (
  <div className="why-card">
    <i className={"icon ph " + icon}></i>
    <h5>{title}</h5>
    <p>{copy}</p>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__row">
        <div>
          <img src="../../assets/logo/logio-wordmark.svg" style={{ height: 28, filter: 'brightness(0) invert(1)' }} alt="Logio" />
          <p style={{ font: '400 14px/1.6 var(--font-sans)', color: 'rgba(255,255,255,0.6)', maxWidth: 320, marginTop: 20 }}>
            European consulting &amp; technology company. Data‑led strategy. Intelligent automation. Integrated software.
          </p>
        </div>
        <div>
          <h6>Services</h6>
          <a>Strategy &amp; Transformation</a><br/>
          <a>Process Optimization</a><br/>
          <a>Logistics &amp; Warehousing</a><br/>
          <a>Data &amp; Operations</a>
        </div>
        <div>
          <h6>Veritico</h6>
          <a>STOCK</a><br/>
          <a>PROMO</a><br/>
          <a>PRICE</a><br/>
          <a>RANGE</a>
        </div>
        <div>
          <h6>Company</h6>
          <a>About</a><br/>
          <a>Case studies</a><br/>
          <a>Careers</a><br/>
          <a>Contact</a>
        </div>
      </div>
      <div className="footer__bot">
        <span>© 2026 Logio · Evropská 2588, 160 00 Praha 6‑Dejvice</span>
        <span>sales@logio.com</span>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Logo, Nav, Eyebrow, SectionHead, Stat, ServiceCard, VeriticoCard, WhyCard, Footer });
