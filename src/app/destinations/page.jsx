import DestinationCard from "@/components/ui/DestinationCard";
import React from "react";

const DestinationsPage = async () => {
  const res = await fetch("http://localhost:4000/destination");
  const destinations = await res.json();

  return (
    <div className="container mx-auto py-20">
      <h1>{destinations.length}</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;
