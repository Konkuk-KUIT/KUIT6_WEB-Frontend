import { useState } from 'react';
import { SearchBar } from './SearchBar'
import { ProductTable } from './ProductTable'
import type { Price, Product } from './types';

const ORIGINAL_PRODUCTS: Product[] = [
    { id: 1, category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { id: 2, category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { id: 3, category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { id: 4, category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { id: 5, category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { id: 6, category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

export function FilterableProductTable() {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    const [products, setProducts] = useState(ORIGINAL_PRODUCTS)

    const productTableByCategory = Object.groupBy(
        products,
        (product) => product.category   // ({category}) => category
    )
    const productsByCategory = Object.entries(productTableByCategory)

    const lowerFilterText = filterText.toLowerCase()
    const result = productsByCategory.map(
        ([category, items]) : [string, Product[]] => [category, items.filter((item) => {
            const lowerProductText = item.name.toLowerCase()
            const matchesName = lowerProductText.includes(lowerFilterText)
            const matchesStock = item.stocked || !inStockOnly
            return matchesName && matchesStock
        })]
    )

    function onEditProduct(id: number, fields: { name: string, price: Price }) {
        setProducts((prevProducts) =>
            prevProducts.map((item) =>
                item.id === id ? { ...item, name: fields.name, price: fields.price } : item
            )
        )
    }

    function onDeleteProduct(id: number) {
        setProducts((prevProducts) =>
            prevProducts.filter((item) =>
                item.id != id
            )
        )
    }

    return (
        <div className='content'>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable
                products={result}
                onEditProduct={onEditProduct}
                onDeleteProduct={onDeleteProduct}
            />
        </div>
    )
}
