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
// import AboutUs from "./pages/AboutUs";
//import { FuneralGroundSearch } from "./pages/funeralGroundSearch";
//import {FuneralGroundDetails}



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
    name: "TailoringCatalogue",
    path: "/tailoringCatalogue",
    element: <TailoringCatalogue />,
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


//   {
//     icon: UsersIcon,
//     name: "Admee",
//     path: "/admee",
//     element: <Admee />,
//     visible: false,
//   },
//   {
//     icon: FaSearch,
//     name: "FuneralGroundSearch",
//     path: "/funeralground",
//     element: <FuneralGroundSearch />,
//     visible: true,
//   },
//   {
//     icon: FaSearch,
//     name: "FuneralGroundDetails",
//     path: "/funeralgrounddetails",
//     element: <FuneralGroundDetails />,
//     visible: false,
//   },
//   {
//     icon: "",
//     name: "FuneralGroundDataCollectionForm",
//     path: "/funeralground/form",
//     element: <FuneralGroundDataCollectionForm />,
//     visible: false,
//   },
//   {
//     icon: "",
//     name: "AdmeeDataCollectionForm",
//     path: "/admee/form",
//     element: <AdmeeDataCollectionForm />,
//     visible: false,
//   },
//   {
//     icon: "",
//     name: "CCDesignCatalogueForm",
//     path: "/cc/design/form",
//     element: <CCDesignCatalogueForm />,
//     visible: false,
//   },
  // {
  //   icon: NewspaperIcon,
  //   name: "ClientOnboarding",
  //   path: "/form",
  //   element: <ClientOnboardingForm />,
  // },
//   {
//     icon: DocumentTextIcon,
//     name: "Docs",
//     href: "https://www.material-tailwind.com/docs/react/installation",
//     target: "_blank",
//     element: "",
//     visible: false,
//   },
];

export default routes;
