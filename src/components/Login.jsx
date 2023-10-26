import React, { useState } from "react";
import { Link } from "react-router-dom";
import robot from "../assets/robot.png";
import Navbar from "./Navbar";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("ly_benyahia@esi.dz");
  const [password, setPassword] = useState("Abcdefghi123@");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleLogin = () => {
    // console.log("Username: ", username, "Password: ", password);
    setInvalidEmail(!isEmailValid(email));
    if (!invalidEmail) {
      axios.post("http://localhost:4000/login", {
        email: email,
        password: password,
      });
    }
  };
  return (
    <>
      <Navbar />
      <div className="h-full font-display flex flex-col items-center justify-center px-6 py-8">
        <div className="shadow-2xl shadow-blue-400 rounded-lg flex items-center w-auto bg-transparent">
          <div className="w-80 xxs:hidden sm:hidden lg:block md:block xs:hidden">
            <img src={robot} />
          </div>
          <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Sign in to your account
            </h1>
            <div className="space-y-4 md:space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    Email
                  </label>
                  <h1
                    className={`${
                      invalidEmail ? "block" : "hidden"
                    } animate-on-load translate-down-fade bg-red-500 rounded-lg px-12 text-white`}
                  >
                    Invalid Email address
                  </h1>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="rounded-full w-4 h-4 border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-white">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-xs font-thin text-white hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                onClick={() => {
                  handleLogin();
                }}
                type="button"
                className="box-shadow font-bold w-full text-black bg-blue-400 uppercase hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-200">
                Don’t have an account yet?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
