import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Clock, Users, FileCheck, Award, Building2, Wrench, Package, HeadphonesIcon, ChevronRight, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { SEOHead } from "@/components/SEOHead";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { services } from "@/data/services";
import { getFeaturedProjects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { TRUST_BADGES, WORK_PROCESS, WHY_CHOOSE_US } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Clock,
  Users,
  FileCheck,
  Award,
  Building2,
  Wrench,
  Package,
  HeadphonesIcon,
};

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <SEOHead
        title="Construction & Finishing Services"
        description="Rigour Realty Limited - Your trusted partner for quality construction, finishing, and design services across Kenya. Building excellence since 2009."
        keywords="construction Kenya, building contractor, interior finishing, cabro paving, bush stones, architectural drawing"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden bg-[url('/project-3.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />

        <div className="container-custom relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground animate-fade-in">
              <Badge className="mb-6 bg-accent text-accent-foreground border-0 text-sm px-4 py-1.5">
                Building Excellence Since 2009
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                Building Your{" "}
                <span className="text-gradient">Vision</span>{" "}
                Into Reality
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
                From architectural designs to premium finishing, we deliver comprehensive construction solutions with uncompromising quality and professionalism.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quote">
                  <Button size="lg" className="w-full sm:w-auto accent-gradient text-accent-foreground font-semibold text-lg px-8 hover:opacity-90">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white/40 text-white bg-transparent hover:bg-white/10 hover:border-white text-lg px-8"
                  >
                    View Projects
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image/Stats */}
            <div className="hidden lg:block relative">
              <div className="relative aspect-square max-w-md ml-auto">
                <div className="absolute inset-0 bg-accent/20 rounded-3xl rotate-6" />
                <div className="absolute inset-0 bg-card rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="/project-3.png"
                    alt="Rigour Realty construction project"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Stats */}
                <div className="absolute -left-8 top-1/4 bg-card rounded-2xl p-4 shadow-xl animate-float">
                  <p className="text-3xl font-bold text-accent">10+</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div className="absolute -right-4 bottom-1/4 bg-card rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
                  <p className="text-3xl font-bold text-accent">5+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-secondary border-y border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST_BADGES.map((badge, index) => {
              const Icon = iconMap[badge.icon];
              return (
                <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{badge.title}</p>
                    <p className="text-xs text-muted-foreground hidden sm:block">{badge.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From initial designs to final finishes, we offer end-to-end services for all your construction needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.id} className={`animate-fade-in stagger-${index + 1}`} style={{ opacity: 0 }}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Trusted Partner in Building Excellence
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With over 15 years of experience in the construction industry, we've built a reputation for quality workmanship, transparent communication, and reliable project delivery.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {WHY_CHOOSE_US.map((item, index) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/project-2.png"
                  alt="Rigour Realty team at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent rounded-2xl p-6 shadow-xl">
                <p className="text-4xl font-bold text-accent-foreground">100%</p>
                <p className="text-sm text-accent-foreground/80">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <Badge variant="outline" className="mb-4">Our Portfolio</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            </div>
            <Link to="/projects">
              <Button variant="outline">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="section-padding bg-primary text-primary-foreground bg-[url('/bg-1.png')] bg-cover bg-center">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground border-0">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Work
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              A streamlined process designed for transparency and efficiency from consultation to handover.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {WORK_PROCESS.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-primary-foreground/10 rounded-2xl p-6 h-full backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-full accent-gradient flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-accent-foreground">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{step.description}</p>
                </div>
                {index < WORK_PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with Rigour Realty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background ">
        <div className="container-custom">
          <Card className="border-0 bg-[url('/bg-1.png')] bg-cover bg-center text-primary-foreground overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-cover bg-center" />
            <CardContent className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Start Your Project?
                  </h2>
                  <p className="text-primary-foreground/80 mb-6 max-w-lg">
                    Get in touch with our team today for a free consultation and quote. Let's bring your vision to life.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/quote">
                      <Button size="lg" className="w-full sm:w-auto accent-gradient text-accent-foreground font-semibold hover:opacity-80  ">
                        Get a Free Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto border-white/40 text-white bg-transparent hover:bg-white/10 hover:border-white"
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="font-semibold text-lg mb-4">Quick Inquiry</h3>
                  <form className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                    />
                    <Button type="submit" className="w-full accent-gradient text-accent-foreground font-semibold">
                      Send Inquiry
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}