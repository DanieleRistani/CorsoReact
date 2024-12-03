import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import React from "react";
import Home from "./shared/home/home";
import LoginRegister from "./shared/auth/login_register";
import App from "./App";
import UserProfile from "./shared/auth/userProfile";
import Categories from "./shared/categories/categories";
import Category from "./shared/categories/childCategory/category";
function MainRoute() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>} >

          <Route path="/home" element={<Home/>} />
          <Route path="/userProfile" element={<UserProfile/>} />
          <Route path="/loginRegister" element={<LoginRegister/>} />

          <Route path="/categories" element={<Categories/>}>
            
             <Route path="/categories/:id" element={<Category/>} />
          
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    <Outlet/> 
  </>
  );
}

export default MainRoute;
