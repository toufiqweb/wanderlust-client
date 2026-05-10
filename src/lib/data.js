export const getAllDestinations = async () => {
  const res = await fetch("http://localhost:4000/destination");
  return res.json();
   
};
export const getDestinationById = async (id) => {
  const res = await fetch(`http://localhost:4000/destination/${id}`);
  return res.json();
   
};
