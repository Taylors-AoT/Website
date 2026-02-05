import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Activities', path: '/activities' },
    { name: 'Upcoming', path: '/upcoming' },
    { name: 'Contact', path: '/contact' },
  ];

  const baseLinkStyle = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300";
  const activeStyle = "text-cyan-400 bg-gray-800/50 border border-gray-700/50";
  const inactiveStyle = "text-gray-300 hover:text-white hover:bg-gray-800/30";

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={() => setIsOpen(false)}>
            <Logo className="w-16 h-12 text-cyan-500" />
            <div className="flex flex-col items-start justify-center">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] text-cyan-100/70 uppercase leading-tight">
                Taylor's University
              </span>
              <span className="text-xl md:text-2xl font-bold whitespace-nowrap text-white tracking-wide leading-none">
                Agents of Tech
              </span>
            </div>
          </NavLink>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-900/80 md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
              {links.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `${baseLinkStyle} ${isActive ? activeStyle : inactiveStyle} block`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;