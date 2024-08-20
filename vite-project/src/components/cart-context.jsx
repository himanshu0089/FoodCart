import { createContext,useContext, useReducer, useState } from "react";
import { addToCartReducer } from "./addToCartReducer";

const cartContext=createContext();
const initialState={
    totalItems:0,
    addItems:[],
    removeItems:[]
}
function CartProvider({ children }) {

    const [state, dispatch] = useReducer(addToCartReducer, initialState);

    return (
        <cartContext.Provider value={{ state, dispatch }}>
            {children}
        </cartContext.Provider>
    );
}
const useCart=()=>useContext(cartContext)
export {CartProvider,useCart}