import React, { useState } from "react";
import editImg from "../assets/edit.png";
import deleteImg from "../assets/delete.png";
import saveImg from "../assets/save.png";

export default function ProductRow({ name, price, onEditProduct, onDeleteProduct }) {
  // 실습:
  //   필수: onEditProduct를 통해 상품 정보 수정
  //   선택: onDeleteProduct를 통해 상품 삭제
  //   리팩토링까지 할 수 있으면 좋을 듯
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newPrice, setNewPrice] = useState(price);

  const handleSave = () => {
    onEditProduct(name, { name: newName, price: newPrice });
    setIsEditing(false);
  }

  const handleDelete = () => {
    onDeleteProduct(name);
  }

  return (
    <tr>
      <td>{isEditing ? (
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
          <button onClick={handleSave}><img src={saveImg} style={{width: "20px", height: "20px"}}/></button> 
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}><img src={editImg} style={{width: "20px", height: "20px"}}/></button>
            <button onClick={handleDelete}><img src={deleteImg} style={{width: "20px", height: "20px"}}/></button>
          </>
        )}
      </td>
    </tr>
  );
}
