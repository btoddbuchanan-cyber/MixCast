import ScrollReveal from "./ScrollReveal";

const streams = [
  {
    number: "01",
    title: "MixCast Innovation Center",
    description:
      "Productions walk in and immediately utilize our ready-to-use MixCast enabled studio in Los Angeles. 3 sizes of stage with 1, 2, or 3 camera setups.",
    rate: "~$60k/day",
    comparison: "vs $100–250k/day (LED Wall)",
    customers: "Local TV/Film, Commercials, Pitch Vis, Pre-Production",
  },
  {
    number: "02",
    title: "MixCast On-Location",
    description:
      "MixCast is available for worldwide on-location productions, suitable for both short and semi-long term projects. Rig size and scale customized to client needs.",
    rate: "$50k and under",
    comparison: "vs LED wall at 2–3x the cost",
    customers: "On-location TV/Film, Commercial Projects",
  },
  {
    number: "03",
    title: "MixCast Studio License",
    description:
      "Annual license for existing studios and stages. Complete flexibility to operate within your studio with training and on-site crew available.",
    rate: "$1M annual",
    comparison: "Target license pricing",
    customers: "Existing studio owners",
  },
];

const takeaways = [
  { label: "Asset Light", description: "Minimal capital-intensive infrastructure" },
  { label: "Superior Margins", description: "Software-driven revenue model" },
  { label: "Protected by Strong IP", description: "4 patents awarded" },
];

export default function Revenue() {
  return (
    <section
      id="revenue"
      className="relative py-32 px-6 lg:px-8 overflow-hidden"
      aria-labelledby="revenue-heading"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-accent text-xs font-semibold tracking-[0.4em] uppercase mb-3">
            Revenue Model
          </p>
          <h2
            id="revenue-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-text-primary tracking-tight leading-[1.05]"
          >
            Three revenue{" "}
            <span className="gradient-text">streams</span>
          </h2>
        </ScrollReveal>

        <div className="mt-16 space-y-6">
          {streams.map((stream, i) => (
            <ScrollReveal key={stream.title} delay={i * 0.12}>
              <div className="group relative p-8 rounded-lg bg-bg-secondary border border-border-subtle hover:border-border-accent transition-all duration-300">
                <div className="grid lg:grid-cols-[auto_1fr_auto] gap-6 items-start">
                  <span className="text-4xl font-heading font-bold text-text-primary/10">
                    {stream.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                      {stream.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-3">
                      {stream.description}
                    </p>
                    <p className="text-xs text-text-muted">
                      {stream.customers}
                    </p>
                  </div>
                  <div className="text-right lg:text-right">
                    <p className="text-2xl font-heading font-bold gradient-text">
                      {stream.rate}
                    </p>
                    <p className="text-xs text-text-muted mt-1">
                      {stream.comparison}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 grid sm:grid-cols-3 gap-6">
            {takeaways.map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-lg border border-accent/20 bg-accent/[0.03] text-center"
              >
                <p className="text-lg font-heading font-semibold text-accent mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
