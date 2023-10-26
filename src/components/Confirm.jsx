import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
const Confirm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const lastPathSegment = pathSegments[pathSegments.length - 1];
  const token = lastPathSegment.replaceAll("!", ".");
  const [count, setCount] = useState(0);
  useEffect(async () => {
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
      if (count < 1) {
        await axios.post("http://localhost:4000/signup", data).then((res) => {
          alert("Account created successfully!");
          setCount(count + 1);
          navigate("/login");
        });
      }
    } catch (err) {
      alert("Unknown error occured, please try again later...");
      navigate("/");
    }
  }, []);
  return <div></div>;
};

export default Confirm;
