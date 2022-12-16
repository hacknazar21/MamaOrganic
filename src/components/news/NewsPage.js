import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Sugar } from "../Sugar";
import NewsContent from "./NewsContent";
import { useSearchParams } from "react-router-dom";
import useHttp from "../../hooks/hooks.http";

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="about-main">
        <Sugar
          sugar={[
            { href: "/", title: "Главная" },
            { href: "", title: "Блог" },
          ]}
          sugarClass={"container-1"}
        />
        <section className="page_news-header news-header">
          <div className="news-header__container container-1">
            <h1 className="news-header__title">
              Блог <a href="https://www.instagram.com/grigsus/">@grigsus</a>
            </h1>
          </div>
        </section>
        <NewsContent />
      </main>
      <Footer />
    </>
  );
}
