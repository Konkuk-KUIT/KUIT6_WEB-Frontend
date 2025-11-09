import { useState, useCallback } from 'react';
import type { ProductRowProps, Product } from '../types';

export default function ProductRow({
    category,
    price,
    stocked,
    name,
    onEditProduct,
    onDeleteProduct,
}: ProductRowProps) {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editName, setEditName] = useState<string>(name);
    const [editPrice, setEditPrice] = useState<string>(price);

    const currentProduct: Product = {
        category,
        price,
        stocked,
        name,
    };

    const handleSave = useCallback((): void => {
        onEditProduct(currentProduct, {
            name: editName,
            price: editPrice,
        });
        setIsEditing(false);
    }, [currentProduct, editName, editPrice, onEditProduct]);

    const handleCancel = useCallback((): void => {
        setEditName(name);
        setEditPrice(price);
        setIsEditing(false);
    }, [name, price]);

    const handleDeleteClick = useCallback((): void => {
        onDeleteProduct(currentProduct);
    }, [currentProduct, onDeleteProduct]);

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
                <button onClick={handleDeleteClick}>🗑️</button>
            </td>
        </tr>
    );
}
