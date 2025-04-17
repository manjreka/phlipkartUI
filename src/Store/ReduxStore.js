import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { setCart } from "./Slices/CartSlice";
import checkoutReducer, { setAddress } from "./Slices/checkoutSlice";
import {
  loadAddressFromDB,
  loadCartFromDB,
  saveAddressToDB,
  saveCartToDB,
} from "../Utils/indexedDB";

const createStore = async () => {
  // step 1 --- configure store
  const store = configureStore({
    reducer: {
      cart: cartReducer,
      checkout: checkoutReducer,
    },
  });
  // Load initial cart from IndexedDB
  const savedCart = await loadCartFromDB();
  if (savedCart) {
    store.dispatch(setCart(savedCart));
  }

  // whenever redux state changes this function will be called
  store.subscribe(() => {
    const cartItems = store.getState().cart.items; // get latest state of redux
    saveCartToDB(cartItems); // save the latest state in indexedDB
    const address = store.getState().checkout.shippingDetails; // get latest state of redux
    saveAddressToDB(address); // save the latest state in indexedDB
  });

  // Load initial address from IndexedDB
  const savedAddress = await loadAddressFromDB();
  if (savedAddress) {
    store.dispatch(setAddress(savedAddress));
  }

  return store;
};

export default createStore;
