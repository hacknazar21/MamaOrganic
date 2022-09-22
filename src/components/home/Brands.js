import React, { useState, useEffect, useRef } from "react";
import Bg1 from "../../img/Home/PopularCategories/bg1.png";
import Bg2 from "../../img/Home/PopularCategories/bg2.png";
import { Autoplay, Navigation, Swiper } from "swiper";
import { Link } from "react-router-dom";

export default function Brands() {
  const slider = useRef();
  useEffect(() => {
    if (slider.current.className && window.innerWidth > 768)
      new Swiper("." + slider.current.classList[0], {
        modules: [Navigation, Autoplay],
        observer: true,
        observeParents: true,
        slidesPerView: 6,
        spaceBetween: 20,
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
          480: {
            slidesPerView: 3,
          },
          920: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 5,
          },
          1920: {
            slidesPerView: 6,
          },
        },
        // События
        on: {},
      });
  }, [slider]);
  return (
    <>
      <section className="page__brands brands">
        <div className="brands__header">
          <h2 className="brands__title section-title">Бренды</h2>
        </div>
        <div className="brands__slider">
          <div ref={slider} className="brands__content brands-swiper">
            <div className="brands__swiper-wrapper swiper-wrapper">
              <div className="brands__content-item swiper-slide brands-item">
                <a href="" className="brands-item__image">
                  <img src={require("../../img/Home/Brands/1.png")} alt="" />
                </a>
              </div>
              <div className="brands__content-item swiper-slide brands-item">
                <div className="brands-item__image">
                  <img src={require("../../img/Home/Brands/2.png")} alt="" />
                </div>
              </div>
              <div className="brands__content-item swiper-slide brands-item">
                <div className="brands-item__image">
                  <img src={require("../../img/Home/Brands/3.png")} alt="" />
                </div>
              </div>
              <div className="brands__content-item swiper-slide brands-item">
                <div className="brands-item__image">
                  <img src={require("../../img/Home/Brands/4.png")} alt="" />
                </div>
              </div>
              <div className="brands__content-item swiper-slide brands-item">
                <div className="brands-item__image">
                  <img src={require("../../img/Home/Brands/5.png")} alt="" />
                </div>
              </div>
              <div className="brands__content-item swiper-slide brands-item">
                <div className="brands-item__image">
                  <img src={require("../../img/Home/Brands/6.png")} alt="" />
                </div>
              </div>
              <div className="brands__content-item swiper-slide brands-item">
                <div className="brands-item__image">
                  <img src={require("../../img/Home/Brands/6.png")} alt="" />
                </div>
              </div>
            </div>
            <div className="brands__buttons">
              <button className="swiper-prev-btn brands-prev-btn _icon-arrow-slider"></button>
              <button className="swiper-next-btn brands-next-btn _icon-arrow-slider"></button>
            </div>
          </div>
        </div>
        <Link to={"/brands"}>
          <a className="brands__show-all show-btn">Смотреть все бренды</a>
        </Link>
      </section>
    </>
  );
}
