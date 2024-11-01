import {Home, RentalCatalogue, TailoringCatalogue,RentalProductDetails , CartPage,CheckoutPage, LoginPage,RegisterPage,YourOrdersPage,PurchaseCatalogue, OrderManagement,OrderManagementDetails,SpinWheel,ScratchCard,AboutUs,TailoringHome, TailoringProductDetails, BusinessPartnerRegistration,RentalProductUploadForm,AdminDashboard, TailoringProductUploadForm, MehendiArtistList, ServiceUploadForm,ServiceBookingPage, MehendiHomePage, ContactUsPage, TailoringOrderManagement, TailoringOrderManagementDetails, Winner} from "./pages";
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
    name: "ContactUs",
    path: "/contactUs",
    element: <ContactUsPage />,
    visible: false,
  },

  {
    icon: UsersIcon,
    name: "RentalProductDetails",
    path: "/rentalProductDetails",
    element: <RentalProductDetails />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "TailoringProductDetails",
    path: "/tailoringProductDetails",
    element: <TailoringProductDetails />,
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
    name: "TailoringOrderManagement",
    path: "/tailoring/orders",
    element: <TailoringOrderManagement />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "TailoringOrderManagementDetails",
    path: "/tailoring/orderDetails/:order_id",
    element: <TailoringOrderManagementDetails />,
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
  {
    icon: UsersIcon,
    name: "BusinessPartnerRegistration",
    path: "/businessPartnerForm",
    element: <BusinessPartnerRegistration />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "RentalProductUploadForm",
    path: "/rentalProductUpload",
    element: <RentalProductUploadForm />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "TailoringProductUploadForm",
    path: "/tailoringProductUpload",
    element: <TailoringProductUploadForm />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "AdminDashboard",
    path: "/adminDashboard",
    element: <AdminDashboard />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "MehendiArtistList",
    path: "/mehendiartist",
    element: <MehendiArtistList />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "ServiceUploadForm",
    path: "/service/upload",
    element: <ServiceUploadForm />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "ServiceBookingPage",
    path: "/service/booking",
    element: <ServiceBookingPage />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "MehendiHomePage",
    path: "/service/home",
    element: <MehendiHomePage />,
    visible: false,
  },
  {
    icon: UsersIcon,
    name: "Winner",
    path: "/winner",
    element: <Winner/>,
    visible: false,
  },




];

export default routes;
