const ProductList = ({ products }) => {
  return (
    <>
      <h2 className="text-xl text-slate-300 font-bold mb-2">ProductList</h2>
      {products.map((product) => {
        return (
          <div class="flex items-center justify-between mb-2">
            <span class="text-slate-400">{product.title}</span>
            <div class="flex items-center gap-x-3">
              <span class="text-slate-400">
                {new Date(product.createdAt).toLocaleString("fa-IR")}
              </span>
              <span class="block px-3 py-0.5 text-slate-400 text-sm border border-slate-400 rounded-2xl">
                {product.categoryId}
              </span>
              <span class="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
                {product.quantity}
              </span>
              <button
                class="delete-product border px-2 py-0.5 rounded-2xl border-red-400 text-red-400"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductList;
