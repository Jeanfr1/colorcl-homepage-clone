import { Product, ProductCategory } from "../types";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "SIESTA Bliss Natural Brown",
    description: "Natural brown color contact lenses with comfortable daily wear",
    price: 25.00,
    originalPrice: 35.00,
    images: [
      "https://ext.same-assets.com/1106046646/170511303.png",
      "https://via.placeholder.com/400x400/8B4513/white?text=Brown"
    ],
    category: "bliss",
    brand: "SIESTA",
    inStock: true,
    isOnSale: true,
    isBestSeller: true,
    isNewArrival: false,
    colors: [
      {
        name: "Natural Brown",
        hex: "#8B4513",
        image: "https://via.placeholder.com/100x100/8B4513/white?text=Brown"
      },
      {
        name: "Honey Brown",
        hex: "#CD853F",
        image: "https://via.placeholder.com/100x100/CD853F/white?text=Honey"
      }
    ],
    specifications: {
      diameter: "14.2mm",
      waterContent: "40%",
      baseCurve: "8.6mm",
      duration: "Daily",
      packaging: "10 lenses"
    },
    tags: ["natural", "brown", "daily", "comfortable"]
  },
  {
    id: "2",
    name: "SIESTA Romance Gray",
    description: "Elegant gray color lenses perfect for a sophisticated look",
    price: 28.00,
    images: [
      "https://ext.same-assets.com/1106046646/1493563406.png",
      "https://via.placeholder.com/400x400/808080/white?text=Gray"
    ],
    category: "romance",
    brand: "SIESTA",
    inStock: true,
    isOnSale: false,
    isBestSeller: true,
    isNewArrival: true,
    colors: [
      {
        name: "Smoky Gray",
        hex: "#708090",
        image: "https://via.placeholder.com/100x100/708090/white?text=Gray"
      },
      {
        name: "Light Gray",
        hex: "#D3D3D3",
        image: "https://via.placeholder.com/100x100/D3D3D3/black?text=Light"
      }
    ],
    specifications: {
      diameter: "14.0mm",
      waterContent: "38%",
      baseCurve: "8.6mm",
      duration: "Monthly",
      packaging: "2 lenses"
    },
    tags: ["gray", "elegant", "monthly", "sophisticated"]
  },
  {
    id: "3",
    name: "SIESTA Crystal Blue",
    description: "Stunning crystal blue lenses for a mesmerizing look",
    price: 30.00,
    images: [
      "https://ext.same-assets.com/1106046646/1973108637.png",
      "https://via.placeholder.com/400x400/4169E1/white?text=Blue"
    ],
    category: "crystal",
    brand: "SIESTA",
    inStock: true,
    isOnSale: false,
    isBestSeller: false,
    isNewArrival: true,
    colors: [
      {
        name: "Crystal Blue",
        hex: "#4169E1",
        image: "https://via.placeholder.com/100x100/4169E1/white?text=Blue"
      },
      {
        name: "Ice Blue",
        hex: "#B0E0E6",
        image: "https://via.placeholder.com/100x100/B0E0E6/black?text=Ice"
      }
    ],
    specifications: {
      diameter: "14.5mm",
      waterContent: "42%",
      baseCurve: "8.8mm",
      duration: "Weekly",
      packaging: "6 lenses"
    },
    tags: ["blue", "crystal", "weekly", "mesmerizing"]
  },
  {
    id: "4",
    name: "SIESTA Iris Green",
    description: "Natural green color lenses with subtle enhancement",
    price: 26.00,
    images: [
      "https://ext.same-assets.com/1106046646/2181156243.png",
      "https://via.placeholder.com/400x400/228B22/white?text=Green"
    ],
    category: "iris",
    brand: "SIESTA",
    inStock: true,
    isOnSale: false,
    isBestSeller: false,
    isNewArrival: false,
    colors: [
      {
        name: "Forest Green",
        hex: "#228B22",
        image: "https://via.placeholder.com/100x100/228B22/white?text=Green"
      },
      {
        name: "Emerald Green",
        hex: "#50C878",
        image: "https://via.placeholder.com/100x100/50C878/white?text=Emerald"
      }
    ],
    specifications: {
      diameter: "14.0mm",
      waterContent: "40%",
      baseCurve: "8.6mm",
      duration: "Daily",
      packaging: "10 lenses"
    },
    tags: ["green", "natural", "daily", "subtle"]
  },
  {
    id: "5",
    name: "SIESTA Halo Violet",
    description: "Unique violet color lenses with halo effect",
    price: 35.00,
    images: [
      "https://ext.same-assets.com/1106046646/2893548898.png",
      "https://via.placeholder.com/400x400/8A2BE2/white?text=Violet"
    ],
    category: "halo",
    brand: "SIESTA",
    inStock: false,
    isOnSale: false,
    isBestSeller: false,
    isNewArrival: true,
    colors: [
      {
        name: "Deep Violet",
        hex: "#8A2BE2",
        image: "https://via.placeholder.com/100x100/8A2BE2/white?text=Violet"
      },
      {
        name: "Lavender",
        hex: "#E6E6FA",
        image: "https://via.placeholder.com/100x100/E6E6FA/black?text=Lavender"
      }
    ],
    specifications: {
      diameter: "14.8mm",
      waterContent: "45%",
      baseCurve: "8.8mm",
      duration: "Monthly",
      packaging: "2 lenses"
    },
    tags: ["violet", "halo", "monthly", "unique"]
  },
  {
    id: "6",
    name: "SIESTA Clear Daily",
    description: "Crystal clear daily contact lenses for vision correction",
    price: 20.00,
    images: [
      "https://ext.same-assets.com/1106046646/2343199044.png",
      "https://via.placeholder.com/400x400/F8F8FF/black?text=Clear"
    ],
    category: "clear",
    brand: "SIESTA",
    inStock: true,
    isOnSale: true,
    isBestSeller: true,
    isNewArrival: false,
    colors: [
      {
        name: "Clear",
        hex: "#F8F8FF",
        image: "https://via.placeholder.com/100x100/F8F8FF/black?text=Clear"
      }
    ],
    specifications: {
      diameter: "14.0mm",
      waterContent: "58%",
      baseCurve: "8.6mm",
      duration: "Daily",
      packaging: "30 lenses"
    },
    tags: ["clear", "daily", "vision", "correction"]
  }
];

