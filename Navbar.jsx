import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <div className="flex justify-between items-center px-5 pt-3 ">
      <Link to="/" className="text-xl font-bold ml-10">
        Products
      </Link>
      <h1 className="text-3xl font-bold text-center  py-4 ">
        Product Dashboard
      </h1>
      <Link to="/cart">
        <i className="ri-shopping-cart-fill text-2xl mr-10">
          <sup>{cartProducts.length}</sup>
        </i>
      </Link>
    </div>
  );
};

export default Navbar;
