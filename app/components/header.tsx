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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="relative pt-32">
      {/* Top Info Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4 sm:text-xs">
          <a
            href="https://maps.app.goo.gl/qpvRPYoKtR35ZsL59"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1"
            title="Location"
          >
            <FaMapMarkerAlt className="text-xs" />
            <span>Ludhiana</span>
          </a>
        </div>
        <div className="flex items-center space-x-6 sm:space-x-4 sm:text-xs">
          <a
            href="https://wa.me/918437711007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-green-400" />
            <span>WhatsApp</span>
          </a>
          <a
            href="tel:+918437711007"
            className="hover:underline flex items-center gap-1"
            title="Call us"
          >
            <FaPhoneAlt />
            <span>Call</span>
          </a>
          <a
            href="mailto:kplusludhiana@gmail.com"
            className="hover:underline flex items-center gap-1"
            title="Email"
          >
            <FaEnvelope />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* Header Nav */}
      <header
        className={`fixed top-8 left-0 right-0 z-40 h-16 flex items-center px-6 md:px-10 lg:px-20 border border-white/90 bg-white/30 backdrop-blur-md transition ${
          isOpen ? "hidden md:flex" : ""
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/header-logo-white.png"
            alt="K-PLUS Logo"
            width={32}
            height={32}
            className="bg-black p-1 rounded"
            priority
          />
          <h1 className="text-2xl font-semibold text-black">K-PLUS</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex ml-auto gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-center border border-black/60 text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleModal}
          className="ml-auto md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <Image src="/hamburger.svg" alt="Menu" width={24} height={24} />
        </button>
      </header>

      {/* Mobile Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-30 flex items-center justify-center md:hidden">
          <div
            ref={modalRef}
            className="bg-[#e1dedb] rounded-xl shadow-xl w-80 max-w-full p-6 space-y-4 z-40"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-black">Menu</h2>
              <button
                onClick={toggleModal}
                aria-label="Close menu"
                className="text-3xl font-bold"
              >
                &times;
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-black text-white rounded-full text-base font-medium hover:bg-gray-800 text-center transition"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
