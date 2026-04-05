import React, { useState } from "react";
import "./App.css";

function CheckoutForm() {
  const [customerName, setCustomerName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Card");

  // Separate handlers
  const handleNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setShippingAddress(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkoutDetails = {
      customerName,
      shippingAddress,
      paymentMethod,
    };

    console.log(checkoutDetails);
    alert("Checkout details submitted! Check console.");
  };

  return (
    <div className="container">
      <h1>Checkout Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Customer Name:</label>
        <input
          type="text"
          value={customerName}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />

        <label>Shipping Address:</label>
        <textarea
          value={shippingAddress}
          onChange={handleAddressChange}
          placeholder="Enter shipping address"
        ></textarea>

        <label>Payment Method:</label>
        <select value={paymentMethod} onChange={handlePaymentChange}>
          <option value="Card">Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Cash">Cash</option>
        </select>

        <button type="submit">Place Order</button>
      </form>

      <div className="preview">
        <h2>Live Preview</h2>
        <p><strong>Name:</strong> {customerName}</p>
        <p><strong>Address:</strong> {shippingAddress}</p>
        <p><strong>Payment:</strong> {paymentMethod}</p>
      </div>
    </div>
  );
}

export default CheckoutForm;