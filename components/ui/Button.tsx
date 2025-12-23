import React from 'react';
import { CHECKOUT_URL, N8N_UPLOAD_WEBHOOK_URL } from '../../constants';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'success';
  fullWidth?: boolean;
  size?: 'md' | 'lg';
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary',
  fullWidth = false,
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  href
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 transform hover:scale-105 rounded-xl shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";
  
  const sizeStyles = size === 'lg' ? "py-5 px-12 text-xl md:text-2xl" : "py-4 px-8 text-lg";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-purple to-brand-pink text-white hover:shadow-brand-purple/40",
    secondary: "bg-white text-brand-purple border-2 border-brand-purple hover:bg-brand-light",
    success: "bg-[#10b981] text-white hover:shadow-green-500/40"
  };

  const widthStyle = fullWidth ? "w-full" : "w-auto";
  const combinedClasses = `${baseStyles} ${sizeStyles} ${variants[variant]} ${widthStyle} ${className}`;

  // Se tiver onClick ou type submit, renderiza botão
  if (onClick || type === 'submit' || !href) {
    return (
      <button 
        type={type}
        className={combinedClasses}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  // Se tiver href (e não for botão explicito), renderiza link
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={combinedClasses}
    >
      {children}
    </a>
  );
};