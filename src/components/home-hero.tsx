import React, { useRef } from "react";
import { Navbar } from "./navbar";
import { motion, useScroll, useTransform } from "motion/react";
import cantomentsCityLogo from "../assets/cantoments-city-logo.png";
import heroBg from "../assets/hero-bg.png";
import heroText from '../assets/hero-text.png'
import icLogo from "../assets/ic-logo.png"
import { RevealSection } from "./reveal-section";

export const HomeHero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative w-full min-h-[250px] md:min-h-[650px] flex flex-col justify-start">
      {/* Hero background image, absolutely positioned and behind everything */}
      <img
        src={heroBg.src}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        alt="hero background"
        loading="eager"
        fetchPriority="high"
      />
      {/* Navbar and Hero content overlays background */}
      <div className="relative z-10">
        <Navbar />
        <RevealSection>
          <section
            ref={containerRef}
            className="relative flex flex-col items-center justify-center h-[250px] md:h-[650px] w-full"
          >
            <div className="text-brand-primary flex flex-col items-center justify-center text-center py-20 h-full -mt-24">
              <div className="w-44">
                <img src={cantomentsCityLogo.src} />
              </div>
              <img src={heroText.src} className="w-1/3" />
            </div>
            <img className="absolute right-10 bottom-10 w-18" src={icLogo.src} />
          </section>
        </RevealSection>
      </div>
    </div>
  );
};
