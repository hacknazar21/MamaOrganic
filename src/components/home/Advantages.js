import React, { useState, useEffect } from "react";

export default function Advantages() {
  return (
    <>
      <section id="advantages" className="page__advantages advantages">
        <div className="advantages__header">
          <h2 className="advantages__title section-title">Наши преимущества</h2>
        </div>
        <div className="advantages__content">
          <div className="advantages__content-item advantages-item">
            <div className="advantages-item__header">
              <div className="advantages-item__number">1</div>
              <h3 className="advantages-item__title">Качество</h3>
            </div>
            <div className="advantages-item__content">
              <p>
                С нами вы легко перейдёте с конвенционального ухода на
                натуральный и органический. У нас только полные составы,
                написанные про правилам международной номенклатуры INCI.
              </p>
            </div>
          </div>
          <div className="advantages__content-item advantages-item">
            <div className="advantages-item__header">
              <div className="advantages-item__number">2</div>
              <h3 className="advantages-item__title">Бренды</h3>
            </div>
            <div className="advantages-item__content">
              <p>
                Все представленные марки объединяет богатая история
                производства, высокая эффективность, несущая пользу для
                человека. Каждый бренд, представленный на сайте Mama Organic,
                имеет свою яркую отличительную особенность. Средства не
                тестируются на животных и не оказывают пагубное влияние на
                окружающую среду.
              </p>
            </div>
          </div>
          <div className="advantages__content-item advantages-item">
            <div className="advantages-item__header">
              <div className="advantages-item__number">3</div>
              <h3 className="advantages-item__title">Органика</h3>
            </div>
            <div className="advantages-item__content">
              <p>
                Представленные марки ежегодно проходят независимые международные
                аудиторские проверки от COSMOS STANDARD (ECOCERT, ICEA,
                COSMEBIO, NATRUE), Climate Neutral, DAAB, ECO GARANTIE, которые
                подтверждают, что весь производственный процесс от ингредиентов
                до упаковки, проходит строгие требования, в основе которых лежит
                забота о человеке и об окружающей среде.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
