import React, { useState } from "react";

export default function ProductRow({ name, price, index, onEditProduct }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedPrice, setEditedPrice] = useState(price);

  const handleSave = () => {
    onEditProduct(index, editedName, editedPrice);
    setIsEditing(false);
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        ) : (
          name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
          />
        ) : (
          price
        )}
      </td>
      <td>
        {isEditing ? (
          <button onClick={handleSave}>
            <img src="./check.svg" alt="저장 아이콘" />
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)}>
            <img src="./edit.svg" alt="수정 아이콘" />
          </button>
        )}
      </td>
    </tr>
  );
}
