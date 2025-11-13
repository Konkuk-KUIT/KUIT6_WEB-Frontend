import React, { useId } from "react";

export default function SearchBar({ onFilterTextChange, onInStockOnlyChange }
  : { onFilterTextChange: (value: string) => void; onInStockOnlyChange: (checked: boolean) => void; }) {
  const stockCheckboxId = useId(); // <label>, <input> 연결

  const handleFilterTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterTextChange(e.target.value);
  };

  const handleInStockOnlyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInStockOnlyChange(e.target.checked);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleFilterTextChange} // 이벤트 발생시에 실행 (함수 이름만)
      />
      <br />
      <label htmlFor={stockCheckboxId}>
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
