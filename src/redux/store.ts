import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
const store = configureStore({
  reducer: {
    cart,
  },
});

export default store;
