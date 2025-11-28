// src/components/NavBar.tsx
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">AOT</Link></div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/signature">Signature</Link></li>
        <li><Link to="/awards">Awards</Link></li>
        <li><Link to="/collaborations">Collaborations</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
