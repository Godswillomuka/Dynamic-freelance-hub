// const servicesData = [
//   {
//     slug: "digital-offset-printing",
//     title: "Digital & Offset Printing",
//     tagline: "High-quality print solutions for any run size.",
//     hero: {
//       image: "https://source.unsplash.com/1200x800/?printing,offset,digital",
//       headline: "Precision Printing for Every Project",
//       subheadline: "From one-off digital runs to high-volume offset jobs — impeccable color, speed, and reliability.",
//       ctaButton: "Request a Quote",
//       ctaLink: "/contact"
//     },
//     stats: [
//       { value: "99.5%", label: "Color Accuracy" },
//       { value: "1-7 days", label: "Turnaround" },
//       { value: "1-10,000+", label: "Run Sizes" },
//       { value: "1000+", label: "Projects Completed" }
//     ],
//     overview: {
//       title: "Flexible Digital & Offset Printing",
//       description: "We combine modern digital presses with traditional offset capabilities to deliver vibrant prints optimized for cost and scale.",
//       highlights: [
//         "Short-run digital for fast turnarounds",
//         "High-volume offset for consistent unit costs",
//         "Advanced color management and finishing",
//         "Proofing and prepress services included"
//       ],
//       images: [
//         "https://source.unsplash.com/800x600/?digital,printing,press",
//         "https://source.unsplash.com/800x600/?offset,printing,press"
//       ]
//     },
//     features: [
//       { title: "Color Management", description: "Industry-standard profiling for accurate, repeatable color.", image: "https://source.unsplash.com/900x700/?color,proofing", icon: "fa-eye-dropper" },
//       { title: "Large & Small Runs", description: "Cost-effective options for prototypes or full production runs.", image: "https://source.unsplash.com/900x700/?print,run", icon: "fa-print" },
//       { title: "Special Inks & Papers", description: "Metallics, varnishes and premium stocks available.", image: "https://source.unsplash.com/900x700/?paper,ink", icon: "fa-fill-drip" },
//       { title: "Prepress & Proofing", description: "Digital proofs and hard-copy signoffs before production.", image: "https://source.unsplash.com/900x700/?proofing,prepress", icon: "fa-check-circle" }
//     ],
//     materials: {
//       title: "Substrates & Inks",
//       description: "Choose the right paper, card, and ink for your application.",
//       categories: [
//         { name: "Paper Stocks", items: [ { name: "Coated", description: "Smooth finish, vibrant color" }, { name: "Uncoated", description: "Natural feel for stationery" }, { name: "Cardstock", description: "Durable for business cards" } ] },
//         { name: "Specialty", items: [ { name: "Synthetic", description: "Water-resistant, durable" }, { name: "Recycled", description: "Eco-conscious options" } ] },
//         { name: "Inks & Coatings", items: [ { name: "CMYK + Spot", description: "Accurate color reproduction" }, { name: "UV/Gloss Varnish", description: "Protection and finish" } ] }
//       ]
//     },
//     technology: {
//       title: "Printing Equipment",
//       description: "A mix of digital and offset presses to match quality and volume needs.",
//       printers: [
//         { name: "High-Speed Digital Press", type: "Digital", resolution: "1200 dpi", bestFor: "Short runs, fast proofs", image: "https://source.unsplash.com/900x700/?digital,press" },
//         { name: "4-Color Offset Press", type: "Offset", resolution: "2400 dpi", bestFor: "Large volume, consistent color", image: "https://source.unsplash.com/900x700/?offset,press" }
//       ]
//     },
//     process: {
//       title: "Our Print Production Workflow",
//       steps: [
//         { step: "1. File & Proof Review", detail: "Check files, run preflight, produce proofs.", icon: "fa-file-check" },
//         { step: "2. Material Selection", detail: "Choose stocks and finishes for the job.", icon: "fa-palette" },
//         { step: "3. Press Setup", detail: "Calibrate presses and color profiles.", icon: "fa-cogs" },
//         { step: "4. Production Run", detail: "Execute digital or offset print run.", icon: "fa-print" },
//         { step: "5. Finishing & Delivery", detail: "Cutting, binding, coating, and shipping.", icon: "fa-truck" }
//       ],
//       image: "https://source.unsplash.com/1000x700/?print,workflow"
//     },
//     gallery: { title: "Print Samples", type: "carousel", images: [ { src: "https://source.unsplash.com/1200x800/?business,card,printing", caption: "Business cards and stationery" }, { src: "https://source.unsplash.com/1200x800/?brochure,print", caption: "Marketing brochures" }, { src: "https://source.unsplash.com/1200x800/?catalog,print", caption: "Product catalogs" } ] },
//     industries: { title: "Industries We Support", sectors: [ { name: "Retail", description: "Packaging and promotional prints" }, { name: "Corporate", description: "Reports, stationery, communications" }, { name: "Publishing", description: "Magazines and catalogs" } ] },
//     caseStudies: [ { title: "Retail Chain Seasonal Catalog", challenge: "Tight seasonal deadlines for catalog production.", solution: "Combined short-run digital proofs and offset volume runs to meet deadlines.", results: ["On-time delivery", "15% lower unit cost"], image: "https://source.unsplash.com/1200x800/?catalog,retail" }, { title: "Startup Launch Kit", challenge: "Affordable high-quality packaging and collateral.", solution: "Short-run digital prints with luxury finishing.", results: ["Launch-ready in 5 days", "High perceived value"], image: "https://source.unsplash.com/1200x800/?packaging,brochure" } ],
//     faqs: [ { question: "What file formats do you accept?", answer: "PDF, AI, EPS, PSD and common image files at print resolution (300 DPI)." }, { question: "Can you match brand colors?", answer: "Yes — we use color profiling and can print spot colors (Pantone) where required." }, { question: "Do you offer fulfillment?", answer: "Yes — kitting, packing and direct-to-customer fulfillment available." } ],
//     testimonials: [ { name: "Emma K., Marketing Manager", feedback: "Reliable color and fast turnarounds — our go-to for catalogs.", image: "https://i.pravatar.cc/120?img=15", rating: 5 }, { name: "Oliver D., Founder", feedback: "Great short-run quality for our startup marketing.", image: "https://i.pravatar.cc/120?img=28", rating: 5 } ],
//     benefits: [ "Flexible run sizes", "Professional color management", "Wide substrate selection", "Full finishing services" ],
//     pricingOptions: { title: "Pricing Plans", description: "Options for prototypes through enterprise runs.", plans: [ { name: "Prototype Run", price: "From $30", description: "Small runs for proofs", features: ["Digital print", "Basic finishing"], bestFor: "Proofs, small campaigns" }, { name: "Production Run", price: "From $0.50/unit", description: "Offset pricing for volume", features: ["Offset press", "Custom finishing"], bestFor: "Catalogs, brochures" }, { name: "Premium Finish", price: "From $150", description: "Luxury paper and coatings", features: ["Special inks", "Embossing"], bestFor: "Premium packaging" } ] },
//     callToAction: { headline: "Ready to Print?", subheadline: "Get a tailored quote for your project.", buttonText: "Request a Quote", buttonLink: "/contact", secondaryButtonText: "View Samples", secondaryButtonLink: "/portfolio" },
//     certifications: { title: "Standards & Certifications", items: [ { name: "FSC Paper Options", icon: "fa-tree" }, { name: "ISO Color Management", icon: "fa-eye" }, { name: "Quality Guarantee", icon: "fa-award" } ] }
//   },

