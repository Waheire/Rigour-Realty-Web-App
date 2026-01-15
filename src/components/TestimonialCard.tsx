import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full border-0 bg-card card-elevated">
      <CardContent className="p-6 md:p-8">
        <Quote className="h-10 w-10 text-accent/30 mb-4" />
        <p className="text-foreground/90 leading-relaxed mb-6 italic">
          "{testimonial.quote}"
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-sm text-muted-foreground">
              {testimonial.role}
              {testimonial.company && `, ${testimonial.company}`}
            </p>
          </div>
          <div className="flex gap-0.5">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
