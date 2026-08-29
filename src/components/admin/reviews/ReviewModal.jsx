"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const initialForm = {
  rating: 5,
  comment: "",
  approved: true,
};

export default function ReviewModal({
  open,
  review,
  onClose,
  onSave,
}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (review) {
      setForm({
        rating: review.rating,
        comment: review.comment,
        approved: review.approved,
      });
    } else {
      setForm(initialForm);
    }
  }, [review]);

  if (!open) return null;

  function handleChange(e) {
    const { name, value, type, checked } =
      e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  }

  function submit() {
    onSave(form);
  }

  return (
    <div className="fixed inset-0 z-[999] bg-black/50 flex justify-center items-center p-6">

      <div className="bg-white rounded-2xl w-full max-w-xl">

        <div className="border-b px-8 py-6 flex justify-between items-center">

          <h2 className="text-2xl font-bold">

            {review
              ? "Edit Review"
              : "Add Review"}

          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <div className="p-8 space-y-6">

          {review && (

            <>
              <div>

                <label className="font-semibold">
                  Customer
                </label>

                <input
                  disabled
                  value={
                    review.customer?.name || ""
                  }
                  className="w-full mt-2 border rounded-xl p-3 bg-gray-100"
                />

              </div>

              <div>

                <label className="font-semibold">
                  Product
                </label>

                <input
                  disabled
                  value={
                    review.product?.name || ""
                  }
                  className="w-full mt-2 border rounded-xl p-3 bg-gray-100"
                />

              </div>

            </>

          )}

          <div>

            <label className="font-semibold">
              Rating
            </label>

            <select
              name="rating"
              value={form.rating}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl p-3"
            >
              {[5, 4, 3, 2, 1].map((r) => (

                <option
                  key={r}
                  value={r}
                >
                  {r} Star{r > 1 && "s"}
                </option>

              ))}

            </select>

          </div>

          <div>

            <label className="font-semibold">
              Review
            </label>

            <textarea
              rows={6}
              name="comment"
              value={form.comment}
              onChange={handleChange}
              className="w-full mt-2 border rounded-xl p-3"
            />

          </div>

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              name="approved"
              checked={form.approved}
              onChange={handleChange}
            />

            Approved

          </label>

        </div>

        <div className="border-t px-8 py-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl border"
          >
            Cancel
          </button>

          <button
            onClick={submit}
            className="px-6 py-3 rounded-xl bg-[#922b6a] text-white"
          >
            Save Review
          </button>

        </div>

      </div>

    </div>
  );
}