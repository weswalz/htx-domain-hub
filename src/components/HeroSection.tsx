
import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["premium", "exclusive", "valuable"];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-houston-navy bg-opacity-60 backdrop-filter backdrop-blur-sm z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1633493702341-4d04841df53b?q=80&w=1920&auto=format&fit=crop"
          alt="Houston Skyline"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-white text-center">
        <div className={cn("transition-all duration-1000", isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-houston-gold text-houston-navy rounded-full animate-fade-in">
            Premium Houston Domain Broker
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 leading-tight">
            Secure Your <span className="text-houston-gold">Houston</span> <br />
            Digital Real Estate
          </h1>
          
          <div className="h-12 mb-6">
            <p className="text-xl md:text-2xl text-white/90 animate-fade-in">
              Invest in{" "}
              <span className="relative inline-block">
                {words.map((word, index) => (
                  <span
                    key={word}
                    className={cn(
                      "absolute inset-0 transition-all duration-700 ease-in-out",
                      currentWord === index
                        ? "opacity-100 transform-none"
                        : "opacity-0 translate-y-3"
                    )}
                  >
                    {word}
                  </span>
                ))}
                <span className="invisible">{words[0]}</span>
              </span>{" "}
              domain names that capture the essence of H-Town
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8 animate-fade-in delay-300">
            <a 
              href="#domains" 
              className="px-8 py-3 bg-houston-gold text-houston-navy font-medium rounded-md transition-all duration-300 hover:shadow-lg hover:bg-opacity-90"
            >
              View Domains
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md transition-all duration-300 hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <a 
            href="#domains" 
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
