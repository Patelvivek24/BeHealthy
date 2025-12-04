'use client';

import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
  className?: string;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const variantClass = 
    variant === 'primary' ? styles.primary : 
    variant === 'outline' ? styles.outline : 
    styles.white;
  
  const buttonClasses = `${styles.button} ${variantClass} ${className}`.trim();
  
  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
}

