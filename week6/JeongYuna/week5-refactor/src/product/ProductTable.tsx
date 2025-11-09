import { Fragment } from 'react'
import { ProductCategoryRow } from './ProductCategoryRow'
import { ProductRow } from './ProductRow'
import type { Category, ProductTableProps } from "./types";

export function ProductTable(
    { products, onEditProduct, onDeleteProduct }: ProductTableProps
)
{
  return (
    <table className='product-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products
          .map(([category, items]) =>
            <Fragment key={category.toString()}>
              <ProductCategoryRow category={category as Category} />
              {items.map(
                (item) => <ProductRow key={item.id} product={item} onEditProduct={onEditProduct} onDeleteProduct={onDeleteProduct} />
              )}
            </Fragment>
          )
        }
      </tbody>
    </table>
  )
}
