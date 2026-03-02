import React from "react";
import "./CSS/Contact.css";

export default function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "1777a241-2674-47cb-890d-cbf63186a971");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Form Submitted Successfully ✅");
        event.target.reset();
      } else {
        alert("Error submitting form ❌");
      }
    } catch (error) {
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="contact-container">

      <div>
        <span className="main-topic">Contact Us</span>
        <br />
        <span className="sub-topic">
          Please fill in the information below.
        </span>
      </div>

      <div>
        <form onSubmit={onSubmit}>

          <label className="text-box-name">Name:</label>
          <input
            className="text-box"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />

          <label className="text-box-name">Email:</label>
          <input
            className="text-box"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <label className="text-box-name">Phone Number:</label>
          <input
            className="text-box"
            type="number"
            name="phone"
            placeholder="Contact number"
            required
          />

          <label className="text-box-name">Required Item:</label>
          <input
            className="text-box"
            type="text"
            name="item"
            placeholder="Item"
            required
          />

          <label className="text-box-name">Message:</label>
          <textarea
            className="text-box"
            name="message"
            placeholder="Type here"
            required
          ></textarea>

          <button className="button" type="submit">
            Submit
          </button>

        </form>
      </div>

    </div>
  );
}
