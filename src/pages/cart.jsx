import React, { useContext } from "react";
import { CartContext } from "../code/ContaxtProvider";
import CartProduct from "../code/CartProduct";
import { totalItem, totalPrice } from "../code/CartReducer";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="font-jost w-[100%] h-[100%] mt-55">
      {cart.length === 0 ? (
        <div className="text-center">
          <h1 className="text-7xl"> Cart is empty </h1>
        </div>
      ) : (
        <div className="flex justify-self-center items-center">
          <div className="text-white text-center ">
            <div className="gap-4 md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {cart.map((p) => (
                <CartProduct product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="bg-blue-800 w-50 justify-self-center border-0.5 rounded-2xl p-4 text-white mt-10">
        <div>
          <h5> Total Items: {totalItem(cart)}</h5>
          <h5> Total Price: ${totalPrice(cart)} </h5>
          <h1>Please do not refresh this page</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
