import { useState } from "react";
import goldKeyLogo from "../assets/goldkey-logo.png";
import icLogo from "../assets/ic-logo.png";
import standardCharteredLogo from "../assets/standard-chartered-logo.png";

import heroBgFilter from "../assets/hero-bg-filter.png"
import aboutUsBg2 from "../assets/about-us-bg-2.png";
import { properties } from "../lib/properties";
import PropertyCard from "./property-card";
import { Container } from "./container";

type GalleryFilter = "all" | "commercial" | "retail" | "residential";

export const PropertyPortfolio = () => {
  const [galleryFilter, setGalleryFilter] = useState<GalleryFilter>("all");

  return (
    <div className="property-portfolio-page">
      <section className="relative flex items-center justify-center h-[250px] md:h-[350px] w-full">
        <img
          src={heroBgFilter.src}
          className="absolute inset-0 w-full h-full object-cover -z-20 pointer-events-none"
          alt="hero background"
        />
        <div className="flex items-center justify-center w-full">
          <h1 className="text-5xl font-sans text-white">Property Portfolio</h1>
        </div>
      </section>
      <section className="relative w-4/5 mx-auto h-auto px-4">
        <Container className="h-4/5 relative">

          <div className="flex flex-col gap-y-10 items-start">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[0.75px] bg-brand-primary" />
            {
              properties.map((property, i) => <PropertyCard key={i} property={property} />)
            }
          </div>

        </Container>
      </section>

      <section className="relative flex items-center justify-center py-12 md:py-10 px-4 md:px-5 min-h-[200px] md:min-h-[280px]">
        <img
          className="absolute -z-10 w-full h-full object-cover"
          src={aboutUsBg2.src}
          alt="investment-section-background"
          loading={"lazy"}
          decoding={"async"}
          width={1920}
          height={280}
        />
        <div className="w-full md:w-4/5 mx-auto flex flex-col items-center md:items-start gap-6 md:gap-4">
          <h1 className="text-3xl md:text-5xl text-white font-semibold text-center md:text-left">
            Ready to Invest?
          </h1>
          <a
            href="https://onboarding.ic.africa"
            target="_blank"
            rel="noreferrer"
            className="font-semibold bg-white  rounded-sm px-6 py-2 md:px-4 md:py-1 hover:ring hover:ring-white transition-all ease-in-out flex items-center justify-center active:bg-brand-secondary/80"
          >
            Invest with Us
          </a>
        </div>
      </section>
      <section className="flex flex-col items-center gap-16 py-18">
        <div className="border-b-2 py-10 border-brand-primary/50 w-3/5 flex items-center justify-center">
          <h1 className="text-brand-primary text-5xl font-sans font-light">
            100% Focused on Excellence
          </h1>
        </div>
        <h1 className="text-5xl text-gray-700">Our Partners</h1>
        <div>
          <div className="grid grid-cols-3 md:col-span-2 gap-6 md:gap-12 items-center justify-items-center">
            <div className="w-full max-w-[130px] flex items-center justify-center">
              <img
                src={goldKeyLogo.src}
                alt="goldkey-logo"
                className="w-full h-auto object-contain scale-125"
              />
            </div>
            <div className="w-full max-w-[130px] flex items-center justify-center">
              <img
                src={icLogo.src}
                alt="ic-logo"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-full max-w-[130px] flex items-center justify-center">
              <img
                src={standardCharteredLogo.src}
                alt="standard-chartered-logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
