import React, { useState, useEffect, useRef } from "react";
import Filter from "../Filter";
import Select from "../Select";
import Rating from "react-rating";
import useHttp from "../../hooks/hooks.http";
import placeholderImg from "../../img/placeholder.jpeg";

export default function ProductReviews({ reviews, product }) {
  const [openPopup, setOpenPopup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    rating: 0,
    content: "",
    images: null,
    imagesPreviews: [],
  });
  const { request } = useHttp();
  const changeInputHandler = (event) => {
    setForm((prev) => {
      prev[event.target.name] = event.target.value;
      return prev;
    });
  };
  const changeFileHandler = (event) => {
    setForm((prev) => {
      for (const file of event.target.files) {
        prev["imagesPreviews"].push(URL.createObjectURL(file));
      }
      const fileBuffer = [];
      Array.prototype.push.apply(fileBuffer, event.target.files); // <-- here
      prev["images"] = fileBuffer;
      return { ...prev };
    });
  };
  const removeFileHandler = (event) => {
    setForm((prev) => {
      prev["imagesPreviews"] = prev["imagesPreviews"].filter(
        (imagesPreview, id) => {
          return id != event.target.dataset.imageId;
        }
      );
      console.log(prev["images"]);
      prev["images"]?.splice(event.target.dataset.imageId, 1);
      return { ...prev };
    });
  };
  const saveClickHandler = async (event) => {
    const reviewForm = new FormData();
    for (const formKey in form) {
      if (
        form[formKey] === "" &&
        formKey !== "images" &&
        formKey !== "imagesPreviews"
      ) {
        return;
      }
    }

    for (const formKey in form) {
      if (formKey !== "images") reviewForm.append(formKey, form[formKey]);
      else if (form["images"]) {
        for (const image of form[formKey]) {
          reviewForm.append("images", image);
        }
      }
    }
    reviewForm.append("product", product.id);
    try {
      await request("/api/products/review/", "POST", reviewForm, {}, true);
      window.location.reload();
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    console.log(form);
  }, [JSON.stringify(form)]);
  useEffect(() => {
    if (openPopup) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [openPopup]);
  const createReviewDate = (date) => {};
  return (
    <>
      <section className="page__product-reviews product-reviews">
        <div className="product-reviews__count">
          Отзывы ({reviews?.length} отзывов)
        </div>
        <div className="product-reviews__container container-1">
          <div className="product-reviews__header">
            <div className="product-reviews__filter">
              <p>Показывать сначала:</p>
              <Select
                className={"filter__select"}
                title={"Новые"}
                key={"begin"}
                items={[
                  {
                    name: "Новые",
                    value: "new",
                  },
                  {
                    name: "С фотографией",
                    value: "photo",
                  },
                ]}
              />
            </div>
            <button
              onClick={() => {
                setOpenPopup(true);
              }}
              className="product-reviews__add"
            >
              Добавить отзыв
            </button>
          </div>
          <div className="product-reviews__content">
            {reviews?.map((review) => {
              return (
                <div className="product-reviews__item product-review">
                  <div className="product-review__info">
                    <div className="product-review__info-content">
                      {review.author ? (
                        <div className="product-review__info-name">
                          {review.author}
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="product-review__info-rating-box">
                        <Rating
                          readonly={true}
                          emptySymbol={"rating-item"}
                          initialRating={review.rating}
                          fullSymbol={"rating-item-fill"}
                        />
                        <div className="product-review__info-date">
                          {new Date(Date.parse(review.created_at)).getDate()}.
                          {new Date(Date.parse(review.created_at)).getMonth() +
                            1}
                          .
                          {new Date(
                            Date.parse(review.created_at)
                          ).getFullYear()}{" "}
                          в {new Date(Date.parse(review.created_at)).getHours()}
                          :
                          {new Date(Date.parse(review.created_at)).getMinutes()}
                        </div>
                      </div>
                    </div>
                  </div>
                  {review.images.length ? (
                    <div className="product-review__images">
                      {review.images.map((image) => {
                        return (
                          <div className="product-review__image">
                            <img
                              loading="lazy"
                              src={image.image || placeholderImg}
                              alt=""
                            />
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="product-review__content">
                    <p>{review.content}</p>
                  </div>
                  {review.admin_reply && (
                    <div className="product-review__content reply">
                      <h3>Ответ от MamaOrganic:</h3>
                      <p>{review.admin_reply}</p>
                    </div>
                  )}
                </div>
              );
            })}
            {reviews?.length ? (
              ""
            ) : (
              <div>На данном товаре нет отзывов, оставьте его первым!</div>
            )}
          </div>
        </div>
      </section>
      {openPopup ? (
        <div className="popup-add-review">
          <div className="popup-add-review__wrapper">
            <div className="popup-add-review__content">
              <span
                onClick={() => {
                  setOpenPopup(false);
                }}
                className={"popup-add-review__close"}
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
              <div className="popup-add-review__header">
                <h3 className="popup-add-review__header-title">
                  Отзыв на товар:
                </h3>
                <div className="popup-add-review__header-subtitle">
                  <p>{product?.name}</p>
                </div>
              </div>
              <div className="popup-add-review__form add-review-form">
                <div className="add-review-form__input-box">
                  <label htmlFor="name" className="add-review-form__label">
                    Имя
                  </label>
                  <input
                    name={"name"}
                    onInput={changeInputHandler}
                    id="name"
                    placeholder="Введите ваше имя"
                    type="text"
                    className="add-review-form__input"
                  />
                </div>
                <div className="add-review-form__input-box">
                  <label htmlFor="email" className="add-review-form__label">
                    Почта
                  </label>
                  <input
                    id="email"
                    onInput={changeInputHandler}
                    name={"email"}
                    placeholder="Введите ваше почту"
                    type="text"
                    className="add-review-form__input"
                  />
                </div>
                <div className="add-review-form__input-box">
                  <label htmlFor="phone" className="add-review-form__label">
                    Номер
                  </label>
                  <input
                    id="phone"
                    onInput={changeInputHandler}
                    name={"phone"}
                    placeholder="Введите ваше имя"
                    type="text"
                    className="add-review-form__input"
                  />
                </div>
                <div className="add-review-form__input-box">
                  <label htmlFor="rating" className="add-review-form__label">
                    Ваша оценка
                  </label>
                  <Rating
                    onChange={(number) => {
                      setForm((prevState) => {
                        return { ...prevState, rating: number };
                      });
                    }}
                    readonly={false}
                    emptySymbol={"rating-item"}
                    initialRating={form.rating}
                    fullSymbol={"rating-item-fill"}
                  />
                </div>
                <div className="add-review-form__input-box">
                  <label className="add-review-form__label">Фотография</label>
                  <div className="add-review-form__input-file-box">
                    <div className="add-review-form__input-uploaded-photos">
                      {form.imagesPreviews.map((imagePreview, id) => {
                        return (
                          <div className="add-review-form__input-uploaded-photo">
                            <span
                              onClick={removeFileHandler}
                              data-image-id={id}
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
                            <img
                              loading="lazy"
                              src={imagePreview || placeholderImg}
                              alt=""
                            />
                          </div>
                        );
                      })}
                    </div>
                    <input
                      type="file"
                      name={"images"}
                      id={"photo"}
                      onChange={changeFileHandler}
                      multiple={true}
                      accept=".png,.jpg,.jpeg"
                      className="add-review-form__input-file-input"
                    />
                    <label
                      htmlFor={"photo"}
                      className="add-review-form__input-file-label"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M12.4998 15.2C14.2671 15.2 15.6998 13.7674 15.6998 12C15.6998 10.2327 14.2671 8.80005 12.4998 8.80005C10.7325 8.80005 9.2998 10.2327 9.2998 12C9.2998 13.7674 10.7325 15.2 12.4998 15.2Z"
                          fill="#41492C"
                        />
                        <path
                          d="M9.5 2L7.67 4H4.5C3.4 4 2.5 4.9 2.5 6V18C2.5 19.1 3.4 20 4.5 20H20.5C21.6 20 22.5 19.1 22.5 18V6C22.5 4.9 21.6 4 20.5 4H17.33L15.5 2H9.5ZM12.5 17C9.74 17 7.5 14.76 7.5 12C7.5 9.24 9.74 7 12.5 7C15.26 7 17.5 9.24 17.5 12C17.5 14.76 15.26 17 12.5 17Z"
                          fill="#41492C"
                        />
                      </svg>
                      Сделать фото
                    </label>
                  </div>
                </div>
                <div className="add-review-form__input-box">
                  <label htmlFor="review" className="add-review-form__label">
                    Ваш отзыв
                  </label>
                  <textarea
                    id="review"
                    onInput={changeInputHandler}
                    name={"content"}
                    rows={4}
                    placeholder="Message..."
                    className="add-review-form__input"
                  />
                </div>
                <button onClick={saveClickHandler} className="basket__checkout">
                  Отправить отзыв
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
