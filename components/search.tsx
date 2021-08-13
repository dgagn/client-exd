import React, { ChangeEvent } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

type SearchInputProps = {
    className?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    id: string;
};

export default function Search({ className, value, onChange, id }: SearchInputProps) {
    return (
        <div className={className}>
            <BiSearchAlt className="icon-search" />
            <div>
                <label htmlFor={id}>Barre de recherche</label>
                <input
                    type="text"
                    className="form__control pl-xl mt-2xs"
                    onChange={onChange}
                    value={value}
                    id={id}
                />
            </div>
        </div>
    );
}