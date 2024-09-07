import {Home, RentalCatalogue, TailoringCatalogue,ProductDetails , CartPage,CheckoutPage, LoginPage,RegisterPage,YourOrdersPage,PurchaseCatalogue, OrderManagement,OrderManagementDetails,SpinWheel,ScratchCard,AboutUs,TailoringHome} from "./pages";
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
    icon: CheckBadgeIcon,
    name: "purchaseCatalogue",
    path: "/purchaseCatalogue",
    element: <PurchaseCatalogue />,
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
    path: "/yourOrders",
    element: <YourOrdersPage />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "OrderManagement",
    path: "/orders",
    element: <OrderManagement />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "OrderManagementDetails",
    path: "/orderDetails/:order_id",
    element: <OrderManagementDetails />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "SpinWheel",
    path: "/spinwheel",
    element: <SpinWheel />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "ScratchCard",
    path: "/scratchcard",
    element: <ScratchCard />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "TailoringHome",
    path: "/tailoringHome",
    element: <TailoringHome />,
    visible: false,
  },


];

export default routes;
