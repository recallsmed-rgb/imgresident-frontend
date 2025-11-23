import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {

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
};


  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
              The IMG Resident
            </h2>
            <p className="text-slate-600 leading-relaxed max-w-md">
              Empowering Indian medical graduates on their journey to secure a
              U.S. residency. We provide expert guidance and comprehensive
              resources for USMLE success.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
              Navigate
            </h3>
            <ul className="space-y-3">
              {["Home", "Mission", "Services", "Blog", "FAQ", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-slate-600 hover:text-primary transition-colors text-left"
                    >
                      {item === "Home"
                        ? "Home"
                        : item === "Mission"
                        ? "Our Mission"
                        : item === "FAQ"
                        ? "FAQs"
                        : item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
              Connect & Support
            </h3>
            <ul className="space-y-3 mb-8">
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("privacy")}
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:recallsmed@gmail.com"
                className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} The IMG Resident. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
