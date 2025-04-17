// checkoutSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingDetails: {},
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    updateShippingDetails: (state, action) => {
      state.shippingDetails = action.payload;
    },
    setAddress: (state, action) => {
      state.shippingDetails = action.payload;
    },
    clearAddress: () => initialState,
  },
});

export const { updateShippingDetails, setAddress, clearAddress } =
  checkoutSlice.actions;
export default checkoutSlice.reducer;
