"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-amber-50/30">
      <Header />
      
      {/* Decorative elements */}
      <div className="fixed -z-10 top-40 left-10 w-72 h-72 bg-amber-800/5 rounded-full blur-3xl"></div>
      <div className="fixed -z-10 bottom-40 right-10 w-80 h-80 bg-amber-800/5 rounded-full blur-3xl"></div>
      
      <main className="flex-grow px-6 py-16 md:px-16 max-w-7xl mx-auto w-full flex flex-col justify-center items-center relative">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Get in <span className="text-amber-800 relative">
            Touch
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-800/30 rounded-full"></span>
          </span> With Us
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {/* Contact Info */}
          <motion.section 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-2xl font-semibold text-black mb-3">
                Contact Information
              </h2>
              <div className="w-20 h-1 bg-amber-800/70 rounded-full"></div>
            </div>
            
            <p className="text-lg text-gray-700">
              We&apos;d love to hear from you. Whether you have a question,
              feedback, or a custom request—reach out!
            </p>

            <ul className="space-y-7">
              {[
                {
                  icon: "/whatsapp-svgrepo-com.svg",
                  text: "WhatsApp: +91 84377 11007",
                  href: "https://wa.me/918437711007",
                  alt: "WhatsApp icon"
                },
                {
                  icon: "/phone-svgrepo-com.svg",
                  text: "Phone: +91-84377 11007",
                  href: "tel:+918437711007",
                  alt: "Phone icon"
                },
                {
                  icon: "/gmail-svgrepo-com.svg",
                  text: "Email: kplusludhiana@gmail.com",
                  href: "mailto:kplusludhiana@gmail.com",
                  alt: "Email icon"
                },
                {
                  icon: "/location.svg",
                  text: "Address: 289, Street no.4, Old Madhopuri, Ludhiana, 141008",
                  alt: "Location icon"
                }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-5 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-amber-800/10 transition-all duration-300">
                        <Image
                          src={item.icon}
                          alt={item.alt}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-lg text-gray-800 group-hover:text-amber-800 transition-colors duration-300">
                        {item.text}
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center">
                        <Image
                          src={item.icon}
                          alt={item.alt}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-lg text-gray-800">{item.text}</span>
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>

            <div className="pt-5">
              <div className="h-48 w-full rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.4975463142523!2d75.84967301544574!3d30.8826811917059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a822f35269b11%3A0xfcb7d7766d7f66ee!2sOld%20Madhopuri%2C%20Ludhiana%2C%20Punjab%20141008!5e0!3m2!1sen!2sin!4v1655302132369!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.section>

          {/* Contact Form */}
          <motion.section
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white shadow-2xl rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-green-600 mb-3">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-700 mb-8">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-3 bg-black text-white rounded-lg hover:bg-amber-800 transition duration-300"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                action="https://api.web3forms.com/submit"
                method="POST"
                className="bg-white shadow-2xl rounded-3xl p-10 space-y-6 relative overflow-hidden"
              >
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-amber-800/5 rounded-full"></div>
                <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-amber-800/5 rounded-full"></div>
                
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                <input type="hidden" name="redirect" value="false" />

                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-800 transition-all duration-300"
                      disabled={isLoading}
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-800 transition-all duration-300"
                      disabled={isLoading}
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-4 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-800 transition-all duration-300 resize-none"
                      disabled={isLoading}
                    />
                    <div className="absolute left-4 top-6 text-gray-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 11.5C21 16.75 12 22 12 22C12 22 3 16.75 3 11.5C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-black text-white px-6 py-4 rounded-xl hover:bg-amber-800 transition duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
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
                    <>
                      <span>Send Message</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
