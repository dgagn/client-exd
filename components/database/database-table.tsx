import React from 'react';
import useDatabase, { Database } from '../../hooks/use-database';
import classNames from 'classnames';
//import DatabaseEntry from './database-entry';
import dynamic from 'next/dynamic';

const DatabaseEntry = dynamic(() => import('./database-entry'));

type DatabaseTableProps = {
    className?: string;
    database: Database[];
};

export default function DatabaseTable({ className, database }: DatabaseTableProps) {
    const db = useDatabase();

    return database.length > 0 ? (
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
                    return <DatabaseEntry key={entry._id} database={entry} />;
                  })}
            </tbody>
        </table>
    ) : (
        <div>Aucun résultat <span aria-label='Emoji visage confus' role='img'>😕</span></div>
    );
}