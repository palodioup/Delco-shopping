import React from "react";
import Data from "../data/Data.json";
import Product from "../data/Product";

const Products = () => {
  const products = Data.products;

  return (
    <div className="grid grid-cols-3 gap-4 bg-gray-900">
      {products.map((p) => (
        <Product product={p}/>
      ))}
    </div>
  );
};

export default Products;
