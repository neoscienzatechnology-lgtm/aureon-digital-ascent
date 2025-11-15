import { Target, Lightbulb, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Sempre à frente com as últimas tendências e tecnologias do mercado digital.",
    },
    {
      icon: TrendingUp,
      title: "Performance",
      description: "Resultados mensuráveis que impulsionam o crescimento do seu negócio.",
    },
    {
      icon: Target,
      title: "Exclusividade",
      description: "Soluções personalizadas que refletem a identidade única da sua marca.",
    },
    {
      icon: Shield,
      title: "Confiança",
      description: "Parceria sólida construída com transparência e comprometimento.",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-graphite relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-semibold text-primary font-montserrat">SOBRE A AUREON DIGITAL</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-foreground mb-6">
              Transformamos <span className="text-primary">ideias</span> em <span className="text-primary">resultados</span>
            </h2>

            <p className="text-lg text-muted-foreground font-lato mb-6 leading-relaxed">
              Somos uma agência de marketing digital premium especializada em criar experiências digitais que conectam marcas aos seus públicos de forma autêntica e impactante.
            </p>

            <p className="text-lg text-muted-foreground font-lato mb-8 leading-relaxed">
              Nossa missão é elevar negócios através de estratégias digitais inovadoras, design excepcional e execução impecável, sempre focando em resultados mensuráveis e crescimento sustentável.
            </p>

            <div className="flex gap-4">
              <div className="flex-1 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors duration-300">
                <div className="text-3xl font-bold text-primary font-montserrat mb-2">8+</div>
                <div className="text-sm text-muted-foreground font-lato">Anos de Experiência</div>
              </div>
              <div className="flex-1 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors duration-300">
                <div className="text-3xl font-bold text-primary font-montserrat mb-2">98%</div>
                <div className="text-sm text-muted-foreground font-lato">Satisfação dos Clientes</div>
              </div>
            </div>
          </div>

          {/* Right Side - Values */}
          <div className="grid gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-montserrat text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground font-lato leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
