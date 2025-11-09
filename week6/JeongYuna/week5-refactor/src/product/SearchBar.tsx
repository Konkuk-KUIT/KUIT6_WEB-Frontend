import type { SearchBarProps } from "./types";

export function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange } : SearchBarProps)
{
    return (
        <form className="search-bar">
            <input
                type="text"
                placeholder='Search...'
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
            />
            <div>
                <input
                    type="checkbox"
                    id="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                />
                <label htmlFor='checkbox'> Only show products in stock</label>
            </div>
        </form>
    )
}