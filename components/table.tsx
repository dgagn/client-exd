import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

interface TableProps {
    className?: string;
    headers: JSX.Element;
    body: JSX.Element;
}

export default function Table({ className, headers, body }: TableProps) {
    return (
        <table className={classNames('table', className)}>
            <thead>
                <tr className="table__heading-group">{headers}</tr>
            </thead>
            <tbody>
                {body}
            </tbody>
        </table>
    );
}

interface TableHeaderProps {
    className?: string;
    order?: 'asc' | 'desc' | 'none';
    onClick?: () => void;
}

function TableHeader({ className, order, children, onClick }: PropsWithChildren<TableHeaderProps>) {
    return (
        <th onClick={onClick} className={classNames('table__heading', className)}>
            {children}{' '}
            <span>
                {order === 'desc' ? <BiChevronUp className='icon' /> : order === 'asc' ? <BiChevronDown className='icon' /> : <BiChevronDown className='hidden' />}
            </span>
        </th>
    );
}
