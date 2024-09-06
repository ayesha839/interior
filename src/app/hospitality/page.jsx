"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

const page = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      name: "Bath-house complex",
      location: "Moscow region",
      imageUrl:
        "https://cdn.prod.website-files.com/63c9df6b055c091e80c5d708/6452cb77bf1ae6f3ec85934c_1_0001_Screenshot%202023-05-03%20at%2016.56.18.jpg",
    },
    {
      name: "White Rabbit Restraunt",
      location: "Moscow",
      imageUrl:
        "https://cdn.prod.website-files.com/63c9df6b055c091e80c5d708/64b5f410c12b3ec8aef25b04_2882551ab17ef96b858c33f4da218f49-6169f721af0d1fe619cf5dd4c6fed9a5.jpg",
    },
    {
      name: "Premier Golf & Country Club",
      location: "Europe",
      imageUrl:
        "https://cdn.prod.website-files.com/63c9df6b055c091e80c5d708/654ab2a8de380a0a464c31ef_1_0000s_0007_Vector%20Smart%20Object.jpg",
    },
  ];

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
        threshold: 0.1, // Trigger when 10% of the section is visible
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
    <div ref={sectionRef} className="pt-[100px] pr-[2.5%] pb-[100px] pl-[2.5%]">
      <div className="w-[100%]">
        <div>
          <h1
            className={`text-black mt-0 mb-0 text-[3.425em] font-normal leading-[1.2em] transition-all duration-1000 ${
              isTitleVisible
                ? "animate-slide-in-left"
                : "opacity-0 translate-x-[-50px]"
            }`}
          >
            Hospitality
          </h1>
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-[1fr_auto] items-center mt-10">
            <div className="flex flex-wrap">
              {[
                { category: "Residential", link: "/residential" },
                { category: "Hospitality", link: "/hospitality" },
                { category: "Commercial", link: "/commercial" },
                { category: "Retail", link: "/retail" },
              ].map(({ category, link }) => (
                <Link href={link} key={category}>
                  <div className="text-black border border-[rgba(49,45,43,0.65)] rounded-full flex justify-center items-center mr-2 mb-2 px-2.5 py-1 text-[1em] font-light leading-[1.2em] no-underline transition-all duration-200 hover:text-white hover:bg-[#B5ABA1] hover:border-none">
                    {category}
                  </div>
                </Link>
              ))}
            </div>

            <div className="hidden xl:block col-span-1 justify-self-end">
              Request more Information <br />
              info@ubbs.uk
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-black/10 mt-10 mb-10"></div>
        <div className="z-10 w-[100%] relative">
          <div className="mb-[100px]">
            <div>
              <div className="grid gap-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-2 auto-cols-fr">
                {projects.map((project, index) => (
                  <div className="col-span-1" key={index}>
                    <Link href="#" className="w-[100%] h-[100%] no-underline">
                      <div className="relative h-[70vw] md:h-[35vw] lg:h-[30vw] overflow-hidden group">
                        <div
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out group-hover:scale-105"
                          style={{
                            backgroundImage: `url(${project.imageUrl})`,
                          }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 text-white">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <div className="text-xs sm:text-sm md:text-base  border-white/60 rounded-full px-2 py-1 mb-2 sm:mb-0">
                              {project.location}
                            </div>
                            <div className="text-sm sm:text-base md:text-sm font-semibold">
                              {project.name}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="centerContainer">
        <Link href="/" className="btn-underline white-bg w-inline-block">
          <div>HOMEPAGE</div>
          <div className="underline-hover-wrapper">
            <div
              className="underline-hover-fill white-bg"
              style={{
                transform:
                  "translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                display: "none",
              }}
            ></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;

