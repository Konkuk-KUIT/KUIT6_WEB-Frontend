import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const INITIAL_PRODUCT_LIST = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export function FilterableProductTable() {
  const [products, setProducts] = useState(INITIAL_PRODUCT_LIST); //추가

  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = products.filter((product) => {
    const lowerCaseProductName = product.name.toLowerCase();
    const lowerCaseFilterText = filterText.toLowerCase();
    const hasPassedTextFilter =
      filterText === "" || lowerCaseProductName.includes(lowerCaseFilterText);

    const hasPassedStockFilter = !inStockOnly || product.stocked;
    return hasPassedTextFilter && hasPassedStockFilter;
  });

  //수정 함수
  const handleEditProduct = (oldName) => {
    const product = products.find((p) => p.name === oldName);
    if (!product) return;

    const newName = prompt("상품 이름을 변경하세요", product.name);
    const newPrice = prompt("상품 가격을 변경하세요", product.price);

    if (newName && newPrice) {
      setProducts((prev) =>
        prev.map((p) =>
          p.name === oldName ? { ...p, name: newName, price: newPrice } : p
        )
      );
    }
  };

  //삭제 함수
  const handleDeleteProduct = (name) => {
    if (window.confirm(`${name} 상품을 삭제할까요?`)) {
      setProducts((prev) => prev.filter((p) => p.name !== name));
    }
  };

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
