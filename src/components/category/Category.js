import React, { useState, useEffect } from "react";
import Header from "../Header";
import { Sugar } from "../Sugar";
import Footer from "../Footer";
import Filter from "../Filter";
import CategoryProducts from "./CategoryProducts";
import useHttp from "../../hooks/hooks.http";
import { useParams } from "react-router-dom";

export default function Category() {
  const { id } = useParams();
  const { request, success, isOk, error, loading } = useHttp();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [currentParams, setCurrentParams] = useState([]);
  useEffect(() => {
    const req = async () => {
      try {
        const data = await request(`/api/categories/${id}`);
        if (data) {
          setCategory(data);
          setProducts(data.products);
          const dataBrands = await request(
            `/api/brands/?category_id=${data.id}`
          );
          if (dataBrands && dataBrands.length) {
            setBrands((prevState) => {
              return dataBrands.map((dataBrand) => {
                return { name: dataBrand.name, value: dataBrand.id };
              });
            });
          }
          document.title = data.name;
        }
      } catch (e) {}
    };
    req();
  }, []);
  useEffect(() => {
    if (category) setCurrentParams([`category_id=${category.id}`]);
  }, [category]);

  const selectHandler = async (event) => {
    const { value, name } = event.target.dataset;
    if (name === "brand") {
      setCurrentParams((prevState) => {
        prevState[1] = `brand_id=${value}`;
        return prevState;
      });
    } else if (name === "price") {
      setCurrentParams((prevState) => {
        prevState[2] = `ordering=${value}`;
        return prevState;
      });
    }
    if (currentParams?.length) {
      try {
        const data = await request(`/api/products/?${currentParams.join("&")}`);
        if (data) {
          setProducts(data.results);
        }
      } catch (e) {}
    }
  };
  useEffect(() => {
    (async () => {})();
  }, [JSON.stringify(currentParams)]);
  return (
    <>
      <Header />
      <main className="category-main">
        <Sugar
          sugar={[
            { href: "/", title: "Главная" },
            { href: "/categories", title: "Категории" },
            {
              href: `/categories/${products[0]?.category.parent?.link || ""}`,
              title: products[0]?.category.parent?.name || null,
            },
            { href: "", title: products[0]?.category.name || "" },
          ]}
          sugarClass={""}
        />
        <Filter
          selects={[
            {
              name: "brand",
              title: "Бренд",
              items: brands,
              callback: selectHandler,
            },
            {
              name: "price",
              title: "Стоимость",
              items: [
                {
                  name: "От меньшей к большей",
                  value: "price",
                },
                {
                  name: "От большей к меньшей",
                  value: "-price",
                },
              ],
              callback: selectHandler,
            },
          ]}
          onCancel={() => {
            window.location.reload();
          }}
        />
        <CategoryProducts products={products} />
      </main>
      <Footer />
    </>
  );
}
