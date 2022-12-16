import React, { useState, useEffect, useRef } from "react";
import Header from "../Header";
import { Sugar } from "../Sugar";
import Footer from "../Footer";
import PopularBrands from "./PopularBrands";
import CategoriesBanners from "./CategoriesBanners";
import useHttp from "../../hooks/hooks.http";
import { useParams } from "react-router-dom";

export default function Categories() {
  const { id } = useParams();
  const [categoryId, setCategoryId] = useState("");
  const { request, loading, error, isOk } = useHttp();
  const [categories, setCategories] = useState([]);
  const [banners, setBanners] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await request("/api/categories/");
      if (data) {
        setCategories(data);
        if (id === undefined) {
          setCategoryId(data[0].link);
        } else {
          setCategoryId(id);
        }
      }
    })();
    document.title = "Категории";
  }, []);
  useEffect(() => {
    console.log(banners);
    if (banners) {
      banners.scrollIntoView({
        alignToTop: false,
        behavior: "smooth",
        block: "start",
      });
    }
  }, [banners, categories]);
  return (
    <>
      <Header />
      <main className="categories-main">
        <Sugar
          sugar={[
            { href: "/", title: "Главная" },
            { href: "", title: "Категории" },
          ]}
          sugarClass={""}
        />
        <section className="page__categories categories-page">
          <div className="categories-page__container">
            <div className="categories-page__menu">
              <div className="popular-categories__content">
                <div className="popular-categories__bg-image">
                  <img
                    src={require("../../img/Categories/center-bg.png")}
                    alt=""
                  />
                </div>
                <menu className="popular-categories__menu">
                  <ul className="popular-categories__list">
                    {categories.map((category, id) => {
                      if (category.child_categories?.length)
                        return (
                          <li
                            key={category.id}
                            className="popular-categories__list-item"
                          >
                            <a
                              href={"/categories/" + category.link}
                              className={`popular-categories__list-link ${
                                categoryId === category.link ? " active" : ""
                              }`}
                            >
                              {category.name}
                            </a>
                          </li>
                        );
                      return (
                        <li
                          key={category.id}
                          className="popular-categories__list-item"
                        >
                          <a
                            href={"/category/" + category.link}
                            className={`popular-categories__list-link`}
                          >
                            {category.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </menu>
              </div>
            </div>
          </div>
        </section>
        <CategoriesBanners
          setRef={(ref) => {
            setBanners(ref);
          }}
          category={
            categories.filter((category) => {
              return category.link === categoryId;
            })[0]
          }
        />
        <PopularBrands title={"Популярные бренды"} />
      </main>
      <Footer />
    </>
  );
}
