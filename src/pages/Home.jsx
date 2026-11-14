import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Globe, Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Import local hero background images directly from src/assets/
import neboshImg from '../assets/nebosh-hero.jpg';
import ioshImg from '../assets/iosh-hero.jpg';
import isoImg from '../assets/iso-hero.jpg';
import emergencyImg from '../assets/emergency-hero.jpg';
import technicalImg from '../assets/technical-hero.jpg';
import competencyImg from '../assets/competency-hero.jpg';

const heroSlides = [
  {
    badge: "Global Gold Standard",
    title: "NEBOSH International & National Qualifications",
    subtitle: "Advance your safety career with globally recognized diplomas, certificates, and award courses.",
    ctaText: "Explore NEBOSH Courses",
    ctaLink: "/courses/nebosh-certificates",
    image: neboshImg,
    themeColor: "15, 23, 42"
  },
  {
    badge: "Leadership & Management",
    title: "IOSH Working & Managing Safely",
    subtitle: "Empower your managers and supervisors with world-class safety leadership skills.",
    ctaText: "Book IOSH Training",
    ctaLink: "/courses/iosh",
    image: ioshImg,
    themeColor: "30, 41, 59"
  },
  {
    badge: "Compliance & Auditing",
    title: "CQI-IRCA ISO Lead Auditor Certifications",
    subtitle: "Master ISO 9001, ISO 14001, ISO 45001, and more with expert-led audit training.",
    ctaText: "View ISO Tracks",
    ctaLink: "/services/iso-audit",
    image: isoImg,
    themeColor: "40, 30, 20"
  },
  {
    badge: "Emergency Preparedness",
    title: "Fire Safety & Practical First Aid Response",
    subtitle: "Equip your teams with life-saving skills, advanced fire fighting, BLS, and CPR certifications.",
    ctaText: "Explore Emergency Courses",
    ctaLink: "/courses/fire",
    image: emergencyImg,
    themeColor: "60, 20, 25"
  },
  {
    badge: "High-Risk Operations",
    title: "Advanced HSE Technical Safety Training",
    subtitle: "Specialized training for Confined Space, Gas Testing, Crane & Rigging, and LOTO procedures.",
    ctaText: "View Technical Courses",
    ctaLink: "/courses/qhse-technical",
    image: technicalImg,
    themeColor: "50, 40, 30"
  },
  {
    badge: "Career Booster",
    title: "HSE Competency & Multi-Certificate Programs",
    subtitle: "Fast-track your career with bundled programs like HSE-PCP (4 certificates) and Advanced HSE.",
    ctaText: "View Competency Courses",
    ctaLink: "/courses/qhse-competency",
    image: competencyImg,
    themeColor: "25, 35, 30"
  }
];

