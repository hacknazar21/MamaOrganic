import React, { useState, useEffect } from "react";
import Header from "../Header";
import { Sugar } from "../Sugar";
import Footer from "../Footer";
import Filter from "../Filter";
import CategoryProducts from "./CategoryProducts";
import useHttp from "../../hooks/hooks.http";
import { useParams } from "react-router-dom";

export default function ParentCategory() {
  const { id, parent_id } = useParams();
  const { request } = useHttp();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const req = async () => {
      try {
        const data = await request(`/api/categories/${id}`);
        if (data) {
          setProducts(data.products);
        }
      } catch (e) {}
    };
    req();
  }, [id, request]);
  return (
    <>
      <Header />
      <main className="category-main">
        <Sugar
          sugar={[
            { href: "/", title: "Главная" },
            { href: "/categories", title: "Категории" },
            {
              href: `/categories/#category-${parent_id}`,
              title: products?.results[0]?.category.parent.name || "",
            },
            { href: "", title: products?.results[0]?.category.name || "" },
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
        <CategoryProducts products={products} />
      </main>
      <Footer />
    </>
  );
}
