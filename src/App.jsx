import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";
import LoggedNavbar from "./components/LoggedNavbar";
import Confirm from "./components/Confirm";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route exact path="/confirm/*" element={<Confirm />} />
      <Route exact path={"/chat"} element={<Chat />} />
      <Route exact path={"/login"} element={<Login />} />
      <Route exact path={"/signup"} element={<Signup />} />
    </Routes>
  );
}

export default App;
