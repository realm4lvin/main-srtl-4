import { Link } from 'react-router-dom';

const homeStyles = {
hero: {
  backgroundColor: '#0F172A',
  color: '#FFFFFF',
  padding: '60px 5% 100px 5%', // Standard padding, no huge gap needed
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  boxSizing: 'border-box',
},
  heroBadge: {
    display: 'inline-block',
    backgroundColor: 'rgba(5, 150, 105, 0.15)',
    color: '#10B981',
    border: '1px solid rgba(5, 150, 105, 0.3)',
    padding: '6px 16px',
    borderRadius: '50px',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '24px',
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: '800',
    lineHeight: '1.2',
    marginBottom: '20px',
    maxWidth: '900px',
    margin: '0 auto 20px auto',
    letterSpacing: '-0.5px',
  },
  heroSubtitle: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '40px',
    maxWidth: '720px',
    margin: '0 auto 40px auto',
    color: '#94A3B8',
  },
  portalContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap',
  },
  btnNigeria: {
    backgroundColor: '#059669',
    color: '#FFFFFF',
    padding: '14px 28px',
    borderRadius: '50px',
    fontWeight: '700',
    fontSize: '14px',
    textDecoration: 'none',
    boxShadow: '0 10px 25px rgba(5, 150, 105, 0.25)',
    transition: 'transform 0.2s ease',
  },
  btnIntl: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    color: '#FFFFFF',
    padding: '14px 28px',
    borderRadius: '50px',
    fontWeight: '700',
    fontSize: '14px',
    textDecoration: 'none',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    transition: 'transform 0.2s ease',
  },
};

function Home() {
  return (
    <div>
      <div style={homeStyles.hero}>
        <span style={homeStyles.heroBadge}>Accredited QHSE Training & Consultancy</span>
        <h1 style={homeStyles.heroTitle}>Global Leaders in Health, Safety & Environmental Management</h1>
        <p style={homeStyles.heroSubtitle}>
          Providing accredited NEBOSH, IOSH, and CQI-IRCA qualifications alongside specialized QHSE consultancy services worldwide.
        </p>
        <div style={homeStyles.portalContainer}>
          <Link to="/ng" style={homeStyles.btnNigeria}>
            🇳🇬 Access Nigeria Portal (NGN)
          </Link>
          <Link to="/intl" style={homeStyles.btnIntl}>
            🌐 Access International Portal (USD/GBP/EUR)
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;