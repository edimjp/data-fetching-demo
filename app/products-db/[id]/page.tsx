import { getProduct } from "@/app/prisma-db";
import ProductEditFunction from "./product-edit-form";
import { notFound } from "next/navigation";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(parseInt(id));

  if (!product) {
    notFound();
  }

  return <ProductEditFunction product={product} />;
}
