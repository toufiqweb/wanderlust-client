import { getDestinationById } from "@/lib/data";
import Link from "next/link";
import React from "react";
import {
  CalendarDays,
  MapPin,
  Star,
  Check,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import { EditDestinationModal } from "@/components/ui/EditDestinationModal";
import { DeleteDestinationAlert } from "@/components/ui/DeleteDestinationAlert";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const destination = await getDestinationById(id);

  const {
    destinationName,
    country,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
  } = destination;

  return (
    <div className="min-h-screen container mx-auto md:py-25  px-4 md:px-8 lg:px-12  ">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <Link
          href="/destinations"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition"
        >
          <ArrowLeft size={16} />
          Back to Destinations
        </Link>

        <div className="flex items-center gap-3">
        
            <EditDestinationModal destination={destination}/>
            <DeleteDestinationAlert destination={destination}/>
          
        </div>
      </div>

      <div className="w-full overflow-hidden rounded-sm">
        <Image
          src={imageUrl}
          alt={destinationName}
          width={800}
          height={800}
          className="w-full h-55 sm:h-87.5 md:h-112.5 object-cover"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
            <MapPin size={15} />
            <span>{country}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
            {destinationName}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-600 mb-10">
            <div className="flex items-center gap-1">
              <Star size={15} className="fill-green-500 text-green-500" />
              <span>4.9</span>
              <span className="text-gray-400">(234 reviews)</span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays size={15} />
              <span>{duration} Days / 6 Nights</span>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-medium text-gray-900 mb-5">
              Overview
            </h2>

            <p className="text-gray-500 leading-8 text-[15px]">{description}</p>
          </div>

          <div>
            <h2 className="text-2xl font-medium text-gray-900 mb-5">
              Highlights
            </h2>

            <p className="text-gray-500 leading-8 text-[15px] mb-8">
              Discover the magic of {destinationName} with pristine beaches,
              ancient temples, and vibrant culture. Experience luxury resorts,
              tropical landscapes, and unforgettable sunsets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
              <div className="flex items-start gap-3">
                <Check size={18} className="text-green-500 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  Luxury beachfront accommodation
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check size={18} className="text-green-500 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  Visit Uluwatu Temple at sunset
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check size={18} className="text-green-500 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  Traditional Balinese spa treatment
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check size={18} className="text-green-500 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  Private beach dinner experience
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Check size={18} className="text-green-500 mt-0.5" />
                <span className="text-gray-600 text-sm">
                  Sunrise trek to Mount Batur
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="bg-white border border-gray-200 shadow-sm p-5 sticky top-24">
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-1">Starting from</p>

              <h2 className="text-4xl font-semibold text-cyan-500">${price}</h2>

              <p className="text-sm text-gray-400 mt-1">per person</p>
            </div>

            <div className="border border-gray-200 px-4 py-3 text-gray-500 text-sm mb-6">
              {departureDate}
            </div>

            <button className="w-full bg-cyan-500 hover:bg-cyan-600 transition text-white py-4 flex items-center justify-center gap-2 text-sm font-medium">
              Book Now
              <ArrowRight size={16} />
            </button>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 text-sm text-gray-500">
                <Check size={16} className="text-green-500 mt-0.5" />
                <span>Free cancellation up to 7 days</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-500">
                <Check size={16} className="text-green-500 mt-0.5" />
                <span>Travel insurance included</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-500">
                <Check size={16} className="text-green-500 mt-0.5" />
                <span>24 / 7 customer support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
