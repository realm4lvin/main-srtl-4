//import { Link } from 'react-router-dom';

const styles = {
  container: {
    backgroundColor: '#0F172A',
    color: '#FFFFFF',
    minHeight: '80vh',
    padding: '80px 5%',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 60px auto',
  },
  title: {
    fontSize: '40px',
    fontWeight: '800',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#94A3B8',
    lineHeight: '1.6',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '30px',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#10B981',
    marginBottom: '12px',
  },
  cardText: {
    fontSize: '15px',
    color: '#CBD5E1',
    lineHeight: '1.6',
  },
};

function About() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>About Safeguard Safety & Management</h1>
        <p style={styles.subtitle}>
          A premier provider of occupational health, safety, environmental, and quality management solutions across Africa and internationally.
        </p>
      </div>

      <div style={styles.contentGrid}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Our Mission</h2>
          <p style={styles.cardText}>
            To empower organizations and individuals with top-tier accredited health, safety, and environmental training, ensuring zero-harm workplaces worldwide.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Accreditation</h2>
          <p style={styles.cardText}>
            We are globally accredited to deliver NEBOSH, IOSH, CQI-IRCA, and ISO lead auditor certifications across multiple international jurisdictions.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Global Reach</h2>
          <p style={styles.cardText}>
            Operating dedicated regional channels for both Nigerian and international delegates with tailored currency support and localized scheduling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;