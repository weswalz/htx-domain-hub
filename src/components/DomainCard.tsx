
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

interface DomainCardProps {
  domain: string;
  description?: string;
  featured?: boolean;
}

const DomainCard = ({ domain, description, featured = false }: DomainCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "domain-card group",
        featured ? "md:col-span-2 bg-gradient-to-br from-houston-navy/10 to-houston-skyblue/10" : "",
        isHovered ? "transform scale-[1.02]" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {featured && (
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 text-xs font-medium bg-houston-gold text-houston-navy rounded-md">
            Featured
          </span>
        </div>
      )}
      
      <div className="flex items-center mb-4">
        <div className="mr-4 p-2.5 rounded-full bg-houston-navy/10 text-houston-navy">
          <Globe className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-display font-bold text-houston-navy">
          {domain}
        </h3>
      </div>
      
      {description && (
        <p className="text-houston-slate/80 mb-6 text-sm">
          {description}
        </p>
      )}
      
      <div className="mt-auto pt-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-houston-slate">
            Premium Domain
          </span>
          <button 
            className={cn(
              "relative px-4 py-1.5 text-sm font-medium rounded-md overflow-hidden transition-all duration-300", 
              "bg-houston-navy text-white", 
              "after:absolute after:inset-0 after:bg-houston-gold after:text-houston-navy after:flex after:items-center after:justify-center after:content-['Inquire'] after:translate-y-full after:hover:translate-y-0 after:transition-transform after:duration-300"
            )}
          >
            <span className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
              Get a Quote
            </span>
          </button>
        </div>
      </div>
      
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-tr from-houston-navy/5 to-transparent rounded-xl transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      ></div>
    </div>
  );
};

export default DomainCard;
