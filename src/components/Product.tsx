export default function Product() {
  return (
    <section
      id="product"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-4">
          <p className="text-4xl md:text-5xl font-light text-white tracking-tight">
            OUR PRODUCT
          </p>
          <h2 className="text-5xl md:text-7xl font-bold gradient-text mt-2">
            MIXCAST
          </h2>
          <div className="h-0.5 w-32 bg-gradient-to-r from-cyan to-transparent mt-4" />
        </div>

        <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mt-8 mb-16">
          A proprietary, world-class capture solution for the Film/TV
          industry, enabling filmmakers to film real people within 3D
          digital environments in real-time.
        </p>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="gradient-border rounded-xl p-8">
            <div className="w-12 h-12 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-cyan"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Real-Time Capture
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Film actors in digital environments instantly with no post
              compositing delay. What you see on set is the final frame.
            </p>
          </div>

          <div className="gradient-border rounded-xl p-8">
            <div className="w-12 h-12 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-cyan"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Green Screen + 3D
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Proprietary volumetric sync merges real-world elements with
              digital environments seamlessly.
            </p>
          </div>

          <div className="gradient-border rounded-xl p-8">
            <div className="w-12 h-12 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-cyan"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Cost Effective
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A fraction of the cost of LED wall volumes and traditional
              post-production VFX pipelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
