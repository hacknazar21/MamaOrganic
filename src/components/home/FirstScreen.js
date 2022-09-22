import React, {useState, useEffect, useRef} from "react";
import Product1 from '../../img/Home/FirstScreen/01.png'
import Product2 from '../../img/Home/FirstScreen/02.png'
import Product3 from '../../img/Home/FirstScreen/03.png'
import Product4 from '../../img/Home/FirstScreen/04.png'
import Product5 from '../../img/Home/FirstScreen/05.png'
import Product6 from '../../img/Home/FirstScreen/06.png'
import {Autoplay, Pagination, Swiper} from "swiper";
export default function FirstScreen() {
    const slider = useRef()
    useEffect(() => {
        if(slider.current.className && window.innerWidth < 990)
            new Swiper('.' + slider.current.classList[0], {
                modules: [Pagination, Autoplay],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 20,
                autoHeight: false,
                speed: 800,
                // Эффекты
                effect: 'fade',
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                // События
                on: {}
            });
    }, [slider]);
    return (
        <>
            <section className="page__first-screen first-screen">
                <div className="first-screen__box">
                    <div className="first-screen__products-box">
                        <div className="first-screen__products orange-box">
                            <div className="first-screen__product"><img src={Product1} alt=""/></div>
                            <div className="first-screen__product"><img src={Product2} alt=""/></div>
                            <div className="first-screen__product"><img src={Product3} alt=""/></div>
                        </div>
                    </div>
                    <div className="first-screen__content">
                    <h1 className="first-screen__title">MAMA ORGANIC</h1>
                    <p className="first-screen__subtitle">Мы выбираем лучшее для вас. С любовью к вам. С заботой о Земле.</p>
                </div>
                    <div className="first-screen__products-box">
                <div className="first-screen__products grey-box">
                    <div className="first-screen__product"><img src={Product4} alt=""/></div>
                    <div className="first-screen__product"><img src={Product5} alt=""/></div>
                    <div className="first-screen__product"><img src={Product6} alt=""/></div>
                </div>
            </div>
                </div>
                <div className="first-screen__mobile-box">
                    <div className="first-screen__mobile-content">
                        <h1 className="first-screen__mobile-title">Интернет-магазин</h1>
                        <p className="first-screen__mobile-subtitle">Косметики</p>
                    </div>
                    <div ref={slider} className="first-screen__swiper sponsors-swiper">
                        <div className="first-screen__swiper-wrapper swiper-wrapper">
                            <div className="first-screen__swiper-slide swiper-slide"><img src={Product1} alt=""/></div>
                            <div className="first-screen__swiper-slide swiper-slide"><img src={Product2} alt=""/></div>
                            <div className="first-screen__swiper-slide swiper-slide"><img src={Product3} alt=""/></div>
                        </div>
                        <div className="first-screen__swiper-pagination swiper-pagination"></div>
                    </div>
                </div>
            </section>
        </>
    );
}
