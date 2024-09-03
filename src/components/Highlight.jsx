"use client"
import React, { useState, useEffect, useRef } from 'react';

const Highlight = () => {
  const highlightsData = [
    { number: 30, description: 'Years of experience' },
    { number: 11, description: 'Countries covered' },
    { number: 300, description: 'Projects delivered' },
    { number: 25, description: 'Projects per year' },
  ];

  const [visible, setVisible] = useState(false);
  const numbersRef = useRef(null);
  const [animatedNumbers, setAnimatedNumbers] = useState(
    highlightsData.map(() => 0)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.3, 
      }
    );

    if (numbersRef.current) {
      observer.observe(numbersRef.current);
    }
  }, []);

  useEffect(() => {
    if (visible) {
      highlightsData.forEach((highlight, index) => {
        const increment = highlight.number / 100; 

        const animate = () => {
          setAnimatedNumbers((prev) => {
            const newNumbers = [...prev];
            if (newNumbers[index] < highlight.number) {
              newNumbers[index] = Math.min(
                newNumbers[index] + increment,
                highlight.number
              );
            }
            return newNumbers;
          });

          if (animatedNumbers[index] < highlight.number) {
            setTimeout(animate, 20); 
          }
        };

        animate();
      });
    }
  }, [visible]);

  return (
    <div
      ref={numbersRef}
      className="section-highlights py-16 pt-[100px] pb-[100px]"
    >
      <div className="highlights-description-wrapper gap-x-10 gap-y-4 mb-10 px-[2.5%] sm:flex-col xl:flex ">
        <div className="clip highlights-title">
          <h2 className="large-heading text-4xl font-bold mb-5">Highlights</h2>
        </div>
        <div className="double-grid-item max-w-[480px] overflow-hidden">
          <div className="paragraph-wrapper margin-20 max-w-[360px] mb-[20px]">
            <p className="paragraph-medium text-lg">
              We are pragmatic in our approach to design and handle each project
              in accordance with its particular set of requirements and
              imperatives. When working in conservation areas or on listed
              buildings we aim to respect and retain the best of the historic
              elements and to supplement these with contemporary interventions
              wherever appropriate.
            </p>
          </div>
        </div>
        <div className="double-grid-item max-w-[480px] overflow-hidden">
          <div className="paragraph-wrapper margin-20 max-w-[360px] mb-[20px]">
            <p className="paragraph-medium text-lg">
              Energy efficiency and sustainability issues are given serious
              consideration at the outset of the design process, in particular
              on new-build projects. Properly considered they play an important
              part in adding present and future value.
            </p>
          </div>
        </div>
      </div>

      <div className="highlights-numbers-wrapper grid gap-y-4 lg:grid-cols-[1fr_0.25fr_1fr_0.25fr_1fr_0.25fr_1fr] auto-cols-fr px-[2.5%] md:grid-cols-1">
        {highlightsData.map((highlight, index) => (
          <React.Fragment key={index}>
            <div className="div-number flex flex-col items-center justify-center text-black">
              <div className="flex items-baseline">
                <div className="number-wrapper  text-[80px] mt-4 font-extralight font-serif ml-2">
                  {Math.floor(animatedNumbers[index])}
                </div>
                <div className="plus-sign text-[50px] font-extralight items-center font-serif">
                  +
                </div>
              </div>
              <div className="subtitle-medium text-xl font-serif text-black mt-10">
                {highlight.description}
              </div>
            </div>
            {index < highlightsData.length - 1 && (
              <div className="div-vertical-divider hidden md:block w-px bg-gray-300 self-center justify-self-center"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Highlight;
