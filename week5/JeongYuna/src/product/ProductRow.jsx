import { useState } from "react"

export function ProductRow({ product, onEditProduct, onDeleteProduct }) {
    const [isEditing, setIsEditing] = useState(false);
    const [inputNameField, setInputNameField] = useState(product.name)
    const [inputPriceField, setInputPriceField] = useState(product.price)

    const handleSave = () => {
        setIsEditing(false)
        onEditProduct(product.id, {name: inputNameField, price: inputPriceField})
    }

    const handleQuit = () => {
        setIsEditing(false)
        setInputNameField(product.name)
        setInputPriceField(product.price)
    }

    return (
        <tr>
        {isEditing?
            <>
            <td><input type="text" size={13} value={inputNameField} onChange={(e) => {setInputNameField(e.target.value)}}></input></td>
            <td><input type="text" size={5} value={inputPriceField} onChange={(e) => {setInputPriceField(e.target.value)}}></input></td>
            <td className="edit-product">
                <button onClick={handleSave}><img src="/src/assets/save.png"></img></button>
                <button onClick={handleQuit}><img src="/src/assets/quit.png"></img></button>
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
                <button onClick={() => onDeleteProduct(product.id)}><img src="/src/assets/trashcan.png"></img></button>
            </td>
            </>
        }
        </tr>
    )
}


