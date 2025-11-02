import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products }) {
  const productTableByCategory = Object.groupBy(
    products,
    ({ category }) => category
  );
  // 콜백 함수의 반환 값을 키로 하고, value는 product가 담긴 배열
  // category를 기준으로 분류
  const productsByCategory = Object.entries(productTableByCategory);
  // 카테고리 - 프로덕트 배열로 매핑된 오브젝트를 [ 카테고리, 프로덕트 배열 ]로 변환

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productsByCategory.map(([category, products]) => (
          <React.Fragment key={category}>
            <ProductCategoryRow category={category} />
            {products.map((product) => (
              <ProductRow key={product.name} {...product} />
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
