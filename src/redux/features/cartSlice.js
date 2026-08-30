import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    // =====================================================
    // ADD TO CART
    // =====================================================

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
          quantity: item.quantity || 1,
        });
      }
    },

    // =====================================================
    // REMOVE FROM CART
    // =====================================================

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    },

    // =====================================================
    // INCREASE QUANTITY
    // =====================================================

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (product) => product._id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    // =====================================================
    // DECREASE QUANTITY
    // =====================================================

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (product) => product._id === action.payload
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (product) => product._id !== action.payload
        );
      }
    },

    // =====================================================
    // CLEAR CART
    // =====================================================

    clearCart: (state) => {
      state.cartItems = [];
    },

    // =====================================================
    // LOAD CART
    // =====================================================

    setCart: (state, action) => {
      state.cartItems = Array.isArray(action.payload)
        ? action.payload
        : [];
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