import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';

export default function NavLogo() {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2 text-primary hover:opacity-80 transition-opacity"
      aria-label="NextFit Coach - Home"
    >
      <Logo size="sm" />
    </Link>
  );
}