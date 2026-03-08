import React, { useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router";
import "./App.css";
import Dashboard from "./pages/dashboard";
import PageNotFound from "./components/page-not-found";
import Login from "./components/login";
import Register from "./components/register";
import AuthLayout from "./components/auth";

const App = () => {
  const [isLogin, setIsLogin] = useState("Login");
  return (
    <>
      <nav>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>contact</NavLink>
        <NavLink to={"/services"}>services</NavLink>
        <NavLink to={"/concerts"}>Concert</NavLink>
        <NavLink to={"/concerts/abc"}>City</NavLink>
        <NavLink to={"/concerts/trending"}>Trending</NavLink>
        <button
          onClick={() => {
            if (isLogin !== "Login") {
              setIsLogin("Login");
            } else {
              setIsLogin("Register");
            }
          }}
        >
          <Link to={isLogin === "Login" ? "/register" : "/login"}>
            {isLogin === "Login" ? "Login" : "Register"}
          </Link>
        </button>
      </nav>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/about" element={"About"} />
        <Route path="concerts">
          <Route index element={<h1>ConcertHome</h1>} />
          <Route path=":city" element={<h1>Concert City</h1>} />
          <Route path="trending" element={<h1>Trending...</h1>} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
