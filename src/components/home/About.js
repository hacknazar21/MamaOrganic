import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="page__about about">
        <div className="about__header">
          <h2 className="about__title section-title">О компании</h2>
        </div>
        <div className="about__content">
          <div className="about__background-name">company</div>
          <div className="about__text-box">
            <div className="about__text-image">
              <img src={require("../../img/Home/About/1.png")} alt="" />
            </div>
            <div className="about__text">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
          </div>
          <div className="about__text-box">
            <div className="about__text-image">
              <img src={require("../../img/Home/About/2.png")} alt="" />
            </div>
            <div className="about__text">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <Link
                to={"/about"}
                className="about__link _icon-arrow-long"
              ></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
