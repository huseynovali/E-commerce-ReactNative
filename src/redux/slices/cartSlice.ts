import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    ProductAddCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { ProductAddCart } = cart.actions;
export default cart.reducer;
