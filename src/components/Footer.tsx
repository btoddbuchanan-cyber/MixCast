const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#product", label: "Product" },
  { href: "#technology", label: "Technology" },
  { href: "#patents", label: "Patents" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-border-subtle py-16 px-6 lg:px-8"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div>
            <a href="#" aria-label="MixCast Studios home">
              <span className="text-xl font-heading font-bold tracking-tight">
                <span className="text-brand-blue">MIX</span>
                <span className="gradient-text">CAST</span>
              </span>
            </a>
            <p className="text-sm text-text-muted mt-3 max-w-xs leading-relaxed">
              Next generation virtual production. Enabling filmmakers to
              capture real actors inside 3D digital environments in real-time.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="text-xs text-text-muted uppercase tracking-[0.3em] mb-4 font-semibold">
              Navigation
            </p>
            <ul className="space-y-2" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs text-text-muted uppercase tracking-[0.3em] mb-4 font-semibold">
              Contact
            </p>
            <a
              href="mailto:info@mixcast.com"
              className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
            >
              info@mixcast.com
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} MixCast Studios Inc. All rights
            reserved.
          </p>
          <p className="text-xs text-text-muted">
            4 Patents Awarded &middot; Vancouver, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
