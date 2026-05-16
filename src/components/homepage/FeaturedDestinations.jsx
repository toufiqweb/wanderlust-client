"use client";
import { useEffect, useState } from "react";
import { getAllDestinations } from "@/lib/data";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DestinationCard from "../ui/DestinationCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const FeaturedDestinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const data = await getAllDestinations();
      setDestinations(data);
      setTotalSlides(data.length);
    };
    loadData();
  }, []);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex + 1);
  };

  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Featured Destinations
            </h2>
            <p className="text-gray-500 mt-2">
              Handpicked travel experiences for the adventure seekers
            </p>
          </div>
          <button className="border border-gray-300 px-5 py-2 text-xs font-semibold tracking-widest hover:bg-gray-100 transition flex items-center gap-2 text-gray-700">
            ALL DESTINATIONS →
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            setTotalSlides(swiper.slides.length);
          }}
          onSlideChange={handleSlideChange}
          breakpoints={{
            640: { slidesPerView: 1.1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.2 },
            1280: { slidesPerView: 2.3 },
          }}
        >
          {destinations.map((destination) => (
            <SwiperSlide key={destination._id}>
              <DestinationCard destination={destination} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between mt-6">
          {/* Fraction Pagination */}
          <span className="text-xl text-gray-600">
            {currentIndex}/{totalSlides}
          </span>

          <div className="d"></div>
          {/* Prev / Next Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition text-gray-700 text-lg"
            >
              <FaArrowLeftLong size={16}/>
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition text-gray-700 text-lg"
            >
              <FaArrowRightLong size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;