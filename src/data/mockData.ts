import type { Product, BannerAd, Category } from '../types';

export const mockProducts: Product[] = [
  { 
    id: 1, 
    name: 'Artisan Sourdough Bread', 
    price: 8.99, 
    categoryId: 5, // Bakery
    image: '/images/img-01-m.jpg',
    description: 'Fresh-baked artisan sourdough with crispy crust and soft interior'
  },
  { 
    id: 2, 
    name: 'Organic Heirloom Tomatoes', 
    price: 5.49, 
    categoryId: 1, // Fresh Produce
    image: '/images/img-02-m.jpg',
    description: 'Premium organic heirloom tomatoes, locally grown and vine-ripened'
  },
  { 
    id: 3, 
    name: 'Aged Parmesan Cheese', 
    price: 24.99, 
    categoryId: 4, // Dairy & Cheese
    image: '/images/img-03-m.jpg',
    description: '24-month aged Parmigiano-Reggiano from Italy, rich and nutty flavor'
  },
  { 
    id: 4, 
    name: 'Wild Alaskan Salmon Fillet', 
    price: 32.50, 
    categoryId: 3, // Seafood
    image: '/images/img-04-m.jpg',
    description: 'Fresh wild-caught Alaskan salmon, rich in omega-3 fatty acids'
  },
  { 
    id: 5, 
    name: 'Grass-Fed Ribeye Steak', 
    price: 28.99, 
    categoryId: 2, // Meat & Poultry
    image: '/images/img-01-s.jpg',
    description: 'Premium grass-fed ribeye steak, perfectly marbled and tender'
  },
  { 
    id: 6, 
    name: 'Single Origin Coffee Beans', 
    price: 18.75, 
    categoryId: 7, // Beverages
    image: '/images/img-02-s.jpg',
    description: 'Ethiopian single origin coffee beans with floral and citrus notes'
  },
  { 
    id: 7, 
    name: 'Handmade Chocolate Truffles', 
    price: 15.99, 
    categoryId: 8, // Sweets & Desserts
    image: '/images/img-03-s.jpg',
    description: 'Luxurious handcrafted chocolate truffles with various fillings'
  },
  { 
    id: 8, 
    name: 'Extra Virgin Olive Oil', 
    price: 22.00, 
    categoryId: 6, // Pantry Essentials
    image: '/images/img-04-s.jpg',
    description: 'Cold-pressed extra virgin olive oil from ancient Greek groves'
  },
  { 
    id: 9, 
    name: 'Himalayan Pink Salt', 
    price: 12.99, 
    categoryId: 9, // Spices & Seasonings
    image: '/images/img-01-xs.jpg',
    description: 'Pure Himalayan pink salt crystals, perfect for finishing dishes'
  },
  { 
    id: 10, 
    name: 'Organic Free-Range Eggs', 
    price: 6.25, 
    categoryId: 4, // Dairy & Cheese (eggs category)
    image: '/images/img-02-xs.jpg',
    description: 'Farm-fresh organic eggs from free-range hens, rich golden yolks'
  },
  { 
    id: 11, 
    name: 'Prosciutto di Parma', 
    price: 34.50, 
    categoryId: 10, // Deli & Charcuterie
    image: '/images/img-03-xs.jpg',
    description: 'Authentic Italian Prosciutto di Parma, aged 18 months'
  },
  { 
    id: 12, 
    name: 'Organic Blueberries', 
    price: 7.99, 
    categoryId: 1, // Fresh Produce
    image: '/images/img-04-xs.jpg',
    description: 'Sweet organic blueberries, packed with antioxidants and flavor'
  },
];

export const mockBannerAds: BannerAd[] = [
  {
    id: 1,
    title: "Fresh & Organic Sale",
    subtitle: "50% off on all organic produce and farm-fresh items",
    image: "/images/img-01-xl.jpg",
    buttonText: "Shop Fresh",
    bgColor: "bg-gradient-to-r from-green-500 to-emerald-600"
  },
  {
    id: 2,
    title: "Premium Gourmet Collection",
    subtitle: "Discover artisan cheeses, fine wines, and specialty foods",
    image: "/images/img-02-xl.jpg",
    buttonText: "Explore Gourmet",
    bgColor: "bg-gradient-to-r from-amber-500 to-orange-600"
  },
  {
    id: 3,
    title: "Free Delivery Today",
    subtitle: "Same-day delivery on all fresh groceries and prepared meals",
    image: "/images/img-03-xl.jpg",
    buttonText: "Order Now",
    bgColor: "bg-gradient-to-r from-blue-500 to-cyan-600"
  },
  {
    id: 4,
    title: "Chef's Special Menu",
    subtitle: "Ready-to-cook meal kits with premium ingredients",
    image: "/images/img-04-xl.jpg",
    buttonText: "Cook Tonight",
    bgColor: "bg-gradient-to-r from-purple-500 to-pink-600"
  }
];

export const categories: Category[] = [
  { id: 1, name: 'Fresh Produce', slug: 'fresh-produce' },
  { id: 2, name: 'Meat & Poultry', slug: 'meat-poultry' },
  { id: 3, name: 'Seafood', slug: 'seafood' },
  { id: 4, name: 'Dairy & Cheese', slug: 'dairy-cheese' },
  { id: 5, name: 'Bakery', slug: 'bakery' },
  { id: 6, name: 'Pantry Essentials', slug: 'pantry-essentials' },
  { id: 7, name: 'Beverages', slug: 'beverages' },
  { id: 8, name: 'Sweets & Desserts', slug: 'sweets-desserts' },
  { id: 9, name: 'Spices & Seasonings', slug: 'spices-seasonings' },
  { id: 10, name: 'Deli & Charcuterie', slug: 'deli-charcuterie' }
];

// Helper function to get category by ID
export const getCategoryById = (id: number): Category | undefined => {
  return categories.find(category => category.id === id);
};

// Helper function to get category name by ID
export const getCategoryNameById = (id: number): string => {
  const category = getCategoryById(id);
  return category ? category.name : 'Unknown Category';
};

// Helper function to get translated category name by ID
export const getTranslatedCategoryName = (id: number, t: (key: string) => string): string => {
  const category = getCategoryById(id);
  if (!category) return t('unknownCategory');
  
  const categoryMap: { [key: string]: string } = {
    'Fresh Produce': t('freshProduce'),
    'Meat & Poultry': t('meatPoultry'),
    'Seafood': t('seafood'),
    'Dairy & Cheese': t('dairyCheese'),
    'Bakery': t('bakery'),
    'Pantry Essentials': t('pantryEssentials'),
    'Beverages': t('beverages'),
    'Sweets & Desserts': t('sweetsDeserts'),
    'Spices & Seasonings': t('spicesSeasonings'),
    'Deli & Charcuterie': t('deliCharcuterie'),
  };
  
  return categoryMap[category.name] || category.name;
};
