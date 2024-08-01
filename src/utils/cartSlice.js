import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      // mutatig th state over here
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      //   state.items = [];
      //   return {items:[]} --> either one we can do this new [] replace with original state[...state]
      // N
      state.items.length = 0;
    },
  },
});
export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
