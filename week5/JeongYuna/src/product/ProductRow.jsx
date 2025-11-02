import { useState } from "react"

export function ProductRow({ product }) {
    return (
        <tr>
        {product.stocked?
            <td>{product.name}</td>
            : <td style={{color: 'red'}}>{product.name}</td>}
        <td>{product.price}</td>
        <td className="edit-product">
            <button><img src="/src/assets/pencil.png"></img></button>
            <button><img src="/src/assets/trashcan.png"></img></button>
        </td>
        </tr>
    )
}