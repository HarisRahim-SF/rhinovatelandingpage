import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestAnchor = target.closest('a');
      
      if (closestAnchor && closestAnchor.hash && closestAnchor.hash.startsWith('#') && closestAnchor.pathname === window.location.pathname) {
        e.preventDefault();
        const targetElement = document.querySelector(closestAnchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
          
          // Update URL without jumping
          window.history.pushState(null, '', closestAnchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      
      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-rhinovate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-sm font-medium text-rhinovate-600 uppercase tracking-wider">Process</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-900 sm:text-5xl text-balance">
              How Rhinovate Works
            </h2>
            <p className="mt-6 text-lg text-gray-600 text-balance">
              Our seamless three-step process transforms patient consultations and enhances surgical outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                number: "01",
                title: "Capture",
                description: "Capture a 3D facial scan using just your phone. No extra hardware needed—Rhinovate builds the model for you.",
                image: "/capture-step.png"
              },
              {
                number: "02",
                title: "Visualize",
                description: "Our AI generates hyper-realistic 3D models showing the potential surgical outcome tailored to the patient.",
                image: "/realistic.png"
              },
              {
                number: "03",
                title: "Timeline",
                description: "Provide a complete healing timeline showing how results will appear at each recovery stage.",
                image: "/healing.png"
              }
            ].map((step, i) => (
              <div key={i} className="relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <span className="text-white font-display text-2xl font-bold">{step.number}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {/* Step connector line for desktop */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/3 -right-6 w-12 border-t-2 border-dashed border-rhinovate-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
