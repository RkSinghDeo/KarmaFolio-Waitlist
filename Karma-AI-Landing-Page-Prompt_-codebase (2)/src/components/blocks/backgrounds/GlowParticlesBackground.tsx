"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowParticlesBackgroundProps {
  className?: string;
  style?: React.CSSProperties;
}

export const GlowParticlesBackground: React.FC<GlowParticlesBackgroundProps> = ({
  className,
  style,
}) => {
  // Generate random particles with randomized properties
  const particles = React.useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      duration: 8 + Math.random() * 12, // 8-20 seconds
      delay: Math.random() * 5, // 0-5 seconds delay
      scale: 0.4 + Math.random() * 0.6, // 0.4-1.0 scale
      opacity: 0.1 + Math.random() * 0.1, // 0.1-0.2 opacity
    }));
  }, []);

  return (
    <motion.div
      className={cn(
        'absolute inset-0 pointer-events-none overflow-hidden',
        className
      )}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      {/* Radial gradient glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(255,251,230,0.7) 0%, rgba(143,171,146,0.45) 35%, transparent 70%)`,
          filter: 'blur(40px)',
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            opacity: particle.opacity,
            transform: `scale(${particle.scale})`,
          }}
          animate={{
            x: [0, 30, -20, 40, 0],
            y: [0, -40, 20, -30, 0],
            rotate: [0, 15, -10, 20, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Organic petal-like SVG shape */}
          <svg
            width="24"
            height="32"
            viewBox="0 0 24 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C8 6 4 12 6 18C8 24 16 24 18 18C20 12 16 6 12 2Z"
              fill="rgba(143,171,146,0.6)"
              fillRule="evenodd"
            />
            <path
              d="M12 4C9 7 7 11 8 15C9 19 15 19 16 15C17 11 15 7 12 4Z"
              fill="rgba(255,251,230,0.4)"
              fillRule="evenodd"
            />
          </svg>
        </motion.div>
      ))}
    </motion.div>
  );
};