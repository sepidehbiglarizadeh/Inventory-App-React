import { useEffect, useState } from "react";
import CategoryForm from "./components/Category";
import Filter from "./components/Filter";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import ProductsForm from "./components/Products";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = filterSelectedCategory(result);
    result = sortDate(result);
    setFilteredProducts(result);
  }, [products, sort, searchValue, selectedCategory]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    setProducts(savedProducts);
    setCategories(savedCategories);
  }, []);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  const deleteProductHandler = (productId) => {
    const filteredProducts = products.filter((p) => p.id !== productId);
    setProducts(filteredProducts);
    localStorage.removeItem("products");
  };

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const selectedCategoryHandler = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };

  const sortDate = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };

  const filterSelectedCategory = (array) => {
    if (!selectedCategory) return array;
    return array.filter((item) => item.categoryId === selectedCategory);
  };

  return (
    <>
      <div className="bg-slate-800 min-h-screen">
        <NavBar products={products} />
        <div className="container max-w-screen-sm mx-auto p-2">
          <CategoryForm setCategories={setCategories} />
          <ProductsForm categories={categories} setProducts={setProducts} />
          <Filter
            sort={sort}
            onSort={sortHandler}
            searchValue={searchValue}
            onSearch={searchHandler}
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectedCategory={selectedCategoryHandler}
          />
          <ProductList
            products={filteredProducts}
            deleteProductHandler={deleteProductHandler}
            categories={categories}
          />
        </div>
      </div>
    </>
  );
};

export default App;
