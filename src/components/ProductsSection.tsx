import { ArrowRight, Star, Wifi, Cpu, Palette } from "lucide-react";
import productSwitch from "@/assets/product-smart-switch.png";
import productLedWhite from "@/assets/product-led-white.png";
import productLedRgb from "@/assets/product-led-rgb.png";

const products = [
  {
    name: "Two-Node Smart Switch",
    tagline: "Total Home Control",
    badge: "Best Seller",
    description:
      "A wireless smart switch designed for seamless control of lights and appliances. Compatible with all major smart assistants and home automation systems.",
    image: productSwitch,
    icon: Wifi,
    features: ["Voice Control", "Alexa & Google", "App Schedule"],
    rating: 4.9,
    reviews: 324,
    badgeColor: "#2096D9",
  },
  {
    name: "LED Controller – White Light",
    tagline: "Perfect Illumination",
    badge: "Popular",
    description:
      "Smart LED controller designed to control brightness and schedules for white LED lighting systems. Achieve perfect ambiance for any moment.",
    image: productLedWhite,
    icon: Cpu,
    features: ["Dimming", "Auto Schedule", "Energy Saving"],
    rating: 4.7,
    reviews: 218,
    badgeColor: "#17a5a0",
  },
  {
    name: "LED Controller – RGB",
    tagline: "Vivid Color Experience",
    badge: "New",
    description:
      "Advanced RGB lighting controller that allows users to customize colors, scenes, and ambience through a mobile app or voice assistant.",
    image: productLedRgb,
    icon: Palette,
    features: ["16M Colors", "Scene Modes", "Music Sync"],
    rating: 4.8,
    reviews: 176,
    badgeColor: "#8b5cf6",
  },
];

const ProductsSection = () => {
  return (
    /* Light section — Wozart style */
    <section
      id="products"
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
              background: "rgba(32,150,217,0.07)",
              color: "#2096D9",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1.2rem",
            }}
          >
            Our Lineup
          </div>
          <h2
            className="display-heading"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem", color: "#0a0a0a" }}
          >
            Smart Home{" "}
            <span className="text-gradient">Products</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#555", maxWidth: 500, margin: "0 auto", lineHeight: 1.6 }}>
            Precision-engineered devices that connect your world, intelligently.
          </p>
        </div>

        {/* Products grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              className="woz-card"
              style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
            >
              {/* Product image */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  background: "#f4f5f8",
                  overflow: "hidden",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
                />

                {/* Badge */}
                <span
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    padding: "4px 10px",
                    borderRadius: 4,
                    background: product.badgeColor,
                    color: "#fff",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  {product.badge}
                </span>

                {/* Rating */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 12,
                    right: 12,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "4px 10px",
                    background: "rgba(0,0,0,0.65)",
                    borderRadius: 5,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Star style={{ width: 12, height: 12, color: "#FDC54A", fill: "#FDC54A" }} />
                  <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#fff" }}>{product.rating}</span>
                  <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.65)" }}>({product.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#2096D9",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "6px",
                  }}
                >
                  {product.tagline}
                </p>
                <h3
                  className="display-heading"
                  style={{ fontSize: "1.2rem", color: "#0a0a0a", marginBottom: "10px" }}
                >
                  {product.name}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.65, flex: 1, marginBottom: "16px" }}>
                  {product.description}
                </p>

                {/* Feature tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "20px" }}>
                  {product.features.map((f) => (
                    <span
                      key={f}
                      style={{
                        padding: "4px 10px",
                        borderRadius: 4,
                        background: "#F0F2F7",
                        border: "1px solid #DEE2EC",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        color: "#444",
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="btn-primary"
                  style={{ justifyContent: "center", fontSize: "0.875rem" }}
                >
                  Learn More <ArrowRight style={{ width: 14, height: 14 }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
