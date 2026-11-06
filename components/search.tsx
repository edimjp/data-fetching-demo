import Form from "next/form";
export function Search() {
  return (
    <Form action="/products-db" className="flex gap 2">
      <input
        type="text"
        name="query"
        placeholder="Search products"
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black bg-white"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </Form>
  );
}
