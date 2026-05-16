"use client";
import { authClient } from "@/lib/auth-client";
import { DateField, Label } from "@heroui/react";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const BookingCard = ({ destination }) => {
  const [destinationDate, setDestinationDate] = useState(null);
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const { price, destinationName, _id, imageUrl } = destination;

  //   console.log(destination);

  //   console.log(new Date(destinationDate) , "destination date in booking card");

  const handleBooking = async () => {


    const {data : tokenData} = await authClient.token()
    // console.log(tokenData);
    

    const bookingPromise = fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization : `Bearer ${tokenData?.token}`
      },
      body: JSON.stringify({
        userId: user?.id,
        userName: user?.name,
        userImage: user?.image,
        destinationId: _id,
        destinationName,
        imageUrl,
        destinationDate: new Date(destinationDate),
        price,
        status: "Confirmed",
      }),
    }).then(async (res) => {
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Booking failed!");
      }

      return data;
    });

    toast.promise(bookingPromise, {
      loading: "Booking destination...",
      success: "Booking successful!",
      error: (err) => err.message || "Something went wrong!",
    });

    try {
      const data = await bookingPromise;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-full">
      <div className="bg-white border border-gray-200 shadow-sm p-5 sticky top-24">
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-1">Starting from</p>

          <h2 className="text-4xl font-semibold text-cyan-500">${price}</h2>

          <p className="text-sm text-gray-400 mt-1">per person</p>
        </div>

        <DateField
          className="my-3 w-full"
          name="date"
          onChange={setDestinationDate}
        >
          <Label className="mb-2 block text-sm font-medium text-slate-700">
            Date
          </Label>

          <DateField.Group className=" flex items-center border-b border-slate-300 bg-transparent py-4 rounded-none px-3 transition-colors shadow-none border focus-within:border-cyan-100 ">
            <DateField.Input className=" flex gap-1 border-none bg-transparent p-0  text-sm text-slate-900outline-none ">
              {(segment) => (
                <DateField.Segment
                  segment={segment}
                  className="px-0.5 py-1 text-slate-600 data-[type=literal]:text-slate-400 focus:bg-cyan-100  focus:text-cyan-600 outline-none "
                />
              )}
            </DateField.Input>
          </DateField.Group>
        </DateField>
        <button
          onClick={handleBooking}
          className="w-full bg-cyan-500 hover:bg-cyan-600 transition text-white py-4 flex items-center justify-center gap-2 text-sm font-medium"
        >
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
  );
};

export default BookingCard;
