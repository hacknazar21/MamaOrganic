import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/hooks.auth";
import useHttp from "../../hooks/hooks.http";

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { login } = useAuth();
  const { request } = useHttp();
  const formChangeHandler = (event) => {
    setForm((prev) => {
      prev[event.target.name] = event.target.value;
      return prev;
    });
  };
  useEffect(() => {
    document.title = "Логин";
  }, []);
  const registerClickHandler = async (event) => {
    for (const formKey in form) {
      if (form[formKey] === "") {
        return;
      }
    }
    try {
      const data = await request(
        "/api/token/",
        "POST",
        {
          ...form,
        },
        {
          "Content-Type": "application/json",
        }
      );
      await login(data.access, data.id);
      window.location.replace("/account/info");
    } catch (e) {
      const errors = JSON.parse(e.message);
      for (const errorsKey in errors) {
        let inputError;
        const errorMessageLabel = document.createElement("error");
        if (form[errorsKey]) {
          inputError = document.querySelector(`input[name="${errorsKey}"]`);
          errorMessageLabel.innerText = errors[errorsKey][0];
          inputError.classList.add("error");
        } else if (errorsKey === "detail") {
          inputError = document.querySelector(`.auth-form__input-box > input`);
          errorMessageLabel.innerText = errors[errorsKey];
        }

        inputError.insertAdjacentElement("beforebegin", errorMessageLabel);

        setTimeout(() => {
          errorMessageLabel.remove();
          inputError.classList.remove("error");
        }, 2000);
      }
    }
  };

  return (
    <>
      <Header />
      <main className="login-main">
        <section className="page__auth auth">
          <div className="auth__wrapper">
            <div className="auth__image">
              <img
                loading="lazy"
                src={require("../../img/Auth/bg.png")}
                alt=""
              />
            </div>
            <div className="auth__form-box">
              <div className="auth__form auth-form">
                <h1 className="auth-form__title">Войти в аккаунт</h1>
                <div className="auth-form__subtitle"></div>
                <div className="auth-form__inputs">
                  <div className="auth-form__input-box">
                    <label htmlFor="" className="auth-form__input-label">
                      Email
                    </label>
                    <input
                      onInput={formChangeHandler}
                      name="username"
                      type="text"
                      placeholder="Введите Email"
                      className="auth-form__input"
                    />
                  </div>
                  <div className="auth-form__input-box">
                    <label htmlFor="" className="auth-form__input-label">
                      Пароль
                    </label>
                    <input
                      onInput={formChangeHandler}
                      name="password"
                      type="password"
                      placeholder="Введите пароль"
                      className="auth-form__input"
                    />
                  </div>
                </div>
                <button
                  onClick={registerClickHandler}
                  className="auth-form__submit"
                >
                  Войти
                </button>
                <Link to={"/registration"} className="auth-form__link">
                  У меня нет аккаунта
                </Link>
                <Link to={"/reset-password"} className="auth-form__link">
                  Сбросить пароль
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
