'use client';

import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const buttonClasses = `${styles.button} ${variant === 'primary' ? styles.primary : styles.outline} ${className}`.trim();
  
  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
}

