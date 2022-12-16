import React, { useState, useEffect } from "react";

export default function AboutContent() {
  return (
    <>
      <section className="page__about-content about-content">
        <div className="about-content__container container-1">
          <div className="about-content__box">
            <div className="about-content__item">
              <div className="about-content__item-image">
                <img
                  loading="lazy"
                  src={require("../../img/About/1.png")}
                  alt=""
                />
              </div>
              <div className="about-content__item-text">
                <h2>
                  <a
                    href="https://instagram.com/grigsus"
                    style={{ color: "blue" }}
                  >
                    Сусанна Григорьян
                  </a>{" "}
                  - первый в Казахстане eco beauty skinfluencer, которая с 2018
                  года не перестаёт говорить о важности заботы о кожи
                  натуральными и органическими средствами.
                </h2>
                <p>
                  Как ингредиенты, которые содержаться в косметике и бытовой
                  нехимии влияют с разных сторон на человека и на окружающую
                  среду.
                  <br />
                  Больше узнать, как улучшить свое состояние кожи, как
                  действительно перейти на экологичный стиль жизни с помощью
                  бытовой нехимии, вы можете получить проверенные знания из
                  практики тут -{" "}
                  <a href="/news" style={{ color: "blue" }}>
                    блог
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="about-content__item">
              <div className="about-content__item-text">
                <h2>
                  Хитрые производители отлично понимают, что покупатели не
                  осведомлены о деталях создания настоящего натурального и
                  органического продукта.
                </h2>
                <p>
                  И развивают такой вид маркетинга, как гринвошинг, когда
                  обычный продукт подается как эко, но к этому не имеет никакого
                  отношения.
                </p>
              </div>
              <div className="about-content__item-image">
                <img
                  loading="lazy"
                  src={require("../../img/About/2.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
