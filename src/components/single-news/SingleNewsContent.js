import React, { useState, useEffect } from "react";
import placeholderImg from "../../img/placeholder.jpeg";

export default function SingleNewsContent({ news }) {
  const [isReadMore, setIsReadMore] = useState(false);
  const createDate = (date) => {
    const createdDate = new Date(date);
    return `${
      createdDate.getDate() <= 9
        ? "0" + createdDate.getDate()
        : createdDate.getDate()
    }.${
      createdDate.getMonth() + 1 <= 9
        ? "0" + (createdDate.getMonth() + 1)
        : createdDate.getMonth() + 1
    }.${createdDate.getFullYear()}`;
  };
  function createMarkup(text) {
    return { __html: text };
  }
  return (
    <>
      <section className="single-news__content single-news-content">
        <div className="single-news-content__container container-1">
          <div className="single-news-content__image">
            <img loading="lazy" src={news?.image || placeholderImg} alt="" />
          </div>
          <div className="single-news-content__text">
            <h1 className="single-news-content__title">{news?.title}</h1>
            <div className="single-news-content__date">
              Опубликовано {createDate(news?.created_at)}
            </div>
            <div
              dangerouslySetInnerHTML={createMarkup(news?.content)}
              className="single-news-content__text-content"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
