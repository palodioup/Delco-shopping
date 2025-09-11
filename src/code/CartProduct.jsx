import React, { useContext } from "react";
import { CartContext } from "./ContaxtProvider";

const CartProduct = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="border-2 text-black rounded-xl p-2 mb-10 w-100 border-gray-950">
      <div className="flex items-center justify-center">
        <img src={product.thumbnail} alt="" />
      </div>
      <h1>Category: {product.category}</h1>
      <h1>{product.title}</h1>
      <p>${product.price}</p>
      <div className="flex justify-center">
        <div className="bg-blue-900 w-50 p-2 border-0.5 rounded-xl flex justify-center items-center text-white">
          <button
            className="bg-gray-950 mr-2 p-4 h-5 w-5 rounded-[25%] flex justify-center items-center"
            onClick={() => dispatch({ type: "Decrease", id: product.id })}
          >
            -
          </button>
          <button className="bg-gray-950 mr-2 p-4 h-5 w-5 rounded-[25%] flex justify-center items-center">
            {product.quantity > 0 ? product.quantity : 0}
          </button>
          <button
            className="bg-gray-950 mr-2 p-4 h-5 w-5 rounded-[25%] flex justify-center items-center"
            onClick={() => dispatch({ type: "Increase", id: product.id })}
          >
            +
          </button>
        </div>
      </div>
      <button
        className="mt-5 bg-blue-800 p-3 px-5 border-0.5 text-white rounded-2xl"
        onClick={() => dispatch({ type: "Remove", id: product.id })}
      >
        Remove
      </button>
    </div>
  );
};

export default CartProduct;
