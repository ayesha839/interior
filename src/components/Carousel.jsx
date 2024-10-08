"use client"
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPinterestP } from "react-icons/fa";
import Link from "next/link";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      description: "Beautifully crafted global homes and retreats.",
      image:
        "https://cdn.prod.website-files.com/63c9df6b055c09c10ac5d6f0/645271a04e7c9f73237c8e82_r.webp",
    },
    {
      description: "Leading architecture & interior design studio in London.",
      image:
        "https://cdn.prod.website-files.com/63c9df6b055c09c10ac5d6f0/6451bce651262dea69055c40_Hospitality-2.jpg",
    },
    {
      description: "Commercial focused design led environments.",
      image:
        "https://cdn.prod.website-files.com/63c9df6b055c09c10ac5d6f0/6451bdb0e505d9880fe4da9c_com-2.jpg",
    },
    {
      description: "The future of how we live, work and play.",
      image:
        "https://cdn.prod.website-files.com/63c9df6b055c09c10ac5d6f0/644f196c5896beba035731d5_1_0000s_0018_Vector%20Smart%20Object.jpg",
    },
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
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
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.66)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              animation: "ease-out",
              animationDuration: "700",
            }}
          ></div>
          <div className="relative z-[1] text-white font-extralight leading-snug px-[30px] flex flex-col justify-center items-start h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <p className="mb-8 transition-transform duration-500 transform translate-y-8 opacity-0 animate-slide-up lg:text-[40px] text-[28px] md:text-[35px] xl:text-[40px]">
                  {slide.description}
                </p>
                <Link href="/projects">
                  <button className=" text-white text-center tracking-widest font-extralight uppercase bg-transparent border border-[rgba(181,171,161,0.6)] rounded-full justify-center items-center mx-0 px-10 py-4 font-sans text-[0.625rem] leading-tight inline-block relative hover:bg-[#0d0d0d8c]">
                    view projects
                  </button>
                </Link>
              </div>
              <div className="lg:flex xl:flex hidden flex-col items-end space-y-4 py-10 px-[8px]">
                <Link href="#"><FaInstagram className="text-white border rounded-full border-[#ffffff4d] p-[6px] hover:border-white" size={30} /></Link>
                <Link href="#"><FaLinkedinIn className="text-white border rounded-full border-[#ffffff4d] p-[6px] hover:border-white" size={30} /></Link>
                <Link href="#"><FaFacebookF className="text-white border rounded-full border-[#ffffff4d] p-[6px] hover:border-white" size={30} /></Link>
                <Link href="#"><FaPinterestP className="text-white border rounded-full border-[#ffffff4d] p-[6px] hover:border-white" size={30} /></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
