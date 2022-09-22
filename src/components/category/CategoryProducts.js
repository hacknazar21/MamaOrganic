import React, { useState, useEffect } from "react";
import Product1 from "../../img/Home/FirstScreen/01.png";
import Rating from "react-rating";

export default function CategoryProducts({ selects }) {
  return (
    <>
      <section className="page__category-products category-products">
        <div className="category-products__box">
          <div className="category-products__item product">
            <div className="category-product__image product-image">
              <img src={Product1} alt="" />
            </div>
            <div className="category-product__content-box product-content-box">
              <div className="category-product__content product-content">
                <h4 className="category-product__title product-title">
                  <a href="" className="category-product__link product-link">
                    KONOPKA’S - кондиционер
                  </a>
                </h4>
                <p className="category-product__subtitle product-subtitle">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="category-product__info product-info">
                <div className="category-product__price product-price">
                  <div className="category-product__current product-price__current">
                    3 600 тг
                  </div>
                  <div className="category-product__old product-price__old">
                    4 600 тг
                  </div>
                </div>
                <div className="category-product__rating product-rating">
                  <Rating
                    readonly={true}
                    emptySymbol={"rating-item"}
                    initialRating={3}
                    fullSymbol={"rating-item-fill"}
                  />
                  <div className="category-product__value product-rating__value">
                    30 отзывов
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="category-products__item product">
            <div className="category-product__image product-image">
              <img src={Product1} alt="" />
            </div>
            <div className="category-product__content-box product-content-box">
              <div className="category-product__content product-content">
                <h4 className="category-product__title product-title">
                  <a href="" className="category-product__link product-link">
                    KONOPKA’S - кондиционер
                  </a>
                </h4>
                <p className="category-product__subtitle product-subtitle">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="category-product__info product-info">
                <div className="category-product__price product-price">
                  <div className="category-product__current product-price__current">
                    3 600 тг
                  </div>
                  <div className="category-product__old product-price__old">
                    4 600 тг
                  </div>
                </div>
                <div className="category-product__rating product-rating">
                  <Rating
                    readonly={true}
                    emptySymbol={"rating-item"}
                    initialRating={3}
                    fullSymbol={"rating-item-fill"}
                  />
                  <div className="category-product__value product-rating__value">
                    30 отзывов
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="category-products__item product">
            <div className="category-product__image product-image">
              <img src={Product1} alt="" />
            </div>
            <div className="category-product__content-box product-content-box">
              <div className="category-product__content product-content">
                <h4 className="category-product__title product-title">
                  <a href="" className="category-product__link product-link">
                    KONOPKA’S - кондиционер
                  </a>
                </h4>
                <p className="category-product__subtitle product-subtitle">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="category-product__info product-info">
                <div className="category-product__price product-price">
                  <div className="category-product__current product-price__current">
                    3 600 тг
                  </div>
                  <div className="category-product__old product-price__old">
                    4 600 тг
                  </div>
                </div>
                <div className="category-product__rating product-rating">
                  <Rating
                    readonly={true}
                    emptySymbol={"rating-item"}
                    initialRating={3}
                    fullSymbol={"rating-item-fill"}
                  />
                  <div className="category-product__value product-rating__value">
                    30 отзывов
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="category-products__item product">
            <div className="category-product__image product-image">
              <img src={Product1} alt="" />
            </div>
            <div className="category-product__content-box product-content-box">
              <div className="category-product__content product-content">
                <h4 className="category-product__title product-title">
                  <a href="" className="category-product__link product-link">
                    KONOPKA’S - кондиционер
                  </a>
                </h4>
                <p className="category-product__subtitle product-subtitle">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="category-product__info product-info">
                <div className="category-product__price product-price">
                  <div className="category-product__current product-price__current">
                    3 600 тг
                  </div>
                  <div className="category-product__old product-price__old">
                    4 600 тг
                  </div>
                </div>
                <div className="category-product__rating product-rating">
                  <Rating
                    readonly={true}
                    emptySymbol={"rating-item"}
                    initialRating={3}
                    fullSymbol={"rating-item-fill"}
                  />
                  <div className="category-product__value product-rating__value">
                    30 отзывов
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="category-products__item product">
            <div className="category-product__image product-image">
              <img src={Product1} alt="" />
            </div>
            <div className="category-product__content-box product-content-box">
              <div className="category-product__content product-content">
                <h4 className="category-product__title product-title">
                  <a href="" className="category-product__link product-link">
                    KONOPKA’S - кондиционер
                  </a>
                </h4>
                <p className="category-product__subtitle product-subtitle">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="category-product__info product-info">
                <div className="category-product__price product-price">
                  <div className="category-product__current product-price__current">
                    3 600 тг
                  </div>
                  <div className="category-product__old product-price__old">
                    4 600 тг
                  </div>
                </div>
                <div className="category-product__rating product-rating">
                  <Rating
                    readonly={true}
                    emptySymbol={"rating-item"}
                    initialRating={3}
                    fullSymbol={"rating-item-fill"}
                  />
                  <div className="category-product__value product-rating__value">
                    30 отзывов
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="category-products__item product">
            <div className="category-product__image product-image">
              <img src={Product1} alt="" />
            </div>
            <div className="category-product__content-box product-content-box">
              <div className="category-product__content product-content">
                <h4 className="category-product__title product-title">
                  <a href="" className="category-product__link product-link">
                    KONOPKA’S - кондиционер
                  </a>
                </h4>
                <p className="category-product__subtitle product-subtitle">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="category-product__info product-info">
                <div className="category-product__price product-price">
                  <div className="category-product__current product-price__current">
                    3 600 тг
                  </div>
                  <div className="category-product__old product-price__old">
                    4 600 тг
                  </div>
                </div>
                <div className="category-product__rating product-rating">
                  <Rating
                    readonly={true}
                    emptySymbol={"rating-item"}
                    initialRating={3}
                    fullSymbol={"rating-item-fill"}
                  />
                  <div className="category-product__value product-rating__value">
                    30 отзывов
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="category-products__item product">
            <div className="category-product__image product-image">
              <img src={Product1} alt="" />
            </div>
            <div className="category-product__content-box product-content-box">
              <div className="category-product__content product-content">
                <h4 className="category-product__title product-title">
                  <a href="" className="category-product__link product-link">
                    KONOPKA’S - кондиционер
                  </a>
                </h4>
                <p className="category-product__subtitle product-subtitle">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="category-product__info product-info">
                <div className="category-product__price product-price">
                  <div className="category-product__current product-price__current">
                    3 600 тг
                  </div>
                  <div className="category-product__old product-price__old">
                    4 600 тг
                  </div>
                </div>
                <div className="category-product__rating product-rating">
                  <Rating
                    readonly={true}
                    emptySymbol={"rating-item"}
                    initialRating={3}
                    fullSymbol={"rating-item-fill"}
                  />
                  <div className="category-product__value product-rating__value">
                    30 отзывов
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="category-products__item product">
            <div className="category-product__image product-image">
              <img src={Product1} alt="" />
            </div>
            <div className="category-product__content-box product-content-box">
              <div className="category-product__content product-content">
                <h4 className="category-product__title product-title">
                  <a href="" className="category-product__link product-link">
                    KONOPKA’S - кондиционер
                  </a>
                </h4>
                <p className="category-product__subtitle product-subtitle">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="category-product__info product-info">
                <div className="category-product__price product-price">
                  <div className="category-product__current product-price__current">
                    3 600 тг
                  </div>
                  <div className="category-product__old product-price__old">
                    4 600 тг
                  </div>
                </div>
                <div className="category-product__rating product-rating">
                  <Rating
                    readonly={true}
                    emptySymbol={"rating-item"}
                    initialRating={3}
                    fullSymbol={"rating-item-fill"}
                  />
                  <div className="category-product__value product-rating__value">
                    30 отзывов
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
