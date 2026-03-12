const patents = [
  "Cinematography Via Immersive Computing Environment",
  "Self-Coordinating Camera Drone System",
  "Multi-Modal Data Fusion for Scene Segmentation",
  "Method And System For Chroma Keying",
];

export default function Patents() {
  return (
    <section id="patents" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue/3 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-4">
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">
            OUR PATENTS
          </h2>
          <div className="h-0.5 w-32 bg-gradient-to-r from-cyan to-transparent mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 mt-16 items-center">
          {/* Patent count */}
          <div className="flex justify-center">
            <div className="relative w-48 h-48 rounded-full border-4 border-cyan/30 flex items-center justify-center">
              <div className="absolute inset-2 rounded-full border border-white/10" />
              <div className="text-center">
                <p className="text-6xl font-bold text-white">4</p>
                <p className="text-sm font-bold text-cyan uppercase tracking-widest">
                  Patents
                </p>
                <p className="text-xs font-bold text-cyan/60 uppercase tracking-widest">
                  Awarded
                </p>
              </div>
            </div>
          </div>

          {/* Patent list */}
          <div className="space-y-6">
            {patents.map((patent, i) => (
              <div key={patent} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-cyan mt-2 shrink-0" />
                <p className="text-lg text-gray-300 font-light">{patent}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
