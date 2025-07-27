"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

const categories = [
  "Sweatshirts",
  "Pullovers",
  "Jackets",
  "T-shirts",
  "Coats",
  "Cardigans",
] as const;

type Category = (typeof categories)[number];

interface ClothingContentProps {
  category: Category;
}

const ClothingContent: React.FC<ClothingContentProps> = ({ category }) => {
  return (
    <section className="pt-10 px-4 sm:px-6 md:px-10 pb-20 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center text-black">
        Explore Our <span className="text-amber-800">{category}</span>
      </h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8">
        {Array.from({ length: 4 }, (_, i) => i + 1).map((i) => (
          <div
            key={i}
            className="bg-black text-[#e1dedb] p-2 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="w-full h-[667px] relative rounded-lg overflow-hidden">
              <Image
                src={`/${category}${i}.jpg`}
                alt={`${category} ${i}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Page: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="flex flex-col items-center pt-20 px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-black mb-6">
            Our <span className="text-amber-800">Clothing Collection</span>
          </h1>

          {/* Category Selector */}
          <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mt-2 mb-10 px-2">
            {categories.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(idx)}
                className={`px-5 py-2 sm:px-6 rounded-full text-base sm:text-lg font-medium border transition duration-200 ${
                  idx === selectedCategory
                    ? "bg-amber-800 text-white border-amber-800"
                    : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                }`}
                aria-pressed={idx === selectedCategory}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <ClothingContent category={categories[selectedCategory]} />
      </main>

      <Footer />
    </div>
  );
};

export default Page;
