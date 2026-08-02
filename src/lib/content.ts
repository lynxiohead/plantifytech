const asset = (path: string) => `/assets/${path}`;

export const ASSETS = {
  logo: asset("logos/EXTLOGO1.png"),
  logoNav: asset("logos/EXTLOGO1-nav-transparent.png"),
  logoIcon: asset("logos/BLACK2.png"),
  logoMark: asset("logos/BLACK1.png"),
  hero: {
    primary: asset("hero/pexels-sammccool47-33786601.jpg"),
    images: [
      asset("hero/pexels-sammccool47-33786601.jpg"),
      asset("hero/HERO2.jpg"),
      asset("hero/HERO3.jpg"),
      asset("hero/HERO4.jpg"),
    ],
  },
  mockups: [
    asset("mockups/MOCKUP1.png"),
    asset("mockups/MOCKUP2.png"),
    asset("mockups/MOCKUP3.png"),
  ],
  illustrations: {
    planting: asset("ILLUSTRATIONS/ILLUSTRATION1.jpg"),
    market: asset("ILLUSTRATIONS/ILLUSTRATION2.jpg"),
    farmer: asset("ILLUSTRATIONS/ILLUSTRATION3.jpg"),
    field: asset("ILLUSTRATIONS/ILLUSTRATION4.jpg"),
    aboutStory: asset("about-story.jpg"),
  },
  slides: [
    asset("slides/SLIDE1.jpg"),
    asset("slides/SLIDE2.jpg"),
    asset("slides/SLIDE3.jpg"),
    asset("slides/SLIDE4.jpg"),
    asset("slides/SLIDE5.jpg"),
    asset("slides/pexels-alex-cantarelli-2905406-4433935.jpg"),
  ],
  founders: {
    primary: asset("FOUNDERS/YADAV.jpeg"),
    abisola: asset("FOUNDERS/ABISOLA.jpeg"),
    abrahame: asset("FOUNDERS/ABRAHAME.jpeg"),
  },
  partners: [
    { name: "AfriNextGen", src: asset("partners/AFRINEXTGEN.png") },
    { name: "BRICS", src: asset("partners/brics-logo-removebg-preview.png") },
    { name: "DTU NGDA", src: asset("partners/DTU NGDA.png") },
    { name: "Eduvos eHub", src: asset("partners/EDUVOS EHUB.png") },
    { name: "KORE", src: asset("partners/KORE.png") },
    { name: "Lynxiotech", src: asset("partners/LYNXIOTECH.png") },
    { name: "NEC", src: asset("partners/NEC.png") },
    { name: "Nedbank", src: asset("partners/NEDBANK.png") },
    { name: "Vutuvibiz", src: asset("partners/VUTUVIBIZ.png") },
    { name: "Young Farmer", src: asset("partners/YOUNGFARMER.png") },
  ],
  countries: [
    { name: "South Africa", src: asset("COUNTRIES/Flag_of_South_Africa.svg.webp") },
    { name: "Botswana", src: asset("COUNTRIES/Flag_of_Botswana.svg.webp") },
    { name: "Namibia", src: asset("COUNTRIES/Flag_of_Namibia.svg.webp") },
    { name: "Mozambique", src: asset("COUNTRIES/Flag_of_Mozambique.svg.webp") },
    { name: "Zimbabwe", src: asset("COUNTRIES/Flag_of_Zimbabwe.svg.webp") },
  ],
  video: asset("VIDEOS/plantify-skit.mp4"),
  video2: asset("VIDEOS/video2.mp4"),
};

export const INVESTOR_STEPS = [
  {
    id: "01",
    title: "Browse farm projects",
    body: "Explore vetted farming projects that need funding.",
    image: ASSETS.mockups[0],
    imageFit: "contain" as const,
  },
  {
    id: "02",
    title: "Invest from R100",
    body: "Choose any amount from R100 and fund projects you believe in.",
    image: ASSETS.mockups[1],
    imageFit: "contain" as const,
  },
  {
    id: "03",
    title: "Track and earn returns",
    body: "Monitor real-time growth with AI insights and receive returns at harvest.",
    image: ASSETS.mockups[2],
    imageFit: "contain" as const,
  },
];

export const FARMER_STEPS = [
  {
    id: "01",
    title: "Create Your Profile",
    body: "Set up your farm profile and upload project details. Tell investors about your farming goals and experience.",
    image: ASSETS.illustrations.planting,
    imageFit: "cover" as const,
  },
  {
    id: "02",
    title: "Launch your campaign",
    body: "Publish your funding goal and share your farming plan with investors.",
    image: ASSETS.illustrations.market,
    imageFit: "cover" as const,
  },
  {
    id: "03",
    title: "Receive funding and grow",
    body: "Get capital, grow your farm, and share returns with your investors.",
    image: ASSETS.illustrations.field,
    imageFit: "cover" as const,
  },
];

export const AUDIENCES = [
  {
    title: "First-time investors",
    body: "Start small, learn as you go, and grow your money in real agriculture with as little as R100.",
    badge: "From R100",
    note: "Low barrier to start investing",
    image: ASSETS.slides[0],
  },
  {
    title: "Farmers",
    body: "Access the capital you need to grow your farm without the traditional barriers of bank loans.",
    badge: "No collateral",
    note: "Access to capital without traditional requirements",
    image: ASSETS.slides[1],
  },
  {
    title: "Impact investors",
    body: "Generate financial returns while contributing to sustainable agriculture and food security in communities.",
    badge: "Dual impact",
    note: "Financial returns plus social good",
    image: ASSETS.slides[2],
  },
  {
    title: "Portfolio diversifiers",
    body: "Add real agricultural assets to your portfolio with transparent, AI-tracked performance.",
    badge: "Real assets",
    note: "Diversification beyond stocks and crypto",
    image: ASSETS.slides[3],
  },
];

