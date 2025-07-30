"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface FallingIcon {
  id: number;
  icon: string;
  startX: number;
  delay: number;
  rotationOffset: number;
  color: string;
}

export const WelcomeMessageAnimated: React.FC = () => {
  const [fallingIcons, setFallingIcons] = useState<FallingIcon[]>([]);

  useEffect(() => {
    // Only floating sage-green leaves, distributed to edges
    const generateLeaves = () => {
      const leaves: FallingIcon[] = [];
      for (let i = 0; i < 18; i++) {
        // Edge bias for border effect
        let startX;
        if (i < 6) {
          startX = Math.random() * 13 + 2;
        } else if (i < 12) {
          startX = 85 + Math.random() * 13;
        } else {
          startX = Math.random() * 100;
        }
        leaves.push({
          id: i,
          icon: '🌿',
          startX,
          delay: Math.random() * 2.5,
          rotationOffset: Math.random() * 360,
          color: '#8FAB92' // Only sage
        });
      }
      setFallingIcons(leaves);
    };
    generateLeaves();
  }, []);

  return (
    <section className="relative min-h-[60vh] bg-white py-20 overflow-hidden">
      {/* Floating leaves along edges */}
      {fallingIcons.map(icon => (
        <motion.div
          key={icon.id}
          initial={{ opacity: 0, y: -32, x: `${icon.startX}%`, rotate: icon.rotationOffset, scale: 0.7 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, 275],
            x: [`${icon.startX}%`, `${icon.startX + (Math.random() - 0.5) * 18}%`],
            rotate: [icon.rotationOffset, icon.rotationOffset + ((Math.random() - 0.5) * 28)],
            scale: [0.7, 1.1, 0.65],
          }}
          transition={{ duration: 6 + Math.random() * 2, delay: 0.28 + icon.delay, ease: 'easeInOut' }}
          className="absolute pointer-events-none z-10"
          style={{ top: -12 }}
          aria-hidden="true"
        >
          <span style={{ fontSize: 28, color: icon.color, opacity: 1, filter: 'blur(0.3px)' }}>🌿</span>
        </motion.div>
      ))}
      <div className="container mx-auto px-6 text-center relative z-20">
        <motion.h1 
          className="text-4xl md:text-5xl font-display font-bold mb-6"
          style={{ color: '#2D5339' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Thanks for stepping in.
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-display font-medium mb-8"
          style={{ color: '#2D5339' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          You're now part of a growing movement to make giving more transparent, intentional, and impactful.
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl font-body flex items-center justify-center gap-2"
          style={{ color: '#2D5339' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <span role="img" aria-label="green-heart">💚</span>
          <span className="ml-2">You're part of something meaningful</span>
        </motion.p>
      </div>
    </section>
  );
};