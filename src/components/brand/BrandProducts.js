import React, { useState, useEffect, useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Sugar } from "../Sugar";
import Product1 from "../../img/Home/FirstScreen/01.png";
import Rating from "react-rating";
import Product2 from "../../img/Home/FirstScreen/02.png";
import Product3 from "../../img/Home/FirstScreen/03.png";
import Product4 from "../../img/Home/FirstScreen/04.png";
import { Autoplay, Navigation, Swiper } from "swiper";

export default function BrandProducts({ brandName }) {
  const slider = useRef();
  useEffect(() => {
    if (slider.current.className)
      new Swiper("." + slider.current.classList[0], {
        modules: [Navigation, Autoplay],
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 0,
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
            slidesPerView: 1,
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
          <h2 className="popular__title section-title">Товары {brandName}</h2>
        </div>
        <div ref={slider} className="popular__content products sponsors-swiper">
          <div className="first-screen__swiper-wrapper swiper-wrapper">
            <div className="popular__content-item popular-product product swiper-slide">
              <div className="popular-product__image product-image">
                <img src={Product1} alt="" />
              </div>
              <div className="popular-product__content-box product-content-box">
                <div className="popular-product__content product-content">
                  <h4 className="popular-product__title product-title">
                    <a href="" className="popular-product__link product-link">
                      KONOPKA’S - кондиционер
                    </a>
                  </h4>
                  <p className="popular-product__subtitle product-subtitle">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <div className="popular-product__info product-info">
                  <div className="popular-product__price product-price">
                    <div className="product-price__current product-price__current">
                      3 600 тг
                    </div>
                    <div className="product-price__old product-price__old">
                      4 600 тг
                    </div>
                  </div>
                  <div className="popular-product__rating product-rating">
                    <Rating
                      readonly={true}
                      emptySymbol={"rating-item"}
                      initialRating={3}
                      fullSymbol={"rating-item-fill"}
                    />
                    <div className="product-rating__value">30 отзывов</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="popular__content-item popular-product product swiper-slide">
              <div className="popular-product__image product-image">
                <img src={Product2} alt="" />
              </div>
              <div className="popular-product__content-box product-content-box">
                <div className="popular-product__content product-content">
                  <h4 className="popular-product__title product-title">
                    <a href="" className="popular-product__link product-link">
                      KONOPKA’S - кондиционер
                    </a>
                  </h4>
                  <p className="popular-product__subtitle product-subtitle">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <div className="popular-product__info product-info">
                  <div className="popular-product__price product-price">
                    <div className="product-price__current product-price__current">
                      3 600 тг
                    </div>
                    <div className="product-price__old product-price__old">
                      4 600 тг
                    </div>
                  </div>
                  <div className="popular-product__rating product-rating">
                    <Rating
                      readonly={true}
                      emptySymbol={"rating-item"}
                      initialRating={3}
                      fullSymbol={"rating-item-fill"}
                    />
                    <div className="product-rating__value">30 отзывов</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="popular__content-item popular-product product swiper-slide">
              <div className="popular-product__image product-image">
                <img src={Product3} alt="" />
              </div>
              <div className="popular-product__content-box product-content-box">
                <div className="popular-product__content product-content">
                  <h4 className="popular-product__title product-title">
                    <a href="" className="popular-product__link product-link">
                      KONOPKA’S - кондиционер
                    </a>
                  </h4>
                  <p className="popular-product__subtitle product-subtitle">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <div className="popular-product__info product-info">
                  <div className="popular-product__price product-price">
                    <div className="product-price__current product-price__current">
                      3 600 тг
                    </div>
                    <div className="product-price__old product-price__old">
                      4 600 тг
                    </div>
                  </div>
                  <div className="popular-product__rating product-rating">
                    <Rating
                      readonly={true}
                      emptySymbol={"rating-item"}
                      initialRating={3}
                      fullSymbol={"rating-item-fill"}
                    />
                    <div className="product-rating__value">30 отзывов</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="popular__content-item popular-product product swiper-slide">
              <div className="popular-product__image product-image">
                <img src={Product4} alt="" />
              </div>
              <div className="popular-product__content-box product-content-box">
                <div className="popular-product__content product-content">
                  <h4 className="popular-product__title product-title">
                    <a href="" className="popular-product__link product-link">
                      KONOPKA’S - кондиционер
                    </a>
                  </h4>
                  <p className="popular-product__subtitle product-subtitle">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <div className="popular-product__info product-info">
                  <div className="popular-product__price product-price">
                    <div className="product-price__current product-price__current">
                      3 600 тг
                    </div>
                    <div className="product-price__old product-price__old">
                      4 600 тг
                    </div>
                  </div>
                  <div className="popular-product__rating product-rating">
                    <Rating
                      readonly={true}
                      emptySymbol={"rating-item"}
                      initialRating={3}
                      fullSymbol={"rating-item-fill"}
                    />
                    <div className="product-rating__value">30 отзывов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="products__buttons">
            <button className="swiper-prev-btn products-prev-btn"></button>
            <button className="swiper-next-btn products-next-btn"></button>
          </div>
        </div>
      </section>
    </>
  );
}
