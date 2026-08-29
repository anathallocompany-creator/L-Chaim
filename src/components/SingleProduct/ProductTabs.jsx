"use client";

import { useState } from "react";

export default function ProductTabs({ product }) {

  const [tab, setTab] = useState("description");

  return (
    <div className="mt-24">

      <div className="flex gap-10 border-b">

        <button
          onClick={() => setTab("description")}
          className={tab === "description" ? "font-bold border-b-2 border-[#3d3c3d] pb-4" : "pb-4"}
        >
          Description
        </button>

        <button
          onClick={() => setTab("info")}
          className={tab === "info" ? "font-bold border-b-2 border-[#414141] pb-4" : "pb-4"}
        >
          Additional Information
        </button>

      </div>

      <div className="mt-8">

        {tab === "description" && (
          <p className="leading-8 text-gray-600">
            {product.description}
          </p>
        )}

        {tab === "info" && (

          <div className="space-y-4">

            <p>
              <strong>Category:</strong> {product.category}
            </p>

            <p>
              <strong>Occasion:</strong> {product.occasion}
            </p>

            <p>
              <strong>Flavour:</strong> {product.flavour}
            </p>

            <p>
              <strong>Stock:</strong> {product.stock}
            </p>

          </div>

        )}

      </div>

    </div>
  );
}