import PortalSelector from '../components/PortalSelector';

function ContactLanding() {
  return (
    <PortalSelector
      title="Contact Support Portal"
      subtitle="Select your location to connect directly with our regional course advisors and customer care teams."
      intlPath="/intl/contact"
      ngPath="/ng/contact"
    />
  );
}

export default ContactLanding;