import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Sugar } from "../Sugar";
import AboutItems from "./AboutItems";
import AboutContent from "./AboutContent";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="about-main">
        <Sugar
          sugar={[
            { href: "/", title: "Главная" },
            { href: "", title: "О нас" },
          ]}
          sugarClass={"container-1"}
        />
        <section className="page__about-header about-header">
          <div className="about-header__container container-1">
            <div className="about-header__content">
              <h1 className="about-header__title page-title">О нас</h1>
              <div className="about-header__subtitle page-subtitle">
                <p>
                  Не просто интернет-магазин. Это целое сообщество людей,
                  которые делают выбор в пользу здоровья. У нас вы можете найти:
                </p>
              </div>
            </div>
          </div>
        </section>
        <AboutItems />
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
