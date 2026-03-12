const features = [
  "Full editorial and post viz data support",
  "Industry standard media handling",
  "Body and face performance capture",
  "Multi-cam pro-cinema capable",
  "Live Lens Data handling",
  "Layer exporting support",
  "Unreal Engine and Unity supported",
  "BlackMagic Design integration",
  "Optitrack Tracking integration",
  "Network functionality",
  "4K & 8K support at 60fps",
  "VR & AR supported",
];

const layers = [
  "Base Color",
  "Lens Data",
  "Velocity",
  "Face Tracking",
  "Material Properties",
  "Body Tracking",
  "Depth",
  "Prop Tracking",
  "Normals",
  "Camera Tracking",
  "Physical Layer",
  "Composite",
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-4">
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">
            TECHNICAL OVERVIEW
          </h2>
          <div className="h-0.5 w-32 bg-gradient-to-r from-cyan to-transparent mt-4" />
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* 35+ layers section */}
        <div className="mt-20">
          <div className="flex items-center gap-6 mb-8">
            <div className="text-center">
              <p className="text-5xl font-bold gradient-text">35+</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider mt-1">
                Layers
              </p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                Data Export
              </p>
            </div>
            <div className="h-16 w-px bg-white/10" />
            <p className="text-gray-400 text-sm max-w-md">
              Every frame exports comprehensive data layers for maximum
              flexibility in post-production.
            </p>
          </div>

          {/* Layer visualization */}
          <div className="flex flex-wrap gap-2">
            {layers.map((layer, i) => (
              <span
                key={layer}
                className="px-4 py-2 text-xs rounded-full border border-white/10 text-gray-400 hover:border-cyan/30 hover:text-cyan transition-colors"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {layer}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
