import React, { useState, useEffect, useRef } from "react";
import Spoiler from "../Spoiler";

export default function ProductInfo({ product }) {
  return (
    <>
      <section className="page__product-info product-info">
        <div className="product-info__container container-1">
          <div className="product-info__items">
            {product?.description !== null && product?.description !== "" ? (
              <div className="product-info__item">
                <Spoiler
                  titleClass={"product-info__item-title"}
                  contentClass={"product-info__item-text"}
                  spoilerClass={"product-info__item-spoiler"}
                  title={"О товаре"}
                  isLoaded={!!product}
                  content={product?.description}
                />
              </div>
            ) : (
              ""
            )}
            {product?.composition !== null && product?.composition !== "" ? (
              <div className="product-info__item">
                <Spoiler
                  titleClass={"product-info__item-title"}
                  contentClass={"product-info__item-text"}
                  spoilerClass={"product-info__item-spoiler"}
                  title={"Состав"}
                  isLoaded={!!product}
                  content={product?.composition}
                />
              </div>
            ) : (
              ""
            )}
            {product?.expires !== null && product?.expires !== "" ? (
              <div className="product-info__item">
                <Spoiler
                  titleClass={"product-info__item-title"}
                  contentClass={"product-info__item-text"}
                  spoilerClass={"product-info__item-spoiler"}
                  title={"Сроки и условия хранения"}
                  isLoaded={!!product}
                  content={product?.expires}
                />
              </div>
            ) : (
              ""
            )}
            {product?.apply_method !== null && product?.apply_method !== "" ? (
              <div className="product-info__item">
                <Spoiler
                  titleClass={"product-info__item-title"}
                  contentClass={"product-info__item-text"}
                  spoilerClass={"product-info__item-spoiler"}
                  title={"Применение"}
                  isLoaded={!!product}
                  content={product?.apply_method}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
}
