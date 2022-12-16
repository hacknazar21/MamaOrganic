import React, { useState, useEffect } from "react";
import usePagination from "../../hooks/hooks.pagination";
import { useSearchParams } from "react-router-dom";
import useHttp from "../../hooks/hooks.http";
import placeholderImg from "../../img/placeholder.jpeg";

export default function NewsContent() {
  const [isReadMore, setIsReadMore] = useState(false);
  const { request } = useHttp();
  const [news, setNews] = useState(null);
  const { setPage, nextPage, prevPage, totalPages, page } = usePagination({
    count: news?.count,
    contentPerPage: 3,
  });
  useEffect(() => {
    document.title = "Блог";
  }, []);
  useEffect(() => {
    (async () => {
      const data = await request(
        `/api/blog/posts/?limit=3&offset=${3 * (page - 1)}`
      );
      if (data) {
        setNews(data);
      }
    })();

    window.scrollTo(0, 0);
  }, [page]);

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
  return (
    <>
      <section className="news__content news-content">
        <div className="news-content__container container-1">
          <div className="news-content__items">
            {news?.results.map((newsItem, id) => {
              return (
                <div key={id} className="news-content__item news-item">
                  <div className="news-item__image">
                    <img
                      loading="lazy"
                      src={newsItem.image || placeholderImg}
                      alt=""
                    />
                  </div>
                  <div className="news-item__content">
                    <div className="news-item__header">
                      <h2 className="news-item__title">
                        <a href={`/news/` + newsItem.link}>{newsItem.title}</a>
                      </h2>
                      <div className="news-item__date">
                        Опубликовано {createDate(newsItem.created_at)}
                      </div>
                    </div>
                    <div className="news-item__text">
                      <p>
                        {isReadMore
                          ? newsItem.description
                          : newsItem.description
                              .split(".")
                              .filter((sentence, id) => id < 3)
                              .join(".")}
                        {!isReadMore ? "." : ""}
                      </p>
                      {!isReadMore &&
                      newsItem.description.split(".").length > 3 ? (
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
                  </div>
                </div>
              );
            })}
          </div>
          <div className="news-content__pagination news-pagination">
            <div className="news-pagination__items">
              <div className="news-pagination__buttons">
                <button
                  onClick={() => {
                    prevPage();
                  }}
                  className={
                    1 === page
                      ? "news-pagination__item hide"
                      : "news-pagination__item"
                  }
                >
                  {"<"}
                </button>

                <button
                  onClick={() => {
                    nextPage();
                  }}
                  className={
                    totalPages === page
                      ? "news-pagination__item hide"
                      : "news-pagination__item"
                  }
                >
                  {">"}
                </button>
              </div>

              {totalPages &&
                [...Array(totalPages).keys()].map((item, id) => {
                  if (page === item + 1)
                    return (
                      <button
                        key={id}
                        onClick={() => {
                          setPage(item + 1);
                        }}
                        className="news-pagination__item active"
                      >
                        {item + 1}
                      </button>
                    );
                  return (
                    <button
                      key={id}
                      onClick={() => {
                        setPage(item + 1);
                      }}
                      className="news-pagination__item"
                    >
                      {item + 1}
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
