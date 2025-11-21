import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-10 pb-20 lg:pt-20 lg:pb-28 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
              Your Residency Journey{" "}
              <span className="text-primary relative inline-block">
                Starts Here!
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-primary/30"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              We provide comprehensive A–Z services that guide you from scratch
              to match. Join a community of achievers and get the mentorship you
              deserve.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 text-base font-bold text-white bg-primary rounded-xl shadow-lg hover:bg-primary-dark hover:shadow-primary/30 transition-all transform hover:-translate-y-1"
              >
                Explore Services
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 text-base font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                Book a Free Intro Call
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group bg-white dark:bg-slate-800">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10"></div>

              <img
                src="public/hero-img.avif"
                alt="Residents collaborating with a mentor"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
