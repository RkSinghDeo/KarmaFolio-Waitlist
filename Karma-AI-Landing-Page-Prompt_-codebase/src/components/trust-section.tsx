"use client";

import { Lock, CheckSquare } from "lucide-react";

export const TrustSection = () => {
  const trustSignals = [
    {
      icon: Lock,
      title: "Data Privacy",
      description: "Your personal information is secure and never shared with third parties."
    },
    {
      icon: CheckSquare,
      title: "Charities Vetted",
      description: "Every nonprofit is verified and meets our strict standards for legitimacy."
    }
  ];

  return (
    <section 
      aria-label="Trust and security information"
      className="py-12 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-[#2D5339] mb-2 font-['Inter']">
            Give with confidence
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-8 md:justify-between">
            {trustSignals.map((signal, index) => {
              const IconComponent = signal.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start gap-4 md:flex-col md:items-center md:text-center md:flex-1 group hover:scale-105 transition-transform duration-200"
                >
                  <div className="flex-shrink-0 md:mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#8FAB92]/10 flex items-center justify-center group-hover:bg-[#8FAB92]/20 transition-colors duration-200">
                      <IconComponent className="w-5 h-5 text-[#8FAB92] group-hover:text-[#2D5339] transition-colors duration-200" />
                    </div>
                  </div>
                  <div className="flex-1 md:flex-none">
                    <h3 className="font-bold text-[#2D5339] mb-1 font-['Inter'] text-sm md:text-base">
                      {signal.title}
                    </h3>
                    <p className="text-[#737373] text-sm leading-relaxed font-['Inter']">
                      {signal.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};