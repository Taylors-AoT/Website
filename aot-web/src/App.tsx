import { BrowserRouter, Routes, Route } from "react-router-dom";

/* COMPONENTS */
import Layout from "./Layout";

/* PAGES */
import HomePage from "./pages/Home/page";
import AboutUsPage from "./pages/AboutUs/page";
import ActivitiesPage from "./pages/Activities/page";
import AwardsPage from "./pages/Awards/page";
import CollaborationsPage from "./pages/Collaborations/page";
import ContactPage from "./pages/Contact/page";
import SignaturePage from "./pages/Signature/page";
import TeamPage from "./pages/Team/page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* GLOBAL LAYOUT WRAPPING ALL PAGES */}
        <Route path="/" element={<Layout />}>
          
          {/* CHILD ROUTES */}
          <Route index element={<HomePage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="activities" element={<ActivitiesPage />} />
          <Route path="awards" element={<AwardsPage />} />
          <Route path="collaborations" element={<CollaborationsPage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* New pages */}
          <Route path="signature" element={<SignaturePage />} />
          <Route path="team" element={<TeamPage />} />

          {/* 404 Page */}
          <Route path="*" element={<div style={{ padding: 40 }}>Page Not Found</div>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
