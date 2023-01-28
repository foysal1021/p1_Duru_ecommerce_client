import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider/AuthProvider";
import "./HeaderTop.css";
const HeaderTop = () => {
  const { user, logout } = useContext(authContext);
  const Userlogout = () => {
    logout()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <div className=" bg-[#f3f3f3] py-5 lg:flex justify-between hidden ">
      <div className=" w-1/3 flex header-top text-left font-semibold">
        <ul className=" flex">
          <li> 01611 968621</li>
          <li className=" ml-10"> Khulna</li>
        </ul>
      </div>
      <div className=" w-1/3  text-center">
        {" "}
        <h2>We are open with limited hours and staff.</h2>
      </div>
      <div className=" w-1/3  font-semibold">
        <ul className=" flex justify-end">
          <li className=" currence"> USD</li>
          <li className=" ml-10">
            {user?.uid ? (
              <Link onClick={Userlogout}>Logout</Link>
            ) : (
              <Link to="/register">Sing Up</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
