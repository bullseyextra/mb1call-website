export const site = {
  name: "MB1Call",
  legalName: "MB1Call Inc.",
  shortName: "MB1Call",
  url: "https://mb1call.ca",
  tagline: "Safe · Sustainable · Superior",
  promise: "Marking paint, pin flags, and survey stakes—without the corporate markup.",
  description:
    "Winnipeg marking-supplies shop for contractors, surveyors, and utility crews. Soppec marking paint, pin flags, and survey stakes. Inquire or order—no online checkout.",
  phoneDisplay: "204-777-6590",
  phoneTel: "+12047776590",
  email: "info@mb1call.com",
  hours: {
    display: "Monday–Friday, 8am–4pm",
    days: "Monday through Friday",
    opens: "08:00",
    closes: "16:00",
  },
  address: {
    street: "7 Valde Avenue",
    city: "Winnipeg",
    region: "MB",
    postal: "R2C 2K8",
    country: "Canada",
    line: "7 Valde Avenue, Winnipeg, MB R2C 2K8",
  },
  geo: {
    lat: 49.9112187,
    lng: -97.0028772,
  },
  mapUrl:
    "https://www.openstreetmap.org/?mlat=49.9112187&mlon=-97.0028772#map=16/49.91122/-97.00288",
  jotforms: {
    order: "https://form.jotform.com/261818054816057",
    info: "https://form.jotform.com/261818437345261",
  },
  soppec: "https://soppec-inc.com/en/",
  priceList: {
    href: "/docs/Soppec-retail-prices-2026-June-1.pdf",
    liveHref:
      "https://mb1call.ca/wp-content/uploads/2026/07/Soppec-retail-prices-2026-June-1.pdf",
    label: "Marking supplies retail prices 2026",
    dated: "June 1, 2026",
  },
} as const;

export const media = {
  logo: "/media/logos/MB1Call-MarkingPaints.png",
  icon: "/media/logos/MB1Call-ICON.png",
  appleIcon: "/media/logos/apple-touch-icon.png",
  allCans: "/media/paint/all-cans.png",
  fluoTp: "/media/paint/fluo-tp.png",
  proMarkerRed: "/media/paint/pro-marker-red.png",
  proMarkerYellow: "/media/paint/pro-marker-yellow.png",
  proMarkerWhite: "/media/paint/pro-marker-white.png",
  proMarkerGrey: "/media/paint/pro-marker-grey.png",
  proMarkerBlack: "/media/paint/pro-marker-black.png",
  idealSprayPink: "/media/paint/ideal-spray-pink.png",
  idealSprayRed: "/media/paint/ideal-spray-red.png",
  flagOrange: "/media/flags/orange.png",
  flagPink: "/media/flags/pink.png",
  flagRed: "/media/flags/red.png",
  flagYellow: "/media/flags/yellow.png",
  flagGreen: "/media/flags/green.png",
  flagBlue: "/media/flags/blue.png",
  stakes48: "/media/stakes/48-inch.png",
  stakes24: "/media/stakes/24-inch.png",
  stakesSelection: "/media/stakes/selection.png",
} as const;

export const docs = {
  priceList: site.priceList.href,
  fluoTpSheet: "/docs/SOPPEC-INC-FT-FLUO-TP-EN.pdf",
  proMarkerSheet: "/docs/SOPPEC-INC-FT-PRO-MARKER-EN.pdf",
  idealSpraySheet: "/docs/SOPPEC-INC-FT-IDEAL-SPRAY-EN.pdf",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
] as const;

export const shopLinks = [
  { href: "/marking-paint", label: "Marking paint" },
  { href: "/pin-flags", label: "Pin flags" },
  { href: "/survey-stakes", label: "Survey stakes" },
] as const;

export const categories = [
  {
    slug: "marking-paint",
    href: "/marking-paint",
    name: "Marking paint",
    navLabel: "Marking paint",
    cardTitle: "Soppec marking paint",
    summary:
      "Fluorescent and standard inverted marking paints with the patented TP safety cap. Built for gravel, concrete, asphalt, grass, and wood.",
    image: media.allCans,
    imageAlt: "Four Soppec marking paint cans from the MB1Call lineup",
  },
  {
    slug: "pin-flags",
    href: "/pin-flags",
    name: "Pin flags",
    navLabel: "Pin flags",
    cardTitle: "Pin flags",
    summary:
      "High-grade, responsibly sourced pin flags in bright colours. 21-inch stake with a 4 × 5-inch flag, bundled for field crews.",
    image: media.flagOrange,
    imageAlt: "Orange survey pin flag on a wire staff",
  },
  {
    slug: "survey-stakes",
    href: "/survey-stakes",
    name: "Survey stakes",
    navLabel: "Survey stakes",
    cardTitle: "Survey stakes",
    summary:
      "Wooden lath survey stakes in 24-inch and 48-inch lengths, unpainted or pink-dipped, sold in bundles of 50.",
    image: media.stakesSelection,
    imageAlt: "Bundle of wooden survey stakes with pink-dipped ends",
  },
] as const;

