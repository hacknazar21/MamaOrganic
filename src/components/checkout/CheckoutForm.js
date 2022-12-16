import React, { useContext, useState, useEffect } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import useHttp from "../../hooks/hooks.http";
import useAuth from "../../hooks/hooks.auth";
import { HeaderContext } from "../../context/HeaderContext";
export default function CheckoutForm({
  priceData,
  products,
  discountText,
  promoChangeHandler,
}) {
  const [form, setForm] = useState({
    customer_city: "",
    customer_street: "",
    customer_house: "",
    customer_floor: "",
    customer_apartment: "",
    customer_first_name: "",
    customer_last_name: "",
    customer_email: "",
    customer_phone: "",
    payment_method: "CARD",
    address_comment: "",
    promocode: "",
  });
  const [isBonusSpend, setIsBonusSpend] = useState(false);
  const [productsSale, setProductsSale] = useState([]);
  const { request, error, isOk } = useHttp();

  const formChangeHandler = (event) => {
    setForm((prev) => {
      prev[event.target.name] = event.target.value;
      return prev;
    });
    console.log(event.target.name);
    if (event.target.name === "promocode") {
      promoChangeHandler(event);
    }
  };
  const { userData } = useContext(ProfileContext);
  const { clearBasket } = useContext(HeaderContext);
  const { token } = useAuth();
  useEffect(() => {
    if (userData)
      setForm({
        customer_city: userData?.info.city || "",
        customer_street: userData?.info.street || "",
        customer_house: userData?.info.house || "",
        customer_floor: userData?.info.floor || "",
        customer_apartment: userData?.info.apartment || "",
        customer_first_name: userData?.first_name || "",
        customer_last_name: userData?.last_name || "",
        customer_email: userData?.email || "",
        customer_phone: userData?.info.phone || "",
        payment_method: "CARD",
        address_comment: "",
        promocode: "",
      });
  }, [userData]);
  useEffect(() => {
    if (products && products.length)
      setProductsSale((prevState) => {
        const prods = [];
        for (const product of products) {
          prods.push({
            amount: product.count,
            product: product.id,
          });
        }
        return prods;
      });
  }, [products]);

  const clickPayHandler = async (event) => {
    for (const formKey in form) {
      if (
        form[formKey] === "" &&
        formKey !== "address_comment" &&
        formKey !== "customer_apartment" &&
        formKey !== "promocode"
      ) {
        const input = document.querySelector(`input[name="${formKey}"]`);
        if (input) {
          setTimeout(() => {
            input.classList.remove("error");
          }, 2000);
          input.classList.add("error");
        }
      }
    }
    for (const formKey in form) {
      if (
        form[formKey] === "" &&
        formKey !== "address_comment" &&
        formKey !== "customer_apartment" &&
        formKey !== "promocode"
      ) {
        const input = document.querySelector(`input[name="${formKey}"]`);
        input.focus();
        return;
      }
    }
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      const bonuses_spent = isBonusSpend ? userData?.info.bonus_amount : "0";
      const data = await request(
        "/api/orders/",
        "POST",
        {
          products: [...productsSale],
          bonuses_spent: bonuses_spent,
          ...form,
        },
        { ...headers }
      );
      if (data && data.payment_url) {
        clearBasket();
        window.location.replace(data.payment_url);
      } else if (data) {
        clearBasket();
        window.location.replace("/");
      }
    } catch (e) {}
  };

  function spendBonusHandler() {
    setIsBonusSpend((prevState) => !prevState);
  }

  return (
    <>
      <section className="page__checkout-form checkout-form">
        <h1 className="checkout-form__title">Оформление заказа</h1>
        <div className="checkout-form__items">
          <div className="checkout-form__item">
            <div className="checkout-form__item-title">Способ оплаты</div>
            <div className="checkout-form__item-inputs-flex">
              <div className="checkout-form__item-input-checkbox-box">
                <input
                  type="radio"
                  name="payment_method"
                  value={"CARD"}
                  id={"input-card"}
                  onChange={formChangeHandler}
                  defaultChecked={true}
                  className="checkout-form__item-input-checkbox-input"
                />
                <label
                  htmlFor={"input-card"}
                  className="checkout-form__item-input-checkbox-label"
                >
                  Карта
                </label>
              </div>
              <div className="checkout-form__item-input-checkbox-box">
                <input
                  id={"input-cash"}
                  name={"payment_method"}
                  value={"CASH"}
                  type="radio"
                  onChange={formChangeHandler}
                  className="checkout-form__item-input-checkbox-input"
                />
                <label
                  htmlFor={"input-cash"}
                  className="checkout-form__item-input-checkbox-label"
                >
                  Наличные
                </label>
              </div>
            </div>
          </div>
          <div className="checkout-form__info">
            <bold>Стоимость доставки - 1000₸.</bold>
            <br />
            Доставка осуществляется в квадрате улиц Аль-Фараби, Восточная
            Объездная, Рыскулова, Яссауи (в том числе мкр.Казахфильм,
            мкр.Баганашыл, Горный Гигант, мкр.Мирас).
            <br />
            <br />
            Доставка за пределами указанного квадрата улиц рассчитывается
            отдельно и отправляется курьерской службой и оплачивается засчет
            получателя.
            <br />
            <br />
            <br />
            <bold>
              Бесплатная доставка по Алматы на заказ суммой от 15000₸.
            </bold>
          </div>

          <div className="checkout-form__item">
            <div className="checkout-form__item-title">Адрес доставки</div>
            <div className="checkout-form__item-inputs">
              <div className="checkout-form__item-input-box">
                <label className="checkout-form__item-input-label">Город</label>
                <input
                  type="text"
                  onInput={formChangeHandler}
                  defaultValue={userData?.info.city}
                  name="customer_city"
                  className="checkout-form__item-input-input"
                />
              </div>
              <div className="checkout-form__item-input-box">
                <label className="checkout-form__item-input-label">Улица</label>
                <input
                  type="text"
                  onInput={formChangeHandler}
                  defaultValue={userData?.info.street}
                  name="customer_street"
                  className="checkout-form__item-input-input"
                />
              </div>
              <div className="checkout-form__item-input-box">
                <label className="checkout-form__item-input-label">Дом</label>
                <input
                  onInput={formChangeHandler}
                  name={"customer_house"}
                  defaultValue={userData?.info.house}
                  type="text"
                  className="checkout-form__item-input-input"
                />
              </div>
              <div className="checkout-form__item-input-box">
                <label className="checkout-form__item-input-label">Этаж</label>
                <input
                  onInput={formChangeHandler}
                  name={"customer_floor"}
                  defaultValue={userData?.info.floor}
                  type="text"
                  className="checkout-form__item-input-input"
                />
              </div>
              <div className="checkout-form__item-input-box">
                <label className="checkout-form__item-input-label">
                  Номер квартиры / офиса
                </label>
                <input
                  onInput={formChangeHandler}
                  name={"customer_apartment"}
                  defaultValue={userData?.info.apartment}
                  type="text"
                  className="checkout-form__item-input-input"
                />
              </div>
              <div className="checkout-form__item-input-box">
                <label className="checkout-form__item-input-label">
                  Комментарий к доставке
                </label>
                <textarea
                  onInput={formChangeHandler}
                  name={"address_comment"}
                  className="checkout-form__item-input-input"
                />
              </div>
            </div>
          </div>
          <div className="checkout-form__item">
            <div className="checkout-form__item-title">
              Информация о покупателе
            </div>
            <div className="checkout-form__item-inputs">
              <div className="checkout-form__item-input-box">
                <label className="checkout-form__item-input-label">Имя</label>
                <input
                  onInput={formChangeHandler}
                  type="text"
                  defaultValue={userData?.first_name}
                  name="customer_first_name"
                  className="checkout-form__item-input-input"
                />
              </div>
              <div className="checkout-form__item-input-box">
                <label className="checkout-form__item-input-label">
                  Фамилия
                </label>
                <input
                  onInput={formChangeHandler}
                  name={"customer_last_name"}
                  defaultValue={userData?.last_name}
                  type="text"
                  className="checkout-form__item-input-input"
                />
              </div>
              <div className="checkout-form__item-input-box">
                <label className="checkout-form__item-input-label">Email</label>
                <input
                  onInput={formChangeHandler}
                  name={"customer_email"}
                  defaultValue={userData?.email}
                  type="text"
                  className="checkout-form__item-input-input"
                />
              </div>
              <div className="checkout-form__item-input-box">
                <label className="checkout-form__item-input-label">
                  Номер телефона
                </label>
                <input
                  onInput={formChangeHandler}
                  name={"customer_phone"}
                  defaultValue={userData?.info.phone}
                  type="text"
                  className="checkout-form__item-input-input"
                />
              </div>
            </div>
          </div>
          <div className="checkout-form__item">
            <div className="checkout-form__item-title">
              У меня есть промокод
            </div>
            <div className="checkout-form__item-inputs">
              <div className="checkout-form__item-input-box">
                <label className="checkout-form__item-input-label">
                  Введите промокод
                </label>
                <input
                  onInput={formChangeHandler}
                  type="text"
                  name="promocode"
                  className="checkout-form__item-input-input"
                />
              </div>
            </div>
          </div>
          <div className="checkout-form__info">
            <p>{discountText}</p>
          </div>
          <div className="checkout-form__item">
            {userData && parseInt(userData?.info.bonus_amount) !== 0 ? (
              <div className="checkout-form__item-checkbox">
                <input
                  type="checkbox"
                  name="spend_bonus"
                  id={"spend_bonus"}
                  onChange={spendBonusHandler}
                  defaultChecked={false}
                  className="checkout-form__item-checkbox-input"
                />
                <label
                  htmlFor={"spend_bonus"}
                  className="checkout-form__item-checkbox-label"
                >
                  Потратить бонусы: {parseInt(userData?.info.bonus_amount)} тг
                </label>
              </div>
            ) : (
              ""
            )}
            {priceData.order_discount && priceData.order_discount !== 0 ? (
              <>
                <span className={"checkout-form__item-price-info"}>
                  Скидка {priceData.order_discount}%
                </span>
                <br />
              </>
            ) : (
              ""
            )}
            {priceData.delivery_price && priceData.delivery_price !== 0 ? (
              <>
                <span className={"checkout-form__item-price-info"}>
                  Доставка {priceData.delivery_price}₸
                </span>
                <br />
              </>
            ) : (
              ""
            )}
            <div className="basket__sum">
              <span>Итого: </span>
              {/*{isBonusSpend ? (*/}
              {/*  <>*/}
              {/*    <span*/}
              {/*      className={"product-price__old"}*/}
              {/*      style={{ marginRight: 10 }}*/}
              {/*    >*/}
              {/*      {totalPrice}*/}
              {/*    </span>*/}
              {/*    {parseInt(totalPrice.replaceAll(" ", "")) -*/}
              {/*      parseInt(userData?.info.bonus_amount)}*/}
              {/*  </>*/}
              {/*) : (*/}
              {/*  totalPrice*/}
              {/*)}{" "}*/}
              {priceData.total_sum !== priceData.total_paid ? (
                <>
                  <span
                    className={"product-price__old"}
                    style={{ marginRight: 10 }}
                  >
                    {priceData.total_sum
                      ?.toLocaleString("en")
                      .replaceAll(",", " ")}
                  </span>
                  {priceData.total_paid
                    ?.toLocaleString("en")
                    .replaceAll(",", " ")}
                </>
              ) : (
                priceData.total_paid?.toLocaleString("en").replaceAll(",", " ")
              )}
              ₸
            </div>
            <button
              onClick={clickPayHandler}
              disabled={!products?.length}
              className="basket__checkout"
            >
              Оплатить
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
