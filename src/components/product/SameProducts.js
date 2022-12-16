import React, { useState, useEffect, useRef } from "react";
import Product1 from "../../img/Home/FirstScreen/01.png";
import Rating from "react-rating";
import Product2 from "../../img/Home/FirstScreen/02.png";
import Product3 from "../../img/Home/FirstScreen/03.png";
import Product4 from "../../img/Home/FirstScreen/04.png";
import { Autoplay, Navigation, Swiper } from "swiper";
import useHttp from "../../hooks/hooks.http";
import { Link } from "react-router-dom";
import placeholderImg from "../../img/placeholder.jpeg";

export default function SameProducts({ productId }) {
  const slider = useRef();
  const { request, success, isOk, error, loading } = useHttp();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const req = async () => {
      try {
        if (productId) {
          const data = await request(`/api/products/${productId}/similar`);
          if (data) {
            setProducts(data.results);
          }
        }
      } catch (e) {}
    };
    req();
  }, []);
  useEffect(() => {
    if (slider.current?.className)
      new Swiper("." + slider.current?.classList.value.split(" ").join("."), {
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
          920: {
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
  return (
    <>
      <section className="page__popular popular">
        <div className="popular__header">
          <h2 className="popular__title section-title">Похожие товары</h2>
        </div>
        <div ref={slider} className="popular__content products sponsors-swiper">
          <div className="popular-products__swipe-anim">
            <img src={require("../../img/swipe.gif")} alt="" />
          </div>
          <div className="first-screen__swiper-wrapper swiper-wrapper">
            {products?.map((product) => {
              return (
                <div
                  className={
                    "popular__content-item popular-product product swiper-slide" +
                    " " +
                    (!product?.in_stock ? "no-avl" : "")
                  }
                >
                  <a
                    href={"/product/" + product.link}
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
                          href={"/product/" + product.link}
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
                          {product.total_discount
                            ? product.discounted_price
                            : product.price}{" "}
                          тг
                        </div>
                        {product.total_discount ? (
                          <div className="product-price__old product-price__old">
                            {product.price} тг
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      {product.reviews.length ? (
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
                    </div>
                  </div>
                </div>
              );
            })}
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
