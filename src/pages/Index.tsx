import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DomainCard from "@/components/DomainCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { useInView } from "@/lib/animations";

const domainData = [
  {
    domain: "houstontexas.events",
    description: "Perfect for event organizers, venues, and promoters showcasing Houston's vibrant event scene.",
    featured: true
  },
  {
    domain: "htown.live",
    description: "Ideal for streaming, live entertainment, and real-time Houston activities.",
    featured: false
  },
  {
    domain: "htown.today",
    description: "Great for news outlets, blogs, and information hubs covering daily Houston happenings.",
    featured: false
  },
  {
    domain: "htx.today",
    description: "Modern and concise domain for current events, news, and updates about Houston.",
    featured: true
  },
  {
    domain: "sugarland.today",
    description: "Targeted domain for businesses, events, and news in the Sugar Land area.",
    featured: false
  },
  {
    domain: "pearland.today",
    description: "Perfect for local businesses, community updates, and events in Pearland.",
    featured: false
  }
];

const Index = () => {
  const domainsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);
  
  const domainsInView = useInView(domainsRef, { threshold: 0.1, triggerOnce: true });
  const contactInView = useInView(contactRef, { threshold: 0.1, triggerOnce: true });
  const featureInView = useInView(featureRef, { threshold: 0.1, triggerOnce: true });

  return (
    <main className="min-h-screen bg-houston-cream overflow-hidden">
      <Navbar />
      <HeroSection />
      
      {/* Domains Section */}
      <section 
        id="domains" 
        ref={domainsRef} 
        className="py-12 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase bg-houston-navy/10 text-houston-navy rounded-full">
              Available Domains
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 text-houston-navy">
              Premium Houston Domain Names
            </h2>
            <p className="text-houston-slate/80 max-w-2xl mx-auto">
              Establish your online presence with these exclusive Houston-focused domain names, perfect for businesses, events, and organizations connected to the city.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domainData.map((domain, index) => (
              <div 
                key={domain.domain}
                className={cn(
                  "transform transition-all duration-700",
                  domainsInView 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-12",
                  { "transition-delay-100": index % 3 === 1 },
                  { "transition-delay-200": index % 3 === 2 }
                )}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <DomainCard 
                  domain={domain.domain} 
                  description={domain.description}
                  featured={domain.featured}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section 
        ref={featureRef}
        className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-houston-cream"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              className={cn(
                "transform transition-all duration-1000",
                featureInView 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-12"
              )}
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-houston-navy/10 text-houston-navy rounded-full">
                Why Choose Our Domains
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-houston-navy">
                Strategic Digital Real Estate in Houston
              </h2>
              <p className="text-houston-slate/80 mb-6">
                These domain names offer an exclusive opportunity to secure memorable, location-specific web addresses that instantly connect your brand to Houston and its surrounding areas.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Local SEO Advantage",
                    description: "Boost your search engine ranking for Houston-related searches."
                  },
                  {
                    title: "Brand Recognition",
                    description: "Create an instant connection to the Houston market with geographic relevance."
                  },
                  {
                    title: "Premium Investment",
                    description: "Secure valuable digital real estate with potential for appreciation."
                  },
                  {
                    title: "Memorable Web Address",
                    description: "Stand out with a domain that's easy to remember and clearly Houston-focused."
                  }
                ].map((feature, index) => (
                  <div 
                    key={feature.title}
                    className="flex items-start"
                    style={{
                      transitionDelay: `${300 + index * 100}ms`
                    }}
                  >
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-houston-gold flex items-center justify-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-houston-navy" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-bold text-houston-navy">{feature.title}</h4>
                      <p className="text-houston-slate/80">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div 
              className={cn(
                "relative h-[400px] transform transition-all duration-1000",
                featureInView 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 translate-x-12"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-houston-navy to-houston-skyblue rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-houston-navy to-transparent"></div>
                <div className="relative h-full flex flex-col justify-end p-8">
                  <span className="text-white/80 mb-2 font-medium">Featured Domain</span>
                  <h3 className="text-4xl font-display font-bold text-white mb-2">houstontexas.events</h3>
                  <p className="text-white/80 mb-6">The ultimate domain for Houston's event industry - concerts, conferences, festivals and more.</p>
                  <div className="flex space-x-3">
                    <div className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">Events</div>
                    <div className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">Premium</div>
                    <div className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">Houston</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section 
        id="contact" 
        ref={contactRef}
        className="py-16 px-6 md:px-12 bg-houston-slate/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div 
              className={cn(
                "transform transition-all duration-1000",
                contactInView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12"
              )}
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-houston-navy/10 text-houston-navy rounded-full">
                Get in Touch
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-houston-navy">
                Interested in a Domain?
              </h2>
              <p className="text-houston-slate/80 mb-8">
                Contact us today to inquire about pricing, availability, and transfer details for any of our premium Houston domain names.
              </p>
            </div>
            
            <div 
              className={cn(
                "transform transition-all duration-1000 delay-300",
                contactInView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12"
              )}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;
