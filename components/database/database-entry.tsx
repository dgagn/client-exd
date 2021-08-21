import React, { MouseEvent, useCallback, useMemo } from 'react';
import { Database } from '../../utils/fetch-database';
import classNames from 'classnames';
import Link from 'next/link';
import useStore, { StoreState } from '../../store/use-store';
import shallow from 'zustand/shallow';
import { BsFillBookmarkFill, BsFillEyeFill } from 'react-icons/bs';
import usePersistantStore, { PersistantStoreState } from '../../store/use-persistant-store';
import { useMediaQuery } from 'beautiful-react-hooks';
import IconCircle from '../icon-circle';
import { flatten } from "lodash";

type DatabaseEntry = {
    database: Database;
};

const databaseState = ({ id }: StoreState) => ({ id });
const databasePersistState = ({ viewedIds, bookmarkIds, liste }: PersistantStoreState) => ({
    viewedIds,
    bookmarkIds,
    liste
});

export default function DatabaseEntry({ database }: DatabaseEntry) {
    const { id } = useStore(databaseState, shallow);
    const { viewedIds, bookmarkIds, liste } = usePersistantStore(databasePersistState, shallow);

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

    const handleMiddleMouseClick = useCallback(
        (e: MouseEvent<HTMLTableRowElement>) => {
            const middleClick = e.button === 1;
            if (middleClick) {
                window.open(`/evenement/${database._id}`, '_blank');
            }
        },
        [database._id]
    );

    const isSmall = useMediaQuery('(max-width: 64rem)');

    const isInList = useMemo(() => {
        const allIds = flatten(liste.map(l => l.ids))
        return allIds.includes(database._id)
    }, [database._id, liste])

    return (
        <Link href={`/evenement/${database._id}`} passHref>
            <tr
                className={classNames('table__group relative', {
                    'is-selected': id === database._id,
                })}
                onMouseDown={handleMiddleMouseClick}
                id={database._id}
            >
                <td className="table__item" data-title={'Date'}>
                    {database.date}{' '}
                    {isSmall && (
                        <div className="flex gap-x-3xs absolute top-sm right-sm">
                            {viewedIds.includes(database._id) && (
                                <IconCircle color={'primary'}>
                                    <BsFillEyeFill />
                                </IconCircle>
                            )}
                            {bookmarkIds.includes(database._id) && (
                                <IconCircle color={'warning'}>
                                    <BsFillBookmarkFill />
                                </IconCircle>
                            )}
                        </div>
                    )}
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
                    {!isSmall && (
                        <div className="flex gap-x-3xs absolute top-sm right-sm">
                            {viewedIds.includes(database._id) && (
                                <IconCircle color={'primary'}>
                                    <BsFillEyeFill />
                                </IconCircle>
                            )}
                            {isInList && (
                                <IconCircle color={'warning'}>
                                    <BsFillBookmarkFill />
                                </IconCircle>
                            )}
                        </div>
                    )}

                    {database.evenement}
                </td>
            </tr>
        </Link>
    );
}