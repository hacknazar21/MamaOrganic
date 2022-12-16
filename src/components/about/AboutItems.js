import React, { useState, useEffect } from "react";

export default function AboutItems() {
  return (
    <>
      <section className="page__about-items about-items">
        <div className="about-items__container container-1">
          <div className="about-items__box">
            <div className="about-items__item about-item">
              <div className="about-item__header">
                <div className="about-item__icon _icon-quality">
                  <img
                    loading="lazy"
                    src={require("../../img/About/quality.png")}
                    alt=""
                  />
                </div>
                <div className="about-item__title">Качество</div>
              </div>
              <div className="about-item__content">
                <p>
                  Все представленные бренды объединяет богатая история
                  производства, высокая эффективность, несущая пользу для
                  человека. У нас только полные составы, написанные про правилам
                  международной номенклатуры INCI.
                </p>
              </div>
            </div>
            <div className="about-items__item about-item">
              <div className="about-item__header">
                <div className="about-item__icon _icon-treatment">
                  <img
                    loading="lazy"
                    src={require("../../img/About/treatment.png")}
                    alt=""
                  />
                </div>
                <div className="about-item__title">Польза</div>
              </div>
              <div className="about-item__content">
                <p>
                  С нами вы легко перейдёте с конвенционального ухода на
                  натуральный и органический, оказывая бережное отношение к
                  окружающей среде. Наши средства не тестируются на животных.
                </p>
              </div>
            </div>
            <div className="about-items__item about-item">
              <div className="about-item__header">
                <div className="about-item__icon _icon-naturalness">
                  <img
                    src={require("../../img/About/naturalness.png")}
                    alt=""
                  />
                </div>
                <div className="about-item__title">Бренды</div>
              </div>
              <div className="about-item__content">
                <p>
                  Каждый бренд, представленный на сайте Mama Organic, имеет свою
                  яркую отличительную особенность. Все представленные бренды
                  объединяет богатая история производства, высокая
                  эффективность, несущая пользу для человека.
                </p>
              </div>
            </div>
            <div className="about-items__item about-item">
              <div className="about-item__header">
                <div className="about-item__icon _icon-organic">
                  <img
                    loading="lazy"
                    src={require("../../img/About/organic.png")}
                    alt=""
                  />
                </div>
                <div className="about-item__title">Органика</div>
              </div>
              <div className="about-item__content">
                <p>
                  Аудит COSMOS STANDARD (ECOCERT, ICEA, COSMEBIO, NATRUE),
                  Climate Neutral, DAAB, ECO GARANTIE, подверждают, что весь
                  производственный процесс от ингредиентов до упаковки, проходит
                  строгие требования, в основе которых лежит забота о человеке и
                  об окружающей среде.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
