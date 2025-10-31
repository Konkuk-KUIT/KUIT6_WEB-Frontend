import React, { useId } from "react";

export default function SearchBar({ onFilterTextChange, onInStockOnlyChange }) {
  const stockCheckboxId = useId(); // <label>, <input> 연결

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
        onChange={handleFilterTextChange} // 이벤트 발생시에 실행 (함수 이름만)
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
