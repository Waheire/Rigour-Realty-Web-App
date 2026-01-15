import { Ruler, Building2, PaintBucket, Blocks, LayoutGrid } from "lucide-react";

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  image?: string;
  icon: typeof Ruler;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  process: { step: string; description: string }[];
  materials?: string[];
  timeline: string;
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    id: "architectural-structural-drawing",
    slug: "architectural-structural-drawing",
    title: "Architectural & Structural Drawing",
    shortTitle: "Architectural Drawing",
    image: "/service-1.png",
    icon: Ruler,
    shortDescription: "Professional architectural plans and structural engineering drawings for your construction projects.",
    fullDescription: "Our architectural and structural drawing services provide comprehensive design documentation that forms the foundation of any successful construction project. From initial concept sketches to detailed construction drawings, we ensure your vision is accurately translated into buildable plans that meet all regulatory requirements.",
    deliverables: [
      "Complete architectural floor plans",
      "Structural engineering calculations",
      "Building section and elevation drawings",
      "Foundation and footing details",
      "Roof framing and truss designs",
      "Electrical and plumbing layout plans",
      "County/Municipal approval documentation",
      "3D visualization renders",
    ],
    process: [
      { step: "Consultation", description: "We discuss your vision, requirements, and budget parameters" },
      { step: "Site Survey", description: "Comprehensive site analysis and measurements" },
      { step: "Concept Design", description: "Initial sketches and layout proposals" },
      { step: "Design Development", description: "Refined drawings with client feedback" },
      { step: "Technical Documentation", description: "Complete construction-ready drawings" },
      { step: "Approval Support", description: "Assistance with regulatory submissions" },
    ],
    timeline: "2-6 weeks depending on project complexity",
    faqs: [
      { question: "Do you handle building permit applications?", answer: "Yes, we prepare all documentation required for building permits and can assist with the submission process to relevant authorities." },
      { question: "Can you work with existing structures?", answer: "Absolutely. We provide renovation and extension drawings, including as-built documentation for existing buildings." },
      { question: "What software do you use for drawings?", answer: "We use industry-standard software including AutoCAD, Revit, and SketchUp for 3D visualization." },
      { question: "Do you provide structural calculations?", answer: "Yes, our structural engineers provide all necessary calculations certified by registered professionals." },
      { question: "How many revision rounds are included?", answer: "Our standard package includes 3 revision rounds. Additional revisions can be accommodated at a nominal fee." },
      { question: "Can you design for specific architectural styles?", answer: "Yes, we design in various styles from modern minimalist to traditional African-inspired architecture." },
    ],
  },
  {
    id: "building-construction",
    slug: "building-construction",
    title: "Building & Construction",
    shortTitle: "Construction",
    image: "/service-2.png",
    icon: Building2,
    shortDescription: "End-to-end building construction services from foundation to finishing with quality assurance.",
    fullDescription: "Rigour Realty delivers comprehensive building and construction services that transform your architectural plans into reality. Our experienced team manages every aspect of construction, ensuring quality workmanship, adherence to timelines, and transparent communication throughout the project lifecycle.",
    deliverables: [
      "Complete project management",
      "Foundation and substructure works",
      "Superstructure construction",
      "Roofing installation",
      "Quality assurance reports",
      "Progress documentation and updates",
      "Safety compliance management",
      "Post-construction warranty",
    ],
    process: [
      { step: "Pre-Construction", description: "Site preparation, permits, and material procurement" },
      { step: "Foundation", description: "Excavation, footings, and foundation walls" },
      { step: "Superstructure", description: "Walls, columns, beams, and floor slabs" },
      { step: "Roofing", description: "Roof structure and waterproofing installation" },
      { step: "MEP Rough-in", description: "Mechanical, electrical, and plumbing installations" },
      { step: "Finishing", description: "Interior and exterior finishing works" },
      { step: "Handover", description: "Final inspection, documentation, and key handover" },
    ],
    materials: [
      "High-grade cement and aggregates",
      "Quality reinforcement steel",
      "Certified building blocks",
      "Premium roofing materials",
      "Durable plumbing fixtures",
      "Standard electrical components",
    ],
    timeline: "3-18 months depending on project scale",
    faqs: [
      { question: "Do you provide construction financing options?", answer: "We work with several financial institutions and can connect you with construction financing partners." },
      { question: "What types of buildings do you construct?", answer: "We build residential homes, commercial buildings, institutional facilities, and industrial structures." },
      { question: "How do you ensure construction quality?", answer: "We have a rigorous quality control process with regular inspections, material testing, and documented checkpoints." },
      { question: "Do you handle permit and inspection coordination?", answer: "Yes, we manage all necessary permits and coordinate required inspections throughout the project." },
      { question: "What warranty do you provide?", answer: "We offer a 12-month defects liability period covering workmanship and materials." },
      { question: "Can you work with my own architect's plans?", answer: "Absolutely. We collaborate with external architects and can build from any professionally prepared drawings." },
    ],
  },
  {
    id: "interior-exterior-finishing",
    slug: "interior-exterior-finishing",
    title: "Interior & Exterior Finishing",
    shortTitle: "Finishing Works",
    image: "/service-3.png",
    icon: PaintBucket,
    shortDescription: "Premium finishing services including tiling, painting, plastering, ceilings, and decorative elements.",
    fullDescription: "Transform your space with our comprehensive interior and exterior finishing services. From elegant wall finishes to sophisticated flooring solutions, we bring together skilled craftsmen and quality materials to create spaces that reflect your style and meet the highest standards of finish.",
    deliverables: [
      "Wall plastering and skimming",
      "Interior and exterior painting",
      "Floor and wall tiling",
      "Ceiling installations (PVC, gypsum, T&G)",
      "Decorative wall features",
      "Window and door finishing",
      "Skirting and cornices",
      "Final cleaning and handover",
    ],
    process: [
      { step: "Assessment", description: "Evaluate surfaces and discuss finish preferences" },
      { step: "Preparation", description: "Surface preparation and priming" },
      { step: "Plastering", description: "Wall and ceiling plastering works" },
      { step: "Tiling", description: "Floor and wall tile installation" },
      { step: "Ceilings", description: "Ceiling system installation" },
      { step: "Painting", description: "Primer and finish coat application" },
      { step: "Detailing", description: "Trim work and final touches" },
    ],
    materials: [
      "Premium quality paints and primers",
      "Imported and local tiles",
      "Gypsum and PVC ceiling boards",
      "Quality adhesives and grouts",
      "Decorative moldings and trims",
      "Waterproofing compounds",
    ],
    timeline: "2-8 weeks depending on scope",
    faqs: [
      { question: "What paint brands do you use?", answer: "We use premium brands including Crown, Dulux, and Basco, but can accommodate specific brand preferences." },
      { question: "Do you supply the tiles or can I choose my own?", answer: "Both options are available. We can supply from our trusted vendors or install tiles you've selected." },
      { question: "Can you match existing finishes for renovations?", answer: "Yes, our skilled painters can color-match existing finishes for seamless renovation work." },
      { question: "What ceiling options do you offer?", answer: "We install gypsum board, PVC panels, T&G (tongue and groove), and decorative suspended ceilings." },
      { question: "Do you handle waterproofing for wet areas?", answer: "Absolutely. We apply professional waterproofing systems for bathrooms, kitchens, and other wet areas." },
      { question: "How do you protect other areas during finishing work?", answer: "We use comprehensive protection measures including dust barriers, floor coverings, and furniture protection." },
    ],
  },
  {
    id: "bush-stones",
    slug: "bush-stones",
    title: "Building with Bush Stones",
    shortTitle: "Bush Stones",
    image: "/service-4.png",
    icon: Blocks,
    shortDescription: "Durable natural stone construction for foundations, walls, and decorative features.",
    fullDescription: "Embrace the timeless beauty and exceptional durability of natural bush stone construction. Our expert masons transform locally-sourced stones into stunning architectural features that provide superior strength, natural insulation, and unique aesthetic appeal that only natural materials can offer.",
    deliverables: [
      "Foundation stonework",
      "Load-bearing stone walls",
      "Decorative feature walls",
      "Retaining wall construction",
      "Stone boundary walls",
      "Stone pillars and columns",
      "Natural stone landscaping",
      "Pointing and finishing",
    ],
    process: [
      { step: "Stone Selection", description: "Source and select quality stones from local quarries" },
      { step: "Site Preparation", description: "Foundation excavation and base preparation" },
      { step: "Stone Laying", description: "Skilled placement and bonding of stones" },
      { step: "Coursing", description: "Maintain proper levels and structural integrity" },
      { step: "Pointing", description: "Mortar finishing between stones" },
      { step: "Curing", description: "Proper curing for maximum strength" },
    ],
    materials: [
      "Natural bush stones (various grades)",
      "High-strength mortar mixes",
      "Steel reinforcement (where required)",
      "Waterproofing additives",
      "Pointing compounds",
      "Sealants for exposed stonework",
    ],
    timeline: "2-12 weeks depending on scope",
    faqs: [
      { question: "Is bush stone construction as strong as concrete blocks?", answer: "When properly constructed, bush stone walls can be stronger and more durable than conventional block walls, with lifespans exceeding 100 years." },
      { question: "Where do you source your stones?", answer: "We source stones from verified local quarries, ensuring consistent quality and supporting local communities." },
      { question: "Can bush stones be used for multi-story buildings?", answer: "Yes, with proper structural design, bush stones can be used for foundations and lower floors of multi-story structures." },
      { question: "How does the cost compare to conventional construction?", answer: "Initial costs can be similar or slightly higher, but long-term durability and low maintenance often result in better value." },
      { question: "Do bush stone walls need plastering?", answer: "Not necessarily. Many clients prefer the natural exposed stone aesthetic, though plastering is an option." },
      { question: "Are bush stone structures suitable for earthquake-prone areas?", answer: "With proper engineering and reinforcement, bush stone structures can be designed to meet seismic requirements." },
    ],
  },
  {
    id: "cabro-paving",
    slug: "cabro-paving",
    title: "Cabro Paving",
    shortTitle: "Cabro Paving",
    image: "/service-5.png",
    icon: LayoutGrid,
    shortDescription: "Professional interlocking paver installation for driveways, walkways, and commercial areas.",
    fullDescription: "Create stunning, durable outdoor surfaces with our professional cabro paving services. From residential driveways to commercial parking areas, we deliver expertly installed interlocking paver solutions that combine aesthetic appeal with long-lasting performance and easy maintenance.",
    deliverables: [
      "Site survey and design layout",
      "Ground excavation and preparation",
      "Sub-base installation",
      "Edge restraint systems",
      "Paver installation",
      "Pattern and design execution",
      "Joint sand filling",
      "Compaction and finishing",
    ],
    process: [
      { step: "Survey & Design", description: "Assess site conditions and finalize paver design" },
      { step: "Excavation", description: "Remove existing surface and excavate to required depth" },
      { step: "Sub-base", description: "Install and compact aggregate base layers" },
      { step: "Edging", description: "Install concrete or metal edge restraints" },
      { step: "Sand Bed", description: "Apply and screed bedding sand layer" },
      { step: "Paver Laying", description: "Install pavers according to design pattern" },
      { step: "Finishing", description: "Joint filling, compaction, and cleaning" },
    ],
    materials: [
      "Quality interlocking pavers (various styles)",
      "Crushed stone aggregate",
      "Bedding sand",
      "Polymeric joint sand",
      "Concrete edge restraints",
      "Geotextile fabric",
    ],
    timeline: "1-4 weeks depending on area size",
    faqs: [
      { question: "What paver patterns do you offer?", answer: "We install various patterns including herringbone, basket weave, stretcher bond, and custom designs." },
      { question: "How long do cabro pavers last?", answer: "Quality interlocking pavers can last 25-50 years with proper installation and basic maintenance." },
      { question: "Can pavers handle heavy vehicle traffic?", answer: "Yes, with appropriate base preparation and paver thickness, our installations can handle heavy vehicles." },
      { question: "Do you provide drainage solutions?", answer: "Absolutely. We incorporate proper slopes and can install channel drains as needed." },
      { question: "What colors and styles are available?", answer: "We offer a wide range of colors, textures, and shapes from multiple manufacturers." },
      { question: "How do I maintain paved areas?", answer: "Basic maintenance includes periodic sweeping, weed control, and occasional joint sand top-up." },
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
