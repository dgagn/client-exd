import React, { ChangeEvent } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

type SearchInputProps = {
    className?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => any
    value: string
}

export default function SearchInput({ className, onChange, value }: SearchInputProps) {
    return (
            <div className={className}>
                <BiSearchAlt className='icon-search' />
                <input type='text' className='form__control pl-xl' onChange={onChange} value={value} />
            </div>
    );
}