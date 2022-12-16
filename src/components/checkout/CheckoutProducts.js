import React, { useState, useEffect, useContext } from "react";
import { HeaderContext } from "../../context/HeaderContext";
import placeholderImg from "../../img/placeholder.jpeg";

export default function CheckoutProducts({
  products,
  addOne,
  removeById,
  removeOne,
}) {
  function removeProductHandler() {
    removeById(this.id);
  }
  function addOneProductHandler() {
    addOne(this.id);
  }
  function removeOneProductHandler() {
    removeOne(this.id);
  }
  return (
    <>
      <section className="page__checkout-products checkout-products">
        <div className="checkout-products__items">
          {products?.map((product, id) => {
            return (
              <div
                key={product.id}
                className="checkout-products__item checkout-product"
              >
                <div className="checkout-product__image">
                  <img
                    loading="lazy"
                    src={product.main_image || placeholderImg}
                    alt=""
                  />
                </div>
                <div className="checkout-product__info">
                  <div className="checkout-product__article">
                    <p>Артикул: {product.article}</p>
                  </div>
                  <a
                    href={"/product/" + product.link}
                    className="checkout-product__name"
                  >
                    <p>{product.name}</p>
                  </a>
                </div>
                <div className="checkout-product__amount">
                  <span className="checkout-product__amount-minus">
                    <svg
                      onClick={removeOneProductHandler.bind({ id })}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19 11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
                        fill="#8F8F8F"
                      />
                    </svg>
                  </span>
                  <span className="checkout-product__amount-value">
                    {product.count}
                  </span>
                  <span className="checkout-product__amount-plus">
                    <svg
                      onClick={addOneProductHandler.bind({ id })}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
                        fill="#8F8F8F"
                      />
                    </svg>
                  </span>
                </div>
                <div className="checkout-product__price">
                  {product.price * product.count}₸
                </div>
                <button
                  onClick={removeProductHandler.bind({ id })}
                  className="checkout-product__remove basket-item__remove"
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
        </div>
      </section>
    </>
  );
}
