import React, { useState } from "react";
import Navbar from "./Navbar";
import robotsignup from "../assets/robotsignup.png";
import { Link } from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidConfirm, setInvalidConfirm] = useState(false);
  const handleSubmit = () => {
    setInvalidUsername(!isUsernameValid(username));
    setInvalidEmail(!isEmailValid(email));
    setInvalidPassword(!isPasswordValid(password));
    setInvalidConfirm(password !== confirm);
    console.log("password:", password);
    console.log("confirm:", confirm);
    console.log("equality:", confirm === password);
    if (
      isUsernameValid(username) &&
      isEmailValid(email) &&
      isPasswordValid(password) &&
      password === confirm
    ) {
      alert("signup !!");
    }
  };
  const isUsernameValid = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    return usernameRegex.test(username);
  };
  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const isPasswordValid = (password) => {
    // Password should be at least 8 characters long with at least one uppercase letter, one lowercase letter, and one digit.
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };
  return (
    <>
      <Navbar />
      <div className="h-full font-display flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="shadow-2xl shadow-blue-400 rounded-lg flex items-center w-auto bg-transparent">
          <div className="w-80 xxs:hidden sm:hidden lg:block md:block xs:hidden">
            <img src={robotsignup} />
          </div>
          <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Register your new account
            </h1>
            <div className="space-y-3">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-white "
                >
                  <div className="flex items-center justify-between">
                    <h1>
                      Username <span className="text-red-400">*</span>
                    </h1>
                    <h1
                      className={`${
                        invalidUsername ? "block" : "hidden"
                      } animate-on-load translate-down-fade bg-red-500 rounded-lg px-12`}
                    >
                      Invalid username
                    </h1>
                  </div>
                </label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white "
                >
                  <div className="flex items-center justify-between">
                    <h1>
                      Email <span className="text-red-400">*</span>
                    </h1>
                    <h1
                      className={`${
                        invalidEmail ? "block" : "hidden"
                      } animate-on-load translate-down-fade bg-red-500 rounded-lg px-12`}
                    >
                      Invalid Email address
                    </h1>
                  </div>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  <div className="flex items-center justify-between">
                    <h1>
                      Password <span className="text-red-400">*</span>
                    </h1>
                    <h1
                      className={`${
                        invalidPassword ? "block" : "hidden"
                      } animate-on-load translate-down-fade bg-red-500 rounded-lg px-12`}
                    >
                      Not strong enaugh, try again!
                    </h1>
                  </div>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirm"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  <div className="flex items-center justify-between">
                    <h1>
                      Confirm <span className="text-red-400">*</span>
                    </h1>
                    <h1
                      className={`${
                        invalidConfirm ? "block" : "hidden"
                      } animate-on-load translate-down-fade bg-red-500 rounded-lg px-12`}
                    >
                      Passwords do not match!
                    </h1>
                  </div>
                </label>
                <input
                  type="confirm"
                  name="confirm"
                  id="confirm"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  required
                  onChange={(e) => {
                    console.log(confirm);
                    setConfirm(e.target.value);
                  }}
                />
              </div>
              <div>
                <button
                  onClick={() => handleSubmit()}
                  type="button"
                  className="mt-4 font-bold box-shadow w-full text-black bg-blue-400 uppercase hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Signup
                </button>
                <p className="mt-2 text-sm font-light text-center text-gray-200">
                  Already have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;