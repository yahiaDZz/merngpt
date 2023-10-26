import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
const Confirm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const lastPathSegment = pathSegments[pathSegments.length - 1];
  const token = lastPathSegment.replaceAll("!", ".");
  try {
    const decodedToken = jwt_decode(token);
    const email = decodedToken.info.email;
    const username = decodedToken.info.username;
    const password = decodedToken.info.password;
    const data = {
      email: email,
      username: username,
      password: password,
    };
    axios.post("http://localhost:4000/signup", data).then((res) => {
      alert("Account created successfully!");
      navigate("/login");
    });
  } catch (err) {
    alert("Unknown error occured, please try again later...");
    navigate("/");
  }
  useEffect(() => {}, []);
  return <div></div>;
};

export default Confirm;
