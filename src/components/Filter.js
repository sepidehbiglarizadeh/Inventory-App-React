const Filter = ({ onSearch, searchValue, onSort, sort }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="search-input" className="text-slate-500 text-lg">
          Search
        </label>
        <input
          type="text"
          name="search-input"
          value={searchValue}
          id="search-input"
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
          onChange={onSearch}
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" className="text-slate-500 text-lg">
          Sort
        </label>
        <select
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-slate-400 rounded-xl"
          value={sort}
          onChange={onSort}
        >
          <option className="bg-slate-500 text-slate-300" value="">
            Sort
          </option>
          <option
            className="bg-slate-500 text-slate-300"
            selected
            value="latest"
          >
            Latest
          </option>
          <option className="bg-slate-500 text-slate-300" value="earliest">
            Earliest
          </option>
        </select>
      </div>
    </>
  );
};

export default Filter;