//   // Large Format Printing
//   {
//     slug: "large-format-printing",
//     title: "Large Format Printing",
//     tagline: "Bold visuals at any scale.",
//     hero: {
//       image: "https://source.unsplash.com/1200x800/?billboard,large-format",
//       headline: "Impactful Large-Scale Graphics",
//       subheadline: "High-resolution murals, billboards, and banners that stand out indoors and out.",
//       ctaButton: "Get a Quote",
//       ctaLink: "/contact"
//     },
//     stats: [ { value: "1000m²+", label: "Monthly Output" }, { value: "Outdoor Durable", label: "Weather Resistant" }, { value: "Up to 10m", label: "Max Print Width" }, { value: "500+", label: "Installations" } ],
//     overview: { title: "Large Format Capabilities", description: "From retail wraps to event backdrops, we print large graphics with eye-catching detail and durable materials.", highlights: [ "Wide-format inkjet for vivid colors", "Weatherproof and UV-stable inks", "Installation services available", "Custom mounting and framing" ], images: [ "https://source.unsplash.com/800x600/?billboard,print", "https://source.unsplash.com/800x600/?banner,print" ] },
//     features: [ { title: "Outdoor & Indoor Materials", description: "Vinyl, mesh, fabric and more for the right application.", image: "https://source.unsplash.com/900x700/?vinyl,banner", icon: "fa-globe" }, { title: "High-Resolution Output", description: "Large prints with crisp detail at close distances.", image: "https://source.unsplash.com/900x700/?large,print", icon: "fa-expand" }, { title: "Fast Turnaround & Installation", description: "Printing, finishing, and professional installation.", image: "https://source.unsplash.com/900x700/?install,signage", icon: "fa-tools" }, { title: "Custom Finishing", description: "Hemmed edges, grommets, mounting, and frames.", image: "https://source.unsplash.com/900x700/?finishing,print", icon: "fa-frame" } ],
//     materials: { title: "Material Options", description: "Robust media for long-term installs or short-term promos.", categories: [ { name: "Vinyl & Mesh", items: [ { name: "PVC Vinyl", description: "Durable and weather resistant" }, { name: "Mesh Vinyl", description: "Wind-permeable for large facades" } ] }, { name: "Fabric & Backdrops", items: [ { name: "Polyester", description: "Seamless dye-sublimation prints" }, { name: "Canvas", description: "Premium textured finish" } ] }, { name: "Rigid Media", items: [ { name: "Foamboard", description: "Lightweight displays" }, { name: "Correx", description: "Reusable signage board" } ] } ] },
//     technology: { title: "Printers & Inks", description: "Latex, UV and solvent printers for diverse needs.", printers: [ { name: "Wide-format UV", type: "UV", resolution: "1200 dpi", bestFor: "Rigid media and outdoor signs", image: "https://source.unsplash.com/900x700/?uv,printer" }, { name: "Eco-Solvent Roll", type: "Eco-Solvent", resolution: "900 dpi", bestFor: "Vinyl and vehicle wraps", image: "https://source.unsplash.com/900x700/?vinyl,printer" } ] },
//     process: { title: "Production Steps", steps: [ { step: "1. Site Survey & Measurement", detail: "Confirm installation dimensions and access.", icon: "fa-ruler" }, { step: "2. Material Selection", detail: "Choose media and inks for durability.", icon: "fa-palette" }, { step: "3. Print & Finish", detail: "Produce and finish with reinforcements.", icon: "fa-print" }, { step: "4. Installation", detail: "Professional mounting and safety checks.", icon: "fa-hands" }, { step: "5. Maintenance", detail: "Guidance for cleaning and care.", icon: "fa-life-ring" } ], image: "https://source.unsplash.com/1000x700/?installation,signage" },
//     gallery: { title: "Large Format Gallery", type: "carousel", images: [ { src: "https://source.unsplash.com/1200x800/?billboard,advertising", caption: "Outdoor billboard" }, { src: "https://source.unsplash.com/1200x800/?vehicle,wrap", caption: "Vehicle wrap" }, { src: "https://source.unsplash.com/1200x800/?shop,window,graphics", caption: "Retail window graphics" } ] },
//     industries: { title: "Ideal For", sectors: [ { name: "Retail", description: "Storefronts, promotions" }, { name: "Events", description: "Banners and backdrops" }, { name: "Outdoor Advertising", description: "Billboards and hoardings" } ] },
//     caseStudies: [ { title: "Festival Outdoor Branding", challenge: "Multiple large assets in tight timeline.", solution: "On-site production and staged installations.", results: ["All installs completed before opening", "High visibility"], image: "https://source.unsplash.com/1200x800/?festival,banners" }, { title: "Vehicle Fleet Wraps", challenge: "Consistent branding across fleet.", solution: "Color-matched vinyl wraps and shop installation.", results: ["Professional fleet presence", "Quick turnaround"], image: "https://source.unsplash.com/1200x800/?fleet,wraps" } ],
//     faqs: [ { question: "How large can you print?", answer: "We can produce prints up to 10m wide; larger jobs can be tiled or panelled." }, { question: "Are outdoor prints weatherproof?", answer: "Yes — we use UV-stable inks and lamination options for longevity." }, { question: "Do you install?", answer: "Yes, we offer professional installation and site surveys." } ],
//     testimonials: [ { name: "Hannah P., Events Coordinator", feedback: "Flawless festival signage and quick installation.", image: "https://i.pravatar.cc/120?img=22", rating: 5 }, { name: "Rob K., Store Manager", feedback: "Our storefront has never looked better after their window graphics.", image: "https://i.pravatar.cc/120?img=10", rating: 5 } ],
//     benefits: [ "High-impact visuals", "Durable outdoor materials", "Full-service installation" ],
//     pricingOptions: { title: "Options & Pricing", description: "Custom quotes based on size and material.", plans: [ { name: "Banner", price: "From $25", description: "Short-term promotional banners", features: ["Hemmed, grommets"], bestFor: "Promotions" }, { name: "Premium Print", price: "From $200", description: "Large fabric/backdrop solutions", features: ["Sewn hems, pole pockets"], bestFor: "Events" }, { name: "Fleet Wrap", price: "From $800", description: "Vehicle branding solutions", features: ["Color match, installation"], bestFor: "Vehicles" } ] },
//     callToAction: { headline: "Make a Big Impression", subheadline: "Let’s plan your large-format project.", buttonText: "Request a Quote", buttonLink: "/contact", secondaryButtonText: "View Installations", secondaryButtonLink: "/portfolio" },
//     certifications: { title: "Materials & Standards", items: [ { name: "UV-Stable Inks", icon: "fa-sun" }, { name: "Professional Installation Standards", icon: "fa-hard-hat" } ] }
//   },

//   // Custom Packaging & Labels
//   {
//     slug: "custom-packaging-labels",
//     title: "Custom Packaging & Labels",
//     tagline: "Packaging that protects, sells, and delights.",
//     hero: { image: "https://source.unsplash.com/1200x800/?packaging,labels", headline: "Custom Packaging Designed to Convert", subheadline: "Branded boxes, labels and inserts that elevate your product experience.", ctaButton: "Start a Packaging Project", ctaLink: "/contact" },
//     stats: [ { value: "100+", label: "Custom dielines" }, { value: "2-14 days", label: "Lead Time" }, { value: "Sustainable Options", label: "Eco Choices" }, { value: "1000+", label: "Boxes Produced" } ],
//     overview: { title: "Packaging Solutions Tailored to Your Brand", description: "From retail-ready luxury boxes to efficient ship-ready mailers, we design and produce packaging that matches your brand and logistics needs.", highlights: [ "Structural design and dielines", "Label printing and tamper seals", "Sustainable materials available", "Prototyping and short-run production" ], images: [ "https://source.unsplash.com/800x600/?box,packaging", "https://source.unsplash.com/800x600/?labels,packaging" ] },
//     features: [ { title: "Structural Packaging", description: "Custom dielines and prototypes to validate fit and unboxing.", image: "https://source.unsplash.com/900x700/?dieline,prototype", icon: "fa-box" }, { title: "Labeling Solutions", description: "Pressure-sensitive, shrink sleeves, and direct-thermal labels.", image: "https://source.unsplash.com/900x700/?labels,roll", icon: "fa-tag" }, { title: "Sustainable Options", description: "Recycled and biodegradable boards and inks.", image: "https://source.unsplash.com/900x700/?eco,packaging", icon: "fa-leaf" }, { title: "Assembly & Kitting", description: "Full packaging assembly and insert placement services.", image: "https://source.unsplash.com/900x700/?kitting,packaging", icon: "fa-box-open" } ],
//     materials: { title: "Materials & Finishes", description: "Choose the right board, laminate and coatings for presentation and protection.", categories: [ { name: "Boards & Papers", items: [ { name: "Folding Carton", description: "Retail boxes" }, { name: "Corrugated", description: "Shipping strength" } ] }, { name: "Labels & Films", items: [ { name: "BOPP", description: "Durable label film" }, { name: "Paper Labels", description: "Printable and recyclable" } ] }, { name: "Finishes", items: [ { name: "Soft Touch", description: "Luxury tactile finish" }, { name: "Gloss/Matte Lamination", description: "Appearance and protection" } ] } ] },
//     technology: { title: "Packaging Tech", description: "Digital and offset label presses, finishing and die-cutting.", printers: [ { name: "Label Press", type: "Digital", resolution: "1200 dpi", bestFor: "Short-run labels", image: "https://source.unsplash.com/900x700/?label,press" }, { name: "Die Cutter", type: "Finishing", resolution: "n/a", bestFor: "Custom shapes", image: "https://source.unsplash.com/900x700/?die,cutting" } ] },
//     process: { title: "Packaging Workflow", steps: [ { step: "1. Brief & Specs", detail: "Discuss product dimensions and branding.", icon: "fa-comments" }, { step: "2. Structural Design", detail: "Create dielines and prototypes.", icon: "fa-ruler-combined" }, { step: "3. Material Selection", detail: "Select board, inks and finishes.", icon: "fa-palette" }, { step: "4. Production & Finishing", detail: "Print, die-cut and assemble.", icon: "fa-industry" }, { step: "5. QA & Fulfillment", detail: "Inspect and prepare for shipping.", icon: "fa-clipboard-check" } ], image: "https://source.unsplash.com/1000x700/?packaging,production" },
//     gallery: { title: "Packaging Examples", type: "carousel", images: [ { src: "https://source.unsplash.com/1200x800/?luxury,packaging", caption: "Luxury retail box" }, { src: "https://source.unsplash.com/1200x800/?shipping,box", caption: "E-commerce mailer" }, { src: "https://source.unsplash.com/1200x800/?label,product", caption: "Custom labels" } ] },
//     industries: { title: "Sectors", sectors: [ { name: "E-commerce", description: "Protective and branded mailers" }, { name: "Retail", description: "Shelf-ready packaging" }, { name: "Food & Beverage", description: "Compliant and attractive labels" } ] },
//     caseStudies: [ { title: "Subscription Box Launch", challenge: "Need premium unboxing with sustainable materials.", solution: "Custom folding carton with soft-touch lamination and recyclable inserts.", results: ["Reduced waste", "High customer satisfaction"], image: "https://source.unsplash.com/1200x800/?subscription,box" }, { title: "Label Redesign for Food Brand", challenge: "Regulatory and shelf appeal requirements.", solution: "Clear label hierarchy and durable BOPP labels.", results: ["Improved shelf presence", "Compliance ensured"], image: "https://source.unsplash.com/1200x800/?food,label" } ],
//     faqs: [ { question: "Can you prototype packaging?", answer: "Yes — we produce dieline prototypes and mockups for approval." }, { question: "Do you offer sustainable materials?", answer: "Yes — recycled stocks and soy-based inks are available." }, { question: "What is minimum order quantity?", answer: "Depends on material; we offer short runs and scalable production." } ],
//     testimonials: [ { name: "Aisha R., Brand Manager", feedback: "Packaging elevated our launch and stayed within budget.", image: "https://i.pravatar.cc/120?img=40", rating: 5 }, { name: "Carlos M., Operations", feedback: "Kitting and fulfillment were handled professionally.", image: "https://i.pravatar.cc/120?img=18", rating: 5 } ],
//     benefits: [ "Custom dielines", "Sustainable choices", "End-to-end packaging" ],
//     pricingOptions: { title: "Packaging Plans", description: "From prototype to full production.", plans: [ { name: "Prototype", price: "From $80", description: "Single prototype and dieline", features: ["One prototype", "Design support"], bestFor: "Product validation" }, { name: "Short Run", price: "From $300", description: "Small-batch production", features: ["Custom print", "Assembly"], bestFor: "Crowdfunding" }, { name: "Production", price: "From $1200", description: "High-volume packaging", features: ["Economies of scale", "Quality control"], bestFor: "Retail launch" } ] },
//     callToAction: { headline: "Package with Purpose", subheadline: "Let us build packaging that converts.", buttonText: "Request a Quote", buttonLink: "/contact", secondaryButtonText: "See Packaging Samples", secondaryButtonLink: "/portfolio" },
//     certifications: { title: "Compliance & Standards", items: [ { name: "Food-Safe Labels", icon: "fa-utensils" }, { name: "FSC Options", icon: "fa-tree" } ] }
//   },

