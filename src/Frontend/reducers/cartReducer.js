export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET-CART":
      return { ...state, cart: action.payload };

    default:
      break;
  }
};
