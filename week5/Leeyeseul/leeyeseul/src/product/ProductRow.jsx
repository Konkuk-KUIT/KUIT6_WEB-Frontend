import React, { useState } from "react";

export default function ProductRow({ name, price, onEditProduct, onDeleteProduct }) { 
  const [isEditing, setIsEditing] = useState(false);  
  const [editName, setEditName] = useState(name);     
  const [editPrice, setEditPrice] = useState(price);  

  function handleEditClick() {                       
    if (!isEditing) {
      setIsEditing(true);
    } else {
      onEditProduct(name, { name: editName, price: editPrice });
      setIsEditing(false);
    }
  }                                                   

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
        ) : (
          name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
          />
        ) : (
          price
        )}
      </td>
      <td>
        <button type="button" onClick={handleEditClick}>수정</button> 
        <button
          type="button"
          onClick={() => onDeleteProduct(name)}                        
          style={{ marginLeft: 8 }}
        >
          삭제
        </button>
      </td>
    </tr>
  );
}
