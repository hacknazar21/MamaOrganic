import React, { useState, useEffect, useContext } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Aside from "../Aside";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/hooks.auth";
import useHttp from "../../../hooks/hooks.http";
import { ProfileContext } from "../../../context/ProfileContext";

export default function AccountOrder() {
  const { userData } = useContext(ProfileContext);
  const { order_id } = useParams();
  const [order, setOrder] = useState(null);
  const { request } = useHttp();
  const { token } = useAuth();
  useEffect(() => {
    (async () => {
      if (token) {
        const data = await request(`/api/orders/${order_id}/`, "GET", null, {
          Authorization: `Bearer ${token}`,
        });
        if (data) {
          setOrder(data);
        }
      }
    })();
  }, [token]);
  return (
    <>
      <Header />
      <main className="account-orders-main">
        <div className="account-main__wrapper">
          <Aside userData={userData} />
          <section className="page__account-info account-info">
            <div className="account-info__wrapper">
              <h1 className="account-info__title">Заказ № {order_id}</h1>
              {/*<div className="account-info__subtitle">*/}
              {/*</div>*/}
              <div className="account-order">
                <table className="account-order__table">
                  <thead>
                    <tr>
                      <th>Фото </th>
                      <th>Артикул</th>
                      <th>Цена</th>
                      <th>Название</th>
                      <th>Количество </th>
                      <th>Адрес</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order?.products_amount.map((product) => {
                      return (
                        <tr>
                          <td>
                            <div>
                              <img
                                src={product.product.main_image}
                                alt={product.product.name}
                              />
                            </div>
                          </td>
                          <td>12343125</td>
                          <td>{product.product.price * product.amount} тг</td>
                          <td>{product.product.name}</td>
                          <td>{product.amount}</td>
                          <td>
                            г.{order.customer_city}, {order.customer_street},{" "}
                            {order.customer_house}, {order.customer_floor} этаж,{" "}
                            кв. {order.customer_apartment}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="account-order__mobile">
                  <div className="account-order__items">
                    {order?.products_amount.map((product) => {
                      return (
                        <div className="account-order__item account-order-item">
                          <div className="account-order-item__image">
                            <img
                              src={product.product.main_image}
                              alt={product.product.name}
                            />
                          </div>
                          <div className="account-order-item__info">
                            <div className="account-order-item__article">
                              {product.product.article}
                            </div>
                            <div className="account-order-item__name">
                              {product.product.name}
                            </div>
                            <div className="account-order-item__price">
                              {product.product.price * product.amount} тг
                            </div>
                            <div className="account-order-item__value">
                              Количество: {product.amount}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
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
