import React, { ChangeEvent, useCallback } from "react";
import { BiSearchAlt } from 'react-icons/bi';
import useStore from "../store/use-store";

type SearchInputProps = {
    className?: string
}

export default function SearchInput({ className }: SearchInputProps) {
    const filterSearch = useStore(state => state.filterSearch)
    const handleFilterSearch = useStore(useCallback(state => state.handleFilterSearch, []))

    return (
            <div className={className}>
                <BiSearchAlt className='icon-search' />
                <input type='text' className='form__control pl-xl' onChange={handleFilterSearch} value={filterSearch} />
            </div>
    );
}