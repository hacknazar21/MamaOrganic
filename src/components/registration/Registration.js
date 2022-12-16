import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/hooks.http";
import useAuth from "../../hooks/hooks.auth";

export default function Registration() {
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
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    password_check: "",
  });
  const { login } = useAuth();
  const { request, error } = useHttp();
  const formChangeHandler = (event) => {
    if (event.target.value === "") event.target.classList.remove("error");
    if (event.target.name === "password_check") {
      if (event.target.value === form.password) {
        event.target.classList.remove("error");
      } else {
        event.target.classList.add("error");
      }
    } else if (event.target.name === "email") {
      validateEmail(event.target.value)
        ? event.target.classList.remove("error")
        : event.target.classList.add("error");
    } else if (event.target.name === "phone") {
      let input = event.target,
        inputNumbersValue = input?.value.replace(/\D/g, ""),
        selectionStart = input.selectionStart,
        formattedInputValue = "";

      if (!inputNumbersValue) {
        return (input.value = "");
      }

      if (input.value.length != selectionStart) {
        // Editing in the middle of input, not last symbol
        if (event.data && /\D/g.test(event.data)) {
          // Attempt to input non-numeric symbol
          input.value = inputNumbersValue;
        }
        return;
      }

      if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
        if (inputNumbersValue[0] == "9")
          inputNumbersValue = "7" + inputNumbersValue;
        let firstSymbols = inputNumbersValue[0] == "8" ? "8" : "+7";
        formattedInputValue = input.value = firstSymbols + " ";
        if (inputNumbersValue.length > 1) {
          formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
          formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
          formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
          formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
        }
      } else {
        formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
      }
      input.value = formattedInputValue;
    }
    setForm((prev) => {
      if (event.target.name === "phone") {
        prev[event.target.name] = event.target.value
          .replaceAll("-", "")
          .replace("(", "")
          .replace(")", "")
          .replaceAll(" ", "");
      } else prev[event.target.name] = event.target.value;
      return prev;
    });
  };
  const registerClickHandler = async (event) => {
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
      } else if (form["password_check"] !== form["password"]) return;
    }
    try {
      const data = await request(
        "/api/auth/register/",
        "POST",
        {
          ...form,
          info: {
            city: "",
            street: "",
            house: "",
            apartment: "",
            floor: "",
            comment: "",
            phone: form.phone,
          },
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
                <h1 className="auth-form__title">Регистрация в Mama Organic</h1>
                <div className="auth-form__subtitle"></div>
                <div className="auth-form__inputs">
                  <div className="auth-form__input-box">
                    <label htmlFor="" className="auth-form__input-label">
                      Имя
                    </label>
                    <input
                      type="text"
                      name={"first_name"}
                      onInput={formChangeHandler}
                      placeholder="Введите ваше имя"
                      className="auth-form__input"
                    />
                  </div>
                  <div className="auth-form__input-box">
                    <label htmlFor="" className="auth-form__input-label">
                      Фамилия
                    </label>
                    <input
                      type="text"
                      name={"last_name"}
                      onInput={formChangeHandler}
                      placeholder="Введите ваше имя"
                      className="auth-form__input"
                    />
                  </div>
                  <div className="auth-form__input-box">
                    <label htmlFor="" className="auth-form__input-label">
                      Email
                    </label>
                    <input
                      type="text"
                      onInput={formChangeHandler}
                      name={"email"}
                      placeholder="Введите ваш email"
                      className="auth-form__input"
                    />
                  </div>
                  <div className="auth-form__input-box">
                    <label htmlFor="" className="auth-form__input-label">
                      Телефон
                    </label>
                    <input
                      type="text"
                      onInput={formChangeHandler}
                      name={"phone"}
                      placeholder="Введите телефон"
                      className="auth-form__input"
                    />
                  </div>
                  <div className="auth-form__input-box">
                    <label htmlFor="" className="auth-form__input-label">
                      Пароль
                    </label>
                    <input
                      type="password"
                      onInput={formChangeHandler}
                      name={"password"}
                      placeholder="Введите пароль"
                      className="auth-form__input"
                    />
                  </div>
                  <div className="auth-form__input-box">
                    <label htmlFor="" className="auth-form__input-label">
                      Повторите пароль
                    </label>
                    <input
                      type="password"
                      onInput={formChangeHandler}
                      name={"password_check"}
                      placeholder="Введите пароль"
                      className="auth-form__input"
                    />
                  </div>
                </div>
                <button
                  onClick={registerClickHandler}
                  className="auth-form__submit"
                >
                  Зарегистрироваться
                </button>
                <Link to={"/login"} className="auth-form__link">
                  У меня уже есть аккаунт
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
