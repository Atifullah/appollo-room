import React from "react";
import { motion } from "framer-motion";
import { BsStarFill } from "react-icons/bs";

const benefits = [
  {
    title: "Full-Service Hosting",
    desc: "You get a team that handles everything—setup to check-out.",
  },
  {
    title: "Local Knowledge, Global Tools",
    desc: "We manage pricing and guest behavior with Airbnb best practices.",
  },
  {
    title: "High-Quality Listings",
    desc: "Pro photos, optimized descriptions, and SEO-rich content.",
  },
  {
    title: "Revenue Transparency",
    desc: "View performance data and earnings anytime.",
  },
  {
    title: "Growth Focused",
    desc: "Our systems scale with your portfolio.",
  },
];

const WhyChooseSlider = () => {
  return (
    <section className="bg-[#eadbce] py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#222]">
          Why Choose Apollo Rooms
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-10">
          The Best Airbnb Management in Pakistan
        </p>

        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-6 w-max px-2 animate-slide-scroll">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                className="min-w-[280px] max-w-sm bg-white shadow-lg rounded-xl p-6 text-left hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-3 text-[#771f28] gap-2">
                  <BsStarFill />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSlider;
