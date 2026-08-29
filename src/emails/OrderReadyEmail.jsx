export default function OrderReadyEmail({
    customerName,
    orderNumber,
    status,
    message,
    orderLink,
}) {
    const statusColor = {
        Ready: "#7c3aed",
        "Out for Delivery": "#ea580c",
        Delivered: "#16a34a",
        Cancelled: "#dc2626",
    };

    const statusEmoji = {
        Ready: "🎂",
        "Out for Delivery": "🚚",
        Delivered: "✅",
        Cancelled: "❌",
    };

    return (
        <div
            style={{
                fontFamily: "Arial, sans-serif",
                maxWidth: "600px",
                margin: "0 auto",
                padding: "30px",
                background: "#ffffff",
                color: "#333",
            }}
        >
            {/* Logo / Heading */}

            <h1
                style={{
                    color: "#922b6a",
                    marginBottom: "10px",
                }}
            >
                {statusEmoji[status]} L'Chaim Cakes
            </h1>

            <h2
                style={{
                    color: statusColor[status] || "#922b6a",
                    marginTop: 0,
                }}
            >
                Order Status Updated
            </h2>

            <p>Hello <strong>{customerName}</strong>,</p>

            <p>{message}</p>

            {/* Order Details */}

            <div
                style={{
                    background: "#fff5fb",
                    border: "1px solid #f3d7e7",
                    borderRadius: "10px",
                    padding: "20px",
                    margin: "30px 0",
                }}
            >
                <p style={{ margin: "8px 0" }}>
                    <strong>Order Number:</strong> {orderNumber}
                </p>

                <p style={{ margin: "8px 0" }}>
                    <strong>Current Status:</strong>{" "}
                    <span
                        style={{
                            color: statusColor[status],
                            fontWeight: "bold",
                        }}
                    >
                        {status}
                    </span>
                </p>
            </div>

            {/* Button */}

            <a
                href={orderLink}
                style={{
                    display: "inline-block",
                    background: "#922b6a",
                    color: "#ffffff",
                    padding: "14px 28px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "bold",
                }}
            >
                View My Order
            </a>

            <p
                style={{
                    marginTop: "40px",
                    lineHeight: "1.7",
                }}
            >
                Thank you for choosing{" "}
                <strong>L'Chaim Cakes</strong>.
                <br />
                We appreciate your trust and look forward to serving you again.
            </p>

            <hr
                style={{
                    margin: "35px 0",
                    border: "none",
                    borderTop: "1px solid #eee",
                }}
            />

            <p
                style={{
                    color: "#777",
                    fontSize: "13px",
                }}
            >
                © {new Date().getFullYear()} L'Chaim Cakes. All rights reserved.
            </p>
        </div>
    );
}