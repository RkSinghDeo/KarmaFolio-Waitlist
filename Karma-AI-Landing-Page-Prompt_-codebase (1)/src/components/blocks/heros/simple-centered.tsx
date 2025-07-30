'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import { GlowParticlesBackground } from '../backgrounds/GlowParticlesBackground'
import { ElegantHeroBackground } from '../backgrounds/ElegantHeroBackground'
import { HeartHandshake } from "lucide-react"

const navigation = [
  { name: 'Product', href: '#org-detail-stats' },
  { name: 'Features', href: '#how-it-works' },
  { name: 'Impact', href: '#karmafolio-pie' },
  { name: 'Problem', href: '#problem-section' },
]

export default function SimpleCentered() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Helper to smoothly scroll to sections (or waitlist) by selector
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
  const scrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => scrollToSection(e, 'waitlist-form');

  return (
    <div className="bg-background font-sans">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex flex-col items-center justify-center p-3 sm:p-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 sm:gap-4 w-full">
            {/* Nav links (always centered on desktop) */}
            <div className="flex flex-row items-center justify-center gap-x-2 sm:gap-x-6 lg:gap-x-12 w-full">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs sm:text-sm font-semibold leading-5 sm:leading-6 text-primary px-1 sm:px-2"
                  onClick={(e) => {
                    const id = item.href.startsWith('#') ? item.href.slice(1) : item.href;
                    scrollToSection(e, id);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#waitlist-form"
                onClick={scrollToWaitlist}
                className="text-xs sm:text-sm font-semibold leading-5 sm:leading-6 text-accent bg-accent/10 hover:bg-accent/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-4 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-14 sm:py-24 lg:py-36">
          <div className="flex flex-col items-center gap-6 sm:gap-10 text-center w-full">
            {/* Microheadline */}
            <span className="text-sage bg-sage/10 text-sm sm:text-base font-semibold tracking-wide px-3 py-1 rounded-full inline-block">Donations, Decoded</span>
            {/* Hero Headline */}
            <h1 className="text-primary text-balance font-extrabold leading-tight tracking-tight text-2xl sm:text-3xl lg:text-4xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              "Know what your donation actually did."
            </h1>
            <p className="mt-1 sm:mt-3 text-base sm:text-lg text-muted-foreground text-center max-w-[28rem] mx-auto font-medium">
              Karmafolio turns giving into a visible journey.
            </p>
            <button
              onClick={scrollToWaitlist}
              className="bg-accent text-white shadow-md px-7 py-3 sm:px-8 sm:py-4 font-semibold text-base sm:text-lg rounded-full mt-2 sm:mt-4 hover:bg-primary transition-all duration-150 mx-auto w-fit focus:outline-none focus:ring-2 focus:ring-accent"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}