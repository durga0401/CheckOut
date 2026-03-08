import { Button } from "@/components/ui/button";
import productSwitch from "@/assets/product-smart-switch.png";
import productLedWhite from "@/assets/product-led-white.png";
import productLedRgb from "@/assets/product-led-rgb.png";

const products = [
  {
    name: "Two-Node Smart Switch",
    description: "A wireless smart switch designed for seamless control of lights and appliances. Compatible with smart assistants and modern home automation systems.",
    image: productSwitch,
  },
  {
    name: "LED Controller – White Light",
    description: "Smart LED controller designed to control brightness and schedules for white LED lighting systems.",
    image: productLedWhite,
  },
  {
    name: "LED Controller – RGB",
    description: "Advanced RGB lighting controller that allows users to customize colors, scenes, and ambience through a mobile app or voice assistant.",
    image: productLedRgb,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
          Our Smart Home <span className="text-gradient">Products</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:glow-box"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{product.description}</p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