//   // Stationery Printing
//   {
//     slug: "stationery-printing",
//     title: "Stationery Printing",
//     tagline: "Memorable stationery for professional brands.",
//     hero: { image: "https://source.unsplash.com/1200x800/?stationery,letterhead,business-card", headline: "Premium Stationery & Business Collateral", subheadline: "Business cards, letterheads, envelopes and kits that reinforce your brand identity.", ctaButton: "Order Samples", ctaLink: "/contact" },
//     stats: [ { value: "48h", label: "Sample Turnaround" }, { value: "100+", label: "Paper Options" }, { value: "5M+", label: "Business Cards Produced" }, { value: "99%", label: "On-Time Delivery" } ],
//     overview: { title: "Professional Stationery Services", description: "Beautifully produced stationery helps build trust — we offer tactile options and finishing to make the right impression.", highlights: [ "Letterpress and foil stamping", "Die-cut shapes and embossing", "Matching packaging and kits", "Quick samples and proofs" ], images: [ "https://source.unsplash.com/800x600/?business,card,letterpress", "https://source.unsplash.com/800x600/?envelope,stationery" ] },
//     features: [ { title: "Business Cards", description: "Various stocks, shapes and finishes including foil and letterpress.", image: "https://source.unsplash.com/900x700/?business,card", icon: "fa-id-badge" }, { title: "Letterheads & Envelopes", description: "Coordinated stationery suites for offices and correspondence.", image: "https://source.unsplash.com/900x700/?letterhead,envelope", icon: "fa-envelope" }, { title: "Presentation Folders", description: "Branded folders and inserts for pitches.", image: "https://source.unsplash.com/900x700/?folder,presentation", icon: "fa-folder-open" }, { title: "Finishing Services", description: "Foil, embossing, spot UV and soft-touch coatings.", image: "https://source.unsplash.com/900x700/?foil,embossing", icon: "fa-sparkles" } ],
//     materials: { title: "Paper & Finishes", description: "Curated paper selections and specialty finishes.", categories: [ { name: "Natural & Cotton", items: [ { name: "Cotton Rag", description: "Premium tactile finish" }, { name: "Linen", description: "Subtle texture" } ] }, { name: "Special Finishes", items: [ { name: "Letterpress", description: "Deep impression" }, { name: "Foil Stamp", description: "Metallic accents" } ] }, { name: "Envelopes", items: [ { name: "Windowed", description: "Mail-ready" }, { name: "Interleaved", description: "Custom sizes" } ] } ] },
//     technology: { title: "Finishing & Presses", description: "Letterpress, digital and specialty finishing equipment.", printers: [ { name: "Letterpress Station", type: "Letterpress", resolution: "n/a", bestFor: "Luxury cards", image: "https://source.unsplash.com/900x700/?letterpress" }, { name: "Digital Finishing", type: "Digital", resolution: "1200 dpi", bestFor: "Short runs", image: "https://source.unsplash.com/900x700/?finishing" } ] },
//     process: { title: "Stationery Production", steps: [ { step: "1. Design & Proofs", detail: "Approve layout and finishes.", icon: "fa-pen" }, { step: "2. Paper Selection", detail: "Choose stock and coatings.", icon: "fa-palette" }, { step: "3. Print & Finish", detail: "Execute specialty processes.", icon: "fa-industry" }, { step: "4. Quality Check", detail: "Inspect impression and color.", icon: "fa-check" }, { step: "5. Packaging", detail: "Pack for delivery or gifting.", icon: "fa-box-open" } ], image: "https://source.unsplash.com/1000x700/?stationery,printing" },
//     gallery: { title: "Stationery Gallery", type: "carousel", images: [ { src: "https://source.unsplash.com/1200x800/?business,card,foil", caption: "Foil-stamped business card" }, { src: "https://source.unsplash.com/1200x800/?letterpress,card", caption: "Letterpress stationery" } ] },
//     industries: { title: "Who Uses This", sectors: [ { name: "Corporate", description: "Office stationery and official communications" }, { name: "Agencies", description: "Presentation materials and client kits" }, { name: "Boutiques", description: "Luxury packaging and card sets" } ] },
//     caseStudies: [ { title: "Law Firm Identity Kit", challenge: "Need distinguished stationery for client trust.", solution: "Cotton paper letterheads and embossed seals.", results: ["Positive client feedback", "Consistent brand image"], image: "https://source.unsplash.com/1200x800/?law,stationery" }, { title: "Startup Card Launch", challenge: "Unique card that stands out at events.", solution: "Thick board with rounded corners and soft-touch finish.", results: ["High recall at events"], image: "https://source.unsplash.com/1200x800/?startup,businesscard" } ],
//     faqs: [ { question: "Do you offer rush business cards?", answer: "Yes — same-day and next-day options available for selected stocks." }, { question: "Can you do custom die-cuts?", answer: "Yes — bespoke shapes and rounded corners are available." } ],
//     testimonials: [ { name: "Lina S., Creative Director", feedback: "Stationery quality matched our premium positioning.", image: "https://i.pravatar.cc/120?img=21", rating: 5 }, { name: "Mark H., CEO", feedback: "Impressive tactile finishes — clients noticed immediately.", image: "https://i.pravatar.cc/120?img=7", rating: 5 } ],
//     benefits: [ "Luxury finishes", "Fast samples", "Coordinated suites" ],
//     pricingOptions: { title: "Stationery Pricing", description: "Sample and production pricing available.", plans: [ { name: "Sample Pack", price: "From $25", description: "Sample set of papers and finishes", features: ["3 sample cards"], bestFor: "Decision making" }, { name: "Standard Set", price: "From $120", description: "Business cards, letterheads, envelopes", features: ["Coordinated suite"], bestFor: "Small teams" }, { name: "Premium Suite", price: "From $450", description: "Luxury finishes and packaging", features: ["Foil, embossing"], bestFor: "High-end brands" } ] },
//     callToAction: { headline: "Make a Lasting Impression", subheadline: "Order stationery samples or full suites.", buttonText: "Order Samples", buttonLink: "/contact", secondaryButtonText: "View Looks", secondaryButtonLink: "/portfolio" },
//     certifications: { title: "Standards", items: [ { name: "Archival Paper Options", icon: "fa-archive" }, { name: "Quality Guarantee", icon: "fa-award" } ] }
//   },

//   // Special Finishes
//   {
//     slug: "special-finishes",
//     title: "Special Finishes",
//     tagline: "Finishing touches that elevate print.",
//     hero: { image: "https://source.unsplash.com/1200x800/?foil,embossing,spot-uv", headline: "Add Luxurious Finishes to Your Prints", subheadline: "Foil, embossing, spot UV and speciality coatings for premium impact.", ctaButton: "Explore Finishes", ctaLink: "/contact" },
//     stats: [ { value: "20+", label: "Finish Options" }, { value: "Custom", label: "Die & Plate Capabilities" }, { value: "5000+", label: "Pieces Finished Monthly" }, { value: "99%", label: "Satisfaction" } ],
//     overview: { title: "Premium Print Finishing", description: "We offer a wide array of finishing services to add texture, shine, and depth to your printed materials.", highlights: [ "Hot foil stamping", "Embossing & debossing", "Spot UV and varnishes", "Soft-touch and tactile coatings" ], images: [ "https://source.unsplash.com/800x600/?foil,print", "https://source.unsplash.com/800x600/?embossing" ] },
//     features: [ { title: "Foil Stamping", description: "Metallic and holographic foil options for premium accents.", image: "https://source.unsplash.com/900x700/?foil,stamp", icon: "fa-star" }, { title: "Embossing & Debossing", description: "Create depth and tactile interest.", image: "https://source.unsplash.com/900x700/?emboss,deboss", icon: "fa-layer-group" }, { title: "Spot UV", description: "Gloss accents that contrast with matte surfaces.", image: "https://source.unsplash.com/900x700/?spot,uv", icon: "fa-water" }, { title: "Textured Coatings", description: "Soft-touch and other tactile laminates.", image: "https://source.unsplash.com/900x700/?soft-touch,laminate", icon: "fa-hand-holding-heart" } ],
//     materials: { title: "Coatings & Foils", description: "A curated set of foils, films and laminates.", categories: [ { name: "Foils", items: [ { name: "Metallic", description: "Gold, silver and custom colors" }, { name: "Holographic", description: "Iridescent effects" } ] }, { name: "Laminates", items: [ { name: "Soft-Touch", description: "Velvety finish" }, { name: "Gloss", description: "Shiny protective gloss" } ] }, { name: "Varnishes", items: [ { name: "Spot UV", description: "Selective gloss accents" }, { name: "Matte Varnish", description: "Subtle protection" } ] } ] },
//     technology: { title: "Finishing Equipment", description: "Hot-foil machines, embossing presses and UV coaters for consistent results.", printers: [ { name: "Hot Foil Press", type: "Finishing", resolution: "n/a", bestFor: "Foil accents", image: "https://source.unsplash.com/900x700/?foil,press" }, { name: "UV Coater", type: "Coating", resolution: "n/a", bestFor: "Spot UV", image: "https://source.unsplash.com/900x700/?uv,coater" } ] },
//     process: { title: "Finishing Workflow", steps: [ { step: "1. Material Test", detail: "Confirm compatibility with chosen finish.", icon: "fa-vial" }, { step: "2. Die & Plate Prep", detail: "Create tooling for emboss/deboss.", icon: "fa-cube" }, { step: "3. Finish Application", detail: "Apply foils, coatings or embossing.", icon: "fa-hammer" }, { step: "4. Inspection", detail: "Check registration and finish quality.", icon: "fa-eye" }, { step: "5. Final Packaging", detail: "Protect finished pieces for delivery.", icon: "fa-box" } ], image: "https://source.unsplash.com/1000x700/?finishing,foil" },
//     gallery: { title: "Finish Examples", type: "carousel", images: [ { src: "https://source.unsplash.com/1200x800/?foil,card", caption: "Foil-stamped invitation" }, { src: "https://source.unsplash.com/1200x800/?embossing,print", caption: "Embossed cover" } ] },
//     industries: { title: "Who Uses Finishes", sectors: [ { name: "Luxury Retail", description: "Packaging and invitations" }, { name: "Corporate", description: "Annual reports and awards" }, { name: "Events", description: "Invitations and VIP collateral" } ] },
//     caseStudies: [ { title: "Premium Invite Series", challenge: "High-end invitations with consistent foil registration.", solution: "Custom dies and foil stamping with QC checks.", results: ["Flawless registration", "Outstanding client feedback"], image: "https://source.unsplash.com/1200x800/?invitation,foil" } ],
//     faqs: [ { question: "Which stocks work best for foil?", answer: "Paper with some tooth and enough thickness (300gsm+) typically works best." }, { question: "Can you do holographic finishes?", answer: "Yes — holographic and custom foils available." } ],
//     testimonials: [ { name: "Sofia L., Events", feedback: "The finishes made our invitations unforgettable.", image: "https://i.pravatar.cc/120?img=9", rating: 5 }, { name: "Ben T., Brand Manager", feedback: "Consistent, beautiful foils across large runs.", image: "https://i.pravatar.cc/120?img=2", rating: 5 } ],
//     benefits: [ "Luxury finishes", "Custom tooling", "High-quality results" ],
//     pricingOptions: { title: "Finishing Options", description: "Tooling and per-piece pricing for specialty finishes.", plans: [ { name: "Single Finish", price: "From $150", description: "One finish type and small tooling", features: ["Proof", "Short-run"], bestFor: "Invitations" }, { name: "Multiple Finishes", price: "From $400", description: "Combine foil, emboss and spot UV", features: ["Custom dies"], bestFor: "Premium products" } ] },
//     callToAction: { headline: "Add the Perfect Finish", subheadline: "Request a finish sample pack to compare options.", buttonText: "Request Samples", buttonLink: "/contact", secondaryButtonText: "View Examples", secondaryButtonLink: "/portfolio" },
//     certifications: { title: "Quality", items: [ { name: "Tooling & Press Standards", icon: "fa-tools" }, { name: "Quality Guarantee", icon: "fa-award" } ] }
//   },

