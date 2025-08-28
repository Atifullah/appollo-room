import React, { useState } from "react";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { BsStarFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { RxHeart, RxHeartFilled } from "react-icons/rx";
import PlaceholderImage from "../../public/images/blurImg.png";
import { Link } from "react-router-dom";

const FeatureProperties = ({ properties }) => {
  console.log(properties, "all propeties");
  return (
    <div
      className="container-2xl mt-16 lg:mt-24 dark:bg-slate-900"
      id="listing-properties"
    >
      <div className="flex-center-center flex-col pb-8">
        <h1 className="sub-header dark:text-white">Featured Properties</h1>
        <p className="paragraph">
          Partner with Apollo Rooms—Pakistan’s premium short-term rental and
          Airbnb management agency. We help you attract guests, manage
          operations, and maximize profit from your property.
        </p>
      </div>
      {/* cards */}
      <div className="grid-layout-3 mt-8">
        {properties.map((property) => {
          const [heartFill, setHeartFill] = useState(false); // Per-property state
          const baseUrl = "https://booking.dynumtech.com/"; // Adjust if needed
          const imageSrc = property.images
            ? `${baseUrl}${property.images}`
            : PlaceholderImage;
          console.log(imageSrc, "image url qwertyui");
          return (
            /* card */
            <div
              className="shadow rounded-xl overflow-hidden card-hover dark:bg-slate-900 dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700"
              key={property.id}
            >
              <div className="relative">
                <LazyLoadImage
                  src={imageSrc}
                  height={236}
                  placeholderSrc={PlaceholderImage}
                />
                <div className="absolute top-4 end-4">
                  <div className="w-10 h-10 bg-white rounded-full cursor-pointer flex-center-center dark:bg-slate-900 dark:shadow-gray-700">
                    <button onClick={() => setHeartFill(!heartFill)}>
                      {heartFill ? (
                        <RxHeartFilled size={20} className="text-red-600" />
                      ) : (
                        <RxHeart
                          size={20}
                          className="text-slate-100 hover:text-red-600 dark:text-slate-700 dark:hover:text-red-700"
                        />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <Link to={`/detail/${property.id}`}>
                    <h2 className="h2 cursor-pointer hover:text-green-600 duration-500 ease-in-out inline-block dark:text-white">
                      {property.title}
                    </h2>
                  </Link>
                </div>
                <div className="border-y border-slate-100 dark:border-gray-800 py-6 mb-6">
                  <div className="flex-between-center">
                    <div className="flex-center-center gap-2 dark:text-white">
                      <FaCompressArrowsAlt className="icon-color text-[#771f28]" />
                      {property.sqft || "N/A"} sqft{" "}
                      {/* API doesn't have sqft; add if available */}
                    </div>
                    <div className="flex-center-center gap-2 dark:text-white">
                      <IoBedOutline className="icon-color" />
                      {property.rooms} Beds
                    </div>
                    <div className="flex-center-center gap-2 dark:text-white">
                      <LuBath className="icon-color text-[#771f28]" />
                      {property.baths || "N/A"} Baths{" "}
                      {/* API doesn't have baths; add if available */}
                    </div>
                  </div>
                </div>
                <div className="flex-between-center text-slate-400">
                  <div className="">
                    <div className="">
                      <p>Price per Night</p>
                      <p className="text-black font dark:text-white">
                        ${property.price_per_night}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <p>Rating</p>
                    <div className="flex-center-center gap-2">
                      {[...Array(5)].map((x, i) => (
                        <BsStarFill key={i} className="text-amber-400" />
                      ))}
                      <p className="text-black font mt-1 dark:text-white">
                        5(30){" "}
                        {/* Make dynamic if rating data is added to API */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureProperties;
