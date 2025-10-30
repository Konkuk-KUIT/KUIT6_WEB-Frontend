import React from "react";

export default function ProductRow({
  name,
  price,
  onEditProduct,
  onDeleteProduct,
}) {

  return (
    <tr>
      <td>{name}</td>

      <td>{price}</td>

      <td>
        <button
          onClick={() => onEditProduct(name)}
        >
          수정
        </button>
        <button
          onClick={() => onDeleteProduct(name)}
        >
          삭제
        </button>
      </td>
    </tr>
  );
}
