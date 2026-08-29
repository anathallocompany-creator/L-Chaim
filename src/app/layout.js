import { ClerkProvider } from "@clerk/nextjs";
import ReduxProvider from "@/provider/ReduxProvider";
import SiteLayout from "@/components/SiteLayout";
import CartProvider from "@/components/CartProvider";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ReduxProvider>
            <CartProvider />

            <SiteLayout>
              {children}
            </SiteLayout>

          </ReduxProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}