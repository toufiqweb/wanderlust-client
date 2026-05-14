export const getAllDestinations = async () => {
  const res = await fetch("http://localhost:4000/destination");
  return res.json();
   
};
export const getDestinationById = async (id , token) => {
  const res = await fetch(`http://localhost:4000/destination/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    }
  });
  return res.json();
   
};


export const getUserBookings = async (userId) => {
  const res = await fetch(`http://localhost:4000/booking/${userId}`, {
    cache: "no-store",
  });
  const bookings = await res.json();
  return bookings;
}