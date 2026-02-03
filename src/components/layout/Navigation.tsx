"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Details", href: "#details" },
  { label: "Schedule", href: "#schedule" },
  { label: "RSVP", href: "#rsvp" },
  { label: "Travel", href: "#travel" },
  { label: "Registry", href: "#registry" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo/Names */}
          <button
            onClick={() => scrollToSection("#home")}
            className={cn(
              "font-script text-2xl md:text-3xl transition-colors",
              isScrolled ? "text-primary" : "text-white",
            )}
          >
            A & H
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  activeSection === item.href.substring(1)
                    ? "text-accent"
                    : isScrolled
                      ? "text-text-primary"
                      : "text-white",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 transition-colors",
              isScrolled ? "text-primary" : "text-white",
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "block w-full text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-50",
                  activeSection === item.href.substring(1)
                    ? "text-accent"
                    : "text-text-primary",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
