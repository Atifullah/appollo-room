import React, { useEffect, useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import GetInTouch from "../Components/GetInTouch";
import AboutUsWork from "../Components/AboutUsWork";
import WhereWeOperate from "../Components/WhereWeOperate";
import ClientLogosSlider from "../Components/ClientLogosSlider";
import { motion } from "framer-motion";

const About = () => {
  const slides = [
    {
      id: 1,
      img: "https://hously-react.vercel.app/static/media/01.6ac85de7298319b1f8d5.jpg",
      personName: "Multi-Unit",
      job: "US-Based Owner, Multi-Unit Portfolio",
      text: " Apollo Rooms took over our Airbnb listings and within weeks, we were seeing stronger bookings and less hassle ",
    },
    {
      id: 2,
      img: "https://hously-react.vercel.app/static/media/04.35463172278c4051b5f4.jpg",
      personName: "ManResort Partner",
      job: "ManResort Partner, Southeast Asia",
      text: "Our boutique property is now generating bookings even in low season, thanks to their pricing strategy and guest support",
    },
  ];

  const [showIframe, setShowIframe] = useState(false);
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1)); //0 === 4-1 ? 0 : 0+1 //1
  };

  const [autoSlide, setAutoSlide] = useState(true);
  const autoSlideInterval = 3000;

  useEffect(() => {
    if (!autoSlide) {
      return;
    } else {
      const slideInterval = setInterval(next, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, []);

  const goToSlide = (slideIndex) => {
    setCurrent(slideIndex);
  };

  console.log(autoSlide);
  console.log(current);

  return (
    <section className=" pb-16 md:pb-24 dark:bg-slate-900">
      <div className="mt-[70px] dark:bg-slate-900">
        {/*  hero section */}
        <div className="hero-img">
          <div className="bg-dark-opacity"></div>
          <div className="relative">
            <div
              className="flex-center-center h-[378px] bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/hotel-3.jpg')",
                width: "100%",
              }}
            >
              <h2 className="header">about us</h2>
            </div>
          </div>
        </div>
        {/* custom shape */}
        <div className="custom-shape-divider-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className=" fill-[#fff] dark:fill-slate-900"
            ></path>
          </svg>
        </div>
      </div>

      {/* Who We Are Section */}

      <section className=" py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#000] mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              <span className="font-semibold text-[#771f28]">
                Apollo Rooms is a global short-term rental management company
              </span>
              <br />
              that helps property owners, real estate investors, and boutique
              hotels unlock the full income potential of their spaces. We
              specialize in transforming furnished apartments, villas, and
              hotels into high-performing Airbnb and vacation rental
              listings—while managing every detail behind the scenes. From setup
              to check-out, we handle it all.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#000] mb-4">
              What We Stand For
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              We believe great properties deserve better performance—and that
              passive income from real estate should actually be passive. That’s
              why we offer
              <span className="font-semibold text-[#771f28]">
                {" "}
                end-to-end vacation rental management{" "}
              </span>
              designed to maximize returns with minimal effort from you. Whether
              you manage a single property or an entire portfolio, Apollo Rooms
              becomes your trusted partner for strategy, operations, and growth.
            </p>
          </motion.div>
        </div>
      </section>

      <div className={` ${showIframe ? "" : "hidden"} z-50 `}>
        <div
          className={`absolute inset-0 bg-black opacity-60 w-screen h-[2500px] xl:h-[5000px] z-20`}
        ></div>
      </div>

      {/* Efficiency Section End*/}

      {/* how it works */}
      <AboutUsWork />

      {/* what our client say */}
      <div className="container-2xl mt-16 lg:mt-24  dark:bg-slate-900 bg-[#eadbce] p-[20px]">
        <div className="flex-center-center flex-col">
          <h1 className="sub-header  dark:text-white">What Our Client Say ?</h1>
          <p className="paragraph">
            A great platform to buy, sell and rent your properties without any
            agent or commissions.
          </p>
        </div>

        <div className="flex-center-center mt-8">
          <div className="relative lg:w-1/3 md:w-1/2 w-full">
            {" "}
            {/* max-w-lg w-400*/}
            <div className="">
              {" "}
              {/* tiny-single-item */}
              <div className=" overflow-hidden">
                <div className="text-center">
                  <p className="text-xl text-slate-400 h-[110px] italic">
                    {` " ` + slides[current].text + ` " `}
                  </p>
                  <div className="text-center mt-5">
                    <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                      {[...Array(5)].map((_, index) => (
                        <li className="inline-flex ms-1" key={index}>
                          <AiFillStar />
                        </li>
                      ))}
                    </ul>
                    {/* <div
                      style={{ backgroundImage: `url(${slides[current].img})` }}
                      className="  bg-center bg-cover transition-transform ease-out duration-500 h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto"
                    ></div> */}
                    {/* <h6 className="mt-4 lg:mt-2 fw-semibold dark:text-white">
                      {slides[current].personName}
                    </h6> */}
                    <span className="text-slate-400 text-sm">
                      {slides[current].job}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-center-center mt-5">
                <div className="flex-center-center gap-2">
                  {slides.map((_, i) => {
                    return (
                      <div
                        onClick={() => goToSlide(i)}
                        className={` transition-all w-1 h-1 bg-green-600 rounded-full cursor-pointer ${
                          current === i ? "p-[5px]" : " bg-opacity-50"
                        }
                                `}
                        key={i}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhereWeOperate />
      <ClientLogosSlider />

      {/* get in touch */}
      <GetInTouch />
    </section>
  );
};

export default About;
