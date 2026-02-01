import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-gray-800 bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
          <Logo className="w-12 h-8 text-cyan-500" />
            <div className="flex flex-col">
              {/* <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Taylor's University</span> */}
              {/* <span className="text-lg font-bold tracking-wide text-white">Agents of Tech</span> */}
              </div>
            </Link> 
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the next generation of tech leaders through innovation, collaboration, and hands-on learning. Join the future today with Agents of Tech.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-600 transition-colors">
                <Github className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-600 transition-colors">
                <Twitter className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-600 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-600 transition-colors">
                <Instagram className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/activities" className="text-gray-400 hover:text-cyan-400 transition-colors">Activities</Link></li>
              <li><Link to="/team/current" className="text-gray-400 hover:text-cyan-400 transition-colors">Core Team</Link></li>
              <li><Link to="/upcoming" className="text-gray-400 hover:text-cyan-400 transition-colors">Upcoming Events</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><Link to="/awards" className="text-gray-400 hover:text-cyan-400 transition-colors">Awards</Link></li>
              <li><Link to="/collaborations" className="text-gray-400 hover:text-cyan-400 transition-colors">Collaborations</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Github Repo</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with our latest news and events.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-cyan-500 w-full text-sm"
              />
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-r-md font-medium text-sm transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
           <p className="text-gray-500 text-sm">© 2024 Agents of Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;