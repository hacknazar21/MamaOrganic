import React, { useState, useEffect } from "react";
import Select from "./Select";

export default function Filter({ selects, onCancel }) {
  return (
    <>
      <section className="page__filter filter">
        <div className="filter__container">
          <div className="filter__items">
            {selects.map((select) => {
              return (
                <Select
                  className={"filter__select"}
                  {...select}
                  key={select.name}
                />
              );
            })}
            <button className={"filter__cancel"} onClick={onCancel}>
              Сброс фильтра
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
