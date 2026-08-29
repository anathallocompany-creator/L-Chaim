import ProductDetails from "@/components/SingleProduct/ProductDetails";
import { notFound } from "next/navigation";


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