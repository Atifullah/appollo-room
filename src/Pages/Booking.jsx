import React, { useEffect, useState, useRef } from "react";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import FeatureProperties from "../Components/FeatureProperties";

const Faqs = () => {
   const [loading, setLoading] = useState(true);
   const [properties, setProperties] = useState([]);
 
   useEffect(() => {
    axios
      .get("https://booking.dynumtech.com/api/fetch-properties")
      .then((res) => {
        console.log("API Response:", res.data);
        setProperties(res.data);
      })
      .catch((err) => {
        console.error("Error fetching properties:", err);
      })
      .finally(() => setLoading(false));
  }, []);
 

  const activeLink = (id) => {
    setLinks(
      links.map((link) => {
        if (link.id === id) {
          link.isActive = !link.isActive;
        } else {
          link.isActive = false;
        }
        return link;
      })
    );
  };

  const scrollYHandler = () => {
    window.scroll(0, 0);
  };

  return (
    <div className=" dark:bg-slate-900 mt-[70px] ">
      <div
        className="relative bgTop table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover "
        style={{
          backgroundImage: "url('/images/hotel-3.jpg')",
          width: "100%",
        }}
      >
        <div className="absolute inset-0 opacity-80 bg-no-repeat "></div>
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 text-center mt-10 ">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white z-50">
              Booking
            </h3>
          </div>
        </div>
      </div>
      <div className="relative lg:py-24 pt-16 pb-32 lg:pb-44 dark:bg-slate-900 mt-10">
         
         {/* 🔹 Feature Properties */}
        <div id="listing-properties">
          {loading ? (
            <p className="text-center text-gray-500">Loading properties...</p>
          ) : (
            <FeatureProperties properties={properties} />
          )}
        </div>
         
      </div>
    </div>
  );
};

export default Faqs;
