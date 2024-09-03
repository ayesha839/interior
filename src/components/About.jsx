"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

const About = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
          observer.disconnect(); // Stop observing once the title is visible
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="z-10 min-h-[80vh] pt-[100px] px-[2.5%] flex justify-center items-center relative"
    >
      <div className="w-full flex flex-col md:flex-row md:gap-[120px] items-center">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h1
            className={`text-black mt-0 mb-0 text-[3.425em] font-normal leading-[1.2em] transition-all duration-1000 ${
              isTitleVisible
                ? "animate-slide-in-left"
                : "opacity-0 translate-x-[-50px]"
            }`}
          >
            About
          </h1>
          <p className="text-black mb-0 text-[13px] font-light">
            UBBS is vastly experienced at working across sectors – Residential,
            Hospitality and Commercial, and across disciplines – Architecture
            and Interior Design. We offer a multifaceted, entirely bespoke
            design service, focussed around achieving the best possible end
            result. Energy efficiency and sustainability issues are given
            serious consideration at the outset of the design process, in
            particular on new-build projects.
          </p>
          <div className="mt-8 hover-underline">
            <Link href="#" className="text-black text-[13px]">
              MEET THE TEAM
            </Link>
            <div className="w-[105px] bg-black h-[1px]"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image
          width={100}
          height={100}
            src="/laptop.jpg"
            alt=""
            className="w-full min-h-[400px] object-cover transform transition-transform duration-1000 ease-in-out hover:scale-95"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
