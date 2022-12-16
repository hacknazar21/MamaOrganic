import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Sugar } from "../Sugar";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/hooks.http";
import placeholderImg from "../../img/placeholder.jpeg";

export default function BrandsPage() {
  const { request, loading, error, isOk } = useHttp();
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await request("/api/brands/");
      if (data) {
        setBrands(data);
      }
    })();
    document.title = "Бренды";
  }, []);

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
              {brands?.map((brand) => {
                return (
                  <div className="brands__content-item swiper-slide brands-item">
                    <a
                      href={"/brands/" + brand.link}
                      className="brands-item__image"
                    >
                      <img
                        loading="lazy"
                        src={brand.image || placeholderImg}
                        alt=""
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
