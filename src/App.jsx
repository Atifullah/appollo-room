import { lazy, Suspense } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "./Pages/Error";
import ListSidebar from "./Pages/ListSidebar";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgetPW from "./Pages/ForgetPW";
import Pricing from "./Pages/Pricing";
import Features from "./Pages/Features";
import Faqs from "./Pages/Faqs";
import Booking from "./Pages/Booking";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./index.css";
import Sell from "./Pages/Sell";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
const Buy = lazy(() => import("./Pages/Buy"));

const App = () => {
  const properties = [
    {
      id: "1",
      title: "10765 Hillshire Ave, Baton Rouge, LA 70810, USA",
      image: "/images/propertyImage4.jpg",
    },
    {
      id: "2",
      title: "59345 STONEWALL DR, Plaquemine, LA 70764, USA",
      image: "/images/propertyImage1.jpg",
    },
    {
      id: "3",
      title: "3723 SANDBAR DR, Addis, LA 70710, USA",
      image: "/images/propertyImage2.jpg",
    },
    {
      id: "4",
      title: "Lot 21 ROYAL OAK DR, Prairieville, LA 70769, USA",
      image: "/images/propertyImage3.jpg",
    },
    {
      id: "5",
      title: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA",
      image: "/images/propertyImage4.jpg",
    },
    {
      id: "6",
      title: "5133 MCLAIN WAY, Baton Rouge, LA 70809, USA",
      image: "/images/propertyImage1.jpg",
    },
  ];

  return (
    <div className=" container-fluid dark:bg-slate-900">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/forgetPW"} element={<ForgetPW />} />
          <Route path={"/signup"} element={<Signup />} />

          <Route
            path={"/"}
            element={
              <>
                <Navbar />
                <Home properties={properties} />
                <Footer />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Navbar />
                <Features />
                <Footer />
              </>
            }
          />

          <Route
            path="/aboutus"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/faqs"
            element={
              <>
                <Navbar />
                <Faqs />
                <Footer />
              </>
            }
          />

          <Route
            path="/booking"
            element={
              <>
                <Navbar />
                <Booking />
                <Footer />
              </>
            }
          />
          <Route
            path={"/*"}
            element={
              <>
                <Error />
              </>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
