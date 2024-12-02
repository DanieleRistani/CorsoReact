import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import React from "react";
import NavBar from "./static/navbar";
import Home from "./shared/home/home";
import Header from "./shared/header/header";
import LoginRegister from "./shared/auth/login_register";
import App from "./App";


function MainRoute() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>} >
          <Route path="/home" element={<Home/>} />
          <Route path="/header" element={<Header/>} />
          <Route path="/loginRegister" element={<LoginRegister/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Outlet/> 
  </>
  );
}

export default MainRoute;
