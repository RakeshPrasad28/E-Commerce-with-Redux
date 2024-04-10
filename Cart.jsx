import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const removeCart = (prod) => {
    dispatch(remove(prod));
  };
  const product = useSelector((state) => state.cart);
  return (
    <div className="flex items-center justify-center gap-5 flex-wrap">
      {product.map((item, index) => {
        return (
          <div
            key={item.id}
            className="w-[22vw] h-96 border-[3px] p-3 rounded-md"
          >
            <div className="mb-3 flex justify-center">
              <img style={{ width: "10vw", height: "10vw" }} src={item.image} />
            </div>
            <h1 className="text-center mb-1 font-bold">
              {item.title.slice(0, 25)}
            </h1>
            <p className="text-center">{item.description.slice(0, 135)}</p>
            <h1 className="text-center font-bold">INR: &#8377;{item.price}</h1>
            <div className="flex justify-center gap-3 mt-3">
              <button
                onClick={() => removeCart(item.id)}
                className="bg-red-400 px-2 py-1 rounded-lg"
              >
                Remove
              </button>
              <button className="bg-yellow-500 px-2 py-1 rounded-lg">
                Buy Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
