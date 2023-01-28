import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar, FaPlus, FaBan, FaMinus } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { authContext } from "../../Context/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const ProductsDetails = () => {
  const { user, setOrderInfo } = useContext(authContext);
  const id = useLoaderData();
  const [productDetails, setProductDetails] = useState([]);
  const serviceCharge = 5;
  const DeliveryCharge = 10;
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetails([data]));
  }, [id]);

  // console.log(productDetails);

  const [Quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity(Quantity + 1);
  };
  const decrement = () => {
    setQuantity(Quantity - 1);

    if (Quantity < 2) {
      setQuantity(1);
      return;
    }
  };
  // delivery information from user start
  const [Thana, setThana] = useState("");
  const [District, setDistrict] = useState("");
  const [Phone, setPhone] = useState("");

  const bookNow = (id) => {
    const deliveryInfo = {
      orderId: id,
      thana: Thana,
      district: District,
      phone: Phone,
      quantity: Quantity,
    };
    setOrderInfo(deliveryInfo);
  };

  const addTOcart = (id, img, price, productName) => {
    const priceInt = parseInt(price);
    const priceWithCharge =
      priceInt * Quantity + serviceCharge + DeliveryCharge;

    const productInfo = {
      orderId: id,
      thana: Thana,
      district: District,
      phone: Phone,
      quantity: Quantity,
      img: img,
      orginalPrice: price,
      Totalprice: priceWithCharge,
      email: user?.email,
      productName: productName,
    };

    fetch("http://localhost:5000/add_to_cart", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Prodcut Add in Cart Successfully!");
        }
      });
  };

  // delivery information from user end
  const deliveryThana = (e) => {
    e.preventDefault();
    setThana(e.target.value);
  };
  const deliveryDistrict = (e) => {
    e.preventDefault();
    setDistrict(e.target.value);
  };
  const deliveryPhone = (e) => {
    e.preventDefault();
    setPhone(e.target.value);
  };

  return (
    <section className=" my-20">
      {productDetails.map((productDetail) => (
        <div className=" flex justify-between" key={productDetail._id}>
          {" "}
          <div className=" w-3/12 bg-[#f5f5f5]">
            <img src={productDetail.img} alt="" className="  mx-auto" />
          </div>
          <div className=" w-6/12 px-5 bg-[#f5f5f5]">
            <div>
              <h2 className=" text-3xl font-semibold">
                {productDetail.productName}
              </h2>
              <div className=" flex items-center gap-3 mt-1">
                <div className=" grid grid-cols-5 gap-1 text-[#e8b308]">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </div>
                <p className=" font-semibold"> 5 ratting</p>
              </div>
              <p className=" mt-1"> Brand : no brand</p>
              <p className=" text-3xl font-bold my-5">
                {" "}
                ${productDetail.price}
              </p>
              <div className=" flex items-center gap-5 ">
                <div>Quantity</div>
                <div className=" flex gap-4 items-center">
                  <button onClick={decrement} className=" btn btn-sm">
                    <FaMinus></FaMinus>
                  </button>
                  <span>{Quantity}</span>
                  <button onClick={increment} className=" btn  btn-sm">
                    <FaPlus></FaPlus>
                  </button>
                </div>
              </div>
              <div className=" flex gap-5 mt-10">
                <Link
                  to="/book"
                  onClick={() => bookNow(productDetail._id)}
                  className=" btn"
                >
                  Buy Now
                </Link>

                <button
                  onClick={() =>
                    addTOcart(
                      productDetail._id,
                      productDetail.img,
                      productDetail.price,
                      productDetail.productName
                    )
                  }
                  className=" btn"
                >
                  {" "}
                  Add to Card
                </button>
              </div>
            </div>
          </div>
          <div className=" w-3/12  bg-[#ece7e7] p-5">
            <div className=" flex items-center gap-2 text-xl">
              <MdLocationOn></MdLocationOn>
              <h2>
                {Thana ? <span>{Thana}</span> : <span>Selecte Thana</span>},
                {District ? (
                  <span>{District}</span>
                ) : (
                  <span>Selecte District</span>
                )}
              </h2>
            </div>
            <form className=" grid grid-cols-1 gap-2 mt-5 border rounded-xl p-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Thana</span>
                </label>
                <select
                  onChange={deliveryThana}
                  required
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Select Districts
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Districts</span>
                </label>
                <select
                  required
                  onChange={deliveryDistrict}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Select Districts
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>

              <div className=" form-control">
                <label className="label">
                  <span className="label-text font-bold">Phone</span>
                </label>
                <input
                  required
                  onChange={deliveryPhone}
                  type="text"
                  placeholder="0123456789"
                  className="input input-bordered w-full "
                />
              </div>
            </form>
            <div className=" mt-5">
              <span className=" font-bold text-[#565555]">Service</span>
              <div className=" flex gap-3 items-center text-md">
                <GiReturnArrow></GiReturnArrow>
                <span>7 Days Returns</span>
              </div>
              <div className="text-md flex gap-2 items-center">
                <FaBan></FaBan>
                <span> Warranty not available</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* about phone start */}
      <div className=" mt-5">
        <h2 className=" text-3xl capitalize font-bold mb-5"> about product</h2>
        {productDetails.map((details) => (
          <div key={details._id}>
            <div dangerouslySetInnerHTML={{ __html: details.about }} />
          </div>
        ))}
      </div>{" "}
      {/* about phone end */}
      {/* coustomer review start */}
      <div className=" mt-10">
        <h2 className=" text-3xl font-bold"> Coustomer Review</h2>
      </div>
      <Toaster />
      {/* coustomer review end */}
    </section>
  );
};

export default ProductsDetails;
