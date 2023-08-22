import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    // 1 first, we find if the item is in the cart
    const tempItem = state.cart.find((item) => item.id === id + color);
    // 3 if the item is already in the cart, then this happens
    if (tempItem) {
      // 4 first, we iterate over the cart to check where item is
      const tempCart = state.cart.map((cartItem) => {
        //  5 when id matches the cart id, we know its the same item
        if (cartItem.id === id + color) {
          // 6 so we increase the amount
          let newAmount = cartItem.amount + amount;
          // 7 but make sure that its not more than the stock
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          // 8 then we change the amount property to the new amount
          return { ...cartItem, amount: newAmount };
        } else {
          // 9 if cartItem id doesn't match, we just return to our array
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      // 2 if item is not in the cart already, then this happens
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
