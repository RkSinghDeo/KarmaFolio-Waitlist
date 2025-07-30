import Link from 'next/link'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl text-center py-16">
        <h1 className="text-3xl font-bold text-primary mb-8">
          Contact Karmafolio
        </h1>
        <p className="text-lg text-foreground leading-relaxed mb-8">
          Questions or feedback?{' '}
          <Link 
            href="mailto:ramneek@devolvdev.com"
            className="text-accent hover:text-accent/80 transition-colors duration-200 underline decoration-accent/50 hover:decoration-accent"
          >
            Email ramneek@devolvdev.com
          </Link>.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="inline-block px-6 py-2 rounded bg-accent text-white font-semibold text-base shadow-sm hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}