import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import { BsBarChartSteps } from "react-icons/bs";

const DashboardManu = () => {
  return (
    <div className=" fixed w-[300px] h-[100vh] bg-[#d3b442]">
      <img
        src="https://cdn.shopify.com/s/files/1/1152/4590/files/logo_300x300.png?v=1671082437"
        alt=""
        className=" w-1/2 mx-auto my-5 bg-white p-1 rounded"
      />
      <div className=" flex justify-center items-center">
        <ul className=" grid grid-cols-1 gap-5">
          <li>
            <Link to="/" className=" flex  items-center gap-2">
              <AiFillHome className=" text-xl"></AiFillHome>Go Back Home
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/my-order"
              className=" flex  items-center gap-2"
            >
              <BsFillCartFill></BsFillCartFill> My Order
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/Add-product"
              className=" flex  items-center gap-2"
            >
              <FaDatabase></FaDatabase> Add Product
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/Total-order"
              className=" flex  items-center gap-2"
            >
              <BsFillCartFill></BsFillCartFill> Total Order
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/Coustomers"
              className=" flex  items-center gap-2"
            >
              <FaUserAlt></FaUserAlt> Customers
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/Add-Catagory"
              className=" flex  items-center gap-2"
            >
              <BsBarChartSteps></BsBarChartSteps> Add Categories
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardManu;
