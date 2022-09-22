import React, { useState, useEffect, useRef } from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { useDynamicAdaptive } from "../hooks/hooks.dynamicadaptive";
export default function Header() {
  const [dynamicRef, setDynamicRef] = useState([]);
  const { addDynamicRefs } = useDynamicAdaptive();

  useEffect(() => {
    if (dynamicRef.length) {
      addDynamicRefs(dynamicRef);
    }
  }, [dynamicRef]);

  return (
    <header className="header">
      <div className="header__hf-container">
        <div className="header__mobile-search"></div>
        <div className="header__logo logo">
          <Link to={"/"} className="header__logo-link logo-link">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <Link to={"/categories"} className="header__menu-link">
                Категории
              </Link>
            </li>
            <li className="header__menu-item">
              <Link to={"/#advantages"} className="header__menu-link">
                Преимущества
              </Link>
            </li>
            <li className="header__menu-item">
              <Link to={"/about"} className="header__menu-link">
                О нас
              </Link>
            </li>
            <li className="header__menu-item">
              <Link to={"/contacts"} className="header__menu-link">
                Контакты
              </Link>
            </li>
          </ul>
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
            <input
              type="text"
              placeholder="Поиск"
              className="header__search-input"
            />
            <button
              type="submit"
              className="header__search-submit _icon-search"
            ></button>
          </div>
          <div className="header__basket _icon-basket">
            <span>1</span>
          </div>
          <div className="header__account _icon-account">
            <Link to={"/catalog"} className="header__account-link"></Link>
          </div>
        </div>
      </div>
    </header>
  );
}
