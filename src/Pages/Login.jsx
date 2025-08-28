import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" container-fluid snow-bg myParent duration-[40000ms]">
      <div className="z-1 relative w-screen h-screen overflow-hidden">
        <div className="myImg absolute w-screen h-screen bg-center bg-cover bg-[url('https://hously-react.vercel.app/static/media/5.289f490cebbaef2f5f58.jpg')]">
          <div className="absolute inset-0 bg-black opacity-30 "></div>
        </div>

        <div className=" h-screen flex flex-col justify-center items-center ">
          <form className=" p-6 w-[350px] md:w-[400px] m-3 z-10 bg-white border rounded-lg">
            <div className="flex justify-center mb-5">
              <img className=" " src="/images/log-bg.jpg" alt="" />
            </div>
            <span className=" mb-5 font-semibold	text-xl block ">Login</span>
            <div className="mb-3 flex flex-col gap-3">
              <label className=" font-medium">Email Address:</label>
              <input
                defaultValue={"john@gmail.com"}
                type="text"
                placeholder="name@example.com"
                className=" px-3 py-2 w-full border-2 mb-3 myBorderColor"
              />
            </div>
            <div className="mb-3 flex flex-col gap-3">
              <label className=" font-medium">Password:</label>
              <input
                defaultValue={"john123"}
                type="text"
                placeholder="Password"
                className=" px-3 py-2 w-full border-2 mb-3 myBorderColor"
              />
            </div>

            <div className=" flex justify-between items-center mb-3">
              <div>
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  value="remember"
                />
                <label htmlFor="rememberMe" className=" ml-2 text-slate-400">
                  Remember Me
                </label>
              </div>

              <Link to="/forgetPW">
                <span className=" text-slate-400">Forget password?</span>
              </Link>
            </div>
            <Link to={"/home"}>
              <button className=" mb-3 p-2 w-full fs-[17px] leading-[24px] text-white bg-[#eadbce] hover:bg-[#138a3f] border rounded-lg">
                Login / Sign in
              </button>
            </Link>

            <p className="	flex justify-center mb-3">
              <span className=" text-slate-400">Don't have an account?</span>
              <Link to={"/signup"}>
                <span className=" font-semibold ml-4">Sign Up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
