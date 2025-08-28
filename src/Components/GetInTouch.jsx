import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const scrollYHandler = () => {
  window.scroll(0, 0);
};

const GetInTouch = () => {
  return (
    <div className="container-2xl mt-16 lg:mt-24 mb-20 dark:bg-slate-900">
      <div className="flex-center-center flex-col">
        <h1 className="sub-header  dark:text-white">
          Want More Bookings and Better ROI?
        </h1>
        <p className="paragraph">
          Whether you're in Islamabad, Rawalpindi, Murree, Lahore, or managing
          properties remotely— Apollo Rooms is your trusted partner for passive
          income through Airbnb.
        </p>
        <NavLink to={"/contact"}>
          <button
            onClick={scrollYHandler}
            className="btn flex-center-center gap-2 px-7 py-2 mt-6"
          >
            <HiOutlinePhone className="xs:mb-[4px] md:mb-1 text-md sm:text-lg" />
            Contact us
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default GetInTouch;
