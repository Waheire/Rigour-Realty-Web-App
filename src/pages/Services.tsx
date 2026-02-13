import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
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
      <section className="relative overflow-hidden bg-background pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-[-8rem] h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-[-7rem] left-[-6rem] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-accent/15 text-accent border border-accent/30">Our Services</Badge>
            <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Build Better, Finish Stronger
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              A focused set of construction services, from drawings and execution to finishing and paving,
              delivered with practical planning and quality control.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/quote">
                <Button size="lg" className="accent-gradient text-accent-foreground font-semibold">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline">
                  See Completed Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">What We Offer</h2>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                Select a service to view scope, process, and delivery details.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:gap-7">
            {services.map((service, index) => (
              <article
                key={service.id}
                className="group overflow-hidden rounded-2xl border border-border/70 bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-lg"
              >
                <div className="grid gap-0 md:grid-cols-[280px_1fr]">
                  <Link
                    to={`/services/${service.slug}`}
                    className="relative block h-full min-h-[220px] overflow-hidden bg-muted"
                    aria-label={`View ${service.title} details`}
                  >
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                        No image available
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                  </Link>

                  <div className="flex flex-col justify-between p-5 md:p-7">
                    <div>
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg accent-gradient">
                          <service.icon className="h-5 w-5 text-accent-foreground" />
                        </div>
                        <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                      </div>

                      <h2 className="mb-2 text-xl font-bold md:text-2xl">
                        {service.title}
                      </h2>
                      <p className="mb-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                        {service.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.slice(0, 3).map((item, i) => (
                          <Badge key={i} variant="secondary" className="text-[11px]">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Link to={`/services/${service.slug}`}>
                        <Button className="min-w-[148px] accent-gradient text-accent-foreground font-semibold">
                          View Details
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link to="/quote">
                        <Button variant="outline" className="min-w-[148px]">
                          Request Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Choosing a Service?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We can review your goals, budget, and timeline, then recommend the most practical delivery plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="accent-gradient text-accent-foreground font-semibold">
                Book Consultation
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
