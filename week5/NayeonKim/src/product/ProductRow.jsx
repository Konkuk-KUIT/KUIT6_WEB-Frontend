import React, { useState } from "react";
import editIcon from "../assets/edit_icon.png";
import deleteIcon from "../assets/delete_icon.png";
import checkIcon from "../assets/check_icon.png";
import cancelIcon from "../assets/cancel_icon.png";

export default function ProductRow({ name, price, onEditProduct, onDeleteProduct }) {
  // 실습:
  //   필수: onEditProduct를 통해 상품 정보 수정
  //   선택: onDeleteProduct를 통해 상품 삭제
  //   리팩토링까지 할 수 있으면 좋을 듯

  const [newName, setNewName] = useState(name);
  const [newPrice, setNewPrice] = useState(price);
  const [isEditing, setIsEditing] = useState(false);

  const editOnClick = () => setIsEditing(true);
  const deleteOnClick = () => onDeleteProduct(name);
  const saveOnClick = () =>  {
    onEditProduct(name, {name: newName, price: newPrice});
    setIsEditing(false);
  }
  const cancelOnClick = () => {
    setIsEditing(false);
    setNewName(name);
    setNewPrice(price);
  }

  return (
    <tr>
      <td>
        {
          isEditing ? (
            <input value={newName}
            onChange={(e) => setNewName(e.target.value)}/>
          ) : (name)
        }
      </td>
      <td>
        {
          isEditing ? (
            <input value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}/>
          ) : (price)
        }
      </td>
      <td>
        {
          isEditing ? (
            <>
              <button onClick={saveOnClick}>
                <img src={checkIcon} alt="save"/>
              </button>
              <button onClick={cancelOnClick}>
                <img src={cancelIcon} alt="cancel"/>
              </button>
            </>
          ) : (
            <>
              <button onClick={editOnClick}>
                <img src={editIcon} alt="edit"/>
              </button>
              <button onClick={deleteOnClick}>
                <img src={deleteIcon} alt="delete"/>
              </button>
            </>
          )
        }
      </td>
    </tr>
    
  );
}
