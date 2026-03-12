export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">
            <span className="text-blue">MIX</span>
            <span className="gradient-text">CAST</span>
          </span>
        </div>

        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MixCast Studios Inc. All rights
          reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="#about"
            className="text-sm text-gray-500 hover:text-cyan transition-colors"
          >
            About
          </a>
          <a
            href="#product"
            className="text-sm text-gray-500 hover:text-cyan transition-colors"
          >
            Product
          </a>
          <a
            href="#technology"
            className="text-sm text-gray-500 hover:text-cyan transition-colors"
          >
            Technology
          </a>
          <a
            href="#contact"
            className="text-sm text-gray-500 hover:text-cyan transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
