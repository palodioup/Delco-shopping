export const totalItem = (cart) => {
  return cart.reduce((sum, product) => sum + product.quantity , 0)
}

export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + Math.round(product.quantity * product.price * 10) / 10 , 0)
}

const CartReducer = (state, action) => {
  switch(action.type) {
    case "Add": 
    // check if product already exists
      const existing = state.find(p => p.id === action.product.id);
      if (existing) {
        return state.map(p =>
          p.id === action.product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }
      return [...state, action.product]

    case "Remove":
      return state.filter(p => p.id !== action.id)

    case "Increase":
      return state.map(p =>
        p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
      );

    case "Decrease": 
      return state.map(p => 
        p.id === action.id ? { ...p, quantity: p.quantity - 1 } : p
      )

    default:
      state
  }
}

export default CartReducer