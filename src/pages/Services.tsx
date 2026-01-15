import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <>
      <SEOHead
        title="Our Services"
        description="Comprehensive construction and finishing services including architectural drawing, building construction, interior finishing, bush stones, and cabro paving."
        keywords="construction services Kenya, architectural drawing, building contractor, interior finishing, cabro paving"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-gradient bg-[url('/project-2.png')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-accent text-accent-foreground border-0">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Complete Construction Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              From concept to completion, we offer comprehensive services to meet all your construction and finishing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <Link key={service.id} to={`/services/${service.slug}`} className="block">
                <div className="group bg-card rounded-2xl card-elevated border border-border/50 overflow-hidden hover:border-accent/30 transition-all duration-300">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="aspect-[4/3] md:aspect-auto bg-muted overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 rounded-xl accent-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="h-7 w-7 text-accent-foreground" />
                        </div>
                        <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.deliverables.slice(0, 4).map((item, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {item.split(" ").slice(0, 3).join(" ")}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-4">
                        <Button className="accent-gradient text-accent-foreground font-semibold">
                          Learn More
                        </Button>
                        <Link to="/quote">
                          <Button variant="outline">Get Quote</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation. Our experts will assess your needs and recommend the best solutions for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="accent-gradient text-accent-foreground font-semibold">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
