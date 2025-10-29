import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const INITIAL_PRODUCT_LIST = [
  { id: 1, category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { id: 2, category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { id: 3, category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { id: 4, category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { id: 5, category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { id: 6, category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [products, setProducts] = useState(INITIAL_PRODUCT_LIST);

  // 상품 수정 핸들러
  const handleEditProduct = (product) => {
    const newName = prompt("상품 이름을 입력하세요:", product.name);
    if (newName === null) return; // 취소 시
    
    const newPrice = prompt("가격을 입력하세요 (예: $5):", product.price);
    if (newPrice === null) return;
    
    const isStocked = confirm("재고가 있습니까?");
    
    setProducts(prevProducts =>
      prevProducts.map(p =>
        p.id === product.id
          ? { ...p, name: newName, price: newPrice, stocked: isStocked }
          : p
      )
    );
  };

  // 상품 삭제 핸들러
  const handleDeleteProduct = (productId) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      setProducts(prevProducts =>
        prevProducts.filter(p => p.id !== productId)
      );
    }
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