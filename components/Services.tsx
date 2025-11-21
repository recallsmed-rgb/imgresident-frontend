
import React from 'react';
import { BookOpen, Stethoscope, FileText, Users, Microscope, Sparkles, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Services: React.FC = () => {
  const { addToCart } = useCart();

  const servicesList = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "USMLE Step 1 Tutoring",
      desc: "Personalized study plans and a focus on high-yield content to build your foundational knowledge."
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "USMLE Step 2 CK Guidance",
      desc: "Master clinical cases and develop effective exam strategies for your Step 2 CK preparation."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "ERAS Application Review",
      desc: "Optimize your ERAS application with expert personal statement editing and CV refinement."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Residency Interview Coaching",
      desc: "Develop confidence and polish your communication skills with realistic mock interviews and feedback."
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Research Mentorship",
      desc: "Strengthen your research portfolio and stand out with dedicated mentorship and guidance."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "End-to-End Residency Package",
      desc: "An all-inclusive offering combining our expert services for a seamless path to residency."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white dark:from-slate-800 to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
            Start Your Journey with a <br/><span className="text-primary">Strong Foundation</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
            Get a head start on your US residency journey with our foundational services. Whether you need a comprehensive overview or continuous guidance, we have the right plan to support your ambitions.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-24">
          
          {/* Card 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">USMLE Overview Session</h3>
            <div className="mb-6">
              <span className="text-4xl font-black text-primary">$85</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {['Personalized Roadmap', 'Comprehensive CV Review', 'Q&A with a Resident'].map((item, i) => (
                <li key={i} className="flex items-start text-slate-600 dark:text-slate-300">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button 
                onClick={() => addToCart({
                  id: 'plan_overview_session',
                  title: 'USMLE Overview Session',
                  price: 85,
                  type: 'service'
                })}
                className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors flex justify-center items-center"
            >
              Add to Cart
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary flex flex-col relative">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-lg uppercase">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Residency Mentorship</h3>
            <div className="mb-6 flex items-baseline">
              <span className="text-4xl font-black text-primary">$200</span>
              <span className="text-slate-500 dark:text-slate-400 font-medium ml-2">/ month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {['Monthly Check-ins', 'Application Strategy', 'Interview Preparation', 'Unlimited Email Support'].map((item, i) => (
                <li key={i} className="flex items-start text-slate-600 dark:text-slate-300">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button 
                onClick={() => addToCart({
                  id: 'plan_mentorship_subscription',
                  title: 'Residency Mentorship',
                  price: 200,
                  type: 'plan'
                })}
                className="w-full py-3 bg-slate-900 dark:bg-primary dark:text-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-primary-light transition-colors flex justify-center items-center"
            >
               Add to Cart
            </button>
          </div>

        </div>

        {/* Comprehensive Services Grid */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">
            How We Help You <span className="text-primary">Succeed</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Your complete pathway to a U.S. Residency</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesList.map((service, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:shadow-lg transition-all group cursor-default">
              <div className="w-14 h-14 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">{service.desc}</p>
              <a href="#contact" className="inline-flex items-center text-primary font-semibold hover:underline">
                Learn More <span className="ml-1">&rarr;</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;