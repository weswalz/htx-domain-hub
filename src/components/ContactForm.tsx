
import React, { useState } from "react";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    domainOfInterest: "",
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };
  
  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        domainOfInterest: "",
      });
    }, 1500);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="p-6 sm:p-10">
        <h3 className="text-2xl font-display font-bold mb-6 text-houston-navy">
          Get in Touch
        </h3>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="col-span-1">
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-houston-slate mb-1"
              >
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={cn(
                    "w-full px-4 py-3 rounded-md border focus-ring transition-all duration-300",
                    errors.name 
                      ? "border-red-300 bg-red-50" 
                      : focused === "name"
                        ? "border-houston-skyblue bg-blue-50/30"
                        : "border-gray-300"
                  )}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
            </div>
            
            <div className="col-span-1">
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-houston-slate mb-1"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className={cn(
                    "w-full px-4 py-3 rounded-md border focus-ring transition-all duration-300",
                    errors.email 
                      ? "border-red-300 bg-red-50" 
                      : focused === "email"
                        ? "border-houston-skyblue bg-blue-50/30"
                        : "border-gray-300"
                  )}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            
            <div className="col-span-1">
              <label 
                htmlFor="phone" 
                className="block text-sm font-medium text-houston-slate mb-1"
              >
                Phone Number <span className="text-houston-slate/60">(Optional)</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused(null)}
                  className={cn(
                    "w-full px-4 py-3 rounded-md border focus-ring transition-all duration-300",
                    focused === "phone"
                      ? "border-houston-skyblue bg-blue-50/30"
                      : "border-gray-300"
                  )}
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>
            
            <div className="col-span-1">
              <label 
                htmlFor="domainOfInterest" 
                className="block text-sm font-medium text-houston-slate mb-1"
              >
                Domain of Interest <span className="text-houston-slate/60">(Optional)</span>
              </label>
              <div className="relative">
                <select
                  id="domainOfInterest"
                  name="domainOfInterest"
                  value={formData.domainOfInterest}
                  onChange={handleChange}
                  onFocus={() => setFocused("domainOfInterest")}
                  onBlur={() => setFocused(null)}
                  className={cn(
                    "w-full px-4 py-3 rounded-md border focus-ring transition-all duration-300 bg-white",
                    focused === "domainOfInterest"
                      ? "border-houston-skyblue bg-blue-50/30"
                      : "border-gray-300"
                  )}
                >
                  <option value="">Select a domain</option>
                  <option value="houstontexas.events">houstontexas.events</option>
                  <option value="htown.live">htown.live</option>
                  <option value="htown.today">htown.today</option>
                  <option value="htx.today">htx.today</option>
                  <option value="sugarland.today">sugarland.today</option>
                  <option value="pearland.today">pearland.today</option>
                </select>
              </div>
            </div>
            
            <div className="col-span-1 sm:col-span-2">
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-houston-slate mb-1"
              >
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  rows={4}
                  className={cn(
                    "w-full px-4 py-3 rounded-md border focus-ring transition-all duration-300",
                    errors.message 
                      ? "border-red-300 bg-red-50" 
                      : focused === "message"
                        ? "border-houston-skyblue bg-blue-50/30"
                        : "border-gray-300"
                  )}
                  placeholder="Tell us more about your interest in our domains..."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full sm:w-auto px-8 py-3 bg-houston-navy text-white font-medium rounded-md transition-all duration-300",
                isSubmitting 
                  ? "opacity-70 cursor-not-allowed" 
                  : "hover:bg-opacity-90 hover:shadow-lg"
              )}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg 
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    ></circle>
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
