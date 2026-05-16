"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    text: `"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."`,
    name: "Michael Chen",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    text: `"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"`,
    name: "Sarah Johnson",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    text: `"The Entire Journey Felt Premium From Start To Finish. Customer Support Was Amazing And Everything Was Smooth."`,
    name: "David Miller",
    location: "Canada",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function TravelersSay() {
  return (
    <section className="bg-[#f6f6f6] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-light text-black tracking-tight">
              What Travelers Say
            </h2>

            <p className="mt-3 text-gray-500 text-sm md:text-base">
              Real experiences from our happy travelers
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="testimonial-prev w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
              <ArrowLeft size={20} />
            </button>

            <button className="testimonial-next w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#f8f8f8] border border-gray-200 p-5 md:p-6 flex flex-col md:flex-row gap-6 min-h-80">
                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <p className="text-[#222] leading-tight text-[22px] font-light">
                    {item.text}
                  </p>

                  <div className="mt-8">
                    <h4 className="text-[#2ea3db] text-base font-medium">
                      — {item.name}
                    </h4>

                    <p className="text-gray-500 text-sm mt-1">
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="relative w-full md:w-55 h-65 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Buttons */}
        <div className="flex md:hidden justify-center gap-3 mt-8">
          <button className="testimonial-prev w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
            <ArrowLeft size={18} />
          </button>

          <button className="testimonial-next w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
