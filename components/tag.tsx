import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

type TagProps = {
    onClick: () => any;
    isSelected: boolean;
};
export default function Tag({ children, onClick, isSelected }: PropsWithChildren<TagProps>) {
    const classes = classNames('rounded px-sm py-3xs tag pointer', {
        'bg-contrast-100': isSelected,
        'tag--selected': !isSelected,
        'bg-error-200': !isSelected,
    });

    return (
        <li aria-label={`Tag pour exclure ${children}`}>
            <button onClick={onClick} className={classes}>
                {children}
            </button>
        </li>
    );
}