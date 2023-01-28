import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const { googleSingin } = useContext(authContext);
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  const googleSingIn = () => {
    googleSingin()
      .then((result) => {
        const GoogleLogin = {
          email: result.user.email,
          name: result.user.displayName,
          isGoogle: "yes",
        };
        fetch("http://localhost:5000/user-info", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(GoogleLogin),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className=" my-28 flex justify-center items-center">
      <div className=" bg-[#e7e5e5] w-1/2 rounded py-20 px-16">
        <h2 className=" text-center text-2xl">Login here</h2>
        <form onSubmit={login} className=" grid grid-cols-1 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />
          </div>

          <input
            className=" bg-[#e52e06] btn border-none"
            type="submit"
            value="Login"
          />
        </form>
        <p className=" mt-5">
          Are You New?{" "}
          <Link to="/register" className=" btn btn-sm bg-[#e52e06] border-none">
            {" "}
            Sing Up
          </Link>
        </p>
        <div className="divider my-10">OR</div>
        <button className=" btn w-full " onClick={googleSingIn}>
          <FaGoogle className=" text-[#4885ed] text-2xl mr-3"></FaGoogle>{" "}
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default Login;
