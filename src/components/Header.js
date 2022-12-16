import React, { useState, useEffect, useRef, useContext } from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { useDynamicAdaptive } from "../hooks/hooks.dynamicadaptive";
import { HeaderContext } from "../context/HeaderContext";
import { Basket } from "./Basket";
import useAuth from "../hooks/hooks.auth";
import Search from "./Search";
import placeholderImg from "../img/placeholder.jpeg";
export default function Header(props) {
  const [dynamicRef, setDynamicRef] = useState([]);
  const { addDynamicRefs } = useDynamicAdaptive();
  const basketRef = useRef(null);
  const { setBasket, storageLength } = useContext(HeaderContext);
  const { token } = useAuth();
  const [basketClick, setBasketClick] = useState(false);
  useEffect(() => {
    if (dynamicRef.length) {
      addDynamicRefs(dynamicRef);
    }
  }, [dynamicRef]);
  useEffect(() => {
    if (basketRef !== null) {
      setBasket(basketRef);
    }
  }, [basketRef]);
  const basketClickHandler = (event) => {
    if (!basketClick) setBasketClick(true);
  };

  return (
    <>
      <header className="header">
        {basketClick && (
          <div
            onClick={() => {
              setBasketClick(false);
            }}
            className={"basket__close-wrapper"}
          ></div>
        )}
        <div className="header__hf-container">
          <div className="header__mobile-search">
            <button
              onClick={() => {
                document.documentElement.classList.toggle("menu-open");
              }}
              className="header__burger-open"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="header__logo logo">
            <a href={"/"} className="header__logo-link logo-link">
              <img loading="lazy" src={Logo || placeholderImg} alt="" />
            </a>
          </div>
          <nav className="header__menu">
            <ul className="header__menu-list">
              <li className="header__menu-item">
                <a href={"/about"} className="header__menu-link">
                  О нас
                </a>
              </li>
              <li className="header__menu-item">
                <a href={"/categories"} className="header__menu-link">
                  Категории
                </a>
              </li>
              <li className="header__menu-item">
                <a href={"/brands"} className="header__menu-link">
                  Бренды
                </a>
              </li>
              <li className="header__menu-item">
                <a href={"/#advantages"} className="header__menu-link">
                  Преимущества
                </a>
              </li>
              <li className="header__menu-item">
                <a href={"/news"} className="header__menu-link">
                  Блог
                </a>
              </li>
              <li className="header__menu-item">
                <a href="/dostavka-i-skidki/" className="footer__list-link">
                  Доставка и скидки
                </a>
              </li>
              {/*<li className="header__menu-item">*/}
              {/*  <a href={"/contacts"} className="header__menu-link">*/}
              {/*    Контакты*/}
              {/*  </a>*/}
              {/*</li>*/}
              <li className="footer__list-item">
                <a
                  href="https://mamaorganic.kz/media/privacy-policy.pdf"
                  className="footer__list-link"
                >
                  Политика конфиденциальности
                </a>
              </li>
              <li className="footer__list-item">
                <a
                  href="https://mamaorganic.kz/media/public-offer.pdf"
                  className="footer__list-link"
                >
                  Публичная оферта
                </a>
              </li>
            </ul>
            <div className="header__menu-footer-mobile">
              <div className="footer__contact-item">
                По всем вопросам:
                <a href="mailto:contacts@mamaorganic.kz" target="_blank">
                  contact@mamaorganic.kz
                </a>
              </div>
              <div className="footer__contact-item">
                Время работы:<span>ежедневно с 10:00 до 19:00</span>
              </div>
            </div>
          </nav>
          <div className="header__actions">
            <div
              ref={(ref) =>
                setDynamicRef((prev) => {
                  prev.push(ref);
                  return prev;
                })
              }
              data-da=".header__mobile-search, 990"
              className="header__search-form"
            >
              <Search />
            </div>
            <div
              ref={basketRef}
              onClick={basketClickHandler}
              className="header__basket _icon-basket"
            >
              {basketClick && <Basket />}
              {storageLength ? <span>{storageLength}</span> : ""}
            </div>
            <a
              href={!!token ? "/account/info" : "/login"}
              className="header__account _icon-account"
            ></a>
          </div>
        </div>
      </header>
    </>
  );
}
