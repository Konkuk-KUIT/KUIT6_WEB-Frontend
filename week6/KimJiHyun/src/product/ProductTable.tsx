import { Fragment, useMemo } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import type { ProductTableProps, Product } from '../types';

export default function ProductTable({
    products,
    onEditProduct,
    onDeleteProduct
}: ProductTableProps) {
    const productsByCategory = useMemo<[string, Product[]][]>(() => {
        const grouped = Object.groupBy(products, ({ category }) => category);
        return Object.entries(grouped) as [string, Product[]][];
    }, [products]);

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
                {productsByCategory.map(([category]) => (
                    <Fragment key={category}>
                        <ProductCategoryRow category={category} />
                        {products.map((product) => (
                            <ProductRow
                                key={product.name}
                                {...product}
                                onEditProduct={onEditProduct}
                                onDeleteProduct={onDeleteProduct}
                            />
                        ))}
                    </Fragment>
                ))}
            </tbody>
        </table>
    );
}
