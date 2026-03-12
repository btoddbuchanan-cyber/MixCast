const team = [
  {
    name: "Tarrnie Williams",
    role: "COO & Founder",
    initials: "TW",
  },
  {
    name: "Sean McGowan",
    role: "CEO",
    initials: "SM",
  },
  {
    name: "Ben Sheftel",
    role: "CTO & Founder",
    initials: "BS",
  },
];

const logos = [
  "VIVE",
  "Pepsi",
  "Unity",
  "National Geographic",
  "Netflix",
  "Sony Pictures",
  "NBC",
  "Discovery",
  "EA Games",
  "Intel",
  "Relic",
  "Activision",
  "Magic Leap",
  "History",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">
            WHO WE ARE
          </h2>
          <div className="h-0.5 w-32 bg-gradient-to-r from-cyan to-transparent mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          <div>
            <p className="text-cyan text-lg mb-4 font-medium">NERDS</p>
            <p className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed">
              With a combined 60+ years of TV/Film & Video Game development
              experience
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-28 h-28 mx-auto mb-4 rounded-sm border border-cyan/30 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-2xl font-bold text-cyan/70">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry logos */}
        <div className="mt-20 pt-12 border-t border-white/5">
          <p className="text-xs text-gray-500 text-center mb-8 uppercase tracking-widest">
            Leadership has experience with top industry players
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-sm text-gray-500 font-medium tracking-wide"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
