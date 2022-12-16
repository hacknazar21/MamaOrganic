import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { HeaderContext } from "../context/HeaderContext";
import { Link } from "react-router-dom";

export function Basket() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState("0");
  const [totalPriceNumber, setTotalPriceNumber] = useState("0");
  const { get, removeById, storageLength } = useContext(HeaderContext);
  useEffect(() => {
    const prods = get();
    setProducts(prods);
  }, []);
  useEffect(() => {
    if (products !== null) {
      let newPrice = 0;
      for (const product of products) {
        newPrice += product.price * product.count;
      }
      setTotalPrice(newPrice.toLocaleString("en").replaceAll(",", " "));
      setTotalPriceNumber(newPrice);
    }
  }, [products]);
  useEffect(() => {
    const prods = get();
    // @ts-ignore
    setProducts(prods);
  }, [storageLength]);
  const closeClickHandler = (event) => {
    setProducts((prev) => {
      return prev.filter(
        (prevProduct, index) => index !== event.target.dataset.productId
      );
    });
    removeById(event.target.dataset.productId);
  };
  return (
    <div className="basket basket-window">
      <div className="basket__header">
        <div className="basket__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M3 8.5H21L20.0332 19.6724C19.9437 20.7063 19.0783 21.5 18.0406 21.5H5.9594C4.92166 21.5 4.05631 20.7063 3.96685 19.6724L3 8.5Z"
              stroke="#41492C"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <path
              d="M7 11.5V8.07143C7 5.5467 9.23858 3.5 12 3.5C14.7614 3.5 17 5.5467 17 8.07143V11.5"
              stroke="#41492C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="basket__title">Корзина</div>
      </div>
      <div className="basket__items">
        {products &&
          products.map((product, index) => {
            return (
              <div key={index} className="basket__item basket-item">
                <div className="basket-item__image">
                  <img
                    loading="lazy"
                    src={product.main_image}
                    alt={product.name}
                  />
                </div>
                <div className="basket-item__text">
                  <div className="basket-item__title">
                    <a href={"/product/" + product.link}>{product.name}</a>
                    <p>
                      {product.price.toLocaleString("en").replace(",", " ")} тг
                      x{product.count}
                    </p>
                  </div>
                </div>
                <button
                  data-product-id={index}
                  onClick={closeClickHandler}
                  className="basket-item__remove"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4099 11.9999L17.7099 7.70994C17.8982 7.52164 18.004 7.26624 18.004 6.99994C18.004 6.73364 17.8982 6.47825 17.7099 6.28994C17.5216 6.10164 17.2662 5.99585 16.9999 5.99585C16.7336 5.99585 16.4782 6.10164 16.2899 6.28994L11.9999 10.5899L7.70994 6.28994C7.52164 6.10164 7.26624 5.99585 6.99994 5.99585C6.73364 5.99585 6.47824 6.10164 6.28994 6.28994C6.10164 6.47825 5.99585 6.73364 5.99585 6.99994C5.99585 7.26624 6.10164 7.52164 6.28994 7.70994L10.5899 11.9999L6.28994 16.2899C6.19621 16.3829 6.12182 16.4935 6.07105 16.6154C6.02028 16.7372 5.99414 16.8679 5.99414 16.9999C5.99414 17.132 6.02028 17.2627 6.07105 17.3845C6.12182 17.5064 6.19621 17.617 6.28994 17.7099C6.3829 17.8037 6.4935 17.8781 6.61536 17.9288C6.73722 17.9796 6.86793 18.0057 6.99994 18.0057C7.13195 18.0057 7.26266 17.9796 7.38452 17.9288C7.50638 17.8781 7.61698 17.8037 7.70994 17.7099L11.9999 13.4099L16.2899 17.7099C16.3829 17.8037 16.4935 17.8781 16.6154 17.9288C16.7372 17.9796 16.8679 18.0057 16.9999 18.0057C17.132 18.0057 17.2627 17.9796 17.3845 17.9288C17.5064 17.8781 17.617 17.8037 17.7099 17.7099C17.8037 17.617 17.8781 17.5064 17.9288 17.3845C17.9796 17.2627 18.0057 17.132 18.0057 16.9999C18.0057 16.8679 17.9796 16.7372 17.9288 16.6154C17.8781 16.4935 17.8037 16.3829 17.7099 16.2899L13.4099 11.9999Z"
                      fill="#717C97"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        {!products.length && (
          <p className="basket__empty">Товаров в корзине пока нет</p>
        )}
      </div>
      <div className="basket__sum">
        <span>Итого:</span> {totalPrice} тг
      </div>
      <p className="basket__min">*Минимальная сумма заказа 5000 тг</p>
      {totalPriceNumber >= 5000 ? (
        <a href="/checkout" className="basket__checkout">
          Оформить заказ
        </a>
      ) : (
        ""
      )}
    </div>
  );
}
