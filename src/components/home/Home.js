import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import FirstScreen from "./FirstScreen";
import Advantages from "./Advantages";
import PopularProducts from "./PopularProducts";
import PopularCategories from "./PopularCategories";
import Brands from "./Brands";
import About from "./About";
import { useNavigate, useParams } from "react-router-dom";
import useHttp from "../../hooks/hooks.http";

export default function Home() {
  const history = useNavigate();
  const { request, success, isOk, error, loading } = useHttp();
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [slides, setSlides] = useState(null);
  useEffect(() => {
    const req = async () => {
      try {
        const data = await request(`/api/products/popular/`);
        if (data) setProducts(data);
        const cats = await request("/api/categories/");
        if (cats) setCategories(cats);
        const slides = await request("/api/content/find/main-slider/");
        if (slides) setSlides(slides);
      } catch (e) {}
    };
    req();

    document.title = "MamaOrganic - Главная";
  }, []);
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
        <FirstScreen products={slides?.file_content} />
        <PopularProducts products={products?.results} />
        <PopularCategories categories={categories} />
        <Brands />
        <About />
        <Advantages />
      </main>
      <Footer />
    </>
  );
}
