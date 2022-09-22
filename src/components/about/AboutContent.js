import React, { useState, useEffect } from "react";

export default function AboutContent() {
  return (
    <>
      <section className="page__about-content about-content">
        <div className="about-content__container container-1">
          <div className="about-content__box">
            <div className="about-content__item">
              <div className="about-content__item-image">
                <img src={require("../../img/About/1.png")} alt="" />
              </div>
            </div>
            <div className="about-content__item">
              <div className="about-content__item-image">
                <img src={require("../../img/About/2.png")} alt="" />
              </div>
              <div className="about-content__item-text">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="about-content__item">
              <div className="about-content__item-text">
                <p>
                  Не просто интернет-магазин. Это целое сообщество людей,
                  которые делают выбор в пользу здоровья. У нас вы можете найти:
                </p>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
