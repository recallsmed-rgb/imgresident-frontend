import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is the best timeline to prepare for USMLE Step 1?",
      answer: "The ideal timeline varies, but we generally recommend a dedicated period of 6-8 months for comprehensive preparation. Our personalized plans can help you structure your study schedule effectively based on your specific needs and timeline."
    },
    {
      question: "How important are research publications for matching into residency?",
      answer: "Research publications can significantly strengthen your residency application, especially for competitive specialties. However, the importance varies. We guide our students on how to strategically build their research portfolio to align with their career goals."
    },
    {
      question: "What is included in the premium consultation package?",
      answer: "Our premium package includes one-on-one mentorship, a personalized study plan, personal statement and CV editing, mock interviews, and continuous support throughout your application cycle. It's our most comprehensive service designed for success."
    },
    {
      question: "Do you offer guidance for writing personal statements?",
      answer: "Absolutely. We provide expert guidance on crafting a compelling personal statement that highlights your unique story, skills, and motivations. Our team helps you from brainstorming initial ideas to final polishing, ensuring your statement stands out."
    },
    {
      question: "How can I schedule a one-on-one session?",
      answer: "You can easily schedule a one-on-one session through our website's booking portal. Simply choose an available time slot that works for you, and we'll confirm your appointment via email with all the necessary details."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Your questions, answered. Find information about USMLE preparation, residency applications, and our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-lg font-semibold ${openIndex === index ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : ''}`} 
                />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still looking box */}
        <div className="max-w-3xl mx-auto mt-12 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Still looking for answers?</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">We're here to help you on your journey. Reach out to us.</p>
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