import { Link } from 'react-router-dom';

const styles = {
  container: {
    backgroundColor: '#0F172A',
    color: '#FFFFFF',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '32px',
    fontWeight: '800',
    marginBottom: '12px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#94A3B8',
    marginBottom: '40px',
    maxWidth: '500px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btnNigeria: {
    backgroundColor: '#059669',
    color: '#FFFFFF',
    padding: '16px 32px',
    borderRadius: '50px',
    fontWeight: '700',
    fontSize: '15px',
    textDecoration: 'none',
    boxShadow: '0 10px 25px rgba(5, 150, 105, 0.25)',
  },
  btnIntl: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#FFFFFF',
    padding: '16px 32px',
    borderRadius: '50px',
    fontWeight: '700',
    fontSize: '15px',
    textDecoration: 'none',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
  },
};

function PortalSelector({ title, subtitle, intlPath, ngPath, isExternal }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.subtitle}>{subtitle}</p>
      <div style={styles.buttonGroup}>
        {isExternal ? (
          <>
            <a href={ngPath} target="_blank" rel="noopener noreferrer" style={styles.btnNigeria}>
              🇳🇬 FOR NIGERIAN LEARNERS
            </a>
            <a href={intlPath} target="_blank" rel="noopener noreferrer" style={styles.btnIntl}>
              🌐 FOR INTERNATIONAL LEARNERS
            </a>
          </>
        ) : (
          <>
            <Link to={ngPath} style={styles.btnNigeria}>
              🇳🇬 FOR NIGERIAN LEARNERS
            </Link>
            <Link to={intlPath} style={styles.btnIntl}>
              🌐 FOR INTERNATIONAL LEARNERS
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default PortalSelector;