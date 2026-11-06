"use client";

import { FormState, editProduct } from "@/app/actions/products";
// import { Product } from "@/app/generated/prisma/client";
import { SubmitButton } from "@/components/submit";
import { useActionState } from "react";
import { Product } from "@/app/products-db/page";

export default function ProductEditFunction({ product }: { product: Product }) {
  const initialState: FormState = {
    errors: {},
  };

  const editProductById = editProduct.bind(null, product.id);

  const [state, formAction] = useActionState(editProductById, initialState);

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
        <label className="text-white">
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded bg-white"
            name="title"
            defaultValue={product.title}
          />
        </label>
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          Price
          <input
            type="number"
            className="block w-full p-2 text-black border rounded bg-white"
            name="price"
            defaultValue={product.price}
          />
        </label>
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          Description
          <textarea
            className="block w-full p-2 text-black border rounded bg-white"
            name="description"
            defaultValue={product.description ?? ""}
          />
        </label>
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>
      {/* <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled={isPending}
      >
        Submit
      </button> */}
      <SubmitButton />
    </form>
  );
}
