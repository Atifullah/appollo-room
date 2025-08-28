import React from "react";
import { BsTelephone } from "react-icons/bs";
import FeatureGrids from "../Components/FeatureGrids";
import FeatureSlider from "../Components/FeatureSlider";
import { Link } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";
import ServiceSteps from "../Components/ServiceSteps";
import ClientSegments from "../Components/ClientSegments";
import GetInTouch from "../Components/GetInTouch";

const scrollYHandler = () => {
  window.scroll(0, 0);
};

const Features = () => {
  return (
    <div className=" mt-[70px] dark:bg-slate-900">
      <div
        className="relative bgTop table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover "
        style={{
          backgroundImage: "url('/images/hotel-3.jpg')",
          width: "100%",
        }}
      >
        <div className="absolute inset-0  opacity-80 dark:bg-slate-900 bg-no-repeat object-cover bg-center"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white z-50">
              Services / Features
            </h3>
          </div>
        </div>
      </div>
      <div className="relative lg:py-24 pt-16 pb-32 lg:pb-44 dark:bg-slate-900">
        {/* <FeatureGrids /> */}
        <div className="container-fluid h-fit">
          <div className="container-2xl  mx-auto relative flex flex-col lg:flex-row justify-between items-center py-10 lg:my-20  dark:bg-slate-900  lg:px-62">
            <div className=" basis-5/12 relative mb-5">
              <div className=" relative ">
                <img
                  className=" rounded-xl w-full h-[400px] lg:h-[550px]"
                  src="/images/aboutImage.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className=" basis-6/12 mb-5 my-10 px-4">
              <div className="">
                <h1 className=" text-2xl md:text-3xl mb-3 text-black dark:text-white font-medium">
                  We Turn Real Estate Into High-Performing Hospitality Assets
                </h1>
                <p className=" text-slate-400 mb-3">
                  Apollo Rooms delivers full-spectrum property management for
                  Airbnb, Booking.com, and vacation rental platforms. From
                  design and renovation to dynamic pricing, guest services, and
                  real-time reporting—we do it all, so you don’t have to.
                  Whether you own a furnished apartment, a boutique hotel, or an
                  entire STR portfolio, our turnkey systems ensure maximum ROI
                  with zero hassle.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ServiceSteps />
        <ClientSegments />

        <div className="container lg:mt-24 mt-16 mx-auto px-4">
          <GetInTouch />
        </div>
      </div>
    </div>
  );
};

export default Features;
