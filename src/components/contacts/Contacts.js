import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Sugar } from "../Sugar";

export default function Contacts() {
  return (
    <>
      <Header />
      <main className="contacts-main">
        <Sugar
          sugar={[
            { href: "/", title: "Главная" },
            { href: "", title: "Наши контакты" },
          ]}
          sugarClass={"container-1"}
        />
        <section className="page__contacts contacts">
          <div className="contacts__container container-1">
            <h1 className="contacts__title page-title">Контакты</h1>
          </div>
          <div className="contacts__content">
            <div className="contacts__text">
              <h2 className="contacts__content-title">
                Мы ценим Ваше время и рады ответить на любой Ваш вопрос:
              </h2>
              <div className="footer__contacts">
                <div className="footer__contact-item _icon-tel">
                  <a href="tel:+77772324070" target="_blank">
                    + 7 (777) 232 40 70
                  </a>
                  <button className="contacts__callback">
                    Перезвонить мне
                  </button>
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
            <div className="contacts__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23252.110274148865!2d76.9294336!3d43.2406528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369348c5349f1%3A0x7c5f1185bfc26c88!2z0JzQtdC00LjRhtC40L3RgdC60LjQuSDRhtC10L3RgtGAINCQ0LvRjNGC0LA!5e0!3m2!1sru!2skz!4v1663306738590!5m2!1sru!2skz"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
