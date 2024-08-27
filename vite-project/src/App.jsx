import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import CartItems from "./components/cartItems"; 

function App() {
  const [showCart, setShowCart] = useState(true); 
  const[itemCounter,setItemCounter]=useState(0)

  return (
    <>
      <div>
        <Navbar showCart={showCart} setShowCart={setShowCart} itemCounter={itemCounter} />
        {showCart && <CartItems />} 
        <Menu setItemCounter={setItemCounter}/>

        <Footer />
      </div>
    </>
  );
}

export default App;
