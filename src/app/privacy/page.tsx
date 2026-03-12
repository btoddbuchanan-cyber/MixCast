export default function Privacy() {
  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <a
          href="/"
          className="text-sm text-accent hover:text-accent-dim transition-colors mb-8 inline-block"
        >
          &larr; Back to Home
        </a>
        <h1 className="font-heading text-4xl font-bold text-text-primary mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
          <p className="text-sm text-text-muted">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <h2 className="text-xl font-heading font-semibold text-text-primary mt-10">
            1. Information We Collect
          </h2>
          <p>
            MixCast Studios Inc. (&quot;MixCast,&quot; &quot;we,&quot; &quot;us&quot;) collects information you provide directly, such as your name, email address, and any messages submitted through our contact form. We may also collect usage data including browser type, device information, and pages visited through standard web analytics.
          </p>

          <h2 className="text-xl font-heading font-semibold text-text-primary mt-10">
            2. How We Use Your Information
          </h2>
          <p>
            We use collected information to respond to inquiries, improve our website and services, communicate updates about MixCast products, and comply with legal obligations.
          </p>

          <h2 className="text-xl font-heading font-semibold text-text-primary mt-10">
            3. Information Sharing
          </h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our website, subject to confidentiality agreements.
          </p>

          <h2 className="text-xl font-heading font-semibold text-text-primary mt-10">
            4. Data Security
          </h2>
          <p>
            We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-heading font-semibold text-text-primary mt-10">
            5. Cookies
          </h2>
          <p>
            Our website may use cookies and similar technologies to enhance your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings.
          </p>

          <h2 className="text-xl font-heading font-semibold text-text-primary mt-10">
            6. Your Rights
          </h2>
          <p>
            You may request access to, correction of, or deletion of your personal information by contacting us at info@mixcast.com. We will respond to your request within a reasonable timeframe.
          </p>

          <h2 className="text-xl font-heading font-semibold text-text-primary mt-10">
            7. Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:{" "}
            <a href="mailto:info@mixcast.com" className="text-accent hover:text-accent-dim transition-colors">
              info@mixcast.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
