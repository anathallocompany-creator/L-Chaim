"use client";

export default function QuantitySelector({
  quantity,
  setQuantity,
}) {
  return (
    <div className="flex items-center border border-gray-300 h-12 w-[110px]">
      <button
        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
        className="w-10 h-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
      >
        −
      </button>

      <div className="flex-1 h-full border-x border-gray-300 flex items-center justify-center text-sm font-medium">
        {quantity}
      </div>

      <button
        onClick={() => setQuantity(quantity + 1)}
        className="w-10 h-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
      >
        +
      </button>
    </div>
  );
}