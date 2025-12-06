
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseClasses = 'whitespace-nowrap cursor-pointer font-medium transition-all duration-200 rounded-lg';
  
  const variantClasses = {
    primary: 'bg-[#935624] hover:bg-[#b37932] text-white',
    secondary: 'bg-[#16372e] hover:bg-[#1e4a3f] text-white',
    outline: 'border-2 border-[#935624] text-[#935624] hover:bg-[#935624] hover:text-white'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
