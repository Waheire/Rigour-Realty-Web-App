import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, Check, Clock, MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SEOHead } from "@/components/SEOHead";
import { ProjectCard } from "@/components/ProjectCard";
import { getServiceBySlug, services } from "@/data/services";
import { projects } from "@/data/projects";
import { COMPANY_INFO } from "@/lib/constants";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedProjects = projects
    .filter((p) => p.servicesUsed.includes(service.title))
    .slice(0, 3);

  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello!%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`;

  return (
    <>
      <SEOHead
        title={service.title}
        description={service.shortDescription}
        keywords={`${service.title}, construction services Kenya, ${service.shortTitle}`}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden bg-[url('/project-2.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />

        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/60 mb-6">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/services" className="hover:text-primary-foreground">Services</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary-foreground">{service.shortTitle}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-xl accent-gradient flex items-center justify-center mb-6">
              <service.icon className="h-8 w-8 text-accent-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              {service.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote">
                <Button size="lg" className="w-full sm:w-auto accent-gradient text-accent-foreground font-semibold hover:scale-[1.02] transition-transform text-base px-8">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground/30 hover:bg-primary-foreground/10 hover:scale-[1.02] transition-transform text-base px-8">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">What We Do</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {service.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.fullDescription}
              </p>
              <div className="flex items-center gap-3 p-4 bg-accent/10 rounded-lg">
                <Clock className="h-6 w-6 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold">Typical Timeline</p>
                  <p className="text-sm text-muted-foreground">{service.timeline}</p>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Deliverables</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You Get
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive service includes everything you need for a successful project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.deliverables.map((item, index) => (
              <Card key={index} className="border-0 card-elevated">
                <CardContent className="p-5 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach that ensures quality and efficiency at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <Card key={index} className="border-0 card-elevated">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full accent-gradient flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-accent-foreground">{index + 1}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.step}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials (if available) */}
      {service.materials && (
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <img
                  src={service.image}
                  alt="Materials and tools"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <Badge variant="outline" className="mb-4">Materials & Tools</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Quality Materials
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We use only quality materials from trusted suppliers to ensure durability and superior results.
                </p>
                <ul className="space-y-3">
                  {service.materials.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-accent" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Common Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card rounded-lg border-0 card-elevated px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <Badge variant="outline" className="mb-4">Our Work</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Related Projects</h2>
              </div>
              <Link to="/projects">
                <Button variant="outline">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-[url('/bg-1.png')] bg-cover bg-center text-primary-foreground">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-primary-foreground/70 mb-6">
                Contact us today for a free consultation and quote. Let's discuss your {service.shortTitle.toLowerCase()} project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quote">
                  <Button size="lg" className="w-full sm:w-auto accent-gradient text-accent-foreground font-semibold hover:scale-[1.02] transition-transform text-base px-8">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-transparent border-white/40 text-white hover:bg-white/10 hover:border-white hover:scale-[1.02] transition-all text-base px-8"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Other Services</h3>
              <div className="space-y-3 ">
                {otherServices.map((s) => (
                  <Link key={s.id} to={`/services/${s.slug}`}>
                    <div className="flex items-center justify-between p-4 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors mt-2">
                      <div className="flex items-center gap-3">
                        <s.icon className="h-5 w-5 text-accent" />
                        <span>{s.shortTitle}</span>
                      </div>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
