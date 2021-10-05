import React, { useState } from "react";
import { Link } from "react-router-dom";

function Bill(props) {
  const { ordered, cost, toggleButton, setToggleButton } = props;
  console.log("toggle", toggleButton);
  return (
    <aside>
      <div className="receipt">
        <div className="receipt__header">
          <h3>Your order</h3>
        </div>
        <ul className={"list-order " + (toggleButton || "without-button")}>
          {ordered
            ? ordered.map(ordered => {
                return (
                  <li>
                    <span className="left-col">{ordered.item}</span>
                    <span className="center-col">
                      {ordered.count > 1 ? "x" + ordered.count : ""}
                    </span>
                    <span className="right-col">
                      {ordered.price * ordered.count} $
                    </span>
                  </li>
                );
              })
            : ""}
        </ul>
        <div className="receipt__summary">
          <span className="receipt__sum">
            Price: <span>{cost} $</span>
          </span>
          {toggleButton && (
            <Link
              onClick={() => setToggleButton(false)}
              to="/complete-order"
              className="receipt__submit-order"
            >
              Submit order
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Bill;
