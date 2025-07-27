"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

const categories = [
  { name: "Hoodies", img: "/hoddies.jpg" },
  { name: "Sweatshirts", img: "/sweatshirts.jpg" },
  { name: "Pullovers", img: "/pullover.jpg" },
  { name: "T-Shirts", img: "/tshirt.jpg" },
  { name: "Jackets", img: "/jackets.jpg" },
];

const Page = () => {
  return (
    <div className="pt-20 bg-gradient-to-b from-white to-amber-50/30">
      <section id="homes" className="relative">
        <Header />

        {/* Hero Title */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="px-6 sm:px-10 md:px-20 pt-20 md:pt-40 pb-10 z-10 title text-center md:text-left">
            <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl uppercase tracking-widest">
              Get
            </h1>
            <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl uppercase tracking-widest">
              Yourself
            </h1>
            <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl uppercase text-amber-900 tracking-widest">
              Into the
            </h1>
            <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl uppercase text-amber-900 tracking-widest">
              Right Gear
            </h1>
          </div>
          <div className="px-6 sm:px-10 md:px-20 pt-10 md:pt-40 pb-10 z-10 title flex justify-center items-center">
            <Image
              src="/footer-logo.png"
              alt="logo"
              width={300}
              height={300}
              className=""
            />
          </div>
        </div>

        {/* View Collections Link */}
        <Link href="/products" passHref>
          <div className="flex items-center group cursor-pointer pl-6 sm:pl-10 md:pl-20 pt-4">
            <h1 className="uppercase pr-1 font-medium tracking-wider text-sm sm:text-base">
              View Our Collections
            </h1>
            <Image
              src="/arrow.svg"
              alt="arrow"
              width={16}
              height={16}
              className="w-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </Link>

        {/* Scroll Down Link */}
        <a href="#categories">
          <div className="pt-20 pb-12 flex flex-col justify-center items-center">
            <p className="uppercase text-sm tracking-wider mb-2">Scroll Down</p>
            <Image
              src="/arrowdown.svg"
              alt="scroll down arrow"
              width={24}
              height={24}
              className="w-6 animate-bounce"
            />
          </div>
        </a>
      </section>

      {/* Category Section */}
      <section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 sm:px-10 md:px-20 pb-20"
        id="categories"
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg h-[400px] sm:h-[500px] lg:h-[800px] cursor-pointer"
          >
            <Image
              src={category.img}
              alt={category.name}
              width={500}
              height={800}
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 brightness-110 transform group-hover:scale-105 transition duration-500 ease-in-out"
            />
            <h1 className="absolute bottom-6 left-6 md:left-12 text-white text-2xl md:text-4xl font-bold transform -rotate-90 origin-bottom-left group-hover:text-black scale-105 transition duration-300">
              {category.name}
            </h1>
          </div>
        ))}
      </section>

      {/* Sales Section */}
      <section className="bg-black py-20 px-4 flex flex-col lg:flex-row items-center justify-center gap-10 flex-wrap">
        {/* Logo Section */}
        <div className="relative w-40 h-40 md:w-60 md:h-60 flex items-center justify-center">
          <Image
            src="/footer-logo.png"
            alt="logo"
            width={200}
            height={200}
            className="z-10"
          />
        </div>

        {/* Text and Button Section */}
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            Find out about the
          </h1>
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            sales at our Ludhiana Outlet
            <span className="text-amber-800">.</span>
          </h1>
          <Link href="/contact">
            <button className="text-amber-900 bg-[#e1dedb] px-6 py-3 mt-6 font-bold rounded">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Contact Options Section */}
        <div className="grid grid-rows-3 gap-4">
          <Link href="https://wa.me/918437711007">
            <div className="flex gap-4 items-center text-white font-medium text-xl px-8 py-4 rounded border-2 border-white hover:bg-white hover:text-black">
              <Image
                src="/whatsapp-svgrepo-com.svg"
                alt="whatsapp"
                width={40}
                height={40}
              />
              Whatsapp
            </div>
          </Link>
          <Link href="tel:+918437711007">
            <div className="flex gap-4 items-center text-white font-medium text-xl px-8 py-4 rounded border-2 border-white hover:bg-white hover:text-black">
              <Image
                src="/phone-svgrepo-com.svg"
                alt="phone"
                width={40}
                height={40}
              />
              Call Us
            </div>
          </Link>
          <Link href="mailto:kplusludhiana@gmail.com">
            <div className="flex gap-4 items-center text-white font-medium text-xl px-8 py-4 rounded border-2 border-white hover:bg-white hover:text-black">
              <Image
                src="/gmail-svgrepo-com.svg"
                alt="gmail"
                width={40}
                height={40}
              />
              Gmail
            </div>
          </Link>
        </div>

        {/* Responsive Google Map Embed */}
        <div className="w-full max-w-2xl aspect-video mt-10 lg:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.784332443571!2d75.862506!3d30.920651900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8371849b2959%3A0xb72afbb0816d8c4f!2sRishi%20Knitwears(KKPLUS)!5e0!3m2!1sen!2sin!4v1747676357532!5m2!1sen!2sin"
            className="w-full h-full border-0 rounded-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Product Section */}
      <section className="px-10 md:px-20 min-h-screen">
        <h1 className="uppercase pt-20 text-center font-medium text-4xl md:text-6xl lg:text-8xl">
          Our <span className="text-amber-900">Products</span>
        </h1>
        <div className="flex justify-center">
          <p className="text-base md:text-xl text-center py-12 max-w-4xl">
            At <strong>Rishi Knitwear</strong>, we are committed to delivering
            high-quality, stylish, and comfortable apparel...
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-10">
          {[
            "Sweatshirts",
            "T-Shirts",
            "Jackets",
            "Pullovers",
            "Windsheaters",
            "Ladies Cardigans",
            "Girls Sweatshirts",
            "School Uniforms",
          ].map((title, idx) => (
            <div className="rounded bg-white" key={idx}>
              <Image
                src={`/product${idx + 1}.jpg`}
                alt={title}
                width={400}
                height={240}
                className="w-full h-60 object-cover"
              />
              <h1 className="p-4 text-black font-medium text-center text-xl">
                {title}
              </h1>
            </div>
          ))}
        </div>
      </section>

      {/* Back to Top */}
      <a href="#homes">
        <Image
          src="/arrowup.svg"
          alt="up arrow"
          width={40}
          height={40}
          className="bg-[#e1dedb] fixed z-20 w-10 p-2 border-2 rounded bottom-3 right-3"
        />
      </a>

      <Footer />
    </div>
  );
};

export default Page;
