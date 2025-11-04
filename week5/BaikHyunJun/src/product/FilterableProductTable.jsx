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
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [products, setProducts] = useState(INITIAL_PRODUCT_LIST);

  const filteredProducts = products.filter((product) => {
    const lowerCaseProductName = product.name.toLowerCase();
    const lowerCaseFilterText = filterText.toLowerCase();
    const hasPassedTextFilter =
      filterText === "" || lowerCaseProductName.includes(lowerCaseFilterText);

    const hasPassedStockFilter = !inStockOnly || product.stocked === true;
    return hasPassedTextFilter && hasPassedStockFilter;
  });

  // 필수: 상품 정보 수정 함수
  const handleEditProduct = (originalName, updatedProduct) => {
    setProducts(products.map(product => 
      product.name === originalName ? { ...product, ...updatedProduct } : product
    ));
  };

  // 선택: 상품 삭제 함수
  const handleDeleteProduct = (name) => {
    setProducts(products.filter(product => product.name !== name));
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
