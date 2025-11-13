export interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export interface EditProductProps{
  prevName: string;
  newName: string;
  newPrice: string;
}

export interface DeleteProductProps{
  name: string;
}

export interface ProductTableProps {
    products: Product[];
    onEditProduct: (props: EditProductProps) => void;
    onDeleteProduct: (props: DeleteProductProps) => void;
}

export interface ProductRowProps{
    name: string;
    price: string;
    onEditProduct: (props: EditProductProps) => void;
    onDeleteProduct: (props: DeleteProductProps) => void;
}

export interface ProductCategoryRowProps{
    category: string;
}