import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Awards from './pages/Awards/Awards';
import Collaborations from './pages/Collaborations/Collaborations';
import CurrentTeam from './pages/Team/CurrentTeam';
import PastTeam from './pages/Team/PastTeam';
import Activities from './pages/Activities/Activities';
import Signature from './pages/Activities/Signature/Signature';
import Workshops from './pages/Activities/Workshops/Workshops';
import Forums from './pages/Activities/Forums/Forums';
import Competitions from './pages/Activities/Competitions/Competitions';
import CollaborationEvents from './pages/Activities/CollaborationEvents/CollaborationEvents';
import Others from './pages/Activities/Others/Others';
import Events from './pages/Events/Events';
import Contact from './pages/Contact/Contact';

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