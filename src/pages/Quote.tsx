import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { SEOHead } from "@/components/SEOHead";
import { services } from "@/data/services";

const steps = ["Select Services", "Project Details", "Contact Info", "Confirmation"];

export default function Quote() {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({ location: "", budget: "", timeline: "", details: "", name: "", email: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (id: string) => {
    setSelectedServices(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    toast({ title: "Quote Request Submitted!", description: "Reference: RR-" + Math.random().toString(36).substring(2, 8).toUpperCase() });
  };

  if (isSubmitted) {
    return (
      <>
        <SEOHead title="Quote Submitted" description="Your quote request has been received." />
        <section className="min-h-screen flex items-center justify-center bg-background pt-20">
          <div className="container-custom text-center max-w-lg">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Quote Request Received!</h1>
            <p className="text-muted-foreground mb-2">Reference: <span className="font-mono font-bold">RR-{Math.random().toString(36).substring(2, 8).toUpperCase()}</span></p>
            <p className="text-muted-foreground mb-8">Our team will contact you within 24-48 hours.</p>
            <Link to="/"><Button className="accent-gradient text-accent-foreground">Back to Home</Button></Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEOHead title="Request a Quote" description="Get a free quote for your construction project." />

      <section className="relative pt-32 pb-12 hero-gradient bg-[url('/project-2.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        <div className="container-custom relative z-10">
          <Badge className="mb-4 bg-accent text-accent-foreground border-0">Free Quote</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Request a Quote</h1>
          <p className="text-primary-foreground/80">Complete the form below for a detailed estimate.</p>
        </div>
      </section>

      {/* Progress */}
      <div className="bg-secondary py-6 border-b">
        <div className="container-custom">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${i <= currentStep ? "accent-gradient text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
                  {i < currentStep ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span className={`hidden sm:block ml-2 text-sm ${i <= currentStep ? "font-medium" : "text-muted-foreground"}`}>{step}</span>
                {i < steps.length - 1 && <div className={`w-8 sm:w-16 h-0.5 mx-2 ${i < currentStep ? "bg-accent" : "bg-muted"}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-2xl">
          <Card className="border-0 card-elevated">
            <CardContent className="p-8">
              {currentStep === 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Select Service(s)</h2>
                  <div className="space-y-3">
                    {services.map((s) => (
                      <div key={s.id} onClick={() => toggleService(s.id)} className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${selectedServices.includes(s.id) ? "border-accent bg-accent/5" : "border-border hover:border-accent/50"}`}>
                        <Checkbox checked={selectedServices.includes(s.id)} />
                        <s.icon className="h-5 w-5 text-accent" />
                        <span className="font-medium">{s.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold mb-6">Project Details</h2>
                  <Input placeholder="Project Location" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
                  <Select value={formData.budget} onValueChange={(v) => setFormData({ ...formData, budget: v })}>
                    <SelectTrigger><SelectValue placeholder="Budget Range" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-500k">Under KES 500,000</SelectItem>
                      <SelectItem value="500k-1m">KES 500,000 - 1M</SelectItem>
                      <SelectItem value="1m-5m">KES 1M - 5M</SelectItem>
                      <SelectItem value="5m-10m">KES 5M - 10M</SelectItem>
                      <SelectItem value="over-10m">Over KES 10M</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={formData.timeline} onValueChange={(v) => setFormData({ ...formData, timeline: v })}>
                    <SelectTrigger><SelectValue placeholder="Preferred Timeline" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">As soon as possible</SelectItem>
                      <SelectItem value="1-3months">1-3 months</SelectItem>
                      <SelectItem value="3-6months">3-6 months</SelectItem>
                      <SelectItem value="6months+">6+ months</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Project details..." rows={4} value={formData.details} onChange={(e) => setFormData({ ...formData, details: e.target.value })} />
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <Input placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  <Input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Review & Submit</h2>
                  <div className="space-y-4 text-sm">
                    <div className="p-4 bg-muted rounded-lg"><p className="font-semibold mb-2">Services:</p><p className="text-muted-foreground">{selectedServices.map(id => services.find(s => s.id === id)?.shortTitle).join(", ") || "None selected"}</p></div>
                    <div className="p-4 bg-muted rounded-lg"><p className="font-semibold mb-2">Project:</p><p className="text-muted-foreground">{formData.location || "N/A"} • {formData.budget || "N/A"} • {formData.timeline || "N/A"}</p></div>
                    <div className="p-4 bg-muted rounded-lg"><p className="font-semibold mb-2">Contact:</p><p className="text-muted-foreground">{formData.name} • {formData.email} • {formData.phone}</p></div>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0}><ArrowLeft className="mr-2 h-4 w-4" />Back</Button>
                {currentStep < 3 ? (
                  <Button onClick={() => setCurrentStep(currentStep + 1)} disabled={currentStep === 0 && selectedServices.length === 0} className="accent-gradient text-accent-foreground">Next<ArrowRight className="ml-2 h-4 w-4" /></Button>
                ) : (
                  <Button onClick={handleSubmit} className="accent-gradient text-accent-foreground">Submit Request</Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
