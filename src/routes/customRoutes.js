import React from "react";
import { useRoutes } from "react-router";

import Home from "./../pages/home/Home";
import Reset from "./../pages/auth/users/Reset";
import Cart from "./../pages/cart/Cart";
import Checkout from "./../pages/cart/ProductCheckout/Checkout";
import ProductDisplay from "./../pages/productsDisplay/ProductDisplay";
import Maincategory from "../components/categories/Maincategory";
import Menpage from "./../components/categories/Menpage";
import Women from "./../components/categories/Women";
import Kids from "./../components/categories/Kids";
import Electronics from "./../components/categories/Electronics";
import Beauty from "./../components/categories/Beauty";
import Wishlist from "./../pages/wishlist/Wishlist";
import Profile from "../pages/profile/Profile";
import ProfileInfo from "./../pages/profile/ProfileInfo";
import MyAddresses from "./../pages/profile/MyAddresses";
import MyOrder from "./../pages/cart/Myorder";
import SelectAddress from "./../pages/cart/ProductCheckout/SelectAddress";
import EditAddress from "./../pages/profile/EditAddress";
import PlaceOrder from "./../pages/cart/ProductCheckout/PlaceOrder";
import SubCategory from "./../components/categories/sub-category/SubCategory";
import SearchedProducts from "../pages/searched-products/SearchedProducts";
import Help from "./../pages/Help/Help";
import Wallet from "../pages/profile/Wallet";
import Error from "./../components/error/Error";
import AddressForm from "./../pages/auth/users/AddressForm";
import PaymentOptions from "./../pages/payment/PaymentOptions";
import NetBankingLogin from "../pages/payment/Net Banking/NetBankingLogin";
import RegisterNetbanking from "./../pages/payment/Net Banking/RegisterNetbanking";
import MyLikes from "./../pages/profile/MyLikes";
import MyLikedProducts from "./../pages/my likes/MyLikedProducts";
import SelectBankPopup from "./../pages/payment/SelectBankPopup";
import PayAmountPopup from "./../pages/payment/Net Banking/PayAmountPopup";
import PayAmountFrame from "./../pages/payment/Net Banking/PayAmountFrame";
import MessageFrame from "./../pages/payment/Net Banking/MessageFrame";
import SwaggerPage from "./../components/footer/SwaggerPage";

const CustomRoutes = () => {
  let myRoutes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/swagger",
      element: <SwaggerPage />,
    },
    {
      path: "/reset",
      element: <Reset />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },

    {
      path: "/checkout",
      element: <Checkout />,
    },

    {
      path: "/products_page/:id",
      element: <ProductDisplay />,
    },

    {
      path: "/main-category",
      element: <Maincategory />,
    },
    {
      path: "/men",
      element: <Menpage />,
    },
    {
      path: "/women",
      element: <Women />,
    },
    {
      path: "/kids",
      element: <Kids />,
    },
    {
      path: "/electronics",
      element: <Electronics />,
    },
    {
      path: "/beauty_products",
      element: <Beauty />,
    },
    {
      path: "/wishlist",
      element: <Wishlist />,
    },
    {
      path: "/my-profile",
      element: <Profile />,
      children: [
        {
          path: "my-profile-info",
          element: <ProfileInfo />,
        },
        {
          path: "my-addresses",
          element: <MyAddresses />,
        },
        {
          path: "my-wallet",
          element: <Wallet />,
        },
        {
          path: "my-likes",
          element: <MyLikes />,
        },
      ],
    },
    {
      path: "/myorder",
      element: <MyOrder />,
    },
    {
      path: "/selectaddress",
      element: <SelectAddress />,
    },

    {
      path: "/addressform",
      element: <AddressForm />,
    },
    {
      path: "/editaddress/:addressId",
      element: <EditAddress />,
    },
    {
      path: "/place-order",
      element: <PlaceOrder />,
    },
    {
      path: "/payment-options",
      element: <PaymentOptions />,
    },
    {
      path: "/sub-category/:subCat",
      element: <SubCategory />,
    },
    {
      path: "/search-products/:searchKey/:cat",
      element: <SearchedProducts />,
    },
    {
      path: "/search-products/:searchKey",
      element: <SearchedProducts />,
    },

    {
      path: "/help",
      element: <Help />,
    },
    {
      path: "/select-bank",
      element: <SelectBankPopup />,
    },
    {
      path: "/net-banking-login/:bankId",
      element: <NetBankingLogin />,
    },
    {
      path: "/register-net-banking",
      element: <RegisterNetbanking />,
    },
    {
      path: "/pay-amount",
      element: <PayAmountPopup />,
    },
    {
      path: "/pay-amount-frame",
      element: <PayAmountFrame />,
    },
    {
      path: "/transaction-message",
      element: <MessageFrame />,
    },
    {
      path: "/my-liked-products",
      element: <MyLikedProducts />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return myRoutes;
};

export default CustomRoutes;