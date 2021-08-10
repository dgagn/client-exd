import React from 'react';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import useStore, { StoreState } from '../../store/use-store';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Database } from '../../utils/fetch-database';
import shallow from 'zustand/shallow';

const DatabaseEntry = dynamic(() => import('./database-entry'));

type DatabaseTableProps = {
    className?: string;
    database: Database[];
};

const databaseTableSelector = ({
    toggleOrderByDate,
    orderByDate,
    toggleOrderByType,
    orderByType,
    orderByEvents,
    orderByDegreeOfViolence,
    toggleOrderByEvents,
    toggleOrderByGroupsInvolved,
    orderByGroupsInvolved,
    toggleOrderByDegreeOfViolence,
}: StoreState) => ({
    toggleOrderByDate,
    orderByDate,
    toggleOrderByType,
    orderByType,
    orderByEvents,
    orderByDegreeOfViolence,
    toggleOrderByEvents,
    toggleOrderByGroupsInvolved,
    orderByGroupsInvolved,
    toggleOrderByDegreeOfViolence,
});

export default function DatabaseTable({ className, database }: DatabaseTableProps) {
    const {
        toggleOrderByDate,
        orderByDate,
        toggleOrderByType,
        orderByType,
        orderByEvents,
        orderByDegreeOfViolence,
        toggleOrderByEvents,
        toggleOrderByGroupsInvolved,
        orderByGroupsInvolved,
        toggleOrderByDegreeOfViolence,
    } = useStore(databaseTableSelector, shallow);

    return database.length > 0 ? (
        <table className={classNames('table', className)}>
            <thead>
                <tr className="table__heading-group">
                    <th
                        className="table__heading"
                        onClick={() => {
                            toggleOrderByDate();
                        }}
                    >
                        Date{' '}
                        <span>
                            {orderByDate === 'desc' ? (
                                <BiChevronUp className="icon" />
                            ) : orderByDate === 'asc' ? (
                                <BiChevronDown className="icon" />
                            ) : (
                                <BiChevronDown className="icon hidden" />
                            )}
                        </span>
                    </th>
                    <th
                        className="table__heading"
                        onClick={() => {
                            toggleOrderByType();
                        }}
                    >
                        Type d’événement{' '}
                        <span>
                            {orderByType === 'desc' ? (
                                <BiChevronUp />
                            ) : orderByType === 'asc' ? (
                                <BiChevronDown />
                            ) : null}
                        </span>
                    </th>
                    <th
                        className="table__heading"
                        onClick={() => {
                            toggleOrderByDegreeOfViolence();
                        }}
                    >
                        Degré de violence{' '}
                        <span>
                            {orderByDegreeOfViolence === 'desc' ? (
                                <BiChevronUp />
                            ) : orderByDegreeOfViolence === 'asc' ? (
                                <BiChevronDown />
                            ) : null}
                        </span>
                    </th>
                    <th
                        className="table__heading"
                        onClick={() => {
                            toggleOrderByGroupsInvolved();
                        }}
                    >
                        Groupe(s) impliqué(s){' '}
                        <span>
                            {orderByGroupsInvolved === 'desc' ? (
                                <BiChevronUp />
                            ) : orderByGroupsInvolved === 'asc' ? (
                                <BiChevronDown />
                            ) : null}
                        </span>
                    </th>
                    <th
                        className="table__heading"
                        onClick={() => {
                            toggleOrderByEvents();
                        }}
                    >
                        Événement{' '}
                        <span>
                            {orderByEvents === 'desc' ? (
                                <BiChevronUp />
                            ) : orderByEvents === 'asc' ? (
                                <BiChevronDown />
                            ) : null}
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {database.map((entry) => {
                    return <DatabaseEntry key={entry._id} database={entry} />;
                })}
            </tbody>
        </table>
    ) : (
        <div>
            Aucun résultat{' '}
            <span aria-label="Emoji visage confus" role="img">
                😕
            </span>
        </div>
    );
}