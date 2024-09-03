"use client";
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPinterestP } from "react-icons/fa";
import Link from "next/link";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      description: "Beautifully crafted global homes and retreats.",
      image:
        "/laptop.jpg",
    },
    {
      description: "Leading architecture & interior design studio in London.",
      image:
        "/laptop.jpg",
    },
    {
      description: "Commercial focused design led environments.",
      image:
        "/laptop.jpg",
    },
    {
      description: "The future of how we live, work and play.",
      image:
        "/laptop.jpg",
    },
  ];
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  const sections = ["Our company", "Residential", "Commercial", "Hospitality"];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute w-full h-full animate-zoom"
            style={{
              
              backgroundImage: `
               linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.66)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              animation: "ease-out",
              animationDuration: "700",
            }}
          ></div>
          <div className="relative z-50 text-white font-extralight leading-snug px-[30px] flex flex-col justify-center items-start h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <p className="mb-8 transition-transform duration-500 transform translate-y-8 opacity-0 animate-slide-up lg:text-[40px] text-[28px] md:text-[35px] xl:text-[40px]">
                  {slide.description}
                </p>
                <button className=" text-white text-center tracking-widest font-extralight uppercase bg-transparent border border-[rgba(181,171,161,0.6)] rounded-full justify-center items-center mx-0 px-10 py-4 font-sans text-[0.625rem] leading-tight inline-block relative hover:bg-[#0d0d0d8c]">
                  view projects
                </button>
              </div>
              <div className="lg:flex xl:flex hidden flex-col items-end space-y-4 py-10 px-[8px]">
               <Link href="#" ><FaInstagram className="text-white border rounded-full border-[#ffffff4d] p-[6px] hover:border-white" size={30} /></Link>
                <Link href="#"><FaLinkedinIn className="text-white border rounded-full border-[#ffffff4d] p-[6px] hover:border-white" size={30} /></Link>
                <Link href="#"><FaFacebookF className="text-white border rounded-full border-[#ffffff4d] p-[6px] hover:border-white" size={30} /></Link>
              <Link href="#"><FaPinterestP className="text-white border rounded-full border-[#ffffff4d] p-[6px] hover:border-white" size={30} /></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 left-0 w-full hidden lg:flex justify-between items-center px-4 md:px-8 py-2 bg-transparent z-50 hover:text-white">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-2 items-start">
            <span className="normal-case mt-0 mb-0 text-[1.1em] font-medium transition-all text-[#b1b1b1] hover:text-white">
              {section}
            </span>
            <div className=" xl:w-64 lg:w-44 h-[1px] bg-[#b1b1b1]/50 mt-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;



