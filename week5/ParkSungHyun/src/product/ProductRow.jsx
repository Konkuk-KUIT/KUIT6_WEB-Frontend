import React, { useState } from "react";

export default function ProductRow({ product, onEditProduct, onDeleteProduct }) {
  // row edit state
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState({ name: product.name, price: product.price });

  const startEdit = () => {
    setDraft({ name: product.name, price: product.price });
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setDraft({ name: product.name, price: product.price });
    setIsEditing(false);
  };

  const saveEdit = () => {
    const trimmedName = draft.name.trim();
    const trimmedPrice = String(draft.price).trim();
    if (!trimmedName || !trimmedPrice) return;
    // 부모로 수정 결과 전달 (id가 있으면 유지)
    onEditProduct && onEditProduct({ ...product, name: trimmedName, price: trimmedPrice });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <tr>
        <td>
          <input
            value={draft.name}
            onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
            placeholder="Name"
          />
        </td>
        <td>
          <input
            value={draft.price}
            onChange={(e) => setDraft((d) => ({ ...d, price: e.target.value }))}
            placeholder="Price"
          />
        </td>
        <td>
          <button onClick={saveEdit}>Save</button>
          <button onClick={cancelEdit}>Cancel</button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <button onClick={startEdit}>Edit</button>
        {onDeleteProduct && (
          <button onClick={() => onDeleteProduct(product)}>Delete</button>
        )}
      </td>
    </tr>
  );
}
