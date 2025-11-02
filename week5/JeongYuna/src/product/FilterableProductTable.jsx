import { useState } from 'react';
import { SearchBar } from './SearchBar'
import { ProductTable } from './ProductTable'

export function FilterableProductTable({ products, onProductChange }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const productTableByCategory = Object.groupBy(
        products,
        (product) => product.category   // ({category}) => category
    )
    const productsByCategory = Object.entries(productTableByCategory)
    
    const lowerFilterText = filterText.toLowerCase()
    const result = productsByCategory.map( 
        ([category, items]) => [category, items.filter( (item) => { 
            const lowerProductText = item.name.toLowerCase()
            const matchesName = lowerProductText.includes(lowerFilterText)
            const matchesStock = item.stocked || !inStockOnly
            return matchesName && matchesStock
        })]
    )

    return (
       <div className='content'>
        <SearchBar 
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly} />
        <ProductTable 
            filteredProducts={result}
            />
       </ div>
    )
}
