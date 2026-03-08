import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-smart-home.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern smart home with automated lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          Smart Living. <span className="text-gradient">Simplified.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Advanced Smart Home Solutions by MOI Technologies.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" className="glow-box text-base px-8 py-6" asChild>
            <a href="#products">Explore Products</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
