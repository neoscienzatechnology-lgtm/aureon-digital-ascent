import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, TrendingUp } from "lucide-react";

interface Case {
  id: number;
  title: string;
  category: string;
  description: string;
  results: string[];
  image: string;
}

const Portfolio = () => {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);

  const cases: Case[] = [
    {
      id: 1,
      title: "E-commerce Fashion Premium",
      category: "Tráfego Pago & Branding",
      description:
        "Transformação completa da presença digital de marca de moda premium, incluindo rebranding, desenvolvimento de e-commerce e estratégia de tráfego pago multicanal.",
      results: ["350% aumento em vendas online", "280% crescimento em engajamento", "ROI de 8:1 em campanhas pagas"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    },
    {
      id: 2,
      title: "Tech Startup SaaS",
      category: "Marketing de Performance",
      description:
        "Estratégia completa de growth marketing para startup B2B SaaS, incluindo funil de conversão, automação e otimização de leads qualificados.",
      results: ["500% aumento em MQLs", "45% redução em CAC", "120% crescimento em receita recorrente"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      id: 3,
      title: "Clínica Médica Premium",
      category: "Branding & Digital",
      description:
        "Reposicionamento de marca e desenvolvimento de ecossistema digital para clínica médica de alto padrão, incluindo site, app e estratégia de conteúdo.",
      results: ["200% aumento em agendamentos", "95% taxa de satisfação", "150% crescimento em base de pacientes"],
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80",
    },
    {
      id: 4,
      title: "Rede de Academias",
      category: "Performance Digital",
      description:
        "Estratégia omnichannel de marketing digital para rede de academias, incluindo app fitness, programa de fidelidade e campanhas geolocalizadas.",
      results: ["400% ROI em campanhas", "60% aumento em matrículas", "85% retenção de alunos"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-graphite relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-semibold text-primary font-montserrat">PORTFÓLIO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-foreground mb-6">
            Cases de <span className="text-primary">sucesso</span>
          </h2>
          <p className="text-lg text-muted-foreground font-lato">
            Resultados reais que transformaram negócios e superaram expectativas.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedCase(caseItem)}
            >
              <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded-full font-semibold font-montserrat">
                      {caseItem.category}
                    </span>
                  </div>

                  {/* View Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-2 bg-primary rounded-full">
                      <ExternalLink className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-montserrat text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {caseItem.title}
                  </h3>
                  <p className="text-muted-foreground font-lato mb-4 line-clamp-2">{caseItem.description}</p>

                  {/* Quick Results */}
                  <div className="flex items-center gap-2 text-primary">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold font-montserrat">Ver resultados completos</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Detail Modal */}
      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="max-w-3xl bg-card border-border">
          {selectedCase && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold font-montserrat text-foreground mb-2">
                  {selectedCase.title}
                </DialogTitle>
                <span className="inline-block px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-semibold font-montserrat w-fit">
                  {selectedCase.category}
                </span>
              </DialogHeader>
              <div className="mt-4">
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-muted-foreground font-lato mb-6 leading-relaxed">{selectedCase.description}</p>
                
                <h4 className="text-xl font-bold font-montserrat text-foreground mb-4">Resultados Alcançados</h4>
                <div className="space-y-3">
                  {selectedCase.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-primary/10 rounded">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground font-lato">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
