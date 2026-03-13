import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@moitechnologies.com",
    href: "mailto:info@moitechnologies.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Bangalore, India",
    href: "#",
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setSent(true);
    setForm({ name: "", email: "", company: "", message: "" });
    setLoading(false);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 6,
    border: "1px solid #DDE2EC",
    background: "#fff",
    color: "#0a0a0a",
    fontSize: "0.9rem",
    fontFamily: "var(--font-body)",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.78rem",
    fontWeight: 600,
    color: "#444",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: "0.07em",
  };

  return (
    /* Light-grey section */
    <section id="contact" className="section-light" style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
            Contact Us
          </div>
          <h2
            className="display-heading"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#0a0a0a", marginBottom: "1rem" }}
          >
            Upgrade your existing home or{" "}
            <span className="text-accent-blue">future-proof</span> your upcoming home.
          </h2>
          <p style={{ fontSize: "1.0rem", color: "#555", maxWidth: 480, margin: "0 auto", lineHeight: 1.65 }}>
            Have a question or want to discuss your smart home project? We'd love to hear from you.
          </p>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 3fr",
            gap: "32px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: dark panel with contact info */}
          <div
            className="contact-left-panel"
            style={{
              padding: "40px 36px",
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            <div>
              <h3
                className="display-heading"
                style={{ fontSize: "1.4rem", color: "#fff", marginBottom: 8 }}
              >
                Get In Touch
              </h3>
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                Our team is ready to answer any questions and help you get started.
              </p>
            </div>

            {/* Horizontal divider */}
            <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />

            {/* Contact info items */}
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      background: "rgba(32,150,217,0.15)",
                      border: "1px solid rgba(32,150,217,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon style={{ width: 18, height: 18, color: "#2096D9" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                      {info.label}
                    </p>
                    <p style={{ fontSize: "0.9rem", color: "#fff", fontWeight: 500 }}>{info.value}</p>
                  </div>
                </a>
              );
            })}

            {/* Response time */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 4 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: "0.875rem", color: "#fff", fontWeight: 600 }}>We respond within 24h</p>
                <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)" }}>Average reply time: 2 hours</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="woz-card"
            style={{ padding: "40px 36px" }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#22c55e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <Send style={{ width: 22, height: 22, color: "#fff" }} />
                </div>
                <h3 className="display-heading" style={{ fontSize: "1.3rem", color: "#0a0a0a", marginBottom: 8 }}>
                  Message Sent!
                </h3>
                <p style={{ color: "#555", fontSize: "0.9rem" }}>
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={labelStyle}>Name <span style={{ color: "#2096D9" }}>*</span></label>
                    <input
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = "#2096D9")}
                      onBlur={e => (e.currentTarget.style.borderColor = "#DDE2EC")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email <span style={{ color: "#2096D9" }}>*</span></label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = "#2096D9")}
                      onBlur={e => (e.currentTarget.style.borderColor = "#DDE2EC")}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Company</label>
                  <input
                    placeholder="Your company (optional)"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = "#2096D9")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#DDE2EC")}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Message <span style={{ color: "#2096D9" }}>*</span></label>
                  <textarea
                    placeholder="Tell us about your project or question…"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "#2096D9")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#DDE2EC")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "0.85rem",
                    fontSize: "0.95rem",
                    opacity: loading ? 0.75 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin" style={{ width: 16, height: 16 }} viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>Send Message <Send style={{ width: 16, height: 16 }} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Responsive single-column on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
