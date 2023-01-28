import React from "react";
import toast, { Toaster } from "react-hot-toast";

const AddCatagory = () => {
  const addCatagory = (e) => {
    e.preventDefault();
    const catagory = { catagory: e.target.catagory.value };
    fetch("http://localhost:5000/catagory", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(catagory),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully Catagory Added!");
        }
      });
  };
  return (
    <section className=" w-1/2 mx-auto">
      <div className=" mt-20">
        <h2 className=" text-2xl mb-5 font-bold"> Add Catagory</h2>
        <form className=" grid grid-cols-1 gap-2" onSubmit={addCatagory}>
          <input
            required
            type="text"
            name="catagory"
            placeholder="type your catagroy name"
            className="input input-bordered w-full "
          />
          <input className=" btn w-full" type="submit" value="Add Cataroy" />{" "}
        </form>
      </div>{" "}
      <Toaster />
    </section>
  );
};

export default AddCatagory;
