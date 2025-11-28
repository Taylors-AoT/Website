import React from "react";
import "./../css/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-left">
          <h3>AOT Club</h3>
          <p>Email: <a href="mailto:agentsoftech.tlc@gmail.com">agentsoftech.tlc@gmail.com</a></p>
        </div>

        <div className="footer-right">
          <h4>Follow us</h4>
          <ul className="social-list">
            <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://www.tiktok.com" target="_blank" rel="noreferrer">TikTok</a></li>
            <li><a href="https://rednote.example.com" target="_blank" rel="noreferrer">RedNote</a></li>
            <li><a href="https://github.example.com" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} AOT Club — All rights reserved.</small>
      </div>
    </footer>
  );
}