const homeStyles = {
  container: {
    backgroundColor: '#F8FAFC',
    color: '#0F172A',
    fontFamily: 'Arial, sans-serif',
    overflowX: 'hidden',
  },
  heroContainer: {
    position: 'relative',
    minHeight: '600px',
    backgroundColor: '#0F172A',
    borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
    display: 'flex',
    alignItems: 'stretch',
    overflow: 'hidden',
  },
  // Stacked full-bleed background images
  bgLayer: (bgImage, isActive) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center right',
    opacity: isActive ? 1 : 0,
    transition: 'opacity 0.6s ease-in-out',
    zIndex: 1,
  }),
  // Blended blur panel on the left with feathered gradient mask
  blurPanelLayer: (themeColor, isActive) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '65%',
    padding: '80px 70px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: `rgba(${themeColor}, 0.88)`,
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)',
    WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)',
    opacity: isActive ? 1 : 0,
    pointerEvents: isActive ? 'auto' : 'none',
    transition: 'opacity 0.6s ease-in-out',
    zIndex: 2,
    boxSizing: 'border-box',
  }),
  heroContentInner: {
    maxWidth: '520px',
    animation: 'smoothFadeUp 0.5s ease-out forwards',
  },
  heroBadge: {
    display: 'inline-block',
    backgroundColor: 'rgba(5, 150, 105, 0.25)',
    color: '#34D399',
    border: '1px solid rgba(52, 211, 153, 0.5)',
    padding: '6px 16px',
    borderRadius: '50px',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '18px',
  },
  heroTitle: {
    fontSize: 'clamp(28px, 3.5vw, 42px)',
    fontWeight: '800',
    lineHeight: '1.2',
    marginBottom: '16px',
    color: '#FFFFFF',
    letterSpacing: '-0.5px',
  },
  heroSubtitle: {
    fontSize: '15px',
    lineHeight: '1.6',
    marginBottom: '28px',
    color: '#CBD5E1',
    maxWidth: '480px',
  },
  portalContainer: {
    marginBottom: '32px',
  },
  primaryBtn: {
    backgroundColor: '#059669',
    color: '#FFFFFF',
    padding: '13px 28px',
    borderRadius: '50px',
    fontWeight: '700',
    fontSize: '14px',
    textDecoration: 'none',
    boxShadow: '0 10px 25px rgba(5, 150, 105, 0.4)',
    display: 'inline-block',
  },
  // Outer Left Arrow
  arrowLeft: {
    position: 'absolute',
    left: '24px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    width: '46px',
    height: '46px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#FFFFFF',
    backdropFilter: 'blur(4px)',
    zIndex: 10,
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    transition: 'background 0.2s ease',
  },
  // Outer Right Arrow
  arrowRight: {
    position: 'absolute',
    right: '24px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    width: '46px',
    height: '46px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#FFFFFF',
    backdropFilter: 'blur(4px)',
    zIndex: 10,
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    transition: 'background 0.2s ease',
  },
  // Centered Pagination Dots at the bottom
  carouselDotsCenter: {
    position: 'absolute',
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    zIndex: 10,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    padding: '8px 16px',
    borderRadius: '50px',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  dot: (active) => ({
    width: active ? '28px' : '8px',
    height: '8px',
    borderRadius: '4px',
    backgroundColor: active ? '#34D399' : 'rgba(255, 255, 255, 0.4)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }),
  section: {
    padding: '80px 5%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitleCenter: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  sectionTag: {
    color: '#059669',
    fontWeight: '700',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    marginBottom: '10px',
    display: 'block',
  },
  sectionHeading: {
    fontSize: '32px',
    fontWeight: '800',
    color: '#0F172A',
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  glassCard: {
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(15, 23, 42, 0.08)',
    borderRadius: '24px',
    padding: '40px 30px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
  },
  cardIconBox: {
    width: '50px',
    height: '50px',
    borderRadius: '14px',
    backgroundColor: 'rgba(5, 150, 105, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#059669',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '12px',
    color: '#0F172A',
  },
  cardText: {
    fontSize: '14px',
    color: '#475569',
    lineHeight: '1.6',
  },
  testimonialCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    padding: '30px',
    border: '1px solid rgba(15, 23, 42, 0.08)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.02)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  stars: {
    display: 'flex',
    gap: '4px',
    color: '#F59E0B',
    marginBottom: '16px',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
  },
  galleryItem: {
    position: 'relative',
    height: '240px',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
    border: '1px solid rgba(15, 23, 42, 0.08)',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, transparent 100%)',
    padding: '20px 16px 16px 16px',
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: '14px',
  },
};

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div style={homeStyles.container}>
      <style>{`
        @keyframes smoothFadeUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* HERO CAROUSEL WITH BLENDED BLUR & STANDARD ARROWS/DOTS */}
      <div style={homeStyles.heroContainer}>
        {/* Background Image Layers */}
        {heroSlides.map((item, idx) => (
          <div 
            key={`bg-${idx}`} 
            style={homeStyles.bgLayer(item.image, idx === currentSlide)} 
          />
        ))}

        {/* Blended Blur Text Panels */}
        {heroSlides.map((item, idx) => (
          <div 
            key={`panel-${idx}`} 
            style={homeStyles.blurPanelLayer(item.themeColor, idx === currentSlide)}
          >
            <div style={homeStyles.heroContentInner}>
              <span style={homeStyles.heroBadge}>{item.badge}</span>
              <h1 style={homeStyles.heroTitle}>{item.title}</h1>
              <p style={homeStyles.heroSubtitle}>{item.subtitle}</p>
              
              <div style={homeStyles.portalContainer}>
                <Link to={item.ctaLink} style={homeStyles.primaryBtn}>
                  {item.ctaText}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Centered Pagination Dots at the Bottom */}
        <div style={homeStyles.carouselDotsCenter}>
          {heroSlides.map((_, dotIdx) => (
            <div 
              key={dotIdx} 
              style={homeStyles.dot(dotIdx === currentSlide)} 
              onClick={() => setCurrentSlide(dotIdx)}
            />
          ))}
        </div>

        {/* Outer Left & Right Navigation Arrows */}
        <button onClick={prevSlide} style={homeStyles.arrowLeft}>
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} style={homeStyles.arrowRight}>
          <ChevronRight size={24} />
        </button>
      </div>

      {/* WHY CHOOSE US FLOATING GRID */}
      <section style={homeStyles.section}>
        <div style={homeStyles.sectionTitleCenter}>
          <span style={homeStyles.sectionTag}>Why Choose Safeguard</span>
          <h2 style={homeStyles.sectionHeading}>Built for Professionals & Organizations</h2>
        </div>
        <div style={homeStyles.grid3}>
          <div style={homeStyles.glassCard}>
            <div style={homeStyles.cardIconBox}><Award size={24} /></div>
            <h3 style={homeStyles.cardTitle}>Global Accreditations</h3>
            <p style={homeStyles.cardText}>
              Fully accredited learning partner delivering internationally recognized qualifications like NEBOSH, IOSH, and ISO standards.
            </p>
          </div>
          <div style={homeStyles.glassCard}>
            <div style={homeStyles.cardIconBox}><Users size={24} /></div>
            <h3 style={homeStyles.cardTitle}>Expert Instructors</h3>
            <p style={homeStyles.cardText}>
              Learn from industry-leading safety practitioners with decades of hands-on field experience in oil, gas, and construction.
            </p>
          </div>
          <div style={homeStyles.glassCard}>
            <div style={homeStyles.cardIconBox}><Globe size={24} /></div>
            <h3 style={homeStyles.cardTitle}>Regional Flexibility</h3>
            <p style={homeStyles.cardText}>
              Specialized learning pathways and tailored schedules designed specifically for International and Nigerian cohorts.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ ...homeStyles.section, backgroundColor: '#F1F5F9', borderRadius: '32px', margin: '40px auto' }}>
        <div style={homeStyles.sectionTitleCenter}>
          <span style={homeStyles.sectionTag}>Success Stories</span>
          <h2 style={homeStyles.sectionHeading}>What Our Trainees Say</h2>
        </div>
        <div style={homeStyles.grid3}>
          <div style={homeStyles.testimonialCard}>
            <div>
              <div style={homeStyles.stars}>
                {[...Array(5)].map((_, i) => (<Star key={i} size={16} fill="#F59E0B" />))}
              </div>
              <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.6', marginBottom: '20px' }}>
                &ldquo;The NEBOSH diploma training at Safeguard was transformative. The instructors break down complex safety management systems into practical applications.&rdquo;
              </p>
            </div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '15px', color: '#0F172A' }}>Oluwaseun Adeleke</div>
              <div style={{ fontSize: '12px', color: '#64748B' }}>HSE Officer, Energy Sector</div>
            </div>
          </div>

          <div style={homeStyles.testimonialCard}>
            <div>
              <div style={homeStyles.stars}>
                {[...Array(5)].map((_, i) => (<Star key={i} size={16} fill="#F59E0B" />))}
              </div>
              <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.6', marginBottom: '20px' }}>
                &ldquo;Top-notch facilities and exceptional support. Their ISO audit consulting helped our organization achieve certification seamlessly.&rdquo;
              </p>
            </div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '15px', color: '#0F172A' }}>Dr. Marcus Vance</div>
              <div style={{ fontSize: '12px', color: '#64748B' }}>Operations Director, Intl Logistics</div>
            </div>
          </div>

          <div style={homeStyles.testimonialCard}>
            <div>
              <div style={homeStyles.stars}>
                {[...Array(5)].map((_, i) => (<Star key={i} size={16} fill="#F59E0B" />))}
              </div>
              <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.6', marginBottom: '20px' }}>
                &ldquo;The practical fire safety and first-aid drills gave our team immense confidence on site. Safeguard is truly world-class.&rdquo;
              </p>
            </div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '15px', color: '#0F172A' }}>Chidera Okoro</div>
              <div style={{ fontSize: '12px', color: '#64748B' }}>Plant Safety Supervisor</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING GALLERY SECTION */}
      <section style={homeStyles.section}>
        <div style={homeStyles.sectionTitleCenter}>
          <span style={homeStyles.sectionTag}>Visual Showcase</span>
          <h2 style={homeStyles.sectionHeading}>Training & Facility Gallery</h2>
        </div>
        <div style={homeStyles.galleryGrid}>
          <div style={homeStyles.galleryItem}>
            <img 
              src={emergencyImg} 
              alt="Practical Fire Safety Drill" 
              style={homeStyles.galleryImage} 
            />
            <div style={homeStyles.imageOverlay}>Fire Safety & Live Extinguisher Drill</div>
          </div>

          <div style={homeStyles.galleryItem}>
            <img 
              src={ioshImg} 
              alt="Interactive Classroom Session" 
              style={homeStyles.galleryImage} 
            />
            <div style={homeStyles.imageOverlay}>Interactive Certification Class</div>
          </div>

          <div style={homeStyles.galleryItem}>
            <img 
              src={neboshImg} 
              alt="First Aid & CPR Workshop" 
              style={homeStyles.galleryImage} 
            />
            <div style={homeStyles.imageOverlay}>First Aid & CPR Practical Workshop</div>
          </div>

          <div style={homeStyles.galleryItem}>
            <img 
              src={technicalImg} 
              alt="QHSE Technical Equipment" 
              style={homeStyles.galleryImage} 
            />
            <div style={homeStyles.imageOverlay}>QHSE Technical & Safety Gear Lab</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;