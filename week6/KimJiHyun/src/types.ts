// 데이터 모델 타입
export interface Product {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}

// SearchBar Props 타입
export interface SearchBarProps {
    filterText: string;
    onFilterTextChange: (text: string) => void;
    inStockOnly: boolean;
    onInStockOnlyChange: (inStockOnly: boolean) => void;
}

// ProductTable Props 타입
export interface ProductTableProps {
    products: Product[];
    onEditProduct: (originalProduct: Product, updatedProduct: Partial<Product>) => void;
    onDeleteProduct: (productToDelete: Product) => void;
}

// ProductRow Props 타입
export interface ProductRowProps extends Product {
    onEditProduct: (originalProduct: Product, updatedProduct: Partial<Product>) => void;
    onDeleteProduct: (productToDelete: Product) => void;
}

// ProductCategoryRow Props 타입
export interface ProductCategoryRowProps {
    category: string;
}
