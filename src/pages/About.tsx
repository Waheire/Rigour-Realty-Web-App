import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Award, ShieldCheck, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";

const values = [
  {
    icon: ShieldCheck,
    title: "Quality",
    description: "We never compromise on the quality of materials or workmanship in any project.",
  },
  {
    icon: Users,
    title: "Integrity",
    description: "Honest communication and transparent pricing are the foundations of our business.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every detail, exceeding client expectations.",
  },
  {
    icon: Heart,
    title: "Commitment",
    description: "Dedicated to completing projects on time with full client satisfaction.",
  },
];

const team = [
  {
    name: "John Rigour",
    role: "Founder & CEO",
    image: "/placeholder.svg",
  },
  {
    name: "Mary Wanjiku",
    role: "Head of Operations",
    image: "/placeholder.svg",
  },
  {
    name: "Peter Omondi",
    role: "Lead Architect",
    image: "/placeholder.svg",
  },
  {
    name: "Grace Muthoni",
    role: "Project Manager",
    image: "/placeholder.svg",
  },
];

const certifications = [
  "National Construction Authority (NCA) Registered",
  "Kenya Bureau of Standards (KEBS) Compliant",
  "Environmental Impact Assessment Certified",
  "Occupational Safety and Health Compliant",
  "Professional Indemnity Insured",
  "Contractors All Risk (CAR) Insured",
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about Rigour Realty Limited - over 5 years of excellence in construction, finishing, and design services across Kenya."
        keywords="about Rigour Realty, construction company Kenya, building contractor history"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden bg-[url('/project-2.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-accent text-accent-foreground border-0">About Us</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Building Excellence Since 2009
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              For over 5 years, Rigour Realty Limited has been at the forefront of Kenya's construction industry, delivering exceptional projects that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/project-2.png"
                  alt="Rigour Realty history"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent rounded-2xl p-6 shadow-xl">
                <p className="text-4xl font-bold text-accent-foreground">2009</p>
                <p className="text-sm text-accent-foreground/80">Founded</p>
              </div>
            </div>

            <div>
              <Badge variant="outline" className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Humble Beginnings to Industry Leader
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Rigour Realty Limited was founded in 2009 with a simple vision: to provide quality construction services that Kenyans can trust and afford. Starting as a small team of dedicated craftsmen, we took on our first residential project in Nairobi with nothing but skill, determination, and an unwavering commitment to quality.
                </p>
                <p>
                  Over the years, we've grown from a local contractor to one of Kenya's most respected construction and finishing companies. Our portfolio now spans residential developments, commercial properties, institutional buildings, and specialized stone and paving works across the country.
                </p>
                <p>
                  Today, with over 500 completed projects and a team of skilled professionals, we continue to uphold the same values that guided our first project: quality, integrity, and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 card-elevated">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl accent-gradient flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver construction and finishing solutions of the highest quality, on time and within budget, while maintaining the highest standards of safety, professionalism, and environmental responsibility.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 card-elevated">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl accent-gradient flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be East Africa's most trusted and innovative construction partner, known for transforming visions into remarkable spaces that inspire and endure for generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Guides Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values define who we are and how we approach every project and relationship.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 card-elevated text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the Experts
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our success is built on the expertise and dedication of our talented team members.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="border-0 card-elevated overflow-hidden group">
                <div className="aspect-[3/4] bg-muted overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-5 text-center">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Standards & Certifications</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Licensed, Certified & Insured
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We maintain all necessary registrations, certifications, and insurance coverage to ensure your project is handled professionally and protected at every stage.
              </p>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="border-0 bg-primary text-primary-foreground p-6">
                    <Building2 className="h-8 w-8 mb-2 text-accent" />
                    <p className="text-3xl font-bold">5+</p>
                    <p className="text-sm text-primary-foreground/70">Projects Completed</p>
                  </Card>
                  <Card className="border-0 card-elevated p-6">
                    <p className="text-3xl font-bold text-accent">5+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </Card>
                </div>
                <div className="space-y-4 pt-8">
                  <Card className="border-0 card-elevated p-6">
                    <p className="text-3xl font-bold text-accent">20+</p>
                    <p className="text-sm text-muted-foreground">Team Members</p>
                  </Card>
                  <Card className="border-0 bg-accent text-accent-foreground p-6">
                    <p className="text-3xl font-bold">100%</p>
                    <p className="text-sm text-accent-foreground/80">Client Satisfaction</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground bg-[url('/bg-1.png')] bg-cover bg-center">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how Rigour Realty can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="accent-gradient text-accent-foreground font-semibold hover:scale-[1.02] transition-transform w-full sm:w-auto text-base px-8">
                Get a Free Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/40 text-white bg-transparent hover:bg-white/10 hover:border-white text-base px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
