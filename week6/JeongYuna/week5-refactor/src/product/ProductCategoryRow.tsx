import type { Category } from "./types"

export function ProductCategoryRow({ category }: { category: Category }) {
    return (
        <>
            <tr>
                <th colSpan={2}>{category}</th>
            </tr>
        </>
    )
}