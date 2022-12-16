import React, { useState, useEffect } from "react";
import usePagination from "../../hooks/hooks.pagination";
import { useSearchParams } from "react-router-dom";
import useHttp from "../../hooks/hooks.http";

export default function SingleNewsContent({ news }) {
  return (
    <>
      <section className="single-news__content single-news-content">
        <div className="single-news-content__container container-1">
          <div className="single-news-content__image">
            <img
              loading="lazy"
              src={require("../../img/Delivery/01.png")}
              alt=""
            />
          </div>
          <div className="single-news-content__text">
            <h2 className="single-news-content__title">
              Скидочная система на сайте mama organic.
            </h2>
            <div className="single-news-content__text-content">
              <p>
                Сумма заказа менее 30.000 тысяч тенге оформляется без скидки.
                <br />
                На сумму заказа от 30.000 тысяч тенге до 50.000 тысяч тенге - 5%
                скидка на весь заказ.
                <br />
                На сумму заказа от 50.000 тысяч тенге до 100.000 тысяч тенге -
                10% скидка на весь заказ.
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="single-news-content__text">
            <h2 className="single-news-content__title">
              Доставка заказа на сайте mama organic.
            </h2>
            <div className="single-news-content__text-content">
              <p>
                Стоимость доставки по Алматы - 1000 тенге.
                <br />
                Бесплатная доставка по Алматы на заказ суммой от 15000 тенге.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
