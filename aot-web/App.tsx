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
import ActivityCategoryPage from './src/pages/Activities/ActivityCategoryPage';
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
            <Route path="/activities/:category" element={<ActivityCategoryPage />} />

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