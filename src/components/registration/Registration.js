import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Header />
      <main className="login-main">
        <section className="page__auth auth">
          <div className="auth__wrapper">
            <div className="auth__image">
              <img src={require("../../img/Auth/bg.png")} alt="" />
            </div>
            <div className="auth__form-box">
              <div className="auth__form auth-form">
                <h1 className="auth-form__title">Войти в аккаунт</h1>
                <div className="auth-form__subtitle">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.{" "}
                  </p>
                </div>
                <div className="auth-form__inputs">
                  <div className="auth-form__input-box">
                    <label htmlFor="" className="auth-form__input-label">
                      Телефон
                    </label>
                    <input
                      type="text"
                      placeholder="Введите телефон"
                      className="auth-form__input"
                    />
                  </div>
                  <div className="auth-form__input-box">
                    <label htmlFor="" className="auth-form__input-label">
                      Пароль
                    </label>
                    <input
                      type="text"
                      placeholder="Введите пароль"
                      className="auth-form__input"
                    />
                  </div>
                </div>
                <button className="auth-form__submit">Войти</button>
                <Link to={"/registration"} className="auth-form__link">
                  У меня нет аккаунта
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
