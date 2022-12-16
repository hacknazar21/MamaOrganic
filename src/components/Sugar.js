import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Sugar({ sugar, sugarClass }) {
  let backLink = "/";

  return (
    <section className="sugar">
      <div className={"sugar__container" + " " + sugarClass}>
        <div className="sugar__items">
          {sugar.map((sugarItem) => {
            if (sugarItem.title) {
              if (sugarItem.href !== "") {
                backLink = sugarItem.href;
                return (
                  <>
                    <div className="sugar__item">
                      <Link to={sugarItem.href}>{sugarItem.title}</Link>
                    </div>
                    <span>/</span>
                  </>
                );
              }
              return <div className="sugar__item">{sugarItem.title}</div>;
            }
          })}
        </div>
      </div>
      <div className="sugar__mobile">
        <Link className="sugar__mobile-back _icon-arrow-slider" to={backLink}>
          Назад
        </Link>
      </div>
    </section>
  );
}
