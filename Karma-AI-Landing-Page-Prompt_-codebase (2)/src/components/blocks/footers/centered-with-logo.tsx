"use client";

import Link from "next/link";
import React from "react";

export function CenteredWithLogo() {
  const pages = [
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      title: "Terms of Service", 
      href: "/terms-of-service",
    },
    {
      title: "Contact",
      href: "/contact", // Correct: Contact leads to contact page
    },
  ];

  return (
    <footer className="w-full border-t border-border bg-background font-sans mt-20">
      <div className="mx-auto max-w-7xl px-8 py-10">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <Logo />
          <ul className="flex list-none flex-col gap-4 sm:flex-row sm:gap-6">
            {pages.map((page, idx) => (
              <li key={"pages" + idx}>
                <Link
                  className="text-sm text-[var(--color-sage)] transition-colors hover:text-primary"
                  href={page.href}
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm text-primary text-center flex flex-wrap items-center justify-center gap-1">
            Built with <span aria-label="love" role="img" className="mx-1 text-red-500">❤</span> by{' '}
            <a
              href="https://x.com/rksinghdeo_"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent transition-colors focus-visible:underline"
            >rksinghdeo_</a>, building Karmafolio in public to make giving safer, smarter, and more transparent.
          </p>
        </div>
      </div>
    </footer>
  );
}

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <span className="font-bold text-lg text-primary">Karmafolio</span>
    </Link>
  );
};