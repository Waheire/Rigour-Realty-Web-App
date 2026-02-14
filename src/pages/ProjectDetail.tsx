import { useEffect, useRef, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Clock, ChevronRight, ChevronLeft, Quote, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import { ProjectCard } from "@/components/ProjectCard";
import { PhaseModal, type TimelinePhaseData } from "@/components/projects/PhaseModal";
import {
  getProjectBySlug,
  projects,
  categories,
  projectTimelinePhases,
  timelinePhaseFallbackImages,
  type ProjectPhaseImageKey,
} from "@/data/projects";

const projectProcess = [
  {
    title: "Consultation",
    description:
      "We align on vision, requirements, budget expectations, and site constraints before any design work begins.",
  },
  {
    title: "Design & Planning",
    description:
      "Architectural and technical planning is developed to guide approvals, sequencing, and execution quality.",
  },
  {
    title: "Costing",
    description:
      "A transparent cost breakdown is prepared, including materials, labor, timelines, and milestone estimates.",
  },
  {
    title: "Execution",
    description:
      "Construction and finishing are delivered in phases with active supervision and quality control checks.",
  },
  {
    title: "Handover",
    description:
      "Final inspections, snag resolution, and client walkthrough conclude the project with full handover.",
  },
] as const;

const PHASE_COUNT = projectProcess.length;

// Map display phase labels to data keys in `project.phaseImages`.
const phaseKeyMap: Record<(typeof projectProcess)[number]["title"], ProjectPhaseImageKey> = {
  Consultation: "consultation",
  "Design & Planning": "design",
  Costing: "costing",
  Execution: "execution",
  Handover: "handover",
};

const distributeImagesAcrossPhases = (images: string[], phaseCount: number) => {
  const cleanedImages = Array.from(new Set(images.filter(Boolean)));
  if (cleanedImages.length === 0) {
    return Array.from({ length: phaseCount }, (_, index) => [
      timelinePhaseFallbackImages[index] || "/placeholder.svg",
    ]);
  }

  const imagesPerPhase = Math.ceil(cleanedImages.length / phaseCount);

  return Array.from({ length: phaseCount }, (_, phaseIndex) => {
    const start = phaseIndex * imagesPerPhase;
    const end = start + imagesPerPhase;
    const phaseImages = cleanedImages.slice(start, end);

    return phaseImages.length > 0
      ? phaseImages
      : [timelinePhaseFallbackImages[phaseIndex] || cleanedImages[cleanedImages.length - 1] || "/placeholder.svg"];
  });
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");

  const categoryLabel = project
    ? categories.find((c) => c.value === project.category)?.label || project.category
    : "";

  const relatedProjects = project
    ? projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3)
    : [];

  const fallbackPhases = projectProcess.map((phase, index) => ({
    ...phase,
    image: timelinePhaseFallbackImages[index] || "/placeholder.svg",
  }));

  const baseTimelinePhases = (project
    ? projectTimelinePhases[project.slug] || projectProcess.map((phase, index) => {
      const imagePool = Array.from(new Set([...project.images, ...timelinePhaseFallbackImages]));
      return { ...phase, image: imagePool[index] || timelinePhaseFallbackImages[index] || "/placeholder.svg" };
    })
    : fallbackPhases
  );

  const phaseImageGroups = distributeImagesAcrossPhases(
    project ? Array.from(new Set([...project.images, ...baseTimelinePhases.map((phase) => phase.image)])) : [],
    PHASE_COUNT,
  );

  const timelinePhases: TimelinePhaseData[] = baseTimelinePhases.map((phase, index) => {
    const phaseKey = phaseKeyMap[phase.title];
    const configuredPhaseImages = project?.phaseImages?.[phaseKey]?.filter(Boolean) || [];
    const fallbackPhaseImages = phaseImageGroups[index] || [phase.image || "/placeholder.svg"];
    const resolvedPhaseImages = configuredPhaseImages.length > 0
      ? Array.from(new Set(configuredPhaseImages))
      : fallbackPhaseImages;
    const thumbnailImage =
      resolvedPhaseImages[0] ||
      project?.images[index] ||
      phase.image ||
      timelinePhaseFallbackImages[index] ||
      "/placeholder.svg";

    return {
      ...phase,
      image: thumbnailImage,
      images: resolvedPhaseImages,
      phaseNumber: String(index + 1).padStart(2, "0"),
    };
  });

  const phaseRefs = useRef<Array<HTMLElement | null>>([]);
  const [revealedPhases, setRevealedPhases] = useState<Record<number, boolean>>({});
  const [activePhase, setActivePhase] = useState(0);
  const [selectedPhase, setSelectedPhase] = useState<TimelinePhaseData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projectKey = project?.slug || slug || "project";

  const handlePhaseClick = (phase: TimelinePhaseData) => {
    if (phase.images.length === 0) return;
    setSelectedPhase(phase);
    setIsModalOpen(true);
  };

  useEffect(() => {
    setRevealedPhases({ 0: true });
    setActivePhase(0);
    setSelectedPhase(null);
    setIsModalOpen(false);
  }, [projectKey]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.phaseIndex);
          if (Number.isNaN(index)) return;
          setRevealedPhases((prev) => (prev[index] ? prev : { ...prev, [index]: true }));
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" },
    );

    phaseRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [timelinePhases.length, projectKey]);

  useEffect(() => {
    let rafId = 0;

    const updateActivePhase = () => {
      const viewportCenter = window.innerHeight * 0.4;
      let nextActive = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      phaseRefs.current.forEach((node, index) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          nextActive = index;
        }
      });

      setActivePhase((prev) => (prev === nextActive ? prev : nextActive));
    };

    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateActivePhase();
        rafId = 0;
      });
    };

    updateActivePhase();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [projectKey, timelinePhases.length]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

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

      {/* Project Timeline */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <Badge variant="outline" className="mb-4">Project Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From Start to Finish</h2>
            <p className="text-muted-foreground leading-relaxed">
              This project was delivered through our five-step process, giving the client full visibility from consultation to final handover.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-border/70 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-6 md:space-y-8">
              {timelinePhases.map((phase, index) => {
                const isLeft = index % 2 === 0;
                const isActive = activePhase === index;
                const isRevealed = Boolean(revealedPhases[index]);
                const revealClass = isRevealed
                  ? "opacity-100 translate-y-0 md:translate-x-0"
                  : isLeft
                    ? "opacity-0 translate-y-4 md:-translate-x-8"
                    : "opacity-0 translate-y-4 md:translate-x-8";

                return (
                  <article
                    key={phase.title}
                    ref={(node) => {
                      phaseRefs.current[index] = node;
                    }}
                    data-phase-index={index}
                    className="relative"
                  >
                    <span className={`absolute left-3 top-7 z-20 h-7 w-7 -translate-x-1/2 rounded-full border text-[10px] font-semibold flex items-center justify-center md:left-1/2 transition-all duration-300 ${
                      isActive
                        ? "border-accent bg-accent text-accent-foreground shadow-sm shadow-accent/35 scale-105"
                        : "border-accent/40 bg-accent/15 text-accent"
                    }`}>
                      {phase.phaseNumber}
                    </span>

                    <span
                      className={`hidden md:block absolute top-[2.05rem] h-px transition-colors duration-300 ${
                        isLeft ? "left-1/2 ml-4 w-12" : "right-1/2 mr-4 w-12"
                      } ${
                        isActive ? "bg-accent/75" : "bg-border/80"
                      }`}
                    />

                    <div className="grid md:grid-cols-2 md:gap-16">
                      <div
                        className={`pl-10 md:pl-0 ${
                          isLeft
                            ? "md:col-start-1 md:justify-self-end"
                            : "md:col-start-2 md:justify-self-start"
                        } transform transition-all duration-700 ease-out ${revealClass}`}
                      >
                        <button
                          type="button"
                          onClick={() => handlePhaseClick(phase)}
                          className="group block w-full max-w-lg text-left"
                          aria-label={`View ${phase.title} phase photos`}
                        >
                          <Card className={`w-full overflow-hidden rounded-xl border bg-card/80 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-accent/80 group-focus-visible:ring-offset-2 cursor-pointer ${
                            isActive
                              ? "border-accent/60 shadow-md shadow-accent/15"
                              : "border-border/70 shadow-sm"
                          }`}>
                            <div className="grid sm:grid-cols-[170px_1fr] gap-0">
                              <div className="relative aspect-[16/9] sm:aspect-auto bg-muted">
                                <img
                                  src={phase.image}
                                  alt={`${project.title} - ${phase.title}`}
                                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                                <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-medium text-foreground shadow-sm backdrop-blur-sm">
                                  <Images className="h-3.5 w-3.5" />
                                  View Photos
                                </span>
                              </div>

                              <CardContent className="p-4 flex flex-col justify-center">
                                <Badge
                                  variant={isActive ? "default" : "secondary"}
                                  className={`w-fit mb-2 text-[11px] px-2 py-0.5 transition-colors duration-300 ${
                                    isActive ? "bg-accent text-accent-foreground" : ""
                                  }`}
                                >
                                  Step {phase.phaseNumber}
                                </Badge>
                                <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                              </CardContent>
                            </div>
                          </Card>
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
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

      <PhaseModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        phase={selectedPhase}
        projectTitle={project.title}
      />
    </>
  );
}
