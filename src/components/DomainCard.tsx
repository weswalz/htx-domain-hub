
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
        featured ? "md:col-span-2 bg-gradient-to-br from-blue-100 to-cyan-100" : "",
        isHovered ? "transform scale-[1.02]" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {featured && (
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 rounded-md">
            Featured
          </span>
        </div>
      )}
      
      <div className="flex items-center mb-4">
        <div className="mr-4 p-2.5 rounded-full bg-blue-100 text-blue-700">
          <Globe className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-display font-bold text-blue-800">
          {domain}
        </h3>
      </div>
      
      {description && (
        <p className="text-cyan-700/80 mb-6 text-sm">
          {description}
        </p>
      )}
      
      <div className="mt-auto pt-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-blue-600">
            Premium Domain
          </span>
          <button 
            className={cn(
              "relative px-4 py-1.5 text-sm font-medium rounded-md overflow-hidden transition-all duration-300", 
              "bg-gradient-to-r from-blue-600 to-cyan-700 text-white", 
              "after:absolute after:inset-0 after:bg-gradient-to-r after:from-amber-400 after:to-amber-500 after:text-blue-900 after:flex after:items-center after:justify-center after:content-['Inquire'] after:translate-y-full after:hover:translate-y-0 after:transition-transform after:duration-300"
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
          "absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-xl transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      ></div>
    </div>
  );
};

export default DomainCard;
