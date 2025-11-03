import React, { useState } from "react";

// 실습:
//  필수 - onEditProduct를 통해 상품 정보 수정
//  선택 - onDeleteProduct를 통해 상품 삭제
function ProductRow({ name, price, onEditProduct, onDeleteProduct }) {
  // 수정여부, 입력된 수정값 관리
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newPrice, setNewPrice] = useState(price);

  // 저장 버튼 클릭 시 수정 반영
  const handleSave = () => {
    onEditProduct(name, { name: newName, price: newPrice });
    setIsEditing(false);
  };

  const handleDelete = () => {
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
          <button onClick={handleSave}>저장</button>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>수정</button>
            <button onClick={handleDelete}>삭제</button>
          </>
        )}
      </td>
    </tr>
  );
}

export default ProductRow;
