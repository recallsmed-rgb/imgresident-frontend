import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  type: 'service' | 'plan';
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  toggleCart: () => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen(prev => !prev);

  const addToCart = (item: CartItem) => {
    setItems(prev => [...prev, { ...item, id: `${item.id}-${Date.now()}` }]); 
    setIsOpen(true); 
  };

  const removeFromCart = (itemId: string) => {
    setItems(prev => prev.filter(item => item.id !== itemId));
  };

  const clearCart = () => setItems([]);

  const cartTotal = items.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider value={{ items, isOpen, toggleCart, addToCart, removeFromCart, clearCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};