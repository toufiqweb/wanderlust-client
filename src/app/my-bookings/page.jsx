import { DeleteBookingAlert } from "@/components/ui/DeleteBookingAlert";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import {
  FaCalendarAlt,
  FaIdBadge,
  FaCheckCircle,
  FaClock,
  FaEye,
  FaBan,
} from "react-icons/fa";

const MyBookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  if (!user) {
    return (
      <div className="text-center py-20 text-red-500">
        Please login to view your bookings.
      </div>
    );
  }

  const res = await fetch(`http://localhost:4000/booking/${user.id}`, {
    cache: "no-store",
  });
  const bookings = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">My Bookings</h1>
        <p className="text-gray-500 mt-2">
          Manage and view your upcoming travel plans
        </p>
      </div>

      {/* List */}
      <div className="space-y-6">
        {bookings?.map((booking) => (
          <div
            key={booking._id}
            className="flex flex-col md:flex-row items-center justify-between bg-white border border-base-200  hover:shadow-md transition p-4"
          >
            {/* Left Image */}
            <div className="w-full md:w-64 h-40 shrink-0">
              <Image
                width={256}
                height={160}
                src={booking.imageUrl}
                alt={booking.destinationName}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Middle Content */}
            <div className="flex-1 px-0 md:px-6 mt-4 md:mt-0 w-full">
              {/* Status Badge */}
              <div className="mb-2">
                {booking.status === "Confirmed" ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-600">
                    <FaCheckCircle className="text-green-500" />
                    {booking.status}
                  </span>
                ) : booking.status === "Pending" ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-600">
                    <FaClock className="text-yellow-500" />
                    {booking.status}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                    {booking.status}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-900">
                {booking.destinationName}
              </h2>

              {/* Info */}
              <div className="text-sm text-gray-500 mt-2 space-y-1">
                <p className="flex items-center gap-2">
                  <FaCalendarAlt className="text-gray-400 shrink-0" />
                  Departure: {booking.destinationDate}
                </p>
                <p className="flex items-center gap-2">
                  <FaIdBadge className="text-gray-400 shrink-0" />
                  Booking ID: {booking._id}
                </p>
              </div>

              {/* Price */}
              <p className="text-lg font-bold text-cyan-600 mt-3">
                ${booking.price}
              </p>
            </div>

            {/* Right Actions */}
            <div className="flex md:flex-col gap-3 mt-4 md:mt-0">
              <DeleteBookingAlert bookingId={booking._id} />
              <button className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-cyan-500 text-white  hover:bg-cyan-600 transition">
                <FaEye />
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
