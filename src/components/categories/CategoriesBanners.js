import React, { useEffect, useRef } from "react";
import { Autoplay, Navigation, Swiper } from "swiper";
import { Link } from "react-router-dom";

export default function CategoriesBanners({ title }) {
  return (
    <section className="page__categories-banners categories-banners">
      <div className="categories-banners__container">
        <div className="categories-banners__items">
          <div className="categories-banners__item category-banner">
            <div className="category-banner__info">
              <h2 className="category-banner__title">Скраб для тела</h2>
              <div className="category-banner__text">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <Link
                to={"/categories/1"}
                className="category-banner__show-more show-btn"
              >
                Смотреть товары
              </Link>
            </div>
            <div className="category-banner__image">
              <img src={require("../../img/About/2.png")} alt="" />
            </div>
          </div>
          <div className="categories-banners__item category-banner">
            <div className="category-banner__info">
              <h2 className="category-banner__title">Скраб для тела</h2>
              <div className="category-banner__text">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <Link
                to={"/categories/1"}
                className="category-banner__show-more show-btn"
              >
                Смотреть товары
              </Link>
            </div>
            <div className="category-banner__image">
              <img src={require("../../img/About/2.png")} alt="" />
            </div>
          </div>
          <div className="categories-banners__item category-banner">
            <div className="category-banner__info">
              <h2 className="category-banner__title">Скраб для тела</h2>
              <div className="category-banner__text">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <Link
                to={"/categories/1"}
                className="category-banner__show-more show-btn"
              >
                Смотреть товары
              </Link>
            </div>
            <div className="category-banner__image">
              <img src={require("../../img/About/2.png")} alt="" />
            </div>
          </div>
          <div className="categories-banners__item category-banner">
            <div className="category-banner__info">
              <h2 className="category-banner__title">Скраб для тела</h2>
              <div className="category-banner__text">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <Link
                to={"/categories/1"}
                className="category-banner__show-more show-btn"
              >
                Смотреть товары
              </Link>
            </div>
            <div className="category-banner__image">
              <img src={require("../../img/About/2.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
