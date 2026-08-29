
"use client";

import { useState } from "react";
import { Heart, Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import QuantitySelector from "./QuantitySelector";
import ProductActions from "./ProductActions";

export default function ProductInfo({ product }) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full min-w-0">

      {/* CATEGORY */}
      <p
        className="
          uppercase
          tracking-widest
          text-gray-500
          text-xs
          sm:text-sm
        "
      >
        {product.category}
      </p>

      {/* PRODUCT NAME */}
      <h1
        className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          font-bold
          mt-2
          sm:mt-3
          leading-tight
          break-words
        "
      >
        {product.name}
      </h1>

      {/* REVIEWS */}
      <div
        className="
          flex
          flex-wrap
          items-center
          gap-1.5
          sm:gap-2
          mt-3
          sm:mt-5
        "
      >
        <div className="flex items-center gap-0.5 sm:gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="
                sm:w-[18px]
                sm:h-[18px]
                fill-yellow-400
                text-yellow-400
              "
            />
          ))}
        </div>

        <span className="text-xs sm:text-sm text-gray-500">
          ({product.reviews} Reviews)
        </span>
      </div>

      {/* PRICE */}
      <div
        className="
          mt-4
          sm:mt-6
          flex
          flex-wrap
          items-center
          gap-2
          sm:gap-4
        "
      >
        <span
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-bold
            text-[#464646]
          "
        >
          ₦{product.price.toLocaleString()}
        </span>

        {product.oldPrice && (
          <span
            className="
              text-sm
              sm:text-base
              text-gray-400
              line-through
            "
          >
            ₦{product.oldPrice.toLocaleString()}
          </span>
        )}
      </div>

      {/* DESCRIPTION */}
      <p
        className="
          mt-5
          sm:mt-6
          md:mt-8
          text-sm
          sm:text-base
          text-gray-600
          leading-6
          sm:leading-7
          md:leading-8
        "
      >
        {product.description}
      </p>

      {/* PRODUCT DETAILS */}
      <div
        className="
          mt-6
          sm:mt-8
          md:mt-10
          space-y-3
          sm:space-y-4
          text-sm
          sm:text-base
        "
      >
        <p>
          <strong>Occasion:</strong>{" "}
          <span className="text-gray-600">
            {product.occasion}
          </span>
        </p>

        <p>
          <strong>Flavour:</strong>{" "}
          <span className="text-gray-600">
            {product.flavour}
          </span>
        </p>

        <p>
          <strong>Availability:</strong>{" "}
          <span
            className={
              product.inStock
                ? "text-green-600 font-medium"
                : "text-red-500 font-medium"
            }
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </p>
      </div>

      {/* ACTIONS */}
      <div
        className="
          mt-7
          sm:mt-8
          md:mt-10
          flex
          flex-col
          sm:flex-row
          gap-3
          sm:gap-4
          md:gap-5
        "
      >
        {/* QUANTITY */}
        <div className="shrink-0">
          <QuantitySelector
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>

        {/* ADD TO CART */}
        <button
          onClick={() =>
            dispatch(
              addToCart({
                ...product,
                quantity,
              })
            )
          }
          disabled={!product.inStock}
          className="
            flex-1
            min-h-[48px]
            bg-[#424242]
            text-white
            px-5
            rounded-lg
            hover:bg-[#a8418b]
            disabled:bg-gray-300
            disabled:cursor-not-allowed
            transition
            font-semibold
            text-sm
            sm:text-base
          "
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>

        {/* WISHLIST */}
        <button
          type="button"
          className="
            w-full
            sm:w-12
            md:w-14
            h-12
            border
            border-gray-300
            rounded-lg
            flex
            justify-center
            items-center
            hover:border-[#a8418b]
            hover:text-[#a8418b]
            transition
            shrink-0
          "
          aria-label="Add to wishlist"
        >
          <Heart
            size={20}
            className="sm:w-[22px] sm:h-[22px]"
          />
        </button>
      </div>

      {/* PRODUCT ACTIONS */}
      <div className="mt-6 sm:mt-8">
        <ProductActions />
      </div>

    </div>
  );
}