//   // Security Printing
//   {
//     slug: "security-printing",
//     title: "Security Printing",
//     tagline: "Secure documents and anti-counterfeit printing.",
//     hero: { image: "https://source.unsplash.com/1200x800/?security,printing,watermark", headline: "Protect Your Documents with Advanced Security Printing", subheadline: "Custom watermarks, microtext, tamper-evident labels, and serialized printing to protect assets and products.", ctaButton: "Discuss Security Needs", ctaLink: "/contact" },
//     stats: [ { value: "Serialized", label: "Numbering & Tracking" }, { value: "Tamper-Evident", label: "Seal Options" }, { value: "Micron Precision", label: "Microtext" }, { value: "Compliant", label: "Industry Standards" } ],
//     overview: { title: "Secure Printing Solutions", description: "We provide document security features for certificates, vouchers, tickets and product authentication.", highlights: [ "Watermarks and microtext", "Holographic and tamper seals", "Unique serialisation and QR verification", "Secure fulfillment and tracking" ], images: [ "https://source.unsplash.com/800x600/?security,watermark", "https://source.unsplash.com/800x600/?hologram,label" ] },
//     features: [ { title: "Serialisation & QR", description: "Unique codes and QR verification for each item.", image: "https://source.unsplash.com/900x700/?qr,serial", icon: "fa-qrcode" }, { title: "Holographic Seals", description: "Difficult-to-replicate holograms and foils.", image: "https://source.unsplash.com/900x700/?hologram,seal", icon: "fa-shield-alt" }, { title: "Watermarks & Microtext", description: "Subtle anti-counterfeit printing techniques.", image: "https://source.unsplash.com/900x700/?watermark,microtext", icon: "fa-eye" }, { title: "Secure Fulfillment", description: "Controlled packing and tracked delivery.", image: "https://source.unsplash.com/900x700/?secure,packing", icon: "fa-truck-monster" } ],
//     materials: { title: "Security Materials", description: "Special substrates and coatings for secure outputs.", categories: [ { name: "Security Papers", items: [ { name: "Watermarked", description: "Built-in security features" }, { name: "Tamper-evident", description: "Shows signs of tampering" } ] }, { name: "Holographic Foils", items: [ { name: "Custom Hologram", description: "Brand-specific holograms" } ] }, { name: "Secure Labels", items: [ { name: "Void Labels", description: "Tamper-evident void reveal" } ] } ] },
//     technology: { title: "Security Tech", description: "Specialised presses and verification systems.", printers: [ { name: "Microtext Printer", type: "Specialist", resolution: "High", bestFor: "Fine security features", image: "https://source.unsplash.com/900x700/?microtext,printer" }, { name: "Hologram Applicator", type: "Finishing", resolution: "n/a", bestFor: "Seals and tamper proofing", image: "https://source.unsplash.com/900x700/?hologram,applicator" } ] },
//     process: { title: "Security Printing Workflow", steps: [ { step: "1. Requirement Audit", detail: "Define security needs and compliance.", icon: "fa-clipboard-list" }, { step: "2. Design & Features", detail: "Integrate microtext, QR, holograms.", icon: "fa-brain" }, { step: "3. Secure Production", detail: "Controlled printing environment.", icon: "fa-user-shield" }, { step: "4. Serialization & Verification", detail: "Encode and test verification systems.", icon: "fa-lock" }, { step: "5. Secure Fulfillment", detail: "Tracked, signed delivery.", icon: "fa-shipping-fast" } ], image: "https://source.unsplash.com/1000x700/?secure,printing" },
//     gallery: { title: "Security Output Samples", type: "carousel", images: [ { src: "https://source.unsplash.com/1200x800/?ticket,security", caption: "Secure tickets with holograms" }, { src: "https://source.unsplash.com/1200x800/?certificate,watermark", caption: "Watermarked certificates" } ] },
//     industries: { title: "Who Needs It", sectors: [ { name: "Government", description: "Certificates and IDs" }, { name: "Events & Tix", description: "Anti-forgery tickets" }, { name: "Product Brands", description: "Authentication seals" } ] },
//     caseStudies: [ { title: "Event Ticketing Security", challenge: "High fraud risk for popular event.", solution: "Serialised QR codes and holographic seals.", results: ["Reduced fraud", "Faster entry verification"], image: "https://source.unsplash.com/1200x800/?ticket,qr" } ],
//     faqs: [ { question: "Can you serialise items?", answer: "Yes — barcodes, QR codes and numeric runs are supported." }, { question: "Do you store lists securely?", answer: "Yes — we offer secure data handling and controlled production." } ],
//     testimonials: [ { name: "Liam P., Operations", feedback: "Our certificates are now secure and easy to verify.", image: "https://i.pravatar.cc/120?img=30", rating: 5 } ],
//     benefits: [ "Anti-counterfeit features", "Secure fulfillment", "Traceability" ],
//     pricingOptions: { title: "Security Pricing", description: "Custom quotes based on features and volume.", plans: [ { name: "Basic Security", price: "From $0.50/unit", description: "Serial numbers and QR", features: ["Unique codes"], bestFor: "Tickets" }, { name: "Enhanced", price: "From $2/unit", description: "Holograms and tamper seals", features: ["Holograms"], bestFor: "Certificates" } ] },
//     callToAction: { headline: "Protect Your Documents", subheadline: "Talk to our security printing specialists.", buttonText: "Contact Us", buttonLink: "/contact", secondaryButtonText: "Request a Demo", secondaryButtonLink: "/portfolio" },
//     certifications: { title: "Compliance", items: [ { name: "Secure Data Handling", icon: "fa-lock" }, { name: "Quality Assurance", icon: "fa-award" } ] }
//   },

