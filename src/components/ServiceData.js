const servicesData = [
  {
    slug: "3d-printing",
    title: "3D Printing",
    tagline: "From imagination to reality in 3D.",

    hero: {
      image: "/assets/services/3d-printing/hero.jpg",
      headline: "Revolutionizing Ideas Through 3D Printing",
      subheadline: "Transform your digital designs into physical objects with speed, precision, and limitless creativity.",
      ctaButton: "Get a Free Quote",
      ctaLink: "/contact"
    },

    stats: [
      { value: "99.8%", label: "Client Satisfaction" },
      { value: "24-48h", label: "Average Turnaround" },
      { value: "50+", label: "Materials Available" },
      { value: "500+", label: "Projects Completed" }
    ],

    overview: {
      title: "Your Vision, Our 3D Expertise",
      description: "At [Your Company], we believe innovation should move at the speed of thought. Our 3D printing solutions help businesses, designers, and creators rapidly prototype, test, and scale their ideas into reality. Whether you need functional prototypes, intricate models, or production-ready parts, we deliver with unmatched quality.",
      highlights: [
        "20+ material options including plastics, resins, and metal composites",
        "High-resolution printing up to 50 microns for extreme detail",
        "Fast turnaround with same-day or next-day delivery options",
        "Eco-friendly additive manufacturing process",
      ],
      images: [
        "/assets/services/3d-printing/overview1.jpg",
        "/assets/services/3d-printing/overview2.jpg",
      ],
    },

    features: [
      {
        title: "Rapid Prototyping",
        description: "Cut your development cycle in half by producing accurate prototypes in hours instead of weeks. Test form, fit, and function with high fidelity models.",
        image: "/assets/services/3d-printing/prototyping.jpg",
        icon: "fa-lightbulb"
      },
      {
        title: "Industrial-Grade Manufacturing",
        description: "Produce durable, functional parts suitable for aerospace, automotive, medical, and industrial applications — engineered for performance.",
        image: "/assets/services/3d-printing/industrial.jpg",
        icon: "fa-industry"
      },
      {
        title: "Custom & Creative Applications",
        description: "From art installations to architectural models, our 3D printing services give creators the freedom to experiment and build without limits.",
        image: "/assets/services/3d-printing/creative.jpg",
        icon: "fa-palette"
      },
      {
        title: "On-Demand Production",
        description: "No minimum order quantities — print only what you need, when you need it. Perfect for startups and custom production runs.",
        image: "/assets/services/3d-printing/on-demand.jpg",
        icon: "fa-bolt"
      },
    ],

    materials: {
      title: "Comprehensive Material Selection",
      description: "Choose from our wide range of high-quality materials tailored to your specific application needs.",
      categories: [
        {
          name: "Plastics",
          items: [
            { name: "PLA", description: "Biodegradable, easy to print, great for prototypes" },
            { name: "ABS", description: "Durable, impact-resistant, good for functional parts" },
            { name: "PETG", description: "Chemical-resistant, food-safe, combines ease and strength" },
            { name: "Nylon", description: "Strong, flexible, resistant to wear and impact" }
          ]
        },
        {
          name: "Resins",
          items: [
            { name: "Standard Resin", description: "High detail, smooth surface finish" },
            { name: "Tough Resin", description: "Engineered for functional prototypes requiring durability" },
            { name: "Dental Resin", description: "Biocompatible, for dental applications" },
            { name: "Castable Resin", description: "Burns out cleanly for jewelry casting" }
          ]
        },
        {
          name: "Specialty & Composite",
          items: [
            { name: "Carbon Fiber", description: "Extreme stiffness and strength-to-weight ratio" },
            { name: "Metal Filled", description: "PLA with metal particles for metallic appearance" },
            { name: "Wood Filled", description: "PLA with wood fibers for wooden appearance" },
            { name: "Flexible", description: "Rubber-like materials that bend and compress" }
          ]
        }
      ]
    },

    technology: {
      title: "Cutting-Edge Printing Technology",
      description: "We invest in the latest equipment to ensure your prints are produced with the highest precision, reliability, and material capabilities.",
      printers: [
        {
          name: "Formlabs Form 3L",
          type: "SLA (Stereolithography)",
          resolution: "25 microns",
          bestFor: "High-detail prototypes, dental models, jewelry casting.",
          image: "/assets/services/3d-printing/printer-form3l.jpg"
        },
        {
          name: "Markforged Mark Two",
          type: "FDM with Continuous Carbon Fiber",
          resolution: "50 microns",
          bestFor: "Industrial-strength, functional parts that replace metal.",
          image: "/assets/services/3d-printing/printer-markforged.jpg"
        },
        {
          name: "HP Jet Fusion 5200",
          type: "Multi Jet Fusion",
          resolution: "80 microns",
          bestFor: "High-volume, end-use part production.",
          image: "/assets/services/3d-printing/printer-hp.jpg"
        }
      ]
    },

    process: {
      title: "Our Proven 3D Printing Workflow",
      steps: [
        { 
          step: "1. Concept & Consultation", 
          detail: "We discuss your goals, review your CAD files, and provide expert guidance on design optimization.",
          icon: "fa-comments"
        },
        { 
          step: "2. Material Selection", 
          detail: "Choose from a wide range of materials tailored to strength, flexibility, transparency, or aesthetics.",
          icon: "fa-palette"
        },
        { 
          step: "3. Precision Printing", 
          detail: "Your model is printed with the latest high-resolution 3D printers for maximum accuracy.",
          icon: "fa-print"
        },
        { 
          step: "4. Post-Processing & Finishing", 
          detail: "We enhance durability and appearance with sanding, painting, or surface treatments.",
          icon: "fa-tools"
        },
        { 
          step: "5. Delivery", 
          detail: "Receive your finished product, inspected and quality-checked, ready for immediate use.",
          icon: "fa-truck"
        },
      ],
      image: "/assets/services/3d-printing/process.jpg",
    },

    gallery: {
      title: "Explore Our 3D Creations",
      type: "carousel",
      images: [
        { src: "/assets/services/3d-printing/gallery1.jpg", caption: "Precision prototype for an automotive component" },
        { src: "/assets/services/3d-printing/gallery2.jpg", caption: "Architectural scale model of a residential complex" },
        { src: "/assets/services/3d-printing/gallery3.jpg", caption: "Custom prosthetic prototype designed for healthcare" },
        { src: "/assets/services/3d-printing/gallery4.jpg", caption: "Artistic sculpture produced with resin printing" },
      ],
    },

    industries: {
      title: "Industries We Empower",
      sectors: [
        { 
          name: "Healthcare", 
          description: "Custom prosthetics, dental aligners, and anatomical models for medical innovation.", 
          icon: "/assets/icons/healthcare.svg",
          examples: ["Surgical guides", "Prosthetics", "Anatomical models", "Medical device prototypes"]
        },
        { 
          name: "Automotive", 
          description: "Functional prototypes, jigs, and small-batch manufacturing for vehicles.", 
          icon: "/assets/icons/automotive.svg",
          examples: ["Concept models", "Custom tools", "End-use parts", "Interior components"]
        },
        { 
          name: "Architecture", 
          description: "Accurate and detailed scale models to bring design concepts to life.", 
          icon: "/assets/icons/architecture.svg",
          examples: ["Architectural models", "Topographical maps", "Design concepts", "Presentation models"]
        },
        { 
          name: "Consumer Products", 
          description: "From gadget casings to custom décor, we help brands deliver unique solutions.", 
          icon: "/assets/icons/consumer.svg",
          examples: ["Product prototypes", "Custom enclosures", "Packaging designs", "Retail displays"]
        },
      ],
    },

    caseStudies: [
      {
        title: "Medical Device Startup Accelerates Development",
        challenge: "Needed to iterate on a new surgical tool prototype weekly but faced 4-week lead times with traditional machining.",
        solution: "Rapid SLA printing with bio-compatible resins, delivering a new precise prototype every 48 hours.",
        results: ["75% reduction in development time", "60% cost reduction", "15 design iterations in 2 months"],
        image: "/assets/case-studies/medical-device.jpg"
      },
      {
        title: "Automotive Company Reduces Tooling Costs",
        challenge: "High costs for custom jigs and fixtures using traditional manufacturing methods.",
        solution: "On-demand 3D printing of custom tools with carbon-fiber reinforced materials.",
        results: ["85% cost reduction for custom tools", "5-day turnaround instead of 3 weeks", "Lightweight yet durable tools"],
        image: "/assets/case-studies/automotive-tools.jpg"
      }
    ],

    faqs: [
      { 
        question: "What file formats do you accept for 3D printing?", 
        answer: "We accept STL, OBJ, and STEP files. If you only have design sketches, our team can help convert them into printable CAD files." 
      },
      { 
        question: "How fast can I get my 3D prints?", 
        answer: "Standard turnaround is 2–3 days, but we offer same-day delivery for urgent projects." 
      },
      { 
        question: "Do you offer bulk production?", 
        answer: "Yes, we provide small-batch and bulk 3D printing solutions for startups and established businesses." 
      },
      { 
        question: "Can you handle post-processing?", 
        answer: "Absolutely! We offer painting, polishing, assembly, and even packaging for your prints." 
      },
      { 
        question: "What is the maximum size you can print?", 
        answer: "Our large-format printers can handle objects up to 30 × 30 × 30 cm. For larger objects, we can print in parts and assemble them." 
      },
      { 
        question: "Do you provide design services?", 
        answer: "Yes, we have a team of expert designers who can help optimize your designs for 3D printing or create models from your concepts." 
      },
    ],

    testimonials: [
      { 
        name: "Sarah M., Product Designer", 
        feedback: "Their 3D printing service saved us weeks of development time. The detail and durability were incredible!", 
        image: "/assets/testimonials/sarah.jpg",
        rating: 5
      },
      { 
        name: "James R., Architect", 
        feedback: "Our clients were blown away by the precision of the scale models. Highly recommend their services.", 
        image: "/assets/testimonials/james.jpg",
        rating: 5
      },
      { 
        name: "Michael T., Engineering Manager", 
        feedback: "The carbon fiber parts we ordered performed exactly as needed in our testing. Exceptional quality control.", 
        image: "/assets/testimonials/michael.jpg",
        rating: 5
      },
    ],

    benefits: [
      "Accelerate time-to-market with rapid prototyping",
      "Reduce manufacturing costs with on-demand printing",
      "Gain access to advanced materials and technologies",
      "Customize designs without production constraints",
      "Enhance innovation with scalable, eco-friendly solutions",
    ],

    pricingOptions: {
      title: "Flexible Service Options",
      description: "We offer solutions for projects of any size and complexity.",
      plans: [
        {
          name: "Standard Printing",
          price: "From $15",
          description: "Ideal for prototypes and basic models",
          features: ["PLA or ABS material", "Standard resolution", "Basic post-processing", "3-5 day turnaround"],
          bestFor: "Hobbyists, students, basic prototypes"
        },
        {
          name: "Professional Printing",
          price: "From $45",
          description: "For high-detail, functional parts",
          features: ["Engineering materials", "High resolution", "Advanced post-processing", "1-3 day turnaround"],
          bestFor: "Professionals, functional prototypes"
        },
        {
          name: "Industrial Printing",
          price: "From $80",
          description: "For end-use production parts",
          features: ["Industrial materials", "Ultra-high resolution", "Professional finishing", "Same-day options"],
          bestFor: "Manufacturing, end-use parts"
        }
      ]
    },

    callToAction: {
      headline: "Turn Your Ideas Into Reality",
      subheadline: "Partner with us for professional 3D printing solutions that elevate your business.",
      buttonText: "Request a Free Quote",
      buttonLink: "/contact",
      secondaryButtonText: "View Portfolio",
      secondaryButtonLink: "/portfolio"
    },

    certifications: {
      title: "Our Certifications & Standards",
      items: [
        { name: "ISO 9001:2015 Certified", icon: "fa-certificate" },
        { name: "FDA Compliant Materials", icon: "fa-clipboard-check" },
        { name: "Sustainable Practices", icon: "fa-leaf" },
        { name: "Quality Guarantee", icon: "fa-award" }
      ]
    }
  },
];

export default servicesData;