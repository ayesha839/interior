import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
  return (
    <div className="section-clients alt z-10 min-h-screen text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-[5%] pb-20 lg:pb-28 relative">
      <div className="section-clients-content-wrapper z-10 flex flex-col lg:flex-row items-center relative bg-blend-overlay">
        <div className="section-clients-content-wrapper-alt flex justify-center lg:justify-end w-full lg:w-1/2">
          
          {/* Parallax Wrapper */}
          <div
            className="section-clients-parallax-wrapper w-full lg:w-4/5 gap-x-4 gap-y-10 flex flex-col"
            style={{
              willChange: 'transform',
              transform: 'translate3d(0px, -9.1064%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            
            {/* Title and Description */}
            <div className="section-clients-title-desc-wrapper grid gap-x-4 gap-y-9 grid-cols-1 mt-10 " style={{ gridTemplateRows: 'auto' }}>
              <div className="heading-wrapper mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.425em] font-normal leading-[1.2em] text-white">
                  Working with leading brands
                </h2>
              </div>
              <div className="paragraph-wrapper mb-10">
                <p className="text-white text-sm sm:text-base lg:text-[13px] font-light">
                  Our portfolio showcases a diverse range of projects in different 
                  scales and styles, reflecting our commitment to excellence and 
                  innovation in design. With a team of experienced architects, 
                  designers, and engineers, UBBS provides end-to-end solutions that 
                  change people's lives.
                </p>
              </div>
            </div>
            
            {/* Client Logos */}
            <div className="clients-logos-wrapper grid gap-x-8 gap-y-10 grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 content-center justify-items-center">
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                  src="/laptop.jpg"
                  width={100}
                  height={100}
                  // loading="lazy"
                  alt="Dior"
                  className="w-12 sm:w-16 lg:w-20 opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                  src="/laptop.jpg"
                  width={100}
                  height={100}
                  // loading="lazy"
                  alt="White Rabbit"
                  className="w-12 sm:w-16 lg:w-20 opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                  src="/laptop.jpg"
                  width={100}
                  height={100}
                  // loading="lazy"
                  alt="Dior"
                  className="w-12 sm:w-16 lg:w-20 opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                  src="/laptop.jpg"
                  width={100}
                  height={100}
                  // loading="lazy"
                  alt="Dior"
                  className="w-12 sm:w-16 lg:w-20 opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                  src="/laptop.jpg"
                  width={100}
                  height={100}
                  // loading="lazy"
                  alt="Dior"
                  className="w-12 sm:w-16 lg:w-20 opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                 src="/laptop.jpg"
                 width={100}
                 height={100}
                  // loading="lazy"
                  alt="Dior"
                  className="w-[60px] opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                  src="/laptop.jpg"
                  width={100}
                  height={100}
                  // loading="lazy"
                  alt="Dior"
                  className="w-[60px] opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                  src="/laptop.jpg"
                  width={100}
                  height={100}
                  // loading="lazy"
                  alt="Dior"
                  className="w-[60px] opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                width={100}
                height={100}
                  src="/laptop.jpg"
                  loading="lazy"
                  alt="Dior"
                  // className="w-[60px] opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                width={100}
                height={100}
                  src="/laptop.jpg"
                  loading="lazy"
                  alt="Dior"
                  // className="w-[60px] opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                width={100}
                height={100}
                  src="/laptop.jpg"
              
                  // loading="lazy"
                  alt="Dior"
                  className="w-[60px] opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                  src="/laptop.jpg"
                  width={100}
                  height={100}
                  // loading="lazy"
                  alt="Dior"
                  className="w-[60px] opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                  src="/laptop.jpg"
                  width={100}
                  height={100}
                  // loading="lazy"
                  alt="Dior"
                  className="w-[60px] opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                  src="/laptop.jpg"
                  width={100}
                  height={100}
                  // loading="lazy"
                  alt="Dior"
                  className="w-[60px] opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                  src="/laptop.jpg"
                  width={100}
                  height={100}
                  // loading="lazy"
                  alt="Dior"
                  className="w-[60px] opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                  src="/laptop.jpg"
                  width={100}
                  height={100}
                  // loading="lazy"
                  alt="Dior"
                  className="w-[60px] opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                  src="/laptop.jpg"
                  width={100}
                  height={100}
                  // loading="lazy"
                  alt="Dior"
                  className="w-[60px] opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                  src="/laptop.jpg"
                  width={100}
                  height={100}
                  // loading="lazy"
                  alt="Dior"
                  className="w-[60px] opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                  src="/laptop.jpg"
                  width={100}
                  height={100}
                  // loading="lazy"
                  alt="Dior"
                  className="w-[60px] opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                  src="/laptop.jpg"
                  width={100}
                  height={100}
                  // loading="lazy"
                  alt="Dior"
                  className="w-[60px] opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                  src="/laptop.jpg"
                  width={100}
                  height={100}
                  // loading="lazy"
                  alt="Dior"
                  className="w-[60px] opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                  src="/laptop.jpg"
                  width={100}
                  height={100}
                  // loading="lazy"
                  alt="Dior"
                  className="w-[60px] opacity-70"
                />
              </div>
              <div className="logo-wrapper flex justify-center items-center">
                <Image
                  src="/laptop.jpg"
                  width={100}
                  height={100}
                  // loading="lazy"
                  alt="Dior"
                  className="w-[60px] opacity-70"
                />
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
      
      {/* Background Cover */}
      <div className="background-cover flex justify-center items-center absolute inset-0 overflow-hidden">
        <div
          className="background-banner video-banner absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "/laptop.jpg",
            backgroundPosition: '50% 25%',
            transform: 'translate3d(0px, 3.64256%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        >
          <div className="image-overlay absolute inset-0 z-10 bg-gradient-to-t from-transparent to-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