//   // 3D Printing (already provided; included here for completeness)
//   {
//     slug: "3d-printing",
//     title: "3D Printing",
//     tagline: "From imagination to reality in 3D.",
//     hero: { image: "https://source.unsplash.com/1200x800/?3d-printing,factory", headline: "Revolutionizing Ideas Through 3D Printing", subheadline: "Transform your digital designs into physical objects with speed, precision, and limitless creativity.", ctaButton: "Get a Free Quote", ctaLink: "/contact" },
//     stats: [ { value: "99.8%", label: "Client Satisfaction" }, { value: "24-48h", label: "Average Turnaround" }, { value: "50+", label: "Materials Available" }, { value: "500+", label: "Projects Completed" } ],
//     overview: { title: "Your Vision, Our 3D Expertise", description: "At [Your Company], we believe innovation should move at the speed of thought. Our 3D printing solutions help businesses, designers, and creators rapidly prototype, test, and scale their ideas into reality. Whether you need functional prototypes, intricate models, or production-ready parts, we deliver with unmatched quality.", highlights: [ "20+ material options including plastics, resins, and metal composites", "High-resolution printing up to 50 microns for extreme detail", "Fast turnaround with same-day or next-day delivery options", "Eco-friendly additive manufacturing process" ], images: [ "https://source.unsplash.com/800x600/?3d-printing,prototype", "https://source.unsplash.com/800x600/?resin,3d-printer" ] },
//     features: [ { title: "Rapid Prototyping", description: "Cut your development cycle in half by producing accurate prototypes in hours instead of weeks. Test form, fit, and function with high fidelity models.", image: "https://source.unsplash.com/900x700/?rapid-prototyping,3d-printing", icon: "fa-lightbulb" }, { title: "Industrial-Grade Manufacturing", description: "Produce durable, functional parts suitable for aerospace, automotive, medical, and industrial applications — engineered for performance.", image: "https://source.unsplash.com/900x700/?industrial,manufacturing,3d-print", icon: "fa-industry" }, { title: "Custom & Creative Applications", description: "From art installations to architectural models, our 3D printing services give creators the freedom to experiment and build without limits.", image: "https://source.unsplash.com/900x700/?3d-printed,art,design", icon: "fa-palette" }, { title: "On-Demand Production", description: "No minimum order quantities — print only what you need, when you need it. Perfect for startups and custom production runs.", image: "https://source.unsplash.com/900x700/?on-demand,manufacturing,3d-print", icon: "fa-bolt" } ],
//     materials: { title: "Comprehensive Material Selection", description: "Choose from our wide range of high-quality materials tailored to your specific application needs.", categories: [ { name: "Plastics", items: [ { name: "PLA", description: "Biodegradable, easy to print, great for prototypes" }, { name: "ABS", description: "Durable, impact-resistant, good for functional parts" }, { name: "PETG", description: "Chemical-resistant, food-safe, combines ease and strength" }, { name: "Nylon", description: "Strong, flexible, resistant to wear and impact" } ] }, { name: "Resins", items: [ { name: "Standard Resin", description: "High detail, smooth surface finish" }, { name: "Tough Resin", description: "Engineered for functional prototypes requiring durability" }, { name: "Dental Resin", description: "Biocompatible, for dental applications" }, { name: "Castable Resin", description: "Burns out cleanly for jewelry casting" } ] }, { name: "Specialty & Composite", items: [ { name: "Carbon Fiber", description: "Extreme stiffness and strength-to-weight ratio" }, { name: "Metal Filled", description: "PLA with metal particles for metallic appearance" }, { name: "Wood Filled", description: "PLA with wood fibers for wooden appearance" }, { name: "Flexible", description: "Rubber-like materials that bend and compress" } ] } ] },
//     technology: { title: "Cutting-Edge Printing Technology", description: "We invest in the latest equipment to ensure your prints are produced with the highest precision, reliability, and material capabilities.", printers: [ { name: "Formlabs Form 3L", type: "SLA (Stereolithography)", resolution: "25 microns", bestFor: "High-detail prototypes, dental models, jewelry casting.", image: "https://source.unsplash.com/900x700/?formlabs,3d-printer,resin" }, { name: "Markforged Mark Two", type: "FDM with Continuous Carbon Fiber", resolution: "50 microns", bestFor: "Industrial-strength, functional parts that replace metal.", image: "https://source.unsplash.com/900x700/?markforged,carbon-fiber,3d-print" }, { name: "HP Jet Fusion 5200", type: "Multi Jet Fusion", resolution: "80 microns", bestFor: "High-volume, end-use part production.", image: "https://source.unsplash.com/900x700/?hp,jet-fusion,3d-printing" } ] },
//     process: { title: "Our Proven 3D Printing Workflow", steps: [ { step: "1. Concept & Consultation", detail: "We discuss your goals, review your CAD files, and provide expert guidance on design optimization.", icon: "fa-comments" }, { step: "2. Material Selection", detail: "Choose from a wide range of materials tailored to strength, flexibility, transparency, or aesthetics.", icon: "fa-palette" }, { step: "3. Precision Printing", detail: "Your model is printed with the latest high-resolution 3D printers for maximum accuracy.", icon: "fa-print" }, { step: "4. Post-Processing & Finishing", detail: "We enhance durability and appearance with sanding, painting, or surface treatments.", icon: "fa-tools" }, { step: "5. Delivery", detail: "Receive your finished product, inspected and quality-checked, ready for immediate use.", icon: "fa-truck" } ], image: "https://source.unsplash.com/1000x700/?3d-printing,workflow,post-processing" },
//     gallery: { title: "Explore Our 3D Creations", type: "carousel", images: [ { src: "https://source.unsplash.com/1200x800/?3d-printed,prototype,automotive", caption: "Precision prototype for an automotive component" }, { src: "https://source.unsplash.com/1200x800/?architectural,scale-model,3d-print", caption: "Architectural scale model of a residential complex" }, { src: "https://source.unsplash.com/1200x800/?prosthetic,medical,3d-print", caption: "Custom prosthetic prototype designed for healthcare" }, { src: "https://source.unsplash.com/1200x800/?3d-printed,art,sculpture", caption: "Artistic sculpture produced with resin printing" } ] },
//     industries: { title: "Industries We Empower", sectors: [ { name: "Healthcare", description: "Custom prosthetics, dental aligners, and anatomical models for medical innovation.", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'><rect width='48' height='48' rx='8' fill='%23051945'/><rect x='21' y='10' width='6' height='28' fill='%23ffffff'/><rect x='10' y='21' width='28' height='6' fill='%23ffffff'/></svg>", examples: [ "Surgical guides", "Prosthetics", "Anatomical models", "Medical device prototypes" ] }, { name: "Automotive", description: "Functional prototypes, jigs, and small-batch manufacturing for vehicles.", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'><rect width='48' height='24' y='16' rx='6' fill='%23051945'/><circle cx='14' cy='38' r='5' fill='%23ffffff'/><circle cx='34' cy='38' r='5' fill='%23ffffff'/><rect x='8' y='18' width='32' height='10' rx='2' fill='%23ffffff' opacity='0.15'/></svg>", examples: [ "Concept models", "Custom tools", "End-use parts", "Interior components" ] }, { name: "Architecture", description: "Accurate and detailed scale models to bring design concepts to life.", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'><rect x='10' y='8' width='28' height='32' rx='4' fill='%23051945'/><rect x='18' y='14' width='4' height='4' fill='%23ffffff'/><rect x='26' y='14' width='4' height='4' fill='%23ffffff'/><rect x='18' y='22' width='4' height='4' fill='%23ffffff'/><rect x='26' y='22' width='4' height='4' fill='%23ffffff'/><rect x='18' y='30' width='12' height='6' fill='%23ffffff'/></svg>", examples: [ "Architectural models", "Topographical maps", "Design concepts", "Presentation models" ] } ] },
//     caseStudies: [ { title: "Medical Device Startup Accelerates Development", challenge: "Needed to iterate on a new surgical tool prototype weekly but faced 4-week lead times with traditional machining.", solution: "Rapid SLA printing with bio-compatible resins, delivering a new precise prototype every 48 hours.", results: [ "75% reduction in development time", "60% cost reduction", "15 design iterations in 2 months" ], image: "https://source.unsplash.com/1200x800/?medical,device,prototype,3d-print" }, { title: "Automotive Company Reduces Tooling Costs", challenge: "High costs for custom jigs and fixtures using traditional manufacturing methods.", solution: "On-demand 3D printing of custom tools with carbon-fiber reinforced materials.", results: [ "85% cost reduction for custom tools", "5-day turnaround instead of 3 weeks", "Lightweight yet durable tools" ], image: "https://source.unsplash.com/1200x800/?automotive,tooling,3d-printed" } ],
//     faqs: [ { question: "What file formats do you accept for 3D printing?", answer: "We accept STL, OBJ, and STEP files. If you only have design sketches, our team can help convert them into printable CAD files." }, { question: "How fast can I get my 3D prints?", answer: "Standard turnaround is 2–3 days, but we offer same-day delivery for urgent projects." }, { question: "Do you offer bulk production?", answer: "Yes, we provide small-batch and bulk 3D printing solutions for startups and established businesses." }, { question: "Can you handle post-processing?", answer: "Absolutely! We offer painting, polishing, assembly, and even packaging for your prints." }, { question: "What is the maximum size you can print?", answer: "Our large-format printers can handle objects up to 30 × 30 × 30 cm. For larger objects, we can print in parts and assemble them." }, { question: "Do you provide design services?", answer: "Yes, we have a team of expert designers who can help optimize your designs for 3D printing or create models from your concepts." } ],
//     testimonials: [ { name: "Sarah M., Product Designer", feedback: "Their 3D printing service saved us weeks of development time. The detail and durability were incredible!", image: "https://i.pravatar.cc/120?img=32", rating: 5 }, { name: "James R., Architect", feedback: "Our clients were blown away by the precision of the scale models. Highly recommend their services.", image: "https://i.pravatar.cc/120?img=12", rating: 5 }, { name: "Michael T., Engineering Manager", feedback: "The carbon fiber parts we ordered performed exactly as needed in our testing. Exceptional quality control.", image: "https://i.pravatar.cc/120?img=5", rating: 5 } ],
//     benefits: [ "Accelerate time-to-market with rapid prototyping", "Reduce manufacturing costs with on-demand printing", "Gain access to advanced materials and technologies", "Customize designs without production constraints", "Enhance innovation with scalable, eco-friendly solutions" ],
//     pricingOptions: { title: "Flexible Service Options", description: "We offer solutions for projects of any size and complexity.", plans: [ { name: "Standard Printing", price: "From $15", description: "Ideal for prototypes and basic models", features: ["PLA or ABS material", "Standard resolution", "Basic post-processing", "3-5 day turnaround"], bestFor: "Hobbyists, students, basic prototypes" }, { name: "Professional Printing", price: "From $45", description: "For high-detail, functional parts", features: ["Engineering materials", "High resolution", "Advanced post-processing", "1-3 day turnaround"], bestFor: "Professionals, functional prototypes" }, { name: "Industrial Printing", price: "From $80", description: "For end-use production parts", features: ["Industrial materials", "Ultra-high resolution", "Professional finishing", "Same-day options"], bestFor: "Manufacturing, end-use parts" } ] },
//     callToAction: { headline: "Turn Your Ideas Into Reality", subheadline: "Partner with us for professional 3D printing solutions that elevate your business.", buttonText: "Request a Free Quote", buttonLink: "/contact", secondaryButtonText: "View Portfolio", secondaryButtonLink: "/portfolio" },
//     certifications: { title: "Our Certifications & Standards", items: [ { name: "ISO 9001:2015 Certified", icon: "fa-certificate" }, { name: "FDA Compliant Materials", icon: "fa-clipboard-check" }, { name: "Sustainable Practices", icon: "fa-leaf" }, { name: "Quality Guarantee", icon: "fa-award" } ] }
//   },
//    // Logo Design & Brand Identity
//   {
//     slug: "logo-design-brand-identity",
//     title: "Logo Design & Brand Identity",
//     tagline: "Creating memorable brands that stand out.",
//     hero: {
//       image: "https://source.unsplash.com/1200x800/?logo,design,brand",
//       headline: "Build a Powerful Brand Identity",
//       subheadline: "From logo creation to complete brand systems that communicate your unique value.",
//       ctaButton: "Start Your Brand",
//       ctaLink: "/contact"
//     },
//     stats: [
//       { value: "500+", label: "Brands Created" },
//       { value: "3-6 weeks", label: "Project Timeline" },
//       { value: "Unlimited", label: "Revisions" },
//       { value: "100%", label: "Satisfaction" }
//     ],
//     overview: {
//       title: "Complete Brand Identity Solutions",
//       description: "We develop comprehensive brand identities that resonate with your audience and drive business growth.",
//       highlights: [
//         "Strategic logo design process",
//         "Complete brand style guides",
//         "Multi-format logo packages",
//         "Trademark guidance"
//       ],
//       images: [
//         "https://source.unsplash.com/800x600/?logo,design",
//         "https://source.unsplash.com/800x600/?brand,identity"
//       ]
//     },
//     features: [
//       { title: "Logo Design", description: "Unique, memorable logos that represent your core values.", image: "https://source.unsplash.com/900x700/?logo,creative", icon: "fa-pen-fancy" },
//       { title: "Brand Guidelines", description: "Comprehensive manuals ensuring consistent brand application.", image: "https://source.unsplash.com/900x700/?brand,guide", icon: "fa-book" },
//       { title: "Color Psychology", description: "Strategic color selection for emotional impact.", image: "https://source.unsplash.com/900x700/?color,psychology", icon: "fa-palette" },
//       { title: "Typography Systems", description: "Custom font pairings that enhance brand personality.", image: "https://source.unsplash.com/900x700/?typography,fonts", icon: "fa-font" }
//     ],
//     materials: {
//       title: "Deliverables Package",
//       description: "Complete set of assets for immediate brand implementation.",
//       categories: [
//         { name: "Logo Files", items: [ { name: "Vector Formats", description: "AI, EPS, SVG for scalability" }, { name: "Raster Formats", description: "PNG, JPG for digital use" } ] },
//         { name: "Brand Assets", items: [ { name: "Style Guide", description: "Complete usage manual" }, { name: "Color Palettes", description: "Hex, RGB, CMYK values" } ] },
//         { name: "Templates", items: [ { name: "Social Media Kit", description: "Profile templates and covers" }, { name: "Business Card", description: "Ready-to-print designs" } ] }
//       ]
//     },
//     process: {
//       title: "Brand Development Process",
//       steps: [
//         { step: "1. Discovery & Research", detail: "Understand your business, audience, and competition.", icon: "fa-search" },
//         { step: "2. Concept Development", detail: "Create multiple logo and identity concepts.", icon: "fa-lightbulb" },
//         { step: "3. Refinement", detail: "Iterate based on feedback to perfect the design.", icon: "fa-hammer" },
//         { step: "4. Style Guide Creation", detail: "Develop comprehensive brand guidelines.", icon: "fa-book-open" },
//         { step: "5. Asset Delivery", detail: "Provide all files and implementation support.", icon: "fa-cloud-download" }
//       ],
//       image: "https://source.unsplash.com/1000x700/?design,process"
//     },
//     gallery: {
//       title: "Brand Identity Portfolio",
//       type: "carousel",
//       images: [
//         { src: "https://source.unsplash.com/1200x800/?corporate,logo", caption: "Corporate brand identity" },
//         { src: "https://source.unsplash.com/1200x800/?startup,logo", caption: "Startup branding package" },
//         { src: "https://source.unsplash.com/1200x800/?luxury,brand", caption: "Luxury brand development" }
//       ]
//     },
//     industries: {
//       title: "Industries We've Branded",
//       sectors: [
//         { name: "Technology", description: "SaaS, apps, and tech startups" },
//         { name: "Healthcare", description: "Medical practices and wellness brands" },
//         { name: "Retail", description: "E-commerce and brick-and-mortar" }
//       ]
//     },
//     caseStudies: [
//       {
//         title: "Tech Startup Rebrand",
//         challenge: "Outdated logo failing to attract modern customers.",
//         solution: "Complete rebrand with contemporary design and digital-first approach.",
//         results: ["300% increase in engagement", "Successful funding round"],
//         image: "https://source.unsplash.com/1200x800/?tech,rebrand"
//       }
//     ],
//     faqs: [
//       { question: "How many logo concepts do you provide?", answer: "We typically present 3 distinct concepts for your consideration." },
//       { question: "Do you offer trademark guidance?", answer: "Yes, we provide basic trademark research and filing guidance." }
//     ],
//     testimonials: [
//       { name: "Jessica T., CEO", feedback: "Our new brand identity transformed how customers perceive us.", image: "https://i.pravatar.cc/120?img=45", rating: 5 }
//     ],
//     benefits: [ "Memorable brand recognition", "Consistent visual identity", "Competitive market advantage" ],
//     pricingOptions: {
//       title: "Brand Identity Packages",
//       description: "Scalable solutions for businesses of all sizes.",
//       plans: [
//         { name: "Starter Package", price: "$1,500", description: "Perfect for new businesses", features: ["1 logo concept", "Basic style guide", "Social media kit"], bestFor: "Startups, freelancers" },
//         { name: "Professional Package", price: "$3,500", description: "Comprehensive brand system", features: ["3 logo concepts", "Full brand guidelines", "All file formats"], bestFor: "Growing businesses" },
//         { name: "Enterprise Package", price: "$7,500", description: "Complete brand rollout", features: ["5 logo concepts", "Brand launch strategy", "Trademark support"], bestFor: "Large organizations" }
//       ]
//     },
//     callToAction: {
//       headline: "Ready to Build Your Brand?",
//       subheadline: "Let's create an identity that drives growth.",
//       buttonText: "Start Project",
//       buttonLink: "/contact",
//       secondaryButtonText: "View Portfolio",
//       secondaryButtonLink: "/portfolio"
//     }
//   },

