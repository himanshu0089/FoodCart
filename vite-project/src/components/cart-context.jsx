import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

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

  const contextValue = {
    itemRef,
    addToCart,
    RemoveFromCart
  };
  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
}
const useCart = () => useContext(cartContext);
export { CartProvider, useCart };
