import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
const Confirm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const lastPathSegment = pathSegments[pathSegments.length - 1];
  const token = lastPathSegment.replaceAll("!", ".");
  try {
    let testDecode = jwt_decode(token);
  } catch (err) {
    navigate("/");
  }
  const decodedToken = jwt_decode(token);
  useEffect(() => {
    console.log("TOKEN:");
    console.log(token);
    console.log("DECODED:");
    console.log(decodedToken);
    let email = decodedToken.info.email;
    console.log(email);
  }, []);
  return <div className="text-white">{token}</div>;
};

export default Confirm;
