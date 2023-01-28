import React, { useEffect, useState } from "react";

const TotalOrder = () => {
  const [orders, setOrder] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-order")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  console.log(orders);
  return (
    <section>
      <div className=" p-5">
        <h2 className=" text-2xl font-bold"> Order</h2>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full mt-5">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Order Id</th>
                <th>Customer</th>
                <th>Paid</th>
                <th>Status</th>
                <th>Items</th>
                <th>Total</th>
              </tr>
            </thead>
            {orders.map((order, index) => (
              <tbody key={index}>
                <tr>
                  <th>{index + 1}</th>
                  <td>#{order.orderId}</td>
                  <td>{order.userName}</td>
                  <td className=" text-[#beb019] font-bold">NO</td>
                  <td className=" text-teal-600 font-bold">Pending</td>
                  <td>{order.quentiti}</td>
                  <td>${order.TotalPrice}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
};

export default TotalOrder;