export const categories: { name: string; category: ProductCategory; image: string }[] = [
  {
    name: "Bliss",
    category: "bliss",
    image: "https://ext.same-assets.com/1106046646/170511303.png"
  },
  {
    name: "Romance",
    category: "romance", 
    image: "https://ext.same-assets.com/1106046646/1493563406.png"
  },
  {
    name: "Crystal",
    category: "crystal",
    image: "https://ext.same-assets.com/1106046646/1973108637.png"
  },
  {
    name: "Iris",
    category: "iris",
    image: "https://ext.same-assets.com/1106046646/2181156243.png"
  },
  {
    name: "Halo",
    category: "halo",
    image: "https://ext.same-assets.com/1106046646/2893548898.png"
  },
  {
    name: "Sahara",
    category: "sahara",
    image: "https://ext.same-assets.com/1106046646/3457554628.png"
  },
  {
    name: "Master Piece",
    category: "masterpiece",
    image: "https://ext.same-assets.com/1106046646/3374009033.png"
  },
  {
    name: "Lychee",
    category: "lychee",
    image: "https://ext.same-assets.com/1106046646/1360648198.png"
  },
  {
    name: "Persona",
    category: "persona",
    image: "https://ext.same-assets.com/1106046646/577148014.png"
  },
  {
    name: "Clear",
    category: "clear",
    image: "https://ext.same-assets.com/1106046646/2343199044.png"
  }
];