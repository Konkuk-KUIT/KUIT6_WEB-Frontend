import React, { useId } from "react";

function SearchBar({ onFilterTextChange, onInStockOnlyChange }) {
  const stockCheckboxId = useId();

  const handleFilterTextChange = (event) => {
    onFilterTextChange(event.target.value);
  };

  const handleInStockOnlyChange = (event) => {
    // console.log(event.target.checked);
    onInStockOnlyChange(event.target.checked);
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleFilterTextChange}
      />
      <br />
      <label for={stockCheckboxId}>
        <input
          type="checkbox"
          id={stockCheckboxId}
          onChange={handleInStockOnlyChange}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
