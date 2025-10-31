import React, { useState } from "react";

export default function ProductRow({ name, price, onEditProduct, onDeleteProduct }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const handleEdit = () => {
    setNewName(name);
    setNewPrice(price);
    setIsEditing(true);
  };

  const handleSave = () => {
    onEditProduct(name, { name: newName, price: newPrice });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (!window.confirm(`Delete "${name}"?`)) return;
    onDeleteProduct(name);
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        ) : (
          name
        )}
      </td>
      <td>
        {isEditing ? (
          <input value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
        ) : (
          price
        )}
      </td>
      <td>
        {isEditing ? (
          <>
            {" "}
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            {" "}
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
}
