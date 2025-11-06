import { useState } from 'react';

export default function ProductRow({ name, price, onEditProduct, onDeleteProduct }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState(name);
    const [editPrice, setEditPrice] = useState(price);

    const handleSave = () => {
        onEditProduct(name, {
            name: editName,
            price: editPrice,
        });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditName(name);
        setEditPrice(price);
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <tr>
                <td>
                    <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
                </td>
                <td>
                    <input type="text" value={editPrice} onChange={(e) => setEditPrice(e.target.value)} />
                </td>
                <td>
                    <button onClick={handleSave}>✅</button>
                    <button onClick={handleCancel}>❌</button>
                </td>
            </tr>
        );
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <button onClick={() => setIsEditing(true)}>✏️</button>
                <button onClick={() => onDeleteProduct(name)}>🗑️</button>
            </td>
        </tr>
    );
}
