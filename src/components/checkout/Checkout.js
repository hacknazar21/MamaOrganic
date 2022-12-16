import React, { useState, useEffect, useContext } from "react";
import Header from "../Header";
import Footer from "../Footer";
import CheckoutForm from "./CheckoutForm";
import { HeaderContext } from "../../context/HeaderContext";
import CheckoutProducts from "./CheckoutProducts";
import useHttp from "../../hooks/hooks.http";
let timeOut = null;

export default function Checkout() {
  const [priceData, setPriceData] = useState({});
  const [products, setProducts] = useState([]);
  const [discountText, setDiscountText] = useState("");
  const { request } = useHttp();
  const [promocodeData, setPromocodeData] = useState({});
  const { get, storageLength, addOne, removeById, removeOne } =
    useContext(HeaderContext);
  const prods = get();
  useEffect(() => {
    setProducts(prods);
    document.title = "Корзина";
  }, [prods]);
  const getDiscountText = async () => {
    try {
      const data = await request("/api/content/find/discount-text/");
      setDiscountText(data?.text);
    } catch (e) {}
  };
  const getDiscount = async () => {
    try {
      const productsToCalculate = [];
      for (const productsToCalculateElement of products) {
        productsToCalculate.push({
          amount: productsToCalculateElement.count,
          product: productsToCalculateElement.id,
        });
      }
      const data = await request(
        "/api/orders/calculate-price/",
        "POST",
        {
          promocode: promocodeData?.code,
          products: productsToCalculate,
        },
        {
          "Content-Type": "application/json",
        }
      );
      setPriceData(data);
    } catch (e) {}
  };
  useEffect(() => {
    if (products !== null && products.length) {
      getDiscount();
    }
  }, [JSON.stringify(products), JSON.stringify(promocodeData)]);

  useEffect(() => {
    const prods = get();

    setProducts(prods);
  }, [storageLength]);
  useEffect(() => {
    getDiscountText();
  }, []);
  function promoChangeHandler(event) {
    if (timeOut !== null) {
      clearTimeout(timeOut);
    }
    if (event.target.value !== "")
      timeOut = setTimeout(async () => {
        try {
          const data = await request(`/api/promocodes/${event.target.value}`);
          event.target.classList.remove("error");
          setPromocodeData(data);
        } catch (e) {
          event.target.classList.add("error");
          setPromocodeData({});
        }
      }, 800);
    else {
      event.target.classList.remove("error");
      setPromocodeData({});
    }
  }
  return (
    <>
      <Header />
      <main className="checkout-main">
        <div className="checkout__hf-container">
          <CheckoutForm
            priceData={priceData}
            products={products}
            discountText={discountText}
            promoChangeHandler={promoChangeHandler}
          />
          <CheckoutProducts
            products={products}
            addOne={addOne}
            removeById={removeById}
            removeOne={removeOne}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
