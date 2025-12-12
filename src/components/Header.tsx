import { useState, useEffect } from "react";
import { portfolioConfig } from "@/config/portfolio";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const initials = `${portfolioConfig.personal.firstName[0]}${portfolioConfig.personal.lastName[0]}`.toLowerCase();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-lg font-semibold text-foreground">
          {initials}<span className="text-primary">.</span>
        </a>
        
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="font-mono text-sm text-primary hover:text-primary/80 transition-colors"
        >
          Let's talk →
        </a>
      </nav>
    </header>
  );
};

export default Header;
