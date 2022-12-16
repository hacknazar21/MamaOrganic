import React, { useEffect, useRef } from "react";
import { Autoplay, Navigation, Swiper } from "swiper";
import { Link } from "react-router-dom";
import placeholderImg from "../../img/placeholder.jpeg";

export default function CategoriesBanners({ category, setRef }) {
  return (
    <section
      ref={(ref) => {
        setRef(ref);
      }}
      className="page__categories-banners categories-banners"
    >
      <div className="categories-banners__container">
        <div className="categories-banners__items">
          {category?.child_categories.map((categoryChild) => {
            return (
              <div className="categories-banners__item category-banner">
                <div className="category-banner__info">
                  <h2 className="category-banner__title">
                    {categoryChild.name}
                  </h2>
                  <div className="category-banner__text">
                    <p>{categoryChild.description}</p>
                  </div>
                  <a
                    href={`/category/${categoryChild.link}`}
                    className="category-banner__show-more show-btn"
                  >
                    <p>Смотреть товары</p>
                  </a>
                </div>
                {categoryChild.image && (
                  <div className="category-banner__image">
                    <img
                      loading="lazy"
                      src={categoryChild.image || placeholderImg}
                      alt=""
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
