
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled
          ? "bg-white bg-opacity-80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#"
          className={cn(
            "text-2xl font-display font-bold transition-colors duration-300",
            isScrolled ? "text-blue-800" : "text-white"
          )}
        >
          Houston Domains
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#domains"
            className={cn(
              "font-medium transition-all duration-300 hover:text-amber-400",
              isScrolled ? "text-cyan-700" : "text-white"
            )}
          >
            Domains
          </a>
          <a
            href="#contact"
            className={cn(
              "font-medium transition-all duration-300 hover:text-amber-400",
              isScrolled ? "text-cyan-700" : "text-white"
            )}
          >
            Contact
          </a>
          <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 px-5 py-2 rounded-md font-medium transition-all duration-300 hover:opacity-90 shadow-md hover:shadow-lg">
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X
              className={cn(
                "w-6 h-6 transition-colors duration-300",
                isScrolled ? "text-blue-800" : "text-white"
              )}
            />
          ) : (
            <Menu
              className={cn(
                "w-6 h-6 transition-colors duration-300",
                isScrolled ? "text-blue-800" : "text-white"
              )}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-56 py-4" : "max-h-0 overflow-hidden"
        )}
      >
        <div className="flex flex-col px-6 space-y-4">
          <a
            href="#domains"
            className="font-medium text-cyan-700 hover:text-blue-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Domains
          </a>
          <a
            href="#contact"
            className="font-medium text-cyan-700 hover:text-blue-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 px-4 py-2 rounded-md font-medium w-full text-center"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
