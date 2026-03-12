export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight mb-6">
          GET IN TOUCH
        </h2>
        <div className="h-0.5 w-32 bg-gradient-to-r from-cyan to-transparent mt-4 mx-auto mb-8" />

        <p className="text-xl text-gray-400 font-light mb-12">
          Interested in learning more about MixCast virtual production
          technology? We&apos;d love to hear from you.
        </p>

        <a
          href="mailto:info@mixcast.com"
          className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-blue to-cyan text-white font-medium rounded-full hover:opacity-90 transition-opacity text-lg"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Contact Us
        </a>
      </div>
    </section>
  );
}
