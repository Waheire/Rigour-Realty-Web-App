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
  phaseImages?: ProjectPhaseImages;
  featured: boolean;
}

export type ProjectPhaseImageKey =
  | "consultation"
  | "design"
  | "costing"
  | "execution"
  | "handover";

export type ProjectPhaseImages = Partial<Record<ProjectPhaseImageKey, string[]>>;

export interface ProjectTimelinePhase {
  title: "Consultation" | "Design & Planning" | "Costing" | "Execution" | "Handover";
  description: string;
  image: string;
}

export const timelinePhaseFallbackImages = [
  "/project-1.png",
  "/project-2.png",
  "/project-3.png",
  "/Bomet-3.jpg",
  "/bush-stone-1.png",
] as const;

const buildTimelinePhases = (
  images: string[],
  descriptions: {
    consultation: string;
    designPlanning: string;
    costing: string;
    execution: string;
    handover: string;
  },
): ProjectTimelinePhase[] => {
  const imagePool = Array.from(new Set([...images, ...timelinePhaseFallbackImages]));
  const getImage = (index: number) =>
    imagePool[index] || timelinePhaseFallbackImages[index] || "/placeholder.svg";

  return [
    { title: "Consultation", description: descriptions.consultation, image: getImage(0) },
    { title: "Design & Planning", description: descriptions.designPlanning, image: getImage(1) },
    { title: "Costing", description: descriptions.costing, image: getImage(2) },
    { title: "Execution", description: descriptions.execution, image: getImage(3) },
    { title: "Handover", description: descriptions.handover, image: getImage(4) },
  ];
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "bomet-kaplong-residence",
    title: "Bomet Kaplong Residence",
    category: "construction",
    location: "Bomet, Kenya",
    duration: "12 months",
    completedDate: "December 2022",
    description: "A stunning 8-bedroom family home featuring modern architectural design with traditional Kenyan influences. The property includes spacious living areas, a home office, and beautifully landscaped gardens.",
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
    images: ["/bomet-k-show.jpeg"],
    phaseImages: {
      consultation: ["/bomet-k-11.jpg", "/bomet-k-1.jpeg", "/bomet-k-2.jpeg", "/bomet-k-3.jpeg"],
      design: ["/bomet-k-1.jpeg", "/bomet-k-2.jpeg", "/bomet-k-3.jpeg", "/bomet-k-4.jpeg", "/bomet-k-5.jpeg", "/bomet-k-6.jpeg", "/bomet-k-7.jpeg"],
      costing: ["/cost.webp"],
      execution: [
        "/bomet-k-e-1.jpeg", "/bomet-k-e-2.jpeg", "/bomet-k-e-3.jpeg", "/bomet-k-e-4.jpeg", "/bomet-k-e-5.jpeg", "/bomet-k-e-6.jpeg", "/bomet-k-e-7.jpeg",
        "/bomet-k-e-8.jpeg", "/bomet-k-e-10.jpeg", "/bomet-k-e-11.jpeg", "/bomet-k-e-12.jpeg", "/bomet-k-e-13.jpeg", "/bomet-k-e-14.jpeg", "/bomet-k-e-15.jpeg", "/bomet-k-e-16.jpeg", "/bomet-k-e-17.jpeg",
        "/bomet-k-e-18.jpeg", "/bomet-k-e-19.jpeg", "/bomet-k-e-20.jpeg", "/bomet-k-e-21.jpeg",
      ],
      handover: ["/Bomet-k-8.jpg", "/Bomet-k-9.jpg", "/Bomet-k-10.jpg", "/bomet-k-11.jpg"],
    },
    featured: true,
  },
  {
    id: "2",
    slug: "siaya-ugunja",
    title: "Four Bedroom Maissionate in Siaya",
    category: "construction",
    location: "Siaya, Kenya",
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
    images: ["/siaya-1.jpeg"],
    phaseImages: {
      consultation: ["/siaya-1.jpeg", "/siaya-2.jpeg", "/siaya-3.jpeg"],
      design: ["/siaya-4.jpeg", "/siaya-5.jpeg", "/siaya-6.jpeg", "/siaya-7.jpeg", "/siaya-8.jpeg", "/siaya-9.jpeg", "/siaya-10.jpeg", "/siaya-11.jpeg", "/siaya-12.jpeg", "/siaya-13.jpeg", "/siaya-14.jpeg", "/siaya-15.jpeg", "/siaya-16.jpeg"],
      costing: ["/cost.webp"],
      execution: ["/siaya-19.jpeg", "/siaya-20.jpeg", "/siaya-21.jpeg", "/siaya-22.jpeg", "/siaya-23.jpeg", "/siaya-24.jpeg", "/siaya-25.jpeg", "/siaya-26.jpeg", "/siaya-27.jpeg", "/siaya-28.jpeg", "/siaya-30.jpeg", "/siaya-33.jpeg", "/siaya-34.jpeg", "/siaya-35.jpeg", "/siaya-36.jpeg", "/siaya-37.jpeg", "/siaya-38.jpeg", "/siaya-39.jpeg", "/siaya-40.jpeg", "/siaya-41.jpeg", "/siaya-42.jpeg"],
      handover: ["/siaya-1.jpeg"],
    },
    featured: true,
  },
  {
    id: "3",
    slug: "makueni-residence",
    title: "Makueni Residence Construction",
    category: "construction",
    location: "Makueni, Kenya",
    duration: "12 months",
    completedDate: "In progress (expected completion: December 2026)",
    description: "Modern residential construction project in Makueni, featuring contemporary design and high-quality finishes.",
    scope: [
      "Full interior plastering and painting",
      "Custom gypsum ceiling installation",
      "Premium tile installation throughout",
      "Decorative wall features",
    ],
    servicesUsed: ["Interior & Exterior Finishing"],
    results: "The project is currently on track for completion by December 2026, with all interior finishing works progressing smoothly and receiving positive feedback from the client.",
    testimonial: {
      quote: "The interior finishing work has transformed our home into a beautiful space. The team is professional and attentive to our preferences.",
      author: "Dr. Peter Otieno",
      role: "Property Owner",
    },
    images: ["makueni-1.jpeg"],
    phaseImages: {
      consultation: ["/makueni-2.jpeg", "/makueni-1.jpeg"],
      design: ["/makueni-1.jpeg"],
      costing: ["/cost.webp"],
      execution: ["/makueni-3.jpeg", "/makueni-4.jpeg", "/makueni-5.jpeg", "/makueni-6.jpeg", "/makueni-7.jpeg", "/makueni-8.jpeg", "/makueni-9.jpeg", "/makueni-10.jpeg"],
      handover: ["/makueni-11.jpeg", "/makueni-12.jpeg", "/makueni-13.jpeg", "/makueni-14.jpeg", "/makueni-15.jpeg", "/makueni-16.jpeg"],
    },
    featured: true,
  },
  {
    id: "4",
    slug: "river-view-estate-kiambu",
    title: "River View Estate Kiambu",
    category: "cabro",
    location: "Kiambu, Kenya",
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
    images: ["/river-view-estate.jpeg"],
    phaseImages: {
      consultation: ["/river-view-estate.jpeg"],
      design: ["/river-view-estate.jpeg", "/kiu-river-37.jpeg"],
      costing: ["/cost.webp"],
      execution: ["/kiu-river-36.jpeg", "/kiu-river-35.jpeg", "/kiu-river-34.jpeg", "/kiu-river-33.jpeg", "/kiu-river-31.jpeg"],
      handover: ["/river-view-estate.jpeg"],
    },
    featured: true,
  },
  {
    id: "5",
    slug: "kiu-river-kasarani-residence",
    title: "Kiu River Kasarani Residence",
    category: "bush-stones",
    location: "Naivasha, Kenya",
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
    images: ["/river-view-estate-23.jpeg"],
    phaseImages: {
      consultation: ["/river-view-estate-23.jpeg"],
      design: ["/river-view-estate-6.jpeg", "/river-view-estate-5.jpeg"],
      costing: ["/cost.webp"],
      execution: ["/river-view-estate-12.jpeg", "/river-view-estate-1.jpeg", "/river-view-estate-2.jpeg", "/river-view-estate-3.jpeg", "/river-view-estate-4.jpeg", "/river-view-estate-5.jpeg", "/river-view-estate-7.jpeg", "/river-view-estate-8.jpeg", "/river-view-estate-9.jpeg", "/river-view-estate-10.jpeg", "/river-view-estate-11.jpeg", "/river-view-estate-13.jpeg", "/river-view-estate-14.jpeg", "/river-view-estate-15.jpeg", "/river-view-estate-16.jpeg", "/river-view-estate-17.jpeg"],
      handover: ["/river-view-estate-18.jpeg", "/river-view-estate-19.jpeg", "/river-view-estate-20.jpeg", "/river-view-estate-21.jpeg", "/river-view-estate-22.jpeg"],
    },
    featured: true,
  },
  {
    id: "6",
    slug: "rumuruti-contemporary-2-bedroom",
    title: "Rumuriti Contemporary Two Bedroom",
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
    images: ["/rumuruti-2.jpeg"],
    phaseImages: {
      consultation: ["/rumuruti-2.jpeg"],
      design: ["/rumuruti-2.jpeg", "/rumuruti-3.jpeg",],
      costing: ["/cost.webp"],
      execution: ["/rumuruti-2.jpeg", "/rumuruti-3.jpeg"],
      handover: ["/rumuruti-1.jpeg", "/rumuruti-2.jpeg", "/rumuruti-4.jpeg", "/rumuruti-5.jpeg"],
    },
    featured: true,
  },
];

