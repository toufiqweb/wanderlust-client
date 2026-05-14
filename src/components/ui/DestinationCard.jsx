import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

const DestinationCard = ({ destination }) => {
  const {
    _id,
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
  } = destination;
  return (
    <div className=" bg-white  overflow-hidden  hover:shadow-md transition-all duration-300">
      <div className="relative h-70">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
          {category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-500 mb-1">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">{country}</span>
        </div>

        <div className="flex justify-between items-center gap-2">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {destinationName}
          </h3>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-gray-900">${price}</span>
            <span className="text-gray-500 text-sm ml-1">/Person</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-600 mb-5">
          <Calendar className="w-5 h-5" />
          <span className="font-medium">{duration} Days</span>
          {departureDate && (
            <span className="text-xs text-gray-500 ">
              Departs
              {new Date(departureDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          )}
        </div>

        <div className="flex items-end justify-between">
          <div></div>
        </div>
        <Link href={`destination/${_id}`}>
          <span className="text-cyan-500 underline  mt-2 text-xl flex items-center gap-1 ">
            See detail <MdOutlineArrowOutward />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
