"use client";
import { useState } from "react";

export default function Wierdsection() {
  const [bgImage, setBgImage] = useState(
    "./laptop.jpg"
  ); // Default background image
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleHover = (image, section) => {
    setBgImage(image);
    setHoveredSection(section);
  };

  const handleMouseLeave = () => {
    setHoveredSection(null);
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center transition-all duration-[2000ms] ease-in-out hidden md:hidden lg:block"
      style={{
        backgroundImage: `url(${bgImage})`,
        transition: "background-image 1s ease-in-out", // Smooth transition for background image
      }}
    >
      {/* Overlay for the lines and text */}
      <div className="absolute inset-0 flex bg-gradient-to-t from-[rgba(0,0,0,0.65)] to-[rgba(0,0,0,0.66)]">
        <div
          className="flex-1 flex items-center justify-center border-r border-gray-400 "
          onMouseEnter={() =>
            handleHover(
              "./laptop.jpg",
              "interior"
            )
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="text-white text-center p-4 relative">
            <h2 className="text-[1.5em]">Interior Design Services</h2>
            <p
              className={`text-[1em] mt-3 transition-transform duration-500 ${
                hoveredSection === "interior"
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Transforming spaces with creativity and expertise.
            </p>
          </div>
        </div>

        <div
          className="flex-1 flex items-center justify-center border-r border-gray-400"
          onMouseEnter={() =>
            handleHover(
              "./laptop.jpg",
              "architectural"
            )
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="text-white text-center p-4 relative">
            <h2 className="text-[1.5em]">Architectural Services</h2>
            <p
              className={`text-[1em] mt-3 transition-transform duration-500 ${
                hoveredSection === "architectural"
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Innovative designs for modern architecture.
            </p>
          </div>
        </div>

        <div
          className="flex-1 flex items-center justify-center border-r border-gray-400"
          onMouseEnter={() =>
            handleHover(
              "./laptop.jpg",
              "specification"
            )
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="text-white text-center p-4 relative">
            <h2 className="text-[1.5em]">Specification</h2>
            <p
              className={`text-[1em] mt-3 transition-transform duration-500 ${
                hoveredSection === "specification"
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Space brought to life using creativity and expertise.
            </p>
          </div>
        </div>

        <div
          className="flex-1 flex items-center justify-center "
          onMouseEnter={() =>
            handleHover(
              "./laptop.jpg",
              "construction"
            )
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="text-white text-center p-4 relative">
            <h2 className="text-[1.5em]">Construction and Administration</h2>
            <p
              className={`text-[1em] mt-3 transition-transform duration-500 ${
                hoveredSection === "construction"
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Expertise in project execution and management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
