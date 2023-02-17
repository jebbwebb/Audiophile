import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.price += existingItem.price;
      } else {
        state.items.push(action.payload);
      }
    },
    updateQuanity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      item.quantity++;
      item.price += item.price;
    },
    lowerQuanity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      item.quantity--;
      if (item.quantity <= 0) {
        const index = state.items.findIndex(
          (item) => item.id === action.payload
        );
        state.items.splice(index, 1);
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addItem, updateQuanity, lowerQuanity } = counterSlice.actions;

export default counterSlice.reducer;
