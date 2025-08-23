import React, { useContext } from "react";
import { CartContext } from "../code/ContaxtProvider";
import CartProduct from "../code/CartProduct";
import { totalItem, totalPrice } from "../code/CartReducer"

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="bg-gray-900 text-white">
      <div className="p-5 bg-gray-900 lg:grid grid-cols-3 gap-4">
        {cart.map((p) => (
          <CartProduct product={p} />
        ))}
     </div>
     <div>
       <div>
         <h5>Total Items: {totalItem(cart)}</h5>
         <h5>Total Price: £{totalPrice(cart)}</h5>
         <button>Check</button>
       </div>
     </div>
    </div>
  );
};

export default Cart;
