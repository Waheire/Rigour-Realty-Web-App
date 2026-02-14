import { useEffect, useMemo, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
  phaseTitle: string;
  projectTitle: string;
}

export function ImageCarousel({ images, phaseTitle, projectTitle }: ImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedByIndex, setLoadedByIndex] = useState<Record<number, boolean>>({});
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
  const imageCount = images.length;
  const hasMultipleImages = imageCount > 1;

  const activeImageCounter = useMemo(() => `${currentIndex + 1} / ${imageCount}`, [currentIndex, imageCount]);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
      setZoomedIndex(null);
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!api || !hasMultipleImages) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        api.scrollPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        api.scrollNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [api, hasMultipleImages]);

  if (imageCount === 0) {
    return (
      <div className="rounded-xl border border-border/70 bg-muted p-12 text-center text-sm text-muted-foreground">
        No photos are available for this phase yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Carousel
        setApi={setApi}
        opts={{ loop: hasMultipleImages, duration: 30 }}
        className="w-full"
        aria-label={`${phaseTitle} photo gallery`}
      >
        <CarouselContent className="ml-0">
          {images.map((image, index) => {
            const isLoaded = Boolean(loadedByIndex[index]);
            const isZoomed = zoomedIndex === index;

            return (
              <CarouselItem key={`${image}-${index}`} className="pl-0">
                <div className="relative overflow-hidden rounded-xl border border-border/70 bg-muted shadow-lg">
                  {!isLoaded && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-muted/80">
                      <span className="h-7 w-7 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => setZoomedIndex((prev) => (prev === index ? null : index))}
                    className="relative block w-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent/80 focus:ring-offset-2"
                    aria-label={isZoomed ? "Zoom out image" : "Zoom in image"}
                  >
                    <img
                      src={image}
                      alt={`${projectTitle} - ${phaseTitle} photo ${index + 1}`}
                      loading="lazy"
                      onLoad={() => setLoadedByIndex((prev) => ({ ...prev, [index]: true }))}
                      className={cn(
                        "h-[42vh] w-full object-cover transition-transform duration-300 sm:h-[56vh]",
                        isZoomed ? "scale-[1.3] cursor-zoom-out" : "cursor-zoom-in",
                      )}
                    />
                  </button>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {hasMultipleImages && (
          <>
            <Button
              type="button"
              size="icon"
              variant="secondary"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/85 backdrop-blur-sm hover:bg-background"
              onClick={() => api?.scrollPrev()}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              type="button"
              size="icon"
              variant="secondary"
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/85 backdrop-blur-sm hover:bg-background"
              onClick={() => api?.scrollNext()}
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}
      </Carousel>

      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {activeImageCounter}
        </p>

        {hasMultipleImages && (
          <div className="flex items-center gap-2" role="tablist" aria-label="Select carousel image">
            {images.map((_, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={`dot-${index}`}
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={isActive ? "true" : "false"}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/80 focus:ring-offset-2",
                    isActive ? "w-6 bg-accent" : "bg-muted-foreground/35 hover:bg-muted-foreground/50",
                  )}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
