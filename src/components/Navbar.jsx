import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

import logo from '../assets/safeguard-logo.webp'; 

const styles = {
  headerWrapper: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 40px',
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#ffffff',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    zIndex: 2,
  },
  logoImage: {
    height: '52px',
    width: 'auto',
    objectFit: 'contain',
    display: 'block',
  },
  floatingNav: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(20px) saturate(190%)',
    WebkitBackdropFilter: 'blur(20px) saturate(190%)',
    borderTop: '1px solid rgba(255, 255, 255, 0.6)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.4)',
    borderRight: '1px solid rgba(255, 255, 255, 0.2)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '100px',
    padding: '6px 12px',
    boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.5), 0 8px 32px rgba(0, 0, 0, 0.12)',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
  },
  linkItem: {
    position: 'relative',
    zIndex: 2,
  },
  link: {
    color: '#0F172A',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '13px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '8px 14px',
    borderRadius: '50px',
    transition: 'color 0.2s ease',
  },
  hoverPill: {
    position: 'absolute',
    backgroundColor: 'rgba(15, 23, 42, 0.08)',
    borderRadius: '50px',
    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    pointerEvents: 'none',
    zIndex: 1,
    border: '1px solid rgba(15, 23, 42, 0.1)',
  },
  dropdownContainer: {
    position: 'relative',
  },
  dropdownWrapper: {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    paddingTop: '8px',
    zIndex: 1010,
  },
  dropdownMenu: {
    backgroundColor: '#ffffff',
    border: '1px solid rgba(15, 23, 42, 0.1)',
    minWidth: '260px',
    borderRadius: '12px',
    boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  dropdownItem: {
    color: '#0F172A',
    textDecoration: 'none',
    padding: '12px 18px',
    fontSize: '12px',
    fontWeight: '600',
    borderBottom: '1px solid rgba(15, 23, 42, 0.05)',
    transition: 'all 0.2s ease',
    display: 'block',
    whiteSpace: 'nowrap',
  },
};

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [pillStyle, setPillStyle] = useState({ opacity: 0, width: 0, height: 0, left: 0, top: 0 });

  const handleLinkHover = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = e.currentTarget.parentElement.parentElement.getBoundingClientRect();
    
    setPillStyle({
      opacity: 1,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      left: `${rect.left - parentRect.left}px`,
      top: `${rect.top - parentRect.top}px`,
    });
  };

  const handleMouseLeaveNav = () => {
    setActiveDropdown(null);
    setPillStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div style={styles.headerWrapper}>
      <style>
        {`
          .dropdown-item-link:hover {
            background-color: #059669 !important;
            color: #ffffff !important;
            padding-left: 22px !important;
          }
        `}
      </style>

      {/* Standalone Logo */}
      <Link to="/" style={styles.logoContainer}>
        <img src={logo} alt="Safeguard Safety and Management Center Limited" style={styles.logoImage} />
      </Link>

      {/* Glass Pill Navigation */}
      <header style={styles.floatingNav}>
        <nav onMouseLeave={handleMouseLeaveNav}>
          <ul style={styles.navLinks}>
            <div
              style={{
                ...styles.hoverPill,
                opacity: pillStyle.opacity,
                width: pillStyle.width,
                height: pillStyle.height,
                transform: `translate(${pillStyle.left}, ${pillStyle.top})`,
              }}
            />

            <li style={styles.linkItem}>
              <Link to="/" style={styles.link} onMouseEnter={handleLinkHover}>HOME</Link>
            </li>
            
            <li style={styles.linkItem}>
              <Link to="/about" style={styles.link} onMouseEnter={handleLinkHover}>ABOUT US</Link>
            </li>

            {/* OUR COURSES */}
            <li
              style={{ ...styles.linkItem, ...styles.dropdownContainer }}
              onMouseEnter={(e) => {
                handleLinkHover(e);
                setActiveDropdown('courses');
              }}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/courses" style={styles.link}>
                OUR COURSES <ChevronDown size={12} color="#0F172A" />
              </Link>
              {activeDropdown === 'courses' && (
                <div style={styles.dropdownWrapper}>
                  <div style={styles.dropdownMenu}>
                    <Link to="/courses/nebosh-awards" className="dropdown-item-link" style={styles.dropdownItem}>NEBOSH AWARDS</Link>
                    <Link to="/courses/nebosh-certificates" className="dropdown-item-link" style={styles.dropdownItem}>NEBOSH CERTIFICATES</Link>
                    <Link to="/courses/nebosh-diplomas" className="dropdown-item-link" style={styles.dropdownItem}>NEBOSH DIPLOMAS</Link>
                    <Link to="/courses/iosh" className="dropdown-item-link" style={styles.dropdownItem}>IOSH COURSES</Link>
                    <Link to="/courses/fire" className="dropdown-item-link" style={styles.dropdownItem}>FIRE COURSES</Link>
                    <Link to="/courses/first-aid" className="dropdown-item-link" style={styles.dropdownItem}>FIRST AID COURSES</Link>
                    <Link to="/courses/qhse-technical" className="dropdown-item-link" style={styles.dropdownItem}>QHSE TECHNICAL COURSES</Link>
                    <Link to="/courses/qhse-competency" className="dropdown-item-link" style={styles.dropdownItem}>QHSE COMPETENCY COURSES</Link>
                  </div>
                </div>
              )}
            </li>

            {/* QHSE SERVICES */}
            <li
              style={{ ...styles.linkItem, ...styles.dropdownContainer }}
              onMouseEnter={(e) => {
                handleLinkHover(e);
                setActiveDropdown('services');
              }}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/services" style={styles.link}>
                QHSE SERVICES <ChevronDown size={12} color="#0F172A" />
              </Link>
              {activeDropdown === 'services' && (
                <div style={styles.dropdownWrapper}>
                  <div style={styles.dropdownMenu}>
                    <Link to="/services/iso-audit" className="dropdown-item-link" style={styles.dropdownItem}>ISO AUDIT AND CERTIFICATION</Link>
                    <Link to="/services/health-safety" className="dropdown-item-link" style={styles.dropdownItem}>HEALTH AND SAFETY STUDIES</Link>
                    <Link to="/services/environmental" className="dropdown-item-link" style={styles.dropdownItem}>ENVIRONMENTAL STUDIES</Link>
                    <Link to="/services/equipment-supply" className="dropdown-item-link" style={styles.dropdownItem}>EQUIPMENT SUPPLY AND SERVICES</Link>
                  </div>
                </div>
              )}
            </li>

            {/* CALENDAR */}
            <li
              style={{ ...styles.linkItem, ...styles.dropdownContainer }}
              onMouseEnter={(e) => {
                handleLinkHover(e);
                setActiveDropdown('calendar');
              }}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div style={styles.link}>
                CALENDAR <ChevronDown size={12} color="#0F172A" />
              </div>
              {activeDropdown === 'calendar' && (
                <div style={styles.dropdownWrapper}>
                  <div style={styles.dropdownMenu}>
                    <a 
                      href="/docs/intl-calendar.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="dropdown-item-link" 
                      style={styles.dropdownItem}
                    >
                      INTERNATIONAL LEARNERS
                    </a>
                    <a 
                      href="/docs/ng-calendar.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="dropdown-item-link" 
                      style={styles.dropdownItem}
                    >
                      NIGERIAN LEARNERS
                    </a>
                  </div>
                </div>
              )}
            </li>

            {/* REGISTER NOW */}
            <li
              style={{ ...styles.linkItem, ...styles.dropdownContainer }}
              onMouseEnter={(e) => {
                handleLinkHover(e);
                setActiveDropdown('register');
              }}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div style={styles.link}>
                REGISTER NOW <ChevronDown size={12} color="#0F172A" />
              </div>
              {activeDropdown === 'register' && (
                <div style={styles.dropdownWrapper}>
                  <div style={styles.dropdownMenu}>
                    <Link to="/intl/register" className="dropdown-item-link" style={styles.dropdownItem}>INTERNATIONAL LEARNERS</Link>
                    <Link to="/ng/register" className="dropdown-item-link" style={styles.dropdownItem}>NIGERIAN LEARNERS</Link>
                  </div>
                </div>
              )}
            </li>

            {/* CONTACT US */}
            <li
              style={{ ...styles.linkItem, ...styles.dropdownContainer }}
              onMouseEnter={(e) => {
                handleLinkHover(e);
                setActiveDropdown('contact');
              }}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div style={styles.link}>
                CONTACT US <ChevronDown size={12} color="#0F172A" />
              </div>
              {activeDropdown === 'contact' && (
                <div style={styles.dropdownWrapper}>
                  <div style={styles.dropdownMenu}>
                    <Link to="/intl/contact" className="dropdown-item-link" style={styles.dropdownItem}>INTERNATIONAL LEARNERS</Link>
                    <Link to="/ng/contact" className="dropdown-item-link" style={styles.dropdownItem}>NIGERIAN LEARNERS</Link>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;