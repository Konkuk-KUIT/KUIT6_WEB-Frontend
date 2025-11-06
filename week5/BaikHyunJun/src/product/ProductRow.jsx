import React, { useState } from "react";

export default function ProductRow({ name, price, stocked, category, onEditProduct, onDeleteProduct }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedPrice, setEditedPrice] = useState(price);
  const [editedStocked, setEditedStocked] = useState(stocked);

  // 필수: 상품 정보 수정 처리
  const handleSave = () => {
    onEditProduct(name, {
      name: editedName,
      price: editedPrice,
      stocked: editedStocked
    });
    setIsEditing(false);
  };

  // 선택: 상품 삭제 처리
  const handleDelete = () => {
    if (window.confirm(`정말 ${name}을(를) 삭제하시겠습니까?`)) {
      onDeleteProduct(name);
    }
  };

  if (isEditing) {
    return (
      <tr>
        <td>
          <input 
            type="text" 
            value={editedName} 
            onChange={(e) => setEditedName(e.target.value)}
          />
        </td>
        <td>
          <input 
            type="text" 
            value={editedPrice} 
            onChange={(e) => setEditedPrice(e.target.value)}
          />
        </td>
        <td>
          <input 
            type="checkbox" 
            checked={editedStocked} 
            onChange={(e) => setEditedStocked(e.target.checked)}
          />
        </td>
        <td>
          <button onClick={handleSave}>저장</button>
          <button onClick={() => setIsEditing(false)}>취소</button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td style={{ color: stocked ? 'black' : 'red' }}>{name}</td>
      <td>{price}</td>
      <td>
        <button onClick={() => setIsEditing(true)}>수정</button>
        <button onClick={handleDelete}>삭제</button>
      </td>
    </tr>
  );
}
