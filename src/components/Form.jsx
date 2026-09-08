import { useState, useMemo } from 'react';
import PhoneInputPkg from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import countryList from 'country-list';
import Select from 'react-select';
import { CheckCircle, Send, Loader2 } from 'lucide-react';
import { courseOptions } from '../data/courses';

const PhoneInput = PhoneInputPkg.default || PhoneInputPkg;

const courseSelectOptions = courseOptions.map((course) => ({
  value: course,
  label: course,
}));

const formStyles = {
  cardContainer: {
    /* Liquid Glass Effect */
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.45) 100%)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.8)',
    boxShadow: '0 20px 40px rgba(15, 23, 42, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
    /* Cylindrical Curved Borders */
    borderRadius: '28px',
    padding: '40px 32px',
    width: '100%',
    boxSizing: 'border-box',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '900',
    color: '#236c47',
    textAlign: 'center',
    marginBottom: '28px',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '12px 18px',
    borderRadius: '14px',
    border: '1px solid rgba(203, 213, 225, 0.8)',
    fontSize: '14px',
    color: '#334155',
    boxSizing: 'border-box',
    outline: 'none',
    /* Subtle Liquid Glass Input Background */
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    transition: 'all 0.2s ease',
  },
  textarea: {
    width: '100%',
    padding: '12px 18px',
    borderRadius: '16px',
    border: '1px solid rgba(203, 213, 225, 0.8)',
    fontSize: '14px',
    color: '#334155',
    boxSizing: 'border-box',
    outline: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    minHeight: '100px',
    resize: 'vertical',
    fontFamily: 'inherit',
    transition: 'all 0.2s ease',
  },
  submitBtn: {
    backgroundColor: '#236c47',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '50px', /* Full Pill / Cylindrical Button */
    padding: '16px',
    fontSize: '15px',
    fontWeight: '800',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    width: '100%',
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    boxShadow: '0 8px 20px rgba(35, 108, 71, 0.25)',
    transition: 'all 0.2s ease',
  },
};

const customSelectStyles = {
  control: (base, state) => ({
    ...base,
    borderRadius: '14px',
    borderColor: state.isFocused ? '#236c47' : 'rgba(203, 213, 225, 0.8)',
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    boxShadow: state.isFocused ? '0 0 0 2px rgba(35, 108, 71, 0.2)' : 'none',
    '&:hover': {
      borderColor: '#236c47',
    },
    padding: '2px 4px',
    fontSize: '14px',
  }),
  menu: (base) => ({
    ...base,
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? '#236c47'
      : state.isFocused
      ? 'rgba(220, 252, 231, 0.8)'
      : 'transparent',
    color: state.isSelected ? '#FFFFFF' : '#1E293B',
    fontSize: '14px',
    cursor: 'pointer',
  }),
};

export default function Form({ title = 'Individual or Personal Request' }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  const [phone, setPhone] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    message: '',
    course: null,
    country: null,
  });

  const countryOptions = useMemo(() => {
    return countryList
      .getNames()
      .map((c) => c.replace(/\s*\(the\)/i, ''))
      .sort((a, b) => a.localeCompare(b))
      .map((c) => ({ value: c, label: c }));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      access_key: 'aecfb6df-eba2-4c17-8ae9-13138d5999eb',
      subject: `New Request (${title}) from ${formData.name}`,
      request_type: title,
      from_name: 'Safeguard Safety Contact Form',
      name: formData.name,
      email: formData.email,
      whatsapp: phone,
      organisation: formData.organisation,
      course_or_service: formData.course ? formData.course.value : '',
      country: formData.country ? formData.country.value : '',
      message: formData.message,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert('Form submission failed. Please try again.');
      }
    } catch {
      alert('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={formStyles.cardContainer}>
      <h2 style={formStyles.cardTitle}>{title}</h2>

      {submitted ? (
        <div style={{ textAlign: 'center', padding: '30px 10px' }}>
          <CheckCircle size={56} style={{ color: '#236c47', marginBottom: '16px' }} />
          <h3 style={{ fontSize: '22px', color: '#0F172A', marginBottom: '8px' }}>
            Request Submitted!
          </h3>
          <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.6' }}>
            Thank you for reaching out. An advisor will get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Name of Contact Person:</label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={handleChange}
              style={formStyles.input}
            />
          </div>

          {/* Email */}
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Official email:</label>
            <input
              type="email"
              name="email"
              required
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              style={formStyles.input}
            />
          </div>

          {/* WhatsApp Phone Input */}
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>WhatsApp Number:</label>
            <PhoneInput
              country={'ng'}
              enableSearch={true}
              value={phone}
              onChange={(val) => setPhone(val)}
              inputStyle={{
                width: '100%',
                height: '45px',
                fontSize: '14px',
                borderRadius: '14px',
                borderColor: 'rgba(203, 213, 225, 0.8)',
                backgroundColor: 'rgba(255, 255, 255, 0.65)',
                backdropFilter: 'blur(8px)',
              }}
              buttonStyle={{
                borderRadius: '14px 0 0 14px',
                borderColor: 'rgba(203, 213, 225, 0.8)',
                backgroundColor: 'rgba(248, 250, 252, 0.75)',
              }}
              dropdownStyle={{
                width: '300px',
                borderRadius: '16px',
              }}
            />
          </div>

          {/* Organisation */}
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Name of Organisation:</label>
            <input
              type="text"
              name="organisation"
              placeholder="Organisation / Self-employed"
              value={formData.organisation}
              onChange={handleChange}
              style={formStyles.input}
            />
          </div>

          {/* Course Choice with Search */}
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Course or Service of Choice:</label>
            <Select
              options={courseSelectOptions}
              value={formData.course}
              onChange={(selected) => setFormData({ ...formData, course: selected })}
              placeholder="Select your Course or Service of Choice"
              styles={customSelectStyles}
              isSearchable
            />
          </div>

          {/* Country Location with Search */}
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Country of Location:</label>
            <Select
              options={countryOptions}
              value={formData.country}
              onChange={(selected) => setFormData({ ...formData, country: selected })}
              placeholder="Select your Country of Location"
              styles={customSelectStyles}
              isSearchable
            />
          </div>

          {/* Message Box */}
          <div style={formStyles.formGroup}>
            <label style={formStyles.label}>Message / Inquiry:</label>
            <textarea
              name="message"
              placeholder="Type your question or additional details here..."
              value={formData.message}
              onChange={handleChange}
              style={formStyles.textarea}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              ...formStyles.submitBtn,
              backgroundColor: btnHover ? '#1b5437' : '#236c47',
              transform: btnHover ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: btnHover ? '0 12px 24px rgba(35, 108, 71, 0.35)' : formStyles.submitBtn.boxShadow,
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit Request</span>
                <Send size={18} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}