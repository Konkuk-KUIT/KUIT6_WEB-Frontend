import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, onEditProduct, allItems }) {
  const productTableByCategory = Object.groupBy(
    products,
    ({ category }) => category
  );
  const productsByCategory = Object.entries(productTableByCategory);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>작업</th>
        </tr>
      </thead>
      <tbody>
        {productsByCategory.map(([category, products]) => (
          <React.Fragment key={category}>
            <ProductCategoryRow category={category} />
            {products.map((product) => {
              const index = allItems.findIndex(
                (item) =>
                  item.name === product.name &&
                  item.price === product.price &&
                  item.category === product.category
              );
              return (
                <ProductRow
                  key={index}
                  {...product}
                  index={index}
                  onEditProduct={onEditProduct}
                />
              );
            })}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
