import SimpleCentered from "@/components/blocks/heros/simple-centered";
import { ProblemSection } from "@/components/problem-section";
import { OrgDetailStatsSection } from '@/components/blocks/stats/org-detail-stats-section';
import { KarmafolioPiePreviewSection } from "@/components/karmafolio-pie-preview-section";
import HowItWorksSection from "@/components/how-it-works-section";
import WaitlistFormSection from "@/components/waitlist-form-section";
import { CenteredWithLogo } from "@/components/blocks/footers/centered-with-logo";
import { FooterWithGrid } from "@/components/blocks/footers/footer-with-grid";
import { SimpleFooterWithFourGrids } from "@/components/blocks/footers/simple-footer-with-four-grids";

export default function Home() {
  return (
    <main>
      {/* HERO with headline+subheadline + prominent Join Waitlist button baked into hero */}
      <SimpleCentered />
      {/* Moved up: Org detail, Trust, + Pie visual */}
      <div id="org-detail-stats" className="mb-10 md:mb-14 lg:mb-20">
        <OrgDetailStatsSection />
      </div>
      {/* --- NEW: Donation Visualization Section --- */}
      <div id="karmafolio-pie">
        <KarmafolioPiePreviewSection />
      </div>
      {/* Problem Section - can remain for context, but below main impact card */}
      <div id="problem-section">
        <ProblemSection />
      </div>
      {/* Solution Section removed as per request */}
      {/* <SolutionSection /> */}
      {/* How it Works */}
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      {/* Trust Section - badges/signals */}
      {/* <TrustSection /> */}
      {/* Final Waitlist CTA section at the end, just before footer */}
      <div className="px-2 sm:px-0" id="waitlist-form">
        <WaitlistFormSection />
      </div>
      {/* Minimal Footer with Privacy/TOS/Contact links */}
      <CenteredWithLogo />
    </main>
  );
}