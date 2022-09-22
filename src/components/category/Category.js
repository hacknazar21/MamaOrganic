import React, { useState, useEffect } from "react";
import Header from "../Header";
import { Sugar } from "../Sugar";
import Footer from "../Footer";
import Filter from "../Filter";
import CategoryProducts from "./CategoryProducts";

export default function Category() {
  return (
    <>
      <Header />
      <main className="category-main">
        <Sugar
          sugar={[
            { href: "/", title: "Главная" },
            { href: "/categories", title: "Категории" },
            { href: "", title: "Для кожи" },
          ]}
          sugarClass={""}
        />
        <Filter
          selects={[
            {
              name: "Popular",
              title: "Популярность",
              items: ["Не популярные", "Популярные"],
            },
            { name: "Brand", title: "Бренд", items: ["Loreal", "Kopro"] },
            { name: "Price", title: "Стоимость", items: ["egwg"] },
          ]}
        />
        <CategoryProducts />
      </main>
      <Footer />
    </>
  );
}
