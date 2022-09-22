import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Sugar } from "../Sugar";
import { Link } from "react-router-dom";

export default function BrandsPage() {
  return (
    <>
      <Header />
      <main>
        <Sugar
          sugar={[
            { href: "/", title: "Главная" },
            { href: "", title: "Бренды" },
          ]}
          sugarClass={""}
        />
        <section className="page__brands-page brands-page">
          <div className="brands-page__container-hf">
            <div className="brands-page__grid">
              <div className="brands__content-item swiper-slide brands-item">
                <Link to="/brands/1">
                  <a className="brands-item__image">
                    <img src={require("../../img/Home/Brands/1.png")} alt="" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