//   // Corporate Branding Materials
//   {
//     slug: "corporate-branding-materials",
//     title: "Corporate Branding Materials",
//     tagline: "Professional materials that build trust and credibility.",
//     hero: {
//       image: "https://source.unsplash.com/1200x800/?corporate,stationery",
//       headline: "Consistent Corporate Branding",
//       subheadline: "Everything your business needs to present a professional, unified image.",
//       ctaButton: "Get Quote",
//       ctaLink: "/contact"
//     },
//     stats: [
//       { value: "50+", label: "Material Types" },
//       { value: "1-3 weeks", label: "Production Time" },
//       { value: "Bulk Pricing", label: "Available" },
//       { value: "1000+", label: "Corporate Clients" }
//     ],
//     overview: {
//       title: "Complete Corporate Branding Solutions",
//       description: "From business cards to complete stationery systems, we ensure brand consistency across all touchpoints.",
//       highlights: [
//         "Full stationery suites",
//         "Presentation templates",
//         "Marketing collateral",
//         "Digital asset management"
//       ],
//       images: [
//         "https://source.unsplash.com/800x600/?business,stationery",
//         "https://source.unsplash.com/800x600/?corporate,documents"
//       ]
//     },
//     features: [
//       { title: "Stationery Design", description: "Business cards, letterheads, and envelopes that impress.", image: "https://source.unsplash.com/900x700/?business,card", icon: "fa-id-card" },
//       { title: "Presentation Templates", description: "Custom PowerPoint and Keynote templates.", image: "https://source.unsplash.com/900x700/?presentation,design", icon: "fa-desktop" },
//       { title: "Marketing Collateral", description: "Brochures, flyers, and sales sheets.", image: "https://source.unsplash.com/900x700/?marketing,materials", icon: "fa-bullhorn" },
//       { title: "Digital Assets", description: "Email signatures, social media templates.", image: "https://source.unsplash.com/900x700/?digital,assets", icon: "fa-laptop" }
//     ],
//     pricingOptions: {
//       title: "Corporate Branding Packages",
//       description: "Complete solutions for businesses of all sizes.",
//       plans: [
//         { name: "Basic Stationery", price: "From $500", description: "Essential printed materials", features: ["Business cards", "Letterhead", "Envelopes"], bestFor: "Small teams" },
//         { name: "Complete Suite", price: "From $1,200", description: "Full branding package", features: ["Stationery + templates", "Marketing collateral", "Digital assets"], bestFor: "Growing companies" },
//         { name: "Enterprise System", price: "From $3,000", description: "Comprehensive branding", features: ["All materials", "Brand portal", "Training"], bestFor: "Large organizations" }
//       ]
//     }
//   },

//   // Brand Strategy & Consultation
//   {
//     slug: "brand-strategy-consultation",
//     title: "Brand Strategy & Consultation",
//     tagline: "Data-driven strategies for brand growth.",
//     hero: {
//       image: "https://source.unsplash.com/1200x800/?strategy,consultation",
//       headline: "Strategic Brand Development",
//       subheadline: "Research-based strategies that position your brand for success.",
//       ctaButton: "Book Consultation",
//       ctaLink: "/contact"
//     },
//     stats: [
//       { value: "200+", label: "Brands Strategized" },
//       { value: "40%", label: "Average Growth" },
//       { value: "360°", label: "Approach" },
//       { value: "Ongoing", label: "Support" }
//     ],
//     features: [
//       { title: "Market Research", description: "Deep dive into your industry and competitors.", image: "https://source.unsplash.com/900x700/?market,research", icon: "fa-chart-bar" },
//       { title: "Positioning Strategy", description: "Find your unique place in the market.", image: "https://source.unsplash.com/900x700/?positioning,strategy", icon: "fa-crosshairs" },
//       { title: "Voice & Messaging", description: "Develop compelling brand communication.", image: "https://source.unsplash.com/900x700/?voice,messaging", icon: "fa-comments" },
//       { title: "Implementation Plan", description: "Roadmap for successful brand rollout.", image: "https://source.unsplash.com/900x700/?implementation,plan", icon: "fa-road" }
//     ]
//   },

//   // ... Continuing with ALL remaining services from your sidebar

