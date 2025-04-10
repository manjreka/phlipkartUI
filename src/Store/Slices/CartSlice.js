import { createSlice } from "@reduxjs/toolkit";

// REDUCERS -  how to do ??
// ACTION - what to do ??

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const { id, qty } = item;
      const existingProduct = state.items.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.qty += qty;
      } else {
        state.items.push(item);
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const filteredList = state.items.filter((each) => each.id !== id);
      state.items = filteredList;
    },
    incrementQty: (state, action) => {
      const id = action.payload;
      // for every click on + we have to increase qty by 1
      // step 1 ----- we have to locate the product in items list
      const existingProduct = state.items.find((each) => each.id === id);
      // setp 2 ----- we have to pricesly update the qty
      existingProduct.qty += 1;
    },
    decrementQty: (state, action) => {
      const id = action.payload;
      //for every click on - we have to decrease qty by 1 but ensure that qty is not less than 1
      // setp 1 ----- using id locate the product
      const existingProduct = state.items.find((each) => each.id === id);
      // step 2 ----- identify the product qty
      const { qty } = existingProduct;
      // step 3 ----- if qty > 1 and not equal to 1 then decrease qty by 1 otherwise remove the product from the cart
      if (qty > 1) {
        existingProduct.qty -= 1;
      } else {
        state.items = state.items.filter((each) => each.id !== id);
      }
    },
    clearCart: (state, action) => {
      state.items = [];
    },
    setCart: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
  clearCart,
  setCart,
} = cartSlice.actions;

export default cartSlice.reducer;
