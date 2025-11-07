import { useState } from "react";
import deleteIcon from "../assets/delete.svg";
import modificationIcon from "../assets/modification.svg";
import type { ProductRowProps } from "../types/Product";

export default function ProductRow({ name, price, onEditProduct, onDeleteProduct }: ProductRowProps) {
  const [isEditing, setIsEditing] = useState(false);
  // 수정한 값 
  const [draftName, setDraftName] = useState(name);
  const [draftPrice, setDraftPrice] = useState(price);
  // 수정 전 이름
  const [prevName, setPrevName] = useState(name);

  const startEditing = () => {
    setDraftName(name);
    setDraftPrice(price);
    setPrevName(name);
    setIsEditing(true);
  };

  const saveEditing = () => {
    onEditProduct({prevName, newName: draftName, newPrice: draftPrice});
    setIsEditing(false);
  };

  const cancelEditing = () => {
    setDraftName(name);
    setDraftPrice(price);
    setIsEditing(false);
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            autoFocus
            value={draftName}
            onChange={(e) => setDraftName(e.target.value)}
          />
        ) : (
          name
        )}
      </td>

      <td>
        {isEditing ? (
          <input
            value={draftPrice}
            onChange={(e) => setDraftPrice(e.target.value)}
          />
        ) : (
          price
        )}
      </td>

      <td>
        {isEditing ? (
          <>
            <button onClick={saveEditing}>Save</button>
            <button onClick={cancelEditing}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={startEditing}>
              <img src={modificationIcon} alt="edit" style={{ width: 20, height: 20 }} />
            </button>
            <button onClick={() => onDeleteProduct({name})}>
              <img src={deleteIcon} alt="delete" style={{ width: 20, height: 20 }} />
            </button>
          </>
        )}
      </td>
    </tr>
  );
}