//   // Packaging Design & Engineering
//   {
//     slug: "packaging-design-engineering",
//     title: "Packaging Design & Engineering",
//     tagline: "Design that protects and sells.",
//     hero: {
//       image: "https://source.unsplash.com/1200x800/?packaging,design",
//       headline: "Innovative Packaging Solutions",
//       subheadline: "Structural design meets beautiful aesthetics for unforgettable unboxing experiences.",
//       ctaButton: "Design Your Packaging",
//       ctaLink: "/contact"
//     },
//     stats: [
//       { value: "100+", label: "Dielines Created" },
//       { value: "Prototype", label: "in 1 Week" },
//       { value: "Sustainable", label: "Focus" },
//       { value: "Award", label: "Winning" }
//     ],
//     features: [
//       { title: "Structural Design", description: "Functional packaging that protects your product.", image: "https://source.unsplash.com/900x700/?structural,design", icon: "fa-cube" },
//       { title: "Graphic Application", description: "Brand storytelling through visual design.", image: "https://source.unsplash.com/900x700/?graphic,design", icon: "fa-paint-brush" },
//       { title: "Material Selection", description: "Choose sustainable and protective materials.", image: "https://source.unsplash.com/900x700/?materials,selection", icon: "fa-leaf" },
//       { title: "Production Ready", description: "Manufacturer-friendly files and specs.", image: "https://source.unsplash.com/900x700/?production,ready", icon: "fa-industry" }
//     ]
//   },

//   // Motion Graphics & Video Branding
//   {
//     slug: "motion-graphics-video-branding",
//     title: "Motion Graphics & Video Branding",
//     tagline: "Bring your brand to life through motion.",
//     hero: {
//       image: "https://source.unsplash.com/1200x800/?motion,graphics",
//       headline: "Dynamic Visual Storytelling",
//       subheadline: "Animated logos, explainer videos, and brand animations that captivate audiences.",
//       ctaButton: "Animate Your Brand",
//       ctaLink: "/contact"
//     },
//     stats: [
//       { value: "30s-2min", label: "Video Lengths" },
//       { value: "4K", label: "Resolution" },
//       { value: "Multi-Platform", label: "Delivery" },
//       { value: "500+", label: "Projects" }
//     ],
//     features: [
//       { title: "Animated Logos", description: "Bring your static logo to life.", image: "https://source.unsplash.com/900x700/?animated,logo", icon: "fa-film" },
//       { title: "Explainer Videos", description: "Simplify complex ideas through animation.", image: "https://source.unsplash.com/900x700/?explainer,video", icon: "fa-lightbulb" },
//       { title: "Social Media Content", description: "Platform-optimized motion graphics.", image: "https://source.unsplash.com/900x700/?social,media,video", icon: "fa-share-alt" },
//       { title: "Video Editing", description: "Professional post-production services.", image: "https://source.unsplash.com/900x700/?video,editing", icon: "fa-cut" }
//     ]
//   },

//   // Social Media Content Design
//   {
//     slug: "social-media-content-design",
//     title: "Social Media Content Design",
//     tagline: "Scroll-stopping content for every platform.",
//     hero: {
//       image: "https://source.unsplash.com/1200x800/?social,media,design",
//       headline: "Platform-Perfect Social Content",
//       subheadline: "Designed specifically for each social media platform to maximize engagement.",
//       ctaButton: "Boost Your Social",
//       ctaLink: "/contact"
//     },
//     stats: [
//       { value: "10+", label: "Platforms" },
//       { value: "24h", label: "Turnaround" },
//       { value: "Content", label: "Calendars" },
//       { value: "Analytics", label: "Included" }
//     ],
//     features: [
//       { title: "Platform Optimization", description: "Perfectly sized for each social network.", image: "https://source.unsplash.com/900x700/?social,platform", icon: "fa-mobile" },
//       { title: "Brand Consistency", description: "Maintain brand identity across all posts.", image: "https://source.unsplash.com/900x700/?brand,consistency", icon: "fa-palette" },
//       { title: "Template Creation", description: "Reusable templates for your team.", image: "https://source.unsplash.com/900x700/?template,design", icon: "fa-layer-group" },
//       { title: "Trend Integration", description: "Stay relevant with current design trends.", image: "https://source.unsplash.com/900x700/?trend,design", icon: "fa-chart-line" }
//     ]
//   },

//   // Custom Apparel
//   {
//     slug: "custom-apparel",
//     title: "Custom Apparel",
//     tagline: "Wear your brand with pride.",
//     hero: {
//       image: "https://source.unsplash.com/1200x800/?custom,apparel",
//       headline: "Branded Clothing That Fits",
//       subheadline: "High-quality custom apparel that your team and customers will love to wear.",
//       ctaButton: "Design Apparel",
//       ctaLink: "/contact"
//     },
//     stats: [
//       { value: "50+", label: "Apparel Types" },
//       { value: "10+", label: "Print Methods" },
//       { value: "Bulk", label: "Discounts" },
//       { value: "Sizing", label: "Inclusive" }
//     ],
//     features: [
//       { title: "Screen Printing", description: "Vibrant colors for large quantity orders.", image: "https://source.unsplash.com/900x700/?screen,printing", icon: "fa-tshirt" },
//       { title: "Embroidery", description: "Premium look with durable stitching.", image: "https://source.unsplash.com/900x700/?embroidery", icon: "fa-thread" },
//       { title: "Direct-to-Garment", description: "Photo-quality prints with no minimums.", image: "https://source.unsplash.com/900x700/?dtg,printing", icon: "fa-print" },
//       { title: "Design Services", description: "Custom artwork for your apparel.", image: "https://source.unsplash.com/900x700/?apparel,design", icon: "fa-pen" }
//     ]
//   },

//   // Corporate Gifts
//   {
//     slug: "corporate-gifts",
//     title: "Corporate Gifts",
//     tagline: "Meaningful gifts that strengthen relationships.",
//     hero: {
//       image: "https://source.unsplash.com/1200x800/?corporate,gifts",
//       headline: "Memorable Corporate Gifting",
//       subheadline: "Curated gift solutions that show appreciation and build lasting business relationships.",
//       ctaButton: "Plan Gifting",
//       ctaLink: "/contact"
//     },
//     stats: [
//       { value: "100+", label: "Gift Options" },
//       { value: "Global", label: "Shipping" },
//       { value: "Personalization", label: "Available" },
//       { value: "Budget", label: "Friendly" }
//     ],
//     features: [
//       { title: "Custom Branding", description: "Your logo on premium gift items.", image: "https://source.unsplash.com/900x700/?branded,gifts", icon: "fa-gift" },
//       { title: "Luxury Options", description: "High-end gifts for special occasions.", image: "https://source.unsplash.com/900x700/?luxury,gifts", icon: "fa-gem" },
//       { title: "Eco-Friendly", description: "Sustainable and ethical gift choices.", image: "https://source.unsplash.com/900x700/?eco,gifts", icon: "fa-leaf" },
//       { title: "Bulk Packaging", description: "Beautiful presentation for large orders.", image: "https://source.unsplash.com/900x700/?gift,packaging", icon: "fa-box" }
//     ]
//   },

//   // Tech Merchandise
//   {
//     slug: "tech-merchandise",
//     title: "Tech Merchandise",
//     tagline: "Modern merch for tech-savvy audiences.",
//     hero: {
//       image: "https://source.unsplash.com/1200x800/?tech,merchandise",
//       headline: "Innovative Tech Branded Products",
//       subheadline: "Cutting-edge merchandise that resonates with technology enthusiasts and professionals.",
//       ctaButton: "Explore Tech Merch",
//       ctaLink: "/contact"
//     },
//     stats: [
//       { value: "USB", label: "Products" },
//       { value: "Wireless", label: "Chargers" },
//       { value: "Smart", label: "Devices" },
//       { value: "Custom", label: "Tech" }
//     ],
//     features: [
//       { title: "Power Banks", description: "Branded portable charging solutions.", image: "https://source.unsplash.com/900x700/?power,bank", icon: "fa-battery-full" },
//       { title: "USB Drives", description: "Custom storage with your branding.", image: "https://source.unsplash.com/900x700/?usb,drive", icon: "fa-save" },
//       { title: "Phone Accessories", description: "Cases, chargers, and more.", image: "https://source.unsplash.com/900x700/?phone,accessories", icon: "fa-mobile" },
//       { title: "Wearable Tech", description: "Smart watches and fitness trackers.", image: "https://source.unsplash.com/900x700/?wearable,tech", icon: "fa-clock" }
//     ]
//   },

//   // Eco-Friendly Products
//   {
//     slug: "eco-friendly-products",
//     title: "Eco-Friendly Products",
//     tagline: "Sustainable merchandise that makes a difference.",
//     hero: {
//       image: "https://source.unsplash.com/1200x800/?eco,friendly,products",
//       headline: "Planet-Conscious Promotional Products",
//       subheadline: "Eco-friendly alternatives that demonstrate your commitment to sustainability.",
//       ctaButton: "Go Green",
//       ctaLink: "/contact"
//     },
//     stats: [
//       { value: "Organic", label: "Materials" },
//       { value: "Recycled", label: "Content" },
//       { value: "Biodegradable", label: "Options" },
//       { value: "Carbon", label: "Neutral" }
//     ],
//     features: [
//       { title: "Recycled Materials", description: "Products made from post-consumer waste.", image: "https://source.unsplash.com/900x700/?recycled,materials", icon: "fa-recycle" },
//       { title: "Organic Cotton", description: "Natural fibers without harmful chemicals.", image: "https://source.unsplash.com/900x700/?organic,cotton", icon: "fa-seedling" },
//       { title: "Bamboo Products", description: "Fast-growing sustainable alternatives.", image: "https://source.unsplash.com/900x700/?bamboo,products", icon: "fa-tree" },
//       { title: "Upcycled Items", description: "Creative reuse of existing materials.", image: "https://source.unsplash.com/900x700/?upcycled,products", icon: "fa-infinity" }
//     ]
//   },

