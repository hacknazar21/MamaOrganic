import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Sugar } from "../Sugar";

import BrandProducts from "./BrandProducts";
import BrandContent from "./BrandContent";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/hooks.http";

export default function BrandPage() {
  const { id } = useParams();
  const { request, loading, error, isOk } = useHttp();
  const [brand, setBrand] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await request("/api/brands/" + id);
      if (data) {
        setBrand(data);
      }
    })();
  }, []);
  useEffect(() => {
    if (brand) document.title = brand.name;
  }, [brand]);

  return (
    <>
      <Header />
      <main>
        <Sugar
          sugar={[
            { href: "/", title: "Главная" },
            { href: "/brands", title: "Бренды" },
            { href: "", title: brand?.name },
          ]}
          sugarClass={"container-1"}
        />
        <BrandContent brand={brand} />
        <BrandProducts brand={brand} />
      </main>
      <Footer />
    </>
  );
}
