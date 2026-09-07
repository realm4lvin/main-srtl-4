import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const styles = {
  pageWrapper: {
    backgroundColor: '#FFFFFF',
    color: '#0F172A',
    minHeight: '100vh',
    paddingBottom: '100px',
    fontFamily: 'Arial, sans-serif',
  },
  heroBanner: {
    position: 'relative',
    minHeight: '400px',
    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '60px 20px 80px',
    width: '100%',
    boxSizing: 'border-box',
  },
  heroContent: {
    maxWidth: '800px',
    zIndex: 2,
  },
  heroTitle: {
    fontSize: '44px',
    fontWeight: '800',
    lineHeight: '1.2',
    marginBottom: '16px',
    color: '#FFFFFF',
  },
  heroSubtitle: {
    fontSize: '16px',
    color: '#E2E8F0',
    lineHeight: '1.6',
    marginBottom: '32px',
  },
  fadeTransition: {
    height: '80px',
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)',
    marginTop: '-80px',
    position: 'relative',
    zIndex: 3,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px 5% 0',
    position: 'relative',
    zIndex: 4,
  },
  cardBase: {
    backgroundColor: '#F8FAFC',
    border: '2px solid #0F172A',
    borderRadius: '16px',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    opacity: 0,
    transform: 'translateY(40px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease, border-color 0.3s ease',
  },
  cardVisible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  cardHover: {
    transform: 'translateY(-8px)',
    borderColor: '#059669',
    boxShadow: '0 20px 30px -10px rgba(5, 150, 105, 0.25)',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: '700',
    marginBottom: '12px',
    color: '#0F172A',
  },
  cardDesc: {
    fontSize: '14px',
    color: '#475569',
    lineHeight: '1.6',
    marginBottom: '28px',
  },
  cardButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: '#059669',
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: '13px',
    letterSpacing: '0.5px',
    textDecoration: 'none',
    padding: '12px 24px',
    borderRadius: '50px',
    boxShadow: '0 4px 12px rgba(5, 150, 105, 0.2)',
    transition: 'all 0.2s ease',
    width: 'fit-content',
  },
  cardButtonHover: {
    backgroundColor: '#047857',
    boxShadow: '0 6px 16px rgba(5, 150, 105, 0.35)',
  },
  arrowIcon: {
    transition: 'transform 0.2s ease',
  },
  arrowIconHover: {
    transform: 'translateX(5px)',
  },
};

const qhseServices = [
  {
    title: 'ISO Audit and Certification',
    desc: 'Comprehensive end-to-end guidance, gap analysis, and auditing for ISO 9001, ISO 14001, and ISO 45001 international standards compliance.',
    path: '/services/iso-audit-certification',
  },
  {
    title: 'Health and Safety Studies',
    desc: 'Bespoke risk evaluations, job hazard analysis (JHA), HAZOP studies, and safety management frameworks for complex industrial operations.',
    path: '/services/health-safety-studies',
  },
  {
    title: 'Environmental Studies',
    desc: 'Environmental Impact Assessments (EIA), industrial waste minimization, air quality testing, and regulatory compliance reporting.',
    path: '/services/environmental-studies',
  },
  {
    title: 'Equipment Supply and Services',
    desc: 'Procurement, maintenance, and technical inspection services for high-grade safety gear, testing tools, and industrial PPE.',
    path: '/services/equipment-supply-services',
  },
];

function ServiceCard({ service, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => {
      observer.unobserve(node);
    };
  }, []);

  const staggerDelay = `${(index % 3) * 0.12}s`;

  return (
    <div
      ref={cardRef}
      style={{
        ...styles.cardBase,
        transitionDelay: staggerDelay,
        ...(isVisible ? styles.cardVisible : {}),
        ...(isHovered && isVisible ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <h2 style={styles.cardTitle}>{service.title}</h2>
        <p style={styles.cardDesc}>{service.desc}</p>
      </div>
      <Link
        to={service.path}
        style={{
          ...styles.cardButton,
          ...(btnHovered ? styles.cardButtonHover : {}),
        }}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
      >
        EXPLORE SERVICE{' '}
        <ArrowRight
          size={16}
          style={{
            ...styles.arrowIcon,
            ...(btnHovered ? styles.arrowIconHover : {}),
          }}
        />
      </Link>
    </div>
  );
}

function ServicesLanding() {
  return (
    <div style={styles.pageWrapper}>
      {/* Hero Banner */}
      <div style={styles.heroBanner}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Our Consultancy Services</h1>
          <p style={styles.heroSubtitle}>
            Partnering with international businesses to build safer workplaces, achieve ISO compliance, and manage operational risks effectively.
          </p>
        </div>
      </div>

      {/* Smooth Fade Transition Overlay */}
      <div style={styles.fadeTransition} />

      {/* Services Grid */}
      <div style={styles.grid}>
        {qhseServices.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}

export default ServicesLanding;