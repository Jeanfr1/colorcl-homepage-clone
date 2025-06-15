import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { CartItem, Cart, Product, ProductColor } from "../types";

interface CartState {
  cart: Cart;
  isOpen: boolean;
}

type CartAction = 
  | { type: "ADD_ITEM"; payload: { product: Product; selectedColor: ProductColor; quantity?: number } }
  | { type: "REMOVE_ITEM"; payload: { productId: string; colorName: string } }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; colorName: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "CLOSE_CART" }
  | { type: "OPEN_CART" };

interface CartContextType {
  state: CartState;
  addItem: (product: Product, selectedColor: ProductColor, quantity?: number) => void;
  removeItem: (productId: string, colorName: string) => void;
  updateQuantity: (productId: string, colorName: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  closeCart: () => void;
  openCart: () => void;
  getItemCount: () => number;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const TAX_RATE = 0.08; // 8% tax
const FREE_SHIPPING_THRESHOLD = 50;
const SHIPPING_COST = 5.99;

const calculateCartTotals = (items: CartItem[]): Omit<Cart, "items"> => {
  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const tax = subtotal * TAX_RATE;
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotal + tax + shipping;

  return {
    subtotal: Math.round(subtotal * 100) / 100,
    tax: Math.round(tax * 100) / 100,
    shipping: Math.round(shipping * 100) / 100,
    total: Math.round(total * 100) / 100
  };
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, selectedColor, quantity = 1 } = action.payload;
      const existingItemIndex = state.cart.items.findIndex(
        item => item.productId === product.id && item.selectedColor.name === selectedColor.name
      );

      let newItems: CartItem[];

      if (existingItemIndex >= 0) {
        // Update existing item quantity
        newItems = state.cart.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item
        const newItem: CartItem = {
          productId: product.id,
          product,
          quantity,
          selectedColor,
          addedAt: new Date().toISOString()
        };
        newItems = [...state.cart.items, newItem];
      }

      const totals = calculateCartTotals(newItems);

      return {
        ...state,
        cart: {
          items: newItems,
          ...totals
        }
      };
    }

    case "REMOVE_ITEM": {
      const { productId, colorName } = action.payload;
      const newItems = state.cart.items.filter(
        item => !(item.productId === productId && item.selectedColor.name === colorName)
      );
      const totals = calculateCartTotals(newItems);

      return {
        ...state,
        cart: {
          items: newItems,
          ...totals
        }
      };
    }

    case "UPDATE_QUANTITY": {
      const { productId, colorName, quantity } = action.payload;
      
      if (quantity <= 0) {
        return cartReducer(state, { type: "REMOVE_ITEM", payload: { productId, colorName } });
      }

      const newItems = state.cart.items.map(item =>
        item.productId === productId && item.selectedColor.name === colorName
          ? { ...item, quantity }
          : item
      );
      const totals = calculateCartTotals(newItems);

      return {
        ...state,
        cart: {
          items: newItems,
          ...totals
        }
      };
    }

    case "CLEAR_CART":
      return {
        ...state,
        cart: {
          items: [],
          subtotal: 0,
          tax: 0,
          shipping: 0,
          total: 0
        }
      };

    case "TOGGLE_CART":
      return {
        ...state,
        isOpen: !state.isOpen
      };

    case "CLOSE_CART":
      return {
        ...state,
        isOpen: false
      };

    case "OPEN_CART":
      return {
        ...state,
        isOpen: true
      };

    default:
      return state;
  }
};

const initialState: CartState = {
  cart: {
    items: [],
    subtotal: 0,
    tax: 0,
    shipping: 0,
    total: 0
  },
  isOpen: false
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (product: Product, selectedColor: ProductColor, quantity?: number) => {
    dispatch({ type: "ADD_ITEM", payload: { product, selectedColor, quantity } });
  };

  const removeItem = (productId: string, colorName: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { productId, colorName } });
  };

  const updateQuantity = (productId: string, colorName: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, colorName, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const closeCart = () => {
    dispatch({ type: "CLOSE_CART" });
  };

  const openCart = () => {
    dispatch({ type: "OPEN_CART" });
  };

  const getItemCount = () => {
    return state.cart.items.reduce((count, item) => count + item.quantity, 0);
  };

  const getCartTotal = () => {
    return state.cart.total;
  };

  const value: CartContextType = {
    state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    closeCart,
    openCart,
    getItemCount,
    getCartTotal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};