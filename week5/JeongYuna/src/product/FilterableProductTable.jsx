import { SearchBar } from './SearchBar'
import { ProductTable } from './ProductTable'

export function FilterableProductTable({products}) {
    return (
       <div className='content'>
        <SearchBar />
        <ProductTable products={products}/>
       </ div>
    )
}
