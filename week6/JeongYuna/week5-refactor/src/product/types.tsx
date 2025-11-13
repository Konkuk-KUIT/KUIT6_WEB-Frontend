export type Price = string | number;

export type Category = "Fruits" | "Vegetables";

export type Product = {
    id: number,
    category: Category,
    price: Price,
    stocked: boolean,
    name: string
}

export type onUpdateProduct = {
    onEditProduct: (id: number, fields: {name: string, price: Price}) => void,
    onDeleteProduct: (id: number) => void
}

export type SearchBarProps = {
    filterText: string ,
    inStockOnly: boolean,
    onFilterTextChange : React.Dispatch<React.SetStateAction<string>>,
    onInStockOnlyChange : React.Dispatch<React.SetStateAction<boolean>>
}

export type ProductTableProps = {
    products: [string, Product[]][]
} & onUpdateProduct

export type ProductRowProps = {
    product: Product
} & onUpdateProduct