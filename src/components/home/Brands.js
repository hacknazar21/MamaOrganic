import React, { useState, useEffect, useRef } from "react";
import Bg1 from "../../img/Home/PopularCategories/bg1.png";
import Bg2 from "../../img/Home/PopularCategories/bg2.png";
import { Autoplay, Navigation, Swiper } from "swiper";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/hooks.http";
import placeholderImg from "../../img/placeholder.jpeg";

export default function Brands() {
  const slider = useRef();
  const { request, loading, error, isOk } = useHttp();
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await request("/api/brands/");
      if (data) {
        setBrands(data);
      }
    })();
  }, []);
  useEffect(() => {
    if (slider.current.className)
      new Swiper("." + slider.current.classList[0], {
        modules: [Navigation, Autoplay],
        observer: true,
        observeParents: true,
        slidesPerView: 6,
        spaceBetween: 30,
        autoHeight: false,
        speed: 800,
        // Эффекты
        effect: "fade",
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: "." + slider.current.classList[0] + " .swiper-next-btn",
          prevEl: "." + slider.current.classList[0] + " .swiper-prev-btn",
        },
        breakpoints: {
          320: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          920: {
            slidesPerView: 3,
            spaceBetween: 20,
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
              {brands?.map((brand) => {
                return (
                  <div className="brands__content-item swiper-slide brands-item">
                    <a
                      href={"/brands/" + brand.link}
                      className="brands-item__image"
                    >
                      <img
                        loading="lazy"
                        src={brand.image || placeholderImg}
                        alt=""
                      />
                      <p>{brand.name}</p>
                    </a>
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
        <a href={"/brands"} className="brands__show-all show-btn">
          <p>Смотреть все бренды</p>
        </a>
      </section>
    </>
  );
}
