import React from 'react';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import useStore from "../../store/use-store";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { Database } from '../../utils/database-fetch';

const DatabaseEntry = dynamic(() => import('./database-entry'));

type DatabaseTableProps = {
    className?: string;
    database: Database[];
};

export default function DatabaseTable({ className, database }: DatabaseTableProps) {
    const toggleOrderByDate = useStore((state) => state.toggleOrderByDate);
    const orderByDate = useStore((state) => state.orderByDate);
    const toggleOrderByType = useStore((state) => state.toggleOrderByType);
    const orderByType = useStore((state) => state.orderByType);
    const orderByEvents = useStore((state) => state.orderByEvents);
    const orderByDegreeOfViolence = useStore((state) => state.orderByDegreeOfViolence);
    const toggleOrderByEvents = useStore((state) => state.toggleOrderByEvents);
    const toggleOrderByGroupsInvolved = useStore((state) => state.toggleOrderByGroupsInvolved);
    const orderByGroupsInvolved = useStore((state) => state.orderByGroupsInvolved);
    const toggleOrderByDegreeOfViolence = useStore((state) => state.toggleOrderByDegreeOfViolence);


    return database.length > 0 ? (
        <table className={classNames('table', className)}>
            <thead>
                <tr className="table__heading-group">
                    <th className="table__heading" onClick={() => {
                        toggleOrderByDate()
                    }}>Date <span>{orderByDate === 'desc' ? <BiChevronUp /> : orderByDate === 'asc' ? <BiChevronDown /> : null}</span></th>
                    <th className="table__heading" onClick={() => {
                        toggleOrderByType()
                    }}>Type d’événement <span>{orderByType === 'desc' ? <BiChevronUp /> : orderByType === 'asc' ? <BiChevronDown /> : null}</span></th>
                    <th className="table__heading" onClick={() => {
                        toggleOrderByDegreeOfViolence()
                    }}>Degré de violence <span>{orderByDegreeOfViolence === 'desc' ? <BiChevronUp /> : orderByDegreeOfViolence === 'asc' ? <BiChevronDown /> : null}</span></th>
                    <th className="table__heading" onClick={() => {
                        toggleOrderByGroupsInvolved()
                    }}>Groupe(s) impliqué(s) <span>{orderByGroupsInvolved === 'desc' ? <BiChevronUp /> : orderByGroupsInvolved === 'asc' ? <BiChevronDown /> : null}</span></th>
                    <th className="table__heading" onClick={() => {
                        toggleOrderByEvents()
                    }}>Événement <span>{orderByEvents === 'desc' ? <BiChevronUp /> : orderByEvents === 'asc' ? <BiChevronDown /> : null}</span></th>
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