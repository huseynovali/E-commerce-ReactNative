import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  quantity: number;
}

interface CartState {
  cart: Product[];
}

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [] as Product[],
  },
  reducers: {
    ProductAddCart: (state: CartState, action: { payload: Product }) => {
      const product = state.cart.find((item) => item?.id === action.payload.id);
      if (product) {
        product.quantity += 1;
        return;
      }

      state.cart.push({ ...action.payload, quantity: 1 });
    },
    ProductRemoveCard: (state: CartState, action: { payload: Product }) => {
      const product = state.cart.find((item) => item?.id === action.payload.id);
      if (product) {
        if (product.quantity === 1) {
          state.cart = state.cart.filter((item) => item.id !== action.payload.id);
          return;
        }
        product.quantity -= 1;
      }
    }
  },
});

export const { ProductAddCart , ProductRemoveCard } = cart.actions;
export default cart.reducer;
