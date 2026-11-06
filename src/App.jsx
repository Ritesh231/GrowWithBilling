import { useState } from 'react'
import './App.css'

const faqs = [
  {
    question: 'What is GrowWith Billing?',
    answer:
      'GrowWith Billing is a simple billing and product-management app for small businesses. Keep your products organised, create bills, scan product codes, and see an overview of your sales from one place.',
  },
  {
    question: 'Can I add and manage my own products?',
    answer:
      'Yes. Add products with details such as name, SKU, size, colour, price, and available stock. You can search your product list whenever you need to find an item.',
  },
  {
    question: 'How do I create a bill?',
    answer:
      'Open Billing, find a product by name or scan its SKU, and add it to the bill. Customer name and phone number are optional.',
  },
  {
    question: 'Do I need a barcode scanner?',
    answer:
      'No separate scanner is required to get started. The app includes a scan option for supported product codes; you can also search for products by name or SKU.',
  },
  {
    question: 'Is GrowWith Billing free?',
    answer:
      'Please check the app or contact the GrowWith Billing team for current plan, pricing, and availability details. Any applicable charges will be shown before you purchase a paid service.',
  },
  {
    question: 'Is my business data backed up automatically?',
    answer:
      'Data handling and backup availability depend on the service configuration and your account. Keep your own records of important business information and review the current in-app data and privacy notices.',
  },
]

const terms = [
  {
    title: 'Using the service',
    text: 'GrowWith Billing provides tools for recording products, preparing bills, and viewing sales summaries. You are responsible for using the service lawfully and for keeping your sign-in details secure.',
  },
  {
    title: 'Your business information',
    text: 'You are responsible for the accuracy of product details, prices, stock counts, customer information, and bill records you enter. Review each bill before sharing it with a customer and retain any records your business needs.',
  },
  {
    title: 'Availability and changes',
    text: 'We aim to keep the service useful and available, but features may change and access may occasionally be interrupted for maintenance or circumstances outside our control. We do not promise uninterrupted or error-free operation.',
  },
  {
    title: 'Plans and payments',
    text: 'If paid plans or optional services are offered, their price, billing period, and applicable conditions will be presented in the app before you confirm a purchase. Taxes or payment-provider terms may apply.',
  },
  {
    title: 'Acceptable use',
    text: 'Do not misuse the service, interfere with its operation, attempt unauthorised access, or use it to store or share information unlawfully. We may restrict access when necessary to protect users or the service.',
  },
  {
    title: 'Disclaimer and liability',
    text: 'The service is a business-recording tool and is not a substitute for accounting, tax, or legal advice. To the extent allowed by law, GrowWith Billing is not responsible for losses caused by inaccurate information you enter, your failure to keep independent records, or interruptions beyond our reasonable control.',
  },
  {
    title: 'Updates to these terms',
    text: 'These terms may be updated as the service changes. The latest version will be published here. By continuing to use GrowWith Billing after an update takes effect, you agree to the revised terms.',
  },
]

