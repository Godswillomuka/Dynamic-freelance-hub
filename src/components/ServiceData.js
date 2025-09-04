const servicesData = [
  {
    slug: "3d-printing",
    title: "3D Printing",
    tagline: "From imagination to reality in 3D.",

    hero: {
      image: "/assets/services/3d-printing/hero.jpg",
      headline: "Revolutionizing Ideas Through 3D Printing",
      subheadline:
        "Transform your digital designs into physical objects with speed, precision, and limitless creativity.",
    },

    overview: {
      title: "Your Vision, Our 3D Expertise",
      description:
        "At [Your Company], we believe innovation should move at the speed of thought. Our 3D printing solutions help businesses, designers, and creators rapidly prototype, test, and scale their ideas into reality. Whether you need functional prototypes, intricate models, or production-ready parts, we deliver with unmatched quality.",
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
        description:
          "Cut your development cycle in half by producing accurate prototypes in hours instead of weeks. Test form, fit, and function with high fidelity models.",
        image: "/assets/services/3d-printing/prototyping.jpg",
      },
      {
        title: "Industrial-Grade Manufacturing",
        description:
          "Produce durable, functional parts suitable for aerospace, automotive, medical, and industrial applications — engineered for performance.",
        image: "/assets/services/3d-printing/industrial.jpg",
      },
      {
        title: "Custom & Creative Applications",
        description:
          "From art installations to architectural models, our 3D printing services give creators the freedom to experiment and build without limits.",
        image: "/assets/services/3d-printing/creative.jpg",
      },
      {
        title: "On-Demand Production",
        description:
          "No minimum order quantities — print only what you need, when you need it. Perfect for startups and custom production runs.",
        image: "/assets/services/3d-printing/on-demand.jpg",
      },
    ],

    process: {
      title: "Our Proven 3D Printing Workflow",
      steps: [
        { step: "1. Concept & Consultation", detail: "We discuss your goals, review your CAD files, and provide expert guidance on design optimization." },
        { step: "2. Material Selection", detail: "Choose from a wide range of materials tailored to strength, flexibility, transparency, or aesthetics." },
        { step: "3. Precision Printing", detail: "Your model is printed with the latest high-resolution 3D printers for maximum accuracy." },
        { step: "4. Post-Processing & Finishing", detail: "We enhance durability and appearance with sanding, painting, or surface treatments." },
        { step: "5. Delivery", detail: "Receive your finished product, inspected and quality-checked, ready for immediate use." },
      ],
      image: "/assets/services/3d-printing/process.jpg",
    },

    gallery: {
      title: "Explore Our 3D Creations",
      type: "carousel", // flag for slider
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
        { name: "Healthcare", description: "Custom prosthetics, dental aligners, and anatomical models for medical innovation.", icon: "/assets/icons/healthcare.svg" },
        { name: "Automotive", description: "Functional prototypes, jigs, and small-batch manufacturing for vehicles.", icon: "/assets/icons/automotive.svg" },
        { name: "Architecture", description: "Accurate and detailed scale models to bring design concepts to life.", icon: "/assets/icons/architecture.svg" },
        { name: "Consumer Products", description: "From gadget casings to custom décor, we help brands deliver unique solutions.", icon: "/assets/icons/consumer.svg" },
      ],
    },

    faqs: [
      { question: "What file formats do you accept for 3D printing?", answer: "We accept STL, OBJ, and STEP files. If you only have design sketches, our team can help convert them into printable CAD files." },
      { question: "How fast can I get my 3D prints?", answer: "Standard turnaround is 2–3 days, but we offer same-day delivery for urgent projects." },
      { question: "Do you offer bulk production?", answer: "Yes, we provide small-batch and bulk 3D printing solutions for startups and established businesses." },
      { question: "Can you handle post-processing?", answer: "Absolutely! We offer painting, polishing, assembly, and even packaging for your prints." },
    ],

    testimonials: [
      { name: "Sarah M., Product Designer", feedback: "Their 3D printing service saved us weeks of development time. The detail and durability were incredible!", image: "/assets/testimonials/sarah.jpg" },
      { name: "James R., Architect", feedback: "Our clients were blown away by the precision of the scale models. Highly recommend their services.", image: "/assets/testimonials/james.jpg" },
    ],

    benefits: [
      "Accelerate time-to-market with rapid prototyping",
      "Reduce manufacturing costs with on-demand printing",
      "Gain access to advanced materials and technologies",
      "Customize designs without production constraints",
      "Enhance innovation with scalable, eco-friendly solutions",
    ],

    callToAction: {
      headline: "Turn Your Ideas Into Reality",
      subheadline: "Partner with us for professional 3D printing solutions that elevate your business.",
      buttonText: "Request a Free Quote",
      buttonLink: "/contact",
    },
  },
];

export default servicesData;
