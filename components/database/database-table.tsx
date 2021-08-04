import React, { useCallback, useRef } from 'react';
import { Database } from '../../hooks/use-database';
import { useVirtual } from 'react-virtual';
import classNames from 'classnames';
import DatabaseEntry from './database-entry';

type DatabaseTableProps = {
    className: string;
    database: Database[];
};
export default function DatabaseTable({ className, database }: DatabaseTableProps) {
    const parentRef = useRef();

    const rowVirtualizer = useVirtual({
        size: database.length,
        parentRef: parentRef,
        estimateSize: useCallback(() => 100, []),
        overscan: 5,
    });

    return (
        <table className={classNames('table', className)}>
            <thead>
                <tr className="table__heading-group">
                    <th className="table__heading">Date</th>
                    <th className="table__heading">Type d’événement</th>
                    <th className="table__heading">Degré de violence</th>
                    <th className="table__heading">Groupe(s) impliqué(s)</th>
                    <th className="table__heading">Événement</th>
                </tr>
            </thead>
            <tbody>
                {database.map((entry) => {
                    return (
                            <DatabaseEntry key={entry._id} database={entry} />
                    )
                })}
            </tbody>
        </table>
    );
}