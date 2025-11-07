import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import { ProductRowList } from "./ProductRow";

function getProductsByCategory(products) {
  const productsByCategory = Object.groupBy(
    products,
    ({ category }) => category
  );

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
        {Object.entries(productsByCategory).map(([category, products]) => (
          <React.Fragment key={category}>
            <ProductCategoryRow category={category} />
            <ProductRowList
              products={products}
              onEdit={onProductEdit}
              onDelete={onProductDelete}
            />
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
