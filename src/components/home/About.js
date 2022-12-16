import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="page__about about">
        <div className="about__header">
          <h2 className="about__title section-title">О компании</h2>
        </div>
        <div className="about__content">
          {/*<div className="about__background-name">company</div>*/}
          <div className="about__content-items">
            <div className="about__text-box">
              <div className="about__text-image">
                <img
                  loading="lazy"
                  src={require("../../img/Home/About/1.png")}
                  alt=""
                />
              </div>
              <div className="about__text">
                <p>
                  Mama Organic собрала команду людей, которые привнесли в жизнь
                  идею - дать возможность казахстанцам приобретать эффективные
                  средства из сферы натурального и органического производства со
                  всего мира.
                </p>
                <p>
                  Мы поставляем лучшую натуральную и органическую косметику, а
                  также бытовую нехимию, проводя качественный анализ как цены,
                  так и анализ состава.
                </p>
              </div>
            </div>
            <div className="about__text-box">
              <div className="about__text-image">
                <img
                  loading="lazy"
                  src={require("../../img/Home/About/2.png")}
                  alt=""
                />
              </div>
              <div className="about__text">
                <p>
                  Мы хотим, чтобы натуральная и органическая продукция со всего
                  мира была легко доступной для каждого казахстанца, как она
                  доступна для каждого европейца.
                </p>
                <a href={"/about"} className="about__link _icon-arrow-long"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