export const projectTimelinePhases: Record<string, ProjectTimelinePhase[]> = {
  "bomet-residence": buildTimelinePhases(
    ["/Bomet-1.jpg", "/Bomet-2.jpg"],
    {
      consultation: "Aligned family priorities, room count, and lifestyle needs for an 8-bedroom home.",
      designPlanning: "Prepared structural layouts, elevations, and phased work plan for approvals.",
      costing: "Produced a transparent bill of quantities with milestone-based cost control.",
      execution: "Built foundation to roof and coordinated finishing with strict quality supervision.",
      handover: "Completed final snagging and delivered a move-in ready home ahead of schedule.",
    },
  ),
  "bush-stone-construction": buildTimelinePhases(
    ["/bush-stone-1.png"],
    {
      consultation: "Defined tenant mix, floor usage, and investment goals for the commercial plaza.",
      designPlanning: "Optimized circulation, service cores, and shop frontage for high occupancy.",
      costing: "Set phased construction budgets around structure, MEP, and interior packages.",
      execution: "Delivered shell, common areas, and interior-ready spaces for multiple businesses.",
      handover: "Ran final checks and released the project for immediate tenant fit-outs.",
    },
  ),
  "kisumu-lakeside-villa": buildTimelinePhases(
    ["/Bomet-1.jpg", "/Bomet-2.jpg"],
    {
      consultation: "Captured finish preferences and ambience goals for a full villa refresh.",
      designPlanning: "Mapped ceiling profiles, wall treatments, and tile transitions room by room.",
      costing: "Matched premium material choices to a controlled renovation budget.",
      execution: "Installed gypsum ceilings, finishes, and detailing with minimal owner disruption.",
      handover: "Delivered a polished interior with a full quality walkthrough.",
    },
  ),
  "naivasha-farm-house": buildTimelinePhases(
    ["/Bomet-1.jpg", "/Bomet-2.jpg"],
    {
      consultation: "Agreed on rustic style direction using local bush stone and timber accents.",
      designPlanning: "Developed mixed-material details balancing durability and visual warmth.",
      costing: "Planned sourcing and labor rates for stonework-intensive construction.",
      execution: "Completed structural stone walls and coordinated natural-finish detailing.",
      handover: "Final inspection confirmed performance and aesthetic goals were achieved.",
    },
  ),
  "thika-industrial-yard": buildTimelinePhases(
    ["/Bomet-1.jpg", "/Bomet-2.jpg"],
    {
      consultation: "Assessed traffic load, turning radii, and drainage pain points in the yard.",
      designPlanning: "Designed paving zones and slope strategy for heavy-duty performance.",
      costing: "Priced sub-base, pavers, and drainage works for long-term durability.",
      execution: "Installed industrial-grade cabro paving with strict compaction control.",
      handover: "Verified line-marked operational zones and seamless truck movement.",
    },
  ),
  "karen-residential-estate": buildTimelinePhases(
    ["/Bomet-1.jpg", "/Bomet-2.jpg"],
    {
      consultation: "Defined unit mix, amenity needs, and market positioning for the estate.",
      designPlanning: "Produced master plan, unit prototypes, and infrastructure layouts.",
      costing: "Estimated approval, design, and phased implementation budgets.",
      execution: "Completed technical drawing package and stakeholder review iterations.",
      handover: "Submitted approved documents and visualization assets for project launch.",
    },
  ),
  "mombasa-beach-resort": buildTimelinePhases(
    ["/Bomet-1.jpg", "/Bomet-2.jpg"],
    {
      consultation: "Reviewed guest experience goals and coastal durability requirements.",
      designPlanning: "Sequenced room, lounge, and deck upgrades to reduce downtime.",
      costing: "Balanced marine-grade materials with target return-on-renovation metrics.",
      execution: "Delivered interiors and exteriors in coordinated renovation phases.",
      handover: "Opened refreshed facilities after final QC and operational sign-off.",
    },
  ),
  "nyeri-school-block": buildTimelinePhases(
    ["/Bomet-1.jpg", "/Bomet-2.jpg"],
    {
      consultation: "Confirmed classroom capacity, lab needs, and circulation priorities.",
      designPlanning: "Planned teaching blocks, utility routes, and outdoor amenity areas.",
      costing: "Structured procurement and labor budgets around education infrastructure standards.",
      execution: "Constructed classrooms, labs, and paved access areas to spec.",
      handover: "Completed compliance checks and delivered the facility for student use.",
    },
  ),
  "machakos-boundary-wall": buildTimelinePhases(
    ["/Bomet-1.jpg", "/Bomet-2.jpg"],
    {
      consultation: "Defined security intent, access points, and desired perimeter character.",
      designPlanning: "Detailed wall sections, gate pillars, and lighting interfaces.",
      costing: "Prepared itemized costs for stonework, metalwork, and electrical scope.",
      execution: "Built 1.2km decorative perimeter wall with controlled section sequencing.",
      handover: "Finalized gates, capping, and lighting with a full client walkthrough.",
    },
  ),
  "ruiru-apartment-complex": buildTimelinePhases(
    ["/Bomet-1.jpg", "/Bomet-2.jpg"],
    {
      consultation: "Aligned density, unit mix, and amenity expectations with the investor brief.",
      designPlanning: "Developed multi-block construction flow and common-area architecture.",
      costing: "Set staged funding plan for shell, finishes, and landscape delivery.",
      execution: "Delivered structural works and complete fit-outs across all unit types.",
      handover: "Completed final snag closure and released units for occupation.",
    },
  ),
  "kitale-church-project": buildTimelinePhases(
    ["/Bomet-1.jpg", "/Bomet-2.jpg"],
    {
      consultation: "Documented preservation priorities and acoustic upgrade requirements.",
      designPlanning: "Mapped restoration methods and compatible modern finish systems.",
      costing: "Planned budget around careful restoration and phased congregation access.",
      execution: "Executed interior refurbishment while protecting heritage elements.",
      handover: "Delivered upgraded worship spaces after final acoustic and finish checks.",
    },
  ),
  "ngong-driveway-project": buildTimelinePhases(
    ["/Bomet-1.jpg", "/Bomet-2.jpg"],
    {
      consultation: "Reviewed slope, water runoff, and arrival aesthetics for the residence.",
      designPlanning: "Designed paving pattern, borders, and drainage channels for the site.",
      costing: "Priced pavers, base prep, and drainage integration for lifecycle value.",
      execution: "Installed premium cabro system with precise levels and edge control.",
      handover: "Delivered a finished driveway with clean detailing and runoff performance.",
    },
  ),
};

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
