import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { setCart } from "./Slices/CartSlice";
import { loadCartFromDB, saveCartToDB } from "../Utils/indexedDB";

const createStore = async () => {
  // step 1 --- configure store
  const store = configureStore({
    reducer: {
      cart: cartReducer,
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
  });

  return store;
};

export default createStore;
