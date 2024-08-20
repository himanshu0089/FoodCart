import React from "react";
import { useState } from "react";
import { useCart } from "./cart-context";
import CartItems from "./cartItems";

function Navbar({ modifier }) {
  const { state } = useCart();
  const [showCart, setShowCart] = useState(false);

  // console.log({state})
  return (
    <div className="bg-lime-200 flex justify-between h-[70px] z-1 fixed... ">
      <div className="mx-20 my-5">
        {" "}
        <h2>Laziz Food</h2>
      </div>
      <div className="mx-20 my-5 ">
        <button
          className=""
          onClick={() => setShowCart((showCart) => !showCart)}
        >
          Your Cart {state.totalItems}
        </button>
      </div>

      {showCart && <CartItems />}
    </div>
  );
}

export default Navbar;
