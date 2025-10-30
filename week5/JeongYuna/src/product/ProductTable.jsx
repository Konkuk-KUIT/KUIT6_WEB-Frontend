import { Fragment } from 'react'
import { ProductCategoryRow } from './ProductCategoryRow'
import { ProductRow } from './ProductRow'

export function ProductTable({ products }) {
    const productTableByCategory = Object.groupBy(
        products,
        (product) => product.category   // ({category}) => category
    )
    const productsByCategory = Object.entries(productTableByCategory)

    return (
      <table className='product-table'>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Price</th>
              </tr>
          </thead>
          <tbody>
            {productsByCategory
              .map(([category, items]) =>
                <Fragment>
                  <ProductCategoryRow category={category} />
                    {items.map((item) =>
                      <ProductRow key={item.name} product={item} />
                      )
                    }
                </Fragment>
              )
            }
          </tbody>
      </table>
    )
}