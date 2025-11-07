import { useState } from "react";
import { INITIAL_PRODUCT_LIST } from "../constants/product";

export function useProducts() {
  const [products, setProducts] = useState(INITIAL_PRODUCT_LIST);

  const edit = (targetName, newProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) => ({
        ...prevProduct,
        ...(prevProduct.name === targetName ? newProduct : {}),
      }))
    );
  };

  const remove = (targetName) => {
    setProducts((prevProducts) =>
      prevProducts.filter((prevProduct) => prevProduct.name !== targetName)
    );
  };

  return { products, edit, remove };
}
