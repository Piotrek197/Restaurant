import React, { useState, useEffect } from "react";
import Menu from "./Menu";
// import { Switch, BRoute, Router } from "react-router";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Delivery from "./Delivery";
import Success from "./Success";
import Bill from "./Bill";

function OrderFood() {
  const [cost, setCost] = useState(0);
  const [menu, setMenu] = useState(null);
  const [clicked, setClicked] = useState([]);
  const [ordered, setCount] = useState([]);
  const [closeOrder, setCloseOrder] = useState(false);
  const [toggleButton, setToggleButton] = useState(true);

  useEffect(() => {
    async function fetchData() {
      fetch("http://localhost:7000/menu")
        .then(response => response.json())
        .then(data => setMenu(data))
        .catch(e => console.log(e));
    }
    fetchData();
  }, []);
  const counts = {};

  useEffect(() => {
    let count1 = clicked.map(item => {
      let ready = item.split(" ");
      const price = ready.pop();
      ready = ready.join(" ");

      counts[ready] = (counts[ready] || 0) + 1;
      // console.log(ready, "price ", price);
      return { item: ready, count: counts[ready], price };
    });

    count1 = count1
      .reverse()
      .filter(
        (thing, index, self) =>
          index === self.findIndex(t => t.item === thing.item)
      );

    setCount(count1);
  }, [clicked]);
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Menu
              setCost={setCost}
              cost={cost}
              menu={menu}
              clicked={clicked}
              setClicked={setClicked}
            />
          </Route>
          <Route path="/complete-order">
            <Delivery
              ordered={ordered}
              sum={cost}
              setCloseOrder={setCloseOrder}
              setToggleButton={setToggleButton}
            />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>

        {closeOrder ? (
          ""
        ) : (
          <Bill
            ordered={ordered}
            cost={cost}
            toggleButton={toggleButton}
            setToggleButton={setToggleButton}
          />
        )}
      </div>
    </Router>
  );
}

export default OrderFood;
