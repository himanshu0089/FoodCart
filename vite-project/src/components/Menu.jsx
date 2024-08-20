import React, { useReducer, useRef } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { useCart } from "./cart-context";
import Container from "./Container";

const menuList = [
  { name: "Pav Bhaji", description: "The Mumbai Style", price: 80 },
  { name: "Maggi", description: "The Veggie and Spicy treat", price: 50 },
  { name: "Momos", description: "Can't let it go", price: 70 },
  { name: "Crispy Corn", description: "Taste Heavenly ", price: 100 },
  { name: "Ice Cream", description: "Zinger the Taste", price: 50 },
];
function Menu() {
  const { state, dispatch } = useCart();
  const [modifier, setModifier] = useState(1);
  const inputRef = useRef(0);

  const setValue = (e) => {
    //  console.log(e);
    // state.temp=e.target.value
    // setModifier(e.target.value)

    console.log(modifier);
  };

  return (
    <div className="bg-gray-500 flex flex-col">
      < Container />
      {/* < Navbar modifier={modifier}/> */}
      {menuList.map((item, id) => {
        return (

          <div key={id}>
          <div className="flex justify-around">
            <div>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <h2>{item.price}</h2>
            </div>
            <div className="flex flex-col">
              <div>
              <label>
                Amount
                <input className="mx-3"
                  type="number"
                  min="1"
                  max="5"
                  step="1"
                  ref={inputRef}
                  onChange={setValue}
                />
              </label>
              </div>
              <div className="">
              <button className="bg-lime-200 rounded-3xl m-2 px-5 py-2"
                onClick={() =>
                  dispatch({ payload: item, modifier: inputRef.current })
                }
              >
                {" "}
                +Add
              </button>
              </div>
            </div>
            </div>
            <hr className="m-2 text-green-200" /> 
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
