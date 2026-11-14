import { useState } from 'react';
import { Target, Award, Globe, Shield, BookOpen, CheckCircle2 } from 'lucide-react';

const styles = {
  pageWrapper: {
    backgroundColor: '#0F172A',
    color: '#FFFFFF',
    minHeight: '100vh',
    paddingBottom: '100px',
    fontFamily: 'Arial, sans-serif',
  },
  heroBanner: {
    position: 'relative',
    minHeight: '400px',
    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('https://images.unsplash.com/photo-1541888946425-d0fbb1878d6b?auto=format&fit=crop&w=1600&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '60px 20px',
  },
  heroContent: {
    maxWidth: '900px',
    zIndex: 2,
  },
  heroTitle: {
    fontSize: '46px',
    fontWeight: '800',
    lineHeight: '1.2',
    marginBottom: '16px',
    color: '#FFFFFF',
  },
  heroSubtitle: {
    fontSize: '18px',
    color: '#94A3B8',
    lineHeight: '1.6',
  },
  fadeTransition: {
    height: '80px',
    background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0) 0%, #0F172A 100%)',
    marginTop: '-80px',
    position: 'relative',
    zIndex: 3,
  },
  sectionContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 5%',
  },
  gridTwoColumns: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '40px',
    alignItems: 'center',
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: '800',
    marginBottom: '20px',
    color: '#FFFFFF',
  },
  textBlock: {
    fontSize: '16px',
    color: '#94A3B8',
    lineHeight: '1.7',
    marginBottom: '16px',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    marginBottom: '80px',
  },
  cardBase: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    padding: '32px',
    transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
  },
  cardHover: {
    transform: 'translateY(-6px)',
    borderColor: '#059669',
    boxShadow: '0 20px 30px -10px rgba(5, 150, 105, 0.25)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  iconWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    backgroundColor: 'rgba(5, 150, 105, 0.15)',
    color: '#10B981',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: '10px',
  },
  servicesHeader: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
  },
  serviceList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  serviceListItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    color: '#CBD5E1',
    fontSize: '15px',
  },
  statsSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '24px',
    textAlign: 'center',
    padding: '40px',
    borderRadius: '20px',
    backgroundColor: 'rgba(5, 150, 105, 0.08)',
    border: '1px solid rgba(5, 150, 105, 0.2)',
    marginTop: '60px',
  },
  statNumber: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#10B981',
    marginBottom: '6px',
  },
  statLabel: {
    fontSize: '14px',
    color: '#CBD5E1',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
};

function HoverCard({ icon: Icon, title, text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.cardBase,
        ...(isHovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.iconWrapper}>
        <Icon size={24} />
      </div>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={{ ...styles.textBlock, fontSize: '14px', marginBottom: 0 }}>{text}</p>
    </div>
  );
}

export default function About() {
  const coreValues = [
    {
      icon: Shield,
      title: 'Integrity',
      text: 'Upholding absolute honesty, transparency, and ethical standards across all our training and consulting operations.',
    },
    {
      icon: Award,
      title: 'Professionalism',
      text: 'Delivering top-tier expertise with dedication, precision, and adherence to international safety benchmarks.',
    },
    {
      icon: Target,
      title: 'Integrity & Excellence',
      text: 'Continuous improvement in training delivery to guarantee zero-harm outcomes for organizations globally.',
    },
  ];

  const advisoryServices = [
    'Impact Assessment (EIA)',
    'Safety Audits',
    'Risk Assessment Studies',
    'HOD, HAZOP & HSE Case Study',
    'Fire Safety Study',
    'Oil Spill Contingency Plan',
  ];

  const trainingServices = [
    'ISO Training (9001, 14001, 45001)',
    'NEBOSH & IOSH Courses',
    'HSE Competency Training',
    'Fire Fighting Training',
    'First Aid & Medical Response',
    'Rigging & Lifting Safety',
  ];

  const stats = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '25,000+', label: 'Professionals Trained' },
    { number: '100%', label: 'Accredited Solutions' },
    { number: '50+', label: 'Global Corporate Clients' },
  ];

  return (
    <div style={styles.pageWrapper}>
      {/* Hero Banner */}
      <div style={styles.heroBanner}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>About Safeguard Safety & Management</h1>
          <p style={styles.heroSubtitle}>
            A premier provider of occupational health, safety, environmental, and quality management solutions across Africa and internationally.
          </p>
        </div>
      </div>

      <div style={styles.fadeTransition} />

      {/* Who We Are Section */}
      <div style={styles.sectionContainer}>
        <div style={styles.gridTwoColumns}>
          <div>
            <h2 style={styles.sectionTitle}>Who We Are</h2>
            <p style={styles.textBlock}>
              Safeguard is a recognized Quality, Health, Safety, Environment, and Quality (QHSE) and solutions provider in Africa. Since 1999, we specialize in QHSE trainings, management system development, and equipment supply.
            </p>
            <p style={styles.textBlock}>
              Our committees are top-notch and our management systems and training programs are world-class. Our consultants and trainers are professionals who have spent numerous years in industry and are therefore able to offer our delegates academic theory with practical experience.
            </p>
          </div>
          <div style={{ ...styles.cardBase, backgroundColor: 'rgba(5, 150, 105, 0.05)', borderColor: 'rgba(5, 150, 105, 0.2)' }}>
            <h3 style={{ ...styles.cardTitle, color: '#10B981', marginBottom: '16px' }}>Corporate Mission</h3>
            <p style={{ ...styles.textBlock, color: '#E2E8F0' }}>
              To continually manage, increase productivity and improve cooperation through high-quality solutions that meet an internationally recognized level of performance to enhance our customers' core defensive and sustained competitive advantage while promoting total corporate safety culture through commitment to top integrity workforce workmanship.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={styles.sectionTitle}>Corporate Core Values</h2>
          <p style={{ color: '#94A3B8', maxWidth: '600px', margin: '0 auto' }}>
            Our corporate values guide our approach, bringing integrity, uncompromising operational safety, and moral integrity to every client.
          </p>
        </div>

        <div style={styles.valuesGrid}>
          {coreValues.map((val, idx) => (
            <HoverCard key={idx} icon={val.icon} title={val.title} text={val.text} />
          ))}
        </div>

        {/* Our Services Section */}
        <div style={styles.servicesHeader}>
          <h2 style={styles.sectionTitle}>Our Core Services</h2>
          <p style={{ color: '#94A3B8' }}>Comprehensive advisory and training solutions tailored for industrial excellence.</p>
        </div>

        <div style={styles.servicesGrid}>
          <div style={styles.cardBase}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={styles.iconWrapper}><Globe size={22} /></div>
              <h3 style={{ ...styles.cardTitle, margin: 0 }}>Advisory Services</h3>
            </div>
            <ul style={styles.serviceList}>
              {advisoryServices.map((item, idx) => (
                <li key={idx} style={styles.serviceListItem}>
                  <CheckCircle2 size={16} color="#10B981" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={styles.cardBase}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={styles.iconWrapper}><BookOpen size={22} /></div>
              <h3 style={{ ...styles.cardTitle, margin: 0 }}>Training Solutions</h3>
            </div>
            <ul style={styles.serviceList}>
              {trainingServices.map((item, idx) => (
                <li key={idx} style={styles.serviceListItem}>
                  <CheckCircle2 size={16} color="#10B981" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Statistics Banner */}
        <div style={styles.statsSection}>
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}