import React, { useEffect } from "react";
import { useCart } from "./cart-context";
import { menuList } from "./menuList";

function CartItems() {
    const {itemRef,RemoveFromCart}=useCart();
     useEffect(()=>{
        console.log({menuList})
     },[])
    return (
    <div>
        <div className="">
            <div className="">
                {menuList.map((item,index)=>{
                    return (
                        <div key={index}> {item.name} </div>
                    )
                })}
            </div>
            <button onClick={()=>RemoveFromCart(menuList.id)}>
                -
            </button>
        </div>
    </div>
  );
}

export default CartItems;
