import React from "react";
import { useLocation } from "react-router-dom";

const Confirm = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const lastPathSegment = pathSegments[pathSegments.length - 1];
  const token = lastPathSegment.replaceAll("!", ".");
  return <div>{{ token }}</div>;
};

export default Confirm;
