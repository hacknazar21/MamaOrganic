import React, { useEffect, useRef } from "react";
import Bg1 from "../../img/Home/PopularCategories/bg1.png";
import Bg2 from "../../img/Home/PopularCategories/bg2.png";
import { Autoplay, Navigation, Swiper } from "swiper";
import { Link } from "react-router-dom";
import placeholderImg from "../../img/placeholder.jpeg";

export default function PopularCategories({ categories }) {
  const slider = useRef();
  useEffect(() => {
    if (slider?.current?.className)
      new Swiper("." + slider.current.classList.value.split(" ").join("."), {
        modules: [Navigation, Autoplay],
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
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          920: {
            slidesPerView: 3,
            spaceBetween: 20,
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
      <section className="page__popular-categories popular-categories">
        <div className="popular-categories__bg">
          <img loading="lazy" src={Bg1 || placeholderImg} alt="" />
        </div>
        <div className="popular-categories__bg">
          <img loading="lazy" src={Bg2 || placeholderImg} alt="" />
        </div>
        <div className="popular-categories__header">
          <h2 className="popular-categories__title section-title">
            Популярные категории
          </h2>
        </div>
        <div className="popular-categories__content">
          <div className="brands__slider">
            <div
              ref={slider}
              className="popular-categories popular__content products sponsors-swiper"
            >
              <div className="first-screen__swiper-wrapper swiper-wrapper">
                {categories?.map((categoryItem) => {
                  return (
                    <div
                      key={categoryItem.id}
                      className="brands__content-item swiper-slide brands-item"
                    >
                      {categoryItem.child_categories?.length ? (
                        <a
                          href={"/categories/" + categoryItem.link}
                          className="brands-item__image categories-item"
                        >
                          {categoryItem.image && (
                            <img
                              loading="lazy"
                              src={categoryItem.image}
                              alt=""
                            />
                          )}
                          <p>{categoryItem.name}</p>
                        </a>
                      ) : (
                        <a
                          href={"/category/" + categoryItem.link}
                          className="brands-item__image categories-item"
                        >
                          {categoryItem.image && (
                            <img
                              loading="lazy"
                              src={categoryItem.image}
                              alt=""
                            />
                          )}
                          <p>{categoryItem.name}</p>
                        </a>
                      )}
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
          <a
            href={"/categories"}
            className="popular-categories__show-all brands__show-all show-btn mt-20"
          >
            <p>Смотреть все категории</p>
          </a>
        </div>
      </section>
    </>
  );
}
