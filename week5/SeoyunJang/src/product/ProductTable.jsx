import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products,onEditProduct, onDeleteProduct }) {
  const productTableByCategory = Object.groupBy(
    products,
    ({ category }) => category
  );

  const productsByCategory = Object.entries(productTableByCategory);

  return (
    <table cellPadding="6" style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productsByCategory.map(([category, products]) => (
          <React.Fragment key={category}> {/* <></>로도 가능한 그냥 빈 요소 컨테이너 */}
            <ProductCategoryRow category={category} />
            {products.map((product) => (
              <ProductRow
                key={product.name} //React 반복 요소 구분용
                {...product} //name, price, stocked, category 한 번에 전달
                onEditProduct={onEditProduct} //상품 수정 함수 전달
                onDeleteProduct={onDeleteProduct} //상품 삭제 함수 전달
              />
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
