'use client';

import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: 'bg-accent-gold text-white hover:bg-accent-gold-hover shadow-lg shadow-accent-gold/20',
    secondary: 'bg-bg-card-2 text-text-primary hover:bg-bg-card border border-border-soft',
    outline: 'bg-transparent border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white',
    glass: 'glass text-text-primary hover:bg-white/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-medium',
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer',
        variants[variant],
        sizes[size],
        className
      )}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  zoom?: boolean;
}

export const ScrollReveal = ({
  children,
  delay = 0,
  direction = 'up',
  className,
  zoom = true,
}: ScrollRevealProps) => {
  const shouldReduceMotion = useReducedMotion();
  
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: { x: 0, y: 0 },
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction],
        scale: zoom ? 1.05 : 1 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0, 
        scale: 1 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SectionTitle = ({
  title,
  subtitle,
  badge,
  centered = false,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
}) => (
  <div className={cn('mb-12 md:mb-16', centered && 'text-center')}>
    {badge && (
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1 rounded-full border border-accent-gold/30 text-accent-gold text-xs font-semibold uppercase tracking-widest mb-4"
      >
        {badge}
      </motion.span>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-5xl font-serif font-medium text-text-primary mb-4 leading-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-text-secondary max-w-2xl mx-auto text-lg"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);
