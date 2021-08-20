import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

type TagProps = {
    onClick: () => any;
    isSelected: boolean;
};
export default function Tag({ children, onClick, isSelected }: PropsWithChildren<TagProps>) {
    const classes = classNames('rounded px-sm py-xs tag pointer', {
        'tag--selected': !isSelected,
    });

    return (
        <li aria-label={`Tag pour exclure ${children}`} className='mb-sm' >
            <button onClick={onClick} className={classes}>
                {children}
            </button>
        </li>
    );
}