import React from "react";
import { motion } from "framer-motion";
import { MdHomeWork, MdHotel, MdPerson } from "react-icons/md";

const clientSegments = [
  {
    title: "For Developers & Builders",
    subtitle: "STR-Ready Inventory, Built for Performance",
    icon: <MdHomeWork size={36} />,
    image: "/images/building.jpg",
    points: [
      "Floor plan consultation for STR functionality",
      "Furnishing + interior design partnerships",
      "Onboarding multiple units into a performance-ready ecosystem",
      "Compliance consulting (fire safety, STR legality, etc.)",
    ],
    align: "left",
  },
  {
    title: "For Boutique Hotels & Hospitality Businesses",
    subtitle: "Modernize Operations. Boost Occupancy. Improve Visibility.",
    icon: <MdHotel size={36} />,
    image: "/images/room.jpg",
    points: [
      "OTA account setup (Booking.com, Agoda, Airbnb, Google Hotels)",
      "Rate management & channel syncing",
      "Direct booking support",
      "Reputation & social media refresh",
      "Off-season packages and discount automation",
      "Tech adoption for modern guest experience",
    ],
    align: "right",
  },
  {
    title: "For Individual Owners & Airbnb Hosts",
    subtitle: "From First Listing to Fully Booked",
    icon: <MdPerson size={36} />,
    image: "/images/agent.jpg",
    points: [
      "Soft furnishing upgrade assistance",
      "STR compliance & platform policies navigation",
      "Income forecast modeling before launch",
      "Scaling support: from one unit to multi-property portfolios",
    ],
    align: "left",
  },
];

const ClientSegments = () => {
  return (
    <section className="bg-[#eadbce] py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#222]">
          Tailored for Every Owner Type
        </h2>

        <div className="space-y-20">
          {clientSegments.map((segment, index) => {
            const isRight = segment.align === "right";
            return (
              <motion.div
                key={index}
                className={`flex flex-col-reverse lg:flex-row ${
                  isRight ? "lg:flex-row-reverse" : ""
                } items-center gap-10`}
                initial={{ opacity: 0, x: isRight ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 text-[#771f28] mb-3">
                    {segment.icon}
                    <h3 className="text-xl font-semibold">{segment.title}</h3>
                  </div>
                  <h4 className="text-md font-medium text-gray-800 mb-2">
                    {segment.subtitle}
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {segment.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="lg:w-1/2">
                  <motion.img
                    src={segment.image}
                    alt={segment.title}
                    className="rounded-xl w-full h-[300px] object-cover shadow-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientSegments;
