"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function PaymentPage() {
    const router = useRouter();
    const { id } = useParams();

    const [transactionReference, setTransactionReference] = useState("");
    const [receipt, setReceipt] = useState(null);
    const [loading, setLoading] = useState(false);

    const submitPayment = async (e) => {
        e.preventDefault();

        if (!transactionReference.trim()) {
            alert("Please enter your transaction reference.");
            return;
        }

        if (!receipt) {
            alert("Please upload your payment receipt.");
            return;
        }

        try {
            setLoading(true);

            // Upload receipt to Cloudinary
            const formData = new FormData();

            formData.append("file", receipt);
            formData.append("folder", "lchaim/receipts");

            const uploadRes = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const uploadData = await uploadRes.json();

            if (!uploadRes.ok) {
                throw new Error(
                    uploadData.message || "Receipt upload failed."
                );
            }

            // Save receipt to order
            const res = await fetch(`/api/order/${id}/payment`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    transactionReference,
                    paymentProof: {
                        url: uploadData.url,
                        public_id: uploadData.public_id,
                    },
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(
                    data.message || "Unable to submit payment."
                );
            }

            alert("Payment submitted successfully.");

            router.push(`/my-orders/${id}`);

        } catch (error) {
            console.error(error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto py-16 px-6">

            <div className="bg-white rounded-xl border p-8">

                <h1 className="text-3xl font-bold mb-2">
                    Confirm Bank Transfer
                </h1>

                <p className="text-gray-600 mb-8">
                    Upload your payment receipt and enter your transaction
                    reference so we can verify your payment.
                </p>

                <form
                    onSubmit={submitPayment}
                    className="space-y-6"
                >

                    <div>
                        <label className="block mb-2 font-medium">
                            Transaction Reference
                        </label>

                        <input
                            type="text"
                            value={transactionReference}
                            onChange={(e) =>
                                setTransactionReference(e.target.value)
                            }
                            className="w-full border rounded-lg p-3"
                            placeholder="e.g. TRX123456789"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Upload Receipt
                        </label>

                        <input
                            type="file"
                            accept="image/*,.pdf"
                            onChange={(e) =>
                                setReceipt(e.target.files[0])
                            }
                            className="w-full border rounded-lg p-3"
                        />

                        <p className="text-sm text-gray-500 mt-2">
                            Accepted formats: JPG, PNG, PDF
                        </p>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#af3a7a] hover:bg-[#922d66] text-white py-4 rounded-lg font-semibold disabled:opacity-60"
                    >
                        {loading
                            ? "Submitting..."
                            : "Submit Payment"}
                    </button>

                </form>

            </div>

        </div>
    );
}