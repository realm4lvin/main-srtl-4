import PortalSelector from '../components/PortalSelector';

function CalendarLanding() {
  return (
    <PortalSelector
      title="Training Calendar Portal"
      subtitle="Select your region below to view or download the upcoming course calendar."
      intlPath="/docs/intl-calendar.pdf"
      ngPath="/docs/ng-calendar.pdf"
      isExternal={true}
    />
  );
}

export default CalendarLanding;