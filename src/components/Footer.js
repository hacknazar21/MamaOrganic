import React, { useState, useEffect } from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__hf-container">
          <div className="footer__side">
            <div className="footer__logo logo">
              <Link to={"/"} className="footer__logo-link logo-link">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="footer__contacts">
              <div className="footer__contact-item _icon-tel">
                <a href="tel:+77772324070" target="_blank">
                  + 7 (777) 232 40 70
                </a>
              </div>
              <div className="footer__contact-item">
                Время работы:<span>ежедневно с 08:00 до 20:00</span>
              </div>
              <div className="footer__contact-item">
                По всем вопросам:
                <a href="mailto:info@mamaorganic.kz" target="_blank">
                  info@mamaorganic.kz
                </a>
              </div>
              <div className="footer__contact-item">
                Проблемы с заказом:
                <a href="mailto:help@mamaorganic.kz" target="_blank">
                  help@mamaorganic.kz
                </a>
              </div>
              <div className="footer__contact-item">
                Наш адрес:<span>Абая. 152. Дом 43</span>
              </div>
            </div>
          </div>
          <div className="footer__side">
            <menu className="footer__menu">
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    Для лица
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    Руки и ноги
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    Сеты
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    Для тела
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    Гели
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    Домашнее спа
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    Для детей
                  </a>
                </li>
              </ul>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    Каталог
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    Преимущества
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    О нас
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">
                    Контакты
                  </a>
                </li>
              </ul>
            </menu>
            <div className="footer__social">
              <a href="" className="footer__social-link _icon-instagram" />
              <a href="" className="footer__social-link _icon-whatsapp" />
              <a href="" className="footer__social-link _icon-telegram" />
              <a href="" className="footer__social-link _icon-facebook" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
