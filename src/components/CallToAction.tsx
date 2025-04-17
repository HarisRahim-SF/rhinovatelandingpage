import React, { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const CallToAction = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-rhinovate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-rhinovate-600 py-16 md:py-20 px-6 md:px-16 shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-rhinovate-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white mb-6 text-balance">
                Transform your consultations with 3D visualization
              </h2>
              <p className="text-lg text-rhinovate-100 mb-8 text-balance">
                Join leading plastic surgeons and ENT specialists using Rhinovate to enhance patient
                consultations, improve decision confidence, and streamline the entire surgical journey.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Free personalized demo for your clinic',
                  'Easy integration with your existing workflow',
                  'Dedicated support team for seamless onboarding',
                  'See results within the first month'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-rhinovate-200" />
                    </div>
                    <span className="ml-3 text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Request a demo</h3>
                
                <form
                  ref={formRef}
                  action="https://formspree.io/f/mgvareve"
                  method="POST"
                  className="space-y-5"
                >
                  {/* Hidden field for redirect */}
                  <input 
                    type="hidden" 
                    name="_next" 
                    value={window.location.href}
                  />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rhinovate-500 focus:border-transparent transition-all"
                      placeholder="Dr. Jane Smith"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="clinic" className="block text-sm font-medium text-gray-700 mb-1">
                      Clinic Name
                    </label>
                    <input
                      type="text"
                      id="clinic"
                      name="clinic"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rhinovate-500 focus:border-transparent transition-all"
                      placeholder="Advanced Aesthetics Clinic"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rhinovate-500 focus:border-transparent transition-all"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  
                  {/* Hidden field for message */}
                  <input 
                    type="hidden" 
                    name="message" 
                    value="New demo request"
                  />
                  
                  <button
                    type="submit"
                    className={cn(
                      "w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-300 group flex items-center justify-center",
                      "bg-rhinovate-600 hover:bg-rhinovate-700"
                    )}
                  >
                    Schedule Your Demo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
