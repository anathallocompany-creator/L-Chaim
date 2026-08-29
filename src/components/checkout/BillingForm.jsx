"use client";

export default function BillingForm({
    customer,
    setCustomer,
    shippingAddress,
    setShippingAddress,
    notes,
    setNotes,
}) {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-10">
                Billing Details
            </h2>

            {/* Name */}

            <div className="grid md:grid-cols-2 gap-6">

                <input
                    placeholder="First Name"
                    value={customer.name}
                    onChange={(e) =>
                        setCustomer({
                            ...customer,
                            name: e.target.value,
                        })
                    }
                    className="border border-gray-300 p-4 rounded-md"
                />

                <input
                    placeholder="Email"
                    type="email"
                    value={customer.email}
                    onChange={(e) =>
                        setCustomer({
                            ...customer,
                            email: e.target.value,
                        })
                    }
                    className="border border-gray-300 p-4 rounded-md"
                />

            </div>

            {/* Company */}

            <input
                placeholder="Company (Optional)"
                className="border border-gray-300 p-4 rounded-md mt-6 w-full"
            />

            {/* Address */}

            <input
                placeholder="Street Address"
                value={shippingAddress.address}
                onChange={(e) =>
                    setShippingAddress({
                        ...shippingAddress,
                        address: e.target.value,
                    })
                }
                className="border border-gray-300 p-4 rounded-md mt-6 w-full"
            />

            {/* City & State */}

            <div className="grid md:grid-cols-2 gap-6 mt-6">

                <input
                    placeholder="City"
                    value={shippingAddress.city}
                    onChange={(e) =>
                        setShippingAddress({
                            ...shippingAddress,
                            city: e.target.value,
                        })
                    }
                    className="border border-gray-300 p-4 rounded-md"
                />

                <input
                    placeholder="State"
                    value={shippingAddress.state}
                    onChange={(e) =>
                        setShippingAddress({
                            ...shippingAddress,
                            state: e.target.value,
                        })
                    }
                    className="border border-gray-300 p-4 rounded-md"
                />

            </div>

            {/* Country */}

            <input
                placeholder="Country"
                value={shippingAddress.country}
                onChange={(e) =>
                    setShippingAddress({
                        ...shippingAddress,
                        country: e.target.value,
                    })
                }
                className="border border-gray-300 p-4 rounded-md mt-6 w-full"
            />

            {/* Phone */}

            <input
                placeholder="Phone"
                value={customer.phone}
                onChange={(e) =>
                    setCustomer({
                        ...customer,
                        phone: e.target.value,
                    })
                }
                className="border border-gray-300 p-4 rounded-md mt-6 w-full"
            />

            {/* Notes */}

            <textarea
                rows={5}
                placeholder="Order Notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="border border-gray-300 p-4 rounded-md mt-6 w-full"
            />
        </div>
    );
}