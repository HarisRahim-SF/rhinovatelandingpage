
import React, { useEffect, useRef } from 'react';
import { 
  Scan, 
  Calendar, 
  MessageCircle, 
  CheckCircle, 
  BrainCircuit, 
  Shield
} from 'lucide-react';

const Features = () => {
  const featureRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    
    featureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      featureRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !featureRefs.current.includes(el)) {
      featureRefs.current[index] = el;
    }
  };

  const features = [
    {
      icon: <Scan className="h-12 w-12 text-rhinovate-600" />,
      title: "AI-Powered 3D Visualization",
      description: "Ultra-realistic before-and-after visualizations created by our advanced AI models, specifically trained on rhinoplasty outcomes."
    },
    {
      icon: <Calendar className="h-12 w-12 text-rhinovate-600" />,
      title: "Healing Timeline Prediction",
      description: "See how your results will appear during each recovery stage, from immediate post-op to fully healed, eliminating uncertainty."
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-rhinovate-600" />,
      title: "Patient Communication Tool",
      description: "Simplify doctor-patient communication with visual references and expected healing milestones, reducing anxiety and callbacks."
    },
    {
      icon: <BrainCircuit className="h-12 w-12 text-rhinovate-600" />,
      title: "Advanced Neural Networks",
      description: "Our platform utilizes state-of-the-art neural networks trained on thousands of real-world rhinoplasty cases for unprecedented accuracy."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-rhinovate-600" />,
      title: "Clinic Dashboard",
      description: "Centralized platform for surgeons to manage patients, visualizations, and recovery tracking in one intuitive interface."
    },
    {
      icon: <Shield className="h-12 w-12 text-rhinovate-600" />,
      title: "HIPAA Compliant Security",
      description: "Enterprise-grade security with full HIPAA compliance to keep patient data and images safe and private at all times."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <span className="text-sm font-medium text-rhinovate-600 uppercase tracking-wider">Features</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-900 sm:text-5xl text-balance">
            Transforming the Rhinoplasty Experience
          </h2>
          <p className="mt-6 text-lg text-gray-600 text-balance">
            Our platform empowers surgeons with cutting-edge tools to enhance patient consultations,
            improve decision-making, and provide unparalleled peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={el => addToRefs(el, i)}
              className="opacity-0 relative p-8 rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-rhinovate-100 group"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-rhinovate-50 group-hover:bg-rhinovate-100 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              
              {/* Subtle hover effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-rhinovate-200 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
