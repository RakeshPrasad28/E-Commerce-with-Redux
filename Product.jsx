import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const { data } = axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProduct(res.data));
  }, []);

  const addToCart = (prod) => {
    dispatch(add(prod));
  };
  console.log(product);
  
  return (
    <div className="w-full h-full ">
      <div className="flex items-center justify-center gap-5 flex-wrap">
        {product.map((item, index) => {
          return (
            <div
              key={item.id}
              className="w-[22vw] h-96 border-2 p-3 rounded-md"
            >
              <div className="mb-3 flex justify-center">
                <img
                  style={{ width: "10vw", height: "10vw" }}
                  src={item.image}
                />
              </div>
              <h1 className="text-center mb-1 font-bold">
                {item.title.slice(0, 20)}
              </h1>
              <p className="text-center">{item.description.slice(0, 130)}</p>
              <h1 className="text-center font-bold">INR: &#8377;{item.price}</h1>
              <div className="flex justify-center mt-3">
                <button
                  onClick={() => addToCart(item)}
                  className="bg-blue-500 px-2 py-1 rounded-lg"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
