import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ImageCarousel } from "@/components/projects/ImageCarousel";

export interface TimelinePhaseData {
  phaseNumber: string;
  title: string;
  description: string;
  image: string;
  images: string[];
}

interface PhaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  phase: TimelinePhaseData | null;
  projectTitle: string;
}

export function PhaseModal({ open, onOpenChange, phase, projectTitle }: PhaseModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-h-[92vh] w-[96vw] max-w-5xl overflow-y-auto border-border/60 p-4 sm:p-6"
        aria-describedby="phase-modal-description"
      >
        {phase ? (
          <div className="space-y-5">
            <DialogHeader className="space-y-2 pr-8 text-left">
              <Badge className="w-fit bg-accent text-accent-foreground">Step {phase.phaseNumber}</Badge>
              <DialogTitle className="text-2xl font-bold">{phase.title}</DialogTitle>
              <DialogDescription id="phase-modal-description">{phase.description}</DialogDescription>
            </DialogHeader>

            <ImageCarousel
              images={phase.images}
              phaseTitle={phase.title}
              projectTitle={projectTitle}
            />
          </div>
        ) : (
          <p id="phase-modal-description" className="text-sm text-muted-foreground">
            No phase selected.
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}
