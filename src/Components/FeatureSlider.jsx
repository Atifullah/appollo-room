import React, { useRef } from "react";
import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import { useEffect } from "react";

const FeatureSlider = () => {
  const slides = [
    {
      id: 1,
      img: "https://hously-react.vercel.app/static/media/01.6ac85de7298319b1f8d5.jpg",
      personName: "Ali R.",
      job: "Bahria Heights Owner",
      text: "“ We listed our apartment through Apollo Rooms and started getting bookings in just days. Best decisionI made as a landlord.”",
    },
    {
      id: 2,
      img: "https://hously-react.vercel.app/static/media/04.35463172278c4051b5f4.jpg",
      personName: "Summit Hotel GM",
      job: "Gm",
      text: "“Our off-season bookings increased over 40% after they optimized our listings and guest experience.”",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 2500;
  const timeoutRef = useRef(null);

  const resetTimeOut = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => {
    resetTimeOut();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeOut();
    };
  }, [currentIndex]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div ref={timeoutRef} className="flex justify-center relative mt-16">
        <div className="relative lg:w-1/3 md:w-1/2 w-full transition-all">
          <div className="absolute -top-20 md:-start-20 -start-0">
            <i className="text-7xl opacity-5">
              <FaQuoteLeft className="dark:text-white dark:opacity-4" />
            </i>
          </div>
          <div className="absolute bottom-24 md:-end-20 md:bottom-15 -end-0">
            <i className=" text-7xl opacity-5">
              <FaQuoteRight className="dark:text-white dark:opacity-4" />
            </i>
          </div>
          <div className="text-center">
            <p className="text-xl text-slate-400 h-[110px] italic">
              {slides[currentIndex].text}
            </p>
            <div className="text-center mt-5 ">
              <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                <li className="inline-flex ms-1">
                  <AiFillStar />
                </li>
                <li className="inline-flex ms-1">
                  <AiFillStar />
                </li>
                <li className="inline-flex ms-1">
                  <AiFillStar />
                </li>
                <li className="inline-flex ms-1">
                  <AiFillStar />
                </li>
                <li className="inline-flex ms-1">
                  <AiFillStar />
                </li>
              </ul>
              {/* <div
                style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
                className="  bg-center bg-cover duration-500 h-14 w-14 rounded-full shadow-md  mx-auto"
              ></div> */}
              <h6 className="mt-4 lg:mt-2 fw-semibold dark:text-white">
                {slides[currentIndex].personName}
              </h6>
              <span className="text-slate-400 text-sm">
                {slides[currentIndex].job}
              </span>
            </div>
          </div>
          <ul className=" flex flex-row justify-center mt-10">
            {slides.map((slide, slideIndex) => (
              <li
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer inline-flex    "
              >
                <a>
                  <RxDotFilled className=" text-lg text-slate-300 " />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FeatureSlider;
