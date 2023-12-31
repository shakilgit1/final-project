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
import AllUsers from "../pages/dashboard/allUsers/AllUsers";
import AdminRoute from "../pages/PrivetRoutes/AdminRoute";
import AddItems from "../pages/dashboard/additems/AddItems";
import ManageItem from "../pages/dashboard/manageItems/ManageItem";
import UpdateItem from "../pages/dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/dashboard/Payment/Payment";
import PaymentHistory from "../pages/dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/dashboard/UserHome/UserHome";
import AdminHome from "../pages/dashboard/AdminHome/AdminHome";

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
      // user routes
      {
        path: 'userHome',
        element: <UserHome></UserHome>
      },
      {
        path: 'cart',
        element: <MyCart></MyCart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      
      // admin only routes
      {
        path: 'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params}) => fetch(`https://final-projects-server-eight.vercel.app/menu/${params.id}`)
      },
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      }
    ]
  }
]);