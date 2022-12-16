import React, { useState, useEffect } from "react";
import Product1 from "../../img/Home/FirstScreen/01.png";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import placeholderImg from "../../img/placeholder.jpeg";

export default function CategoryProducts({ products }) {
  return (
    <>
      <section className="page__category-products category-products">
        <div className="category-products__box">
          {products?.map((product) => {
            return (
              <div
                className={
                  "category-products__item product" +
                  " " +
                  (!product?.in_stock ? "no-avl" : "")
                }
              >
                {product.total_discount ? (
                  <div className="category-product__sale product-sale">
                    Акции
                  </div>
                ) : (
                  ""
                )}
                <a
                  href={`/product/${product.link}`}
                  className="category-product__image product-image"
                >
                  <img
                    loading="lazy"
                    src={product.main_image || placeholderImg}
                    alt=""
                  />
                </a>
                <div className="category-product__content-box product-content-box">
                  <div className="category-product__content product-content">
                    <h4 className="category-product__title product-title">
                      <a
                        href={`/product/${product.link}`}
                        className="category-product__link product-link"
                      >
                        {product.name}
                      </a>
                    </h4>
                    <p className="category-product__subtitle product-subtitle">
                      {product.description}
                    </p>
                  </div>
                  <div className="category-product__info product-info">
                    <div className="category-product__price product-price">
                      <div className="category-product__current product-price__current">
                        {product.discounted_price} тг
                      </div>
                      {product.total_discount ? (
                        <div className="category-product__old product-price__old">
                          {product.price} тг
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    {product.reviews.length && product?.in_stock ? (
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
                    {!product?.in_stock ? <p>Нет в наличии</p> : ""}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
