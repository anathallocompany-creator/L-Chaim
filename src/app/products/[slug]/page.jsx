import { notFound } from "next/navigation";
import ProductDetails from "@/components/singleProduct/ProductDetails";

export default async function Page({ params }) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/products/slug/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    notFound();
  }

  const product = await res.json();

  return <ProductDetails product={product} />;
}