import { useState } from "react";

export default function ProductRow({
  name,
  price,
  onEditProduct,
  onSaveProduct,
  onDeleteProduct,
  editingProduct,
}) {
  const [editedName, setEditedName] = useState(name);
  const [editedPrice, setEditedPrice] = useState(price);

  const isEditing = editingProduct === name; // 현재 수정 중인 상품인지 판별

  return (
    <tr>
      
      <td>
        { isEditing ? ( <input value={editedName} onChange={(e) => setEditedName(e.target.value)}/>) : (name)}
      </td>
      <td>
        { isEditing ? ( <input value={editedPrice} onChange={(e) => setEditedPrice(e.target.value)}/>) : (price)}
      </td>

      <td>
        {isEditing ? (
          <>
            {/* 저장 버튼 */}
            <button onClick={() => onSaveProduct(name, editedName, editedPrice)}>
              <img src="/save.svg" alt="save" width="15" height="15" />
            </button>
          </>
        ) : (
          <>
            {/* 수정 버튼 */}
            <button onClick={() => onEditProduct(name)}>
              <img src="/edit.svg" alt="edit" width="15" height="15" />
            </button>

            {/* 삭제 버튼 */}
            <button onClick={() => onDeleteProduct(name)}>
              <img src="/delete.svg" alt="delete" width="15" height="15" />
            </button>
          </>
        )}
      </td>
    </tr>
  );
}
