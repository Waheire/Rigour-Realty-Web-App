import { Link } from "react-router-dom";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project, categories } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const categoryLabel = categories.find((c) => c.value === project.category)?.label || project.category;

  return (
    <Link to={`/projects/${project.slug}`}>
      <Card className="group h-full card-elevated border-0 overflow-hidden">
        <div className="relative aspect-[4/3] bg-muted overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge className="absolute top-4 left-4 accent-gradient text-accent-foreground border-0">
            {categoryLabel}
          </Badge>
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <ArrowRight className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors line-clamp-1">
            {project.title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {project.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {project.duration}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
