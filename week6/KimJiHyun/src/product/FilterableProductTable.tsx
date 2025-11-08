import { useState, useCallback, useMemo } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import type { Product } from '../types';

const INITIAL_PRODUCT_LIST: Product[] = [
    { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
    { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
    { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
    { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
    { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
    { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

export function FilterableProductTable() {
    const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCT_LIST);
    const [filterText, setFilterText] = useState<string>('');
    const [inStockOnly, setInStockOnly] = useState<boolean>(false);

    const filteredProducts = useMemo<Product[]>(() => {
        return products.filter((product) => {
            const lowerCaseProductName = product.name.toLowerCase();
            const lowerCaseFilterText = filterText.toLowerCase();
            const hasPassedTextFilter = filterText === '' || lowerCaseProductName.includes(lowerCaseFilterText);

            const hasPassedStockFilter = !inStockOnly || product.stocked === true;
            return hasPassedTextFilter && hasPassedStockFilter;
        });
    }, [products, filterText, inStockOnly]);

    const handleEditProduct = useCallback((originalProduct: Product, updatedProduct: Partial<Product>): void => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.name === originalProduct.name ? { ...product, ...updatedProduct } : product
            )
        );
    }, []);

    const handleDeleteProduct = useCallback((productToDelete: Product): void => {
        setProducts((prevProducts) =>
            prevProducts.filter((product) => product.name !== productToDelete.name)
        );
    }, []);

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
