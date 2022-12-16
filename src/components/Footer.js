import React, { useState, useEffect } from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import useHttp from "../hooks/hooks.http";
import placeholderImg from "../img/placeholder.jpeg";
export default function Footer() {
  const { request, loading, error, isOk } = useHttp();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await request("/api/categories/");
      if (data) {
        setCategories(data);
      }
    })();
  }, []);
  return (
    <>
      <footer className="footer">
        <div className="footer__hf-container">
          <div className="footer__side">
            <div className="footer__logo logo">
              <Link to={"/"} className="footer__logo-link logo-link">
                <img loading="lazy" src={Logo || placeholderImg} alt="" />
              </Link>
            </div>
            <div className="footer__contacts">
              <div className="footer__contact-item">
                Время работы:<span>ежедневно с 10:00 до 19:00</span>
              </div>
              <div className="footer__contact-item">
                По всем вопросам:
                <a href="mailto:contact@mamaorganic.kz" target="_blank">
                  contact@mamaorganic.kz
                </a>
              </div>
              <div className="footer__contact-item">
                <p>
                  ТОО "ECO CARE", БИН 200240018398 <br />
                  РК, Алматы, ул. Брусиловского д. 167
                </p>
              </div>
              {/*<div className="footer__contact-item">*/}
              {/*  Проблемы с заказом:*/}
              {/*  <a href="mailto:help@mamaorganic.kz" target="_blank">*/}
              {/*    help@mamaorganic.kz*/}
              {/*  </a>*/}
              {/*</div>*/}
              {/*<div className="footer__contact-item">*/}
              {/*  Наш адрес:<span>Абая. 152. Дом 43</span>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className="footer__side">
            <menu className="footer__menu">
              <ul className="footer__list">
                {categories?.map((category) => {
                  if (!category.child_categories?.length)
                    return (
                      <li key={category.id} className="footer__list-item">
                        <a
                          href={"/category/" + category.link}
                          className="footer__list-link"
                        >
                          {category.name}
                        </a>
                      </li>
                    );
                  else
                    return (
                      <li key={category.id} className="footer__list-item">
                        <a
                          href={"/categories/" + category.link}
                          className="footer__list-link"
                        >
                          {category.name}
                        </a>
                      </li>
                    );
                })}
              </ul>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="/categories" className="footer__list-link">
                    Категории
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="/#advantages" className="footer__list-link">
                    Преимущества
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="/about" className="footer__list-link">
                    О нас
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="/contacts" className="footer__list-link">
                    Контакты
                  </a>
                </li>
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
            </menu>
            <div className="footer__social">
              <a
                href="https://www.instagram.com/mamaorganic.kz/"
                className="footer__social-link _icon-instagram"
              />
              {/*<a href="" className="footer__social-link _icon-whatsapp" />*/}
              {/*<a href="" className="footer__social-link _icon-telegram" />*/}
              {/*<a href="" className="footer__social-link _icon-facebook" />*/}
            </div>
          </div>
        </div>
        <div className="footer__mobile">
          <p>
            ТОО "ECO CARE", БИН 200240018398 РК, Алматы, ул. Брусиловского д.
            167
          </p>
        </div>
      </footer>
    </>
  );
}
