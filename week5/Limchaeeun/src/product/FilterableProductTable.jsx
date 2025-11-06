import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const INITIAL_PRODUCT_LIST = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: true, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: false, name: "Peas" },
];

function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  // 상품 상태 관리
  const [products, setProducts] = useState(INITIAL_PRODUCT_LIST);

  // 상품 상태 변경
  const handleEditProduct = (targetName, updatedData) => {
    const newProducts = products.map((p) =>
      p.name === targetName ? { ...p, ...updatedData } : p
    );
    setProducts(newProducts);
  };

  // 상품 삭제
  const handleDeleteProduct = (targetName) => {
    const newProducts = products.filter((p) => p.name !== targetName);
    setProducts(newProducts);
  };

  const filteredProducts = products.filter((product) => {
    const lowerCaseProductName = product.name.toLowerCase();
    const lowerCaseFilterText = filterText.toLowerCase();
    const hasPassedTextFilter =
      filterText === "" || lowerCaseProductName.includes(lowerCaseFilterText);

    const hasPassedStockFilter = !inStockOnly || product.stocked === true;
    return hasPassedTextFilter && hasPassedStockFilter;
  });

  return (
    <>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        inStockOnly={inStockOnly}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={filteredProducts}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
      />
    </>
  );
}

export default FilterableProductTable;
