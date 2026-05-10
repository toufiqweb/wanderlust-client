import DestinationCard from "@/components/ui/DestinationCard";
import { getAllDestinations } from "@/lib/data";
import React from "react";

const DestinationsPage = async () => {
  const destinations = await getAllDestinations();

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Explore Destinations
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover amazing travel experiences across the world. Choose your next
          adventure from our handpicked destinations.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 bg-gray-100 px-5 py-2 rounded-full">
          <span className="text-gray-700 font-medium">
            {destinations.length} Destinations
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>

      {destinations.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">No destinations found.</p>
        </div>
      )}
    </div>
  );
};

export default DestinationsPage;
