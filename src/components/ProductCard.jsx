
"use client";

import Link from "next/link";
import { Heart, ShoppingCart, Eye, Star, Check, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { user } = useUser();

  const [liked, setLiked] = useState(false);

  // =========================================================
  // CART NOTIFICATION
  // =========================================================

  const [showCartModal, setShowCartModal] = useState(false);
  const [addingToCart, setAddingToCart] = useState(false);

  // =========================================================
  // ADD PRODUCT TO CART
  // =========================================================

  const addProduct = async () => {
    if (!user) {
      alert("Please sign in.");
      return;
    }

    // Prevent multiple clicks
    if (addingToCart) return;

    try {
      setAddingToCart(true);

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
        alert(item.message || "Failed to add product to cart.");
        return;
      }

      // Add to Redux
      dispatch(addToCart(item));

      // Show success modal
      setShowCartModal(true);

      // Automatically hide after 2.5 seconds
      setTimeout(() => {
        setShowCartModal(false);
      }, 2500);
    } catch (error) {
      console.error("Add to cart error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setAddingToCart(false);
    }
  };

  // =========================================================
  // WISHLIST
  // =========================================================

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
    <>
      {/* =====================================================
          PRODUCT CARD
      ====================================================== */}

      <div
        className="
          group
          relative
          w-full
          overflow-hidden
          rounded-lg
          bg-white
          shadow
          transition-all
          duration-300
          hover:shadow-xl
          sm:rounded-xl
        "
      >
        {/* ===================================================
            IMAGE
        ==================================================== */}

        <div className="relative overflow-hidden">
          <img
            src={product.image?.url || product.image}
            alt={product.name}
            className="
              aspect-[1/1.15]
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
              sm:aspect-[4/5]
            "
          />

          {/* =================================================
              PRODUCT LINK OVERLAY
          ================================================== */}

          <Link
            href={`/products/${product.slug}`}
            className="absolute inset-0 z-10"
            aria-label={`View ${product.name}`}
          />

          {/* =================================================
              HOVER OVERLAY
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-black/0
              transition
              duration-500
              group-hover:bg-black/20
            "
          />

          {/* =================================================
              DISCOUNT
          ================================================== */}

          {product.discount > 0 && (
            <span
              className="
                absolute
                left-2
                top-2
                z-20
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-white
                text-[10px]
                font-bold
                text-black
                sm:left-3
                sm:top-3
                sm:h-9
                sm:w-9
                sm:text-xs
                md:left-4
                md:top-4
                md:h-10
                md:w-10
              "
            >
              -{product.discount}%
            </span>
          )}

          {/* =================================================
              ACTION BUTTONS
          ================================================== */}

          <div
            className="
              absolute
              right-2
              top-2
              z-30
              flex
              flex-col
              gap-2
              sm:right-3
              sm:top-3
              sm:gap-3
              md:right-4
              md:top-4
            "
          >
            {/* =================================================
                WISHLIST
            ================================================== */}

            <button
              type="button"
              onClick={toggleWishlist}
              className="
                relative
                z-40
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-lg
                opacity-100
                transition-all
                duration-300
                active:scale-90
                md:translate-x-8
                md:opacity-0
                md:group-hover:translate-x-0
                md:group-hover:opacity-100
                sm:h-9
                sm:w-9
                md:h-10
                md:w-10
              "
            >
              <Heart
                size={15}
                className={`
                  sm:h-[17px]
                  sm:w-[17px]
                  md:h-[18px]
                  md:w-[18px]
                  ${
                    liked
                      ? "fill-red-500 text-red-500"
                      : "text-black"
                  }
                `}
              />
            </button>

            {/* =================================================
                VIEW
            ================================================== */}

            <Link
              href={`/products/${product.slug}`}
              className="
                relative
                z-40
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-lg
                opacity-100
                transition-all
                duration-500
                md:translate-x-8
                md:opacity-0
                md:group-hover:translate-x-0
                md:group-hover:opacity-100
                sm:h-9
                sm:w-9
                md:h-10
                md:w-10
              "
            >
              <Eye
                size={15}
                className="
                  sm:h-[17px]
                  sm:w-[17px]
                  md:h-[18px]
                  md:w-[18px]
                "
              />
            </Link>
          </div>
        </div>

        {/* =====================================================
            DETAILS
        ====================================================== */}

        <div
          className="
            p-2.5
            sm:p-3
            md:p-4
            lg:p-5
          "
        >
          {/* =================================================
              CATEGORY
          ================================================== */}

          <p
            className="
              truncate
              text-[9px]
              uppercase
              tracking-wider
              text-gray-500
              sm:text-[10px]
              md:text-xs
            "
          >
            {product.category}
          </p>

          {/* =================================================
              PRODUCT NAME
          ================================================== */}

          <Link href={`/products/${product.slug}`}>
            <h3
              className="
                mt-1
                line-clamp-2
                text-sm
                font-semibold
                leading-tight
                text-gray-800
                transition
                hover:text-[#a8418b]
                sm:mt-1.5
                sm:text-base
                md:mt-2
                md:text-lg
              "
            >
              {product.name}
            </h3>
          </Link>

          {/* =================================================
              STARS
          ================================================== */}

          <div
            className="
              mt-1.5
              flex
              items-center
              gap-0.5
              sm:mt-2
              sm:gap-1
              md:mt-2.5
            "
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className="
                  fill-yellow-400
                  text-yellow-400
                  sm:h-[14px]
                  sm:w-[14px]
                  md:h-[15px]
                  md:w-[15px]
                "
              />
            ))}
          </div>

          {/* =================================================
              PRICE
          ================================================== */}

          <div
            className="
              mt-2
              flex
              flex-wrap
              items-center
              gap-1.5
              sm:mt-2.5
              sm:gap-2
              md:mt-3
              md:gap-3
            "
          >
            {product.oldPrice && (
              <span
                className="
                  text-[10px]
                  text-gray-400
                  line-through
                  sm:text-xs
                  md:text-sm
                "
              >
                ₦{product.oldPrice.toLocaleString()}
              </span>
            )}

            <span
              className="
                text-sm
                font-semibold
                text-[#3b3b3b]
                sm:text-base
                md:text-xl
              "
            >
              ₦{product.price.toLocaleString()}
            </span>
          </div>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <div
            className="
              mt-3
              flex
              gap-1.5
              sm:mt-4
              sm:gap-2
              md:mt-5
            "
          >
            {/* =================================================
                ADD TO CART
            ================================================== */}

            <button
              type="button"
              onClick={addProduct}
              disabled={addingToCart}
              className="
                relative
                z-50
                flex
                min-w-0
                flex-1
                items-center
                justify-center
                gap-1
                rounded-md
                bg-[#0a0a0a]
                px-2
                py-2
                text-[11px]
                font-semibold
                whitespace-nowrap
                text-white
                transition
                hover:bg-[#a8418b]
                active:scale-[0.98]
                disabled:cursor-not-allowed
                disabled:opacity-60
                sm:gap-1.5
                sm:px-3
                sm:py-2.5
                sm:text-xs
                md:gap-2
                md:py-3
                md:text-sm
              "
            >
              <ShoppingCart
                size={14}
                className="
                  sm:h-4
                  sm:w-4
                  md:h-[18px]
                  md:w-[18px]
                "
              />

              <span>
                {addingToCart ? "Adding..." : "Add to Cart"}
              </span>
            </button>

            {/* =================================================
                ORDER
            ================================================== */}

            <Link
              href={`/products/${product.slug}`}
              className="
                flex
                items-center
                justify-center
                rounded-md
                bg-gray-100
                px-2.5
                text-[11px]
                font-semibold
                whitespace-nowrap
                transition
                hover:bg-[#a8418b]
                hover:text-white
                sm:px-3
                sm:text-xs
                md:px-5
                md:text-sm
              "
            >
              Order
            </Link>
          </div>
        </div>
      </div>

      {/* =====================================================
          PRODUCT ADDED TO CART MODAL
      ====================================================== */}

      {showCartModal && (
        <div
          className="
            fixed
            bottom-5
            right-4
            z-[9999]
            w-[calc(100%-2rem)]
            max-w-sm
            animate-in
            slide-in-from-right-5
            fade-in
            duration-300
            sm:bottom-6
            sm:right-6
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-3
              shadow-2xl
              sm:p-4
            "
          >
            {/* =================================================
                PRODUCT IMAGE
            ================================================== */}

            <div
              className="
                h-14
                w-14
                shrink-0
                overflow-hidden
                rounded-xl
                bg-gray-100
                sm:h-16
                sm:w-16
              "
            >
              <img
                src={product.image?.url || product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* =================================================
                MESSAGE
            ================================================== */}

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <div
                  className="
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-green-100
                  "
                >
                  <Check
                    size={13}
                    className="text-green-600"
                  />
                </div>

                <p className="text-xs font-medium text-green-600">
                  Added to cart
                </p>
              </div>

              <p
                className="
                  mt-1
                  truncate
                  text-sm
                  font-semibold
                  text-gray-900
                "
              >
                {product.name}
              </p>

              <p className="mt-0.5 text-xs text-gray-500">
                ₦{product.price.toLocaleString()}
              </p>
            </div>

            {/* =================================================
                CLOSE
            ================================================== */}

            <button
              type="button"
              onClick={() => setShowCartModal(false)}
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                text-gray-400
                transition
                hover:bg-gray-100
                hover:text-gray-700
              "
              aria-label="Close notification"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

