import type { ProductCategoryRowProps } from '../types';

export default function ProductCategoryRow({ category }: ProductCategoryRowProps) {
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    );
}
