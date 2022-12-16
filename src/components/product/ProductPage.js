import React, { useState, useEffect } from "react";
import Header from "../Header";
import { Sugar } from "../Sugar";
import Footer from "../Footer";
import SameProducts from "./SameProducts";
import ProductMain from "./ProductMain";
import ProductInfo from "./ProductInfo";
import ProductReviews from "./ProductReviews";
import useHttp from "../../hooks/hooks.http";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  const [is404, setIs404] = useState(false);
  const { request } = useHttp();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const req = async () => {
      try {
        const data = await request(`/api/products/${id}`);
        if (data) {
          setProduct(data);
          if (data) document.title = data?.name;
        }
      } catch (e) {
        setIs404(true);
      }
    };
    req();
  }, [id, request]);

  if (is404) {
    return (
      <>
        <Header />
        <main className="product-main">Страница не найдена</main>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <main className="product-main">
        <Sugar
          sugar={[
            { href: "/", title: "Главная" },
            { href: "/categories", title: "Категории" },
            {
              href: `/categories/${product?.category.parent?.link}`,
              title: product?.category.parent?.name,
            },
            {
              href: `/category/${product?.category.link}`,
              title: product?.category.name,
            },
            { href: ``, title: product?.name },
          ]}
          sugarClass={"container-1"}
        />
        <ProductMain product={product} />
        <ProductInfo product={product} />
        <ProductReviews reviews={product?.reviews} product={product} />

        {product ? <SameProducts productId={product.id} /> : ""}
      </main>
      <Footer />
    </>
  );
}
