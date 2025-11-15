import { Linkedin, Instagram, Facebook, ArrowUp } from "lucide-react";
import aureonLogo from "@/assets/aureon-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-graphite border-t border-border relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <img src={aureonLogo} alt="Aureon Digital" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground font-lato text-sm leading-relaxed">
              Estrategicamente digital. Inovador por essência.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold font-montserrat text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-muted-foreground hover:text-primary transition-colors font-lato text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-muted-foreground hover:text-primary transition-colors font-lato text-sm"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-muted-foreground hover:text-primary transition-colors font-lato text-sm"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-muted-foreground hover:text-primary transition-colors font-lato text-sm"
                >
                  Portfólio
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold font-montserrat text-foreground mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground font-lato text-sm">Marketing de Performance</li>
              <li className="text-muted-foreground font-lato text-sm">Branding</li>
              <li className="text-muted-foreground font-lato text-sm">Tráfego Pago</li>
              <li className="text-muted-foreground font-lato text-sm">Design & Desenvolvimento</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold font-montserrat text-foreground mb-4">Contato</h3>
            <ul className="space-y-2 mb-4">
              <li>
                <a
                  href="mailto:contato@aureondigital.com"
                  className="text-muted-foreground hover:text-primary transition-colors font-lato text-sm"
                >
                  contato@aureondigital.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5511999999999"
                  className="text-muted-foreground hover:text-primary transition-colors font-lato text-sm"
                >
                  +55 (11) 99999-9999
                </a>
              </li>
              <li className="text-muted-foreground font-lato text-sm">São Paulo, Brasil</li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/aureondigital"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://instagram.com/aureondigital"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://facebook.com/aureondigital"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground font-lato text-sm">
            © 2025 Aureon Digital. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-lato text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-lato text-sm">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-110 z-50"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;
