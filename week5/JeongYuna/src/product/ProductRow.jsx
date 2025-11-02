import { useState } from "react"

export function ProductRow({ product, onChangeProduct }) {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <tr>
        {isEditing?
            <>
            <td><input type="text" size={13} value={product.name}></input></td>
            <td><input type="text" size={5} value={product.price}></input></td>
            <td className="edit-product">
                <button onClick={() => setIsEditing(false)}><img src="/src/assets/save.png"></img></button>
                <button onClick={() => setIsEditing(false)}><img src="/src/assets/quit.png"></img></button>
            </td>
            </>
            :
            <>
            {product.stocked?
                <td>{product.name}</td>
                : <td style={{color: 'red'}}>{product.name}</td>}
            <td>{product.price}</td>
            <td className="edit-product">
                <button onClick={() => setIsEditing(true)}><img src="/src/assets/pencil.png"></img></button>
                <button><img src="/src/assets/trashcan.png"></img></button>
            </td>
            </>
        }
        </tr>
    )
}



