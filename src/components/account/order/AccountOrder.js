import React, { useState, useEffect, useRef, useContext } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Aside from "../Aside";
import Input from "../../Input";
import { Autoplay, Navigation, Swiper } from "swiper";

export default function AccountOrders() {
  const slider = useRef();
  useEffect(() => {
    if (slider.current.className && window.innerWidth > 768)
      new Swiper("." + slider.current.classList[0], {
        modules: [Navigation, Autoplay],
        observer: true,
        observeParents: true,
        slidesPerView: 3.5,
        spaceBetween: 10,
        autoHeight: false,
        speed: 800,
        // Эффекты
        effect: "fade",
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        // navigation: {
        //   nextEl: "." + slider.current.classList[0] + " .swiper-next-btn",
        //   prevEl: "." + slider.current.classList[0] + " .swiper-prev-btn",
        // },
        breakpoints: {
          320: {
            slidesPerView: 2.8,
          },
          720: {
            slidesPerView: 2.5,
          },
        },
        // События
        on: {},
      });
  }, [slider]);
  return (
    <>
      <Header />
      <main className="account-orders-main">
        <div className="account-main__wrapper">
          <Aside />
          <section className="page__account-info account-info">
            <div className="account-info__wrapper">
              <h1 className="account-info__title">Мои заказы</h1>
              <div className="account-info__subtitle">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="account__orders">
                <div className="account__orders-filter">
                  <button className="account__orders-filter-item">
                    Все заказы
                  </button>
                  <button className="account__orders-filter-item">
                    Активные заказы
                  </button>
                </div>
                <div className="account__orders-items">
                  <div className="account__orders-item account-order">
                    <div className="account-order__title">Заказ № 8</div>
                    <div className="account-order__status-date">
                      <div className="account-order__status">
                        Активный заказ
                      </div>
                      <div className="account-order__date">8 сент. 2:20</div>
                    </div>
                    <div className="account-order__payed">
                      <span>Оплачено:</span>
                      <p>Да</p>
                    </div>
                    <div
                      ref={slider}
                      className="account-order__products order-products-slider"
                    >
                      <div className="order-products__swiper-wrapper swiper-wrapper">
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="" className="account-order__more">
                      Смотреть подробнее
                    </a>
                  </div>
                  <div className="account__orders-item account-order">
                    <div className="account-order__title">Заказ № 8</div>
                    <div className="account-order__status-date">
                      <div className="account-order__status">
                        Активный заказ
                      </div>
                      <div className="account-order__date">8 сент. 2:20</div>
                    </div>
                    <div className="account-order__payed">
                      <span>Оплачено:</span>
                      <p>Да</p>
                    </div>
                    <div
                      ref={slider}
                      className="account-order__products order-products-slider"
                    >
                      <div className="order-products__swiper-wrapper swiper-wrapper">
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="" className="account-order__more">
                      Смотреть подробнее
                    </a>
                  </div>
                  <div className="account__orders-item account-order">
                    <div className="account-order__title">Заказ № 8</div>
                    <div className="account-order__status-date">
                      <div className="account-order__status">
                        Активный заказ
                      </div>
                      <div className="account-order__date">8 сент. 2:20</div>
                    </div>
                    <div className="account-order__payed">
                      <span>Оплачено:</span>
                      <p>Да</p>
                    </div>
                    <div
                      ref={slider}
                      className="account-order__products order-products-slider"
                    >
                      <div className="order-products__swiper-wrapper swiper-wrapper">
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="" className="account-order__more">
                      Смотреть подробнее
                    </a>
                  </div>
                  <div className="account__orders-item account-order">
                    <div className="account-order__title">Заказ № 8</div>
                    <div className="account-order__status-date">
                      <div className="account-order__status">
                        Активный заказ
                      </div>
                      <div className="account-order__date">8 сент. 2:20</div>
                    </div>
                    <div className="account-order__payed">
                      <span>Оплачено:</span>
                      <p>Да</p>
                    </div>
                    <div
                      ref={slider}
                      className="account-order__products order-products-slider"
                    >
                      <div className="order-products__swiper-wrapper swiper-wrapper">
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="" className="account-order__more">
                      Смотреть подробнее
                    </a>
                  </div>
                  <div className="account__orders-item account-order">
                    <div className="account-order__title">Заказ № 8</div>
                    <div className="account-order__status-date">
                      <div className="account-order__status">
                        Активный заказ
                      </div>
                      <div className="account-order__date">8 сент. 2:20</div>
                    </div>
                    <div className="account-order__payed">
                      <span>Оплачено:</span>
                      <p>Да</p>
                    </div>
                    <div
                      ref={slider}
                      className="account-order__products order-products-slider"
                    >
                      <div className="order-products__swiper-wrapper swiper-wrapper">
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                        <div className="order-products__content-item swiper-slide order-product">
                          <div className="order-product__image">
                            <img
                              src={require("../../../img/Home/FirstScreen/01.png")}
                              alt=""
                            />
                          </div>
                          <div className="order-product__name">
                            Название товара в две строки апапывыыв
                          </div>
                          <div className="order-product__article">
                            Артикул: 1222424
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="" className="account-order__more">
                      Смотреть подробнее
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
