import { Mail, Linkedin, Twitter, Instagram, Github, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Products: [
    "Two-Node Smart Switch",
    "LED Controller – White",
    "LED Controller – RGB",
  ],
  Company: ["About Us", "Careers", "Blog", "Press"],
  Support: ["Documentation", "Help Center", "Status", "Community"],
};

const socials = [
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Github, href: "#", label: "GitHub" },
];

const Footer = () => {
  return (
    <footer
      className="section-dark"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "72px 0 32px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "56px",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            {/* Logo */}
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 20 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  background: "rgba(32,150,217,0.15)",
                  border: "1.5px solid rgba(32,150,217,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: 14, height: 14, borderRadius: 4, background: "#2096D9" }} />
              </div>
              <span
                className="display-heading"
                style={{ fontSize: "1.1rem", color: "#fff", fontWeight: 800 }}
              >
                MOI <span className="text-accent-blue">Technologies</span>
              </span>
            </a>

            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 280, marginBottom: 24 }}>
              Building the future of smart living — one connected home at a time.
              Headquartered in Bangalore, serving homes across India.
            </p>

            {/* Email */}
            <a
              href="mailto:info@moitechnologies.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 14px",
                borderRadius: 6,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                marginBottom: 24,
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(32,150,217,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)";
              }}
            >
              <Mail style={{ width: 14, height: 14, color: "#2096D9" }} />
              info@moitechnologies.com
              <ArrowUpRight style={{ width: 12, height: 12, opacity: 0.5 }} />
            </a>

            {/* Socials */}
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 6,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(32,150,217,0.4)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#2096D9";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="display-heading"
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.9)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "20px",
                }}
              >
                {category}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: "0.875rem",
                        color: "rgba(255,255,255,0.45)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                      onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 28 }} />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} MOI Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.35)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
