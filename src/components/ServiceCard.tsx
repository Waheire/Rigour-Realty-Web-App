import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "compact";
}

export function ServiceCard({ service, variant = "default" }: ServiceCardProps) {
  const Icon = service.icon;

  if (variant === "compact") {
    return (
      <Link to={`/services/${service.slug}`}>
        <Card className="group h-full card-elevated border-0 bg-card hover:border-accent/20 transition-all duration-300">
          <CardContent className="p-6">
            <div className="w-12 h-12 rounded-xl accent-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
              {service.shortTitle}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {service.shortDescription}
            </p>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/services/${service.slug}`}>
      <Card className="group h-full card-elevated border-0 bg-card overflow-hidden">
        <CardContent className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-4">
            <div className="w-14 h-14 rounded-xl accent-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon className="h-7 w-7 text-accent-foreground" />
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
          </div>
          
          <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors">
            {service.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {service.shortDescription}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {service.deliverables.slice(0, 3).map((item, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {item.split(" ").slice(0, 2).join(" ")}
              </Badge>
            ))}
            {service.deliverables.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{service.deliverables.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
