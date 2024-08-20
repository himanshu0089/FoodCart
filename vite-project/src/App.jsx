import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Menu />

        <Footer />
      </div>
    </>
  );
}

export default App;
