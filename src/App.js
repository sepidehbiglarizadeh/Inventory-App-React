import { useState } from "react";
import CategoryForm from "./components/Category";
import NavBar from "./components/NavBar";
import ProductsForm from "./components/Products";

const App = () => {
  const [categories, setCategories] = useState([]);


  return (
    <>
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-2">
            <CategoryForm setCategories={setCategories}/>
            <ProductsForm categories={categories}/>
        </div>
      </div>
    </>
  );
};

export default App;
