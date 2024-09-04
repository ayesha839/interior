"use client";
import { useState } from "react";

export default function Wierdsection() {
  const [bgImage, setBgImage] = useState(
    "https://cdn.prod.website-files.com/63c9df6b055c09c10ac5d6f0/644f18f20014986761b02ee9_643b35a6599bb80d3ce4c525_embassy-house-04-p-1080.webp"
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
              "https://cdn.prod.website-files.com/63c9df6b055c09c10ac5d6f0/63db20a9d833029e83600317_Screenshot%202023-02-02%20at%2001.08.44-p-1080.webp",
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
              "https://cdn.prod.website-files.com/63c9df6b055c09c10ac5d6f0/64416671d9d4884a3942c487_monochrome-image-p-1080.jpg",
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
              "https://cdn.prod.website-files.com/63c9df6b055c09c10ac5d6f0/644f18f20014986761b02ee9_643b35a6599bb80d3ce4c525_embassy-house-04-p-1080.webp",
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
              "https://cdn.prod.website-files.com/63c9df6b055c09c10ac5d6f0/644f1b035896be20f7574232_643b3b2bfa6830febac4f275_sechenovskogo-10-p-1080.webp",
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
