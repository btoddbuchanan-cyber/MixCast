export default function Process() {
  return (
    <section id="process" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue/3 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-4">
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">
            OUR PROCESS
          </h2>
          <div className="h-0.5 w-32 bg-gradient-to-r from-cyan to-transparent mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 mt-16 items-center">
          <div>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
              We volumetrically sync real-world elements and 3D digital
              environments, enabling cameras and filmmakers to see and film
              both at the same time.
            </p>

            {/* Process steps */}
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Green Screen Capture",
                  desc: "Actors perform on a green screen stage with standard film equipment.",
                },
                {
                  step: "02",
                  title: "Volumetric Sync",
                  desc: "MixCast synchronizes camera position and movement with the 3D digital environment.",
                },
                {
                  step: "03",
                  title: "Real-Time Composite",
                  desc: "The final composited image is visible to the director and crew in real-time.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <span className="text-4xl font-bold text-cyan/20">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual representation */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-gradient-to-br from-gray-900 to-black">
              {/* Simulated split view */}
              <div className="absolute inset-0 flex">
                <div className="w-1/2 bg-gradient-to-br from-green-900/30 to-green-800/10 flex items-center justify-center border-r border-white/10">
                  <div className="text-center">
                    <div className="w-16 h-24 bg-white/10 rounded-lg mx-auto mb-2" />
                    <p className="text-xs text-green-400/60 uppercase tracking-wider">
                      Green Screen
                    </p>
                  </div>
                </div>
                <div className="w-1/2 bg-gradient-to-br from-blue/10 to-purple-900/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-24 bg-cyan/10 rounded-lg mx-auto mb-2 border border-cyan/20" />
                    <p className="text-xs text-cyan/60 uppercase tracking-wider">
                      Final Output
                    </p>
                  </div>
                </div>
              </div>
              {/* Center divider */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-cyan/30" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black border-2 border-cyan/50 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-cyan"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
