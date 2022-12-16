import React, { useState, useEffect } from "react";

export default function SearchResults({ results }) {
  return (
    <>
      <div className="basket basket-window search-results">
        <div className="basket__header">
          <div className="basket__title">Результаты поиска</div>
        </div>
        <div className="basket__items">
          {results?.map((product, index) => {
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
                  </div>
                </div>
              </div>
            );
          })}
          {!results.length && (
            <p className="basket__empty">По вашему запросу ничего не нашлось</p>
          )}
        </div>
      </div>
    </>
  );
}
