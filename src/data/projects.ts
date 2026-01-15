export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "construction" | "finishing" | "bush-stones" | "cabro" | "drawing";
  location: string;
  duration: string;
  completedDate: string;
  description: string;
  scope: string[];
  servicesUsed: string[];
  results: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  images: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "nakuru-family-residence",
    title: "Nakuru Family Residence",
    category: "construction",
    location: "Nakuru, Kenya",
    duration: "8 months",
    completedDate: "December 2024",
    description: "A stunning 4-bedroom family home featuring modern architectural design with traditional Kenyan influences. The property includes spacious living areas, a home office, and beautifully landscaped gardens.",
    scope: [
      "Complete architectural design",
      "Foundation to roof construction",
      "Interior and exterior finishing",
      "Landscaping and driveway paving",
    ],
    servicesUsed: ["Architectural & Structural Drawing", "Building & Construction", "Interior & Exterior Finishing", "Cabro Paving"],
    results: "Delivered a beautiful family home 2 weeks ahead of schedule, featuring energy-efficient design elements and premium finishes that exceeded client expectations.",
    testimonial: {
      quote: "Rigour Realty transformed our dream home into reality. Their attention to detail and professionalism throughout the project was exceptional.",
      author: "James Kamau",
      role: "Homeowner",
    },
    images: ["/placeholder.svg"],
    featured: true,
  },
  {
    id: "2",
    slug: "eldoret-commercial-plaza",
    title: "Eldoret Commercial Plaza",
    category: "construction",
    location: "Eldoret, Kenya",
    duration: "14 months",
    completedDate: "October 2024",
    description: "A modern 3-story commercial plaza featuring retail spaces on the ground floor and office suites on upper levels. The building incorporates sustainable design principles and smart building technology.",
    scope: [
      "Full architectural and structural design",
      "Commercial construction",
      "Modern interior finishing",
      "Parking lot paving",
    ],
    servicesUsed: ["Architectural & Structural Drawing", "Building & Construction", "Cabro Paving"],
    results: "Created a landmark commercial property now fully occupied, providing modern spaces for 12 businesses and generating significant returns for the investor.",
    testimonial: {
      quote: "The quality of construction and timely delivery made this investment a success. Rigour Realty is now our go-to contractor.",
      author: "Sarah Wanjiku",
      role: "Property Developer",
    },
    images: ["/placeholder.svg"],
    featured: true,
  },
  {
    id: "3",
    slug: "kisumu-lakeside-villa",
    title: "Kisumu Lakeside Villa",
    category: "finishing",
    location: "Kisumu, Kenya",
    duration: "3 months",
    completedDate: "November 2024",
    description: "Complete interior renovation of a lakeside villa, featuring luxury finishes, custom ceiling designs, and a cohesive color palette inspired by the natural surroundings.",
    scope: [
      "Full interior plastering and painting",
      "Custom gypsum ceiling installation",
      "Premium tile installation throughout",
      "Decorative wall features",
    ],
    servicesUsed: ["Interior & Exterior Finishing"],
    results: "Transformed a dated property into a stunning modern villa, increasing property value by an estimated 40%.",
    testimonial: {
      quote: "The finishing work was flawless. Every detail was executed with precision and care.",
      author: "Dr. Peter Otieno",
      role: "Property Owner",
    },
    images: ["/placeholder.svg"],
    featured: true,
  },
  {
    id: "4",
    slug: "naivasha-farm-house",
    title: "Naivasha Farm House",
    category: "bush-stones",
    location: "Naivasha, Kenya",
    duration: "6 months",
    completedDate: "September 2024",
    description: "A rustic farmhouse built primarily with locally-sourced bush stones, featuring exposed stone walls, wooden beams, and panoramic views of the surrounding farmland.",
    scope: [
      "Bush stone foundation",
      "Natural stone wall construction",
      "Mixed stone and timber design",
      "Natural stone landscaping",
    ],
    servicesUsed: ["Architectural & Structural Drawing", "Building with Bush Stones", "Interior & Exterior Finishing"],
    results: "Created a unique heritage property that blends seamlessly with the natural landscape while providing modern comforts and durability.",
    testimonial: {
      quote: "The bush stone construction gives our home character that money cannot buy elsewhere. Truly exceptional craftsmanship.",
      author: "Michael Njoroge",
      role: "Farm Owner",
    },
    images: ["/placeholder.svg"],
    featured: true,
  },
  {
    id: "5",
    slug: "thika-industrial-yard",
    title: "Thika Industrial Yard",
    category: "cabro",
    location: "Thika, Kenya",
    duration: "5 weeks",
    completedDate: "August 2024",
    description: "Heavy-duty cabro paving for an industrial yard designed to handle truck traffic and equipment movement. Includes proper drainage systems and clearly marked zones.",
    scope: [
      "Industrial-grade paver installation",
      "Heavy-duty sub-base preparation",
      "Integrated drainage system",
      "Line marking and zoning",
    ],
    servicesUsed: ["Cabro Paving"],
    results: "Delivered a durable yard surface that has withstood heavy daily use with zero maintenance issues since completion.",
    testimonial: {
      quote: "Our trucks run over these pavers daily and they still look brand new. Excellent durability.",
      author: "John Mwangi",
      role: "Factory Manager",
    },
    images: ["/placeholder.svg"],
    featured: true,
  },
  {
    id: "6",
    slug: "karen-residential-estate",
    title: "Karen Residential Estate",
    category: "drawing",
    location: "Karen, Nairobi",
    duration: "2 months",
    completedDate: "July 2024",
    description: "Comprehensive architectural design for a 10-unit residential estate, featuring varied house designs, shared amenities, and integrated landscaping plans.",
    scope: [
      "Master planning for 10 units",
      "Individual house designs",
      "Infrastructure planning",
      "Approval documentation",
    ],
    servicesUsed: ["Architectural & Structural Drawing"],
    results: "Approved designs now under construction by our team, with 6 units already sold off-plan based on our visualizations.",
    images: ["/placeholder.svg"],
    featured: true,
  },
  {
    id: "7",
    slug: "mombasa-beach-resort",
    title: "Mombasa Beach Resort Renovation",
    category: "finishing",
    location: "Mombasa, Kenya",
    duration: "4 months",
    completedDate: "June 2024",
    description: "Complete interior and exterior renovation of a 20-room beach resort, incorporating coastal design elements and durable marine-grade finishes.",
    scope: [
      "Guest room renovations",
      "Restaurant and lounge finishing",
      "Pool deck retiling",
      "Exterior painting and repairs",
    ],
    servicesUsed: ["Interior & Exterior Finishing"],
    results: "Resort reopened to rave reviews with a 35% increase in bookings compared to pre-renovation levels.",
    images: ["/placeholder.svg"],
    featured: false,
  },
  {
    id: "8",
    slug: "nyeri-school-block",
    title: "Nyeri School Block",
    category: "construction",
    location: "Nyeri, Kenya",
    duration: "10 months",
    completedDate: "May 2024",
    description: "Construction of a new 12-classroom block with laboratory facilities, staff rooms, and modern amenities for a secondary school.",
    scope: [
      "New classroom block construction",
      "Laboratory fitting",
      "Sports court paving",
      "Walkway and landscaping",
    ],
    servicesUsed: ["Building & Construction", "Interior & Exterior Finishing", "Cabro Paving"],
    results: "Provided modern educational facilities benefiting over 500 students annually.",
    images: ["/placeholder.svg"],
    featured: false,
  },
  {
    id: "9",
    slug: "machakos-boundary-wall",
    title: "Machakos Estate Boundary Wall",
    category: "bush-stones",
    location: "Machakos, Kenya",
    duration: "2 months",
    completedDate: "April 2024",
    description: "Decorative bush stone perimeter wall with integrated security features and vehicle entry points for a private residential estate.",
    scope: [
      "1.2km bush stone wall construction",
      "Gate pillar construction",
      "Security lighting installation",
      "Decorative capping",
    ],
    servicesUsed: ["Building with Bush Stones"],
    results: "Created a stunning and secure boundary that has become a talking point in the neighborhood.",
    images: ["/placeholder.svg"],
    featured: false,
  },
  {
    id: "10",
    slug: "ruiru-apartment-complex",
    title: "Ruiru Apartment Complex",
    category: "construction",
    location: "Ruiru, Kenya",
    duration: "18 months",
    completedDate: "March 2024",
    description: "A modern 48-unit apartment complex featuring studio, one, and two-bedroom units with shared amenities including parking, gardens, and a fitness area.",
    scope: [
      "Full architectural design",
      "Multi-story construction",
      "Complete unit finishing",
      "Common area development",
    ],
    servicesUsed: ["Architectural & Structural Drawing", "Building & Construction", "Interior & Exterior Finishing", "Cabro Paving"],
    results: "Delivered a high-quality residential complex that sold out within 3 months of completion.",
    images: ["/placeholder.svg"],
    featured: false,
  },
  {
    id: "11",
    slug: "kitale-church-project",
    title: "Kitale Church Renovation",
    category: "finishing",
    location: "Kitale, Kenya",
    duration: "6 weeks",
    completedDate: "February 2024",
    description: "Complete interior refurbishment of a historic church, preserving original features while upgrading finishes and acoustics.",
    scope: [
      "Interior painting and restoration",
      "Acoustic ceiling installation",
      "New flooring throughout",
      "Sanctuary decorative elements",
    ],
    servicesUsed: ["Interior & Exterior Finishing"],
    results: "Restored the church to its former glory while adding modern functionality, much to the congregation's delight.",
    images: ["/placeholder.svg"],
    featured: false,
  },
  {
    id: "12",
    slug: "ngong-driveway-project",
    title: "Ngong Hills Residence Driveway",
    category: "cabro",
    location: "Ngong, Kenya",
    duration: "2 weeks",
    completedDate: "January 2024",
    description: "Premium cabro paving for a hillside residence, featuring custom patterns, integrated drainage, and natural stone accent borders.",
    scope: [
      "150sqm driveway paving",
      "Walkway installation",
      "Drainage integration",
      "Natural stone borders",
    ],
    servicesUsed: ["Cabro Paving"],
    results: "Created a stunning entrance that perfectly complements the hillside property's aesthetic.",
    images: ["/placeholder.svg"],
    featured: false,
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "all") return projects;
  return projects.filter(project => project.category === category);
};

export const categories = [
  { value: "all", label: "All Projects" },
  { value: "construction", label: "Construction" },
  { value: "finishing", label: "Finishing" },
  { value: "bush-stones", label: "Bush Stones" },
  { value: "cabro", label: "Cabro Paving" },
  { value: "drawing", label: "Drawing" },
];
