import React from "react";

export default function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan={4}>{category}</th> {/*Edit, Delete 추가*/}
    </tr>
  );
}