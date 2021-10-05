import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function Delivery(props) {
  const [orderDeliveryData, setOrderDeliveryData] = useState({});

  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setOrderDeliveryData({
      ...orderDeliveryData,
      order: props.ordered
    });
    function fetchData() {
      fetch("http://localhost:7000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...orderDeliveryData, order: props.ordered })
      })
        .then(response => response.json())
        .then(props.setCloseOrder(true))
        .catch(e => console.log(e));
    }
    fetchData();
    history.push("/success");
  }

  return (
    <main className="delivery-main">
      <Link
        className="back-to-menu-link"
        onClick={() => props.setToggleButton(true)}
        to="/"
      >
        Back to cart
      </Link>
      <h2>Your order details</h2>
      <form className="form">
        <div className="input-wraper">
          <label htmlFor="name">Your first name</label>
          <input
            onChange={e =>
              setOrderDeliveryData({
                ...orderDeliveryData,
                name: e.target.value
              })
            }
            name="name"
            type="text"
            autoComplete="off"
            required
          />
        </div>
        <div className="input-wraper">
          <label htmlFor="city">City/District</label>
          <input
            onChange={e => {
              setOrderDeliveryData({
                ...orderDeliveryData,
                city: e.target.value
              });
            }}
            name="city"
            type="text"
            autoComplete="off"
            required
          />
        </div>
        <div className="input-wraper">
          <label htmlFor="address">Street and building/flat number</label>
          <input
            onChange={e => {
              setOrderDeliveryData({
                ...orderDeliveryData,
                address: e.target.value
              });
            }}
            name="address"
            type="text"
            autoComplete="off"
            required
          />
        </div>
        <div className="input-wraper">
          <label htmlFor="phone-number">Numer telefonu</label>
          <input
            onChange={e => {
              setOrderDeliveryData({
                ...orderDeliveryData,
                phone: e.target.value
              });
            }}
            name="phone-number"
            type="text"
            autoComplete="off"
            required
          />
        </div>
        <button onClick={handleSubmit} className="submit-button">
          {/* Zamów jedzonko */}
          Submit your order
        </button>
      </form>
    </main>
  );
}

export default Delivery;
