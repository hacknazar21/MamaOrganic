import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import FirstScreen from "./FirstScreen";
import Advantages from "./Advantages";
import PopularProducts from "./PopularProducts";
import PopularCategories from "./PopularCategories";
import Brands from "./Brands";
import About from "./About";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const history = useNavigate();

  useEffect(() => {
    if (window.location.hash) {
      const goto = document.querySelector(window.location.hash);
      if (goto) {
        goto.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [history]);
  return (
    <>
      <Header />
      <main>
        <FirstScreen />
        <Advantages />
        <PopularProducts />
        <PopularCategories />
        <Brands />
        <About />
      </main>
      <Footer />
    </>
  );
}
