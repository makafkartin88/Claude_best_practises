// Veritico product — UI shell components

const Sidebar = ({ product, setProduct, section, setSection }) => {
  const products = [
    { id: 'stock', name: 'Veritico STOCK', dot: 'var(--veritico-stock-base)' },
    { id: 'promo', name: 'Veritico PROMO', dot: 'var(--veritico-promo-base)' },
    { id: 'price', name: 'Veritico PRICE', dot: 'var(--veritico-price-base)' },
    { id: 'range', name: 'Veritico RANGE', dot: 'var(--veritico-range-base)' },
  ];
  const nav = [
    { id: 'dashboard', icon: 'ph-squares-four',     label: 'Dashboard' },
    { id: 'forecast',  icon: 'ph-chart-line-up',    label: 'Forecast' },
    { id: 'orders',    icon: 'ph-package',          label: 'Orders'   },
    { id: 'stores',    icon: 'ph-storefront',       label: 'Stores'   },
    { id: 'reports',   icon: 'ph-file-text',        label: 'Reports'  },
  ];
  return (
    <aside className="sb">
      <div className="sb__logo">
        <img src="../../assets/logo/logio-wordmark.svg" alt="Logio" />
        <span className="env">Prod</span>
      </div>
      <div className="sb__section">Products</div>
      {products.map(p => (
        <div key={p.id} className={"sb__prod " + (product === p.id ? 'active' : '')} onClick={() => setProduct(p.id)}>
          <span className="dot" style={{ background: p.dot }}></span>
          {p.name}
        </div>
      ))}
      <div className="sb__section">Operations</div>
      {nav.map(n => (
        <div key={n.id} className={"sb__item " + (section === n.id ? 'active' : '')} onClick={() => setSection(n.id)}>
          <i className={"ph " + n.icon}></i>{n.label}
        </div>
      ))}
      <div className="sb__section">Admin</div>
      <div className="sb__item"><i className="ph ph-gear"></i>Settings</div>
      <div className="sb__item"><i className="ph ph-users"></i>Team</div>
      <div className="sb__spacer" />
      <div className="sb__footer">
        <span className="sb__avatar">JL</span>
        <div className="sb__user"><strong>Jesper L.</strong><span>Albert CZ</span></div>
      </div>
    </aside>
  );
};

const Topbar = ({ crumb }) => (
  <header className="tb">
    <div className="tb__crumb">
      <span>Veritico</span>
      {crumb.map((c, i) => (<React.Fragment key={i}><span className="sep">/</span><span>{c}</span></React.Fragment>))}
    </div>
    <div className="tb__spacer" />
    <div className="tb__search">
      <i className="ph ph-magnifying-glass"></i>
      <input placeholder="Search SKUs, stores, orders…" />
    </div>
    <span className="tb__icon"><i className="ph ph-bell"></i></span>
    <span className="tb__icon"><i className="ph ph-question"></i></span>
  </header>
);

const Kpi = ({ label, value, delta, direction }) => (
  <div className="kpi">
    <div className="kpi__label">{label}</div>
    <div className="kpi__value">{value}</div>
    <div className={"kpi__delta " + direction}>
      <i className={"ph " + (direction === 'up' ? 'ph-trend-up' : 'ph-trend-down')}></i>
      {delta}
    </div>
  </div>
);

const Panel = ({ title, actions, children }) => (
  <div className="panel">
    <div className="panel__head">
      <h3>{title}</h3>
      <div className="actions">{actions}</div>
    </div>
    <div className="panel__body">{children}</div>
  </div>
);

const Tabs = ({ tabs, active, onChange }) => (
  <div className="tabs">
    {tabs.map(t => <span key={t} className={"tabs__item " + (active === t ? 'active' : '')} onClick={() => onChange(t)}>{t}</span>)}
  </div>
);

const ForecastChart = () => {
  const data = [42, 48, 51, 49, 55, 62, 58, 64, 71, 68, 75, 82, 78, 84];
  const forecastStart = 10;
  return (
    <>
      <div className="chart">
        {data.map((v, i) => (
          <div key={i} className={"bar " + (i >= forecastStart ? 'forecast' : '')} style={{ height: (v * 2.4) + 'px' }} title={v + ' units'}></div>
        ))}
      </div>
      <div className="chart-legend">
        <span><span className="sw" style={{ background: 'var(--brand)' }}></span>Actual</span>
        <span><span className="sw" style={{ background: 'var(--brand-soft)', border: '1px dashed var(--brand)' }}></span>Forecast (AI)</span>
        <span style={{ marginLeft: 'auto' }}>Last 14 days · 350 stores</span>
      </div>
    </>
  );
};

Object.assign(window, { Sidebar, Topbar, Kpi, Panel, Tabs, ForecastChart });
