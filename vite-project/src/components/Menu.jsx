import React, { useReducer, useRef } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { useCart } from "./cart-context";

const menuList = [
  { name: "Pav Bhaji", description: "The Mumbai Style", price: 80 },
  { name: "Maggi", description: "The Veggie and Spicy treat", price: 50 },
  { name: "Momos", description: "Can't let it go", price: 70 },
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
      {/* < Navbar modifier={modifier}/> */}
      {menuList.map((item, id) => {
        return (
          <div key={id}>
          <div className="flex justify-around">
            <div>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </div>
            <div>
              <h2>{item.price}</h2>
              <label>
                Amount
                <input
                  type="number"
                  min="1"
                  max="5"
                  step="1"
                  ref={inputRef}
                  onChange={setValue}
                />
              </label>
              <button
                onClick={() =>
                  dispatch({ payload: item, modifier: inputRef.current })
                }
              >
                {" "}
                +Add
              </button>
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
