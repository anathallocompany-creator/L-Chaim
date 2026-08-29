"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useDispatch } from "react-redux";
import { setCart } from "@/redux/features/cartSlice";

export default function CartProvider() {
  const { user, isLoaded } = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) return;

    const loadCart = async () => {
      if (!user) {
        dispatch(setCart([]));
        return;
      }

      try {
        const res = await fetch(
          `/api/cart?userId=${user.id}`
        );

        if (!res.ok) {
          const text = await res.text();
          console.error("Cart API Error:", res.status, text);
          return;
        }

        const data = await res.json();
        dispatch(setCart(data));
      } catch (err) {
        console.error("Failed to load cart", err);
      }
    };

    loadCart();
  }, [user, isLoaded, dispatch]);

  return null;
}