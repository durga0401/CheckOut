import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Homeowner, Pune",
    avatar: "RM",
    rating: 5,
    text: "MOI's smart switches completely transformed our home. Setting up voice control was effortless, and the app is incredibly intuitive. Best investment we've made.",
    avatarBg: "#2096D9",
  },
  {
    name: "Priya Sharma",
    role: "Interior Designer, Mumbai",
    avatar: "PS",
    rating: 5,
    text: "I recommend MOI Technologies to all my clients. The RGB LED controllers pair beautifully with any interior design and the color accuracy is phenomenal.",
    avatarBg: "#8b5cf6",
  },
  {
    name: "Aditya Nair",
    role: "Property Developer, Bengaluru",
    avatar: "AN",
    rating: 5,
    text: "We integrated MOI systems into our entire residential complex. The partnership program was seamless and support was exceptional throughout. Highly recommended.",
    avatarBg: "#17a5a0",
  },
];

const TestimonialsSection = () => {
  return (
    /* Light section */
    <section className="section-light" style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h2
            className="display-heading"
            style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", color: "#0a0a0a", marginBottom: "12px" }}
          >
            People Talk
          </h2>
          <p style={{ fontSize: "1rem", color: "#2096D9", marginBottom: 4 }}>
            They all loved the #MOIExperience.
          </p>
          <p style={{ fontSize: "0.95rem", color: "#2096D9" }}>
            Take a moment to read reviews from our satisfied customers.
          </p>
        </div>

        {/* Rating header row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "28px",
            flexWrap: "wrap",
            gap: 12,
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              className="display-heading"
              style={{ fontSize: "1.2rem", color: "#0a0a0a" }}
            >
              Google Reviews
            </span>
            <span
              className="display-heading"
              style={{ fontSize: "1.5rem", color: "#0a0a0a", marginLeft: 8 }}
            >
              4.9
            </span>
            <div style={{ display: "flex", gap: 3 }}>
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} style={{ width: 18, height: 18, color: "#FDC54A", fill: "#FDC54A" }} />
              ))}
            </div>
          </div>
          <a
            href="#"
            className="btn-primary"
            style={{ fontSize: "0.85rem", padding: "0.55rem 1.4rem" }}
          >
            Review us on Google
          </a>
        </div>

        {/* Testimonial cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="woz-card"
              style={{ padding: "28px", display: "flex", flexDirection: "column", gap: 16 }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 3 }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} style={{ width: 16, height: 16, color: "#FDC54A", fill: "#FDC54A" }} />
                ))}
              </div>

              {/* Review text */}
              <p style={{ fontSize: "0.9rem", color: "#333", lineHeight: 1.65, flex: 1 }}>
                {t.text}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {/* Avatar */}
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: t.avatarBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#fff" }}>{t.avatar}</span>
                </div>
                <div>
                  <p className="display-heading" style={{ fontSize: "0.9rem", color: "#0a0a0a", fontWeight: 700 }}>{t.name}</p>
                  <p style={{ fontSize: "0.78rem", color: "#777" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
