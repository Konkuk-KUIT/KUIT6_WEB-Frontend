export function SearchBar() {
    return (
        <form className="search-bar">
            <input type="text" placeholder='Search...'></input>
            <div>
                <input type="checkbox" id="checkbox"></input>
                <label for='checkbox'> Only show products in stock</label>
            </div>
        </form>
    )
}