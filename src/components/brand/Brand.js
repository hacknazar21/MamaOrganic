import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Sugar } from "../Sugar";

import BrandProducts from "./BrandProducts";
import BrandContent from "./BrandContent";

export default function BrandPage() {
  return (
    <>
      <Header />
      <main>
        <Sugar
          sugar={[
            { href: "/", title: "Главная" },
            { href: "/brands", title: "Бренды" },
            { href: "", title: "Loreal" },
          ]}
          sugarClass={"container-1"}
        />
        <BrandContent />
        <BrandProducts brandName={"Loreal"} />
      </main>
      <Footer />
    </>
  );
}
