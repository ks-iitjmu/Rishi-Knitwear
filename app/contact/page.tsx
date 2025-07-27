"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

const ContactPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-grow px-6 py-16 md:px-16 max-w-7xl mx-auto w-full min-h-[1000px] flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get in <span className="text-amber-800">Touch</span> With Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {/* Contact Info */}
          <section className="space-y-8">
            <h2 className="text-2xl font-semibold text-black">
              Contact Information
            </h2>
            <p className="text-lg text-gray-700">
              We&apos;d love to hear from you. Whether you have a question,
              feedback, or a custom request—reach out!
            </p>

            <ul className="space-y-4 text-lg text-gray-800">
              <li>
                <a
                  href="https://wa.me/918437711007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-amber-800 transition duration-200"
                >
                  <Image
                    src="/whatsapp-svgrepo-com.svg"
                    alt="WhatsApp icon"
                    width={30}
                    height={30}
                  />
                  WhatsApp: +91 84377 11007
                </a>
              </li>
              <li>
                <a
                  href="tel:+918437711007"
                  className="flex items-center gap-3 hover:text-amber-800 transition duration-200"
                >
                  <Image
                    src="/phone-svgrepo-com.svg"
                    alt="Phone icon"
                    width={30}
                    height={30}
                  />
                  Phone: +91-84377 11007
                </a>
              </li>
              <li>
                <a
                  href="mailto:kplusludhiana@gmail.com"
                  className="flex items-center gap-3 hover:text-amber-800 transition duration-200"
                >
                  <Image
                    src="/gmail-svgrepo-com.svg"
                    alt="Email icon"
                    width={25}
                    height={25}
                  />
                  Email: kplusludhiana@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Image
                  src="/location.svg"
                  alt="Location icon"
                  width={24}
                  height={24}
                />
                Address: 289, Street no.4, Old Madhopuri, Ludhiana, 141008
              </li>
            </ul>
          </section>

          {/* Contact Form */}
          <section>
            {isSuccess ? (
              <div className="bg-white shadow-xl rounded-3xl p-10 text-center">
                <h3 className="text-2xl font-semibold text-green-600">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-700 mt-4">
                  Thank you for contacting us. We’ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                action="https://api.web3forms.com/submit"
                method="POST"
                className="bg-white shadow-xl rounded-3xl p-10 space-y-6"
              >
                {/* Replace this key with your actual Web3Forms access key */}
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_ACCESS_KEY_HERE"
                />
                <input type="hidden" name="redirect" value="false" />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Write your message here..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 resize-none"
                    disabled={isLoading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition duration-200 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
