import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown, Zap, Shield, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-smart-home.jpg";

const stats = [
  { value: "10K+", label: "Smart Homes" },
  { value: "50+", label: "Cities" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9★", label: "Rating" },
];

const floatingBadges = [
  { icon: Zap, text: "AI Powered", delay: "0s" },
  { icon: Shield, text: "Secure", delay: "1.5s" },
  { icon: Smartphone, text: "App Control", delay: "0.8s" },
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
}

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.8 + 0.4,
        alpha: Math.random() * 0.4 + 0.08,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(32, 150, 217, ${0.1 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(32, 150, 217, ${p.alpha})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="home"
      className="section-dark"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image with dark overlay */}
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src={heroImage}
          alt="Modern smart home"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(3,3,5,0.88) 0%, rgba(3,3,5,0.82) 60%, rgba(3,3,5,0.97) 100%)",
          }}
        />
      </div>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 860,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        {/* Eyebrow label */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 100,
            border: "1px solid rgba(32,150,217,0.35)",
            background: "rgba(32,150,217,0.1)",
            color: "#2096D9",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#2096D9",
              animation: "pulse 2s infinite",
            }}
          />
          Next-Gen Smart Home Platform
        </div>

        {/* H1 */}
        <h1
          className="display-heading"
          style={{
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            color: "#fff",
            marginBottom: "1.4rem",
          }}
        >
          Smart Living.{" "}
          <span className="text-accent-blue">Simplified.</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "rgba(255,255,255,0.65)",
            maxWidth: 560,
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
          }}
        >
          Advanced Smart Home Solutions by{" "}
          <span style={{ color: "#fff", fontWeight: 600 }}>MOI Technologies</span>.{" "}
          Control every corner of your home with intelligence and ease.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            marginBottom: "4.5rem",
          }}
        >
          <a href="#products" className="btn-primary" style={{ fontSize: "0.95rem", padding: "0.75rem 2rem" }}>
            Explore Products <ArrowRight style={{ width: 16, height: 16 }} />
          </a>
          <a href="#contact" className="btn-outline-dark" style={{ fontSize: "0.95rem", padding: "0.75rem 2rem" }}>
            Speak to an Expert
          </a>
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "inline-grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 10,
            overflow: "hidden",
            backdropFilter: "blur(12px)",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: "18px 28px",
                textAlign: "center",
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <div
                className="display-heading"
                style={{ fontSize: "1.5rem", color: "#2096D9", marginBottom: 2 }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#products"
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          color: "rgba(255,255,255,0.4)",
          textDecoration: "none",
          animation: "bounce 2s infinite",
        }}
      >
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
        <ChevronDown style={{ width: 18, height: 18 }} />
      </a>
    </section>
  );
};

export default HeroSection;
