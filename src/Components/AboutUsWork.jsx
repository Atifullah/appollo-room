import React, { useState } from "react";
import { LuHexagon } from "react-icons/lu";
import { Icon } from "@iconify/react";

const AboutUsWork = () => {
  const [workItems, setWorkItems] = useState([
    {
      id: 1,
      name: "Listing Optimization",
      desc: "Airbnb and OTA listing creation & optimization",
      icon: "mdi:home-analytics",
    },
    {
      id: 2,
      name: "Photography & Staging",
      desc: "Boost visibility and bookings with professional visuals",
      icon: "mdi:camera-enhance",
    },
    {
      id: 3,
      name: "Dynamic Pricing",
      desc: "Smart pricing powered by dynamic tools",
      icon: "mdi:cash-multiple",
    },
    {
      id: 4,
      name: "24/7 Guest Support",
      desc: "Guest communication & 24/7 support",
      icon: "mdi:headset",
    },
    {
      id: 5,
      name: "Cleaning & Maintenance",
      desc: "Cleaning, restocking, and maintenance scheduling",
      icon: "mdi:broom",
    },
    {
      id: 6,
      name: "Owner Dashboard & Reports",
      desc: "Monthly reporting with full transparency",
      icon: "mdi:chart-box-outline",
    },
  ]);

  return (
    <div className="container-2xl mt-16 lg:mt-24 dark:bg-slate-900 ">
      <div className="flex-center-center flex-col pb-8">
        <h1 className="sub-header dark:text-white">What We Deliver</h1>
        <h3 className="text-xl">
          Our full-service STR management includes everything you need to
          succeed:
        </h3>
      </div>

      <div className="grid-layout-3 mt-8">
        {workItems?.map((item) => (
          <div className="lg:px-8" key={item.id}>
            <div className="relative">
              <LuHexagon className="w-32 h-32 text-[#f3faf6] mx-auto dark:text-slate-900 fill-[#f3faf6] dark:fill-[#0F1e2c]" />
              <div className="absolute center-h-v">
                <Icon
                  icon={item.icon}
                  className="text-4xl"
                  style={{ color: "#771f28" }}
                />
              </div>
            </div>
            <div className="mt-6">
              <h2 className="sub-header-2 text-center dark:text-white">
                {item.name}
              </h2>
              <p className="paragraph mt-3">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsWork;
