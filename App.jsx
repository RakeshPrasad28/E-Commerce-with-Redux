import React from "react";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
};

export default App;
