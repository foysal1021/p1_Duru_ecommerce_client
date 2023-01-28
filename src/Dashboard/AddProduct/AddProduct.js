import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast, { Toaster } from "react-hot-toast";

const AddProduct = () => {
  const [AboutProduct, SetAboutProduct] = useState("");
  const [_catagory, set_catagory] = useState([]);

  const [getCatagory, setCatagory] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const imgKey = "0d3575a7f70170e9cbfb53b06181f91b";
  useEffect(() => {
    fetch("http://localhost:5000/catagory")
      .then((res) => res.json())
      .then((data) => set_catagory(data));
  }, []);
  const addProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productPrice = form.price.value;

    const productInfo = {
      productName: productName,
      price: productPrice,
      img: imageUrl,
      about: AboutProduct,
      catagory: getCatagory,
    };
    fetch("http://localhost:5000/add_product", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Successfully Product Added!");
          console.log(data);
        }
      });
  };
  const catagory = (e) => {
    setCatagory(e.target.value);
  };
  //
  const handleImg = async (e) => {
    e.preventDefault();
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?expiration=600&key=${imgKey}`,
      { method: "POST", body: formData }
    );
    const data = await res.json();
    if (data.success) {
      setImageUrl(data.data.url);
    }
  };

  return (
    <section>
      <div className=" p-5">
        <h2 className=" text-2xl font-bold"> Add Product</h2>

        <form
          onSubmit={addProduct}
          className=" w-2/3 bg-[#f7f7f7] border rounded mt-5 shadow-lg p-5 "
        >
          <p className=" text-xl font-bold"> Basic Information</p>
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              required
              type="text"
              name="productName"
              placeholder="Product Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input
              required
              name="price"
              type="number"
              placeholder="Product Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text font-bold">Catagory</span>
            </label>
            <select
              required
              className="select select-bordered w-full "
              onChange={catagory}
            >
              <option disabled selected>
                Selected?
              </option>
              {_catagory.map((catagory_) => (
                <option key={catagory_._id}>{catagory_.catagory}</option>
              ))}
            </select>
          </div>
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text font-bold">Upload Image</span>
            </label>
            <input
              onChange={handleImg}
              required
              type="file"
              className="file-input file-input-bordered w-full "
            />
          </div>
          <div className="form-control mb-5 ">
            <label className="label">
              <span className="label-text font-bold">Product Details</span>
            </label>
            <ReactQuill
              required
              theme="snow"
              value={AboutProduct}
              onChange={SetAboutProduct}
            />
          </div>{" "}
          <input type="submit" value="Add Product" className=" btn" />
        </form>
      </div>
      <Toaster />
    </section>
  );
};

export default AddProduct;
