import {
  ShieldCheck,
  Map,
  Headphones,
} from "lucide-react";

export default function WhyChooseWanderlust() {
  const features = [
    {
      icon: <ShieldCheck size={30} strokeWidth={1.8} />,
      title: "Safe & Secure",
      description:
        "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
    },
    {
      icon: <Map size={30} strokeWidth={1.8} />,
      title: "Expert Guides",
      description:
        "Local experts who bring destinations to life with authentic cultural insights.",
    },
    {
      icon: <Headphones size={30} strokeWidth={1.8} />,
      title: "24/7 Support",
      description:
        "Round-the-clock customer service to assist you wherever your journey takes you.",
    },
  ];

  return (
    <section className="bg-[#eaf4f6] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-light text-[#111] tracking-tight">
            Why Choose Wanderlust
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-500">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white px-7 py-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-[#14a3d3] mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-light text-[#111] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-500 leading-7 text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}