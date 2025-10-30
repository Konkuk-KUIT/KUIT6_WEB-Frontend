import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, onDeleteProduct, onSaveProduct }) {
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
        </tr>
      </thead>
      <tbody>
        {productsByCategory.map(([category, products]) => (
          <React.Fragment key={category}>
            <ProductCategoryRow category={category} />
            {products.map((product) => (
              <ProductRow key={product.name} name={product.name} price={product.price} onDeleteProduct={onDeleteProduct} onSaveProduct={onSaveProduct} />
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}