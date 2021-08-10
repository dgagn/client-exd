import React, { useMemo } from 'react';
import { Database } from '../../utils/fetch-database';
import classNames from 'classnames';
import Link from 'next/link';

type DatabaseEntry = {
    database: Database;
};
export default function DatabaseEntry({ database }: DatabaseEntry) {
    const degreeOfViolenceClasses = classNames('table__item', {
        'text-success-800': database.degreViolence.includes('Aucune'),
        'text-warning-800': database.degreViolence.includes('faible'),
        'text-caution-800': database.degreViolence.includes('moyenne'),
        'text-error-800': database.degreViolence.includes('Élevée'),
    });

    const circle = classNames('circle', 'mr-sm', {
        'bg-success-500': database.degreViolence.includes('Aucune'),
        'bg-warning-500': database.degreViolence.includes('faible'),
        'bg-caution-500': database.degreViolence.includes('moyenne'),
        'bg-error-500': database.degreViolence.includes('Élevée'),
    });

    const involvedGroups = useMemo(
        () => database.groupeImplique.split('\n'),
        [database.groupeImplique]
    );

    return (
        <Link href={`/incident/${database._id}`} passHref>
            <tr className="table__group">
                <td className="table__item" data-title={'Date'}>
                    {database.date}
                </td>
                <td className="table__item" data-title={'Type'}>
                    {database.type}
                </td>
                <td data-title={'Degré'} className={degreeOfViolenceClasses}>
                    <div className={circle} />
                    {database.degreViolence}
                </td>
                <td className="table__item" data-title={'Groupes'}>
                    {involvedGroups.map((groupe, index) => (
                        <div
                            key={index}
                            className={classNames({
                                'font-italic': index === 0,
                            })}
                        >
                            {groupe}
                        </div>
                    ))}
                </td>
                <td className="table__item" data-title={'Événement'}>
                    {database.evenement}
                </td>
            </tr>
        </Link>
    );
}