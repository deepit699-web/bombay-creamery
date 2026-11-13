export const site = {
  name: "Bombay Creamery",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  email: "bombaycreamery@rilfmcg.com",
  phone: "9651680118",
  formattedPhone: "+91 96516 81118",
  address: "3rd Floor, Maker Chamber IV, 222, Nariman Point, Mumbai 400021, Maharashtra, India."
};

export const navItems = [
  { label: "Our Story", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Business Opportunities", href: "/business-opportunities" },
  { label: "Application Process", href: "/application-process" },
  { label: "Contact", href: "/contact" }
];

export const opportunities = [
  {
    slug: "dealership",
    title: "Dealership",
    eyebrow: "Retail and local market development",
    intro: "Build a focused local presence for a frozen-dessert portfolio with a business model designed around retail reach, cold-chain discipline and consistent customer service.",
    investment: "₹5–7 lakh",
    territory: "10–15 km",
    margin: "20–25% estimated gross invoice margin",
    space: "800 sq ft warehouse + 100 sq ft office",
    cold: "Deep freezers maintained between −18°C and −24°C",
    highlights: ["Local territory planning", "Dedicated frozen storage", "Retailer relationship development", "Order and stock coordination"]
  },
  {
    slug: "distributorship",
    title: "Distributorship",
    eyebrow: "District-level distribution",
    intro: "A district-focused distribution operation calls for dependable storage, disciplined route planning and the ability to serve a wider network of retail outlets.",
    investment: "₹12–15 lakh",
    territory: "One district or 40 km",
    margin: "11–15% estimated gross invoice margin",
    space: "2,000 sq ft warehouse + 100 sq ft office",
    cold: "Walk-in cold room / hard freezers",
    highlights: ["District or defined-area coverage", "Warehouse-led operations", "Retail route management", "Cold-chain inventory control"]
  },
  {
    slug: "super-stockist",
    title: "Super Stockist",
    eyebrow: "Multi-district supply capability",
    intro: "A super stockist operation is structured for larger-scale inventory holding and supply coordination across three contiguous districts.",
    investment: "₹25–30 lakh",
    territory: "Three contiguous districts",
    margin: "5–7% estimated gross invoice margin",
    space: "4,000 sq ft warehouse + 100 sq ft office",
    cold: "Industrial cold storage",
    highlights: ["Multi-district supply planning", "Higher-capacity storage", "Structured dispatch operations", "Inventory and logistics coordination"]
  }
];

export const productCategories = [
  { title: "Premium Ice Cream", description: "A category for classic favourites and flavour-led frozen treats.", note: "Product names, pack sizes and prices will be added from the verified catalogue." },
  { title: "Ice Pops", description: "A refreshing frozen format suited to quick-serve occasions.", note: "Specific variants and pack information are not included in the supplied brief." },
  { title: "Cups and Cones", description: "Convenient single-serve formats for everyday enjoyment.", note: "Catalogue-level SKU information is pending." },
  { title: "Kulfi", description: "A familiar Indian frozen dessert format with a rich, traditional sensibility.", note: "Exact flavours and sizes require the product catalogue." },
  { title: "Family Tubs and Sundaes", description: "Shareable formats for family occasions and at-home dessert moments.", note: "Exact variants and pack sizes require confirmation." },
  { title: "Flavoured Milk", description: "Dairy beverage options for a chilled, on-the-go refreshment occasion.", note: "Flavours, bottle sizes and prices require the product catalogue." },
  { title: "Catering", description: "Bulk dessert enquiries for events, celebrations and food-service requirements.", note: "Availability and order terms are confirmed individually." }
];

export const faqs = [
  { q: "What is Bombay Creamery?", a: "Bombay Creamery is presented here across premium ice cream, frozen desserts, dairy beverages and related business enquiry categories. For current product and commercial information, contact the team directly." },
  { q: "What product categories are listed?", a: "The supplied brief identifies premium ice cream, ice pops, cups and cones, kulfi, family tubs and sundaes, flavoured milk and catering." },
  { q: "How can I enquire about a dealership?", a: "Choose Dealership in the enquiry form, share your contact and location details, and submit your business enquiry. The team can then guide you on current availability and applicable terms." },
  { q: "What is the stated dealership investment?", a: "The supplied brief lists an indicative initial investment of ₹5–7 lakh. Treat this as supplied business information, not a confirmed offer or guaranteed total payable amount. Request a written commercial breakup before proceeding." },
  { q: "What are the distributorship requirements?", a: "The supplied brief lists one district or 40 km territory, an indicative ₹12–15 lakh initial investment, a 2,000 sq ft warehouse, a 100 sq ft office and walk-in cold room / hard freezers." },
  { q: "What is a super stockist?", a: "The supplied brief describes a super stockist territory as three contiguous districts, with an indicative ₹25–30 lakh initial investment and larger-scale cold storage requirements." },
  { q: "What warehouse space is required?", a: "The supplied brief lists 800 sq ft for dealership, 2,000 sq ft for distributorship and 4,000 sq ft for super stockist, with a 100 sq ft office for each model." },
  { q: "Which documents may be required?", a: "The listed documents are Aadhaar Card, PAN Card, GST Registration, FSSAI Registration, six months bank statement and site ownership or lease agreement. Confirm the current checklist before sharing documents." },
  { q: "How does the application process work?", a: "The listed steps are enquiry, receipt of application and agreement, completion with KYC, email submission of the completed PDF, verification, approval / area letter and invoice, followed by applicable payment stages and onboarding." },
  { q: "How can I contact Bombay Creamery?", a: "Email bombaycreamery@rilfmcg.com or call 9651680118. The listed corporate address is 3rd Floor, Maker Chamber IV, 222, Nariman Point, Mumbai 400021, Maharashtra, India." }
];
