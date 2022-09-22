import React, { useState, useEffect } from "react";
import Header from "../Header";
import { Sugar } from "../Sugar";
import Footer from "../Footer";
import PopularBrands from "./PopularBrands";
import CategoriesBanners from "./CategoriesBanners";

export default function Categories() {
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
                <menu className="popular-categories__menu">
                  <ul className="popular-categories__list">
                    <li className="popular-categories__list-item">
                      <a href="" className="popular-categories__list-link">
                        Лицо{" "}
                      </a>
                    </li>
                    <li className="popular-categories__list-item">
                      <a href="" className="popular-categories__list-link">
                        Тело
                      </a>
                    </li>
                    <li className="popular-categories__list-item">
                      <a href="" className="popular-categories__list-link">
                        Волосы{" "}
                      </a>
                    </li>
                    <li className="popular-categories__list-item">
                      <a href="" className="popular-categories__list-link">
                        Руки и ноги{" "}
                      </a>
                    </li>
                  </ul>
                  <ul className="popular-categories__list">
                    <li className="popular-categories__list-item">
                      <a href="" className="popular-categories__list-link">
                        Лицо{" "}
                      </a>
                    </li>
                    <li className="popular-categories__list-item">
                      <a href="" className="popular-categories__list-link">
                        Тело
                      </a>
                    </li>
                    <li className="popular-categories__list-item">
                      <a href="" className="popular-categories__list-link">
                        Волосы{" "}
                      </a>
                    </li>
                    <li className="popular-categories__list-item">
                      <a href="" className="popular-categories__list-link">
                        Руки и ноги{" "}
                      </a>
                    </li>
                    <li className="popular-categories__list-item">
                      <a href="" className="popular-categories__list-link">
                        Руки и ноги{" "}
                      </a>
                    </li>
                  </ul>
                  <ul className="popular-categories__list">
                    <li className="popular-categories__list-item">
                      <a href="" className="popular-categories__list-link">
                        Лицо{" "}
                      </a>
                    </li>
                    <li className="popular-categories__list-item">
                      <a href="" className="popular-categories__list-link">
                        Тело
                      </a>
                    </li>
                    <li className="popular-categories__list-item">
                      <a href="" className="popular-categories__list-link">
                        Волосы{" "}
                      </a>
                    </li>
                  </ul>
                </menu>
              </div>
            </div>
          </div>
        </section>
        <CategoriesBanners />
        <PopularBrands title={"Популярные бренды"} />
      </main>
      <Footer />
    </>
  );
}
