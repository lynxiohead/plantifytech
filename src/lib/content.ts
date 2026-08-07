import assetsManifest from "./assets-manifest.json";

const asset = (path: string) => `/assets/${path}`;

export const ASSETS = {
  logo: assetsManifest.logo,
  logoNav: assetsManifest.logoNav,
  logoOneBlack: assetsManifest.logoOneBlack,
  logoIcon: asset("logos/BLACK2.png"),
  logoMark: asset("logos/BLACK1.png"),
  logoWhite: asset("logos/NEWLOGO_WHITE.png"),
  logoHero: asset("logos/BLACK1-hero.png"),
  logoStacked: assetsManifest.logoOneBlack,
  logoBadge: asset("logos/LOGO9.jpg"),
  hero: {
    primary: asset("hero/pexels-sammccool47-33786601.jpg"),
    hero2: asset("hero/HERO2.jpg"),
    images: [
      asset("hero/pexels-sammccool47-33786601.jpg"),
      asset("hero/HERO2.jpg"),
      asset("hero/HERO3.jpg"),
      asset("hero/HERO4.jpg"),
    ],
  },
  mockups: assetsManifest.mockups,
  illustrations: {
    planting: asset("ILLUSTRATIONS/ILLUSTRATION1.jpg"),
    market: asset("ILLUSTRATIONS/ILLUSTRATION2.jpg"),
    farmer: asset("ILLUSTRATIONS/ILLUSTRATION3.jpg"),
    field: asset("ILLUSTRATIONS/ILLUSTRATION4.jpg"),
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
  misc: {
    bg1: asset("MISC/BG1.png"),
  },
};

export const WORLD_PRESENCE_COUNTRIES = [
  { id: "gh", name: "Ghana" },
  { id: "ke", name: "Kenya" },
  { id: "za", name: "South Africa" },
  { id: "ng", name: "Nigeria" },
  { id: "in", name: "India" },
  { id: "kr", name: "South Korea" },
  { id: "jp", name: "Japan" },
  { id: "cn", name: "China" },
  { id: "ls", name: "Lesotho" },
  { id: "br", name: "Brazil" },
  { id: "us", name: "United States" },
  { id: "dk", name: "Denmark" },
  { id: "ru", name: "Russia" },
  { id: "zw", name: "Zimbabwe" },
  { id: "mw", name: "Malawi" },
  { id: "gb", name: "UK" },
];

export const ABOUT_MISSION =
  "Our mission is to connect farmers who need funding with everyday people who want to invest. We believe access to capital shouldn't depend on collateral, and that anyone should be able to grow their money in real agriculture starting from just R100.";

export const ABOUT_VALUES = [
  {
    title: "Access over barriers",
    body: "We design every feature so farmers can access capital and investors can start small, no collateral.",
  },
  {
    title: "Transparency over promises",
    body: "AI-powered tracking means every investor sees real growth data from planting to harvest, not just projections.",
  },
  {
    title: "Impact with returns",
    body: "Financial growth and food security go hand in hand. Every investment strengthens farms and communities.",
  },
];

export const FOUNDERS = [
  {
    name: "Yadav Singh",
    role: "Co-Founder & CPCO",
    badge: "CPCO",
    image: ASSETS.founders.primary,
    linkedin: "https://za.linkedin.com/in/yadav-singh-b9b12321b",
  },
  {
    name: "Abisola Adenyanju",
    role: "Co-Founder & CEO",
    badge: "CEO",
    image: ASSETS.founders.abisola,
    linkedin: "https://www.linkedin.com/in/abisola-o-adeyanju-b168b3319",
  },
  {
    name: "Abrahame Mola",
    role: "Co-Founder & CDO",
    badge: "CDO",
    image: ASSETS.founders.abrahame,
    linkedin: "https://www.linkedin.com/in/abrahame-mola-096b7630a/",
  },
];

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

export const WHY_TYPING_PHRASES = [
  "research and insights",
  "exposure for farm projects",
  "portfolio diversification",
  "capital performance",
  "interest for investors",
  "direct agri-investments",
];

export const WHY_CARDS = [
  {
    label: "WE PROVIDE",
    title: "Capital for farmers",
    image: ASSETS.slides[4],
  },
  {
    label: "WE PROVIDE",
    title: "Exposure for farm projects",
    image: ASSETS.slides[5],
  },
];
