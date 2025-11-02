import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const INITIAL_PRODUCT_LIST = [
    { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
    { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
    { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
    { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
    { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
    { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

export function FilterableProductTable() {
    const [products, setProducts] = useState(INITIAL_PRODUCT_LIST);
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const filteredProducts = products.filter((product) => {
        const lowerCaseProductName = product.name.toLowerCase();
        const lowerCaseFilterText = filterText.toLowerCase();
        const hasPassedTextFilter = filterText === '' || lowerCaseProductName.includes(lowerCaseFilterText);

        const hasPassedStockFilter = !inStockOnly || product.stocked === true;
        return hasPassedTextFilter && hasPassedStockFilter;
    });

    const handleEditProduct = (productName, updatedProduct) => {
        setProducts(products.map((product) =>
            product.name === productName ? { ...product, ...updatedProduct } : product
        ));
    };

    const handleDeleteProduct = (productName) => {
        setProducts(products.filter((product) => product.name !== productName));
    };

    return (
        <>
            <SearchBar
                filterText={filterText}
                onFilterTextChange={setFilterText}
                inStockOnly={inStockOnly}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable
                products={filteredProducts}
                onEditProduct={handleEditProduct}
                onDeleteProduct={handleDeleteProduct}
            />
        </>
    );
}
