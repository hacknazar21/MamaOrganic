import React, { useState, useEffect, useRef } from "react";
import { Autoplay, Navigation, Swiper, Grid } from "swiper";
import Rating from "react-rating";
import placeholderImg from "../../img/placeholder.jpeg";

export default function PopularProducts({ products }) {
  const slider = useRef();
  useEffect(() => {
    if (slider.current.className)
      new Swiper("." + slider.current.classList.value.split(" ").join("."), {
        modules: [Navigation, Autoplay, Grid],
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 30,
        autoHeight: false,
        speed: 800,
        // Эффекты
        effect: "fade",
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: "." + slider.current.classList[0] + " .swiper-next-btn",
          prevEl: "." + slider.current.classList[0] + " .swiper-prev-btn",
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 10,
            grid: {
              fill: "row",
              rows: 2,
            },
          },
          920: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 4,
          },
          1920: {
            slidesPerView: 4,
          },
        },
        // События
        on: {},
      });
  }, [slider]);
  return (
    <>
      <section className="page__popular popular">
        <div className="popular__header">
          <h2 className="popular__title section-title">Новинки</h2>
        </div>
        <div className="popular__container">
          <div
            ref={slider}
            className="popular-products popular__content products sponsors-swiper"
          >
            <div className="popular-products__swipe-anim">
              <img src={require("../../img/swipe.gif")} alt="" />
            </div>
            <div className="popular__swiper-wrapper swiper-wrapper">
              {products?.map((product) => {
                return (
                  <div
                    key={product.id}
                    className={
                      "popular__content-item popular-product product swiper-slide" +
                      " " +
                      (!product?.in_stock ? "no-avl" : "")
                    }
                  >
                    <a
                      href={"/product/" + product.link + "/"}
                      className="popular-product__image product-image"
                    >
                      <img
                        loading="lazy"
                        src={product.main_image || placeholderImg}
                        alt=""
                      />
                    </a>
                    <div className="popular-product__content-box product-content-box">
                      <div className="popular-product__content product-content">
                        <h4 className="popular-product__title product-title">
                          <a
                            href={"/product/" + product.link + "/"}
                            className="popular-product__link product-link"
                          >
                            {product.name}
                          </a>
                        </h4>
                        <p className="popular-product__subtitle product-subtitle">
                          {product.description}
                        </p>
                      </div>
                      <div className="popular-product__info product-info">
                        <div className="popular-product__price product-price">
                          <div className="product-price__current product-price__current">
                            {product.price} тг
                          </div>
                          {product.total_discount ? (
                            <div className="product-price__old product-price__old">
                              {product.discounted_price} тг
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        {product.reviews.length && product?.in_stock ? (
                          <div className="popular-product__rating product-rating">
                            <Rating
                              readonly={true}
                              emptySymbol={"rating-item"}
                              initialRating={product.rating}
                              fullSymbol={"rating-item-fill"}
                            />
                            <div className="product-rating__value">
                              {product.reviews.length} отзывов
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {!product?.in_stock ? <p>Нет в наличии</p> : ""}
                      </div>
                      <a
                        href={"product/" + product.link + "/"}
                        className="product__link"
                      >
                        Смотреть товар
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="brands__buttons">
              <button className="swiper-prev-btn brands-prev-btn _icon-arrow-slider"></button>
              <button className="swiper-next-btn brands-next-btn _icon-arrow-slider"></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
