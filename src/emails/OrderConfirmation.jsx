import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Img,
  Hr,
  Button,
} from "@react-email/components";

export default function OrderConfirmation({
  customerName,
  orderNumber,
  items,
  total,
  orderLink,
}) {
  return (
    <Html>
      <Head />

      <Body
        style={{
          backgroundColor: "#f5f5f5",
          fontFamily: "Arial, sans-serif",
          padding: "30px 0",
        }}
      >
        <Container
          style={{
            maxWidth: "650px",
            backgroundColor: "#ffffff",
            margin: "0 auto",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {/* Header */}

          <Section
            style={{
              backgroundColor: "#922b6a",
              padding: "30px",
              textAlign: "center",
            }}
          >
            <Heading
              style={{
                color: "#ffffff",
                margin: 0,
                fontSize: "32px",
              }}
            >
              L'Chaim Cakes
            </Heading>

            <Text
              style={{
                color: "#ffffff",
                marginTop: "10px",
              }}
            >
              Thank you for your order!
            </Text>
          </Section>

          {/* Greeting */}

          <Section style={{ padding: "30px" }}>
            <Heading
              style={{
                fontSize: "26px",
                color: "#333",
              }}
            >
              Hello {customerName},
            </Heading>

            <Text
              style={{
                fontSize: "16px",
                color: "#555",
                lineHeight: "26px",
              }}
            >
              We've received your order and it's now being processed.
            </Text>

            <Text
              style={{
                fontSize: "16px",
                color: "#555",
              }}
            >
              <strong>Order Number:</strong> {orderNumber}
            </Text>

            <Hr />

            <Heading
              style={{
                fontSize: "22px",
              }}
            >
              Order Summary
            </Heading>

            {items.map((item, index) => (
              <Section
                key={index}
                style={{
                  display: "flex",
                  marginBottom: "20px",
                }}
              >
                {item.image?.url && (
                  <Img
                    src={item.image.url}
                    width="70"
                    height="70"
                    style={{
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                )}

                <div
                  style={{
                    marginLeft: "15px",
                  }}
                >
                  <Text
                    style={{
                      margin: 0,
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </Text>

                  <Text style={{ margin: 0 }}>
                    Quantity: {item.quantity}
                  </Text>

                  <Text style={{ margin: 0 }}>
                    ₦
                    {(
                      item.price * item.quantity
                    ).toLocaleString()}
                  </Text>
                </div>
              </Section>
            ))}

            <Hr />

            <Heading
              style={{
                textAlign: "right",
                color: "#922b6a",
              }}
            >
              Total: ₦{Number(total).toLocaleString()}
            </Heading>

            <Button
              href={orderLink}
              style={{
                backgroundColor: "#922b6a",
                color: "#fff",
                padding: "15px 30px",
                borderRadius: "8px",
                textDecoration: "none",
                display: "inline-block",
                marginTop: "20px",
              }}
            >
              View My Order
            </Button>

            <Text
              style={{
                marginTop: "30px",
                color: "#666",
                lineHeight: "24px",
              }}
            >
              We'll send another email when your order status changes.
            </Text>

            <Text
              style={{
                marginTop: "20px",
              }}
            >
              Thank you for choosing
              <strong> L'Chaim Cakes ❤️</strong>
            </Text>
          </Section>

          {/* Footer */}

          <Section
            style={{
              backgroundColor: "#fafafa",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <Text
              style={{
                color: "#777",
                fontSize: "13px",
              }}
            >
              © {new Date().getFullYear()} L'Chaim Cakes
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}