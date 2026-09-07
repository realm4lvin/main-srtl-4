import PortalSelector from '../components/PortalSelector';

function RegisterLanding() {
  return (
    <PortalSelector
      title="Course Registration Portal"
      subtitle="Select your enrollment region to access localized course registration forms and payment options."
      intlPath="/intl/register"
      ngPath="/ng/register"
    />
  );
}

export default RegisterLanding;