import React from "react";

export default function ProductRow({ name, price }) {
  // 실습:
  //   필수: onEditProduct를 통해 상품 정보 수정
  //   선택: onDeleteProduct를 통해 상품 삭제
  //   리팩토링까지 할 수 있으면 좋을 듯
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}
