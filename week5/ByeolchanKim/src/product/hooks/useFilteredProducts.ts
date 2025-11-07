import { useProducts } from "./useProducts";

export function useFilteredProducts({ filterText, inStockOnly }) {
  const { products, edit, remove } = useProducts();

  const filteredProducts = products.filter((product) => {
    const lowerCaseProductName = product.name.toLowerCase();
    const lowerCaseFilterText = filterText.toLowerCase();
    const hasPassedTextFilter =
      filterText === "" || lowerCaseProductName.includes(lowerCaseFilterText);

    const hasPassedStockFilter = !inStockOnly || product.stocked === true;
    return hasPassedTextFilter && hasPassedStockFilter;
  });

  return { filteredProducts, edit, remove };
}
