export function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
    return (
        <form className="search-bar">
            <input
                type="text"
                placeholder='Search...'
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
            ></input>
            <div>
                <input
                    type="checkbox"
                    id="checkbox"
                    value={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                ></input>
                <label htmlFor='checkbox'> Only show products in stock</label>
            </div>
        </form>
    )
}