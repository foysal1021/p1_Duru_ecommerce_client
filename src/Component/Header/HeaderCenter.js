import React from "react";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderCenter = () => {
  return (
    <div className=" flex justify-between items-center py-5">
      <div className=" w-1/3">
        <img
          alt=""
          className=" w-1/3"
          src="https://cdn.shopify.com/s/files/1/1152/4590/files/logo_300x300.png?v=1671082437"
        />
      </div>
      {/* logo end */}

      <div className=" w-1/3 ">
        <form className=" flex">
          <input
            className=" border rounded-l w-full p-2 "
            placeholder="search not working sorry for that"
          />
          <input
            type="submit"
            value="search"
            className=" p-2 rounded-r text-white bg-[#e52e06] w-32"
          />
        </form>
      </div>

      {/* search end */}
      <div className=" w-1/3">
        <ul className=" flex justify-end text-3xl">
          <li>
            <Link>
              <FaHeart></FaHeart>
            </Link>
          </li>
          <li className=" mx-8">
            <Link to="/add_to_cart">
              <FaCartPlus></FaCartPlus>
            </Link>
          </li>
        </ul>
      </div>
      {/* end */}
    </div>
  );
};

export default HeaderCenter;
