"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import journeyBg from "@/assets/CTA.png"; 


export default function StartJourney() {
  return (
    <section className="relative w-full h-105 overflow-hidden">
      {/* Background Image */}
      <Image
        src={journeyBg}
        alt="Travel Background"
        fill
        priority
        className="object-cover "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* Side Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-5">
        <div className="text-center max-w-3xl">
          <h2 className="text-white text-4xl md:text-6xl font-light tracking-tight leading-tight">
            Ready To Start Your Journey?
          </h2>

          <p className="mt-4 text-gray-200 text-sm md:text-lg font-light">
            Join thousands of travelers who have discovered the world with us
          </p>

          {/* Button */}
          <div className="mt-10">
            <button className="group bg-white hover:bg-[#f3f3f3] text-black px-8 py-4 flex items-center gap-4 mx-auto transition-all duration-300 shadow-lg hover:scale-[1.02]">
              <span className="text-sm md:text-base font-medium tracking-wide">
                BOOK YOUR TRIP TODAY
              </span>

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}