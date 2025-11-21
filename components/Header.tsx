import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onOpenLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { toggleCart, items } = useCart();
  const cartItemCount = items.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const headerOffset = 90;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });

  setMobileMenuOpen(false);
};

  const navLinks = [
    { name: 'Mission', id: 'mission' },
    { name: 'Services', id: 'services' },
    { name: 'Blog', id: 'blog' },
    { name: 'FAQs', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-colors duration-300 py-4 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="text-xl font-serif font-bold text-slate-900 dark:text-white tracking-wide">
                THE IMG RESIDENT
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light transition-colors">
              Home
            </button>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={toggleCart}
              className="flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5 mr-1" />
              Cart
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button
              onClick={onOpenLogin}
              className="px-5 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md"
            >
              Login / Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-slate-100 dark:border-slate-800 p-4 absolute left-4 right-4 top-16 z-40 animate-fade-in">
            <div className="flex flex-col space-y-4">
               <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary"
              >
                Home
              </button>
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary"
                >
                  {link.name}
                </button>
              ))}
              <div className="h-px bg-slate-200 dark:bg-slate-700 my-2" />
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  toggleCart();
                }}
                className="flex items-center text-base font-medium text-primary"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Cart ({cartItemCount})
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full py-2 text-center text-base font-medium text-white bg-primary rounded-lg hover:bg-primary-dark"
              >
                Login / Sign up
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;