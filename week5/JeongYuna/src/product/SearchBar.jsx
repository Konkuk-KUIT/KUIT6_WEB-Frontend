export function SearchBar({ filterText, inStockOnly }) {
    return (
        <form className="search-bar">
            <input type="text" placeholder='Search...' value={filterText}></input>
            <div>
                <input type="checkbox" id="checkbox" value={inStockOnly}></input>
                <label htmlFor='checkbox'> Only show products in stock</label>
            </div>
        </form>
    )
}