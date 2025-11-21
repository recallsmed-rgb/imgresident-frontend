import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Loader2, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { api } from '../services/api';

const CartDrawer: React.FC = () => {
  const { isOpen, toggleCart, items, removeFromCart, cartTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isOpen) return null;

  const handleCheckout = async () => {
    if (items.length === 0) return;
    
    setIsCheckingOut(true);
    try {

      const { checkoutUrl } = await api.createCheckoutSession(items);
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error("Checkout failed", error);
      alert("Failed to initiate checkout. Please try again.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={toggleCart}
      />
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md transform transition-transform bg-white dark:bg-slate-900 shadow-2xl flex flex-col h-full animate-slide-in-right">
          
          {/* Header */}
          <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <h2 className="text-xl font-serif font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-primary" />
              Your Cart
            </h2>
            <button 
              onClick={toggleCart}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-300 dark:text-slate-600">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-lg font-medium text-slate-900 dark:text-white">Your cart is empty</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Explore our services to get started.</p>
                </div>
                <button 
                  onClick={() => {
                    toggleCart();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  View Services
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                    <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center shrink-0 text-2xl">
                      {item.type === 'plan' ? '📅' : '🎓'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">{item.type}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="font-bold text-primary">${item.price}</span>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-400 hover:text-red-500 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer / Checkout */}
          {items.length > 0 && (
            <div className="border-t border-slate-100 dark:border-slate-800 p-6 bg-white dark:bg-slate-900 space-y-4">
              <div className="flex items-center justify-between text-lg font-medium">
                <span className="text-slate-600 dark:text-slate-300">Subtotal</span>
                <span className="text-slate-900 dark:text-white font-bold">${cartTotal}</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 text-center">
                Taxes and discounts calculated at checkout.
              </div>
              <button 
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary-dark shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isCheckingOut ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    Checkout via Shopify
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;