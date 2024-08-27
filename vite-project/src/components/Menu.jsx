import React, { useReducer, useRef } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { useCart } from "./cart-context";
import Container from "./Container";
import { menuList } from "./menuList";

function Menu({setItemCounter}) { 

  const {addToCart, RemoveFromCart}=useCart()
  const setValue = (e) => {
     console.log(modifier);
  };
  const handleCart=(id)=>{
    setItemCounter(prev=>prev+1)
    addToCart(id)
  }
  return (
    <div className="bg-gray-500 flex flex-col">
      < Container />
     
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
      
                  onChange={setValue}
                />
              </label>
              </div>
              <div className="">
              <button className="bg-lime-200 rounded-3xl m-2 px-5 py-2"
                onClick={() =>
                    handleCart(item.id)
                    
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
