import React, { useContext } from "react";
import { CartContext } from "../code/ContaxtProvider";

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const hasDiscount = product.discount

  return (
    <div className="w-75 sm:w-100 md:w-100 lg:w-100 xl:w-100">
      <div className="font-normal p-3 border-2 rounded-2xl border-gray-950 text-gray-950">
        <img src={product.thumbnail} alt="" />
        <h1>Category: {product.category}</h1>
        <h1>{product.title}</h1>
        {hasDiscount ? <h3 className="font-black text-lg text-blue-800">Discount: {product.discount}%</h3> : <p>Discount: No discount available</p>}
        <p>${product.price}</p>
        <p>{product.description}</p>
        <button
          className="bg-blue-800 p-2 border-0.5 rounded-xl mt-3 text-white font-bold px-5"
          onClick={() => dispatch({ type: "Add", product: product })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
