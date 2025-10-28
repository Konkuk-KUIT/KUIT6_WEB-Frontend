import React, { useState } from "react";

export default function ProductRow({ name, price, onEditProduct, onDeleteProduct }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newPrice, setNewPrice] = useState(price);

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => {
    onEditProduct(name, newName, newPrice);
    setIsEditing(false);
  };
  const handleCancelClick = () => {
    setIsEditing(false);
    setNewName(name);
    setNewPrice(price);
  };

  const handleDeleteClick = () => {
    if (window.confirm(`"${name}" 상품을 삭제하시겠습니까?`)) {
      onDeleteProduct(name);
    }
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        ) : (
          name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
        ) : (
          price
        )}
      </td>
      <td>
        {isEditing ? (
          <>
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
}
