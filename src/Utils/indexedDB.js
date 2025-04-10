import { openDB } from "idb";

const DB_NAME = "cartDB";
const STORE_NAME = "cart";

export const getDB = async () => {
  return await openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME);
    },
  });
};

export const saveCartToDB = async (cartItems) => {
  const db = await getDB();
  await db.put(STORE_NAME, cartItems, "cartData");
};

export const loadCartFromDB = async () => {
  const db = await getDB();
  return await db.get(STORE_NAME, "cartData");
};
