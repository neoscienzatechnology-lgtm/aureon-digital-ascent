import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-semibold text-primary font-montserrat">ENTRE EM CONTATO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-foreground mb-6">
            Vamos transformar sua <span className="text-primary">visão</span> em realidade
          </h2>
          <p className="text-lg text-muted-foreground font-lato">
            Solicite uma proposta personalizada e descubra como podemos impulsionar seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2 font-montserrat">
                  Nome Completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-card border-border focus:border-primary transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2 font-montserrat">
                  E-mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-card border-border focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2 font-montserrat">
                  Telefone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-card border-border focus:border-primary transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2 font-montserrat">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-card border-border focus:border-primary transition-colors min-h-[150px]"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 text-lg group transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-montserrat text-foreground mb-1">E-mail</h3>
                    <a
                      href="mailto:contato@aureondigital.com"
                      className="text-muted-foreground hover:text-primary transition-colors font-lato"
                    >
                      contato@aureondigital.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-montserrat text-foreground mb-1">Telefone</h3>
                    <a
                      href="tel:+5511999999999"
                      className="text-muted-foreground hover:text-primary transition-colors font-lato"
                    >
                      +55 (11) 99999-9999
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-montserrat text-foreground mb-1">Localização</h3>
                    <p className="text-muted-foreground font-lato">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="font-semibold font-montserrat text-foreground mb-4">Siga-nos nas redes sociais</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/company/aureondigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://instagram.com/aureondigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://facebook.com/aureondigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* CTA Box */}
            <div className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-lg">
              <h3 className="font-bold font-montserrat text-foreground text-xl mb-2">Pronto para começar?</h3>
              <p className="text-muted-foreground font-lato mb-4">
                Agende uma consultoria gratuita e descubra como podemos ajudar seu negócio a crescer.
              </p>
              <div className="inline-flex items-center gap-2 text-primary font-semibold">
                <span className="font-montserrat">Resposta em até 24h</span>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
