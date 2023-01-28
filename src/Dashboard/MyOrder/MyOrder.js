import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { authContext } from "../../Context/AuthProvider/AuthProvider";

const MyOrder = () => {
  const { user } = useContext(authContext);
  const [myOrder, setMyorder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/order/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyorder(data));
  }, [user?.email]);

  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/order_delete/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("");
        }
      });
  };

  return (
    <section>
      <div className=" py-10">
        <h2 className=" text-center text-4xl font-bold"> My Order</h2>
        <div className="overflow-x-auto mt-10">
          <div className="overflow-x-auto">
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Acation</th>
                  </tr>
                </thead>
                {myOrder.map((order, i) => (
                  <tbody key={order._id}>
                    <tr>
                      <th className=" w-1/6">{i + 1}</th>

                      <td className=" w-1/6 ">
                        <img
                          src={order.img}
                          className=" w-1/2 rounded"
                          alt=""
                        />
                      </td>
                      <td className=" w-1/6">{order.productName}</td>
                      <td className=" w-1/6">${order.TotalPrice}</td>
                      <td className=" w-1/6">pending</td>
                      <td className=" w-1/6">
                        <button
                          onClick={() => deleteProduct(order.orderId)}
                          className=" btn bg-[#a60d0d] btn-xs border-none "
                        >
                          {" "}
                          delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyOrder;
