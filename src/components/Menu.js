import React, { useEffect, useReducer, useState } from "react";

function Menu(props) {
  const initialState = { foodMenu: [], filter: "all" };

  function reducer(state, action) {
    switch (action.type) {
      //   case "fetchData":
      //     return { ...state, foodMenu: action.value, filter: state.filter };
      case "filterMenu":
        return { ...state, foodMenu: state.foodMenu, filter: action.value };

      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  //   useEffect(() => {
  //     async function fetchData() {
  //       fetch("http://localhost:7000/menu")
  //         .then(response => response.json())
  //         .then(data => dispatch({ type: "fetchData", value: data }))
  //         .catch(e => console.log(e));
  //     }
  //     fetchData();
  //   }, []);

  const handleFiltering = cat => {
    // if (cat == "all") return;
    dispatch({ type: "filterMenu", value: cat });
  };
  return (
    <main>
      <section className="categories">
        <div className="categories-list">
          <ul>
            <li>
              <button
                onClick={() => handleFiltering("all")}
                className="category-button"
              >
                All
              </button>
            </li>
            <li>
              <button
                onClick={() => handleFiltering("burger")}
                className="category-button"
              >
                Burgers
              </button>
            </li>
            <li>
              <button
                onClick={() => handleFiltering("pizza")}
                className="category-button"
              >
                Pizza
              </button>
            </li>
            <li>
              <button
                onClick={() => handleFiltering("drink")}
                className="category-button"
              >
                Drinks
              </button>
            </li>
          </ul>
        </div>
      </section>

      <section className="products">
        {props.menu
          ? props.menu
              .filter(item => {
                if (state.filter === "all") {
                  return true;
                }
                return state.filter === item.category;
              })
              .map(item => {
                return (
                  <div className="single-product">
                    <div className="single-product__image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="single-product__name">
                      <h4>{item.name}</h4>
                    </div>
                    <div className="single-product__description">
                      {item.description}
                    </div>
                    <div className="single-product__price">$ {item.price}</div>
                    <button
                      onClick={() => {
                        props.setCost(props.cost + item.price);
                        props.setClicked(
                          props.clicked.concat(item.name + " " + item.price)
                        );
                      }}
                    >
                      Add to order
                    </button>
                  </div>
                );
              })
          : ""}
        {/* <div className="single-product">
          <div className="single-product__image">
            <img src="./BIG_0003_Pikantny_teksanski_burger.png" alt="" />
          </div>
          <div className="single-product__name">
            <h4>Texas Burger</h4>
          </div>
          <div className="single-product__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="single-product__price">$ 15.25</div>
          <button>Zamów</button>
        </div> */}
        {/* <div class="single-product"></div> */}
        {/* <div class="single-product"></div>
        <div class="single-product"></div>
        <div class="single-product"></div>
        <div class="single-product"></div>
        <div class="single-product"></div>
        <div class="single-product"></div>
        <div class="single-product"></div>
        <div class="single-product"></div>
        <div class="single-product"></div>
        <div class="single-product"></div> */}
      </section>
    </main>
  );
}

export default Menu;
