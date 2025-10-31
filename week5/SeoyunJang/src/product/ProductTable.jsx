import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products,onEditProduct, onDeleteProduct, onSaveProduct, editingProduct, }) {
  const productTableByCategory = Object.groupBy(
    products,
    ({ category }) => category
  );
  // 콜백 함수의 반환 값을 키로 하고, value 는 product 가 담긴 배열
  // Fruits : Array(3) 0:{category:fruits, price:$1, name:apple stocked:true} 이렇게 -> 오브젝트임

  const productsByCategory = Object.entries(productTableByCategory);
  // category - product 로 매핑 된 오브젝트를 [category, product 배열]로 변환

  return (
    <table cellPadding="6" style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {productsByCategory.map(([category, products]) => ( //map 을 사용해서 카테고리에 들어있는 값은 product category row 에 주고
          <React.Fragment key={category}> {/* <></>로도 가능한 그냥 빈 요소 컨테이너 */}
            <ProductCategoryRow category={category} />
            {products.map((product) => ( //Products 는 products row 로 렌더링
              <ProductRow
                key={product.name} //React 반복 요소 구분용
                {...product} //name, price, stocked, category 한 번에 전달
                onEditProduct={onEditProduct} //상품 수정 함수 전달
                onDeleteProduct={onDeleteProduct} //상품 삭제 함수 전달
                onSaveProduct={onSaveProduct} //상품 저장 함수 전달
                editingProduct={editingProduct} //상품 저장중 함수 전달
              />
            ))}
          </React.Fragment> // map, some, filter => key 를 가장 바깥족 jsx 에 사용하자!
        ))}
      </tbody>
    </table>
  );
}
