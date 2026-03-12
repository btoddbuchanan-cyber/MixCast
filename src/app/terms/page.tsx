export default function Terms() {
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
          Terms of Use
        </h1>
        <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
          <p className="text-sm text-text-muted">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <h2 className="text-xl font-heading font-semibold text-text-primary mt-10">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using the MixCast Studios Inc. (&quot;MixCast&quot;) website, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.
          </p>

          <h2 className="text-xl font-heading font-semibold text-text-primary mt-10">
            2. Intellectual Property
          </h2>
          <p>
            All content on this website — including text, graphics, logos, images, videos, software, and technology descriptions — is the property of MixCast Studios Inc. and is protected by Canadian and international copyright, trademark, and patent laws. MixCast holds 4 awarded patents related to its virtual production technology.
          </p>

          <h2 className="text-xl font-heading font-semibold text-text-primary mt-10">
            3. Permitted Use
          </h2>
          <p>
            You may access this website for informational purposes only. You may not reproduce, distribute, modify, or create derivative works from any content without prior written consent from MixCast Studios Inc.
          </p>

          <h2 className="text-xl font-heading font-semibold text-text-primary mt-10">
            4. Disclaimer of Warranties
          </h2>
          <p>
            This website and its content are provided &quot;as is&quot; without warranties of any kind, either express or implied. MixCast does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
          </p>

          <h2 className="text-xl font-heading font-semibold text-text-primary mt-10">
            5. Limitation of Liability
          </h2>
          <p>
            MixCast Studios Inc. shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use this website.
          </p>

          <h2 className="text-xl font-heading font-semibold text-text-primary mt-10">
            6. Governing Law
          </h2>
          <p>
            These Terms of Use are governed by the laws of the Province of British Columbia, Canada. Any disputes shall be subject to the exclusive jurisdiction of the courts of British Columbia.
          </p>

          <h2 className="text-xl font-heading font-semibold text-text-primary mt-10">
            7. Changes to Terms
          </h2>
          <p>
            MixCast reserves the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-xl font-heading font-semibold text-text-primary mt-10">
            8. Contact
          </h2>
          <p>
            For questions about these Terms of Use, contact us at:{" "}
            <a href="mailto:info@mixcast.com" className="text-accent hover:text-accent-dim transition-colors">
              info@mixcast.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
