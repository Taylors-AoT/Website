import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Circles */}
    <circle cx="12" cy="20" r="7" strokeWidth="5" />
    <circle cx="88" cy="20" r="7" strokeWidth="5" />
    <circle cx="50" cy="88" r="7" strokeWidth="5" />
    
    {/* Traces */}
    {/* Left path: horizontal then angled down then vertical */}
    <path d="M20 20 H 35 L 42 35 V 80" />
    
    {/* Right path: horizontal then angled down then vertical */}
    <path d="M80 20 H 65 L 58 35 V 80" />
    
    {/* Center vertical lines */}
    <path d="M 48 20 V 80" />
    <path d="M 52 20 V 80" />
  </svg>
);

export default Logo;