import { useState } from "react";

const Category = () => {
  const [isShow, setIsShow] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });
  const [categories, setCategories] = useState([]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCategoryFormData({ ...categoryFormData, [name]: value });
  };

  const cancelCategoryForm = (e) => {
    e.preventDefault();
    setIsShow(false);
  };

  const addNewCategoryHandler = (e) => {
    e.preventDefault();
    setCategories([
      ...categories,
      { ...categoryFormData, createdAt: new Date().toISOString() },
    ]);
    setCategoryFormData({ title: "", description: "" });
  };

  return (
    <section>
      <div className={`mb-4 ${isShow ? "" : "hidden"}`} id="category-wrapper">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add new category
        </h2>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label
              htmlFor="category-title"
              className="block mb-1 text-slate-400"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={categoryFormData.title}
              id="category-title"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
              onChange={changeHandler}
            />
          </div>
          <div>
            <label
              htmlFor="category-description"
              className="block mb-1 text-slate-400"
            >
              Description
            </label>
            <textarea
              name="description"
              value={categoryFormData.description}
              id="category-description"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full resize-none"
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              id="cancel-add-category"
              className="flex-1 border border-slate-400 text-slate-400 rounded-xl p-2"
              onClick={cancelCategoryForm}
            >
              Cancel
            </button>
            <button
              id="add-new-category"
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl p-2"
              onClick={addNewCategoryHandler}
            >
              Add New Category
            </button>
          </div>
        </form>
      </div>
      <button
        id="toggle-add-category"
        className={`text-slate-600 text-lg mb-4 font-medium ${
          isShow && "hidden"
        }`}
        onClick={() => setIsShow(!isShow)}
      >
        Add New Category?
      </button>
    </section>
  );
};

export default Category;
