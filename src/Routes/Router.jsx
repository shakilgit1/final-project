import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import MenuPage from "../pages/Menupage/MenuPage";
import OrderPage from "../pages/Orderpage/OrderPage";
import Login from "../pages/LoginPage/Login";
import SignUp from "../pages/signup/SignUp";
import PrivetRoutes from "../pages/PrivetRoutes/PrivetRoutes";
import Secret from "../pages/secret/Secret";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/dashboard/MyCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
           path: '/',
           element: <Home></Home>
        },
        {
           path: '/menu',
           element: <MenuPage></MenuPage>
        },
        {
           path: '/order/:category',
           element: <OrderPage></OrderPage>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/secret',
          element:<PrivetRoutes><Secret></Secret></PrivetRoutes>
        },
        {
          path: '/signup',
          element:<SignUp></SignUp>
        }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>,
    children: [
      {
        path: 'cart',
        element: <MyCart></MyCart>
      }
    ]
  }
]);