import React, { useState, useEffect, useRef, useContext } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Aside from "../Aside";
import Input from "../../Input";

export default function AccountBonuses() {
  return (
    <>
      <Header />
      <main className="account-main">
        <div className="account-main__wrapper">
          <Aside />
          <section className="page__account-info account-info">
            <div className="account-info__wrapper">
              <h1 className="account-info__title">Бонусная система</h1>
              <div className="account__bonuses">
                <div className="account__bonuses__title">Мои бонусы</div>
                <div className="account__bonuses__value">159.00 тг</div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
