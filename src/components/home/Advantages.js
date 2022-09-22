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
              <h3 className="advantages-item__title">Преимущество</h3>
            </div>
            <div className="advantages-item__content">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="advantages__content-item advantages-item">
            <div className="advantages-item__header">
              <div className="advantages-item__number">2</div>
              <h3 className="advantages-item__title">Преимущество</h3>
            </div>
            <div className="advantages-item__content">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="advantages__content-item advantages-item">
            <div className="advantages-item__header">
              <div className="advantages-item__number">3</div>
              <h3 className="advantages-item__title">Преимущество</h3>
            </div>
            <div className="advantages-item__content">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
