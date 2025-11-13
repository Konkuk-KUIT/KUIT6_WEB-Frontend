import { useState } from "react"
import type { ProductRowProps } from "./types";

export function ProductRow(
    { product, onEditProduct, onDeleteProduct }: ProductRowProps
) 
{
    const [isEditing, setIsEditing] = useState(false);
    const [productName, setProductName] = useState(product.name)
    const [productPrice, setProductPrice] = useState(product.price)

    const handleSave = () => {
        setIsEditing(false)
        onEditProduct(product.id, { name: productName, price: productPrice })
    }

    const handleQuit = () => {
        setIsEditing(false)
        setProductName(product.name)
        setProductPrice(product.price)
    }

    return (
        <tr>
            {isEditing ?
                <>
                    <td><input type="text" size={13} value={productName} onChange={(e) => { setProductName(e.target.value) }}></input></td>
                    <td><input type="text" size={5} value={productPrice} onChange={(e) => { setProductPrice(e.target.value) }}></input></td>
                    <td className="edit-product">
                        <button onClick={handleSave}><img src="/src/assets/save.png"></img></button>
                        <button onClick={handleQuit}><img src="/src/assets/quit.png"></img></button>
                    </td>
                </>
                :
                <>
                    {product.stocked ?
                        <td>{product.name}</td>
                        : <td style={{ color: 'red' }}>{product.name}</td>}
                    <td>{product.price}</td>
                    <td className="edit-product">
                        <button onClick={() => setIsEditing(true)}><img src="/src/assets/pencil.png"></img></button>
                        <button onClick={() => onDeleteProduct(product.id)}><img src="/src/assets/trashcan.png"></img></button>
                    </td>
                </>
            }
        </tr>
    )
}


