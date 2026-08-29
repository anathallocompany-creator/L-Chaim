"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Star,
  Camera,
  Send,
  Pencil,
  Trash2,
} from "lucide-react";

export default function MyReviewsPage() {
  const [rating, setRating] = useState(0);

  const [review, setReview] = useState("");

  const purchasedProducts = [
    {
      id: 1,
      name: "Luxury Chocolate Cake",
      image: "/cake1.webp",
      purchased: "12 June 2026",
      reviewed: false,
    },
    {
      id: 2,
      name: "Red Velvet Cupcakes",
      image: "/cake2.jpg",
      purchased: "4 June 2026",
      reviewed: true,
      rating: 5,
      review:
        "Absolutely delicious. Soft, fresh and beautifully decorated.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Header */}

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          My Reviews
        </h1>

        <p className="text-gray-500 mt-2">
          Share your experience to help other customers.
        </p>

      </div>

      <div className="space-y-8">

        {purchasedProducts.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-3xl border border-gray-300 shadow-sm overflow-hidden"
          >

            <div className="p-8">

              <div className="flex flex-col lg:flex-row gap-8">

                {/* Product */}

                <div className="flex gap-5 lg:w-1/3">

                  <div className="relative w-32 h-32 rounded-2xl overflow-hidden">

                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />

                  </div>

                  <div>

                    <h2 className="text-xl font-bold">
                      {product.name}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Purchased:
                    </p>

                    <p>{product.purchased}</p>

                  </div>

                </div>

                {/* Review */}

                <div className="flex-1">

                  {!product.reviewed ? (

                    <>
                      <h3 className="font-semibold text-lg mb-5">
                        Leave a Review
                      </h3>

                      {/* Rating */}

                      <div className="flex gap-2 mb-5">

                        {[1, 2, 3, 4, 5].map((star) => (

                          <button
                            key={star}
                            onClick={() => setRating(star)}
                          >

                            <Star
                              size={30}
                              fill={
                                rating >= star
                                  ? "#facc15"
                                  : "none"
                              }
                              className={
                                rating >= star
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }
                            />

                          </button>

                        ))}

                      </div>

                      {/* Text */}

                      <textarea
                        rows={5}
                        placeholder="Tell us about the cake..."
                        value={review}
                        onChange={(e) =>
                          setReview(e.target.value)
                        }
                        className="w-full rounded-xl border border-gray-300 p-4"
                      />

                      {/* Upload */}

                      <label className="mt-5 flex items-center gap-3 border border-gray-300 rounded-xl p-4 cursor-pointer hover:bg-gray-50">

                        <Camera size={20} />

                        Upload Photos

                        <input
                          type="file"
                          hidden
                          multiple
                        />

                      </label>

                      <button
                        className="
                          mt-6
                          bg-[#bb2e83]
                          hover:bg-[#982369]
                          text-white
                          px-6
                          py-3
                          rounded-xl
                          flex
                          items-center
                          gap-2
                        "
                      >

                        <Send size={18} />

                        Submit Review

                      </button>

                    </>

                  ) : (

                    <>
                      <div className="flex items-center gap-2">

                        {[...Array(product.rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              fill="#facc15"
                              className="text-yellow-400"
                            />
                          )
                        )}

                      </div>

                      <p className="mt-5 text-gray-700 leading-8">
                        {product.review}
                      </p>

                      <div className="flex gap-3 mt-6">

                        <button
                          className="
                            flex
                            items-center
                            gap-2
                            px-5
                            py-3
                            rounded-xl
                            border
                            border-gray-300
                          "
                        >
                          <Pencil size={18} />
                          Edit Review
                        </button>

                        <button
                          className="
                            flex
                            items-center
                            gap-2
                            px-5
                            py-3
                            rounded-xl
                            bg-red-600
                            text-white
                          "
                        >
                          <Trash2 size={18} />
                          Delete
                        </button>

                      </div>

                    </>

                  )}

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}