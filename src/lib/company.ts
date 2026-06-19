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
    "Tukang paip & kontraktor renovation trusted — emergency 24/7, kerja kemas, harga boleh bincang di Ampang & Selangor.",
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
    title: "Ubah Suai Bumbung & Kekuda",
    subtitle: "Roofing & Structural Truss",
    description:
      "Baiki bumbung, perkukuh kekuda, dan upgrade struktur untuk rumah teres dan landed.",
  },
  {
    title: "Waterproofing & Baiki Slab",
    subtitle: "Torch-on Membrane · Slab Bocor",
    description:
      "Pasang torch-on membrane, rawat slab bocor, dan sistem moisture barrier yang tahan lama.",
  },
  {
    title: "Tiles & Table Top Concrete",
    subtitle: "Masonry · Kitchen Counter",
    description:
      "Custom concrete table top dapur, pasang tiles, dan kerja masonry wet-area yang precise.",
  },
  {
    title: "Cat Rumah Penuh / Touch-Up",
    subtitle: "Interior & Exterior Painting",
    description:
      "Cat seluruh rumah atau touch-up targeted — finishing rata dan kemas, dijamin.",
  },
] as const

export const EMERGENCY_SERVICES = [
  {
    title: "Buka Sumbatan Paip / Sinki",
    subtitle: "Mechanical Line Unclogging",
    description:
      "Clear paip, sinki, dan floor trap tersumbat dengan cepat — on-site dalam beberapa jam.",
  },
  {
    title: "Baiki Paip Bocor Dalam Dinding",
    subtitle: "Internal Leaking Repair",
    description:
      "Detect dan repair paip bocor tersembunyi dalam dinding — minimal gangguan.",
  },
  {
    title: "Tukar Tangki Air & Meter",
    subtitle: "Polytank / Meter Paip",
    description:
      "Ganti polytank, servis float valve, dan repair meter line untuk aliran air stabil.",
  },
  {
    title: "Tukar Pintu & Aksesori",
    subtitle: "Door & Fitting Swaps",
    description:
      "Ganti pintu, betulkan engsel, tukar kunci, dan adjustment fitting am.",
  },
] as const

export const DISPATCH_CATEGORY_LABELS = {
  emergency_plumbing: "Emergency Plumbing (Paip Sumbat / Bocor)",
  renovation_inspection: "Inspection Renovation Percuma",
} as const

export const PROPERTY_TYPE_LABELS = {
  condo: "Kondo / Apartment",
  terrace: "Teres / Rumah Landed",
  shop_office: "Kedai / Pejabat",
} as const
