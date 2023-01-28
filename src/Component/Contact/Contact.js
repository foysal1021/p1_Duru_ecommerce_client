import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qqhqdll",
        "template_vad855q",
        form.current,
        "QOEZn61H4SmvpcyWf"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success("Message Send Successfully ");
            e.target.reset();
          }
        },
        (error) => {
          console.log("not send", error.text);
        }
      );
  };
  return (
    <section className=" my-20">
      <div className=" px-10 shadow-2xl py-20  w-1/2 mx-auto border rounded">
        <h2
          className=" mb-5 text-2xl font-bold text-center"
          ref={form}
          onSubmit={sendEmail}
        >
          Contact Me
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" grid grid-cols-1 gap-5 "
        >
          <div>
            <label className="font-bold"> Name</label>
            <input
              name="user_name"
              type="text"
              placeholder="Type Your Name"
              className="mt-1 input input-bordered w-full "
            />
          </div>
          <div>
            <label className=" font-bold"> Email</label>
            <input
              name="user_emai"
              type="email"
              placeholder="Type Your Email"
              className="mt-1 input input-bordered w-full "
            />
          </div>
          <div>
            <label className=" font-bold "> Message</label>

            <textarea
              name="message"
              type="text"
              className=" mt-1 textarea textarea-bordered w-full h-36"
              placeholder="Type Your Message...."
            ></textarea>
          </div>
          <input type="submit" value="send message" className=" btn" />
        </form>{" "}
        <Toaster />
      </div>
    </section>
  );
};

export default Contact;
