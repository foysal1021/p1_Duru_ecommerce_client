import AddTOcart from "../Component/AddTOCart/AddTOcart";
import Blog from "../Component/Blog/Blog";
import BookNow from "../Component/BookNow/BookNow";
import Contact from "../Component/Contact/Contact";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import ProductsDetails from "../Component/ProductDetails/ProductsDetails";
import Register from "../Component/Register/Register";
import AddCatagory from "../Dashboard/AddCatagory/AddCatagory";
import AddProduct from "../Dashboard/AddProduct/AddProduct";
import Coustomers from "../Dashboard/Coustomers/Coustomers";
import MyOrder from "../Dashboard/MyOrder/MyOrder";
import TotalOrder from "../Dashboard/TotalOrder/TotalOrder";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/book",
        element: <BookNow></BookNow>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/add_to_cart",
        element: <AddTOcart></AddTOcart>,
      },
      {
        path: "/products-details/:id",
        element: <ProductsDetails></ProductsDetails>,
        loader: async ({ params }) => {
          return params.id;
        },
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <div className=" bg-slate-500">happy</div>,
      },
      {
        path: "/dashboard/Coustomers",
        element: <Coustomers></Coustomers>,
      },
      {
        path: "/dashboard/my-order",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/dashboard/Total-order",
        element: <TotalOrder></TotalOrder>,
      },
      {
        path: "/dashboard/Add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/Add-Catagory",
        element: <AddCatagory></AddCatagory>,
      },
    ],
  },
]);

export default route;
