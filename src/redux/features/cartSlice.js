import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {

    addToCart: (state, action) => {
      const item = action.payload;

      const existing = state.cartItems.find(
        (product) => product._id === item._id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({
          ...item,
          quantity: 1,
        });
      }
    },


    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    },


    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (product) => product._id === action.payload
      );

      if (item) {
        item.quantity++;
      }
    },


    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (product) => product._id === action.payload
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity--;
      } else {
        state.cartItems = state.cartItems.filter(
          (product) => product._id !== action.payload
        );
      }
    },


    clearCart: (state) => {
      state.cartItems = [];
    },


    setCart: (state, action) => {
      state.cartItems = action.payload;
    },

  },
});


export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  setCart,
} = cartSlice.actions;


export default cartSlice.reducer;