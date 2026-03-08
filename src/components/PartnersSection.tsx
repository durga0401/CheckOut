import { Button } from "@/components/ui/button";

const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
          Partner With <span className="text-gradient">MOI Technologies</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          We collaborate with developers, architects, and system integrators to build the next generation of smart homes.
        </p>
        <Button size="lg" className="glow-box px-8 py-6 text-base">
          Become a Partner
        </Button>
      </div>
    </section>
  );
};

export default PartnersSection;