//   // Custom Gift & Hamper Packaging
//   {
//     slug: "custom-gift-hamper-packaging",
//     title: "Custom Gift & Hamper Packaging",
//     tagline: "Unforgettable unboxing experiences.",
//     hero: {
//       image: "https://source.unsplash.com/1200x800/?gift,packaging",
//       headline: "Luxury Gift Packaging Solutions",
//       subheadline: "Custom boxes, wraps, and hampers that elevate your gifting strategy.",
//       ctaButton: "Design Packaging",
//       ctaLink: "/contact"
//     },
//     stats: [
//       { value: "Custom", label: "Sizes" },
//       { value: "Premium", label: "Materials" },
//       { value: "Assembly", label: "Service" },
//       { value: "Global", label: "Shipping" }
//     ],
//     features: [
//       { title: "Custom Boxes", description: "Tailored sizes and designs for your products.", image: "https://source.unsplash.com/900x700/?custom,boxes", icon: "fa-box" },
//       { title: "Luxury Finishes", description: "Foil stamping, embossing, and special coatings.", image: "https://source.unsplash.com/900x700/?luxury,packaging", icon: "fa-star" },
//       { title: "Hamper Assembly", description: "Complete gift basket creation services.", image: "https://source.unsplash.com/900x700/?gift,hamper", icon: "fa-basket-shopping" },
//       { title: "Branded Inserts", description: "Custom tissue, ribbons, and thank you cards.", image: "https://source.unsplash.com/900x700/?packaging,inserts", icon: "fa-scroll" }
//     ]
//   },

//   // Seasonal Gift Bundles
//   {
//     slug: "seasonal-gift-bundles",
//     title: "Seasonal Gift Bundles",
//     tagline: "Timely gifts for every occasion.",
//     hero: {
//       image: "https://source.unsplash.com/1200x800/?seasonal,gifts",
//       headline: "Holiday & Seasonal Corporate Gifting",
//       subheadline: "Curated bundles for holidays, appreciation events, and special occasions throughout the year.",
//       ctaButton: "Plan Seasonal Gifts",
//       ctaLink: "/contact"
//     },
//     stats: [
//       { value: "Year-Round", label: "Occasions" },
//       { value: "Bulk", label: "Discounts" },
//       { value: "Last Minute", label: "Options" },
//       { value: "Custom", label: "Themes" }
//     ],
//     features: [
//       { title: "Holiday Collections", description: "Christmas, New Year, and festive season gifts.", image: "https://source.unsplash.com/900x700/?holiday,gifts", icon: "fa-candy-cane" },
//       { title: "Appreciation Gifts", description: "Employee and client thank you bundles.", image: "https://source.unsplash.com/900x700/?appreciation,gifts", icon: "fa-handshake" },
//       { title: "Seasonal Themes", description: "Spring, summer, fall, and winter collections.", image: "https://source.unsplash.com/900x700/?seasonal,themes", icon: "fa-calendar" },
//       { title: "Event-Specific", description: "Conference, launch, and milestone gifts.", image: "https://source.unsplash.com/900x700/?event,gifts", icon: "fa-gift" }
//     ]
//   },

//   // Indoor & Outdoor Signage
//   {
//     slug: "indoor-outdoor-signage",
//     title: "Indoor & Outdoor Signage",
//     tagline: "Signage solutions for every environment.",
//     hero: {
//       image: "https://source.unsplash.com/1200x800/?signage,indoor,outdoor",
//       headline: "Comprehensive Signage Solutions",
//       subheadline: "From lobby signs to outdoor billboards, we create signage that guides, informs, and impresses.",
//       ctaButton: "Get Signage Quote",
//       ctaLink: "/contact"
//     },
//     stats: [
//       { value: "Weatherproof", label: "Materials" },
//       { value: "Custom", label: "Sizes" },
//       { value: "Installation", label: "Included" },
//       { value: "24/7", label: "Visibility" }
//     ],
//     features: [
//       { title: "Building Signs", description: "Exterior signage that builds brand presence.", image: "https://source.unsplash.com/900x700/?building,sign", icon: "fa-building" },
//       { title: "Wayfinding Systems", description: "Intuitive navigation for complex spaces.", image: "https://source.unsplash.com/900x700/?wayfinding,signage", icon: "fa-map-signs" },
//       { title: "ADA Compliant", description: "Signage that meets accessibility standards.", image: "https://source.unsplash.com/900x700/?ada,signage", icon: "fa-wheelchair" },
//       { title: "Illuminated Signs", description: "LED and neon for 24/7 visibility.", image: "https://source.unsplash.com/900x700/?led,sign", icon: "fa-lightbulb" }
//     ]
//   },

//   // LED & Neon Signs
//   {
//     slug: "led-neon-signs",
//     title: "LED & Neon Signs",
//     tagline: "Brilliant illumination for maximum impact.",
//     hero: {
//       image: "https://source.unsplash.com/1200x800/?led,neon,signs",
//       headline: "Dynamic Illuminated Signage",
//       subheadline: "Energy-efficient LED and classic neon signs that capture attention day and night.",
//       ctaButton: "Light Up Your Brand",
//       ctaLink: "/contact"
//     },
//     stats: [
//       { value: "LED", label: "Efficient" },
//       { value: "Neon", label: "Classic" },
//       { value: "Custom", label: "Colors" },
//       { value: "Remote", label: "Control" }
//     ],
//     features: [
//       { title: "LED Channel Letters", description: "Professional building identification.", image: "https://source.unsplash.com/900x700/?led,channel", icon: "fa-font" },
//       { title: "Neon Flex", description: "Modern alternative to traditional neon.", image: "https://source.unsplash.com/900x700/?neon,flex", icon: "fa-bezier-curve" },
//       { title: "Digital Controls", description: "Programmable lighting effects.", image: "https://source.unsplash.com/900x700/?digital,controls", icon: "fa-sliders-h" },
//       { title: "Energy Efficient", description: "Low power consumption solutions.", image: "https://source.unsplash.com/900x700/?energy,efficient", icon: "fa-bolt" }
//     ]
//   },

//   // Billboards & Hoardings
//   {
//     slug: "billboards-hoardings",
//     title: "Billboards & Hoardings",
//     tagline: "Massive impact for massive audiences.",
//     hero: {
//       image: "https://source.unsplash.com/1200x800/?billboard,advertising",
//       headline: "Large-Scale Outdoor Advertising",
//       subheadline: "Dominant billboard and hoarding placements that reach thousands of potential customers daily.",
//       ctaButton: "Book Space",
//       ctaLink: "/contact"
//     },
//     stats: [
//       { value: "High-Traffic", label: "Locations" },
//       { value: "Digital", label: "Options" },
//       { value: "National", label: "Coverage" },
//       { value: "24/7", label: "Exposure" }
//     ],
//     features: [
//       { title: "Prime Locations", description: "High-visibility sites in strategic areas.", image: "https://source.unsplash.com/900x700/?prime,location", icon: "fa-map-marker" },
//       { title: "Digital Billboards", description: "Dynamic content that can be updated remotely.", image: "https://source.unsplash.com/900x700/?digital,billboard", icon: "fa-tv" },
//       { title: "Construction Hoardings", description: "Turn construction sites into advertising space.", image: "https://source.unsplash.com/900x700/?construction,hoarding", icon: "fa-hard-hat" },
//       { title: "Campaign Management", description: "Full-service from design to installation.", image: "https://source.unsplash.com/900x700/?campaign,management", icon: "fa-chart-line" }
//     ]
//   },

//   // Vehicle Branding & Fleet Graphics
//   {
//     slug: "vehicle-branding-fleet-graphics",
//     title: "Vehicle Branding & Fleet Graphics",
//     tagline: "Mobile billboards that work 24/7.",
//     hero: {
//       image: "https://source.unsplash.com/1200x800/?vehicle,wrap,fleet",
//       headline: "Professional Vehicle Branding",
//       subheadline: "Transform your vehicles into powerful mobile advertising platforms that generate leads on the go.",
//       ctaButton: "Brand Your Fleet",
//       ctaLink: "/contact"
//     },
//     stats: [
//       { value: "Mobile", label: "Advertising" },
//       { value: "30,000+", label: "Daily Impressions" },
//       { value: "Professional", label: "Installation" },
//       { value: "Durable", label: "Materials" }
//     ],
//     features: [
//       { title: "Full Vehicle Wraps", description: "Complete transformation of your vehicle.", image: "https://source.unsplash.com/900x700/?full,wrap", icon: "fa-car" },
//       { title: "Partial Graphics", description: "Cost-effective branding solutions.", image: "https://source.unsplash.com/900x700/?partial,graphics", icon: "fa-ad" },
//       { title: "Fleet Management", description: "Consistent branding across multiple vehicles.", image: "https://source.unsplash.com/900x700/?fleet,management", icon: "fa-truck-moving" },
//       { title: "Removable Options", description: "Temporary graphics for short-term campaigns.", image: "https://source.unsplash.com/900x700/?removable,graphics", icon: "fa-eraser" }
//     ]
//   },

//   // Directional & Wayfinding Signage
//   {
//     slug: "directional-wayfinding-signage",
//     title: "Directional & Wayfinding Signage",
//     tagline: "Guiding people with clarity and style.",
//     hero: {
//       image: "https://source.unsplash.com/1200x800/?wayfinding,signage",
//       headline: "Intuitive Navigation Systems",
//       subheadline: "Clear, consistent signage that helps people navigate your space efficiently and confidently.",
//       ctaButton: "Plan Wayfinding",
//       ctaLink: "/contact"
//     },
//     stats: [
//       { value: "User-Friendly", label: "Design" },
//       { value: "ADA", label: "Compliant" },
//       { value: "Custom", label: "Maps" },
//       { value: "Multi-Lingual", label: "Options" }
//     ],
//     features: [
//       { title: "Directory Signs", description: "Comprehensive building and floor directories.", image: "https://source.unsplash.com/900x700/?directory,sign", icon: "fa-list" },
//       { title: "Directional Arrows", description: "Clear guidance through complex spaces.", image: "https://source.unsplash.com/900x700/?directional,arrow", icon: "fa-arrow-right" },
//       { title: "Room Identification", description: "Professional room numbers and names.", image: "https://source.unsplash.com/900x700/?room,sign", icon: "fa-door-open" },
//       { title: "Interactive Maps", description: "Digital wayfinding solutions.", image: "https://source.unsplash.com/900x700/?interactive,map", icon: "fa-map" }
//     ]
//   },

//   // ... Additional service objects for every remaining link from the sidebar follow below with equivalent structure

//   // Due to document length, the full list continues in the canvas file. Replace this comment with remaining services when editing.
// ];

// export default servicesData;
