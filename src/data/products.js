export const productsData = [
  {
    id: 1,
    name: "Kremes Ubi Karamel",
    shortName: "Kremes Ubi",
    category: "manis",
    description: "Olahan ubi jalar manis berbalut gula karamel renyah, rasa manisnya pas dan garing kriuk tidak alot.",
    popularity: 98,
    image: "/images/products/kremes-ubi.jpg",
    variants: [
      { weight: "500g", price: 20000, label: "500g • 20k" },
      { weight: "1kg", price: 40000, label: "1kg • 40k" }
    ]
  },
  {
    id: 2,
    name: "Sistik Wijen Renyah",
    shortName: "Sistik Wijen",
    category: "gurih",
    description: "Stik renyah bertabur wijen wangi, gurih renyah tanpa rasa amis, tekstur empuk kriuk tidak keras.",
    popularity: 99,
    image: "/images/products/sistik-wijen.jpg",
    variants: [
      { weight: "250g", price: 12000, label: "250g • 12k" },
      { weight: "500g", price: 25000, label: "500g • 25k" },
      { weight: "1kg", price: 50000, label: "1kg • 50k" }
    ]
  },
  {
    id: 3,
    name: "Sistik Kuning Bawang Klasik",
    shortName: "Sistik Kuning",
    category: "gurih",
    description: "Sistik renyah rasa bawang gurih asin pas, cocok untuk teman santai, ngeteh, dan suguhan tamu.",
    popularity: 92,
    image: "/images/products/sistik-kuning.jpg",
    variants: [
      { weight: "250g", price: 10000, label: "250g • 10k" },
      { weight: "500g", price: 20000, label: "500g • 20k" },
      { weight: "1kg", price: 35000, label: "1kg • 35k" }
    ]
  },
  {
    id: 4,
    name: "Keripik Ubi Ungu Crispy",
    shortName: "Keripik Ubi Ungu",
    category: "manis",
    description: "Irisan ubi ungu pilihan yang digoreng tipis dan renyah dengan rasa manis alami ubi tanpa pemanis buatan.",
    popularity: 88,
    image: "/images/products/keripik-ubi-ungu.jpg",
    variants: [
      { weight: "250g", price: 13000, label: "250g • 13k" },
      { weight: "500g", price: 20000, label: "500g • 20k" },
      { weight: "1kg", price: 40000, label: "1kg • 40k" }
    ]
  },
  {
    id: 5,
    name: "Makaroni Pedas Daun Jeruk",
    shortName: "Makaroni Pedas",
    category: "pedas",
    description: "Makaroni spiral renyah dibumbui cabai dan aroma daun jeruk segar, rasa pedas gurihnya pas dan tidak keras.",
    popularity: 96,
    image: "/images/products/makaroni-pedas.jpg",
    variants: [
      { weight: "250g", price: 11000, label: "250g • 11k" },
      { weight: "500g", price: 23000, label: "500g • 23k" },
      { weight: "1kg", price: 43000, label: "1kg • 43k" }
    ]
  },
  {
    id: 6,
    name: "Seblak Kering Campur Bantet",
    shortName: "Seblak Kering Campur",
    category: "pedas",
    description: "Kerupuk seblak bantet aneka bentuk renyah dengan bumbu kencur dan cabai gurih nikmat, renyah dan kriuk.",
    popularity: 90,
    image: "/images/products/seblak-kering.jpg",
    variants: [
      { weight: "250g", price: 13000, label: "250g • 13k" },
      { weight: "500g", price: 22000, label: "500g • 22k" },
      { weight: "1kg", price: 45000, label: "1kg • 45k" }
    ]
  },
  {
    id: 7,
    name: "Basreng Bakso Goreng Daun Jeruk",
    shortName: "Basreng Pedas / Ori",
    category: "pedas",
    description: "Bakso goreng renyah aroma daun jeruk gurih, tekstur garing kriuk dan tidak keras saat digigit.",
    popularity: 97,
    image: "/images/products/basreng.jpg",
    variants: [
      { weight: "250g", price: 15000, label: "250g • 15k" },
      { weight: "500g", price: 28000, label: "500g • 28k" },
      { weight: "1kg", price: 55000, label: "1kg • 55k" }
    ]
  }
];

export const categoriesData = [
  { id: "all", label: "Semua Jajanan" },
  { id: "manis", label: "Manis & Legit" },
  { id: "gurih", label: "Gurih & Renyah" },
  { id: "pedas", label: "Pedas Daun Jeruk" },
  { id: "paket", label: "Paket Oleh-oleh" }
];
