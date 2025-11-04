import React, { useState, useEffect } from "react";
import PencilIcon from "../assets/pencil.svg";
import CheckIcon from "../assets/check.svg";
import DeleteIcon from "../assets/trash.svg";

export default function ProductRow({ name, price, editingProduct, onEditProduct, onSaveProduct, onDeleteProduct, }) {

  const [editedName, setEditedName] = useState(name);
  const [editedPrice, setEditedPrice] = useState(price);

  const isEditing = editingProduct === name;

  useEffect(() => {
    if (isEditing) {
      setEditedName(name);
      setEditedPrice(price);
    }
  }, [isEditing, name, price]);

  return (
    <tr>
      <td>
        {isEditing ? (<input value={editedName} onChange={(e) => setEditedName(e.target.value)} />) : (name)}
      </td>
      <td>
        {isEditing ? (<input value={editedPrice} onChange={(e) => setEditedPrice(e.target.value)} />) : (price)}
      </td>
      <td>
        {isEditing ? (
          <button onClick={() => onSaveProduct(name, editedName, editedPrice)}>
            <img src={CheckIcon} alt="save" width="15" height="15" />
          </button>
        ) : (
          <>
            <button onClick={() => onEditProduct(name)}>
              <img src={PencilIcon} alt="edit" width="15" height="15" />
            </button>
            <button onClick={() => onDeleteProduct(name)}>
              <img src={DeleteIcon} alt="delete" width="15" height="15" />
            </button>
          </>
        )}
      </td>
    </tr>
  );
}
