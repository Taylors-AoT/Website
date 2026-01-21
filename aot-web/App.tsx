import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './src/components/Navbar';
import Background from './src/components/Background';
import Footer from './src/components/Footer';
import Home from './src/pages/Home/Home';
import About from './src/pages/About/About';
import Awards from './src/pages/Awards/Awards';
import Collaborations from './src/pages/Collaborations/Collaborations';
import CurrentTeam from './src/pages/Team/CurrentTeam';
import PastTeam from './src/pages/Team/PastTeam';
import Activities from './src/pages/Activities/Activities';
import Signature from './src/pages/Activities/Signature/Signature';
import Workshops from './src/pages/Activities/Workshops/Workshops';
import Forums from './src/pages/Activities/Forums/Forums';
import Competitions from './src/pages/Activities/Competitions/Competitions';
import CollaborationEvents from './src/pages/Activities/CollaborationEvents/CollaborationEvents';
import Others from './src/pages/Activities/Others/Others';
import Events from './src/pages/Events/Events';
import Contact from './src/pages/Contact/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen text-white relative font-sans selection:bg-cyan-500/30 flex flex-col">
        <Background />
        <Navbar />
        <ScrollToTop />
        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/collaborations" element={<Collaborations />} />
            
            {/* Team Routes (Accessed via About Page) */}
            <Route path="/team/current" element={<CurrentTeam />} />
            <Route path="/team/past" element={<PastTeam />} />
            
            {/* Activities Routes */}
            <Route path="/activities" element={<Activities />} />
            <Route path="/activities/signature" element={<Signature />} />
            <Route path="/activities/workshops" element={<Workshops />} />
            <Route path="/activities/forums" element={<Forums />} />
            <Route path="/activities/competitions" element={<Competitions />} />
            <Route path="/activities/collaborations" element={<CollaborationEvents />} />
            <Route path="/activities/others" element={<Others />} />

            <Route path="/upcoming" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;