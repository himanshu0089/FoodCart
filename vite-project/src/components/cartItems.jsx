import React from "react";
import { useCart } from "./cart-context";

function CartItems() {
  const { state } = useCart();
  console.log("hello");
  return (
    <div>
      {state.addItems.map((item, id) => {
        return (
          <div key={id}>
            {item.name} {item.price} {" "}
            <button>+</button> {" "}
            <button>-</button>
          </div>
        );
      })}
    </div>
  );
}

export default CartItems;
