import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Karmafolio — Safer, Smarter Donations",
  description: "Build your Karmafolio. Explore trusted causes. Auto-track your impact.",
  openGraph: {
    title: "Karmafolio — Safer, Smarter Donations",
    description: "Build your Karmafolio. Explore trusted causes. Auto-track your impact.",
    url: "https://yourdomain.com/", // Adjust as needed
    siteName: "Karmafolio",
    images: [
      {
        url: "/og-preview.jpg", // Will generate or swap in the correct image
        width: 1200,
        height: 630,
        alt: "Preview of Karmafolio dashboard & features."
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Karmafolio — Safer, Smarter Donations",
    description: "Build your Karmafolio. Explore trusted causes. Auto-track your impact.",
    images: ["/og-preview.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Fallback meta tags for SEO and social sharing */}
        <meta property="og:title" content="Karmafolio — Safer, Smarter Donations" />
        <meta property="og:description" content="Build your Karmafolio. Explore trusted causes. Auto-track your impact." />
        <meta property="og:image" content="/og-preview.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Karmafolio — Safer, Smarter Donations" />
        <meta name="twitter:description" content="Build your Karmafolio. Explore trusted causes. Auto-track your impact." />
        <meta name="twitter:image" content="/og-preview.jpg" />
      </head>
      <body className="antialiased">
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <ErrorReporter />{children}</body>
    </html>
  );
}