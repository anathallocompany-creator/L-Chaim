
"use client";

import Link from "next/link";
import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { user } = useUser();
  const [liked, setLiked] = useState(false);

  const addProduct = async () => {
    if (!user) {
      alert("Please sign in.");
      return;
    }

    const payload = {
      userId: user.id,
      productId: product._id,
      name: product.name,
      slug: product.slug,
      image: product.image,
      price: product.price,
      quantity: 1,
    };

    const res = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const item = await res.json();

    if (!res.ok) {
      console.error(item);
      alert(item.message);
      return;
    }

    dispatch(addToCart(item));
  };

  const toggleWishlist = async () => {
    if (!user) {
      alert("Please sign in first.");
      return;
    }

    const payload = {
      userId: user.id,
      productId: product._id,
      name: product.name,
      slug: product.slug,
      image: product.image,
      price: product.price,
      quantity: 1,
    };

    const res = await fetch("/api/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error(data);
      alert(data.message);
      return;
    }

    setLiked(data.liked);
  };

  return (
    <div
      className="
        group
        bg-white
        rounded-lg
        sm:rounded-xl
        overflow-hidden
        shadow
        hover:shadow-xl
        transition-all
        duration-300
        w-full
      "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={product.image?.url || product.image}
          alt={product.name}
          className="
            w-full
            aspect-[1/1.15]
            sm:aspect-[4/5]
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Product Link */}
        <Link
          href={`/products/${product.slug}`}
          className="absolute inset-0 z-10"
          aria-label={`View ${product.name}`}
        />

        {/* Hover Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/0
            group-hover:bg-black/20
            pointer-events-none
            transition
            duration-500
          "
        />

        {/* DISCOUNT */}
        {product.discount > 0 && (
          <span
            className="
              absolute
              top-2
              left-2
              sm:top-3
              sm:left-3
              md:top-4
              md:left-4
              z-20
              bg-white
              text-black
              text-[10px]
              sm:text-xs
              font-bold
              w-8
              h-8
              sm:w-9
              sm:h-9
              md:w-10
              md:h-10
              rounded-full
              flex
              items-center
              justify-center
            "
          >
            -{product.discount}%
          </span>
        )}

        {/* ACTION BUTTONS */}
        <div
          className="
            absolute
            top-2
            right-2
            sm:top-3
            sm:right-3
            md:top-4
            md:right-4
            flex
            flex-col
            gap-2
            sm:gap-3
            z-30
          "
        >
          {/* Wishlist */}
          <button
            onClick={toggleWishlist}
            className="
              w-8
              h-8
              sm:w-9
              sm:h-9
              md:w-10
              md:h-10
              rounded-full
              bg-white
              shadow-lg
              flex
              items-center
              justify-center
              opacity-100
              md:opacity-0
              md:translate-x-8
              md:group-hover:opacity-100
              md:group-hover:translate-x-0
              transition-all
              duration-300
              relative
              z-40
            "
          >
            <Heart
              size={15}
              className={`
    sm:w-[17px]
    sm:h-[17px]
    md:w-[18px]
    md:h-[18px]
    ${liked
                  ? "fill-red-500 text-red-500"
                  : "text-black"
                }
  `}
            />
          </button>

          {/* View */}
          <Link
            href={`/products/${product.slug}`}
            className="
              w-8
              h-8
              sm:w-9
              sm:h-9
              md:w-10
              md:h-10
              rounded-full
              bg-white
              shadow-lg
              flex
              items-center
              justify-center
              opacity-100
              md:opacity-0
              md:translate-x-8
              md:group-hover:opacity-100
              md:group-hover:translate-x-0
              transition-all
              duration-500
              relative
              z-40
            "
          >
            <Eye
              size={15}
              className="sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px]"
            />
          </Link>
        </div>
      </div>

      {/* DETAILS */}
      <div
        className="
          p-2.5
          sm:p-3
          md:p-4
          lg:p-5
        "
      >
        {/* CATEGORY */}
        <p
          className="
            uppercase
            text-[9px]
            sm:text-[10px]
            md:text-xs
            tracking-wider
            text-gray-500
            truncate
          "
        >
          {product.category}
        </p>

        {/* PRODUCT NAME */}
        <Link href={`/products/${product.slug}`}>
          <h3
            className="
              mt-1
              sm:mt-1.5
              md:mt-2
              text-sm
              sm:text-base
              md:text-lg
              text-gray-800
              font-semibold
              hover:text-[#a8418b]
              transition
              line-clamp-2
              leading-tight
            "
          >
            {product.name}
          </h3>
        </Link>

        {/* STARS */}
        <div
          className="
            flex
            items-center
            gap-0.5
            sm:gap-1
            mt-1.5
            sm:mt-2
            md:mt-2.5
          "
        >
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className="sm:w-[14px] sm:h-[14px] md:w-[15px] md:h-[15px] fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        {/* PRICE */}
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-1.5
            sm:gap-2
            md:gap-3
            mt-2
            sm:mt-2.5
            md:mt-3
          "
        >
          {product.oldPrice && (
            <span
              className="
                text-[10px]
                sm:text-xs
                md:text-sm
                text-gray-400
                line-through
              "
            >
              ₦{product.oldPrice.toLocaleString()}
            </span>
          )}

          <span
            className="
              text-sm
              sm:text-base
              md:text-xl
              font-semibold
              text-[#3b3b3b]
            "
          >
            ₦{product.price.toLocaleString()}
          </span>
        </div>

        {/* BUTTONS */}
        <div
          className="
            mt-3
            sm:mt-4
            md:mt-5
            flex
            gap-1.5
            sm:gap-2
          "
        >
          {/* Add To Cart */}
          <button
            onClick={addProduct}
            className="
              flex-1
              min-w-0
              bg-[#0a0a0a]
              hover:bg-[#a8418b]
              text-white
              py-2
              sm:py-2.5
              md:py-3
              px-2
              sm:px-3
              rounded-md
              font-semibold
              text-[11px]
              sm:text-xs
              md:text-sm
              flex
              items-center
              justify-center
              gap-1
              sm:gap-1.5
              md:gap-2
              transition
              whitespace-nowrap
            "
          >
            <ShoppingCart
              size={14}
              className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]"
            />

            <span>Add to Cart</span>
          </button>

          {/* Order */}
          <Link
            href={`/products/${product.slug}`}
            className="
              px-2.5
              sm:px-3
              md:px-5
              bg-gray-100
              hover:bg-[#a8418b]
              hover:text-white
              rounded-md
              font-semibold
              text-[11px]
              sm:text-xs
              md:text-sm
              flex
              items-center
              justify-center
              transition
              whitespace-nowrap
            "
          >
            Order
          </Link>
        </div>
      </div>
    </div>
  );
}

