import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const BookNow = () => {
  const { orderInfo, user } = useContext(authContext);
  const [orderedProduct, setOrderProduct] = useState({});
  const serviceCharge = 5;
  const DeliveryCharge = 10;
  const quentiti = orderInfo.quantity;
  // console.log(orderInfo);
  useEffect(() => {
    fetch(`http://localhost:5000/product/${orderInfo.orderId}`)
      .then((res) => res.json())
      .then((data) => setOrderProduct(data));
  }, [orderInfo.orderId]);
  // parseInt(orderedProduct.price)
  const orderConfirm = () => {
    const fee = serviceCharge + DeliveryCharge;
    const price = parseInt(orderedProduct.price) * quentiti;
    const TotalPrice = fee + price;

    const order = {
      orderId: orderInfo.orderId,
      email: user.email,
      quentiti,
      TotalPrice,
      phone: orderInfo.phone,
      district: orderInfo.district,
      thana: orderInfo.thana,
      img: orderedProduct.img,
      productName: orderedProduct.productName,
      orginalPrice: orderedProduct.price,
      userName: user.displayName,
    };

    fetch("http://localhost:5000/order-item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Order Successfully ");
        }
      });
  };

  return (
    <div className=" w-1/2 bg-[#e3e2e2] mx-auto p-5 my-10 rounded">
      <img src={orderedProduct.img} className=" w-1/4 rounded mx-auto" alt="" />
      <ul className=" grid grid-cols-1 gap-2 mt-5">
        <li>
          Name : <span>{orderedProduct.productName}</span>
        </li>
        <li>
          Orginal Price : $<span> {orderedProduct.price}</span>
        </li>
        <li>
          Quentiti : <span>{orderInfo.quantity}</span>
        </li>
        <li>
          Service Charge : $<span>{serviceCharge}</span>
        </li>
        <li>
          Delivery Charge : $<span>{DeliveryCharge}</span>
        </li>
        <li>
          Total Price :
          <span className=" text-xl font-bold">
            $
            {parseInt(orderedProduct.price) * quentiti +
              serviceCharge +
              DeliveryCharge}
          </span>
        </li>
        <button
          onClick={orderConfirm}
          className=" btn bg-[#e52e06] border-none"
        >
          {" "}
          Confirm Order
        </button>
      </ul>{" "}
      <Toaster />
    </div>
  );
};

export default BookNow;
