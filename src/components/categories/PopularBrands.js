import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation, Swiper } from "swiper";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/hooks.http";
import placeholderImg from "../../img/placeholder.jpeg";

export default function PopularBrands({ title }) {
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
    <section className="page__popular-brands popular-brands">
      <div className="popular-brands__container">
        <div className="brands__header">
          <h2 className="brands__title section-title">{title}</h2>
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
        <Link
          to={"/brands"}
          className="popular-brands__show-all brands__show-all show-btn"
        >
          <p>Смотреть все бренды</p>
        </Link>
      </div>
    </section>
  );
}
