"use client";

import React from 'react';
import { Briefcase, TrendingUp, Users } from 'lucide-react';
import { motion } from 'motion/react';

interface Tier {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
}

const tiersData: Tier[] = [
  {
    icon: Briefcase,
    title: 'Large-Cap',
    subtitle: 'Established Giants',
    description: 'Trusted organizations with proven global impact and transparent reporting.',
  },
  {
    icon: TrendingUp,
    title: 'Mid-Cap',
    subtitle: 'Rising Champions',
    description: 'Growing nonprofits making significant regional difference with innovative approaches.',
  },
  {
    icon: Users,
    title: 'Grassroots',
    subtitle: 'Local Heroes',
    description: 'Community-based initiatives creating direct neighborhood and local change.',
  },
];

const ImpactTierCard = ({ tier, index }: { tier: Tier; index: number }) => {
  const Icon = tier.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 border border-border/50"
    >
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[rgba(143,171,146,0.15)] mb-6">
        <Icon className="h-8 w-8 text-[var(--color-sage)]" aria-hidden="true" />
      </div>
      <h3 className="font-sans text-xl font-bold text-primary">{tier.title}</h3>
      <p className="mt-1 font-sans text-base font-medium text-[var(--color-sage)]">{tier.subtitle}</p>
      <p className="mt-4 font-sans text-base text-[var(--color-sage)] leading-relaxed">{tier.description}</p>
    </motion.div>
  );
};

export default function ImpactTiersSection() {
  return (
    <section className="font-sans bg-white w-full">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Choose Your Impact Level
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--color-sage)]">
            Explore three distinct avenues for your contribution, from established global players to vital grassroots initiatives.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:mt-20">
          {tiersData.map((tier, index) => (
            <ImpactTierCard key={tier.title} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}