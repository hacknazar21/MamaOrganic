import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/hooks.http";
import useAuth from "../../hooks/hooks.auth";

export default function ResetPassword() {
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  useEffect(() => {
    document.title = "Регистрация";
  }, []);
  const [form, setForm] = useState({
    email: "",
  });
  const [isCodeSend, setIsCodeSend] = useState(false);
  const { login } = useAuth();
  const { request, isOk } = useHttp();
  const formChangeHandler = (event) => {
    if (event.target.value === "") event.target.classList.remove("error");
    if (event.target.name === "check_new_password") {
      if (event.target.value === form.new_password) {
        event.target.classList.remove("error");
      } else {
        event.target.classList.add("error");
      }
    } else if (event.target.name === "email") {
      validateEmail(event.target.value)
        ? event.target.classList.remove("error")
        : event.target.classList.add("error");
    }
    setForm((prev) => {
      prev[event.target.name] = event.target.value;
      return prev;
    });
  };
  const sendCodeHandler = async (event) => {
    for (const formKey in form) {
      if (form[formKey] === "") {
        const inputError = document.querySelector(`input[name="${formKey}"]`);
        const errorMessageLabel = document.createElement("error");
        inputError.insertAdjacentElement("beforebegin", errorMessageLabel);
        errorMessageLabel.innerText = "* Заполните поле";
        inputError.classList.add("error");
        setTimeout(() => {
          errorMessageLabel.remove();
          inputError.classList.remove("error");
        }, 2000);
      }
    }
    for (const formKey in form) {
      if (form[formKey] === "") {
        return;
      }
    }
    try {
      const data = await request(
        "/api/auth/profile/password-reset/request/",
        "POST",
        {
          email: form.email,
        },
        {
          "Content-Type": "application/json",
        }
      );
    } catch (e) {
      if (!isOk) {
        const errors = JSON.parse(e.message);
        for (const errorsKey in errors) {
          if (form[errorsKey]) {
            const inputError = document.querySelector(
              `input[name="${errorsKey}"]`
            );
            const errorMessageLabel = document.createElement("error");
            inputError.insertAdjacentElement("beforebegin", errorMessageLabel);
            errorMessageLabel.innerText = errors[errorsKey][0];
            inputError.classList.add("error");

            setTimeout(() => {
              errorMessageLabel.remove();
              inputError.classList.remove("error");
            }, 2000);
          }
        }
      } else {
        setIsCodeSend(true);
      }
    }
  };
  const sendResetDataHandler = async (event) => {
    for (const formKey in form) {
      if (form[formKey] === "") {
        const inputError = document.querySelector(`input[name="${formKey}"]`);
        const errorMessageLabel = document.createElement("error");
        inputError.insertAdjacentElement("beforebegin", errorMessageLabel);
        errorMessageLabel.innerText = "* Заполните поле";
        inputError.classList.add("error");
        setTimeout(() => {
          errorMessageLabel.remove();
          inputError.classList.remove("error");
        }, 2000);
      }
    }
    for (const formKey in form) {
      if (
        form[formKey] === "" ||
        form["check_new_password"] !== form["new_password"]
      ) {
        return;
      }
    }
    try {
      await request(
        "/api/auth/profile/password-reset/validate-code/",
        "POST",
        {
          ...form,
        },
        {
          "Content-Type": "application/json",
        }
      );
    } catch (e) {
      if (!isOk) {
        const errors = JSON.parse(e.message);
        setIsCodeSend(false);
        for (const errorsKey in errors) {
          if (form[errorsKey]) {
            const inputError = document.querySelector(
              `input[name="${errorsKey}"]`
            );
            const errorMessageLabel = document.createElement("error");
            inputError.insertAdjacentElement("beforebegin", errorMessageLabel);
            errorMessageLabel.innerText = errors[errorsKey][0];
            inputError.classList.add("error");

            setTimeout(() => {
              errorMessageLabel.remove();
              inputError.classList.remove("error");
            }, 2000);
          }
        }
      } else {
        try {
          await request(
            "/api/auth/profile/password-reset/",
            "POST",
            {
              ...form,
            },
            {
              "Content-Type": "application/json",
            }
          );
        } catch (e) {
          if (isOk) {
            window.location.replace("/login");
          } else {
            setIsCodeSend(false);
          }
        }
      }
    }
  };
  return (
    <>
      <Header />
      <main className="registration-main">
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
                <h1 className="auth-form__title">Сброс пароля</h1>
                <div className="auth-form__subtitle"></div>
                <div className="auth-form__inputs">
                  <div className="auth-form__input-box">
                    <label htmlFor="" className="auth-form__input-label">
                      Email
                    </label>
                    <input
                      type="text"
                      onInput={formChangeHandler}
                      name={"email"}
                      placeholder="Введите от Email вашего аккаунта"
                      className="auth-form__input"
                    />
                  </div>
                  {isCodeSend ? (
                    <>
                      <div className="auth-form__input-box">
                        <label htmlFor="" className="auth-form__input-label">
                          Код восстановления
                        </label>
                        <input
                          type="text"
                          onInput={formChangeHandler}
                          name={"code"}
                          placeholder="Введите код восстановления"
                          className="auth-form__input"
                        />
                      </div>
                      <div className="auth-form__input-box">
                        <label htmlFor="" className="auth-form__input-label">
                          Новый пароль
                        </label>
                        <input
                          type="password"
                          onInput={formChangeHandler}
                          name={"new_password"}
                          placeholder="Введите код восстановления"
                          className="auth-form__input"
                        />
                      </div>
                      <div className="auth-form__input-box">
                        <label htmlFor="" className="auth-form__input-label">
                          Повторите новый пароль
                        </label>
                        <input
                          type="password"
                          onInput={formChangeHandler}
                          name={"check_new_password"}
                          placeholder="Введите код восстановления"
                          className="auth-form__input"
                        />
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <button
                  onClick={!isCodeSend ? sendCodeHandler : sendResetDataHandler}
                  className="auth-form__submit"
                >
                  {!isCodeSend
                    ? "Отправить код восстановления на почту"
                    : "Поменять пароль"}
                </button>
                <Link to={"/login"} className="auth-form__link">
                  Вернуться назад
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
