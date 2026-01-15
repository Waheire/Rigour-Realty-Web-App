import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Clock, ChevronRight, ChevronLeft, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjectBySlug, projects, categories } from "@/data/projects";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const categoryLabel = categories.find((c) => c.value === project.category)?.label || project.category;

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.description}
        keywords={`${project.title}, ${categoryLabel}, construction project Kenya`}
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
            <Link to="/projects" className="hover:text-primary-foreground">Projects</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary-foreground">{project.title}</span>
          </nav>

          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent text-accent-foreground border-0">{categoryLabel}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {project.location}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {project.duration}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Completed {project.completedDate}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="aspect-[16/9] md:aspect-auto rounded-xl overflow-hidden shadow-lg bg-muted">
                <img
                  src={project.images[0]}
                  alt={`${project.title} - View 2`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/9] md:aspect-auto rounded-xl overflow-hidden shadow-lg bg-muted">
                <img
                  src={project.images[0]}
                  alt={`${project.title} - View 3`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {project.description}
              </p>

              <h3 className="text-xl font-bold mb-4">Project Scope</h3>
              <ul className="space-y-2 mb-8">
                {project.scope.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-4">Results</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.results}
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-0 card-elevated">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold">{project.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold">{project.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Completed</p>
                      <p className="font-semibold">{project.completedDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Category</p>
                      <Badge>{categoryLabel}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 card-elevated">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Services Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.servicesUsed.map((service, index) => (
                      <Badge key={index} variant="secondary">{service}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Link to="/quote">
                <Button className="w-full accent-gradient text-accent-foreground font-semibold mt-4">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <Quote className="h-12 w-12 text-accent mx-auto mb-6" />
              <p className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                "{project.testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-lg">{project.testimonial.author}</p>
                <p className="text-primary-foreground/70">{project.testimonial.role}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <Badge variant="outline" className="mb-4">More Projects</Badge>
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
              {relatedProjects.map((proj) => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-8 bg-secondary border-t">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <Link to="/projects">
              <Button variant="ghost">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
            <Link to="/quote">
              <Button className="accent-gradient text-accent-foreground mt-2">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
