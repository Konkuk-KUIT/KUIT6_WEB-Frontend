import { useState } from "react";
import SearchBar from "./SearchBar.tsx";
import ProductTable from "./ProductTable.tsx";
import type { Product, EditProductProps, DeleteProductProps } from "../types/Product.ts";

const INITIAL_PRODUCT_LIST = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export function FilterableProductTable() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCT_LIST);
  const [filterText, setFilterText] = useState<string>("");
  const [inStockOnly, setInStockOnly] = useState(false);

  // 텍스트 검색 / 제고 체크 필터링된 상품들
  const filteredProducts = products.filter((product) => {
    const lowerCaseProductName = product.name.toLowerCase();
    const lowerCaseFilterText = filterText.toLowerCase();
    const hasPassedTextFilter =
      filterText === "" || lowerCaseProductName.includes(lowerCaseFilterText);

    const hasPassedStockFilter = !inStockOnly || product.stocked === true;
    return hasPassedTextFilter && hasPassedStockFilter;
  });

  // 상품 수정 
  // prevName으로 찾아서 변경 내용 반영
  const onEditProduct = ({ prevName, newName, newPrice } : EditProductProps) => {
    setProducts((prev) =>
      prev.map((product) => product.name === prevName
        ? { ...product, name: newName, price: newPrice } : product)
    );
  };

  // 상품 삭제
  const onDeleteProduct = ({name}:DeleteProductProps) => {
    setProducts((prev) => prev.filter((product) => product.name !== name));
  }

  return (
    <>
      <SearchBar
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={filteredProducts}
        onEditProduct={onEditProduct}
        onDeleteProduct={onDeleteProduct}
      />
    </>
  );
}
