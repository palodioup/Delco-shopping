import React, { useState, useContext } from "react";
import CartContext from "./ContaxtProvider"
import x from "./r.js"

const CartProduct = ({ product }) => {

      const { dispatch } = useContext(CartContext)
  const [ quantity, setQuantity ] = useState(x)

  const sub = () => {
    setQuantity(quantity - 1)
  }

  const add = () => {
    setQuantity(quantity + 1)
  }



  return (
    <div className="bg-gray-900 text-white text-center grid grid-cols-3 gap-4">
      <div className="bg-gray-950 border-1 rounded-xl p-2 mb-10 text-center w-100">
        <div className="flex items-center justify-center">
          <img src={product.thumbnail} alt="" />
        </div>
        <h1>Category: {product.category}</h1>
        <h1>{product.title}</h1>
        <p>£{product.price}</p>
        <div className="flex justify-center">
          <div className="bg-blue-900 w-50 p-2 border-0.5 rounded-xl flex justify-center items-center">
            <button className="bg-gray-950 mr-2 p-4 h-5 w-5 rounded-[25%] flex justify-center items-center" onClick={sub}>-</button>
            <button className="bg-gray-950 mr-2 p-4 h-5 w-5 rounded-[25%] flex justify-center items-center">{quantity}</button>
            <button className="bg-gray-950 mr-2 p-4 h-5 w-5 rounded-[25%] flex justify-center items-center" onClick={add}>+</button>
          </div>
        </div>
        <button className="mt-5 bg-blue-800" onClick={() => dispatch({type: "Remove", id: product.id})}>Remove</button>
      </div>
    </div>
  );
};

export default CartProduct;
