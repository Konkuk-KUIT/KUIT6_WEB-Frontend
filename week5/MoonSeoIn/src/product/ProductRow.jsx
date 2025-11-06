import React, { useState } from "react";

export default function ProductRow({ product, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(product.name);
  const [newPrice, setNewPrice] = useState(product.price);

  // 저장
  const save = () => {
    onEdit(product.name, newName, newPrice);
    setIsEditing(false);
  };

  // 취소
  const cancel = () => {
    setNewName(product.name);
    setNewPrice(product.price);
    setIsEditing(false);
  };

  // 수정 모드일 때
  if (isEditing) {
    return (
      <tr>
        <td>
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </td>
        <td>
          <input value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
        </td>
        <td>
          <button onClick={save}>저장</button>
          <button onClick={cancel}>취소</button>
        </td>
      </tr>
    );
  }

  // 일반 모드일 때
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <button onClick={() => setIsEditing(true)}>수정</button>
        <button onClick={() => onDelete(product.name)}>삭제</button>
      </td>
    </tr>
  );
}
