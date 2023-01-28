import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [allproducts, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section className=" mt-20">
      <div>
        <ul className=" flex justify-between items-center mb-5">
          <li className=" font-bold text-xl"> Popular Products</li>
        </ul>
      </div>
      {/*  */}
      <div className=" grid grid-cols-5 gap-5 ">
        {allproducts.map((products) => (
          <div
            key={products._id}
            className=" border shadow-2xl py-8 px-2 rounded"
          >
            <img src={`${products.img}`} className=" h-52 mx-auto" alt="" />
            <div className=" text-left mt-8">
              <h2 className=" font-bold">
                {products.productName.length > 50 ? (
                  <>{products.productName.slice(0, 50)}...</>
                ) : (
                  <>{products.productName}</>
                )}
                {/* {products.productName} */}
              </h2>
              <h2 className=" my-1 text-[#e52e06] font-semibold text-xl">
                ${products.price}.00
              </h2>
              <Link
                to={`products-details/${products._id}`}
                className=" bg-[#e52e06] border-none  btn btn-xs"
              >
                {" "}
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
