import React, { useState, useEffect, useRef } from "react";
import Product1 from "../../img/Home/FirstScreen/01.png";
import Product2 from "../../img/Home/FirstScreen/02.png";
import Product3 from "../../img/Home/FirstScreen/03.png";
import Product4 from "../../img/Home/FirstScreen/04.png";
import Product5 from "../../img/Home/FirstScreen/05.png";
import Product6 from "../../img/Home/FirstScreen/06.png";
import Bg from "../../img/Home/FirstScreen/bg.svg";
import { Autoplay, Pagination, Swiper } from "swiper";
import placeholderImg from "../../img/placeholder.jpeg";
export default function FirstScreen({ products }) {
  const [animText, setAnimText] = useState("Мы ");
  const slider = useRef();
  useEffect(() => {
    if (slider.current.className && window.innerWidth < 990)
      new Swiper("." + slider.current.classList[0], {
        modules: [Pagination, Autoplay],
        loop: true,
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: false,
        speed: 800,
        // Эффекты
        effect: "fade",
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // События
        on: {},
      });
  }, [slider]);
  const [animBg, setAnimBg] = useState(null);
  let isScrolling;
  useEffect(() => {
    if (animBg) {
      document.onscroll = () => {
        window.clearTimeout(isScrolling);

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function () {
          const top =
            (window.pageYOffset || animBg.scrollTop) - (animBg.clientTop || 0);
          if (top < 300) animBg.style.objectPosition = `center ${top / 2}px`;
          // Clear our timeout throughout the scroll
        }, 10);
      };
    }
  }, [animBg]);
  useEffect(() => {
    const txt =
      "ы выбираем лучшее для Вас. С любовью к Вам. С заботой о Земле.";
    let i = 0;
    function anim() {
      if (i < txt.length) {
        setAnimText((prevState) => prevState + txt[i++]);
        setTimeout(anim, 10);
      }
    }
    setTimeout(() => {
      setAnimText("М");
      anim();
    }, 0);
  }, []);

  return (
    <>
      <section className="page__first-screen first-screen">
        <div className="first-screen__box">
          <div className="first-screen__products-box">
            <div className="first-screen__products-image">
              <img
                src={require("../../img/Home/FirstScreen/left.png")}
                alt=""
              />
            </div>
          </div>
          <div className="first-screen__content">
            <h1 className="first-screen__title">MAMA ORGANIC</h1>
            <p className="first-screen__subtitle">{animText}</p>
            <div className="first-screen__bg">
              <img
                ref={(ref) => {
                  setAnimBg(ref);
                }}
                src={Bg}
                alt=""
              />
            </div>
            <div className="first-screen__bg-l-items">
              <div className="first-screen__bg-l">
                <img
                  src={require("../../img/Home/FirstScreen/l1.png")}
                  alt=""
                />
              </div>
              <div className="first-screen__bg-l">
                <img
                  src={require("../../img/Home/FirstScreen/l2.png")}
                  alt=""
                />
              </div>
              <div className="first-screen__bg-l">
                <img
                  src={require("../../img/Home/FirstScreen/l3.png")}
                  alt=""
                />
              </div>
              <div className="first-screen__bg-l">
                <img
                  src={require("../../img/Home/FirstScreen/l4.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="first-screen__products-box">
            <div className="first-screen__products-image">
              <img
                src={require("../../img/Home/FirstScreen/right.png")}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="first-screen__mobile-box">
          <div className="first-screen__mobile-content">
            <h1 className="first-screen__mobile-title"></h1>
            <div className="first-screen__bg-l-items">
              <div className="first-screen__bg-l">
                <img
                  src={require("../../img/Home/FirstScreen/l1.png")}
                  alt=""
                />
              </div>
              <div className="first-screen__bg-l">
                <img
                  src={require("../../img/Home/FirstScreen/l2.png")}
                  alt=""
                />
              </div>
              <div className="first-screen__bg-l">
                <img
                  src={require("../../img/Home/FirstScreen/l3.png")}
                  alt=""
                />
              </div>
              <div className="first-screen__bg-l">
                <img
                  src={require("../../img/Home/FirstScreen/l4.png")}
                  alt=""
                />
              </div>
            </div>
            <p className="first-screen__mobile-subtitle">
              Мы выбираем лучшее для Вас. <br />
              С любовью к Вам. <br /> С заботой о Земле.
            </p>
          </div>
          <div ref={slider} className="first-screen__swiper sponsors-swiper">
            <div className="first-screen__swiper-wrapper swiper-wrapper">
              {products?.map((product, id) => {
                return (
                  <div
                    key={id}
                    className="first-screen__swiper-slide swiper-slide"
                  >
                    <a href={product.url}>
                      <img
                        loading="lazy"
                        src={product.file || placeholderImg}
                        alt=""
                      />
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="first-screen__swiper-pagination swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
}
