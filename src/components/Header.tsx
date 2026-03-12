import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        
        {/* Logo */}
        <a href="#" className="font-display text-xl font-bold tracking-tight text-foreground">
          MOI <span className="text-primary">Technologies</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          <a
            href="#home"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </a>

          {/* Products Dropdown */}
          <div className="relative group">
            <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Products
            </span>

            <div className="absolute hidden group-hover:block bg-card border border-border rounded-lg mt-2 w-56 shadow-lg">
              
              <a
                href="#products"
                className="block px-4 py-2 hover:bg-secondary transition-colors"
              >
                Two-Node Smart Switch
              </a>

              <a
                href="#products"
                className="block px-4 py-2 hover:bg-secondary transition-colors"
              >
                LED Controller – White Light
              </a>

              <a
                href="#products"
                className="block px-4 py-2 hover:bg-secondary transition-colors"
              >
                LED Controller – RGB
              </a>

            </div>
          </div>

          <a
            href="#solutions"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Solutions
          </a>

          <a
            href="#partners"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Partners
          </a>

          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>

        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Button size="sm" asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">

          <a
            href="#home"
            className="block py-2 text-sm text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </a>

          <a
            href="#products"
            className="block py-2 text-sm text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Products
          </a>

          <a
            href="#solutions"
            className="block py-2 text-sm text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Solutions
          </a>

          <a
            href="#partners"
            className="block py-2 text-sm text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Partners
          </a>

          <a
            href="#contact"
            className="block py-2 text-sm text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </a>

          <Button size="sm" className="mt-2 w-full" asChild>
            <a href="#contact">Contact Us</a>
          </Button>

        </div>
      )}
    </header>
  );
};

export default Header;