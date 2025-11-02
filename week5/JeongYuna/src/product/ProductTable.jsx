import { Fragment } from 'react'
import { ProductCategoryRow } from './ProductCategoryRow'
import { ProductRow } from './ProductRow'

export function ProductTable({ filteredProducts, onEditProduct }) {

  return (
    <table className='product-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts
          .map(([category, items]) =>
            <Fragment key={category}>
              <ProductCategoryRow category={category} />
              {items.map(
                (item) => <ProductRow key={item.id} product={item} onEditProduct={onEditProduct} />
              )}
            </Fragment>
          )
        }
      </tbody>
    </table>
  )
}
