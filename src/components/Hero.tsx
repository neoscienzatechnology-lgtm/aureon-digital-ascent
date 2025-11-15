import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-graphite to-background"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-card border border-primary/20 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-lato text-muted-foreground">Transformando visões em realidade digital</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-montserrat mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="text-foreground">Estrategicamente</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-gold-light to-primary">
              digital.
            </span>
          </h1>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-8 text-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Inovador por <span className="text-primary">essência.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-lato mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Criamos experiências e estratégias digitais que elevam marcas a novos patamares.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button
              onClick={() => scrollToSection("contato")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg group transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
            >
              Solicitar Proposta
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("portfolio")}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg transition-all duration-300"
            >
              Ver Cases
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border animate-fade-in" style={{ animationDelay: "1s" }}>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-montserrat text-primary mb-2">100+</div>
              <div className="text-sm md:text-base text-muted-foreground font-lato">Projetos Entregues</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-montserrat text-primary mb-2">50+</div>
              <div className="text-sm md:text-base text-muted-foreground font-lato">Clientes Ativos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-montserrat text-primary mb-2">5x</div>
              <div className="text-sm md:text-base text-muted-foreground font-lato">ROI Médio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
