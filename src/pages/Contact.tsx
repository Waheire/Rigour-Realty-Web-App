import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { SEOHead } from "@/components/SEOHead";
import { services } from "@/data/services";
import { COMPANY_INFO } from "@/lib/constants";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    }, 1500);
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Rigour%20Realty!`;

  return (
    <>
      <SEOHead title="Contact Us" description="Get in touch with Rigour Realty Limited for your construction needs." />

      <section className="relative pt-32 pb-20 hero-gradient bg-[url('/project-2.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        <div className="container-custom relative z-10">
          <Badge className="mb-6 bg-accent text-accent-foreground border-0">Contact Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Get In Touch</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">Ready to start your project? Contact us today.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="border-0 card-elevated">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input placeholder="Your Name" required />
                      <Input type="tel" placeholder="Phone Number" required />
                    </div>
                    <Input type="email" placeholder="Email Address" required />
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (<SelectItem key={s.id} value={s.id}>{s.title}</SelectItem>))}
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Your message..." rows={5} required />
                    <Button type="submit" className="w-full accent-gradient text-accent-foreground" disabled={isSubmitting}>
                      <Send className="mr-2 h-4 w-4" />{isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-0 card-elevated"><CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center"><Phone className="h-6 w-6 text-accent" /></div>
                <div><p className="font-semibold">Phone</p><a href={`tel:${COMPANY_INFO.phone}`} className="text-muted-foreground hover:text-accent">{COMPANY_INFO.phone}</a></div>
              </CardContent></Card>
              <Card className="border-0 card-elevated"><CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center"><Mail className="h-6 w-6 text-accent" /></div>
                <div><p className="font-semibold">Email</p><a href={`mailto:${COMPANY_INFO.email}`} className="text-muted-foreground hover:text-accent">{COMPANY_INFO.email}</a></div>
              </CardContent></Card>
              <Card className="border-0 card-elevated"><CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center"><MapPin className="h-6 w-6 text-accent" /></div>
                <div><p className="font-semibold">Location</p><p className="text-muted-foreground">{COMPANY_INFO.address}</p></div>
              </CardContent></Card>
              <Card className="border-0 card-elevated"><CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center"><Clock className="h-6 w-6 text-accent" /></div>
                <div><p className="font-semibold">Hours</p><p className="text-sm text-muted-foreground">Mon-Fri: {COMPANY_INFO.workingHours.weekdays}</p><p className="text-sm text-muted-foreground">Sat: {COMPANY_INFO.workingHours.saturday}</p></div>
              </CardContent></Card>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[#25D366] hover:bg-[#20BA5C] text-white mt-6"><MessageCircle className="mr-2 h-5 w-5" />Chat on WhatsApp</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
