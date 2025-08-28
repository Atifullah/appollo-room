import React, { useState } from "react";
import { LuHexagon } from "react-icons/lu";
import { Icon } from "@iconify/react";

const HowItWorks = () => {
  const [workItems, setWorkItems] = useState([
    {
      id: 1,
      name: "Property Setup & Styling",
      desc: "Interior improvements that increase reviews and nightly rates",
      icon: "uil:home-alt",
    },
    {
      id: 2,
      name: "OTA Listing Creation",
      desc: "Optimized listings on Airbnb, Booking.com, and Agoda",
      icon: "uil:web-grid",
    },
    {
      id: 3,
      name: "Dynamic Pricing",
      desc: "Smart tools to boost revenue year-round",
      icon: "uil:chart-line",
    },
    {
      id: 4,
      name: "24/7 Guest Communications",
      desc: "Fast replies = higher rankings and better reviews",
      icon: "uil:comment-message",
    },
    {
      id: 5,
      name: "Cleaning & Maintenance",
      desc: "Reliable operations and restocking",
      icon: "uil:brush-alt",
    },
    {
      id: 6,
      name: "Real-Time Dashboards & Reports",
      desc: "Stay in control, anytime, anywhere",
      icon: "uil:analytics",
    },
  ]);
  return (
    <div className="container-2xl  dark:bg-slate-900 p-[20px] bg-[#eadbce]">
      <div className="flex-center-center flex-col pb-8">
        <h1 className="sub-header  dark:text-white">
          Full-Service Vacation Rental Management
        </h1>
        <h3 className="text-xl">
          We don’t just manage short-term rentals—we build them for long-term
          profit.
        </h3>
        <p className="paragraph">
          Apollo Rooms offers turnkey Airbnb management services tailored to
          property owners and hotels who want better returns without the stress
          of day-to-day hosting.
        </p>
      </div>

      <div className="grid-layout-3 mt-8">
        {workItems?.map((item) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
