import React, { useState } from "react";

export default function ProductRow({
  name,
  price,
  onDeleteProduct,
  onSaveProduct,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newPrice, setNewPrice] = useState(price);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onSaveProduct(name, { name: newName, price: newPrice });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewName(name);
    setNewPrice(price);
  };

  return isEditing ? (
    <tr>
      <td>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />
      </td>
      <td>
        <button onClick={handleSave}>저장</button>
        <button onClick={handleCancel}>취소</button>
      </td>
    </tr>
  ) : (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <button onClick={handleEdit}>수정</button>
        <button onClick={() => onDeleteProduct(name)}>삭제</button>
      </td>
    </tr>
  );
}