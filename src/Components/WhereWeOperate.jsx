import React from "react";
import { motion } from "framer-motion";

const locationData = [
  {
    emoji: "🌆",
    label: "Cities",
    desc: "Islamabad, Lahore, Dubai, London, Kuala Lumpur",
  },
  {
    emoji: "🌲",
    label: "Retreats",
    desc: "Murree, Galiyat, Bali, Goa",
  },
  {
    emoji: "🏙",
    label: "Expanding",
    desc: "Rapidly growing across Europe, Gulf, and Southeast Asia",
  },
];

const WhereWeOperate = () => {
  return (
    <section className="bg-[#eadbce] py-20 px-4">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-[#000] mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          📍 Where We Operate
        </motion.h2>
        <motion.p
          className="text-gray-700 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Apollo Rooms manages properties across urban hubs, resort towns, and
          emerging STR markets worldwide.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {locationData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h3 className="text-xl font-semibold text-[#771f28] mb-2">
                {item.label}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereWeOperate;
