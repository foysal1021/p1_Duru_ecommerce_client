import React, { useContext } from "react";
import { useQuery } from "react-query";
import { authContext } from "../../Context/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const AddTOcart = () => {
  const { user } = useContext(authContext);

  const { data: cartData = [], isLoading } = useQuery({
    queryKey: "card data",
    queryFn: async () => {
      const email = await user?.email;
      const res = await fetch(`http://localhost:5000/cart_data/${email}`);
      const data = await res.json();
      return data;
    },
  });

  const delteCart = (orderId) => {
    fetch(`http://localhost:5000/delete_cart_product/${orderId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("cart product deleted success!");
        }
      });
  };
  const buyNow = (cartData) => {
    const cartProductBuy = {
      orderId: cartData.orderId,
      email: cartData.email,
      quentiti: cartData.quantity,
      TotalPrice: cartData.Totalprice,
      phone: cartData.phone,
      district: cartData.district,
      thana: cartData.thana,
      img: cartData.img,
      productName: cartData.productName,
      orginalPrice: cartData.orginalPrice,
      userName: user?.displayName,
    };

    fetch("http://localhost:5000/cart_product_buy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartProductBuy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          fetch(`http://localhost:5000/delete_cart_product/${cartData.orderId}`)
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Product Buy success!!");
              }
            });
        }
      });
  };
  return (
    <section className=" mt-20">
      <div>
        <h2 className=" text-xl font-bold"> Your Cart Product</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-center">S/N</th>
                <th className="text-center">image</th>
                <th className="text-center">Product Name</th>
                <th className="text-center">Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center"> Total Price(with vat)</th>
                <th className="text-center"> Buy Now</th>
                <th className="text-center"> Delete</th>
              </tr>
            </thead>
            {isLoading && <div> loading...</div>}
            {cartData.map((cart, i) => (
              <tbody key={cart._id}>
                <tr className="hover border  ">
                  <th className=" w-1/12 text-center">{i + 1}</th>
                  <td className=" w-2/12 text-center">
                    <img
                      src={cart.img}
                      alt=""
                      className=" w-1/2 mx-auto rounded"
                    />
                  </td>
                  <td className=" w-4/12">{cart.productName}</td>
                  <td className=" w-1/12 text-center">${cart.orginalPrice}</td>
                  <td className=" w-1/12 text-center">{cart.quantity}</td>
                  <td className=" w-1/12 text-center">${cart.Totalprice}</td>
                  <td className=" w-1/12 text-center">
                    <button
                      onClick={() => buyNow(cart)}
                      className=" btn btn-xs bg-[#0d72b1] text-white border-none"
                    >
                      {" "}
                      Buy Now
                    </button>
                  </td>
                  <td className=" w-1/12 text-center">
                    <button
                      onClick={() => delteCart(cart.orderId)}
                      className=" btn btn-xs bg-red-500 border-none
                    "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default AddTOcart;
