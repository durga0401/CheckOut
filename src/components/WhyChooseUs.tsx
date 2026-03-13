import { Cpu, Wifi, Home, Shield, Zap, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Smart Integration",
    description:
      "Works seamlessly with Alexa, Google Home, Apple HomeKit, and 100+ third-party smart home platforms.",
  },
  {
    icon: Wifi,
    title: "Wireless Technology",
    description:
      "Effortless installation without rewiring. Our mesh network ensures complete coverage across every room.",
  },
  {
    icon: Home,
    title: "Modern Smart Living",
    description:
      "Designed for future-ready automated homes with an intuitive mobile app and voice control built-in.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade AES-256 encryption protects every device and data packet on your home network.",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description:
      "Sub-50ms latency for all commands. Real-time automation that responds precisely when you need it.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Expert Support",
    description:
      "Our dedicated support team helps you set up, troubleshoot, and upgrade — around the clock.",
  },
];

const WhyChooseUs = () => {
  return (
    /* Light section */
    <section
      id="solutions"
      className="section-light"
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
              border: "1px solid rgba(32,150,217,0.3)",
              background: "rgba(32,150,217,0.08)",
              color: "#2096D9",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1.2rem",
            }}
          >
            Why MOI
          </div>
          <h2
            className="display-heading"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#0a0a0a", marginBottom: "1rem" }}
          >
            Why Choose{" "}
            <span className="text-gradient">MOI Technologies?</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#555", maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>
            We combine cutting-edge hardware with intelligent software to create a living experience unlike any other.
          </p>
        </div>

        {/* Features grid — Wozart style: icon + title + desc, clean 3-col */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px 32px",
          }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} style={{ textAlign: "center", padding: "8px 16px" }}>
                {/* Icon */}
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 12,
                    background: "rgba(0,0,0,0.06)",
                    border: "1px solid rgba(0,0,0,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    transition: "background 0.2s",
                  }}
                >
                  <Icon style={{ width: 26, height: 26, color: "#1a1a1a", strokeWidth: 1.5 }} />
                </div>

                <h3
                  className="display-heading"
                  style={{
                    fontSize: "1.05rem",
                    color: "#0a0a0a",
                    marginBottom: "10px",
                    fontWeight: 700,
                  }}
                >
                  {feature.title}.
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#555",
                    lineHeight: 1.65,
                    maxWidth: 280,
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
