import axios from "axios";
import { ImageSourcePropType } from "react-native";
import { create } from "zustand";

export type Review = {
  id: string;
  user: string;
  rating: number;
  comment: string;
};

export type Product = {
  id: string;
  imageUri: ImageSourcePropType;
  title: string;
  price: number;
  description: string;
  averageRating: number;
  totalReviews: number;
  sizeVariants: string[];
  category: string;
  reviews: Review[];
};

type CartItem = Product & { quantity: number };

interface ProductStore {
  products: Product[];
  selectedProduct: Product | null;
  cart: CartItem[];
  isLoading: boolean;
  error: string | null;

  fetchProducts: () => Promise<void>;
  fetchProductById: (id: string) => Promise<void>;

  selectProduct: (p: Product) => void;

  addToCart: (p: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;

  cartTotal: () => number;
  cartCount: () => number;
}

const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  selectedProduct: null,
  cart: [],
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.get<Product[]>("/api/products");
      set({ products: res.data, isLoading: false });
    } catch (err: any) {
      set({ error: err.message || "Fetch failed", isLoading: false });
    }
  },

  fetchProductById: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.get<Product>(`/api/products/${id}`);
      set({ selectedProduct: res.data, isLoading: false });
    } catch (err: any) {
      set({ error: err.message || "Fetch by ID failed", isLoading: false });
    }
  },

  selectProduct: (p) => set({ selectedProduct: p }),

  addToCart: (product) => {
    const cart = get().cart.slice();
    const idx = cart.findIndex((c) => c.id === product.id);
    if (idx >= 0) {
      cart[idx].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    set({ cart });
  },

  removeFromCart: (id) => {
    let cart = get().cart.slice();
    cart = cart.filter((c) => c.id !== id);
    set({ cart });
  },

  clearCart: () => set({ cart: [] }),

  cartTotal: () =>
    get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),

  cartCount: () => get().cart.reduce((sum, item) => sum + item.quantity, 0),
}));

export default useProductStore;
