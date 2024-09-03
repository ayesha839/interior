"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState, useRef } from "react";

const LatestInsight = () => {
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

  const slidesData = [
    {
      img: "/laptop.jpg",
      description: "Urban design trends",
      date: "07 Mar 2023",
    },
    {
      img: "/laptop.jpg",
      description: "Principles of interior design",
      date: "07 Mar 2023",
    },
    {
      img: "/laptop.jpg",
      description: "Commercial architecture: best practices",
      date: "07 Mar 2023",
    },
    {
      img: "/laptop.jpg",
      description: "The future of hospitality design",
      date: "07 Mar 2023",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="pt-[100px] pr-[2.5%] pb-[100px] pl-[2.5%] space-y-10"
    >
      <div>
        <div className="space-y-7">
          <h1
            className={`text-black mt-0 mb-0 text-[3.425em] font-normal leading-[1.2em] transition-all duration-1000 ${
              isTitleVisible
                ? "animate-slide-in-left"
                : "opacity-0 translate-x-[-50px]"
            }`}
          >
            Latest Insight
          </h1>
          <Link
            href="/projects"
            className="btn-underline white-bg w-inline-block "
          >
            <div>View Blog</div>
            <div className="underline-hover-fill white-bg"></div>
          </Link>
        </div>
      </div>
      <div>
        <Swiper
        spaceBetween={20}
          className="mySwiper"
          breakpoints={{
            // when window width is 470px or less
            0: {
              slidesPerView: 1.2,
            },
            // when window width is between 471px and 970px
            471: {
              slidesPerView: 2,
            },
            // when window width is above 970px
            971: {
              slidesPerView: 3.3,
            },
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-auto h-[400px] bg-cover bg-center text-white flex items-end object-cover transform transition-transform duration-1000 ease-in-out hover:scale-95"
                style={{
                  backgroundImage: `linear-gradient(#0000, #00000073), url(${slide.img})`,
                }}
              >
                <div className="w-full p-2">
                  <p className="text-xl font-light">{slide.description}</p>
                  <p className="text-sm text-gray-300">{slide.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestInsight;
