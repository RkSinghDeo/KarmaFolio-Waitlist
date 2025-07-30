"use client";

import { motion } from "framer-motion";

export const ElegantHeroBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
    >
      {/* Main radial gradient background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `radial-gradient(ellipse 120% 80% at 50% 40%, 
            rgba(143, 171, 146, 0.08) 0%, 
            rgba(255, 255, 255, 0.95) 45%, 
            rgba(255, 255, 255, 1) 100%)`,
          filter: "blur(2px)",
        }}
      />

      {/* Floating particles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="absolute inset-0"
      >
        {/* Particle 1 */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            opacity: [0.3, 0.6, 0.4, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-96 h-96 rounded-full"
          style={{
            top: "10%",
            left: "15%",
            background: `radial-gradient(circle, 
              rgba(143, 171, 146, 0.15) 0%, 
              rgba(143, 171, 146, 0.05) 50%, 
              transparent 100%)`,
            filter: "blur(40px)",
          }}
        />

        {/* Particle 2 */}
        <motion.div
          animate={{
            x: [0, -25, 35, 0],
            y: [0, 30, -15, 0],
            opacity: [0.2, 0.5, 0.3, 0.2],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute w-80 h-80 rounded-full"
          style={{
            top: "60%",
            right: "20%",
            background: `radial-gradient(circle, 
              rgba(255, 255, 255, 0.4) 0%, 
              rgba(255, 255, 255, 0.1) 50%, 
              transparent 100%)`,
            filter: "blur(35px)",
          }}
        />

        {/* Particle 3 */}
        <motion.div
          animate={{
            x: [0, 20, -30, 0],
            y: [0, -25, 35, 0],
            opacity: [0.25, 0.4, 0.6, 0.25],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
          className="absolute w-64 h-64 rounded-full"
          style={{
            top: "30%",
            right: "10%",
            background: `radial-gradient(circle, 
              rgba(143, 171, 146, 0.2) 0%, 
              rgba(143, 171, 146, 0.08) 40%, 
              transparent 100%)`,
            filter: "blur(30px)",
          }}
        />

        {/* Particle 4 */}
        <motion.div
          animate={{
            x: [0, -35, 15, 0],
            y: [0, 20, -30, 0],
            opacity: [0.15, 0.35, 0.25, 0.15],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 12,
          }}
          className="absolute w-72 h-72 rounded-full"
          style={{
            bottom: "20%",
            left: "25%",
            background: `radial-gradient(circle, 
              rgba(255, 255, 255, 0.3) 0%, 
              rgba(255, 255, 255, 0.08) 60%, 
              transparent 100%)`,
            filter: "blur(45px)",
          }}
        />

        {/* Particle 5 */}
        <motion.div
          animate={{
            x: [0, 25, -15, 0],
            y: [0, -20, 25, 0],
            opacity: [0.2, 0.45, 0.3, 0.2],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
          className="absolute w-56 h-56 rounded-full"
          style={{
            top: "5%",
            right: "40%",
            background: `radial-gradient(circle, 
              rgba(143, 171, 146, 0.18) 0%, 
              rgba(143, 171, 146, 0.06) 45%, 
              transparent 100%)`,
            filter: "blur(25px)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};