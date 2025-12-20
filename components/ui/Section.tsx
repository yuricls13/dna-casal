import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'gradient';
  enableAnimation?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  background = 'white',
  enableAnimation = true
}) => {
  const bgStyles = {
    white: 'bg-white',
    light: 'bg-brand-light',
    gradient: 'bg-gradient-to-br from-brand-purple to-brand-pink'
  };

  const containerClasses = "container mx-auto px-4 max-w-6xl";

  return (
    <section id={id} className={`py-16 md:py-20 ${bgStyles[background]} ${className}`}>
      {enableAnimation ? (
        <motion.div 
          className={containerClasses}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      ) : (
        <div className={containerClasses}>
          {children}
        </div>
      )}
    </section>
  );
};
