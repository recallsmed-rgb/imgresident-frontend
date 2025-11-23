import React from 'react';
import servicesJson from '../data/services.json';
import { BookOpen, Stethoscope, FileText, Users, Microscope, Sparkles, CheckCircle, type LucideIcon } from 'lucide-react';

type PricingPlan = {
  id: string;
  title: string;
  price: string;
  priceSuffix?: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
  badge?: string;
};

type IconName = 'BookOpen' | 'Stethoscope' | 'FileText' | 'Users' | 'Microscope' | 'Sparkles';

type ServiceItem = {
  icon: IconName;
  title: string;
  desc: string;
};

type ServicesData = {
  pricingPlans: PricingPlan[];
  services: ServiceItem[];
};

const iconMap: Record<IconName, LucideIcon> = {
  BookOpen,
  Stethoscope,
  FileText,
  Users,
  Microscope,
  Sparkles,
};

const servicesData = servicesJson as ServicesData;

type PricingCardProps = {
  plan: PricingPlan;
  onCtaClick: () => void;
};

const PricingCard: React.FC<PricingCardProps> = ({ plan, onCtaClick }) => {
  const { title, price, priceSuffix, features, ctaLabel, highlighted, badge } = plan;

  const cardClasses = [
    'bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col relative',
    highlighted ? 'border-2 border-primary' : 'border border-slate-100 dark:border-slate-700',
  ].join(' ');

  const buttonClasses = highlighted
    ? 'w-full py-3 bg-slate-900 dark:bg-primary dark:text-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-primary-light transition-colors flex justify-center items-center'
    : 'w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors flex justify-center items-center';

  return (
    <div className={cardClasses}>
      {badge ? (
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-lg uppercase">
          {badge}
        </div>
      ) : null}
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
      <div className="mb-6 flex items-baseline">
        <span className="text-4xl font-black text-primary">{price}</span>
        {priceSuffix ? (
          <span className="text-slate-500 dark:text-slate-400 font-medium ml-2">{priceSuffix}</span>
        ) : null}
      </div>
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((item) => (
          <li key={item} className="flex items-start text-slate-600 dark:text-slate-300">
            <CheckCircle className="w-5 h-5 text-primary mr-3 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onCtaClick}
        className={buttonClasses}
      >
        {ctaLabel}
      </button>
    </div>
  );
};

const Services: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { pricingPlans, services } = servicesData;

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
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} onCtaClick={scrollToContact} />
          ))}
        </div>

        {/* Comprehensive Services Grid */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">
            How We Help You <span className="text-primary">Succeed</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Your complete pathway to a U.S. Residency</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const ServiceIcon = iconMap[service.icon] || BookOpen;
            return (
              <div
                key={service.title}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:shadow-lg transition-all group cursor-default"
              >
                <div className="w-14 h-14 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <ServiceIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{service.desc}</p>
                <a href="#contact" className="inline-flex items-center text-primary font-semibold hover:underline">
                  Learn More <span className="ml-1">&rarr;</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
