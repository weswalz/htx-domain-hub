
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
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-indigo-900/80 backdrop-filter backdrop-blur-sm z-10"></div>
        <img
          src="/lovable-uploads/2bb8bdd1-164f-4096-858f-4a67d321f71b.png"
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
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-gradient-to-r from-amber-400 to-amber-500 text-purple-900 rounded-full animate-fade-in">
            Premium Houston Domain Broker
          </span>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight">
            Secure Your <span className="text-amber-400">Houston</span> <br />
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
              domain names
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 mt-4 animate-fade-in delay-300">
            <a 
              href="#domains" 
              className="px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-purple-900 font-medium rounded-md transition-all duration-300 hover:shadow-lg hover:opacity-90"
            >
              View Domains
            </a>
            <a 
              href="#contact" 
              className="px-6 py-2 bg-transparent border border-teal-300 text-white font-medium rounded-md transition-all duration-300 hover:bg-teal-300/10"
            >
              Contact Us
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-float">
          <a 
            href="#domains" 
            className="flex flex-col items-center text-teal-300 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm mb-1">Scroll Down</span>
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
