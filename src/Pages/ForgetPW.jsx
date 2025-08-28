import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Signup from "./Signup";

const ForgetPW = () => {
  return (
    <div className=" container-fluid snow-bg myParent duration-[40000ms]">
      <div className="z-1 relative w-screen h-screen overflow-hidden">
        <div className="myImg absolute w-screen h-screen bg-center bg-cover bg-[url('https://hously-react.vercel.app/static/media/5.289f490cebbaef2f5f58.jpg')]">
          <div className="absolute inset-0 bg-black opacity-30 "></div>
        </div>

        <div className=" h-screen flex flex-col justify-center items-center">
          <form className=" p-6 w-[350px] md:w-[400px] m-3 z-10 bg-white border rounded-lg">
            <div className="flex justify-center mb-5">
              <img className=" " src="/images/log-bg.jpg" alt="" />
            </div>
            <span className=" mb-5 font-semibold	text-2xl block ">
              Reset Your Password
            </span>

            <p className=" text-slate-400 mb-3">
              Please enter your email address. You will receive a link to create
              a new password via email.
            </p>
            <div className="mb-3 flex flex-col gap-3">
              <label className=" font-medium">Email Address:</label>
              <input
                type="text"
                placeholder="name@example.com"
                className=" px-3 py-2 w-full border-2 mb-3 myBorderColor"
              />
            </div>
            <Link to={"/"}>
              <button className=" mb-3 p-2 w-full fs-[17px] leading-[24px] text-white bg-[#eadbce] hover:bg-[#138a3f] border rounded-lg">
                Send
              </button>
            </Link>

            <p className="	flex justify-center mb-3">
              <span className=" text-slate-400">Remember your password?</span>
              <Link to={"/"}>
                <span className=" font-semibold ml-4">Sign in</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPW;
