"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Leaf, Check, Heart } from "lucide-react";

import { cn } from "@/lib/utils";

const KarmaLoopToggle = ({
  isRecurring,
  setIsRecurring,
}: {
  isRecurring: boolean;
  setIsRecurring: (value: boolean) => void;
}) => (
  <div className="relative flex w-full max-w-sm mx-auto items-center justify-center rounded-full bg-secondary p-1">
    <div
      className={cn(
        "absolute inset-1 rounded-full transition-all duration-300 ease-in-out",
        isRecurring
          ? "bg-[var(--color-sage)] left-[calc(50%-0.25rem)]"
          : "bg-background left-1 shadow-sm"
      )}
      style={{ width: "calc(50% - 0.25rem)" }}
    />
    <button
      onClick={() => setIsRecurring(false)}
      aria-pressed={!isRecurring}
      className={cn(
        "relative z-10 w-1/2 rounded-full py-2.5 text-center text-sm font-medium transition-colors duration-300",
        !isRecurring ? "text-primary" : "text-muted-foreground"
      )}
    >
      One-time
    </button>
    <button
      onClick={() => setIsRecurring(true)}
      aria-pressed={isRecurring}
      className={cn(
        "relative z-10 w-1/2 rounded-full py-2.5 text-center text-sm font-medium transition-colors duration-300",
        isRecurring ? "text-accent-foreground" : "text-muted-foreground"
      )}
    >
      Recurring
    </button>
  </div>
);

const ImpactVisual = ({ isRecurring }: { isRecurring: boolean }) => {
  const recurringLeaves = [
    { x: "50%", y: "85%", scale: 0.7, delay: 0.6 },
    { x: "30%", y: "60%", scale: 0.9, delay: 0.4 },
    { x: "70%", y: "60%", scale: 0.9, delay: 0.5 },
    { x: "50%", y: "40%", scale: 1.1, delay: 0.2 },
    { x: "15%", y: "25%", scale: 0.8, delay: 0.7 },
    { x: "85%", y: "25%", scale: 0.8, delay: 0.8 },
  ];

  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {!isRecurring ? (
          <motion.div
            key="one-time"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.4, ease: "backOut" }}
          >
            <Leaf className="h-16 w-16 text-[var(--color-sage)]" />
          </motion.div>
        ) : (
          <motion.div
            key="recurring"
            className="relative h-full w-full"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {recurringLeaves.map((leaf, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ top: leaf.y, left: leaf.x, translateX: "-50%", translateY: "-50%" }}
                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: leaf.scale,
                  transition: { delay: leaf.delay, duration: 0.5, ease: "easeOut" }
                }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              >
                <Leaf
                  className="h-10 w-10 text-[var(--color-sage)]"
                  style={{ opacity: 0.8 }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const RecurringBenefits = () => {
  const benefits = [
    { text: "Sustained impact", icon: Heart },
    { text: "Tax optimization", icon: Check },
    { text: "Automatic rebalancing", icon: Check },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto', transition: { delay: 0.2, staggerChildren: 0.1 } }}
      exit={{ opacity: 0, height: 0 }}
      className="overflow-hidden"
    >
      <div className="space-y-3 pt-6 pb-2">
        {benefits.map((benefit) => (
          <motion.div
            key={benefit.text}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-sage)]/20">
              <benefit.icon className="h-4 w-4 text-[var(--color-sage)]" />
            </div>
            <span className="text-secondary-foreground font-medium text-sm">{benefit.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const AmountSelector = ({
  selectedAmount,
  setSelectedAmount,
}: {
  selectedAmount: number | string;
  setSelectedAmount: (amount: number | string) => void;
}) => {
  const amounts = [25, 50, 100];
  const customLabel = "Custom";

  return (
    <div className="flex justify-center items-center gap-3 flex-wrap pt-6">
      {amounts.map((amount) => (
        <button
          key={amount}
          onClick={() => setSelectedAmount(amount)}
          className={cn(
            "rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
            selectedAmount === amount
              ? "bg-accent text-accent-foreground shadow-md"
              : "bg-secondary text-secondary-foreground hover:bg-muted"
          )}
        >
          ${amount}
        </button>
      ))}
      <button
        onClick={() => setSelectedAmount(customLabel)}
        className={cn(
          "rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2",
          selectedAmount === customLabel
            ? "bg-accent text-accent-foreground shadow-md"
            : "bg-secondary text-secondary-foreground hover:bg-muted"
        )}
      >
        {customLabel}
      </button>
    </div>
  );
};

export default function KarmaLoopSection() {
  const [isRecurring, setIsRecurring] = useState(true);
  const [selectedAmount, setSelectedAmount] = useState<number | string>(50);

  const ctaText = `${
    typeof selectedAmount === 'number' ? `$${selectedAmount}` : 'Custom Amount'
  } ${isRecurring ? 'Monthly' : 'Once'}`;

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-5xl font-bold tracking-tight text-primary sm:text-6xl">
            Set It and Forget It
          </h2>
          <p className="mt-4 text-xl sm:text-2xl text-secondary-foreground font-medium">
            Karma Loop makes consistent giving effortless with smart recurring donations.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto bg-card rounded-2xl p-4 sm:p-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border border-border/75">
          <KarmaLoopToggle isRecurring={isRecurring} setIsRecurring={setIsRecurring} />
          
          <ImpactVisual isRecurring={isRecurring} />
          
          <div className="h-28">
            <AnimatePresence>
              {isRecurring && <RecurringBenefits />}
            </AnimatePresence>
          </div>
          
          <div className="w-full h-px bg-border my-4" />

          <AmountSelector selectedAmount={selectedAmount} setSelectedAmount={setSelectedAmount} />

          <motion.button 
            layout 
            className="w-full max-w-sm mx-auto mt-8 block rounded-full bg-accent py-4 px-8 font-bold text-lg text-accent-foreground shadow-lg shadow-accent/20 transition-transform duration-300 ease-in-out hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Donate {ctaText}
          </motion.button>
        </div>
      </div>
    </section>
  );
}