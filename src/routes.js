import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Contacts from "./components/contacts/Contacts";
import AboutPage from "./components/about/AboutPage";
import BrandsPage from "./components/brands/BrandsPage";
import BrandPage from "./components/brand/Brand";
import Categories from "./components/categories/Categories";
import Category from "./components/category/Category";

export default function RoutesIndex() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={"/categories"} element={<Categories />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/contacts"} element={<Contacts />} />
        <Route path={"/brands"} element={<BrandsPage />} />
        <Route path={"/brands/:id"} element={<BrandPage />} />
        <Route path={"/categories/:id"} element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}
