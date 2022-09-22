import React, { useState, useEffect } from "react";

export default function AboutItems() {
  return (
    <>
      <section className="page__about-items about-items">
        <div className="about-items__container container-1">
          <div className="about-items__box">
            <div className="about-items__item about-item">
              <div className="about-item__header">
                <div className="about-item__icon _icon-quality"></div>
                <div className="about-item__title">Качество</div>
              </div>
              <div className="about-item__content">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
            <div className="about-items__item about-item">
              <div className="about-item__header">
                <div className="about-item__icon _icon-treatment"></div>
                <div className="about-item__title">Лечение</div>
              </div>
              <div className="about-item__content">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
            <div className="about-items__item about-item">
              <div className="about-item__header">
                <div className="about-item__icon _icon-naturalness"></div>
                <div className="about-item__title">Натуральность</div>
              </div>
              <div className="about-item__content">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
            <div className="about-items__item about-item">
              <div className="about-item__header">
                <div className="about-item__icon _icon-organic"></div>
                <div className="about-item__title">Органика</div>
              </div>
              <div className="about-item__content">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
