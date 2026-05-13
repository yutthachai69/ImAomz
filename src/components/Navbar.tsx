"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-6 py-4 bg-white border-b-[4px] border-on-surface shadow-neo relative">
      {/* Logo */}
      <div className="text-xl md:text-2xl font-black text-on-surface tracking-tighter font-h1">
        DEV & App_Support
      </div>
      
      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden bg-primary-container text-on-primary-container border-[3px] border-on-surface shadow-neo p-2 active-press"
      >
        <div className="w-6 h-6 flex flex-col justify-center gap-1">
          <div className={`h-1 bg-on-primary-container transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`h-1 bg-on-primary-container transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`h-1 bg-on-primary-container transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </div>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        <Link
          href="#projects"
          className="font-bold text-secondary border-b-[3px] border-secondary active-press font-label uppercase tracking-wider"
        >
          Projects
        </Link>
        <Link
          href="#skills"
          className="font-bold text-on-surface hover:text-secondary active-press font-label uppercase tracking-wider"
        >
          Skills
        </Link>
        <Link
          href="#experience"
          className="font-bold text-on-surface hover:text-secondary active-press font-label uppercase tracking-wider"
        >
          Experience
        </Link>
        <Link
          href="#contact"
          className="font-bold text-on-surface hover:text-secondary active-press font-label uppercase tracking-wider"
        >
          Contact
        </Link>
      </div>
      
      {/* Desktop Action Button */}
      <button className="hidden md:block bg-primary-container text-on-primary-container font-bold px-6 py-2 border-[3px] border-on-surface shadow-neo active-press font-label uppercase tracking-wider">
        Hire Me
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b-[4px] border-on-surface shadow-neo-lg md:hidden z-[60]">
          <div className="flex flex-col p-6 gap-4">
            <Link
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="font-bold text-secondary border-b-[3px] border-secondary active-press font-label uppercase tracking-wider py-2"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
              className="font-bold text-on-surface hover:text-secondary active-press font-label uppercase tracking-wider py-2"
            >
              Skills
            </Link>
            <Link
              href="#experience"
              onClick={() => setIsMenuOpen(false)}
              className="font-bold text-on-surface hover:text-secondary active-press font-label uppercase tracking-wider py-2"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="font-bold text-on-surface hover:text-secondary active-press font-label uppercase tracking-wider py-2"
            >
              Contact
            </Link>
            <button className="bg-primary-container text-on-primary-container font-bold px-6 py-3 border-[3px] border-on-surface shadow-neo active-press font-label uppercase tracking-wider mt-4">
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
