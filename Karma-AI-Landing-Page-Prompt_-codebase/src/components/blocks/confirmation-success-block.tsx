"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Share2, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConfirmationSuccessBlockProps {
  showCta?: boolean;
  onShare?: () => void;
  onCopy?: () => void;
}

export const ConfirmationSuccessBlock: React.FC<ConfirmationSuccessBlockProps> = ({
  showCta = false,
  onShare,
  onCopy,
}) => {
  const [showFloatingElements, setShowFloatingElements] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [floatingElements, setFloatingElements] = useState<
    { id: number; initialX: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      const handler = () => setPrefersReducedMotion(mediaQuery.matches);
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);

  useEffect(() => {
    // Generate floatingElements only on the client after mount for hydration-safe randomness
    if (!prefersReducedMotion) {
      // Generate more elements, weighted toward the edges to simulate a border effect
      setFloatingElements(
        Array.from({ length: 18 }, (_, i) => {
          // Edges bias: x is closer to either 0-18% or 82-100% for left/right borders, or top/bottom edges
          let initialX;
          if (i < 6) {
            // Left edge
            initialX = Math.random() * 13 + 2;
          } else if (i < 12) {
            // Right edge
            initialX = 85 + Math.random() * 13;
          } else {
            // Top/bottom random
            initialX = Math.random() * 100;
          }
          return {
            id: i,
            initialX,
            delay: Math.random() * 2.2,
            duration: 5.5 + Math.random() * 1.5,
            yDistance: 225 + 30 * Math.random(),
            xOffset: (Math.random() - 0.5) * 15,
            rotate: (Math.random() - 0.5) * 36,
            scaleStart: 0.7 + Math.random() * 0.4,
            scaleMid: 1,
            scaleEnd: 0.6 + Math.random() * 0.4
          };
        })
      );
    } else {
      setFloatingElements([]);
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    // Trigger floating elements after a brief delay
    if (!prefersReducedMotion) {
      const timer = setTimeout(() => setShowFloatingElements(true), 250);
      return () => clearTimeout(timer);
    }
  }, [prefersReducedMotion]);

  // We'll let the animation last up to 7s, then remove
  useEffect(() => {
    let cleanup: NodeJS.Timeout;
    if (showFloatingElements) {
      cleanup = setTimeout(() => setShowFloatingElements(false), 7000);
    }
    return () => cleanup && clearTimeout(cleanup);
  }, [showFloatingElements]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        damping: 24,
        stiffness: 300,
        duration: 0.7,
      }}
      className="w-full max-w-md mx-auto px-5 py-8 md:px-10 md:py-12 bg-[rgba(143,171,146,0.14)] rounded-[var(--radius-lg)] shadow-lg relative"
      style={{ backdropFilter: 'blur(3px)' }}
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Celebration/floating SVGs */}
      <AnimatePresence>
        {!prefersReducedMotion && showFloatingElements && (
          <>
            {floatingElements.map((element) => (
              <motion.div
                key={element.id}
                initial={{
                  opacity: 0,
                  y: -32,
                  x: `${element.initialX}%`,
                  rotate: 0,
                  scale: element.scaleStart
                }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, element.yDistance],
                  x: [`${element.initialX}%`, `${element.initialX + element.xOffset}%`],
                  rotate: [0, element.rotate],
                  scale: [element.scaleStart, element.scaleMid, element.scaleEnd],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: element.duration,
                  delay: 0.35 + element.delay,
                  ease: "easeInOut",
                }}
                className="absolute pointer-events-none z-20"
                style={{ top: -10 }}
                aria-hidden="true"
              >
                {/* Always leaf, sage green */}
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><g><path d="M6 6Q7.5 3 9 6Q10.5 3 12 6Q14 9 9 12Q4 9 6 6Z" fill="var(--color-sage)"/></g></svg>
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Main content block */}
      <div className="relative z-10 text-center flex flex-col items-center space-y-2 md:space-y-3">
        {/* Check icon with bounce pop-in */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 470,
            delay: 0.18,
          }}
          className="flex justify-center mb-5"
        >
          <div
            className="w-14 h-14 flex items-center justify-center rounded-full shadow-md"
            style={{ backgroundColor: 'var(--color-sage)' }}
          >
            <Check className="w-7 h-7 text-white" aria-label="Success" />
          </div>
        </motion.div>

        {/* Main confirmation copy - as per user request, no extras */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.45 }}
          className="text-xl md:text-2xl font-bold text-primary !leading-snug"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Thanks for stepping in.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.44, duration: 0.35 }}
          className="text-base md:text-lg text-primary"
        >
          You're now part of a growing movement to make giving more transparent, intentional, and impactful.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.56, duration: 0.34 }}
          className="flex items-center gap-2 text-[1.10rem] font-medium md:text-lg"
          style={{ color: 'var(--color-sage)' }}
        >
          <span role="img" aria-label="Green heart" className="text-xl md:text-2xl">💚</span>
          You're part of something meaningful
        </motion.p>
      </div>
    </motion.div>
  );
};