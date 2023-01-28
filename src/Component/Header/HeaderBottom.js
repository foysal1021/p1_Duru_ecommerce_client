import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider/AuthProvider";

const HeaderBottom = () => {
  const { user } = useContext(authContext);

  return (
    <div className=" flex justify-between  items-center">
      <div className=" w-1/3 ">
        <h2 className=" w-2/3 text-center bg-[#e52e06] text-white px-10 py-4 rounded text-xl uppercase font-bold">
          BUY NOW HERE
        </h2>
      </div>
      <div className=" w-1/3 ">
        <ul className=" flex justify-between items-center font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {user?.uid && (
            <li>
              <Link to="/dashboard" className=" btn btn-sm">
                Dashboard
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className=" w-1/3">
        <h2 className=" text-right ">
          {" "}
          HotLine{" "}
          <span className=" font-extrabold ml-2 text-xl">01611968621</span>
        </h2>
      </div>
    </div>
  );
};

export default HeaderBottom;
