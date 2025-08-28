import React, { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { BiUpArrowAlt } from "react-icons/bi";

import { Link, NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { addTheme } from "../services/themeSlice";

const Navbar = () => {
  const [showDeskMenu, setShowDeskMenu] = useState(false);
  const [showAni, setShowAni] = useState();
  const [showMenu, setShowMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  const [uparrow, setUparrow] = useState();

  const [theme, setTheme] = useState("light");
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    dispatch(addTheme({ theme: theme }));
    console.log("dispatch", theme);
    const Theme = JSON.parse(Cookies.get("theme"));
    console.log(" After Theme", Theme.theme);

    console.log("Show ani", showAni);
  }, [theme]);

  const changeAni = () => {
    const Theme = JSON.parse(Cookies.get("theme"));
    if (Theme.theme == "light") {
      setShowAni(true);
    } else if (Theme.theme == "dark") {
      setShowAni(false);
    }
  };

  const changeMood = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    const Theme = JSON.parse(Cookies.get("theme"));
    changeAni();
  };

  const changeDark = () => {
    setTheme("dark");
    const Theme = JSON.parse(Cookies.get("theme"));
    console.log("changedark", Theme);
    changeAni();
  };

  const changeLight = () => {
    setTheme("light");
    const Theme = JSON.parse(Cookies.get("theme"));
    console.log("changelight", Theme);
    changeAni();
  };

  /*** 90Yoffset -> change bg color ***/
  const [color, setColor] = useState(false);
  const colorHandler = () => {
    if (window.pageYOffset >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
    if (window.scrollY > 1020) {
      setUparrow(true);
    } else {
      setUparrow(false);
    }
  };
  window.addEventListener("scroll", colorHandler);

  const navActive = "text-green-600 font-bold dark:text-green-600";
  const navNormal = "text-black font-medium dark:text-white";

  const scrollYHandler = () => {
    window.scroll(0, 0);
  };

  return (
    <div>
      <div className="container-fluid h-fit" id="mystart">
        <div
          className={` ${
            color
              ? "container-fluid w-full myGlassBg dark:bg-slate-900 fixed top-0  h-[70px] z-50 nav_color"
              : "container-fluid w-full myGlassBg dark:bg-[#0F262E] fixed top-0  h-[70px] z-50"
          }`}
        >
          <div
            className={`container-2xl lg:mx-auto lg:px-48  py-4 flex justify-between items-center `}
          >
            <div className=" ml-4">
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
            <ul className="hidden md:flex justify-end items-center mr-5 ">
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? navActive : navNormal)}
              >
                <li
                  onClick={scrollYHandler}
                  className=" w-[60px] h-[40px] flex justify-center items-center cursor-pointer"
                >
                  <span className="fs-[17px] hover:text-[#771f28]   dark:hover:text-[#771f28]">
                    Home
                  </span>
                </li>
              </NavLink>
              <NavLink
                to={"/aboutus"}
                className={({ isActive }) => (isActive ? navActive : navNormal)}
              >
                <li
                  onClick={scrollYHandler}
                  className=" w-fit h-[40px] flex justify-center items-center mx-3 cursor-pointer relative myliForDropDown"
                >
                  <span className=" fs-[17px] dark:hover:text-[#771f28] hover:text-[#771f28]">
                    About us
                  </span>
                </li>
              </NavLink>
              {/* <NavLink
                to="/#listing-properties"
                className={({ isActive }) => (isActive ? navActive : navNormal)}
              >
                <li
                  onClick={scrollYHandler}
                  className="w-fit h-[40px] flex justify-center items-center mx-3 cursor-pointer relative myliForDropDown"
                >
                  <span className="fs-[17px] dark:hover:text-[#771f28] hover:text-[#771f28]">
                    Properties
                  </span>
                </li>
              </NavLink> */}
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? navActive : navNormal)}
              >
                <li
                  onClick={scrollYHandler}
                  className="w-fit h-[40px] flex justify-center items-center mx-3 cursor-pointer relative myliForDropDown"
                >
                  <span className="fs-[17px] dark:hover:text-[#771f28] hover:text-[#771f28]">
                    Services
                  </span>
                </li>
              </NavLink>
              <NavLink
                to={"/faqs"}
                className={({ isActive }) => (isActive ? navActive : navNormal)}
              >
                <li
                  onClick={scrollYHandler}
                  className=" w-[60px] h-[40px] flex justify-center items-center mx-3 cursor-pointer"
                >
                  <span className=" fs-[17px] dark:hover:text-[#771f28] hover:text-[#771f28]">
                    FAQ
                  </span>
                </li>
              </NavLink>

              <NavLink
                to={"/contact"}
                className={({ isActive }) => (isActive ? navActive : navNormal)}
              >
                <li
                  onClick={scrollYHandler}
                  className=" w-[60px] h-[40px] flex justify-center items-center mx-3 cursor-pointer"
                >
                  <span className=" fs-[17px] dark:hover:text-[#771f28] hover:text-[#771f28]">
                    Contact
                  </span>
                </li>
              </NavLink>
            </ul>
            {/* Login Icon Section Start*/}

            <div className=" flex justify-end items-start">
              <Link to={"/login"}>
                <button className=" w-10 h-10 p-2 fs-[17px] leading-[24px] border-0 text-white bg-[#771f28] hover:bg-[#138a3f] rounded-full ">
                  <BiUser size={"1.5rem"} />
                </button>
              </Link>
              {/* <Link to={"/signup"}>
                <button className="hidden lg:inline-block w-24 h-10 p-2 fs-[17px] leading-[24px] border-0 text-white bg-[#771f28] hover:bg-[#138a3f] rounded-full mx-1">
                  Sign up
                </button>
              </Link> */}

              <div className=" block md:hidden  myliForDropDown">
                <button
                  onClick={() => setCloseMenu(!closeMenu)}
                  className="w-10 h-30 p-2 leading-[24px] border-0 text-black mx-1 "
                >
                  {closeMenu ? (
                    <AiOutlineClose
                      size={"1rem"}
                      className="text-black dark:text-white"
                    />
                  ) : (
                    <FiMenu
                      size={"1rem"}
                      className="text-black dark:text-white"
                    />
                  )}
                </button>
                <div
                  className={` ${
                    closeMenu ? "block" : "hidden"
                  } bg-white absolute top-[68px] right-0 p-5  rounded-md w-[80%] shadow-xl dark:bg-[#0F172A] `}
                >
                  <ul>
                    <NavLink
                      to={"/"}
                      className={({ isActive }) =>
                        isActive ? navActive : navNormal
                      }
                    >
                      <li
                        onClick={scrollYHandler}
                        className="fs-[17px] hover:text-[#771f28] mb-2"
                      >
                        Home
                      </li>
                    </NavLink>
                    <NavLink
                      to={"/buy"}
                      className={({ isActive }) =>
                        isActive ? navActive : navNormal
                      }
                    >
                      <li
                        onClick={scrollYHandler}
                        className="fs-[17px] hover:text-[#771f28] mb-2"
                      >
                        Buy
                      </li>
                    </NavLink>
                    <NavLink
                      to={"/sell"}
                      className={({ isActive }) =>
                        isActive ? navActive : navNormal
                      }
                    >
                      <li
                        onClick={scrollYHandler}
                        className="fs-[17px] hover:text-[#771f28] mb-2"
                      >
                        Sell
                      </li>
                    </NavLink>
                    <NavLink
                      to={"/aboutus"}
                      className={({ isActive }) =>
                        isActive ? navActive : navNormal
                      }
                    >
                      <li
                        onClick={scrollYHandler}
                        className="fs-[17px] hover:text-[#771f28] mb-2"
                      >
                        About us
                      </li>
                    </NavLink>
                    <div className=" ">
                      <li className="flex justify-between items-center fs-[17px] font-medium hover:text-[#771f28] mb-2 text-black dark:text-white">
                        Pages
                        {showMenu ? (
                          <BsChevronUp
                            onClick={() => setShowMenu(false)}
                            className="text-black dark:text-white font-medium"
                            size={"1rem"}
                          />
                        ) : (
                          <BsChevronDown
                            onClick={() => setShowMenu(true)}
                            className="text-black dark:text-white font-medium"
                            size={"1rem"}
                          />
                        )}
                      </li>
                      <ul
                        className={`${
                          showMenu ? "block" : "hidden"
                        } bg-white dark:bg-slate-900`}
                      >
                        <NavLink
                          to={"/list-sidebar"}
                          className={({ isActive }) =>
                            isActive ? navActive : navNormal
                          }
                        >
                          <li
                            onClick={scrollYHandler}
                            className="ml-5 fs-[17px] hover:text-[#771f28] mb-2"
                          >
                            Listing
                          </li>
                        </NavLink>
                        <NavLink
                          to={"/features"}
                          className={({ isActive }) =>
                            isActive ? navActive : navNormal
                          }
                        >
                          <li
                            onClick={scrollYHandler}
                            className=" ml-5 fs-[17px] hover:text-[#771f28] mb-2"
                          >
                            Features
                          </li>
                        </NavLink>
                        <NavLink
                          to={"/pricing"}
                          className={({ isActive }) =>
                            isActive ? navActive : navNormal
                          }
                        >
                          <li
                            onClick={scrollYHandler}
                            className=" ml-5 fs-[17px] hover:text-[#771f28] mb-2"
                          >
                            Pricing
                          </li>
                        </NavLink>
                        <NavLink
                          to={"/faqs"}
                          className={({ isActive }) =>
                            isActive ? navActive : navNormal
                          }
                        >
                          <li
                            onClick={scrollYHandler}
                            className=" ml-5 fs-[17px] hover:text-[#771f28] mb-2"
                          >
                            FAQs
                          </li>
                        </NavLink>
                      </ul>
                    </div>
                    <NavLink
                      to={"/contact"}
                      className={({ isActive }) =>
                        isActive ? navActive : navNormal
                      }
                    >
                      <li
                        onClick={scrollYHandler}
                        className="fs-[17px] hover:text-[#771f28]"
                      >
                        Contact
                      </li>
                    </NavLink>
                  </ul>
                </div>
              </div>
            </div>
            {/* Login Icon Section End*/}
          </div>
        </div>

        {/* dark mode Section Start*/}
        <div className=" w-14 h-8 overflow-hidden fixed top-[40%] left-0 z-50  flex flex-col justify-center items-center bg-slate-900 dark:bg-white rounded-2xl rotate-90">
          <div className="w-14 h-7 flex justify-center items-center	relative">
            <button
              onClick={changeMood}
              className={` ${
                showAni == true ? "myDarkBtnMoveUp" : "myDarkBtnMoveDown"
              } absolute top-0 left-0 w-7 h-7 rounded-full z-50 dark:bg-slate-900 bg-white `}
            ></button>

            <p
              onClick={changeDark}
              className="w-7 h-7 p-1 border-0 text-yellow-500 "
            >
              <BsMoon size={"1.3rem"} />
            </p>
            <p
              onClick={changeLight}
              className=" w-7 h-7 p-1 border-0 text-yellow-500"
            >
              <BsFillSunFill size={"1.3rem"} />
            </p>
          </div>
        </div>
        {/* dark mode Section End*/}

        {/* Up-arrow Section Start*/}

        <div className={`${uparrow ? "block" : "hidden"}`}>
          <a href="#mystart" className="duration-[1500ms]	">
            <button className=" fixed right-3 bottom-[5%] w-10 h-10 p-2 fs-[17px] leading-[24px] border-0 text-white bg-[#771f28] hover:bg-[#138a3f] rounded-full z-50">
              <BiUpArrowAlt size={"1.5rem"} />
            </button>
          </a>
        </div>
        {/* Up-arrow Section End*/}
      </div>
    </div>
  );
};

export default Navbar;
