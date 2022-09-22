import React, {useState, useEffect} from "react";
import Bg1 from '../../img/Home/PopularCategories/bg1.png'
import Bg2 from '../../img/Home/PopularCategories/bg2.png'

export default function PopularCategories() {
    return (
        <>
            <section className="page__popular-categories popular-categories">
                <div className="popular-categories__bg">
                    <img src={Bg1} alt=""/>
                </div>
                <div className="popular-categories__bg">
                    <img src={Bg2} alt=""/>
                </div>
                <div className="popular-categories__header">
                    <h2 className="popular-categories__title section-title">Популярные категории</h2>
                </div>
                <div className="popular-categories__content">
                    <menu className="popular-categories__menu">
                        <ul className="popular-categories__list">
                            <li className="popular-categories__list-item">
                                <a href="" className="popular-categories__list-link">Лицо </a>
                            </li>
                            <li className="popular-categories__list-item">
                                <a href="" className="popular-categories__list-link">Тело</a>
                            </li>
                            <li className="popular-categories__list-item">
                                <a href="" className="popular-categories__list-link">Волосы </a>
                            </li>
                            <li className="popular-categories__list-item">
                                <a href="" className="popular-categories__list-link">Руки и ноги </a>
                            </li>
                        </ul>
                        <ul className="popular-categories__list">
                            <li className="popular-categories__list-item">
                                <a href="" className="popular-categories__list-link">Лицо </a>
                            </li>
                            <li className="popular-categories__list-item">
                                <a href="" className="popular-categories__list-link">Тело</a>
                            </li>
                            <li className="popular-categories__list-item">
                                <a href="" className="popular-categories__list-link">Волосы </a>
                            </li>
                            <li className="popular-categories__list-item">
                                <a href="" className="popular-categories__list-link">Руки и ноги </a>
                            </li>
                            <li className="popular-categories__list-item">
                                <a href="" className="popular-categories__list-link">Руки и ноги </a>
                            </li>
                        </ul>
                        <ul className="popular-categories__list">
                            <li className="popular-categories__list-item">
                                <a href="" className="popular-categories__list-link">Лицо </a>
                            </li>
                            <li className="popular-categories__list-item">
                                <a href="" className="popular-categories__list-link">Тело</a>
                            </li>
                            <li className="popular-categories__list-item">
                                <a href="" className="popular-categories__list-link">Волосы </a>
                            </li>
                        </ul>
                    </menu>
                </div>
            </section>
        </>
    );
}
