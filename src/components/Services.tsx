import { TrendingUp, Palette, Target, Code } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Marketing de Performance",
      description: "Estratégias data-driven que maximizam ROI e impulsionam crescimento sustentável através de análise profunda e otimização contínua.",
      features: ["Analytics Avançado", "Otimização de Conversão", "Growth Hacking"],
    },
    {
      icon: Palette,
      title: "Branding e Posicionamento",
      description: "Construímos identidades visuais memoráveis e estratégias de marca que destacam seu negócio em mercados competitivos.",
      features: ["Identidade Visual", "Estratégia de Marca", "Storytelling"],
    },
    {
      icon: Target,
      title: "Tráfego Pago",
      description: "Gestão especializada de campanhas em Meta Ads, Google Ads e LinkedIn Ads com foco em performance e resultados mensuráveis.",
      features: ["Meta Ads", "Google Ads", "LinkedIn Ads"],
    },
    {
      icon: Code,
      title: "Design e Desenvolvimento Web",
      description: "Sites e plataformas digitais de alta performance, responsivos e otimizados para conversão e experiência do usuário.",
      features: ["UX/UI Design", "Desenvolvimento", "Otimização SEO"],
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-semibold text-primary font-montserrat">NOSSOS SERVIÇOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-foreground mb-6">
            Soluções completas para seu <span className="text-primary">crescimento digital</span>
          </h2>
          <p className="text-lg text-muted-foreground font-lato">
            Combinamos estratégia, criatividade e tecnologia para entregar resultados excepcionais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="inline-flex p-4 bg-primary/10 rounded-lg mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold font-montserrat text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-lato mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full font-lato border border-primary/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                <span className="font-semibold font-montserrat text-sm">Saiba mais</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
