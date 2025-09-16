import React from "react";
import Data from "../data/Data.json";
import Product from "../data/Product";

const Products = () => {
  const products = Data.products;

  return (
    <div className="font-jost text-black w-[100%] mt-55">
      <div>
        <div className="mb-40 p-10 text-center">
          <h1 className="text-6xl font-medium mb-5">Delco Shopping</h1>
          <p>Shopping redefined. Get the best <span className="text-blue-800 font-medium">prices</span> and <span className="text-blue-800 font-medium">products</span> here at <span className="text-blue-800 font-bold">Delco</span></p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {products.map((p) => (
            <Product product={p}/>
          ))}
      </div>
      </div>
    </div>
  );
};

export default Products;
