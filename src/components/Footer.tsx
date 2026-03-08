import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-lg font-bold mb-3">
              MOI <span className="text-primary">Technologies</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Building the future of smart living.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3 text-sm">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Products", "Solutions", "Partners", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3 text-sm">Contact</h4>
            <a href="mailto:info@moitechnologies.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors flex items-center gap-2">
              <Mail size={14} /> info@moitechnologies.com
            </a>
            <div className="flex gap-4 mt-4">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} MOI Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
