import React, { useEffect } from "react";
import { useCart } from "./cart-context";
import { menuList } from "./menuList";

function CartItems({ setShowCart , setItemCounter}) {
  const { itemRef, RemoveFromCart, addToCart,totalCartAmount } = useCart();
  const addToCarthandler=(id)=>{
    addToCart(id);
    setItemCounter(prev=>prev+1)
  }
  const RemoveFromCarthandler=(id)=>{
    RemoveFromCart(id);
    setItemCounter(prev=>prev-1)
  }
  useEffect(() => {
    console.log({ menuList });
  }, []);
  return (
    <div>
      <div className="bg-gray-400 z-10">
        <div className="">
          {menuList.map((item, index) => {
            if (itemRef[item.id] > 0) {
              return (
                <div key={index} className="flex flex-col">
                  <div className="">
                  <p className=""> {item.name}</p>
                  <p className="">Rs. {item.price} </p>
                  <p className=""> x {itemRef[item.id]}</p>
                  </div>
                  
                  <div className="flex">
                  <p className="cursor-pointer" onClick={() => addToCarthandler(item.id)}> +</p>
                  <p className="cursor-pointer" onClick={() => RemoveFromCarthandler(item.id)}>-</p>
                  </div>
                  
                  <hr />
                </div>
              );
            }
          })}
        </div>
        <div className="flex justify-between">
        <p>CartAmount : </p>
        <p> Rs. {totalCartAmount()}</p>
        </div>
        <div className="flex flex-row-reverse">
        
        <button onClick={() => setShowCart(false)}> Close</button>
        
        <button>orders</button> 
        </div>
      </div>
    </div>
  );
}

export default CartItems;
