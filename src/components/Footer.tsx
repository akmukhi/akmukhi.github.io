import { portfolioConfig } from "@/config/portfolio";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-sm text-muted-foreground">
            Built with React & Tailwind CSS
          </p>
          
          <p className="font-mono text-sm text-muted-foreground">
            © {new Date().getFullYear()} {portfolioConfig.personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
