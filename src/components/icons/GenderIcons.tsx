import React from 'react';

interface GenderIconProps {
  className?: string;
}

export const MaleIcon = ({ className = "" }: GenderIconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="10" cy="14" r="4"/>
    <path d="M14 4v6"/>
    <path d="M14 4h6"/>
    <path d="M20 4l-6 6"/>
  </svg>
);

export const FemaleIcon = ({ className = "" }: GenderIconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="10" r="4"/>
    <path d="M12 14v7"/>
    <path d="M9 18h6"/>
  </svg>
);