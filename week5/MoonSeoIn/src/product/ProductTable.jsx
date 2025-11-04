import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, onEdit, onDelete }) {
  const productsByCategory = Object.groupBy(products, (p) => p.category);
  const categories = Object.entries(productsByCategory);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {categories.map(([category, products]) => (
          <React.Fragment key={category}>
            <ProductCategoryRow category={category} />
            {products.map((product) => (
              <ProductRow key={product.name} product={product} onEdit={onEdit} onDelete={onDelete} />
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
