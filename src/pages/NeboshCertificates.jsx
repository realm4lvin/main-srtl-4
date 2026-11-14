import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

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
    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80')`,
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
  glassSearchContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    borderRadius: '50px',
    padding: '8px',
    maxWidth: '600px',
    width: '90%',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    zIndex: 2,
  },
  searchInputWrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: '50px',
    padding: '8px 20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    width: '100%',
    padding: '10px 12px',
    fontSize: '15px',
    color: '#0F172A',
    fontWeight: '500',
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
    margin: '20px auto 0',
    padding: '0 5%',
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
  noResults: {
    textAlign: 'center',
    gridColumn: '1 / -1',
    padding: '60px 20px',
    color: '#64748B',
    fontSize: '18px',
  },
};

const certificateCourses = [
  {
    title: 'Nebosh Health and Safety Leadership Excellence (HSL)',
    desc: 'Develop proactive leadership strategies to champion health and safety culture and drive systemic change from the top down.',
    path: '#',
  },
  {
    title: 'Nebosh HSE Managing Stress at Work (MSW)',
    desc: 'Identify workplace stressors and implement effective management standards to protect psychological wellbeing and mental health.',
    path: '#',
  },
  {
    title: 'Nebosh HSE Certificate in Manual Handling Risk Assessment (MHR)',
    desc: 'Gain specialised knowledge to assess manual handling hazards, reduce musculoskeletal risks, and ensure safe handling procedures.',
    path: '#',
  },
  {
    title: 'Nebosh IIRSM Certificate in Managing Risk (MAR)',
    desc: 'Equip yourself with practical techniques to identify, evaluate, and manage operational risks across complex business environments.',
    path: '#',
  },
  {
    title: 'Nebosh Certificate in Fire Safety (FSC)',
    desc: 'Comprehensive training on fire safety principles, risk controls, and emergency protocols to protect people and property.',
    path: '#',
  },
  {
    title: 'Nebosh Certificate in Environmental Management (EMC)',
    desc: 'Master international environmental standards, impact assessments, and sustainable management practices for organizations.',
    path: '#',
  },
  {
    title: 'Nebosh Process Safety Management (PSM)',
    desc: 'Understand high-hazard process industries, safety case management, and how to prevent catastrophic process safety incidents.',
    path: '#',
  },
  {
    title: 'Nebosh Int’l General Certificate (IGC)',
    desc: 'The gold standard global qualification for health and safety professionals managing occupational risks across worldwide operations.',
    path: '#',
  },
  {
    title: 'Nebosh National General Certificate (UK-NGC)',
    desc: 'UK-focused core health and safety qualification aligned with domestic legislative standards and best industry practices.',
    path: '#',
  },
  {
    title: 'Nebosh Health & Safety Management for Construction (International - CI)',
    desc: 'Targeted safety management qualification tailored specifically to international construction site hazards, rules, and risk controls.',
    path: '#',
  },
  {
    title: 'Nebosh Health & Safety Management for Construction (UK - CN)',
    desc: 'Comprehensive construction health and safety qualification aligned with UK construction regulations and CDM guidelines.',
    path: '#',
  },
];

function CourseCard({ course, index }) {
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
        <h2 style={styles.cardTitle}>{course.title}</h2>
        <p style={styles.cardDesc}>{course.desc}</p>
      </div>
      <Link
        to={course.path}
        style={{
          ...styles.cardButton,
          ...(btnHovered ? styles.cardButtonHover : {}),
        }}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
      >
        EXPLORE{' '}
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

export default function NeboshCertificates() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = certificateCourses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.pageWrapper}>
      {/* Hero Banner */}
      <div style={styles.heroBanner}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>NEBOSH Certificate Courses</h1>
          <p style={styles.heroSubtitle}>
            Industry-standard qualifications designed to build robust health, safety, and operational risk management expertise.
          </p>
        </div>

        {/* Clean Glassmorphic Live Search Input */}
        <div style={styles.glassSearchContainer}>
          <div style={styles.searchInputWrapper}>
            <Search size={20} color="#64748B" />
            <input
              type="text"
              placeholder="Search certificate courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
          </div>
        </div>
      </div>

      {/* Smooth Fade Transition Overlay */}
      <div style={styles.fadeTransition} />

      {/* Course Cards Grid */}
      <div style={styles.grid}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <CourseCard key={course.title} course={course} index={index} />
          ))
        ) : (
          <div style={styles.noResults}>
            No certificate courses matched your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}