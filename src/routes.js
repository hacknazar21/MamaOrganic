import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Contacts from "./components/contacts/Contacts";
import AboutPage from "./components/about/AboutPage";
import BrandsPage from "./components/brands/BrandsPage";
import BrandPage from "./components/brand/Brand";
import Categories from "./components/categories/Categories";
import Category from "./components/category/Category";
import ProductPage from "./components/product/ProductPage";
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import { AuthContext } from "./context/AuthContext";
import useAuth from "./hooks/hooks.auth";
import { MainLayout } from "./layouts/mainLayout";
import Checkout from "./components/checkout/Checkout";
import AccountInfo from "./components/account/info/AccountInfo";
import AccountBonuses from "./components/account/bonuses/AccountBonuses";
import AccountOrders from "./components/account/orders/AccountOrders";
import AccountOrder from "./components/account/order/AccountOrder";
import useHttp from "./hooks/hooks.http";
import { ProfileContext } from "./context/ProfileContext";
import NewsPage from "./components/news/NewsPage";
import SingleNewsContent from "./components/single-news/SingleNewsContent";
import SingleNewsPage from "./components/single-news/SingleNewsPage";
import DeliveryPage from "./components/delivery/DeliveryPage";
import ResetPassword from "./components/reset-password/ResetPassword";

export default function RoutesIndex() {
  const { token, userId, login, logout } = useAuth();
  const isAuth = !!token;
  const [userData, setUserData] = useState(null);
  const { request } = useHttp();
  useEffect(() => {
    (async () => {
      if (isAuth) {
        try {
          const data = await request("/api/auth/profile/", "GET", null, {
            Authorization: `Bearer ${token}`,
          });
          if (data) setUserData(data);
        } catch (e) {
          logout();
        }
      }
    })();
  }, [token]);
  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuth,
      }}
    >
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path={"/categories/:id"} element={<Categories />} />
            <Route path={"/categories"} element={<Categories />} />
            <Route path={"/about"} element={<AboutPage />} />
            <Route path={"/contacts"} element={<Contacts />} />
            <Route path={"/brands"} element={<BrandsPage />} />
            <Route path={"/brands/:id"} element={<BrandPage />} />
            <Route path={"/category/:id"} element={<Category />} />
            <Route path={"/product/:id"} element={<ProductPage />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/registration"} element={<Registration />} />
            <Route path={"/reset-password"} element={<ResetPassword />} />
            <Route path={"/news/"} element={<NewsPage />} />
            <Route path={"/news/:link"} element={<SingleNewsPage />} />
            <Route path={"/dostavka-i-skidki/"} element={<DeliveryPage />} />
            <Route
              path={"/checkout"}
              element={
                <ProfileContext.Provider value={{ userData }}>
                  <Checkout />
                </ProfileContext.Provider>
              }
            />
            {isAuth && (
              <>
                <Route
                  path={"/account/info"}
                  element={
                    <ProfileContext.Provider value={{ userData }}>
                      <AccountInfo />
                    </ProfileContext.Provider>
                  }
                />
                <Route
                  path={"/account/bonuses"}
                  element={
                    <ProfileContext.Provider value={{ userData }}>
                      <AccountBonuses />
                    </ProfileContext.Provider>
                  }
                />
                <Route
                  path={"/account/orders"}
                  element={
                    <ProfileContext.Provider value={{ userData }}>
                      <AccountOrders />
                    </ProfileContext.Provider>
                  }
                />
                <Route
                  path={"/account/order/:order_id"}
                  element={
                    <ProfileContext.Provider value={{ userData }}>
                      <AccountOrder />
                    </ProfileContext.Provider>
                  }
                />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </MainLayout>
    </AuthContext.Provider>
  );
}
