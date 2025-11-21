import React, { useState } from 'react';

interface ContactProps {
  onOpenPrivacy?: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenPrivacy }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            For any inquiries or first-time questions, reach out using the form below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Contact Form</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                  placeholder="Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Contact Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                  placeholder="+91 12345 67890"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email ID</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="education" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Education</label>
                <input 
                  type="text" 
                  id="education" 
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                  placeholder="MBBS, JIPMER"
                />
              </div>
              <div>
                <label htmlFor="visa" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Visa Status</label>
                <select 
                  id="visa" 
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow appearance-none"
                >
                  <option value="">Select Status</option>
                  <option value="citizen">US Citizen / Green Card</option>
                  <option value="sponsorship">Requires J1/H1B Sponsorship</option>
                  <option value="na">Not Applicable</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="inquiry" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Inquiry Box</label>
              <textarea 
                id="inquiry" 
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                placeholder="Please describe your inquiry here..."
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">Are you looking for:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {['USMLE', 'Clinical Rotations', 'Research', 'ERAS Services'].map((item) => (
                  <label key={item} className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary" />
                    <span className="text-slate-700 dark:text-slate-200">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary-dark shadow-lg hover:shadow-primary/40 transition-all transform hover:-translate-y-1"
            >
              Submit
            </button>
          </form>

          {submitted && (
            <div className="mt-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-lg text-green-700 dark:text-green-400 text-center animate-fade-in">
              Thank you for your message! We will get back to you shortly.
            </div>
          )}
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary font-semibold hover:underline"
            >
              Privacy Policy
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
