import React from "react";
import gpt from "../assets/gpt.png";
const LoggedNavbar = () => {
  return (
    <nav className="bg-transparent w-full font-display">
      <div className="flex justify-between p-2">
        <div
          className="flex items-center justify-center hover:scale-105 transition duration-200 ease-in-out hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={gpt} className="w-10 h-10 rounded-full" />
          <h1 className="uppercase text-white text-lg">
            mern<span className="text-sm">-gpt</span>
          </h1>
        </div>
        <div className="lg:space-x-4 xxs:space-x-2 flex">
          <button
            onClick={() => navigate("/login")}
            className="xxs:text-sm hover:scale-110 transition ease-in-out duration-400 uppercase rounded-lg bg-blue-400 px-4 py-2 text-black font-bold"
          >
            Go to chat
          </button>
          <button
            onClick={() => Logout()}
            className="hover:scale-110 transition ease-in-out duration-400 uppercase rounded-lg bg-gray-600 px-4 py-2 text-white font-bold"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LoggedNavbar;
