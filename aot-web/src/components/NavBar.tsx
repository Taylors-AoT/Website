import React, { type JSX } from "react";
import { Link } from "react-router-dom";
import "./../css/NavBar.css";

export default function NavBar(): JSX.Element {
  return (
    <header className="nav-outer">
      <div className="nav-inner">
        <div className="nav-left">
          <Link to="/" className="brand">
            <div className="logo-container" aria-hidden>
              <img src='/logos/AOT_Logo.png' alt="AOT Logo" className="brand-logo" />
            </div>
            <span className="brand-text">AOT Club</span>
          </Link>
        </div>

        <nav className="nav-right" aria-label="Main navigation">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About</Link></li>
            <li><Link to="/activities">Activities</Link></li>
            <li><Link to="/signature">Signature</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
