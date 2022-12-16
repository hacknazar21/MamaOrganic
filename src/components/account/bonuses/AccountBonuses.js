import React, { useState, useEffect, useRef, useContext } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Aside from "../Aside";
import { ProfileContext } from "../../../context/ProfileContext";
import useAuth from "../../../hooks/hooks.auth";
import useHttp from "../../../hooks/hooks.http";

export default function AccountBonuses() {
  const { userData } = useContext(ProfileContext);
  const [ordersMoney, setOrdersMoney] = useState(0);
  const { token } = useAuth();
  const { request } = useHttp();
  useEffect(() => {
    console.log(userData);
    (async () => {
      if (token) {
        const data = await request("/api/orders/", "GET", null, {
          Authorization: `Bearer ${token}`,
        });
        if (data && data.length) {
          let sum = 0;
          for (const datum of data) {
            if (datum.is_paid) {
              for (const productsAmountElement of data.products_amount) {
                sum +=
                  productsAmountElement.product.price *
                  productsAmountElement.amount;
              }
            }
          }
          setOrdersMoney(sum);
        }
      }
    })();
  }, [token]);
  return (
    <>
      <Header />
      <main className="account-main">
        <div className="account-main__wrapper">
          <Aside userData={userData} />
          <section className="page__account-info account-info">
            <div className="account-info__wrapper">
              <h1 className="account-info__title">Бонусная система</h1>
              <div className="account__bonuses">
                <div className="account__bonuses-title">Мои бонусы</div>
                <div className="account__bonuses-value">
                  {userData?.info.bonus_amount} тг
                </div>
                <div className="account__bonuses-purchases">
                  Мои покупки: {ordersMoney} тг
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
