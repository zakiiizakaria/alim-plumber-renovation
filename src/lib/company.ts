export const COMPANY = {
  name: "ALIM Plumber & Renovation",
  shortName: "ALIM Plumber & Renovation",
  phone: "60193602575",
  phoneSecondary: "601127895506",
  phoneDisplay: "+60 19-360 2575",
  phoneSecondaryDisplay: "+60 11-2789 5506",
  email: "hello@alimplumber.my",
  address:
    "Jalan Sulaiman 1, Taman Putra Sulaiman, 68000 Ampang, Selangor",
  tagline:
    "Trusted local plumber & renovation contractor — rapid emergency response, kerja kemas, and harga boleh bincang across Ampang & Selangor.",
  serviceAreas: [
    "Ampang",
    "Cheras",
    "Kajang",
    "Semenyih",
    "Putrajaya",
    "Cyberjaya",
  ],
  website: "https://alimplumber.my",
} as const

export const MAJOR_SERVICES = [
  {
    title: "Roofing & Structural Truss Overhauls",
    subtitle: "Ubah Suai Bumbung / Kekuda",
    description:
      "Roof repairs, truss reinforcement, and structural upgrades for terrace and landed homes.",
  },
  {
    title: "Waterproofing & Slab Rehabilitation",
    subtitle: "Sleb Bocor · Torch-on Membrane",
    description:
      "Torch-on membrane waterproofing, slab leak treatment, and long-lasting moisture barrier systems.",
  },
  {
    title: "Masonry & Countertops",
    subtitle: "Pasang Tiles / Concrete Kitchen Top",
    description:
      "Custom concrete kitchen counter table tops, tile installation, and precision wet-area masonry.",
  },
  {
    title: "Interior & Exterior Painting",
    subtitle: "Cat Rumah Penuh / Touch-Up",
    description:
      "Full-house repainting and targeted touch-ups with clean, even finishes — kerja kemas guaranteed.",
  },
] as const

export const EMERGENCY_SERVICES = [
  {
    title: "Mechanical Line Unclogging",
    subtitle: "Paip / Sinki Sumbat",
    description:
      "Fast clearance of blocked pipes, sinks, and floor traps — on-site within hours.",
  },
  {
    title: "Internal Leaking Repair",
    subtitle: "Paip Dalam Dinding Bocor",
    description:
      "Detection and repair of concealed pipe leaks inside walls with minimal disruption.",
  },
  {
    title: "Water Tank & Meter Overhaul",
    subtitle: "Tangki Air Polytank / Meter Paip",
    description:
      "Polytank replacement, float valve servicing, and meter line repairs for steady water flow.",
  },
  {
    title: "Door & Fitting Swaps",
    subtitle: "Tukar Pintu / Aksesori",
    description:
      "Door replacements, hinge fixes, lock swaps, and general fitting adjustments.",
  },
] as const

export const DISPATCH_CATEGORY_LABELS = {
  emergency_plumbing: "Emergency Plumbing (Paip Sumbat / Bocor)",
  renovation_inspection: "Free Renovation Inspection",
} as const

export const PROPERTY_TYPE_LABELS = {
  condo: "Condo / Apartment",
  terrace: "Terrace / Landed House",
  shop_office: "Shop / Office",
} as const
