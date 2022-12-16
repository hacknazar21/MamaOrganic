import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Sugar } from "../Sugar";
import AboutItems from "./AboutItems";
import AboutContent from "./AboutContent";

export default function AboutPage() {
  useEffect(() => {
    document.title = "О нас";
  }, []);

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
                  Mama Organic собрала команду людей, которые привнесли в жизнь
                  идею - дать возможность казахстанцам приобретать эффективные
                  средства из сферы натурального и органического производства со
                  всего мира.
                </p>
                <p>
                  Мы поставляем лучшую натуральную и органическую косметику, а
                  так же бытовую нехимию, проводя качественный анализ как цены,
                  так и анализ состава.
                </p>
                <p>
                  Мы хотим, чтобы натуральная и органическая продукция со всего
                  мира была легко доступной для каждого казахстанца, как она
                  доступна для каждого европейца.
                </p>
                <p>
                  Делая выбор в пользу сертифицированной мировыми эко
                  стандартами натуральной и органической продукции, сегодня вы
                  делаете вклад в своё здоровье, при этом не нанося урон
                  экологии.
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
