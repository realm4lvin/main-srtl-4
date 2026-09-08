import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import Form from '../components/Form';

const styles = {
  pageWrapper: {
    fontFamily: "'Inter', Arial, sans-serif",
    color: '#1E293B',
    backgroundColor: '#F8FAFC',
    minHeight: '100vh',
    paddingBottom: '80px',
  },
  heroBanner: {
    position: 'relative',
    minHeight: '360px',
    backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '60px 5% 100px',
    width: '100%',
    boxSizing: 'border-box',
  },
  heroContent: {
    maxWidth: '800px',
    zIndex: 2,
  },
  heroTitle: {
    fontSize: '40px',
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: '14px',
    letterSpacing: '-0.5px',
  },
  heroSubtitle: {
    fontSize: '17px',
    color: '#E2E8F0',
    maxWidth: '650px',
    margin: '0 auto',
    lineHeight: '1.6',
  },

  fadeTransition: {
    height: '100px',
    background: 'linear-gradient(to bottom, rgba(248, 250, 252, 0) 0%, #F8FAFC 100%)',
    marginTop: '-100px',
    position: 'relative',
    zIndex: 3,
    pointerEvents: 'none',
  },

  container: {
    maxWidth: '1200px',
    margin: '-20px auto 0',
    padding: '0 5%',
    position: 'relative',
    zIndex: 4,
  },
  formsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '36px',
    marginTop: '0px',
    marginBottom: '40px',
    alignItems: 'start',
  },
  animatedSection: {
    opacity: 0,
    transform: 'translateY(40px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  },
  animatedVisible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  contactWrapper: {
    display: 'flex',
    justifyContent: 'center',
    margin: '60px 0',
    width: '100%',
  },
  floatingContactBox: {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%)',
    backdropFilter: 'blur(25px) saturate(200%)',
    WebkitBackdropFilter: 'blur(25px) saturate(200%)',
    borderRadius: '28px',
    padding: '36px',
    maxWidth: '480px',
    width: '100%',
    color: '#0F172A',
    border: '1px solid rgba(255, 255, 255, 0.8)',
    borderTop: '1px solid rgba(255, 255, 255, 0.95)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.95)',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
  },
  boxTitle: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#236c47',
    marginBottom: '18px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '20px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#0F172A',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '700',
    padding: '2px 0',
  },
  socialGridRow: {
    display: 'flex',
    gap: '14px',
    paddingTop: '16px',
    borderTop: '1px solid rgba(15, 23, 42, 0.15)',
    justifyContent: 'flex-start',
  },
  centerSectionTitle: {
    fontSize: '26px',
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: '28px',
    textAlign: 'center',
  },
  mapGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
    alignItems: 'stretch',
  },
  mapCard: {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.6) 100%)',
    backdropFilter: 'blur(16px) saturate(180%)',
    WebkitBackdropFilter: 'blur(16px) saturate(180%)',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06), inset 0 0 0 1px rgba(255, 255, 255, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  mapHeader: {
    padding: '24px',
    borderBottom: '1px solid rgba(226, 232, 240, 0.6)',
    display: 'flex',
    flexDirection: 'column',
    flex: 1, 
    justifyContent: 'space-between', 
  },
  centerTag: {
    color: '#236c47',
    fontSize: '12px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '8px',
  },
  addressText: {
    fontSize: '13px',
    color: '#64748B',
    lineHeight: '1.5',
    margin: '0 0 12px 0',
    flex: 1, 
  },
  mapFrame: {
    width: '100%',
    height: '240px',
    border: 0,
    marginTop: 'auto',
  },
};

const centers = [
  {
    tag: 'INTERNATIONAL CONTACT CENTER',
    address:
      '1st Floor Office Suite, 4 Highcliffe Court, Greenfold Lane, Wetherby, Leeds, LS22 6RG, United Kingdom',
    embedUrl:
      'https://maps.google.com/maps?q=4%20Highcliffe%20Court%20Greenfold%20Lane%20Wetherby%20Leeds%20LS22%206RG%20UK&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directMapUrl:
      'https://www.google.com/maps/place/4+Highcliffe+Terrace,+Greenfold+Ln,+Wetherby+LS22+6RG,+UK/@53.927074,-1.3842381,17z',
  },
  {
    tag: 'PORT HARCOURT CORPORATE CENTER',
    address:
      '6C Forces Avenue, Old G.R.A., Port Harcourt, Rivers State, Nigeria',
    embedUrl:
      'https://maps.google.com/maps?q=6C%20Forces%20Avenue%20Old%20GRA%20Port%20Harcourt%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directMapUrl:
      'https://www.google.com/maps/place/Safeguard+Safety+and+Management+Center/@4.7769727,7.0112432,17z',
  },
  {
    tag: 'LAGOS OPERATIONS CENTER',
    address:
      'Left Wing, 3rd Floor, No. 2 Tokunbo Alli Street, Off Toyin Street, Ikeja, Lagos, Nigeria',
    embedUrl:
      'https://maps.google.com/maps?q=2%20Tokunbo%20Alli%20Street%20Ikeja%20Lagos%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directMapUrl:
      'https://www.google.com/maps/search/?api=1&query=2+Tokunbo+Alli+Street+Off+Toyin+Street+Ikeja+Lagos+Nigeria',
  },
];

