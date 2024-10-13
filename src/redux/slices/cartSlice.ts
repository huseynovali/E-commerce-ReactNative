import { createSlice } from "@reduxjs/toolkit";
import { product } from "../../../types";


interface CartState {
  cart: product[];
}

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [] as product[],
  },
  reducers: {
    ProductAddCart: (state: CartState, action: { payload: product }) => {
      const product = state.cart.find((item) => item?.id === action.payload.id);
      if (product) {
        product.quantity += 1;
        return;
      }

      state.cart.push({ ...action.payload, quantity: 1 });
    },
    ProductRemoveCard: (state: CartState, action: { payload: product }) => {
      const product = state.cart.find((item) => item?.id === action.payload.id);
      if (product) {
        if (product.quantity === 1) {
          state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
          return;
        }
        product.quantity -= 1;
      }
    },
    ProductDeleteCard: (state: CartState, action: { payload: number }) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { ProductAddCart, ProductRemoveCard,ProductDeleteCard } = cart.actions;
export default cart.reducer;
