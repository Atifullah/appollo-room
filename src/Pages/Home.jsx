import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";
import { BsPlayFill, BsTelephone } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import FeatureSlider from "../Components/FeatureSlider";
import ClientLogosSlider from "../Components/ClientLogosSlider";
import PropertiesSection from "../Components/PropertiesSection";
import HowItWorks from "../Components/HowItWorks";
import FeatureProperties from "../Components/FeatureProperties";
import GetInTouch from "../Components/GetInTouch";
import { useLocation, useNavigate } from "react-router-dom";
import WhyChooseSlider from "../Components/WhyChooseSlider";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

// ✅ Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  return (
    <>
      <div className="container-fluid dark:bg-slate-900">
        {/* Hero Section */}
        <div
          className="relative container-fluid lg:h-screen pb-30"
          style={{
            backgroundImage: "url('/images/nathia.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative container-2xl mx-auto flex flex-col lg:flex-row justify-between items-center h-fit md:h-screen mb-10 pt-32 lg:pt-10">
            <div className="basis-5/12 my-10">
              <div className="px-2">
                <h1 className="text-3xl font-extrabold text-white leading-[40px] mb-4 text-center lg:text-left">
                  Maximize Your Rental Income with{" "}
                  <span className="text-[#771F28]">Expert Airbnb <br /></span>
                  Property Management <br />
                </h1>
                <p className="text-slate-200 mb-8 font-[17px] tracking-wide text-center lg:text-left">
                  Apollo Rooms is Pakistan’s trusted short-term rental
                  management company. We help real estate owners, investors, and
                  boutique hotels turn furnished properties into high-performing
                  listings on Airbnb, Booking.com, and other vacation rental
                  platforms.
                </p>
              </div>
              <button
                className="btn flex-center-center gap-2 px-7 py-2 mt-6"
                onClick={() => navigate("/contact")}
              >
                Get a Free Property Evaluation
              </button>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <HowItWorks />

        {/* ✅ Swiper Section - Static Images */}
        <div className="container mx-auto my-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="rounded-lg overflow-hidden"
          >
            <SwiperSlide>
              <img src="/images/ng_1.webp" alt="Slide 1" className="w-full h-[600px] object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/ng_2.webp" alt="Slide 2" className="w-full h-[600px] object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/ng_3.webp" alt="Slide 3" className="w-full h-[600px] object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/ng_4.jpeg" alt="Slide 2" className="w-full h-[600px] object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/ng_5.jpeg" alt="Slide 3" className="w-full h-[600px] object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/ng_6.webp" alt="Slide 2" className="w-full h-[600px] object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/ng_7.jpg" alt="Slide 3" className="w-full h-[600px] object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* 🔹 Feature Properties */}
        <div id="listing-properties">
          {loading ? (
            <p className="text-center text-gray-500">Loading properties...</p>
          ) : (
            <FeatureProperties properties={properties} />
          )}
        </div>

        {/* Other sections */}
        <div className="my-[20px]">
          <WhyChooseSlider />
          <PropertiesSection />
        </div>

        <div className="container lg:mt-24 mt-16 mx-auto">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl text-2xl text-black dark:text-white font-semibold">
              What Our Client Say ?
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              The Best Airbnb Management in Pakistan
            </p>
          </div>
          <FeatureSlider />
          <ClientLogosSlider />
        </div>

        <div className="pb-16 md:pb-24">
          <GetInTouch />
        </div>
      </div>
    </>
  );
};

export default Home;
