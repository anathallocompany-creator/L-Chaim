"use client";

import Image from "next/image";
import { Star, X } from "lucide-react";

export default function ReviewDetailsModal({
  open,
  review,
  onClose,
}) {
  if (!open || !review) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/50 flex justify-center items-center p-6">

      <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">

        {/* Header */}

        <div className="sticky top-0 bg-white border-b px-8 py-6 flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold">
              Review Details
            </h2>

            <p className="text-gray-500 mt-1">
              {review.productName}
            </p>

          </div>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <div className="p-8 space-y-8">

          {/* Customer */}

          <div>

            <h3 className="font-bold text-lg mb-4">
              Customer Information
            </h3>

            <div className="grid md:grid-cols-2 gap-5">

              <div>

                <p className="text-gray-500">
                  Name
                </p>

                <p className="font-semibold">
                  {review.customerName}
                </p>

              </div>

              <div>

                <p className="text-gray-500">
                  Email
                </p>

                <p className="font-semibold">
                  {review.customerEmail}
                </p>

              </div>

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="font-bold text-lg mb-4">
              Product
            </h3>

            <div className="flex gap-5 items-center">

              <div className="relative w-28 h-28 rounded-xl overflow-hidden border">

                <Image
                  src={review.productImage}
                  alt={review.productName}
                  fill
                  className="object-cover"
                />

              </div>

              <div>

                <h4 className="text-xl font-bold">
                  {review.productName}
                </h4>

              </div>

            </div>

          </div>

          {/* Rating */}

          <div>

            <h3 className="font-bold text-lg mb-4">
              Rating
            </h3>

            <div className="flex gap-2">

              {[1,2,3,4,5].map((star)=>(
                <Star
                  key={star}
                  fill={review.rating >= star ? "#facc15" : "none"}
                  className={
                    review.rating >= star
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}

            </div>

          </div>

          {/* Review */}

          <div>

            <h3 className="font-bold text-lg mb-4">
              Review
            </h3>

            <div className="border rounded-xl bg-gray-50 p-5 leading-8">

              {review.review}

            </div>

          </div>

          {/* Images */}

          {review.images?.length > 0 && (

            <div>

              <h3 className="font-bold text-lg mb-4">
                Uploaded Photos
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                {review.images.map((image,index)=>(

                  <div
                    key={index}
                    className="relative h-40 rounded-xl overflow-hidden border"
                  >

                    <Image
                      src={image.url}
                      alt=""
                      fill
                      className="object-cover"
                    />

                  </div>

                ))}

              </div>

            </div>

          )}

          {/* Status */}

          <div>

            <h3 className="font-bold text-lg mb-4">
              Review Information
            </h3>

            <div className="grid md:grid-cols-2 gap-5">

              <div>

                <p className="text-gray-500">
                  Status
                </p>

                <p className="font-semibold">
                  {review.status}
                </p>

              </div>

              <div>

                <p className="text-gray-500">
                  Featured
                </p>

                <p className="font-semibold">
                  {review.featured ? "Yes" : "No"}
                </p>

              </div>

              <div>

                <p className="text-gray-500">
                  Verified Purchase
                </p>

                <p className="font-semibold">
                  {review.verifiedPurchase ? "Yes" : "No"}
                </p>

              </div>

              <div>

                <p className="text-gray-500">
                  Created
                </p>

                <p className="font-semibold">
                  {new Date(review.createdAt).toLocaleString()}
                </p>

              </div>

            </div>

          </div>

          {/* Admin Reply */}

          {review.adminReply && (

            <div>

              <h3 className="font-bold text-lg mb-3">
                Admin Reply
              </h3>

              <div className="border rounded-xl bg-pink-50 p-5">

                {review.adminReply}

              </div>

            </div>

          )}

        </div>

        {/* Footer */}

        <div className="border-t px-8 py-5 flex justify-end">

          <button
            onClick={onClose}
            className="bg-[#922b6a] text-white px-6 py-3 rounded-xl"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}