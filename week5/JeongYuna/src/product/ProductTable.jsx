import { Fragment } from 'react'
import { ProductCategoryRow } from './ProductCategoryRow'
import { ProductRow } from './ProductRow'

export function ProductTable({ products, filterText, inStockOnly }) {
    const productTableByCategory = Object.groupBy(
        products,
        (product) => product.category   // ({category}) => category
    )
    const productsByCategory = Object.entries(productTableByCategory)

    const lowerFilterText = filterText.toLowerCase()
    const lowerProductTexts = productsByCategory.map( 
      ([category, items]) => [category, items.map( (item) => item.name.toLowerCase())]
    )

    const result = lowerProductTexts.map( ([category, items]) => 
      [category,
        items.filter( (item) => 
          item.includes(lowerFilterText) && item.stocked 
        )
      ]  
    
    )

    return (
      <table className='product-table'>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Price</th>
              </tr>
          </thead>
          <tbody>
            {result
              .map(([category, items]) =>
                <Fragment key={category}>
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