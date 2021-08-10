import React, { useCallback } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import useStore, { StoreState } from "../store/use-store";
import shallow from "zustand/shallow";

type SearchInputProps = {
    className?: string;
};

const searchFilters = ({ filterSearch, handleFilterSearch }: StoreState) => ({ filterSearch, handleFilterSearch })

export default function SearchInput({ className }: SearchInputProps) {
    const { filterSearch, handleFilterSearch } = useStore(searchFilters, shallow);

    return (
        <div className={className}>
            <BiSearchAlt className="icon-search" />
            <div>
                <label htmlFor="filterSearch">Barre de recherche</label>
                <input
                    type="text"
                    className="form__control pl-xl mt-2xs"
                    onChange={handleFilterSearch}
                    value={filterSearch}
                    id="filterSearch"
                />
            </div>
        </div>
    );
}