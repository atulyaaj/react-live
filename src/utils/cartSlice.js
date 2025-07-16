import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    // originalState = {items: ["pizza"]}
    clearCart: (state) => {
      // RTK - either mutating the existing state or return a new state
      state.items.length = 0; // originalState = {items: []}
      // console.log(current(state));

      // return {items: []}; //this new object will be replaced with originalState = {items: []}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
