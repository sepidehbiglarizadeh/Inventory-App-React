import { useState } from "react";
import CategoryForm from "./components/Category";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import ProductsForm from "./components/Products";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const deleteProductHandler = (productId) => {
    const filteredProducts = products.filter((p) => p.id !== productId);
    setProducts(filteredProducts);
  };

  return (
    <>
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-2">
          <CategoryForm setCategories={setCategories} />
          <ProductsForm categories={categories} setProducts={setProducts} />
          <ProductList
            products={products}
            deleteProductHandler={deleteProductHandler}
            categories={categories}
          />
        </div>
      </div>
    </>
  );
};

export default App;
