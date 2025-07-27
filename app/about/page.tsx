"use client";

import React from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

const Page = () => {
  return (
    <div className="pt-20">
      <Header />
      <section className="px-4 sm:px-6 lg:px-20">
        {/* Founder & Partner Message */}
        <div className="grid items-center max-w-screen-xl mx-auto">
          {/* Founder Image */}
          <div className="relative flex justify-center items-center pt-20">
            <Image
              src="/satish-arora.jpg"
              alt="Founder of Rishi Knitwear - Satish Arora"
              width={288}
              height={432}
              className="w-40 sm:w-52 md:w-60 lg:w-72 aspect-[2/3] object-cover rounded-tr-3xl rounded-bl-3xl"
            />
          </div>

          {/* Message Content */}
          <div className="flex flex-col pt-12 text-center">
            <h1 className="text-3xl sm:text-4xl font-medium text-black">
              Message from our <span className="text-amber-800">Founder</span>{" "}
              and <span className="text-amber-800">Partners</span>
            </h1>
            <p className="pt-8 sm:pt-12 text-lg sm:text-xl leading-relaxed max-w-5xl mx-auto text-justify">
              Welcome to Rishi Knitwear &ndash; where quality, comfort, and
              craftsmanship come together. <br />
              <br />
              Founded in 2005 by the <strong>
                Late Mr. Satish Arora
              </strong> and <strong>his wife </strong>, Rishi Knitwear began as
              a humble family-run venture. Through their hard work and
              commitment, the company quickly earned a reputation for
              premium-quality knitwear. <br />
              <br />
              In 2025, after the unfortunate passing of our beloved founder, the
              legacy is proudly carried forward by his sons and partners &ndash;
              <strong> Ketan Arora</strong> and <strong>Rishi Arora</strong>.
              Together, we remain committed to delivering garments that blend
              style, durability, and functionality. <br />
              <br />
              Our diverse product line includes Ladies Cardigans, Men&apos;s
              Sweatshirts, Jackets, Gents Pullovers, Windcheaters, Men&apos;s
              T-Shirts, Girls&apos; Sweatshirts, and School Uniforms. Every
              piece is crafted with care using the finest materials. <br />
              <br />
              Thank you for being a part of our journey. We continue to serve
              you with knitwear that reflects our family&apos;s passion, legacy,
              and commitment. <br />
              <br />
              Warm Regards <br />
              <strong>Ketan Arora &amp; Rishi Arora</strong> <br />
              Partners, Rishi Knitwear
            </p>
          </div>

          {/* Partners' Images */}
          <div className="flex justify-center gap-10 pt-12 flex-wrap">
            <div className="flex flex-col items-center">
              <Image
                src="/ketan-arora.jpg"
                alt="Ketan Arora"
                width={192}
                height={288}
                className="w-32 sm:w-40 aspect-[2/3] object-cover rounded-tr-3xl rounded-bl-3xl"
              />
              <span className="mt-4 font-medium text-lg">Ketan Arora</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/rishi-arora.jpg"
                alt="Rishi Arora"
                width={192}
                height={288}
                className="w-32 sm:w-40 aspect-[2/3] object-cover rounded-tr-3xl rounded-bl-3xl"
              />
              <span className="mt-4 font-medium text-lg">Rishi Arora</span>
            </div>
          </div>
        </div>

        {/* About Company */}
        <div className="pt-20 max-w-screen-xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-medium py-2">
            About Our <span className="text-amber-800">Company</span>
          </h1>
          <div className="py-12 flex flex-col lg:flex-row justify-center items-center gap-10">
            <Image
              src="/footer-logo.png"
              alt="K-PLUS logo"
              width={192}
              height={192}
              className="w-40 sm:w-48 bg-black p-2 rounded"
            />
            <p className="text-lg sm:text-xl max-w-3xl text-justify px-4">
              At K-PLUS Premium Wear, we believe in crafting garments that
              combine comfort, quality, and timeless style. Since 2005, our
              parent brand Rishi Knitwear has been a trusted name in knitwear
              manufacturing, producing a diverse range of apparel including
              Ladies Cardigans, Men&apos;s Sweatshirts, Jackets, Gents
              Pullovers, Windcheaters, Men&apos;s T-Shirts, Girls&apos;
              Sweatshirts, and School Uniforms. With K-PLUS, we take that
              commitment a step further— offering premium-quality wear designed
              for individuals who value both fashion and functionality. Every
              product is thoughtfully designed and carefully manufactured using
              top-grade materials and modern techniques to ensure long-lasting
              durability and a perfect fit. As a proudly homegrown brand, K-PLUS
              stands for authenticity, consistency, and excellence in every
              stitch.
            </p>
          </div>
        </div>

        {/* Quality Policy */}
        <div className="pt-20 max-w-screen-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-medium text-center pb-10">
            Our <span className="text-amber-800">Quality Policy</span>
          </h1>
          <p className="text-lg sm:text-xl text-justify leading-relaxed px-4">
            Quality Assurance is a fundamental and non-negotiable part of the
            way we do business. <br />
            <br />
            We continuously focus our manufacturing and allied practices on the
            concept of &apos;get it right - first time and every time&apos;. To
            do so, our products, manufacturing process and equipment are
            rigorously and often checked for quality standards and process
            deviations, if any. <br />
            <br />
            To be the world`&apos;`s best integrated textile solutions
            enterprise with leadership position across products and markets,
            exceeding customer & stakeholder expectation. At our organization,
            we are committed to quality management system in order to offer
            exclusive range of Knitted Fabrics and Garments. We have appointed
            quality controllers who conduct regular inspections and make certain
            that only defect-free product range reaches our customers. <br />
            <br />
            The entire range passes through stringent tests and is quality
            tested on the following parameters:
          </p>
          <ul className="list-disc pl-6 pt-4 text-lg sm:text-xl text-justify leading-relaxed px-4">
            <li>Color fastness</li>
            <li>Tear strength</li>
            <li>Designs (Fashion Accessories)</li>
            <li>Polish and Finish</li>
          </ul>
          <br />
          <p className="text-lg sm:text-xl text-justify leading-relaxed px-4">
            The quality control is undertaken by well trained personnel at each
            and every level of manufacturing right from yarn to fabric to
            finished garments. The lab is well equipped with latest quality
            control devices. The products meet international quality standards
            in colour fastness, Dyeing quality, Hand feel, Structure and Form.
          </p>
        </div>

        {/* Strengths Section */}
        <div className="pt-20 max-w-screen-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-medium text-center pb-10">
            Our <span className="text-amber-800">Strengths</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black text-[#e1dedb] p-8 rounded-2xl flex flex-col items-center text-center">
              <h2 className="text-xl font-semibold">
                In House Fabric Knitting
              </h2>
              <p className="mt-4">
                Expertise in crafting premium-quality fabrics, ensuring complete
                control over texture, durability and performance.
              </p>
            </div>
            <div className="bg-black text-[#e1dedb] p-8 rounded-2xl flex flex-col items-center text-center">
              <h2 className="text-xl font-semibold">Customizable Solutions</h2>
              <p className="mt-4">
                Ability to provide tailored designs, colors, and styles to meet
                specific client requirements.
              </p>
            </div>
            <div className="bg-black text-[#e1dedb] p-8 rounded-2xl flex flex-col items-center text-center">
              <h2 className="text-xl font-semibold">
                Stringent Quality Assurance
              </h2>
              <p className="mt-4">
                Comprehensive quality checks at every stage, from fabric
                production to finished garments, ensuring exceptional standards.
              </p>
            </div>
          </div>
        </div>

        {/* Missions Section */}
        <div className="pt-20 max-w-screen-xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-medium pb-10">
            Our <span className="text-amber-800">Missions</span>
          </h1>
          <ul className="list-disc text-left text-xl space-y-3 max-w-4xl mx-auto px-4">
            <li>
              Offer innovative, customised and value added services to our
              customers.
            </li>
            <li>Actively explore potential markets & products.</li>
            <li>Optimise use of all resources.</li>
            <li>Maximise people development initiatives.</li>
            <li>Exceed compliances and global quality standards.</li>
          </ul>
        </div>

        {/* Values Section */}
        <div className="pt-20 pb-20 max-w-screen-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-medium text-center pb-10">
            Our <span className="text-amber-800">Values</span>
          </h1>
          <div className="space-y-8 text-lg sm:text-xl text-justify px-4">
            <p>
              <strong>Customer Satisfaction:</strong> We will be attuned to
              market needs; whenever possible, we will anticipate market needs;
              we will respond quickly to changes in customer requirements; we
              will be completely focused on quality; we will keep delivery
              commitments on time and every time; we will develop new products
              and processes that will go beyond customer satisfaction to achieve
              customer delight.
            </p>
            <p>
              <strong>Passionate about Excellence:</strong> Excellence is
              non-negotiable in every aspect of our business process. Superior
              quality of performance is critical to our business growth and
              success. We will constantly strive to exceed expectations — be it
              internal or external.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
