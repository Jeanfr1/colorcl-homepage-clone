// Product Types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number; // For showing discounts
  images: string[];
  category: ProductCategory;
  brand: string;
  inStock: boolean;
  isOnSale: boolean;
  isBestSeller: boolean;
  isNewArrival: boolean;
  colors: ProductColor[];
  specifications: ProductSpecs;
  tags: string[];
}

export interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

export interface ProductSpecs {
  diameter: string;
  waterContent: string;
  baseCurve: string;
  duration: string; // "Daily", "Weekly", "Monthly"
  packaging: string; // "2 lenses", "10 lenses", etc.
}

export type ProductCategory = 
  | "bliss"
  | "romance" 
  | "crystal"
  | "iris"
  | "halo"
  | "sahara"
  | "masterpiece"
  | "lychee"
  | "persona"
  | "clear";

// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  dateOfBirth?: string;
  addresses: Address[];
  orders: Order[];
  wishlist: string[]; // Product IDs
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  id: string;
  type: "shipping" | "billing";
  firstName: string;
  lastName: string;
  company?: string;
  street1: string;
  street2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone?: string;
  isDefault: boolean;
}

// Cart Types
export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
  selectedColor: ProductColor;
  addedAt: string;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  discountCode?: string;
  discountAmount?: number;
}

// Order Types
export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  shippingAddress: Address;
  billingAddress: Address;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  discountCode?: string;
  discountAmount?: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  createdAt: string;
  updatedAt: string;
  trackingNumber?: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  selectedColor: ProductColor;
  quantity: number;
  price: number;
}

export type OrderStatus = 
  | "pending"
  | "confirmed" 
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "returned";

export type PaymentStatus = 
  | "pending"
  | "paid"
  | "failed"
  | "refunded";

// Search & Filter Types
export interface ProductFilters {
  categories: ProductCategory[];
  priceRange: {
    min: number;
    max: number;
  };
  colors: string[];
  inStock: boolean;
  onSale: boolean;
  brands: string[];
}

export interface SearchResult {
  products: Product[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  filters: ProductFilters;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}

// UI State Types
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

export interface PaginationState {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}