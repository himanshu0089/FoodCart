import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { menuList } from "./menuList";

const cartContext = createContext();

function CartProvider({ children }) {
  const { itemCounter, setItemCounter } = useState(0);
  const [itemRef, setItemRef] = useState({});

  const addToCart = (item_id) => {
    if (!itemRef[item_id]) {
      setItemRef((prev) => ({ ...prev, [item_id]: 1 }));
    } else {
      setItemRef((prev) => ({ ...prev, [item_id]: prev[item_id] + 1 }));
    }
  };
  const RemoveFromCart = (item_id) => {
    setItemRef((prev) => ({ ...prev, [item_id]: prev[item_id] - 1 }));
  };

  useEffect(() => {
    console.log(itemRef);
  }, [itemRef]);

  const totalCartAmount=()=>{
    let totalAmount=0;
    for (const item in itemRef){
      if(itemRef[item]>0){
       let itemInfo=menuList.find((product)=>product.id===item)
       totalAmount+=itemInfo.price*itemRef[item]
      }
    }
    return totalAmount;
  }

  const contextValue = {
    itemRef,
    addToCart,
    RemoveFromCart,
    totalCartAmount
  };
  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
}
const useCart = () => useContext(cartContext);
export { CartProvider, useCart };
