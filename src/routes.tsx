import {Home, RentalCatalogue, TailoringCatalogue, AboutUs,ProductDetails , CartPage,CheckoutPage, LoginPage,RegisterPage,YourOrdersPage} from "./pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  NewspaperIcon,
  UsersIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import React from "react";

import { FaSearch } from 'react-icons/fa';



export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
    visible: false,
  },
  {
    icon: CheckBadgeIcon,
    name: "rentalCatalogue",
    path: "/rentalCatalogue",
    element: <RentalCatalogue />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "TailoringCatalogue",
    path: "/tailoringCatalogue",
    element: <TailoringCatalogue />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "AboutUs",
    path: "/aboutUs",
    element: <AboutUs />,
    visible: false,
  },

  {
    icon: UsersIcon,
    name: "ProductDetails",
    path: "/productDetails",
    element: <ProductDetails />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "CartPage",
    path: "/cart",
    element: <CartPage />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "CheckoutPage",
    path: "/checkout",
    element: <CheckoutPage />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "LoginPage",
    path: "/login",
    element: <LoginPage />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "RegisterPage",
    path: "/register",
    element: <RegisterPage />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "YourOrdersPage",
    path: "/orders",
    element: <YourOrdersPage />,
    visible: false,
  },


];

export default routes;
