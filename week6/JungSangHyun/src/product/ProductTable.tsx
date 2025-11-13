import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import type { Product, ProductTableProps } from "../types/Product";

export default function ProductTable({ products, onEditProduct, onDeleteProduct }
  : ProductTableProps) {
  const productTableByCategory = Object.groupBy(
    products,
    // 구조분해 : category만 꺼내쓰기 
    ({ category }:Product) => category
  );
  // 콜백 함수의 반환 값을 키로 하고, value는 product가 담긴 배열
  // category를 기준으로 분류

  // 내부 동작
  // for each product in products:
  // groupByKey = product.category
  // productTableByCategory[groupByKey].push(product)

  const productsByCategory = Object.entries(productTableByCategory);
  // 카테고리 - 프로덕트 배열로 매핑된 오브젝트를 [ 카테고리, 프로덕트 배열 ]로 변환
  // map 함수 사용을 위해 

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
          // 구조분해 할당 category = "Fruits", products = [{...}, {...}]
          productsByCategory.map(([category, products]) => (
            <React.Fragment key={category}>
              <ProductCategoryRow category={category} />
              {
                products?.map((product) => (
                  <ProductRow key={product.name}
                    {...product}
                    onEditProduct={onEditProduct}
                    onDeleteProduct={onDeleteProduct} />
                ))
              }
            </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
