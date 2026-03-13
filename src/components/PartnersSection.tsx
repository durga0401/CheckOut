import { ArrowRight, Building2, Code2, Wrench } from "lucide-react";

const partnerTypes = [
  {
    icon: Building2,
    title: "Developers & Builders",
    description: "Integrate MOI smart solutions directly into new residential and commercial projects.",
  },
  {
    icon: Code2,
    title: "System Integrators",
    description: "Access our full API stack and certification program to offer white-label smart home installs.",
  },
  {
    icon: Wrench,
    title: "Architects & Designers",
    description: "Collaborate on blueprints that seamlessly embed intelligent automation from day one.",
  },
];

const partnerLogos = [
  "Oberoi Realty",
  "Bramhacorp",
  "Aparna Constructions",
];

const PartnersSection = () => {
  return (
    /* Dark section — Wozart alternates to black here */
    <section
      id="partners"
      className="section-dark"
      style={{ padding: "96px 0" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "5px 14px",
              borderRadius: 100,
              border: "1px solid rgba(32,150,217,0.35)",
              background: "rgba(32,150,217,0.1)",
              color: "#2096D9",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1.2rem",
            }}
          >
            Partnership Program
          </div>
          <h2
            className="display-heading"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#fff", marginBottom: "1rem" }}
          >
            Partner With{" "}
            <span className="text-accent-blue">MOI Technologies</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.6)", maxWidth: 540, margin: "0 auto", lineHeight: 1.65 }}>
            We collaborate with developers, architects, and system integrators to build the
            next generation of smart homes. Join our growing ecosystem and shape the future.
          </p>
        </div>

        {/* Partner type cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "64px",
          }}
        >
          {partnerTypes.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="woz-dark-card"
                style={{ padding: "32px 28px", textAlign: "center" }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <Icon style={{ width: 24, height: 24, color: "rgba(255,255,255,0.8)", strokeWidth: 1.5 }} />
                </div>
                <h3
                  className="display-heading"
                  style={{ fontSize: "1.05rem", color: "#fff", marginBottom: "10px", fontWeight: 700 }}
                >
                  {pt.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Project-Wide Solution Partners */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <h3
            className="display-heading"
            style={{ fontSize: "1.6rem", color: "#fff", marginBottom: "8px" }}
          >
            Project-Wide Solution Partners
          </h3>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)" }}>
            Trusted by India's leading builders and developers
          </p>
        </div>

        {/* Partner logos as styled text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "48px",
            flexWrap: "wrap",
            marginBottom: "56px",
          }}
        >
          {partnerLogos.map((name) => (
            <span
              key={name}
              className="display-heading"
              style={{
                fontSize: "1.15rem",
                color: "rgba(255,255,255,0.35)",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                transition: "color 0.2s",
                cursor: "default",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLSpanElement).style.color = "rgba(255,255,255,0.75)")}
              onMouseLeave={e => ((e.currentTarget as HTMLSpanElement).style.color = "rgba(255,255,255,0.35)")}
            >
              {name}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <a href="#contact" className="btn-primary" style={{ fontSize: "0.95rem", padding: "0.75rem 2rem" }}>
            Become a Partner <ArrowRight style={{ width: 16, height: 16 }} />
          </a>
          <a href="#contact" className="btn-outline-dark" style={{ fontSize: "0.95rem", padding: "0.75rem 2rem" }}>
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
