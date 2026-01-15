export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating: number;
  projectType: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Rigour Realty transformed our vision into a beautiful family home. Their attention to detail and commitment to quality exceeded our expectations at every turn.",
    author: "James Kamau",
    role: "Homeowner",
    rating: 5,
    projectType: "Residential Construction",
  },
  {
    id: "2",
    quote: "Professional, reliable, and incredibly skilled. The finishing work on our commercial property was immaculate. We've already contracted them for our next project.",
    author: "Sarah Wanjiku",
    role: "Property Developer",
    company: "Wanjiku Investments",
    rating: 5,
    projectType: "Commercial Finishing",
  },
  {
    id: "3",
    quote: "The bush stone boundary wall they built for our estate is a masterpiece. It's been three years and it still looks as stunning as the day it was completed.",
    author: "Michael Njoroge",
    role: "Estate Manager",
    company: "Njoroge Farms",
    rating: 5,
    projectType: "Bush Stone Construction",
  },
  {
    id: "4",
    quote: "Our driveway and parking area look absolutely premium. The cabro work was done efficiently with minimal disruption to our business operations.",
    author: "Grace Achieng",
    role: "Business Owner",
    company: "Achieng Medical Centre",
    rating: 5,
    projectType: "Cabro Paving",
  },
  {
    id: "5",
    quote: "The architectural drawings they provided were detailed, creative, and practical. The approval process was smooth thanks to their thorough documentation.",
    author: "David Omondi",
    role: "Project Investor",
    rating: 5,
    projectType: "Architectural Design",
  },
  {
    id: "6",
    quote: "What impressed me most was their transparency. Regular updates, clear timelines, and no hidden costs. A truly professional construction partner.",
    author: "Elizabeth Mutua",
    role: "Homeowner",
    rating: 5,
    projectType: "Full Construction",
  },
];
