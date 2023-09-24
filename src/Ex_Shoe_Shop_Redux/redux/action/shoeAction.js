import { ADD_TO_CART } from "../constants/shoeContants";

export const addToCartAction = (shoe) => {
  return {
    type: ADD_TO_CART,
    payload: shoe,
  };
};

// export const actionName = (payload) => ({
//   type: type,
//   payload
// })
