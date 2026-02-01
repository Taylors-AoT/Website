import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <img
    src="/logos/AOT_Logo.png"
    alt="Agents of Tech logo"
    className={`max-w-full h-10 object-contain ${className}`}  // ← Handles small containers
  />
);

export default Logo;
