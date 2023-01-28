import React from "react";
import "./Banner.css";
import bannerimg from "../../asset/bannerImg.png";

const Banner = () => {
  return (
    <section className=" flex justify-between mt-10">
      <div
        style={{
          backgroundImage: `url(${bannerimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className=" bannerImg w-2/3 py-32"
      >
        <div className=" ml-10">
          <div className=" flex items-center text-[#ddd] ">
            <span className=" bg-[#2e1813] px-3 py-1 rounded">-28%</span>
            <p className=" ml-2"> New iphone Series</p>
          </div>

          <div>
            <h2 className=" text-4xl text-white font-bold my-5">
              Up To 40% Off <br /> Premium Smart watch
            </h2>
            <p className=" text-white w-96">
              We work with global brand and have create an smart gadget for you
              to make easiest life.
            </p>
          </div>
          <button className=" mt-8   bg-[#201d1d] text-white px-10 py-3 rounded text-xl ">
            {" "}
            Buy Now
          </button>
        </div>
      </div>
      <div className="  w-1/3  grid  gap-[15px] ml-[15px]">
        <div
          className=" flex items-center"
          style={{
            backgroundImage: `url(https://cdn.shopify.com/s/files/1/1152/4590/files/nbnr22_grande.jpg?v=1671443920)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {" "}
          <div className=" text-white ml-5">
            <p className=" text-xl font-semibold"> MODERN MOBILE</p>
            <h2 className=" text-3xl my-2 font-semibold"> New Collection</h2>
            <span className=" text-red-400 font-bold text-2xl">$99.00</span>
          </div>
        </div>
        <div
          className=" flex items-center"
          style={{
            backgroundImage: `url(https://cdn.shopify.com/s/files/1/1152/4590/files/bnr1_grande.jpg?v=1671443572)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {" "}
          <div className=" text-white ml-5">
            <p className=" text-xl font-semibold"> MODERN MOBILE</p>
            <h2 className=" text-3xl my-2 font-semibold"> New Collection</h2>
            <span className=" text-red-400 font-bold text-2xl">$99.00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
