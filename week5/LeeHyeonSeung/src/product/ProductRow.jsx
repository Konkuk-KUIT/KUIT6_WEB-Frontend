import React from "react";

export default function ProductRow({ product, onEditProduct, onDeleteProduct }) {
  // 실습:
  //   필수: onEditProduct를 통해 상품 정보 수정
  //   선택: onDeleteProduct를 통해 상품 삭제
  //   리팩토링까지 할 수 있으면 좋을 듯
  const { name, price, stocked } = product;
  
  const nameStyle = {
    color: stocked ? 'inherit' : 'red'
  };

  return (
    <tr>
      <td style={nameStyle}>{name}</td>
      <td>{price}</td>
      <td>
        <button onClick={() => onEditProduct(product)}>수정</button>
      </td>
      <td>
        <button onClick={() => onDeleteProduct(product.id)}>삭제</button>
      </td>
    </tr>
  );
}