import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Core Pages
import Home from './pages/Home';
import About from './pages/About';
import CoursesLanding from './pages/CoursesLanding';
import ServicesLanding from './pages/ServicesLanding';

// Course Sub-Pages
import NeboshAwards from './pages/NeboshAwards';
import NeboshCertificates from './pages/NeboshCertificates';
import NeboshDiplomas from './pages/NeboshDiplomas';
import IoshCourses from './pages/IoshCourses';
import FireCourses from './pages/FireCourses';
import FirstAidCourses from './pages/FirstAidCourses';
import QhseTechnical from './pages/QhseTechnical';
import QhseCompetency from './pages/QhseCompetency';

// Service Sub-Pages
import IsoAudit from './pages/IsoAudit';
import HealthSafety from './pages/HealthSafety';
import Environmental from './pages/Environmental';
import EquipmentSupply from './pages/EquipmentSupply';

// Regional Portal Sub-Pages
import IntlRegister from './pages/IntlRegister';
import NgRegister from './pages/NgRegister';
import IntlContact from './pages/IntlContact';
import NgContact from './pages/NgContact';

// Helper component to reset scroll position on page change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        
        <main style={{ flex: '1 0 auto' }}>
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<CoursesLanding />} />
            <Route path="/services" element={<ServicesLanding />} />

            {/* Course Sub-pages */}
            <Route path="/courses/nebosh-awards" element={<NeboshAwards />} />
            <Route path="/courses/nebosh-certificates" element={<NeboshCertificates />} />
            <Route path="/courses/nebosh-diplomas" element={<NeboshDiplomas />} />
            <Route path="/courses/iosh" element={<IoshCourses />} />
            <Route path="/courses/fire" element={<FireCourses />} />
            <Route path="/courses/first-aid" element={<FirstAidCourses />} />
            <Route path="/courses/qhse-technical" element={<QhseTechnical />} />
            <Route path="/courses/qhse-competency" element={<QhseCompetency />} />

            {/* Service Sub-pages */}
            <Route path="/services/iso-audit" element={<IsoAudit />} />
            <Route path="/services/health-safety" element={<HealthSafety />} />
            <Route path="/services/environmental" element={<Environmental />} />
            <Route path="/services/equipment-supply" element={<EquipmentSupply />} />

            {/* Regional Sub-pages */}
            <Route path="/intl/register" element={<IntlRegister />} />
            <Route path="/ng/register" element={<NgRegister />} />
            <Route path="/intl/contact" element={<IntlContact />} />
            <Route path="/ng/contact" element={<NgContact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;