import React, { useState, useEffect, useRef, useContext } from "react";
import Rating from "react-rating";
import { useDynamicAdaptive } from "../../hooks/hooks.dynamicadaptive";
import { HeaderContext } from "../../context/HeaderContext";
import useAuth from "../../hooks/hooks.auth";
import useHttp from "../../hooks/hooks.http";
import placeholderImg from "../../img/placeholder.jpeg";

export default function ProductMain({ product }) {
  const [dynamicRef, setDynamicRef] = useState([]);
  const { addDynamicRefs } = useDynamicAdaptive();
  const [currentImage, setCurrentImage] = useState("");
  const [mainImage, setMainImage] = useState("");
  const { add } = useContext(HeaderContext);
  const [openPopup, setOpenPopup] = useState([]);
  const [globalOpenPopup, setGlobalOpenPopup] = useState(false);
  const { token } = useAuth();
  const { request, isOk } = useHttp();
  useEffect(() => {
    if (dynamicRef.length) {
      addDynamicRefs(dynamicRef);
    }
  }, [dynamicRef]);

  useEffect(() => {
    if (product) {
      setCurrentImage(product.main_image);
      setMainImage(product.main_image);
      product?.marks.map((mark) => {
        setOpenPopup((prevState) => {
          prevState.push({ isOpen: false });
          return prevState;
        });
      });
    }
  }, [product]);
  useEffect(() => {
    console.log(token);
  }, []);

  useEffect(() => {
    if (globalOpenPopup) document.documentElement.classList.add("lock");
    else document.documentElement.classList.remove("lock");
  }, [globalOpenPopup]);
  const changeImageHandler = (event) => {
    const parent = event.target.closest(".product-images__previews");
    parent.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");
    setCurrentImage(event.target.src);
  };
  function addClickHandler(event) {
    add(product);
  }

  async function subscribeClickHandler(event) {
    try {
      const data = await request(
        `/api/subscriptions/products/${product.id}/`,
        "POST",
        {},
        {
          Authorization: `Bearer ${token}`,
        }
      );
      event.target.innerText = "Вы успешно подписаны на данный товар";
    } catch (e) {
      event.target.innerText = "Вы уже подписаны";
    }
  }

  function imageClickHandler(event) {
    event.target
      .closest(".product-images__main-image")
      .classList.toggle("open");
  }

  return (
    <>
      <section
        className={
          "page__product-main product-main" +
          " " +
          (!product?.in_stock ? "no-avl" : "")
        }
      >
        <div className="product-main__container container-1">
          <div className="product-main__box">
            <div className="product-actions__mobile"></div>
            <div className={"product-main__images-box product-images"}>
              <div
                onClick={imageClickHandler}
                className={"product-images__main-image"}
              >
                <img
                  loading="lazy"
                  src={currentImage || placeholderImg}
                  alt=""
                />
              </div>
              <div className={"product-images__previews"}>
                <div className="product-images__previews-image">
                  <img
                    className="active"
                    onClick={changeImageHandler}
                    src={mainImage}
                    alt=""
                  />
                </div>
                {product?.images.map((imageItem) => {
                  return (
                    <div className="product-images__previews-image">
                      <img
                        onClick={changeImageHandler}
                        src={imageItem.image}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="product-main__actions product-actions">
              <h1
                ref={(ref) =>
                  setDynamicRef((prev) => {
                    prev.push(ref);
                    return prev;
                  })
                }
                data-da=".product-actions__mobile, 990"
                className="product-actions__title"
              >
                {product?.name}, {product?.package_size}
              </h1>
              <div className="product-actions__info">
                <div className="product-actions__info-item">
                  <div className="product-actions__info-item-side">
                    Бренд:{" "}
                    <span>
                      <a href={"/brands/" + product?.brand.link}>
                        {product?.brand.name}
                      </a>
                    </span>
                  </div>

                  {/*<div className="product-actions__info-item-side">*/}
                  {/*  {product?.article && (*/}
                  {/*    <p>*/}
                  {/*      Артикул: <span>{product?.article}</span>*/}
                  {/*    </p>*/}
                  {/*  )}*/}
                  {/*</div>*/}
                </div>
                {product?.reviews.length ? (
                  <div className="product-actions__info-item">
                    <div className="product-actions__info-item-side">
                      <div className="product-actions__rating product-rating">
                        <Rating
                          readonly={true}
                          emptySymbol={"rating-item"}
                          initialRating={product?.rating}
                          fullSymbol={"rating-item-fill"}
                        />
                        <div className="product-rating__value">
                          {product?.reviews.length} отзывов
                        </div>
                      </div>
                    </div>
                    <div className="product-actions__info-item-side _icon-share"></div>
                  </div>
                ) : (
                  ""
                )}
                <div className="product-actions__info-item">
                  <div className="product-actions__info-item-side">
                    Страна производитель:
                  </div>
                  <div className="product-actions__info-item-side">
                    {product?.made_in}
                  </div>
                </div>
              </div>
              <div className="product-actions__footer">
                {product?.marks.length ? (
                  <div className="product-actions__marks">
                    {product?.marks.map((mark, id) => {
                      if (mark.image !== null) {
                        return (
                          <>
                            <div
                              key={mark.id}
                              onClick={() => {
                                setOpenPopup((prevState) => {
                                  prevState[id] = { isOpen: true };
                                  return prevState;
                                });
                                setGlobalOpenPopup(true);
                              }}
                              className="product-actions__mark"
                            >
                              <img
                                loading="lazy"
                                src={mark.image}
                                alt={mark.name}
                              />
                            </div>
                            {openPopup[id]?.isOpen && globalOpenPopup ? (
                              <div key={mark.id} className="popup-mark">
                                <div className="popup-mark__wrapper">
                                  <div className="popup-mark__content">
                                    <span
                                      onClick={() => {
                                        setOpenPopup((prevState) => {
                                          prevState[id] = { isOpen: false };
                                          return prevState;
                                        });
                                        setGlobalOpenPopup(false);
                                      }}
                                      className={"popup-mark__close"}
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
                                    </span>
                                    <div className="popup-mark__header">
                                      <div className="popup-mark__image">
                                        <img
                                          loading="lazy"
                                          src={mark.image}
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="popup-mark__text">
                                      <p>{mark.description}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </>
                        );
                      } else return "";
                    })}
                  </div>
                ) : (
                  ""
                )}
                <div className="product-actions__price-box">
                  {product?.total_discount !== 0 ? (
                    <div className="product-actions__old-price">
                      {product?.price} тг
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="product-actions__price">
                    {product?.discounted_price} тг
                  </div>
                </div>
                {product?.in_stock ? (
                  <button
                    onClick={addClickHandler}
                    className="product-actions__basket"
                  >
                    Добавить в корзину
                  </button>
                ) : !!token ? (
                  <button
                    onClick={subscribeClickHandler}
                    className="product-actions__basket"
                  >
                    Подписаться на обновление
                  </button>
                ) : (
                  <button className="product-actions__basket">
                    Нет в наличии
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
