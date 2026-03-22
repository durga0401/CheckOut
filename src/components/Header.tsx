import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import MoiLogo from "./MoiLogo";

const navLinks = [
  { label: "Home", href: "#home" },
  {
    label: "Products",
    href: "#products",
    children: [
      { label: "Two-Node Smart Switch", href: "#products" },
      { label: "LED Controller – White Light", href: "#products" },
      { label: "LED Controller – RGB", href: "#products" },
    ],
  },
  { label: "Solutions", href: "#solutions" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ["home", "products", "solutions", "partners", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
        background: scrolled
          ? "rgba(8, 8, 12, 0.88)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(32, 150, 217, 0.12)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.35)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
          padding: "0 32px",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 4,
            transition: "transform 0.25s ease, filter 0.25s ease",
            filter: "drop-shadow(0 0 4px rgba(32,150,217,0.2))",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.transform = "scale(1.04)";
            el.style.filter = "drop-shadow(0 0 10px rgba(32,150,217,0.55)) drop-shadow(0 0 20px rgba(32,150,217,0.25))";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.transform = "scale(1)";
            el.style.filter = "drop-shadow(0 0 4px rgba(32,150,217,0.2))";
          }}
        >
          <MoiLogo />
          <span style={{
            fontFamily: "'Montserrat', 'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "0.72rem",
            color: "rgba(255,255,255,0.75)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            lineHeight: 1,
          }}>
            Technologies
          </span>
        </a>

        {/* Navigation */}
        <nav style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} style={{ position: "relative" }} className="nav-dropdown-group">
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "7px 15px",
                    borderRadius: 7,
                    background:
                      activeSection === link.href.replace("#", "")
                        ? "rgba(32,150,217,0.12)"
                        : "transparent",
                    border:
                      activeSection === link.href.replace("#", "")
                        ? "1px solid rgba(32,150,217,0.25)"
                        : "1px solid transparent",
                    cursor: "pointer",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color:
                      activeSection === link.href.replace("#", "")
                        ? "#2096D9"
                        : "rgba(255,255,255,0.72)",
                    transition: "all 0.2s ease",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== link.href.replace("#", "")) {
                      (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                      (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== link.href.replace("#", "")) {
                      (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.72)";
                      (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    }
                  }}
                >
                  {link.label}
                  <ChevronDown
                    size={13}
                    style={{ transition: "transform 0.25s ease" }}
                    className="nav-chevron"
                  />
                </button>

                {/* Dropdown */}
                <div className="nav-dropdown-menu">
                  <div
                    style={{
                      background: "rgba(10,10,15,0.97)",
                      backdropFilter: "blur(24px)",
                      border: "1px solid rgba(32,150,217,0.15)",
                      borderRadius: 10,
                      padding: "6px",
                      width: 230,
                      boxShadow: "0 20px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
                    }}
                  >
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "9px 12px",
                          borderRadius: 6,
                          fontSize: "0.845rem",
                          color: "rgba(255,255,255,0.68)",
                          textDecoration: "none",
                          transition: "all 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLAnchorElement;
                          el.style.color = "#fff";
                          el.style.background = "rgba(32,150,217,0.1)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLAnchorElement;
                          el.style.color = "rgba(255,255,255,0.68)";
                          el.style.background = "transparent";
                        }}
                      >
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "#2096D9",
                            flexShrink: 0,
                            opacity: 0.8,
                          }}
                        />
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                style={{
                  padding: "7px 15px",
                  borderRadius: 7,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color:
                    activeSection === link.href.replace("#", "")
                      ? "#2096D9"
                      : "rgba(255,255,255,0.72)",
                  textDecoration: "none",
                  background:
                    activeSection === link.href.replace("#", "")
                      ? "rgba(32,150,217,0.12)"
                      : "transparent",
                  border:
                    activeSection === link.href.replace("#", "")
                      ? "1px solid rgba(32,150,217,0.25)"
                      : "1px solid transparent",
                  transition: "all 0.2s ease",
                  letterSpacing: "0.01em",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== link.href.replace("#", "")) {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "#fff";
                    el.style.background = "rgba(255,255,255,0.06)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.href.replace("#", "")) {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "rgba(255,255,255,0.72)";
                    el.style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 20px",
            borderRadius: 8,
            background: "linear-gradient(135deg, #2096D9 0%, #1a7ab5 100%)",
            color: "#fff",
            fontSize: "0.875rem",
            fontWeight: 600,
            textDecoration: "none",
            letterSpacing: "0.01em",
            boxShadow: "0 0 0 1px rgba(32,150,217,0.4), 0 4px 16px rgba(32,150,217,0.25)",
            transition: "all 0.2s ease",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.transform = "translateY(-1px)";
            el.style.boxShadow = "0 0 0 1px rgba(32,150,217,0.6), 0 8px 24px rgba(32,150,217,0.35)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.transform = "translateY(0)";
            el.style.boxShadow = "0 0 0 1px rgba(32,150,217,0.4), 0 4px 16px rgba(32,150,217,0.25)";
          }}
        >
          Contact Us
        </a>
      </div>

      <style>{`
        .nav-dropdown-group:hover .nav-dropdown-menu {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }
        .nav-dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%) translateY(6px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          z-index: 100;
        }
        .nav-dropdown-group:hover .nav-chevron {
          transform: rotate(180deg);
        }
      `}</style>
    </header>
  );
};

export default Header;