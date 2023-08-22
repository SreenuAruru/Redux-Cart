import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuatity: 0, change: false },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuatity = action.payload.totalQuatity;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (eachItem) => eachItem.id === newItem.id
      );
      state.change = true;
      state.totalQuatity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItem(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find(
        (eachItem) => eachItem.id === itemId
      );
      state.change = true;
      state.totalQuatity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((eachItem) => eachItem.id !== itemId);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
