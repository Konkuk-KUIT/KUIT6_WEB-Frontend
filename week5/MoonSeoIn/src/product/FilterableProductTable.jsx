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

  // 수정
  const editProduct = (oldName, newName, newPrice) => {
    const newProducts = products.map((product) => {
      if (product.name === oldName) {
        return { ...product, name: newName, price: newPrice };
      }
      return product;
    });
    setProducts(newProducts);
  };

  // 삭제
  const deleteProduct = (name) => {
    const newProducts = products.filter((product) => product.name !== name);
    setProducts(newProducts);
  };

  // 필터링
  const filteredProducts = products.filter((product) => {
    const matchText = product.name.toLowerCase().includes(filterText.toLowerCase());
    const matchStock = !inStockOnly || product.stocked;
    return matchText && matchStock;
  });

  return (
    <>
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText} inStockOnly={inStockOnly} onInStockOnlyChange={setInStockOnly} />
      <ProductTable products={filteredProducts} onEdit={editProduct} onDelete={deleteProduct} />
    </>
  );
}
