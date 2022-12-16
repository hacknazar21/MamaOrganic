import React, { useState, useEffect, useRef, useContext } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Aside from "../Aside";
import Input from "../../Input";
import useAuth from "../../../hooks/hooks.auth";
import useHttp from "../../../hooks/hooks.http";
import { ProfileContext } from "../../../context/ProfileContext";
import placeholderImg from "../../../img/placeholder.jpeg";

export default function AccountInfo() {
  const { userData } = useContext(ProfileContext);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    city: "",
    street: "",
    house: "",
    apartment: "",
    avatarPreview: "",
    avatar: null,
  });
  const { request } = useHttp();
  const { token } = useAuth();
  useEffect(() => {
    if (userData) {
      setForm({
        ...userData,
        address: userData?.info.address,
        phone: userData?.info.phone,
        avatarPreview: userData?.info.profile_image,
      });
    }
  }, [userData]);
  const changeInputHandler = (event) => {
    setForm((prev) => {
      prev[event.target.name] = event.target.value;
      return prev;
    });
  };
  const saveClickHandler = async (event) => {
    for (const formKey in form) {
      if (form[formKey] === "") {
        return;
      }
    }
    try {
      await request(
        "/api/auth/profile/",
        "PATCH",
        {
          ...form,
          info: {
            apartment: form.apartment,
            house: form.house,
            street: form.street,
            city: form.city,
            floor: form.floor,
            phone: form.phone,
          },
        },
        {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      );
      if (form.avatar) {
        const avatarForm = new FormData();
        avatarForm.set("profile_image", form.avatar);
        await request(
          "/api/auth/profile/photo/",
          "POST",
          avatarForm,
          {
            Authorization: `Bearer ${token}`,
          },
          true
        );
      }
      window.location.reload();
    } catch (e) {}
  };
  const avatarChangeHandler = (event) => {
    setForm((prev) => {
      prev["avatarPreview"] = URL.createObjectURL(event.target.files[0]);
      prev["avatar"] = event.target.files[0];
      return { ...prev };
    });
  };
  return (
    <>
      <Header />
      <main className="account-main">
        <div className="account-main__wrapper">
          <Aside userData={userData} />
          <section className="page__account-info account-info">
            <div className="account-info__wrapper">
              <h1 className="account-info__title">Личные данные</h1>
              <div className="account-info__form">
                <div className="account-info__header">
                  <div className="account-info__image">
                    <label
                      htmlFor={"avatar"}
                      className="account-info__image-label"
                    >
                      <img
                        loading="lazy"
                        src={form.avatarPreview || placeholderImg}
                        alt=""
                      />
                    </label>
                    <input
                      onChange={avatarChangeHandler}
                      id={"avatar"}
                      name={"avatar"}
                      type="file"
                      className="account-info__image-input"
                    />
                  </div>
                  <div className="account-info__name">
                    {userData?.first_name} {userData?.last_name}
                  </div>
                </div>
                <div className="account-info__inputs">
                  <Input
                    changeHandler={changeInputHandler}
                    type={"text"}
                    label={"Имя"}
                    defaultValue={userData?.first_name}
                    name={"first_name"}
                    htmlFor={"user-name"}
                  />
                  <Input
                    changeHandler={changeInputHandler}
                    type={"text"}
                    label={"Фамилия"}
                    defaultValue={userData?.last_name}
                    name={"last_name"}
                    htmlFor={"user-lastname"}
                  />
                  <Input
                    changeHandler={changeInputHandler}
                    type={"text"}
                    label={"Мобильный телефон"}
                    defaultValue={userData?.info.phone}
                    name={"phone"}
                    htmlFor={"user-tel"}
                  />
                  <Input
                    changeHandler={changeInputHandler}
                    type={"email"}
                    label={"Почта"}
                    defaultValue={userData?.email}
                    name={"email"}
                    htmlFor={"user-email"}
                  />
                  <div className="account-info__inputs-flex">
                    <Input
                      changeHandler={changeInputHandler}
                      type={"text"}
                      label={"Город"}
                      defaultValue={userData?.info.city}
                      name={"city"}
                      htmlFor={"user-city"}
                    />
                    <Input
                      changeHandler={changeInputHandler}
                      type={"text"}
                      label={"Улица"}
                      defaultValue={userData?.info.street}
                      name={"street"}
                      htmlFor={"user-street"}
                    />
                  </div>
                  <div className="account-info__inputs-grid">
                    <Input
                      changeHandler={changeInputHandler}
                      type={"text"}
                      label={"Дом"}
                      defaultValue={userData?.info.house}
                      name={"house"}
                      htmlFor={"user-house"}
                    />
                    <Input
                      changeHandler={changeInputHandler}
                      type={"text"}
                      label={"Этаж"}
                      defaultValue={userData?.info.floor}
                      name={"floor"}
                      htmlFor={"user-floor"}
                    />
                    <Input
                      changeHandler={changeInputHandler}
                      type={"text"}
                      label={"Квартира"}
                      defaultValue={userData?.info.apartment}
                      name={"apartment"}
                      htmlFor={"user-flat"}
                    />
                  </div>
                </div>
                <div className="account-info__save">
                  <button
                    onClick={saveClickHandler}
                    className="basket__checkout"
                  >
                    Сохранить
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
