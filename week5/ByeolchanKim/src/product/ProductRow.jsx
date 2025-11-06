import React, { useState } from "react";

export function ProductRowList({ products, ...props }) {
  return products.map((product) => (
    <ProductRow key={product.name} {...product} {...props} />
  ));
}

export default function ProductRow({ name, price, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [product, setProduct] = useState({ name, price });
  // 실습:
  //   필수: onEditProduct를 통해 상품 정보 수정
  //   선택: onDeleteProduct를 통해 상품 삭제
  //   리팩토링까지 할 수 있으면 좋을 듯

  const handleButtonEdit = () => {
    setIsEditing(true);
  };

  const handleButtonSave = () => {
    onEdit(name, product);
    setIsEditing(false);
  };

  const handleButtonDelete = () => {
    onDelete(name);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <tr>
        <td>
          <input
            type="text"
            value={product.name}
            onChange={(event) =>
              setProduct((prev) => ({ ...prev, name: event.target.value }))
            }
          />
        </td>
        <td>
          <input
            type="text"
            value={product.price}
            onChange={(event) =>
              setProduct((prev) => ({ ...prev, price: event.target.value }))
            }
          />
        </td>
        <td>
          <button type="button" onClick={handleButtonSave}>
            ✅
          </button>
          <button type="button" onClick={handleButtonDelete}>
            🗑️
          </button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <button type="button" onClick={handleButtonEdit}>
          ✏️
        </button>
        <button type="button" onClick={handleButtonDelete}>
          🗑️
        </button>
      </td>
    </tr>
  );
}
