import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiDribbble } from "react-icons/fi";
import { AiOutlineBehance } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { AiOutlineCopyright } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { Icon } from "@iconify/react";

const Footer = () => {
  const scrollYHandler = () => {
    window.scroll(0, 0);
  };

  // const socialIcons = [
  //   {
  //     id:1,
  //     icon: 'AiOutlineShoppingCart'
  //   },
  //   {
  //     id:2,
  //     icon: 'FiDribbble'
  //   },
  //   {
  //     id:3,
  //     icon: 'AiOutlineBehance'
  //   },
  //   {
  //     id:4,
  //     icon: 'FiLinkedin'
  //   },
  //   {
  //     id:5,
  //     icon: 'FiFacebook'
  //   },
  //   {
  //     id:6,
  //     icon: 'FiInstagram'
  //   },
  //   {
  //     id:7,
  //     icon: 'FiTwitter'
  //   },
  //   {
  //     id:8,
  //     icon: 'FiMail'
  //   }];
  //   console.log(socialIcons)

  return (
    <div className=" container-fluid bg-slate-900 dark:bg-slate-800 px-3 lg:px-[18rem] mt-24">
      <div className=" container mx-auto relative">
        {/* Subscribe Section Start*/}

        <div className="container mx-auto absolute top-[-120px] left-0 my-10 overflow-hidden bg-white dark:drop-shadow-[0_10px_10px_rgba(2555,255,255,0.25)] drop-shadow-[0_30px_30px_rgba(0,0,0,0.25)] rounded-xl dark:bg-slate-900 ">
          <div className="flex flex-col lg:flex-row gap-3 p-10 justify-between items-center relative z-30 shadow-lg ">
            <div>
              <h1 className="text-black text-center lg:text-left text-2xl md:text-3xl font-semibold mb-3 dark:text-white">
                Subscribe to Newsletter!
              </h1>
              <p className=" text-center lg:text-left text-slate-400 mb-3">
                Subscribe to get latest updates and information.
              </p>
            </div>
            <div className="flex gap-3 border-2 pl-3 border-slate-200 dark:border-slate-50 rounded-full lg:w-[500px] overflow-hidden">
              <input
                type="text"
                placeholder="Enter your email:"
                className="  px-3 py-2 w-full focus:border-none focus:outline-none text-black dark:bg-slate-900 dark:text-white"
              />
              <button className=" p-2 w-[150px] fs-[17px] leading-[24px] text-white bg-[#771f28] hover:bg-[#138a3f] border rounded-full">
                Subscribe
              </button>
            </div>
          </div>
          {/*for desktop view */}
          <div className=" hidden lg:inline-block  absolute left-[-20px] top-[-5px] w-full z-10">
            <div className=" flex justify-between items-center relative">
              <FiMail
                className=" rotate-[-45deg]  text-gray-100 dark:text-slate-700	"
                size={"9rem"}
              />
              <BsPencil
                className=" top-[-50px]  text-gray-100 dark:text-slate-700	"
                size={"9rem"}
              />
            </div>
          </div>

          {/*for mobile view*/}
          <div className=" lg:hidden absolute rotate-[25deg] md:rotate-[15deg] top-12 right-0 md:top-7 md:left-0 w-full -z-10">
            <div className=" flex justify-between items-center ">
              <FiMail
                className=" rotate-[-50deg] text-gray-100 dark:text-slate-700		"
                size={"9rem"}
              />
              <BsPencil
                size={"9rem"}
                className=" rotate-[-20deg] text-gray-100 dark:text-slate-700		"
              />
            </div>
          </div>
        </div>
        {/* Subscribe Section End*/}
        {/* Footer Section Start*/}
        <div className=" flex flex-col lg:flex-row justify-between pb-9 pt-52 px-3 lg:pt-36 mb-3 lg:px-2">
          <div className=" basis-4/12 mb-5">
            <div className=" mb-4">
              <Link to="/">
                <img
                  src="/images/logo-nobg.png"
                  alt="Logo"
                  height="40"
                  className="block dark:hidden"
                />
                <img
                  src="/images/logo-nobg.png"
                  alt="Logo Dark"
                  height="40"
                  className="hidden dark:block"
                />
              </Link>
            </div>
            <p className=" text-gray-300">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
          </div>

          <div className=" basis-4/12 flex flex-col lg:flex-row justify-evenly items-start mb-3">
            <div className=" mb-5">
              <p className=" text-white mb-3 text-md font-semibold">Company</p>
              <ul className=" text-slate-400">
                <Link to={"/"}>
                  <li
                    onClick={scrollYHandler}
                    className=" flex justify-start items-center mb-2 hover:text-[#eadbce]"
                  >
                    <IoIosArrowForward className="mr-3" />
                    Home
                  </li>
                </Link>
                <Link to={"/aboutus"}>
                  <li
                    onClick={scrollYHandler}
                    className=" flex justify-start items-center mb-2 hover:text-[#eadbce]"
                  >
                    <IoIosArrowForward className="mr-3" />
                    About us
                  </li>
                </Link>
                <Link to={"/Services"}>
                  <li
                    onClick={scrollYHandler}
                    className=" flex justify-start items-center mb-2 hover:text-[#eadbce]"
                  >
                    <IoIosArrowForward className="mr-3" />
                    Services
                  </li>
                </Link>
              </ul>
            </div>
            <div className=" mb-3">
              <p className=" text-white mb-3 text-md font-semibold">
                Useful Links
              </p>
              <ul className=" text-gray-300">
                <Link to={"/property"}>
                  <li
                    onClick={scrollYHandler}
                    className=" flex justify-start items-center mb-2 hover:text-[#eadbce]"
                  >
                    <IoIosArrowForward className="mr-3" />
                    Properties
                  </li>
                </Link>
                <Link to={"/"}>
                  <li
                    onClick={scrollYHandler}
                    className=" flex justify-start items-center mb-2 hover:text-[#eadbce]"
                  >
                    <IoIosArrowForward className="mr-3" />
                    Login
                  </li>
                </Link>
                <Link to={"/contact"}>
                  <li
                    onClick={scrollYHandler}
                    className=" flex justify-start items-center mb-2 hover:text-[#eadbce]"
                  >
                    <IoIosArrowForward className="mr-3" />
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className=" basis-3/12 fs-[17px] mb-3">
            <p className=" text-white mb-3 text-md font-semibold">
              Contact Details
            </p>
            <div>
              <div className=" mb-3 flex justify-start item-start">
                <Icon
                  icon="uil:map-marker"
                  className="text-[#eadbce] text-2xl"
                />
                <div className=" flex flex-col">
                  <p className="text-gray-300 mb-2 ml-3">
                    C/54 Northwest Freeway,
                    <br />
                    Suite 558,Houston,
                    <br />
                    USA 485
                  </p>
                </div>
              </div>
              <div className=" mb-3 flex justify-start item-center">
                <Icon icon="uil:phone" className="text-[#eadbce] text-2xl" />
                <p className=" text-gray-300 mb-3 ml-5">
                  hello@apollorooms.com
                </p>
              </div>
              <div className=" mb-3 flex justify-start item-center">
                <Icon icon="uil:envelope" className="text-[#eadbce] text-2xl" />
                <p className=" text-gray-300 mb-3 ml-5">+152-532-468-854</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="border-t border-gray-800 dark:border-gray-700">
          <div className=" flex flex-col lg:flex-row justify-between items-center py-5 gap-3 ">
            <span className=" text-gray-300 flex justify-start items-start">
              <AiOutlineCopyright className=" lg:mr-2" />
              <span>2023 Hously. Design & Develop with</span>
              <AiTwotoneHeart className="lg:mx-2" color="red" />
              <span>by Team-F.</span>
            </span>
            <div className=" basis-4/12">
              <Link to={""}>
                <button className="mx-1 p-1 fs-[17px] leading-[24px] text-slate-400 hover:text-white border border-gray-800 dark:border-gray-700  hover:bg-[#138a3f] rounded-lg myFooterBtn">
                  <AiOutlineShoppingCart size={20} />
                </button>
              </Link>

              <Link to={""}>
                <button className="mx-1 p-1 fs-[17px] leading-[24px] text-slate-400 hover:text-white border border-gray-800 dark:border-gray-700  hover:bg-[#138a3f] rounded-lg myFooterBtn">
                  <FiDribbble size={20} />
                </button>
              </Link>

              <Link to={""}>
                <button className="mx-1 p-1 fs-[17px] leading-[24px] text-slate-400 hover:text-white border border-gray-800 dark:border-gray-700  hover:bg-[#138a3f] rounded-lg myFooterBtn">
                  <AiOutlineBehance size={20} />
                </button>
              </Link>

              <Link to={""}>
                <button className="mx-1 p-1 fs-[17px] leading-[24px] text-slate-400 hover:text-white border border-gray-800 dark:border-gray-700  hover:bg-[#138a3f] rounded-lg myFooterBtn">
                  <FiLinkedin size={20} />
                </button>
              </Link>

              <Link to={""}>
                <button className="mx-1 p-1 fs-[17px] leading-[24px] text-slate-400 hover:text-white border border-gray-800 dark:border-gray-700  hover:bg-[#138a3f] rounded-lg myFooterBtn">
                  <FiFacebook size={20} />
                </button>
              </Link>

              <Link to={""}>
                <button className="mx-1 p-1 fs-[17px] leading-[24px] text-slate-400 hover:text-white border border-gray-800 dark:border-gray-700  hover:bg-[#138a3f] rounded-lg myFooterBtn">
                  <FiInstagram size={20} />
                </button>
              </Link>

              <Link to={""}>
                <button className="mx-1 p-1 fs-[17px] leading-[24px] text-slate-400 hover:text-white border border-gray-800 dark:border-gray-700  hover:bg-[#138a3f] rounded-lg myFooterBtn">
                  <FiTwitter size={20} />
                </button>
              </Link>

              <Link to={""}>
                <button className="mx-1 p-1 fs-[17px] leading-[24px] text-slate-400 hover:text-white border border-gray-800 dark:border-gray-700  hover:bg-[#138a3f] rounded-lg myFooterBtn">
                  <FiMail size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div> */}

        {/* Footer Section End*/}
      </div>
    </div>
  );
};

export default Footer;