export const paintLines = [
  {
    slug: "fluo-tp",
    name: "Fluo TP",
    kind: "Fluorescent worksite marker",
    summary:
      "Soppec Fluo TP is the fluorescent marking paint MB1Call stocks for construction, surveying, roadworks, and civil engineering. High pigment concentration for one-coat coverage, with visibility called out by the manufacturer at over 50 metres.",
    details: [
      "Patented TP safety cap for drip-free application",
      "Used on concrete, asphalt, grass, and other worksite surfaces",
      "Manufacturer-rated down to −15°C",
      "Markings described as durable for up to 12 months, depending on conditions",
      "Seven fluorescent colours",
    ],
    colors: ["Pink", "Red", "Orange", "Yellow", "Blue", "Green", "Purple"],
    image: media.fluoTp,
    imageAlt: "Soppec Fluo TP fluorescent marking paint can",
    sheetHref: docs.fluoTpSheet,
    sheetLabel: "Fluo TP product sheet (PDF)",
  },
  {
    slug: "pro-marker",
    name: "Pro Marker",
    kind: "Non-fluorescent worksite marker",
    summary:
      "Soppec Pro Marker is the non-fluorescent line for everyday identification and signage—construction sites, roads, earthworks, pipework, and building projects where high-visibility fluorescent paint is not required.",
    details: [
      "Same patented TP safety cap as Fluo TP",
      "Covers concrete, asphalt, grass, and wood",
      "Practical colours for general marking",
    ],
    colors: ["Red", "Yellow", "White", "Black", "Grey"],
    image: media.proMarkerRed,
    imageAlt: "Soppec Pro Marker non-fluorescent marking paint can",
    sheetHref: docs.proMarkerSheet,
    sheetLabel: "Pro Marker product sheet (PDF)",
  },
  {
    slug: "ideal-spray-360",
    name: "Ideal Spray 360°",
    kind: "Fluorescent, any-position spray",
    summary:
      "Soppec Ideal Spray uses a 360° multidirectional valve so you can spray upright, sideways, or upside down—useful in sewers, tunnels, mines, earthworks, landscaping, and vertical surfaces.",
    details: [
      "Patented TP safety cap",
      "Fluorescent marking where standard upright spraying is awkward",
      "Order-form colours: pink and orange (red shown on some product photography)",
    ],
    colors: ["Pink", "Orange"],
    image: media.idealSprayPink,
    imageAlt: "Soppec Ideal Spray 360 fluorescent marking paint can",
    sheetHref: docs.idealSpraySheet,
    sheetLabel: "Ideal Spray product sheet (PDF)",
  },
] as const;

export const alsoAvailablePaint = [
  "Fluo TP Hydro (water-based fluorescent)",
  "Fluo Marker (forestry)",
  "Tracing / line tracer",
  "Glava Zinc Matt 97%",
  "RAL Premium Acrylic",
  "Primer",
  "Duo wand (applicator)",
  "Long and short marking wands",
] as const;

export const pinFlagProduct = {
  name: "Marking flags",
  spec: "21-inch stake with a 4 × 5-inch flag",
  pack: "Bundles of 100; cases of 10 bundles",
  colors: ["Pink", "Orange", "Red", "Yellow", "Green", "Blue"] as const,
  notes: [
    "Sold for construction, surveying, and utility marking.",
    "The live catalog also mentions plastic-staff and metal-wire options, and 21-inch or 30-inch lengths—ask if you need a length or staff type other than the 21-inch flag on the price sheet.",
  ],
};

export const stakeProducts = [
  {
    name: "48-inch unpainted",
    spec: '48" × 5/8" × 1½"',
    pack: "Bundle of 50",
    image: media.stakes48,
    imageAlt: "Unpainted 48-inch wooden survey lath",
  },
  {
    name: "48-inch pink dipped",
    spec: '48" × 5/8" × 1½", pink dipped',
    pack: "Bundle of 50",
    image: media.stakesSelection,
    imageAlt: "Pink-dipped wooden survey stakes",
  },
  {
    name: "24-inch unpainted",
    spec: '24" × 5/8" × 1½"',
    pack: "Bundle of 50",
    image: media.stakes24,
    imageAlt: "Unpainted 24-inch wooden survey lath",
  },
] as const;

export const reasons = [
  {
    title: "Winnipeg, no-nonsense",
    body: "A local crew that cuts the markup so field teams can buy premium marking supplies without a corporate price tag.",
  },
  {
    title: "Soppec paint specialists",
    body: "We stock the pro-favourite Soppec lines with the patented TP safety cap—the cap that is sold on not breaking, dripping, or making a mess.",
  },
  {
    title: "Flags and stakes that match the paint",
    body: "Responsibly sourced pin flags and wooden survey stakes so a crew can mark a site with one supplier, not three catalogs.",
  },
  {
    title: "Inquire or order—no cart",
    body: "This is a catalog and an order desk, not a checkout. Call, email, or send the order form. We’ll confirm availability and ship across Canada.",
  },
] as const;

export const flagSwatches = [
  { name: "Pink", src: media.flagPink },
  { name: "Orange", src: media.flagOrange },
  { name: "Red", src: media.flagRed },
  { name: "Yellow", src: media.flagYellow },
  { name: "Green", src: media.flagGreen },
  { name: "Blue", src: media.flagBlue },
] as const;
