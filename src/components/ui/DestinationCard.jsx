import Image from "next/image";
import { Calendar, MapPin, Star } from "lucide-react";
import Link from "next/link";

const DestinationCard = ({ destination }) => {
  const {
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
  } = destination;
  return (
    <div className="max-w-md mx-auto bg-white  overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Image Section */}
      <div className="relative h-70">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="object-cover"
          priority
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-500 mb-1">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">{country}</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {destinationName}
        </h3>

        {description && (
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {description}
          </p>
        )}

        {/* Duration */}
        <div className="flex items-center gap-2 text-gray-600 mb-5">
          <Calendar className="w-5 h-5" />
          <span className="font-medium">{duration} Days</span>
          {departureDate && (
            <span className="text-xs text-gray-500 ml-auto">
              Departs{" "}
              {new Date(departureDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          )}
        </div>

        {/* Price & Button */}
        <div className="flex items-end justify-between">
          <div>
            <span className="text-sm text-gray-500">From</span>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-gray-900">${price}</span>
              <span className="text-gray-500 text-sm ml-1">/Person</span>
            </div>
          </div>
        </div>
        <Link href={""}> <span className="text-blue-500 underline font-semibold mt-4 text-xl "> See detail    <span className="text-xl">→</span></span></Link>
      </div>
    </div>
  );
};

export default DestinationCard;
