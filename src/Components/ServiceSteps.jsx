import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaClock, FaChartLine } from "react-icons/fa";

const coreSteps = [
  {
    id: 1,
    title: "Setup & Launch",
    subtitle: "Design-Driven Onboarding for Better Visibility and Reviews",
    desc: `We transform underperforming or new spaces into optimized, OTA-ready listings through a design-first, guest-focused setup process.`,
    points: [
      "STR-specific design & furnishing consultancy",
      "Renovation coordination (where needed)",
      "Professional photography",
      "SEO-rich Airbnb, Booking.com, and Google listings",
      "Multi-platform syncing with Guesty, Hostaway, etc.",
      "OTA optimization: tags, titles, and calendar setup",
      "Tech integration (e.g., smart locks, dynamic pricing tools)",
    ],
    icon: <FaTools size={30} />,
  },
  {
    id: 2,
    title: "Full-Service Daily Operations",
    subtitle: "You Earn. We Operate.",
    desc: `From the first inquiry to the final review, we run your property like a business.`,
    points: [
      "24/7 guest communication & inquiry response",
      "Reservation management across platforms",
      "Cleaning, turnover coordination & restocking",
      "Maintenance & repairs via local vendors",
      "Keyless check-in setup",
      "Reputation & review management",
      "House rules enforcement and guest screening",
    ],
    icon: <FaClock size={30} />,
  },
  {
    id: 3,
    title: "Revenue Management & Reporting",
    subtitle: "Make Smarter Decisions With Real-Time Insights",
    desc: `We don't guess—we price, perform, and report.`,
    points: [
      "Dynamic pricing using PriceLabs/Wheelhouse",
      "Seasonal and off-season strategy",
      "Yield optimization across platforms",
      "Owner dashboard with real-time reporting",
      "Monthly earnings summaries",
      "Tax-ready accounting via QuickBooks/Xero",
    ],
    icon: <FaChartLine size={30} />,
  },
];

const ServiceSteps = () => {
  return (
    <section className="bg-[#eadbce] py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#222]">
          Our Core Service Stack
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          We turn passive listings into premium guest experiences—while you sit
          back and earn.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3 text-[#771f28]">
                {step.icon}
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <h4 className="text-md font-medium text-gray-800 mb-2">
                {step.subtitle}
              </h4>
              <p className="text-gray-600 text-sm mb-4">{step.desc}</p>
              <ul className="text-left space-y-1 text-gray-700 text-sm">
                {step.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="before:content-['✓'] before:mr-2 before:text-green-600"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSteps;
