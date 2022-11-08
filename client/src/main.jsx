import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import "./index.css";

import BaseLayout from "./layouts/BaseLayout";
import ErrorView from "./views/ErrorView";
import HomeView from "./views/HomeView";
import ShopView from "./views/ShopView";
import AboutView from "./views/AboutView";
import BlogView from "./views/BlogView";
import OurTeamView from "./views/OurTeamView";
import WishlistView from "./views/WishlistView";
import CartView from "./views/CartView";
import ContactView from "./views/ContactView";
import AuthLayout from "./layouts/AuthLayout";
import LogIn from "./components/partials/Authentication/LogIn";
import SignUp from "./components/partials/Authentication/SignUp";
import ProductView from "./views/ProductView";
import AccountView from "./views/AccountView";
import { AuthProvider } from "./context/AuthContext";
import { ShoppingCartProvider } from "./context/ShoppingContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorView />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "about",
        element: <AboutView />,
      },
      {
        path: "shop",
        element: <ShopView />,
      },
      {
        path: "/shop/:productId",
        element: <ProductView />,
      },
      {
        path: "blog",
        element: <BlogView />,
      },
      {
        path: "team",
        element: <OurTeamView />,
      },
      {
        path: "contact",
        element: <ContactView />,
      },
      {
        path: "wishlist",
        element: <WishlistView />,
      },
      {
        path: "cart",
        element: <CartView />,
      },
      {
        path: "account",
        element: <AccountView />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <ErrorView />,
    children: [
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ShoppingCartProvider>
  </React.StrictMode>
);
