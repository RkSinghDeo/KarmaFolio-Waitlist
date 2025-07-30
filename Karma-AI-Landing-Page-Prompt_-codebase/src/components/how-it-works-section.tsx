"use client";

import React from "react";
import { motion } from "motion/react";
import { Search, Heart, BarChart } from "lucide-react";

// Define the type for a single step's data
interface StepData {
  icon: React.ElementType;
  step: number;
  title: string;
  description: string;
}

// Data for the three steps, making the component data-driven and easy to update.
const stepsData: StepData[] = [
  {
    icon: Search,
    step: 1,
    title: "Discover",
    description: "AI matches you with verified charities based on your values and interests.",
  },
  {
    icon: Heart,
    step: 2,
    title: "Give",
    description: "Choose your impact tier and giving frequency that fits your lifestyle.",
  },
  {
    icon: BarChart, // Representing "Track" with an analytics-style icon
    step: 3,
    title: "Track",
    description: "Monitor real impact through your personalized Karmafolio dashboard.",
  },
];

// Animation variants for container and item staggering effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const HowItWorksSection = () => {
  return (
    <section className="w-full bg-background py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="font-bold text-primary tracking-tighter text-3xl sm:text-4xl lg:text-5xl">
            How Karmafolio Works
          </h2>
          <p className="mt-4 text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto">
            Three simple steps to transform your giving with Karmafolio.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row items-stretch justify-center gap-y-20 lg:gap-x-0"
        >
          {stepsData.map((step, index) => (
            <React.Fragment key={step.step}>
              <motion.div
                variants={itemVariants}
                className="relative flex flex-row items-start lg:flex-col lg:items-center text-left lg:text-center lg:flex-1"
              >
                {/* Vertical connecting line for mobile view */}
                {index < stepsData.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="lg:hidden absolute left-8 top-8 h-[calc(100%_+_5rem)] w-px border-l-2 border-dashed border-border"
                  />
                )}

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-background flex items-center justify-center rounded-full border-2 border-border shadow-sm">
                    <step.icon
                      className="h-8 w-8 text-[var(--color-sage)]"
                      aria-hidden="true"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                
                <div className="ml-6 lg:ml-0 lg:mt-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
                    <span className="text-accent">{step.step}.</span> {step.title}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground max-w-xs lg:max-w-none">
                    {step.description}
                  </p>
                </div>
              </motion.div>
              
              {/* Horizontal connecting line for desktop view */}
              {index < stepsData.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block self-start flex-1 pt-8"
                >
                  <div className="w-full border-t-2 border-dashed border-border" />
                </div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;