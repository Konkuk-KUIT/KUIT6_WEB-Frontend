import React from "react";

export default function ProductRow({ name, price, onEditProduct, onDeleteProduct }) {
  // 실습:
  //   필수: onEditProduct를 통해 상품 정보 수정
  //   선택: onDeleteProduct를 통해 상품 삭제
  //   리팩토링까지 할 수 있으면 좋을 듯
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        {/* 수정 버튼 */}
        <button onClick={() => onEditProduct && onEditProduct(name)}>
          <img src="/edit.svg" alt="edit" width="15" height="15" />
        </button>

        {/* 삭제 버튼 */}
        <button onClick={() => onDeleteProduct && onDeleteProduct(name)}>
          <img src="/delete.svg" alt="delete" width="15" height="15" />
        </button>
      </td>
    </tr>
  );
}
