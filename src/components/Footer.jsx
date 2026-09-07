import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const styles = {
  footerWrapper: {
    backgroundColor: '#0F172A',
    color: '#94A3B8',
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    boxSizing: 'border-box',
    padding: '60px 5% 30px',
    borderTop: 'none',
  },
  topContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '40px',
    paddingBottom: '50px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  colTitle: {
    color: '#F59E0B',
    fontSize: '15px',
    fontWeight: '800',
    marginBottom: '20px',
    letterSpacing: '0.8px',
    textTransform: 'uppercase',
  },
  subLabel: {
    color: '#E2E8F0',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '0.5px',
    marginBottom: '8px',
    textTransform: 'uppercase',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    color: '#F8FAFC',
    fontWeight: '500',
    marginBottom: '8px',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  },
  icon: {
    color: '#EF4444',
    flexShrink: 0,
  },
  addressBlock: {
    marginBottom: '24px',
  },
  addressTitle: {
    color: '#F59E0B',
    fontSize: '13px',
    fontWeight: '800',
    textTransform: 'uppercase',
    marginBottom: '8px',
    letterSpacing: '0.5px',
  },
  addressCompany: {
    color: '#FFFFFF',
    fontSize: '13px',
    fontWeight: '700',
    marginBottom: '4px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '6px',
  },
  addressLink: {
    fontSize: '13px',
    color: '#94A3B8',
    lineHeight: '1.5',
    paddingLeft: '20px',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'color 0.2s ease',
  },
  bottomContainer: {
    maxWidth: '1200px',
    margin: '30px auto 0',
    textAlign: 'center',
    fontSize: '13px',
    color: '#64748B',
  },
};

function FooterNavLink({ to, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li>
      <Link
        to={to}
        style={{
          color: hovered ? '#059669' : '#FFFFFF',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '600',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {label}
      </Link>
    </li>
  );
}

function ContactLink({ href, children, isExternal = true }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      style={{
        ...styles.contactItem,
        color: hovered ? '#059669' : '#F8FAFC',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}

function AddressMapLink({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...styles.addressLink,
        color: hovered ? '#059669' : '#94A3B8',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span>{children}</span>
      <ExternalLink size={14} style={{ flexShrink: 0 }} />
    </a>
  );
}

export default function Footer() {
  return (
    <footer style={styles.footerWrapper}>
      <div style={styles.topContainer}>
        {/* Column 1: Contact Information */}
        <div>
          <h4 style={styles.colTitle}>CONTACT INFORMATION</h4>
          
          <div style={{ marginBottom: '20px' }}>
            <p style={styles.subLabel}>OFFICIAL EMAIL</p>
            <ContactLink href="mailto:info@safeguardsafety.net" isExternal={false}>
              <Mail size={16} style={styles.icon} />
              <span>info@safeguardsafety.net</span>
            </ContactLink>
          </div>

          <div>
            <p style={styles.subLabel}>WHATSAPP / PHONE</p>
            <ContactLink href="https://wa.me/447878121965">
              <Phone size={16} style={styles.icon} />
              <span>+44 787 812 1965</span>
            </ContactLink>
            <ContactLink href="https://wa.me/2347030162747">
              <Phone size={16} style={styles.icon} />
              <span>+234 703 016 2747</span>
            </ContactLink>
            <ContactLink href="https://wa.me/447311254738">
              <Phone size={16} style={styles.icon} />
              <span>+44 731 125 4738</span>
            </ContactLink>
            <ContactLink href="https://wa.me/2348033097942">
              <Phone size={16} style={styles.icon} />
              <span>+234 803 309 7942</span>
            </ContactLink>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 style={styles.colTitle}>QUICK LINKS</h4>
          <ul style={styles.linkList}>
            <FooterNavLink to="/" label="Home" />
            <FooterNavLink to="/about" label="About Us" />
            <FooterNavLink to="/courses" label="Our Courses" />
            <FooterNavLink to="/services" label="QHSE Services" />
            <FooterNavLink to="/calendar" label="Calendar" />
            <FooterNavLink to="/register" label="Register Now" />
            <FooterNavLink to="/contact" label="Contact Us" />
          </ul>
        </div>

        {/* Column 3: Regional Centers */}
        <div>
          {/* UK */}
          <div style={styles.addressBlock}>
            <p style={styles.addressTitle}>INTERNATIONAL CONTACT CENTER</p>
            <div style={styles.addressCompany}>
              <MapPin size={15} style={styles.icon} />
              <span>Safeguard Safety and Management Center Limited</span>
            </div>
            <AddressMapLink href="https://www.google.com/maps/place/4+Highcliffe+Terrace,+Greenfold+Ln,+Wetherby+LS22+6RG,+UK/@53.927074,-1.3842381,17z/data=!3m1!4b1!4m6!3m5!1s0x48794f1300f494d9:0xdcab1fe0c68c9519!8m2!3d53.927074!4d-1.3842381!16s%2Fg%2F11vb60_zdg">
              1st Floor Office Suite,<br />
              4 Highcliffe Court, Greenfold Lane,<br />
              Wetherby, Leeds, LS22 6RG, United Kingdom
            </AddressMapLink>
          </div>

          {/* Port Harcourt */}
          <div style={styles.addressBlock}>
            <p style={styles.addressTitle}>PORT HARCOURT CORPORATE CENTER</p>
            <div style={styles.addressCompany}>
              <MapPin size={15} style={styles.icon} />
              <span>Safeguard Safety and Management Center Limited</span>
            </div>
            <AddressMapLink href="https://www.google.com/maps/place/Safeguard+Safety+and+Management+Center/@4.7769727,7.0112432,17z/data=!4m15!1m8!3m7!1s0x1069cc00dbf268f5:0xc2caff7c5c5d395d!2s6+Forces+Ave,+Old+GRA,+Port+Harcourt+500101,+Rivers!3b1!8m2!3d4.7769999!4d7.0112477!16s%2Fg%2F11mq2xd_6_!3m5!1s0x1069cc00d8e776df:0x709bbf101a469714!8m2!3d4.77705!4d7.011387!16s%2Fg%2F11b7fzcmyk">
              6C Forces Avenue, Old G.R.A.,<br />
              Port Harcourt, Nigeria
            </AddressMapLink>
          </div>

          {/* Lagos */}
          <div style={styles.addressBlock}>
            <p style={styles.addressTitle}>LAGOS OPERATIONS CENTER</p>
            <div style={styles.addressCompany}>
              <MapPin size={15} style={styles.icon} />
              <span>Safeguard Safety and Management Center Limited</span>
            </div>
            <AddressMapLink href="https://www.google.com/maps/search/?api=1&query=2+Tokunbo+Alli+Street+Off+Toyin+Street+Ikeja+Lagos+Nigeria">
              Left Wing, 3rd Floor, No. 2 Tokunbo Alli Street,<br />
              Off Toyin Street, Ikeja, Lagos, Nigeria
            </AddressMapLink>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomContainer}>
        © {new Date().getFullYear()} Safeguard Safety and Management Center Limited. All Rights Reserved.
      </div>
    </footer>
  );
}