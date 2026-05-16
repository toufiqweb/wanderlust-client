import Banner from "@/components/homepage/Banner";
import FeaturedDestinations from "@/components/homepage/FeaturedDestinations";
import StartJourney from "@/components/homepage/StartJourney";
import TravelersSay from "@/components/homepage/TravelersSay";
import WhyChooseWanderlust from "@/components/homepage/WhyChooseWanderlust";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedDestinations />
      <WhyChooseWanderlust/>
      <TravelersSay />
      <StartJourney/>
    </div>
  );
}
