import { Cpu, Wifi, Home } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Smart Integration",
    description: "Works with Alexa, Google Home, and Apple HomeKit.",
  },
  {
    icon: Wifi,
    title: "Wireless Technology",
    description: "Easy installation without rewiring homes.",
  },
  {
    icon: Home,
    title: "Modern Smart Living",
    description: "Designed for future-ready automated homes.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
          Why Choose <span className="text-gradient">MOI Technologies?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
