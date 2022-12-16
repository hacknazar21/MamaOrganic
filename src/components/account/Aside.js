import React, { useState, useEffect, useRef, useContext } from "react";
import useHttp from "../../hooks/hooks.http";
import useAuth from "../../hooks/hooks.auth";
import placeholderImg from "../../img/placeholder.jpeg";

export default function Aside({ userData }) {
  useEffect(() => {
    document.title = "Личный кабинет";
  }, []);
  const { logout } = useAuth();
  function logoutClickHandler() {
    logout();
    window.location.replace("/");
  }

  return (
    <>
      <aside className="account-aside">
        <div className="account-aside__wrapper">
          <a
            href={"/account/info"}
            className="account-aside__user account-aside-user"
          >
            <div className="account-aside-user__avatar">
              <img
                loading="lazy"
                src={userData?.info.profile_image || placeholderImg}
                alt=""
              />
            </div>
            <div className="account-aside-user__info">
              <div className="account-aside-user__info-name">
                {userData?.first_name} {userData?.last_name}
              </div>
              <div className="account-aside-user__info-tel">
                {userData?.info.phone}
              </div>
            </div>
            <div className="account-aside-user__arrow _icon-arrow-slider"></div>
          </a>
          <menu className="account-aside__menu account-aside-menu">
            <ul className="account-aside-menu__list">
              <li className="account-aside-menu__item">
                <a
                  href="/account/orders"
                  className="account-aside-menu__link _icon-bag"
                >
                  Мои заказы
                </a>
              </li>
              {/*<li className="account-aside-menu__item">*/}
              {/*  <a*/}
              {/*    href="/account/bonuses"*/}
              {/*    className="account-aside-menu__link _icon-percent"*/}
              {/*  >*/}
              {/*    Бонусная система*/}
              {/*  </a>*/}
              {/*</li>*/}
              <li className="account-aside-menu__item">
                <button
                  onClick={logoutClickHandler}
                  className="account-aside-menu__link"
                >
                  Выйти
                </button>
              </li>
            </ul>
          </menu>
        </div>
      </aside>
    </>
  );
}
