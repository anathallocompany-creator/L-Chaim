"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  avatar: {
    url: "",
    public_id: "",
  },
  address: {
    street: "",
    city: "",
    state: "",
    country: "Nigeria",
    postalCode: "",
  },
  status: "Active",
  notes: "",
  favoriteCategory: "",
  favoriteFlavour: "",
  marketingConsent: true,
};

export default function CustomerModal({
  open,
  customer,
  onClose,
  onSave,
}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (customer) {
      setForm({
        ...initialForm,
        ...customer,
      });
    } else {
      setForm(initialForm);
    }
  }, [customer, open]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");

      setForm((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));

      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[999] flex justify-end">
      <div className="bg-white w-full max-w-3xl h-screen overflow-y-auto">

        <div className="sticky top-0 bg-white border-b px-8 py-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            {customer ? "Edit Customer" : "Add Customer"}
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="p-8 space-y-8">

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label>First Name</label>

              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 mt-2"
              />
            </div>

            <div>
              <label>Last Name</label>

              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 mt-2"
              />
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label>Email</label>

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 mt-2"
              />
            </div>

            <div>
              <label>Phone</label>

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 mt-2"
              />
            </div>

          </div>

          <div>

            <h3 className="font-bold text-lg mb-4">
              Address
            </h3>

            <div className="space-y-4">

              <input
                name="address.street"
                value={form.address.street}
                onChange={handleChange}
                placeholder="Street"
                className="w-full border rounded-xl p-3"
              />

              <div className="grid md:grid-cols-3 gap-4">

                <input
                  name="address.city"
                  value={form.address.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="border rounded-xl p-3"
                />

                <input
                  name="address.state"
                  value={form.address.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="border rounded-xl p-3"
                />

                <input
                  name="address.postalCode"
                  value={form.address.postalCode}
                  onChange={handleChange}
                  placeholder="Postal Code"
                  className="border rounded-xl p-3"
                />

              </div>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <div>

              <label>Status</label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 mt-2"
              >
                <option>Active</option>
                <option>Inactive</option>
                <option>Blocked</option>
              </select>

            </div>

            <div>

              <label>Favorite Category</label>

              <input
                name="favoriteCategory"
                value={form.favoriteCategory}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 mt-2"
              />

            </div>

          </div>

          <div>

            <label>Favorite Flavour</label>

            <input
              name="favoriteFlavour"
              value={form.favoriteFlavour}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 mt-2"
            />

          </div>

          <div>

            <label>Notes</label>

            <textarea
              rows={5}
              name="notes"
              value={form.notes}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 mt-2"
            />

          </div>

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              name="marketingConsent"
              checked={form.marketingConsent}
              onChange={handleChange}
            />

            Marketing Consent

          </label>

        </div>

        <div className="sticky bottom-0 border-t bg-white px-8 py-6 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="border px-6 py-3 rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-[#922b6a] text-white px-6 py-3 rounded-xl"
          >
            Save Customer
          </button>

        </div>

      </div>
    </div>
  );
}