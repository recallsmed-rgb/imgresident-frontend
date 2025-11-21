import React from 'react';
import { ShieldCheck, GraduationCap, Users, HeartHandshake } from 'lucide-react';

const Mission: React.FC = () => {
  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Integrity",
      desc: "Providing honest, transparent, and ethical guidance at every step."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Evidence-Based Mentoring",
      desc: "Utilizing data-driven strategies and up-to-date information for success."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Accessibility",
      desc: "Making high-quality mentorship and resources available to all IMGs."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      title: "Community",
      desc: "Building a supportive network where IMGs can connect, learn, and grow."
    }
  ];

  return (
    <section id="mission" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Statement Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white">
            Mission Statement
          </h2>
          <p className="mt-4 text-xl text-primary font-medium italic">
            "By the IMGs, For the IMGs"
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Welcome Box */}
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl shadow-sm p-8 sm:p-12 mb-20 border border-slate-100 dark:border-slate-700">
          <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-6">
            Welcome, dear Achievers,
          </h3>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            <p>
              Our mission is to empower International Medical Graduates (IMGs) on their path to securing a residency in the United States. We understand the unique challenges and hurdles you face, because we've been there. We are committed to providing comprehensive, evidence-based guidance and unwavering support throughout your USMLE and residency application journey.
            </p>
            <p>
              We believe in fostering a community built on shared experiences, mutual respect, and a collective drive for success. Our goal is not just to help you match, but to equip you with the skills, knowledge, and confidence to thrive as a physician in the U.S. healthcare system.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
            Vision and Values
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {values.map((value, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700 text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {value.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {value.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Founders */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">
            Meet Our Founders
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Founder 1 */}
          <div className="flex flex-col sm:flex-row items-center gap-8 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvsSzeDuMoYE8wxpfZJvZ5MHTq2qlstg6RaReSYk309wFeV5N8EyB-hzj4KxfTVDsP8CrwEQT8l6-U3ai71Sa18ByPbpIodMFSYyJfE_tUR_GA3MS5WosA_QVMDa86UY86VHedIqWESaZuEza621ly9tNLvKxz0gM09jvrUUHqGQ3NC2268zBAknJ5v78wLewGA7UFJc01KLWWaabf1KElWP81WsenrSAgTq7WKzmqLh6-x760_ghrfF4QnJJGHUXoLoA1anM4oYk" 
              alt="Dr. Anjali Sharma" 
              className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-md"
            />
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Dr. Anjali Sharma</h4>
              <p className="text-primary font-medium mb-2">Co-Founder & Chief Mentor</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                A former IMG who successfully matched into Internal Medicine, Dr. Sharma is passionate about guiding the next generation of physicians.
              </p>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="flex flex-col sm:flex-row items-center gap-8 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1FgD0nSmGv4HOWfUZNq-P8mmrgct-O8RCSRnoUuD3bPy-ZOZJEVk_-SP09ol6j1GVguzobyh8miLb31pDZH28uwanR_PYNUmjQvp5eujogp9lE5xVCbPYEU2Q3ZNKbVb4_yaU4sFKHQJmQw9eymQVLDnt5QbHskEBVkXMt1Ip--UWzGjsVORVK7ha84vqVtfbQ22zZXywKIHMm67Km0wguJrv9FjjXMk6bcSQmt4tO558E0HDPjRktSJBnKdDVVBKzjfIHTVKwGY" 
              alt="Dr. Rohan Patel" 
              className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-md"
            />
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Dr. Rohan Patel</h4>
              <p className="text-primary font-medium mb-2">Co-Founder & Program Director</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                With a background in medical education, Dr. Patel specializes in curriculum design and strategic application planning.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;