import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Services from "./components/Services";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import CartDrawer from "./components/CartDrawer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { CartProvider } from "./context/CartContext";

const App: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [privacyReturnPosition, setPrivacyReturnPosition] = useState<number | null>(null);

  const openPrivacy = () => {
    setPrivacyReturnPosition(window.scrollY);
    setIsPrivacyOpen(true);
  };

  const closePrivacy = () => {
    setIsPrivacyOpen(false);
    if (privacyReturnPosition !== null) {
      const target = privacyReturnPosition;
      setPrivacyReturnPosition(null);
      requestAnimationFrame(() => {
        window.scrollTo({ top: target, behavior: "smooth" });
      });
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header onOpenLogin={() => setIsLoginOpen(true)} />

        <main>
          <Hero />
          <Mission />
          <Services />
          <Blog />
          <FAQ />
          <Contact onOpenPrivacy={openPrivacy} />
        </main>

        <Footer />

        {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
        <PrivacyPolicy isOpen={isPrivacyOpen} onClose={closePrivacy} />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default App;
