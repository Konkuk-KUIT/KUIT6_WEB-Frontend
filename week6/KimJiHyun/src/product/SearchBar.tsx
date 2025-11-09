import { useId, useCallback, type ChangeEvent } from 'react';
import type { SearchBarProps } from '../types';

export default function SearchBar({
    filterText,
    onFilterTextChange,
    inStockOnly,
    onInStockOnlyChange
}: SearchBarProps) {
    const stockCheckboxId = useId();

    const handleFilterTextChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
        onFilterTextChange(event.target.value);
    }, [onFilterTextChange]);

    const handleInStockOnlyChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
        onInStockOnlyChange(event.target.checked);
    }, [onInStockOnlyChange]);

    return (
        <form>
            <input
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={handleFilterTextChange}
            />
            <br />
            <label htmlFor={stockCheckboxId}>
                <input
                    type="checkbox"
                    id={stockCheckboxId}
                    checked={inStockOnly}
                    onChange={handleInStockOnlyChange}
                />{' '}
                Only show products in stock
            </label>
        </form>
    );
}
