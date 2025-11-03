import React, { useId } from "react";

export default function SearchBar({ onFilterTextChange, onInStockOnlyChange }) {
  const stockCheckboxId = useId();

  const handleFilterTextChange = (event) => {
    onFilterTextChange(event.target.value);
  };

  const handleInStockOnlyChange = (event) => {
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
