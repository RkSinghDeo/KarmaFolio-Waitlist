import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl text-center py-16">
        <h1 className="text-3xl font-bold text-primary mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-base text-foreground leading-relaxed text-left mx-auto" style={{maxWidth: 480}}>
          <p className="text-center text-sm text-muted-foreground">Effective date: April 10, 2024</p>
          <p><b>Karmafolio</b> is committed to protecting your privacy. This policy describes how we handle your information with care and transparency.</p>

          <h2 className="font-semibold mt-8 text-primary">1. What Information We Collect</h2>
          <ul className="list-disc ml-6">
            <li>Email address (when you join our waitlist or contact us)</li>
            <li>Charity/donation info (when you use the product)</li>
            <li>Basic site usage data (for improvements, never ads)</li>
          </ul>

          <h2 className="font-semibold mt-8 text-primary">2. How We Use Your Information</h2>
          <ul className="list-disc ml-6">
            <li>To operate and improve Karmafolio</li>
            <li>To send updates (only if you opt in)</li>
            <li>We never sell or trade your info</li>
          </ul>

          <h2 className="font-semibold mt-8 text-primary">3. How We Store & Protect Information</h2>
          <p>We use secure, industry-standard systems, strictly limit access, and will notify you immediately in case of any breach.</p>

          <h2 className="font-semibold mt-8 text-primary">4. Third Parties</h2>
          <p>No data is shared with marketers. We only use essential service providers (e.g., cloud, email) for operating Karmafolio.</p>

          <h2 className="font-semibold mt-8 text-primary">5. Your Choices</h2>
          <ul className="list-disc ml-6">
            <li>Opt out of any email at any time</li>
            <li>Request deletion of your data: <Link href="/contact" className="underline text-accent">Contact us</Link></li>
          </ul>

          <h2 className="font-semibold mt-8 text-primary">6. Updates</h2>
          <p>Policy updates will appear here. For major changes, we'll notify you by email.</p>
          <p className="text-xs text-muted-foreground">Questions? <Link href="/contact" className="underline text-accent">Contact us</Link>. We're committed to your privacy.</p>
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="inline-block px-6 py-2 rounded bg-accent text-white font-semibold text-base shadow-sm hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}