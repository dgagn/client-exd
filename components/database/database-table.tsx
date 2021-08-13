import React from 'react';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import useStore, { StoreState } from '../../store/use-store';
import { Database } from '../../utils/fetch-database';
import shallow from 'zustand/shallow';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const DatabaseEntry = dynamic(() => import('./database-entry'));

type DatabaseTableProps = {
    className?: string;
    database: Database[];
};

const tableState = ({
    toggleOrderByDate,
    orderByDate,
    orderByDegreeOfViolence,
    toggleOrderByDegreeOfViolence,
    orderByEvents,
    toggleOrderByEvents,
    orderByGroupsInvolved,
    toggleOrderByGroupsInvolved,
    toggleOrderByType,
    orderByType,
}: StoreState) => ({
    toggleOrderByDate,
    orderByDate,
    toggleOrderByDegreeOfViolence,
    orderByDegreeOfViolence,
    orderByEvents,
    toggleOrderByEvents,
    orderByGroupsInvolved,
    toggleOrderByGroupsInvolved,
    toggleOrderByType,
    orderByType,
});

export default function DatabaseTable({ className, database }: DatabaseTableProps) {
    const {
        toggleOrderByDate,
        orderByDate,
        toggleOrderByDegreeOfViolence,
        orderByDegreeOfViolence,
        orderByEvents,
        toggleOrderByEvents,
        orderByGroupsInvolved,
        toggleOrderByGroupsInvolved,
        toggleOrderByType,
        orderByType,
    } = useStore(tableState, shallow);

    return database.length > 0 ? (
        <table className={classNames('table', className)}>
            <thead>
                <tr className="table__heading-group">
                    <th className="table__heading" onClick={toggleOrderByDate}>
                        Date
                        <span>
                            {orderByDate === 'desc' ? (
                                <BiChevronUp className="icon" />
                            ) : orderByDate === 'asc' ? (
                                <BiChevronDown className="icon" />
                            ) : null}
                        </span>
                    </th>
                    <th className="table__heading" onClick={toggleOrderByType}>
                        Type d’événement{' '}
                        <span>
                            {orderByType === 'desc' ? (
                                <BiChevronUp className="icon" />
                            ) : orderByType === 'asc' ? (
                                <BiChevronDown className="icon" />
                            ) : null}
                        </span>
                    </th>
                    <th
                        className="table__heading degree-violence"
                        onClick={toggleOrderByDegreeOfViolence}
                    >
                        Degré de violence
                        <span>
                            {orderByDegreeOfViolence === 'desc' ? (
                                <BiChevronUp className="icon" />
                            ) : orderByDegreeOfViolence === 'asc' ? (
                                <BiChevronDown className="icon" />
                            ) : null}
                        </span>
                    </th>
                    <th
                        className="table__heading groups-involved"
                        onClick={toggleOrderByGroupsInvolved}
                    >
                        Groupe(s) impliqué(s){' '}
                        <span>
                            {orderByGroupsInvolved === 'desc' ? (
                                <BiChevronUp className="icon" />
                            ) : orderByGroupsInvolved === 'asc' ? (
                                <BiChevronDown className="icon" />
                            ) : null}
                        </span>
                    </th>
                    <th className="table__heading events" onClick={toggleOrderByEvents}>
                        Événement{' '}
                        <span>
                            {orderByEvents === 'desc' ? (
                                <BiChevronUp className="icon" />
                            ) : orderByEvents === 'asc' ? (
                                <BiChevronDown className="icon" />
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