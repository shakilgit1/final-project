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
        path: 'cart',
        element: <MyCart></MyCart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      // admin only routes
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
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      }
    ]
  }
]);