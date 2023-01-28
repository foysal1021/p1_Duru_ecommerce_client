import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider/AuthProvider";

const Register = () => {
  const { userSingUp, googleSingin } = useContext(authContext);
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = {
      name: name,
      email: email,
      isGoogle: "no",
    };
    console.log(userInfo);
    userSingUp(email, password)
      .then((result) => {
        if (result.user) {
          fetch("http://localhost:5000/user-info", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
      })
      .catch((err) => console.log(err));
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
        <h2 className=" text-center text-2xl">Create Account</h2>
        <form onSubmit={register} className=" grid grid-cols-1 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered"
            />
          </div>
          <input
            className=" bg-[#e52e06] btn border-none"
            type="submit"
            value="Sing Up"
          />
        </form>
        <p className=" mt-5">
          Already Have an Account?{" "}
          <Link to="/login" className=" btn btn-sm bg-[#e52e06] border-none">
            {" "}
            Login
          </Link>
        </p>
        <div className="divider my-10">OR</div>
        <button className=" btn w-full" onClick={googleSingIn}>
          <FaGoogle className=" text-[#4885ed] text-2xl mr-3"></FaGoogle>{" "}
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default Register;
