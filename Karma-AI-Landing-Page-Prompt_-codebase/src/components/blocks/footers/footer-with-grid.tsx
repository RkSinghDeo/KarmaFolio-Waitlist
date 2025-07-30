import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function FooterWithGrid() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="border-b border-border pb-2">
          <div className="mb-10 max-w-xl">
            <Logo className="justify-start" />
            <p className="mb-4 text-sm text-[var(--color-sage)]">
              Access an ever-growing collection of premium, meticulously crafted
              templates and component packs. Built by the founders of Aceternity
              UI.
            </p>
            <div className="text-sm text-[var(--color-sage)]">
              A product by{" "}
              <Link
                href="https://aceternity.com"
                target="__blank"
                className="font-medium text-primary underline"
              >
                Aceternity
              </Link>
            </div>
            <div className="mt-2 text-sm text-[var(--color-sage)]">
              Building in public at{" "}
              <Link
                href="https://twitter.com/mannupaaji"
                className="font-medium text-primary underline"
                target="__blank"
              >
                @mannupaaji
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 border-b border-border pb-10 pt-10 md:grid-cols-4">
          <ul className="text-base font-medium text-primary">
            <li className="mb-4 text-sm font-bold text-primary">
              Components
            </li>
            {COMPONENT_PACKS.map((item, idx) => (
              <li key={"first" + idx} className="mb-4 text-sm font-normal">
                <Link
                  href={item.href}
                  className="text-[var(--color-sage)] hover:text-primary"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="text-base font-medium text-primary">
            <li className="mb-4 text-sm font-bold text-primary">
              Templates
            </li>
            {TEMPLATES.map((item, idx) => (
              <li key={"first" + idx} className="mb-4 text-sm font-normal">
                <Link
                  href={item.href}
                  className="text-[var(--color-sage)] hover:text-primary"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="text-base font-medium text-primary">
            <li className="mb-4 text-sm font-bold text-primary">
              Pages
            </li>
            {PAGES.map((item, idx) => (
              <li key={"first" + idx} className="mb-4 text-sm font-normal">
                <Link
                  href={item.href}
                  className="text-[var(--color-sage)] hover:text-primary"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="text-base font-medium text-primary">
            <li className="mb-4 text-sm font-bold text-primary">
              Pages
            </li>
            {PROGRAMMATIC_SEO_PAGES.map((item, idx) => (
              <li key={"first" + idx} className="mb-4 text-sm font-normal">
                <Link
                  href={item.href}
                  className="text-[var(--color-sage)] hover:text-primary"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mb-4 pt-10 text-sm text-[var(--color-sage)]">
          &copy; {new Date().getFullYear()} Aceternity Labs LLC. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
}

const TEMPLATES = [
  {
    title: "Startup Landing Page Template",
    href: "/templates/startup-landing-page",
  },
  { title: "AI SaaS Template", href: "/templates/ai-saas-template" },
  {
    title: "Proactiv Marketing Template",
    href: "/templates/proactiv-marketing-template",
  },
  {
    title: "Agenlabs Agency Template",
    href: "/templates/agenlabs-agency-template",
  },
  {
    title: "DevPro Portfolio Template",
    href: "/templates/devpro-portfolio-template",
  },
  {
    title: "Foxtrot Marketing Template",
    href: "/templates/foxtrot-marketing-template",
  },
];

const COMPONENT_PACKS = [
  { title: "Hero Sections", href: "/components/hero-sections" },
  { title: "Logo Clouds", href: "/components/logo-clouds" },
  { title: "Bento Grids", href: "/components/bento-grids" },
  { title: "CTA Sections", href: "/components/cta-sections" },
  { title: "Testimonials", href: "/components/testimonials" },
  { title: "Feature Sections", href: "/components/feature-sections" },
  { title: "Pricing Sections", href: "/components/pricing-sections" },
  { title: "Cards", href: "/components/cards" },
  { title: "Navbars", href: "/components/navbars" },
  { title: "Footers", href: "/components/footers" },
  { title: "Login and Signup", href: "/components/login-and-signup-sections" },
  { title: "Contact sections", href: "/components/contact-sections" },
  { title: "Blog Sections", href: "/components/blog-sections" },
  { title: "Blog Content Sections", href: "/components/blog-content-sections" },
  { title: "FAQs", href: "/components/faqs" },
  { title: "Sidebars", href: "/components/sidebars" },
  { title: "Stats Sections", href: "/components/stats-sections" },
];

const PAGES = [
  { title: "All Products", href: "/products" },
  { title: "Components", href: "/components" },
  { title: "Templates", href: "/templates" },
  { title: "Categories", href: "/categories" },
  { title: "Box Shadows", href: "https://ui.aceternity.com/tools/box-shadows" },
  { title: "Pricing", href: "/pricing" },
  { title: "Aceternity UI", href: "https://ui.aceternity.com/" },
  { title: "Aceternity Studio", href: "https://aceternity.com/" },
  { title: "Licence", href: "/licence" },
  { title: "Refunds", href: "/refunds" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms and Conditions", href: "/terms" },
  { title: "Twitter", href: "https://twitter.com/aceternitylabs" },
  { title: "Discord", href: "https://discord.gg/vb8JSeun4f" },
];

const PROGRAMMATIC_SEO_PAGES = [
  {
    title: "Best Modern Design Templates",
    href: "/best-modern-design-templates",
  },
  { title: "Best AI SaaS Templates", href: "/best-ai-saas-templates" },
  { title: "Best Marketing Templates", href: "/best-marketing-templates" },
  {
    title: "Best Minimal Templates in React and Next.js",
    href: "/best-minimal-templates-in-react-and-nextjs",
  },
  {
    title: "Best components and templates with Framer Motion",
    href: "/best-components-and-templates-with-motion/react",
  },
  {
    title: "Amazing Tailwind CSS and Framer Motion Components",
    href: "/amazing-tailwindcss-and-motion/react-components",
  },
];

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex flex-shrink-0 items-center justify-center space-x-2 py-6 text-center text-2xl font-bold text-neutral-600 selection:bg-emerald-500 dark:text-gray-100",
        className
      )}
    >
      <span className="font-sans text-xl text-black dark:text-white">Karmafolio</span>
    </Link>
  );
};