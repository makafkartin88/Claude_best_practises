// Veritico product — screens

const DashboardScreen = ({ product }) => {
  const [tab, setTab] = React.useState('Overview');
  return (
    <>
      <div className="pagehead">
        <div>
          <h1>Good morning, Jesper</h1>
          <p>Here's what's moving across your supply chain today.</p>
        </div>
        <div className="pagehead__actions">
          <button className="btn btn--secondary btn--sm"><i className="ph ph-download-simple"></i> Export</button>
          <button className="btn btn--brand btn--sm"><i className="ph ph-plus"></i> New forecast</button>
        </div>
      </div>
      <Tabs tabs={['Overview', 'Forecasting', 'Replenishment', 'Reports']} active={tab} onChange={setTab} />
      <div className="kpis">
        <Kpi label="Stock coverage"    value="14.3d" delta="+0.8d vs prior" direction="up" />
        <Kpi label="Service level"     value="98.4%" delta="+0.3 pp"        direction="up" />
        <Kpi label="Forecast accuracy" value="87.1%" delta="−1.2 pp"        direction="down" />
        <Kpi label="Write‑offs"        value="0.42%" delta="−0.08 pp"       direction="up" />
      </div>
      <Panel title="Demand forecast" actions={<>
        <button className="btn btn--ghost btn--sm">Day</button>
        <button className="btn btn--ghost btn--sm" style={{ background: 'var(--bg-20)' }}>Week</button>
        <button className="btn btn--ghost btn--sm">Month</button>
      </>}>
        <ForecastChart />
      </Panel>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
        <Panel title="Replenishment queue" actions={<button className="btn btn--ghost btn--sm">View all</button>}>
          <table className="tbl">
            <thead>
              <tr><th>SKU</th><th>Product</th><th>Store</th><th>Module</th><th className="num">Qty</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>AL‑40219</td>
                <td>Fresh bread 400g</td>
                <td>Prague — Dejvice</td>
                <td><span className="prod"><span className="d" style={{ background: 'var(--veritico-stock-base)' }}></span>STOCK</span></td>
                <td className="num">2,400</td>
                <td><span className="pill pill--ok">Released</span></td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>AL‑11582</td>
                <td>Yoghurt 150g ×4</td>
                <td>Brno — Lužánky</td>
                <td><span className="prod"><span className="d" style={{ background: 'var(--veritico-stock-base)' }}></span>STOCK</span></td>
                <td className="num">1,120</td>
                <td><span className="pill pill--warn">Awaiting</span></td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>AL‑90044</td>
                <td>Markdown — Summer SKUs</td>
                <td>All stores</td>
                <td><span className="prod"><span className="d" style={{ background: 'var(--veritico-price-base)' }}></span>PRICE</span></td>
                <td className="num">—</td>
                <td><span className="pill pill--info">Planned</span></td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>AL‑33891</td>
                <td>Back‑to‑school promo</td>
                <td>3 DCs</td>
                <td><span className="prod"><span className="d" style={{ background: 'var(--veritico-promo-base)' }}></span>PROMO</span></td>
                <td className="num">86,000</td>
                <td><span className="pill pill--ok">Approved</span></td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>AL‑55120</td>
                <td>Organic eggs M×10</td>
                <td>Ostrava — Poruba</td>
                <td><span className="prod"><span className="d" style={{ background: 'var(--veritico-stock-base)' }}></span>STOCK</span></td>
                <td className="num">480</td>
                <td><span className="pill pill--danger">Stockout risk</span></td>
              </tr>
            </tbody>
          </table>
        </Panel>
        <Panel title="Alerts" actions={<span style={{ font: '400 12px/1 var(--font-sans)', color: 'var(--fg-subtle)' }}>Last 24h</span>}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { icon: 'ph-warning', color: 'var(--danger)', t: 'Stockout risk — Organic eggs M×10', s: 'Ostrava / Poruba · in 2 days' },
              { icon: 'ph-trend-up', color: 'var(--success)', t: 'Forecast bumped +12%', s: 'Fresh bread 400g, Prague cluster' },
              { icon: 'ph-tag', color: 'var(--orange-base)', t: 'New promo window active', s: 'Back‑to‑school, 14 days' },
              { icon: 'ph-cloud-check', color: 'var(--teal-dark)', t: 'Model retrained', s: 'v1.42 · 3 min ago' },
            ].map((a, i) => (
              <div key={i} style={{ display: 'flex', gap: 12 }}>
                <i className={"ph " + a.icon} style={{ fontSize: 20, color: a.color, marginTop: 2 }}></i>
                <div>
                  <div style={{ font: '500 13px/1.35 var(--font-sans)' }}>{a.t}</div>
                  <div style={{ font: '400 12px/1.3 var(--font-sans)', color: 'var(--fg-subtle)', marginTop: 2 }}>{a.s}</div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </>
  );
};

Object.assign(window, { DashboardScreen });
