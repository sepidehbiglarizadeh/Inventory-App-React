const ProductList = ({ products,deleteProductHandler ,categories}) => {
    const findCategory=(id)=>{
       return categories.find(c => c.id === parseInt(id)).title
    }

  return (
    <>
      <h2 className="text-xl text-slate-300 font-bold mb-2">ProductList</h2>
      <div className="overflow-x-auto">
      {products.map((product) => {
        return (
          <div key={product.id} className="flex items-center justify-between mb-2">
            <span className="text-slate-400">{product.title}</span>
            <div className="flex items-center gap-x-3">
              <span className="text-slate-400">
                {new Date(product.createdAt).toLocaleString("fa-IR")}
              </span>
              <span className="block px-3 py-0.5 text-slate-400 text-sm border border-slate-400 rounded-2xl">
                {findCategory(product.categoryId)}
              </span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
                {product.quantity}
              </span>
              <button
                className="delete-product border px-2 py-0.5 rounded-2xl border-red-400 text-red-400"
                onClick={()=>deleteProductHandler(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default ProductList;
