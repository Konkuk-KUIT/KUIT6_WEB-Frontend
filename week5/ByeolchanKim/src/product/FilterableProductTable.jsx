import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useFilteredProducts } from "./hooks/useFilteredProducts";
import { useToggle } from "./hooks/useToggle";

export function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, toggleInStockOnly] = useToggle(false); // 맥락을 잘 드러낼 수가 있음.

  const { filteredProducts, edit, remove } = useFilteredProducts({
    filterText,
    inStockOnly,
  });

  return (
    <>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        inStockOnly={inStockOnly}
        onInStockOnlyChange={toggleInStockOnly}
      />
      <ProductTable
        products={filteredProducts}
        onProductEdit={edit}
        onProductDelete={remove}
      />
    </>
  );
}
