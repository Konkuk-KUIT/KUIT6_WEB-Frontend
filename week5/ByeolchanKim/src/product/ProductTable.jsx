import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function getProductsByCategory(products) {
  const productTableByCategory = Object.groupBy(
    products,
    ({ category }) => category
  );

  const productsByCategory = Object.entries(productTableByCategory);

  return productsByCategory;
}

export default function ProductTable({
  products,
  onProductEdit,
  onProductDelete,
}) {
  const productsByCategory = getProductsByCategory(products);

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
            <ProductRowList
              {...products}
              onEdit={onProductEdit}
              onDelete={onProductDelete}
            />
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