function Icon({ name, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  const paths = {
    arrow: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
    bag: <><path d="M5 8h14l1 12H4L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>,
    chart: <><path d="M4 19V5" /><path d="M4 19h17" /><path d="m7 15 4-4 3 2 6-7" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    scan: <><path d="M4 8V5a1 1 0 0 1 1-1h3" /><path d="M16 4h3a1 1 0 0 1 1 1v3" /><path d="M20 16v3a1 1 0 0 1-1 1h-3" /><path d="M8 20H5a1 1 0 0 1-1-1v-3" /><path d="M7 12h10" /><path d="M9 9v6" /><path d="M15 9v6" /></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
    spark: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 1 2.5 2 1-2 1-1 2.5-1-2.5-2-1 2-1 1-2.5Z" /></>,
    tag: <><path d="M20 13 11 22l-9-9V2h11l7 7a3 3 0 0 1 0 4Z" /><circle cx="7.5" cy="7.5" r="1.5" /></>,
    wallet: <><rect x="3" y="5" width="18" height="15" rx="2" /><path d="M3 8h16a2 2 0 0 1 2 2v3h-5a2 2 0 0 0 0 4h5" /><path d="M16 13h.01" /></>,
  }

  return <svg {...common}>{paths[name]}</svg>
}

function App() {
  const [activeFaq, setActiveFaq] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="GrowWith Billing home" onClick={closeMenu}>
          <img className="brand-logo" src="/GrowLogo.jpeg" alt="" />
          <span>GrowWith <strong>Billing</strong></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name="menu" size={23} />
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#how-it-works" onClick={closeMenu}>How it works</a>
          <a href="/faq.html" onClick={closeMenu}>FAQ</a>
          <a href="/about-us.html" onClick={closeMenu}>About Us</a>
          <a href="/contact-us.html" onClick={closeMenu}>Contact Us</a>
          <a href="/privacy-policy.html" onClick={closeMenu}>Privacy Policy</a>
          <a className="nav-cta" href="/terms-and-conditions.html" onClick={closeMenu}>Terms &amp; Conditions</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Made for growing businesses</div>
            <h1>Less time on billing.<br /><span>More room to grow.</span></h1>
            <p className="hero-description">
              Keep your products in order, create bills in a few taps, and get a clearer picture of your sales — all in one simple app.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#features">Explore the features <Icon name="arrow" size={18} /></a>
              <a className="text-link" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-proof">
              <span className="proof-icon"><Icon name="check" size={15} /></span>
              <span>Simple to start. Easy to use every day.</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="GrowWith Billing app dashboard preview">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="dashboard-card">
              <div className="dashboard-top">
                <div>
                  <p className="dashboard-greeting">Good morning, Ritesh</p>
                  <h2>Your Business</h2>
                </div>
                <span className="dashboard-avatar"><Icon name="chart" size={21} /></span>
              </div>
              <div className="sales-panel">
                <div className="panel-heading">
                  <span>Sales trend</span>
                  <span className="period-pill">7 days <Icon name="chevron" size={13} /></span>
                </div>
                <div className="chart-area">
                  <div className="chart-grid"><i /><i /><i /></div>
                  <svg className="sales-chart" viewBox="0 0 420 130" preserveAspectRatio="none" aria-label="Illustrative sales trend">
                    <defs>
                      <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#6487f5" stopOpacity=".22" />
                        <stop offset="100%" stopColor="#6487f5" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 105 C35 98 45 76 78 82 S125 102 158 70 S207 69 238 78 S280 42 310 55 S357 65 382 28 S407 35 420 16 V130 H0Z" fill="url(#chartFill)" />
                    <path d="M0 105 C35 98 45 76 78 82 S125 102 158 70 S207 69 238 78 S280 42 310 55 S357 65 382 28 S407 35 420 16" fill="none" stroke="#5579ed" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="382" cy="28" r="5" fill="#fff" stroke="#5579ed" strokeWidth="3" />
                  </svg>
                  <div className="chart-days"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
                </div>
              </div>
              <div className="dashboard-summary">
                <div className="summary-icon"><Icon name="wallet" size={19} /></div>
                <div className="summary-copy"><span>Today&apos;s sales</span><strong>₹12,450</strong></div>
                <span className="summary-growth">↗ 12%</span>
              </div>
              <div className="dashboard-bottom">
                <div className="bottom-label"><span>Recent activity</span><span>View all</span></div>
                <div className="activity-row">
                  <span className="activity-symbol"><Icon name="tag" size={17} /></span>
                  <span className="activity-name">Everyday Shirt<small>Sale · 10:42 AM</small></span>
                  <strong>₹900</strong>
                </div>
              </div>
            </div>
            <div className="floating-note stock-note"><span className="note-icon"><Icon name="check" size={16} /></span><span><strong>Stock updated</strong><small>Product list is in sync</small></span></div>
            <div className="floating-note bill-note"><span className="note-icon note-lilac"><Icon name="bag" size={16} /></span><span><strong>New bill created</strong><small>Ready when you are</small></span></div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Product highlights">
          <span><Icon name="scan" size={19} /> Quick product search</span>
          <i />
          <span><Icon name="wallet" size={19} /> Simple billing</span>
          <i />
          <span><Icon name="chart" size={19} /> Sales at a glance</span>
        </section>

        <section className="features-section section-wrap" id="features">
          <div className="section-intro">
            <span className="section-kicker">Everything in one place</span>
            <h2>Small-business essentials,<br /><span>without the busywork.</span></h2>
            <p>Spend less time looking for information and more time looking after your customers.</p>
          </div>
          <div className="feature-grid">
            <article className="feature-card feature-card-large">
              <div className="feature-icon blue-icon"><Icon name="bag" size={23} /></div>
              <h3>Keep your products organised</h3>
              <p>Save product names, SKUs, sizes, colours, prices, and stock counts. Search your catalogue when it is time to make a sale.</p>
              <div className="product-preview">
                <span className="product-thumb"><Icon name="tag" size={21} /></span>
                <span className="product-details"><strong>Everyday Shirt</strong><small>SKU-62F7810 · 60 in stock</small></span>
                <strong className="product-price">₹900</strong>
              </div>
            </article>
            <article className="feature-card">
              <div className="feature-icon lilac-icon"><Icon name="wallet" size={23} /></div>
              <h3>Make billing feel simple</h3>
              <p>Find an item or scan its code, add it to a bill, and keep the checkout moving.</p>
              <div className="mini-bill"><span>New bill</span><span className="mini-bill-row">2 items <strong>₹1,650</strong></span><span className="mini-bill-total">Total <strong>₹1,650</strong></span></div>
            </article>
            <article className="feature-card">
              <div className="feature-icon green-icon"><Icon name="chart" size={23} /></div>
              <h3>See how business is going</h3>
              <p>Check your sales trend, today&apos;s activity, and a simple monthly summary from your dashboard.</p>
              <div className="mini-stat"><span className="mini-stat-icon"><Icon name="clock" size={17} /></span><span>Today&apos;s sales</span><strong>₹12,450</strong></div>
            </article>
            <article className="feature-card feature-card-wide">
              <div className="wide-feature-content">
                <div className="feature-icon peach-icon"><Icon name="scan" size={23} /></div>
                <h3>Find the right item, faster</h3>
                <p>Search your products by name or SKU, or use the in-app scan option for supported product codes.</p>
              </div>
              <div className="scan-preview" aria-hidden="true">
                <span className="scan-corner corner-tl" /><span className="scan-corner corner-tr" />
                <span className="scan-corner corner-bl" /><span className="scan-corner corner-br" />
                <div className="scan-lines"><i /><i /><i /><i /><i /><i /><i /></div>
                <span className="scan-glow" />
              </div>
            </article>
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="section-wrap how-inner">
            <div className="section-intro">
              <span className="section-kicker">A smoother everyday</span>
              <h2>From product to bill<br /><span>in a few simple steps.</span></h2>
              <p>Made to fit the way you already work — whether you are adding stock or serving the next customer.</p>
            </div>
            <div className="steps-grid">
              <article className="step-card"><span className="step-number">01</span><div className="step-icon"><Icon name="tag" size={23} /></div><h3>Add your products</h3><p>Build your product list with the details that matter to your business.</p></article>
              <article className="step-card"><span className="step-number">02</span><div className="step-icon"><Icon name="scan" size={23} /></div><h3>Find an item</h3><p>Search by name or SKU, or scan a supported product code.</p></article>
              <article className="step-card"><span className="step-number">03</span><div className="step-icon"><Icon name="wallet" size={23} /></div><h3>Create a bill</h3><p>Add items, review the details, and complete your bill with confidence.</p></article>
            </div>
          </div>
        </section>

        <section className="faq-section section-wrap" id="faq">
          <div className="faq-heading">
            <span className="section-kicker">Good to know</span>
            <h2>Frequently asked<br /><span>questions.</span></h2>
            <p>Can&apos;t find what you need? Get in touch through the support option in the app.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <article className={activeFaq === index ? 'faq-item is-active' : 'faq-item'} key={faq.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={activeFaq === index}
                    onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  >
                    {faq.question}<span className="faq-chevron"><Icon name="chevron" size={19} /></span>
                  </button>
                </h3>
                {activeFaq === index && <p className="faq-answer">{faq.answer}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="terms-section" id="terms">
          <div className="section-wrap terms-inner">
            <div className="terms-heading">
              <span className="feature-icon terms-icon"><Icon name="shield" size={23} /></span>
              <div><span className="section-kicker">Please read</span><h2>Terms &amp; Conditions</h2></div>
            </div>
            <p className="terms-lead">These terms explain the basic conditions for using GrowWith Billing. By using the service, you agree to them.</p>
            <div className="terms-grid">
              {terms.map((term, index) => (
                <article className="term-item" key={term.title}>
                  <span className="term-number">{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{term.title}</h3><p>{term.text}</p></div>
                </article>
              ))}
            </div>
            <p className="terms-note">Read the full <a href="/terms-and-conditions.html">Terms &amp; Conditions</a> for the terms that apply to the Service.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <img className="brand-logo" src="/GrowLogo.jpeg" alt="" />
          <span>GrowWith <strong>Billing</strong></span>
        </a>
        <p>Make room for the work that grows your business.</p>
        <div className="footer-links"><a href="#features">Features</a><a href="/faq.html">FAQ</a><a href="/about-us.html">About Us</a><a href="/contact-us.html">Contact Us</a><a href="/terms-and-conditions.html">Terms &amp; Conditions</a><a href="/privacy-policy.html">Privacy Policy</a><a href="/delete-account.html">Delete account</a></div>
        <span className="copyright">© 2026 GrowWith Billing</span>
      </footer>
    </div>
  )
}

export default App
