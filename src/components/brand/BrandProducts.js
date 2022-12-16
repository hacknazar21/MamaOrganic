import React, { useState, useEffect, useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Sugar } from "../Sugar";
import Product1 from "../../img/Home/FirstScreen/01.png";
import Rating from "react-rating";
import Product2 from "../../img/Home/FirstScreen/02.png";
import Product3 from "../../img/Home/FirstScreen/03.png";
import Product4 from "../../img/Home/FirstScreen/04.png";
import { Autoplay, Navigation, Swiper, Grid } from "swiper";
import useHttp from "../../hooks/hooks.http";
export default function BrandProducts({ brand }) {
  const slider = useRef();
  useEffect(() => {
    if (slider.current.className)
      new Swiper("." + slider.current.classList[0], {
        modules: [Navigation, Autoplay, Grid],
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 30,
        autoHeight: false,
        speed: 800,
        // Эффекты
        effect: "fade",
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
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
          960: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1920: {
            slidesPerView: 4,
          },
        },
        // События
        on: {},
      });
  }, [slider]);
  const { request, loading, error, isOk } = useHttp();
  const [brandProducts, setBrandProducts] = useState([]);
  useEffect(() => {
    console.log(brand);
    if (brand?.products) setBrandProducts([...brand?.products]);
  }, [brand]);

  return (
    <>
      <section className="page__popular popular">
        <div className="popular__header">
          <h2 className="popular__title section-title">Товары {brand?.name}</h2>
        </div>
        <div className="popular__container">
          <div
            ref={slider}
            className="popular__content products sponsors-swiper"
          >
            <div className="popular-products__swipe-anim">
              <img src={require("../../img/swipe.gif")} alt="" />
            </div>
            <div className="first-screen__swiper-wrapper swiper-wrapper ">
              {brandProducts?.map((brandProduct) => {
                return (
                  <div
                    key={brandProduct.id}
                    className={
                      "popular__content-item popular-product product swiper-slide" +
                      " " +
                      (!brandProduct?.in_stock ? "no-avl" : "")
                    }
                  >
                    <a
                      href={"/product/" + brandProduct.link}
                      className="popular-product__image product-image"
                    >
                      <img
                        loading="lazy"
                        src={brandProduct.main_image}
                        alt=""
                      />
                    </a>
                    <div className="popular-product__content-box product-content-box">
                      <div className="popular-product__content product-content">
                        <h4 className="popular-product__title product-title">
                          <a
                            href={"/product/" + brandProduct.link}
                            className="popular-product__link product-link"
                          >
                            {brandProduct.name}
                          </a>
                        </h4>
                        <p className="popular-product__subtitle product-subtitle">
                          {brandProduct.description}
                        </p>
                      </div>
                      <div className="popular-product__info product-info">
                        <div className="popular-product__price product-price">
                          <div className="product-price__current product-price__current">
                            {brandProduct.price} тг
                          </div>
                          {brandProduct.total_discount ? (
                            <div className="product-price__old product-price__old">
                              {brandProduct.discounted_price} тг
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        {brandProduct.reviews?.length &&
                        brandProduct?.in_stock ? (
                          <div className="popular-product__rating product-rating">
                            <Rating
                              readonly={true}
                              emptySymbol={"rating-item"}
                              initialRating={brandProduct.rating}
                              fullSymbol={"rating-item-fill"}
                            />
                            <div className="product-rating__value">
                              {brandProduct.reviews?.length} отзывов
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {!brandProduct?.in_stock ? <p>Нет в наличии</p> : ""}
                      </div>
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