function SlideInWrapper({ children, delay = '0s', style = {} }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const node = elementRef.current;
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
    return () => observer.unobserve(node);
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        ...styles.animatedSection,
        transitionDelay: delay,
        ...(isVisible ? styles.animatedVisible : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function NgContact() {
  return (
    <div style={styles.pageWrapper}>
      <div style={styles.heroBanner}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Get in Touch with Safeguard</h1>
        </div>
      </div>

      <div style={styles.fadeTransition} />

      <div style={styles.container}>
        <SlideInWrapper>
          <div style={styles.formsGrid}>
            <Form title="INDIVIDUAL OR PERSONAL REQUEST" />
            <Form title="COMPANY OR CORPORATE REQUEST" />
          </div>
        </SlideInWrapper>

        <SlideInWrapper>
          <div style={styles.contactWrapper}>
            <div style={styles.floatingContactBox}>
              <h2 style={styles.boxTitle}>
                <Phone size={22} />
                <span>Contact Us</span>
              </h2>

              <div style={{ fontSize: '12px', fontWeight: '800', color: '#334155', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                WhatsApp:
              </div>

              <div style={styles.contactList}>
                <a href="https://wa.me/2349052345503" target="_blank" rel="noopener noreferrer" style={styles.contactItem}>
                  <Phone size={16} style={{ color: '#236c47' }} />
                  <span>+234 905 234 5503</span>
                </a>

                <a href="https://wa.me/2347015319956" target="_blank" rel="noopener noreferrer" style={styles.contactItem}>
                  <Phone size={16} style={{ color: '#236c47' }} />
                  <span>+234 701 531 9956</span>
                </a>

                <a href="https://wa.me/2348134363199" target="_blank" rel="noopener noreferrer" style={styles.contactItem}>
                  <Phone size={16} style={{ color: '#236c47' }} />
                  <span>+234 813 436 3199</span>
                </a>

                <a href="https://wa.me/2348170376331" target="_blank" rel="noopener noreferrer" style={styles.contactItem}>
                  <Phone size={16} style={{ color: '#236c47' }} />
                  <span>+234 817 037 6331</span>
                </a>
              </div>

              <div style={{ fontSize: '12px', fontWeight: '800', color: '#334155', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Or send query to:
              </div>

              <a href="mailto:admin@safeguardsafety.net" style={{ ...styles.contactItem, marginBottom: '20px' }}>
                <Mail size={16} style={{ color: '#236c47' }} />
                <span>admin@safeguardsafety.net</span>
              </a>

              <div style={styles.socialGridRow}>
                <a href="https://www.facebook.com/share/1GcFUzeXPK/" target="_blank" rel="noopener noreferrer" title="Facebook">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/safeguard_safety?utm_source=qr&igsh=dW9tZ2N3NTB1cjB4" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#E4405F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/safeguard-safety-and-management-center/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@safeguard.safety?_r=1&_t=ZN-98NSlCMZeSc" target="_blank" rel="noopener noreferrer" title="TikTok">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#000000"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.32 1.52-1.32 2.53-.01 1.11.53 2.18 1.44 2.77.94.62 2.19.7 3.19.22 1.01-.46 1.71-1.5 1.75-2.61.02-3.78.01-7.56.01-11.34 0-.01 0-.02 0-.03z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </SlideInWrapper>

        <SlideInWrapper>
          <h2 style={styles.centerSectionTitle}>Our Corporate Offices</h2>
          <div style={styles.mapGrid}>
            {centers.map((center, index) => (
              <SlideInWrapper key={index} delay={`${(index % 3) * 0.12}s`} style={{ display: 'flex' }}>
                <div style={styles.mapCard}>
                  <div style={styles.mapHeader}>
                    <div>
                      <div style={styles.centerTag}>{center.tag}</div>
                      <p style={styles.addressText}>{center.address}</p>
                    </div>
                    <div>
                      <a
                        href={center.directMapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '12px',
                          color: '#236c47',
                          fontWeight: '700',
                          textDecoration: 'none',
                        }}
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                  <iframe
                    title={center.tag}
                    src={center.embedUrl}
                    style={styles.mapFrame}
                    loading="lazy"
                  />
                </div>
              </SlideInWrapper>
            ))}
          </div>
        </SlideInWrapper>
      </div>
    </div>
  );
}