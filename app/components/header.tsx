"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => setIsOpen((prev) => !prev);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Handle scroll to show/hide shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="relative pt-36">
      {/* Top Info Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 text-white text-sm py-2 px-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center space-x-4 sm:text-xs">
          <a
            href="https://maps.app.goo.gl/qpvRPYoKtR35ZsL59"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-200 transition-colors flex items-center gap-1 group"
            title="Location"
          >
            <FaMapMarkerAlt className="text-xs text-stone-300 group-hover:text-stone-200" />
            <span>Ludhiana</span>
          </a>
        </div>
        <div className="flex items-center space-x-6 sm:space-x-4 sm:text-xs">
          <a
            href="https://wa.me/918437711007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition-colors flex items-center gap-1 group"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-green-400 group-hover:text-green-300" />
            <span>WhatsApp</span>
          </a>
          <a
            href="tel:+918437711007"
            className="hover:text-stone-200 transition-colors flex items-center gap-1 group"
            title="Call us"
          >
            <FaPhoneAlt className="text-stone-300 group-hover:text-stone-200" />
            <span>Call</span>
          </a>
          <a
            href="mailto:kplusludhiana@gmail.com"
            className="hover:text-stone-200 transition-colors flex items-center gap-1 group"
            title="Email"
          >
            <FaEnvelope className="text-stone-300 group-hover:text-stone-200" />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* Header Nav */}
      <header
        className={`fixed top-8 left-0 right-0 z-40 h-20 flex items-center justify-between px-6 md:px-10 lg:px-20 backdrop-blur-lg border-t border-stone-200/50 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""
          } ${isOpen ? "hidden md:flex" : ""}`}
        style={{ backgroundColor: 'rgba(254, 254, 254, 0.95)' }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-10 group">
          <div className="relative">
            <Image
              src="/header-logo-black.png"
              alt="K-PLUS Logo"
              width={40}
              height={40}
              className="rounded transition-transform group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-stone-200/20 rounded opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <h1 className="text-2xl font-bold text-black tracking-wide">K-PLUS</h1>
        </Link>

        {/* Desktop Nav - Centered */}
        <nav
          className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 rounded-full px-8 py-3 shadow-lg border border-stone-200/50"
          style={{ backgroundColor: 'rgba(254, 254, 254, 0.8)' }}
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-6 py-2 text-stone-700 font-medium text-sm hover:text-stone-900 hover:bg-stone-100/50 rounded-full transition-all duration-200 relative ${index !== navLinks.length - 1 ? 'after:content-[""] after:absolute after:right-0 after:top-1/2 after:transform after:-translate-y-1/2 after:w-px after:h-4 after:bg-gradient-to-b after:from-transparent after:via-stone-300 after:to-transparent' : ''
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-stone-800 hover:bg-stone-900 text-white px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleModal}
          className="md:hidden p-2 rounded-lg transition-all duration-200 shadow-md"
          style={{
            backgroundColor: 'rgba(254, 254, 254, 0.8)',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fefefe'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(254, 254, 254, 0.8)'}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`bg-stone-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-stone-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-stone-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </div>
        </button>
      </header>

      {/* Mobile Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-30 md:hidden backdrop-blur-sm">
          <div
            className="fixed top-0 right-0 w-80 max-w-[85vw] h-full shadow-2xl transform transition-transform duration-300 border-l border-stone-200"
            style={{ backgroundColor: '#fefefe' }}
          >
            <div
              ref={modalRef}
              className="p-6 pt-20 h-full overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100/50 transition-all duration-200 border-b border-stone-200 pb-4 px-4 py-2 rounded-lg"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-6">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="bg-stone-800 hover:bg-stone-900 text-white px-6 py-3 rounded-full font-medium text-base transition-all duration-200 block text-center shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Get Quote
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
