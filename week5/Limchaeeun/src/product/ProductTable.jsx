import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({ products, onEditProduct, onDeleteProduct }) {
  const productTableByCategory = Object.groupBy(
    products,
    ({ category }) => category
  );
  // 콜백 함수의 반환 값을 키로 하고, value는 product가 담긴 배열
  // category를 기준으로 분류
  const productsByCategory = Object.entries(productTableByCategory);
  // 카테고리 - 프로덕트 배열로 매핑된 오브젝트를 [ 카테고리, 프로덕트 배열 ]로 변환
  console.dir(productTableByCategory);
  console.log(productsByCategory);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {productsByCategory.map(([category, products]) => (
          <React.Fragment key={category}>
            <ProductCategoryRow category={category} />
            {products.map((product) => (
              <ProductRow
                key={product.name}
                name={product.name}
                price={product.price}
                onEditProduct={onEditProduct}
                onDeleteProduct={onDeleteProduct}
              />
            ))}
          </React.Fragment>
          //   map, some, filter => key를 가장 바깥 jsx에 사용
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
