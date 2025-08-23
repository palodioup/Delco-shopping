import React, { useContext } from "react";
import { CartContext } from "../code/ContaxtProvider";

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="bg-gray-900 text-white w-100">
      <div className="bg-gray-900 text-white p-3 border-2 rounded-2xl">
        <img src={product.thumbnail} alt="" />
        <h1>Category: {product.category}</h1>
        <h1>{product.title}</h1>
        <p>£{product.price}</p>
        <p>{product.description}</p>
        <button
          className="bg-blue-800 p-2 border-0.5 rounded-xl mt-3"
          onClick={() => dispatch({ type: "Add", product: product })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
