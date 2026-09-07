import { useState } from 'react';
import { Mail, Phone, ExternalLink, Send, Clock, CheckCircle } from 'lucide-react';

const styles = {
  pageWrapper: {
    fontFamily: 'Arial, sans-serif',
    color: '#1E293B',
    backgroundColor: '#F8FAFC',
    minHeight: '100vh',
    paddingBottom: '80px',
  },
  heroBanner: {
    backgroundColor: '#0F172A',
    color: '#FFFFFF',
    padding: '60px 5% 50px',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: '12px',
    letterSpacing: '-0.5px',
  },
  heroSubtitle: {
    fontSize: '16px',
    color: '#94A3B8',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  container: {
    maxWidth: '1200px',
    margin: '-30px auto 0',
    padding: '0 5%',
  },
  gridTwoCol: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
    marginBottom: '60px',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '32px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    border: '1px solid #E2E8F0',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '13px',
    fontWeight: '700',
    color: '#475569',
    marginBottom: '6px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  input: {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '8px',
    border: '1px solid #CBD5E1',
    fontSize: '14px',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  textarea: {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '8px',
    border: '1px solid #CBD5E1',
    fontSize: '14px',
    boxSizing: 'border-box',
    minHeight: '120px',
    resize: 'vertical',
    outline: 'none',
  },
  submitBtn: {
    backgroundColor: '#059669',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    padding: '14px 24px',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'background-color 0.2s',
  },
  centerSectionTitle: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: '24px',
    textAlign: 'center',
  },
  mapGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '24px',
  },
  mapCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    border: '1px solid #E2E8F0',
    display: 'flex',
    flexDirection: 'column',
  },
  mapHeader: {
    padding: '20px',
    borderBottom: '1px solid #F1F5F9',
  },
  centerTag: {
    color: '#F59E0B',
    fontSize: '12px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '4px',
  },
  centerName: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#0F172A',
    margin: '0 0 8px',
  },
  addressText: {
    fontSize: '13px',
    color: '#64748B',
    lineHeight: '1.5',
    margin: 0,
  },
  mapFrame: {
    width: '100%',
    height: '220px',
    border: 0,
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  directContactRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#0F172A',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    padding: '12px',
    borderRadius: '8px',
    backgroundColor: '#F8FAFC',
    border: '1px solid #F1F5F9',
  },
  iconBox: {
    backgroundColor: '#FEE2E2',
    color: '#EF4444',
    padding: '8px',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const centers = [
  {
    tag: 'INTERNATIONAL CONTACT CENTER',
    title: 'United Kingdom Office',
    address: '1st Floor Office Suite, 4 Highcliffe Court, Greenfold Lane, Wetherby, Leeds, LS22 6RG, United Kingdom',
    embedUrl: 'https://maps.google.com/maps?q=4%20Highcliffe%20Court%20Greenfold%20Lane%20Wetherby%20Leeds%20LS22%206RG%20UK&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directMapUrl: 'https://www.google.com/maps/place/4+Highcliffe+Terrace,+Greenfold+Ln,+Wetherby+LS22+6RG,+UK/@53.927074,-1.3842381,17z',
  },
  {
    tag: 'PORT HARCOURT CORPORATE CENTER',
    title: 'Port Harcourt Office',
    address: '6C Forces Avenue, Old G.R.A., Port Harcourt, Rivers State, Nigeria',
    embedUrl: 'https://maps.google.com/maps?q=6C%20Forces%20Avenue%20Old%20GRA%20Port%20Harcourt%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directMapUrl: 'https://www.google.com/maps/place/Safeguard+Safety+and+Management+Center/@4.7769727,7.0112432,17z',
  },
  {
    tag: 'LAGOS OPERATIONS CENTER',
    title: 'Lagos Office',
    address: 'Left Wing, 3rd Floor, No. 2 Tokunbo Alli Street, Off Toyin Street, Ikeja, Lagos, Nigeria',
    embedUrl: 'https://maps.google.com/maps?q=2%20Tokunbo%20Alli%20Street%20Ikeja%20Lagos%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directMapUrl: 'https://www.google.com/maps/search/?api=1&query=2+Tokunbo+Alli+Street+Off+Toyin+Street+Ikeja+Lagos+Nigeria',
  },
];

export default function NgContact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Course Inquiry',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={styles.pageWrapper}>
      {/* Hero Header */}
      <div style={styles.heroBanner}>
        <h1 style={styles.heroTitle}>Contact Safeguard Safety</h1>
        <p style={styles.heroSubtitle}>
          Have questions about our HSE certifications or corporate training services? Get in touch with our team across our global offices.
        </p>
      </div>

      <div style={styles.container}>
        {/* Top Grid: Form + Quick Direct Contact */}
        <div style={styles.gridTwoCol}>
          {/* Send Message Form */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <Mail size={22} style={{ color: '#059669' }} />
              <span>Send Us a Message</span>
            </h2>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle size={48} style={{ color: '#059669', marginBottom: '16px' }} />
                <h3 style={{ fontSize: '20px', color: '#0F172A', margin: '0 0 8px' }}>Message Received!</h3>
                <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.5' }}>
                  Thank you for reaching out. One of our training coordinators will respond to your email within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+234..."
                      value={formData.phone}
                      onChange={handleChange}
                      style={styles.input}
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Inquiry Type</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={styles.input}
                  >
                    <option value="Course Inquiry">NEBOSH / IOSH Course Inquiry</option>
                    <option value="Corporate Training">Corporate Training / Consultation</option>
                    <option value="Certificate Verification">Certificate Verification</option>
                    <option value="General Question">General Inquiry</option>
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Message *</label>
                  <textarea
                    name="message"
                    required
                    placeholder="How can we assist you today?"
                    value={formData.message}
                    onChange={handleChange}
                    style={styles.textarea}
                  />
                </div>

                <button type="submit" style={styles.submitBtn}>
                  <Send size={18} />
                  <span>Submit Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Direct Support & Operating Hours */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>
              <Phone size={22} style={{ color: '#059669' }} />
              <span>Direct Support</span>
            </h2>

            <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
              Connect directly with our admissions and advisory lines via phone or WhatsApp:
            </p>

            <div style={styles.contactList}>
              <a href="mailto:info@safeguardsafety.net" style={styles.directContactRow}>
                <div style={styles.iconBox}><Mail size={18} /></div>
                <div>
                  <div style={{ fontSize: '11px', color: '#64748B', textTransform: 'uppercase' }}>Email Support</div>
                  <div>info@safeguardsafety.net</div>
                </div>
              </a>

              <a href="https://wa.me/447878121965" target="_blank" rel="noopener noreferrer" style={styles.directContactRow}>
                <div style={styles.iconBox}><Phone size={18} /></div>
                <div>
                  <div style={{ fontSize: '11px', color: '#64748B', textTransform: 'uppercase' }}>UK Support Line</div>
                  <div>+44 787 812 1965</div>
                </div>
              </a>

              <a href="https://wa.me/2347030162747" target="_blank" rel="noopener noreferrer" style={styles.directContactRow}>
                <div style={styles.iconBox}><Phone size={18} /></div>
                <div>
                  <div style={{ fontSize: '11px', color: '#64748B', textTransform: 'uppercase' }}>Nigeria Support Line 1</div>
                  <div>+234 703 016 2747</div>
                </div>
              </a>

              <a href="https://wa.me/2348033097942" target="_blank" rel="noopener noreferrer" style={styles.directContactRow}>
                <div style={styles.iconBox}><Phone size={18} /></div>
                <div>
                  <div style={{ fontSize: '11px', color: '#64748B', textTransform: 'uppercase' }}>Nigeria Support Line 2</div>
                  <div>+234 803 309 7942</div>
                </div>
              </a>
            </div>

            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #E2E8F0', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <Clock size={20} style={{ color: '#059669', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ fontSize: '14px', color: '#0F172A', display: 'block' }}>Working Hours</strong>
                <span style={{ fontSize: '13px', color: '#64748B' }}>Monday – Friday: 8:00 AM – 5:00 PM (WAT / GMT)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Centers Section with Map Embeds */}
        <h2 style={styles.centerSectionTitle}>Our Corporate Offices</h2>
        <div style={styles.mapGrid}>
          {centers.map((center, index) => (
            <div key={index} style={styles.mapCard}>
              <div style={styles.mapHeader}>
                <div style={styles.centerTag}>{center.tag}</div>
                <h3 style={center.centerName}>{center.title}</h3>
                <p style={styles.addressText}>{center.address}</p>
                <a
                  href={center.directMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '12px',
                    color: '#059669',
                    fontWeight: '700',
                    marginTop: '10px',
                    textDecoration: 'none',
                  }}
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
              <iframe
                title={center.title}
                src={center.embedUrl}
                style={styles.mapFrame}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}