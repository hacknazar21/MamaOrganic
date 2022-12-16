import React, { useState, useEffect, useRef, useContext } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Aside from "../Aside";
import Input from "../../Input";
import { Autoplay, Navigation, Swiper } from "swiper";
import { ProfileContext } from "../../../context/ProfileContext";
import useAuth from "../../../hooks/hooks.auth";
import useHttp from "../../../hooks/hooks.http";

export default function AccountOrders() {
  const slider = useRef();
  const { userData } = useContext(ProfileContext);
  const { token } = useAuth();
  const { request } = useHttp();
  const [orders, setOrders] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const orderStatusSlug = {
    RECEIVED: {
      text: "Заказ получен",
      styleClass: "",
    },
    APPROVED: {
      text: "Заказ подтвержден",
      styleClass: "preparing",
    },
    PROCESSING: {
      text: "Заказ подтвержден",
      styleClass: "active",
    },
    PAYMENT_ERR: {
      text: "Ошибка оплаты",
      styleClass: "canceled",
    },
    COMPLETED: {
      text: "Заказ завершен",
      styleClass: "finished",
    },
  };
  useEffect(() => {
    if (slider.current) {
      if (slider.current?.className) {
        new Swiper("." + slider.current?.classList[0], {
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
          //   nextEl: "." + slider.classList[0] + " .swiper-next-btn",
          //   prevEl: "." + slider.classList[0] + " .swiper-prev-btn",
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
      }
    }
  }, [orders]);
  useEffect(() => {
    (async () => {
      if (token) {
        const data = await request("/api/orders/", "GET", null, {
          Authorization: `Bearer ${token}`,
        });
        if (data && data.length) setOrders(data);
      }
    })();
  }, [token]);
  useEffect(() => {
    if (!isActive) {
      (async () => {
        if (token) {
          const data = await request("/api/orders/", "GET", null, {
            Authorization: `Bearer ${token}`,
          });
          if (data) setOrders(data);
        }
      })();
    } else {
      (async () => {
        if (token) {
          const data = await request(
            "/api/orders/?status=PROCESSING",
            "GET",
            null,
            {
              Authorization: `Bearer ${token}`,
            }
          );
          if (data) setOrders(data);
        }
      })();
    }
  }, [isActive]);
  const createDate = (date) => {
    const createdDate = new Date(date);

    return `${createdDate.getDate()}.${
      createdDate.getMonth() + 1 <= 9
        ? "0" + (createdDate.getMonth() + 1)
        : createdDate.getMonth() + 1
    }.${createdDate.getFullYear()}`;
  };

  function activeClickHandler(event) {
    setIsActive((prevState) => !prevState);
    event.target.parentElement
      .querySelector(".active")
      .classList.remove("active");
    event.target.classList.add("active");
  }

  return (
    <>
      <Header />
      <main className="account-orders-main">
        <div className="account-main__wrapper">
          <Aside userData={userData} />
          <section className="page__account-info account-info">
            <div className="account-info__wrapper">
              <h1 className="account-info__title">Мои заказы</h1>
              <div className="account-info__subtitle">
                <p></p>
              </div>
              <div className="account__orders">
                <div className="account__orders-filter">
                  <button
                    onClick={activeClickHandler}
                    className="account__orders-filter-item active"
                  >
                    Все заказы
                  </button>
                  <button
                    onClick={activeClickHandler}
                    className="account__orders-filter-item"
                  >
                    Активные заказы
                  </button>
                </div>
                <div className="account__orders-items">
                  {orders.map((order, id) => {
                    return (
                      <div
                        key={order.id}
                        className="account__orders-item account-order"
                      >
                        <div className="account-order__title">
                          Заказ № {order.id}
                        </div>
                        <div className="account-order__status-date">
                          <div
                            className={
                              "account-order__status" +
                              " " +
                              orderStatusSlug[order.status]?.styleClass
                            }
                          >
                            {orderStatusSlug[order.status]?.text}
                          </div>
                          <div className="account-order__date">
                            {createDate(order.updated_at)}
                          </div>
                        </div>
                        <div className="account-order__payed">
                          <span>Оплачено:</span>
                          <p>{order.is_paid ? "Да" : "Нет"}</p>
                        </div>
                        <div
                          ref={slider}
                          className="account-order__products order-products-slider"
                        >
                          <div className="order-products__swiper-wrapper swiper-wrapper">
                            {order?.products_amount?.map((product) => {
                              return (
                                <div
                                  key={product.product.id}
                                  className="order-products__content-item swiper-slide order-product"
                                >
                                  <div className="order-product__image">
                                    <img
                                      src={product.product.main_image}
                                      alt=""
                                    />
                                  </div>
                                  <div className="order-product__name">
                                    {product.product.name}
                                  </div>
                                  <div className="order-product__article">
                                    Артикул: {product.product.article}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <a
                          href={"/account/order/" + order.id}
                          className="account-order__more"
                        >
                          Смотреть подробнее
                        </a>
                      </div>
                    );
                  })}
                  {isActive && !orders.length ? (
                    <p>Активных заказов пока нет</p>
                  ) : (
                    ""
                  )}
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
