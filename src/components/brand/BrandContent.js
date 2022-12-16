import React, { useState, useEffect } from "react";
import placeholderImg from "../../img/placeholder.jpeg";

export default function BrandContent({ brand }) {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <>
      <section className="page__brand-content brand-content">
        <div className="brand-content__container container-1">
          <div className="brand-content__box">
            <div className="brand-content__image">
              <img loading="lazy" src={brand?.image || placeholderImg} alt="" />
            </div>
            <div className="brand-content__content">
              <h1 className="brand-content__title">{brand?.name}</h1>
              <div className="brand-content__text">
                <p>
                  {isReadMore
                    ? brand?.description
                    : brand?.description
                        .split(".")
                        .filter((sentence, id) => id < 3)
                        .join(".")}
                  {!isReadMore ? "." : ""}
                </p>
                {!isReadMore ? (
                  <button
                    onClick={() => {
                      setIsReadMore(true);
                    }}
                    className={"brand-content__read-more"}
                  >
                    Читать далее
                  </button>
                ) : (
                  ""
                )}
              </div>
              {brand?.main_image ? (
                <div className="brand-content__main-image">
                  <img
                    loading="lazy"
                    src={brand?.main_image || placeholderImg}
                    alt=""
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
