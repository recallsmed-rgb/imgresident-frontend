import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import faqsData from '../data/faqs.json';

const faqs = faqsData as { question: string; answer: string }[];

const FAQ: React.FC = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your questions, answered. Find information about USMLE preparation, residency applications, and our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-lg font-semibold ${openIndex === index ? 'text-primary' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : ''}`} 
                />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still looking box */}
        <div className="max-w-3xl mx-auto mt-12 bg-white border border-slate-200 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
                <h4 className="text-lg font-bold text-slate-900">Still looking for answers?</h4>
                <p className="text-slate-600 text-sm">We're here to help you on your journey. Reach out to us.</p>
            </div>
            <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors shrink-0"
            >
                Contact Us
            </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
