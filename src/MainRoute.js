import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import React from "react";
import Home from "./shared/home/home";
import LoginRegister from "./shared/auth/login_register";
import App from "./App";
import UserProfile from "./shared/auth/userProfile";
import Categories from "./shared/categories/categories";
import Category from "./shared/categories/childsCategory/category";
import Films from "./shared/film/films";
import AddFilm from "./shared/film/childsFilm/addFilm";
import FilmList from "./shared/film/childsFilm/filmList";
import UpdateFilm from "./shared/film/childsFilm/updateFilm"
function MainRoute() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>} >

          <Route path="/home" element={<Home/>} />
          <Route path="/userProfile" element={<UserProfile/>} />
          <Route path="/loginRegister" element={<LoginRegister/>} />

          <Route path="/filmsHUB" element={<Films/>} >

            <Route path="/filmsHUB/addFilm" element={<AddFilm/>} />
            <Route path="/filmsHUB/filmList" element={<FilmList/>} />
            <Route path="/filmsHUB/updateFilm/:id" element={<UpdateFilm/>} />


          </Route>


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
