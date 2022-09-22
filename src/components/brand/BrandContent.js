import React, { useState, useEffect } from "react";

export default function BrandContent() {
  return (
    <>
      <section className="page__brand-content brand-content">
        <div className="brand-content__container container-1">
          <div className="brand-content__box">
            <div className="brand-content__image">
              <img src={require("../../img/Home/Brands/4.png")} alt="" />
            </div>
            <div className="brand-content__content">
              <h1 className="brand-content__title">Loreal</h1>
              <div className="brand-content__text">
                <p>
                  Вода очищенная (Aqua), масло соевое (Glycine Soya Oil), масло
                  виноградной косточки (Grape Seed (Vitis Vinifera) Oil),
                  гликолипиды* (Glycolipids), натуральный эмульгатор из
                  глицерина и растительных масел* (Polyglyceryl-6 Stearate,
                  Polyglyceryl-6 Behenate), экстракт босвеллии (Boswellia
                  Serrata Extract), глицерил стеарат* (Glyceryl Stearate),
                  пантенол (Panthenol), сквалан (Squalane), глицерин (Glycerin),
                  цетеариловый спирт* (Cetearyl Alcohol), масло облепихи
                  (Hippophae Rhamnoides Oil), комплекс аминокислот: аргинин,
                  глутамин, серин, глицин, аланин, лейцин (Arginine, Glutamine,
                  Serine, Glycine, Alanine, Leucine), натуральный витамин Е
                  (Tocopherols Blend), молочная кислота (Lactic Acid),
                  консервант Nipaguard SCE* (Sorbitan Caprylate, Propanediol,
                  Benzoic Acid), гелеобразователь из хлопка*
                  (Hydroxyethylcellulose), лимонная кислота (Citric Acid),
                  трилон-Б (Tetrasodium EDTA).
                </p>
                <p>
                  * Разрешены европейскими системами экосертификации для
                  органической косметики.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