export const TRUST_ITEMS = [
  "Beta open now",
  "Vetted farmers",
  "Real-time insights",
  "Secure & compliant",
];

export const WHY_CARDS = [
  {
    label: "WE PROVIDE",
    title: "Capital for farmers",
    image: ASSETS.hero.images[1],
  },
  {
    label: "WE PROVIDE",
    title: "Exposure for farm projects",
    image: ASSETS.hero.images[3],
  },
];

export const FARMER_BENEFITS = [
  {
    title: "0% Collateral Required",
    body: "Access growth capital based on your farm's productivity and project viability—not brick-and-mortar assets.",
    badge: "No Banks",
    note: "Funding based on real harvest potential",
    image: ASSETS.illustrations.field,
  },
  {
    title: "Rapid Campaign Launch",
    body: "Our streamlined onboarding gets your farming project vetted, structured, and live to investors in days.",
    badge: "Fast Track",
    note: "Simple digital onboarding process",
    image: ASSETS.illustrations.planting,
  },
  {
    title: "Harvest-Aligned Repayment",
    body: "Repayment schedules are thoughtfully designed around natural crop cycles and harvest cash flows.",
    badge: "Flexible Terms",
    note: "Aligned with your agricultural seasons",
    image: ASSETS.illustrations.market,
  },
  {
    title: "Community-Backed Growth",
    body: "Gain a network of retail and impact investors who champion your farm and celebrate your harvests.",
    badge: "Power to the People",
    note: "Direct connection to your supporters",
    image: ASSETS.illustrations.farmer,
  },
];

export const FARMER_ELIGIBILITY = [
  {
    title: "Active Farm Operations",
    description: "Minimum of 2 years verifiable farming experience in Southern Africa with active crops or livestock.",
  },
  {
    title: "Verifiable Land Access",
    description: "Valid title deed, formal lease agreement, or recognized communal land tenure documentation.",
  },
  {
    title: "Clear Project Budget",
    description: "Well-defined financial plan for inputs, equipment, solar irrigation, or harvest scaling.",
  },
  {
    title: "Market & Off-take Access",
    description: "Demonstrated access to local markets, agricultural cooperatives, or commercial off-take buyers.",
  },
];

export const INVESTOR_BENEFITS = [
  {
    title: "Invest From R100",
    body: "Break down traditional investment barriers. Start funding real African agriculture with as little as R100.",
    badge: "Accessible",
    note: "Low minimum investment threshold",
    image: ASSETS.mockups[1],
  },
  {
    title: "Real Tangible Assets",
    body: "Your capital backs actual crops, livestock, and farm infrastructure—providing resilience against inflation.",
    badge: "Real Economy",
    note: "Backed by productive farmland output",
    image: ASSETS.slides[3],
  },
  {
    title: "AI-Powered Tracking",
    body: "Monitor seasonal milestones, weather data, and crop health in real-time through your Plantify dashboard.",
    badge: "Live Insights",
    note: "Transparent data from field to harvest",
    image: ASSETS.mockups[2],
  },
  {
    title: "Dual Financial & Social Impact",
    body: "Earn attractive returns while empowering Southern African farmers and strengthening regional food security.",
    badge: "Impact First",
    note: "Sustainable returns that matter",
    image: ASSETS.slides[0],
  },
];

export const FARMER_FAQS = [
  {
    question: "Do I need traditional bank collateral to apply?",
    answer: "No. PlantifyTech evaluates your farming experience, soil health, crop history, and off-take potential rather than requiring property collateral.",
  },
  {
    question: "How long does it take to launch a funding campaign?",
    answer: "Once you submit your farm profile and documentation, our agricultural team typically reviews and verifies your project within 5 to 7 business days.",
  },
  {
    question: "How are repayments structured?",
    answer: "Repayments are tied directly to your harvest cycle. You do not pay monthly installments while crops are growing; settlements happen after harvest sales.",
  },
  {
    question: "What farming sectors does PlantifyTech support?",
    answer: "We support a wide range of agricultural projects across Southern Africa, including grains, horticulture, livestock, poultry, and sustainable irrigation upgrades.",
  },
];

export const INVESTOR_FAQS = [
  {
    question: "What is the minimum amount I can invest?",
    answer: "You can start investing with as little as R100 on any vetted farm campaign on the PlantifyTech platform.",
  },
  {
    question: "How do I earn returns on my investment?",
    answer: "When a farm completes its harvest cycle and sells its produce, proceeds are distributed back to investors proportionally, including your principal and share of returns.",
  },
  {
    question: "How does PlantifyTech track farm progress?",
    answer: "We use a combination of on-the-ground agronomic audits, IoT weather/soil sensors, and AI-assisted satellite monitoring to provide regular updates to your dashboard.",
  },
  {
    question: "Is the platform currently open to new investors?",
    answer: "Yes, our Beta program is open. You can sign up today to browse upcoming Southern African farming projects.",
  },
];

export const FOUNDERS_TEAM = [
  {
    name: "Yadav Singh",
    role: "Founder & CPCO",
    image: ASSETS.founders.primary,
  },
  {
    name: "Abisola O. Adenyanju",
    role: "Co-Founder & CEO",
    image: ASSETS.founders.abisola,
  },
  {
    name: "Abrahame Mola",
    role: "Co-Founder & CDO",
    image: ASSETS.founders.abrahame,
  },
];

