import React, { useEffect } from 'react';
import classNames from 'classnames';
import useStore, { StoreState } from '../../store/use-store';
import Link from 'next/link';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import shallow from 'zustand/shallow';

type GroupsTableProps = {
    className?: string;
    groupObj: {
        label: string;
        data: number;
    }[];
};

const groupsState = ({
    setFilterSearch,
    toggleOrderEventsByData,
    toggleOrderEventsByGroupsInvolved,
    orderEventsByGroupsInvolved,
    orderEventsByData,
    setId,
}: StoreState) => ({
    setFilterSearch,
    toggleOrderEventsByData,
    toggleOrderEventsByGroupsInvolved,
    orderEventsByGroupsInvolved,
    orderEventsByData,
    setId,
});

export default function GroupsTable({ className, groupObj }: GroupsTableProps) {
    const {
        setFilterSearch,
        toggleOrderEventsByData,
        toggleOrderEventsByGroupsInvolved,
        orderEventsByGroupsInvolved,
        orderEventsByData,
        setId,
    } = useStore(groupsState, shallow);

    useEffect(() => {
        setId('');
    }, []);

    return (
        <>
            <table className={classNames('table', className)}>
                <thead>
                    <tr className="table__heading-group">
                        <th
                            className="table__heading w-full"
                            onClick={toggleOrderEventsByGroupsInvolved}
                        >
                            Groupe
                            <span>
                                {orderEventsByGroupsInvolved === 'desc' ? (
                                    <BiChevronUp className="icon" />
                                ) : orderEventsByGroupsInvolved === 'asc' ? (
                                    <BiChevronDown className="icon" />
                                ) : (
                                    <BiChevronUp className="hidden" />
                                )}
                            </span>
                        </th>
                        <th className="table__heading pr-3xl" onClick={toggleOrderEventsByData}>
                            Nombre d&apos;événements{' '}
                            <span>
                                {orderEventsByData === 'desc' ? (
                                    <BiChevronUp className="icon" />
                                ) : orderEventsByData === 'asc' ? (
                                    <BiChevronDown className="icon" />
                                ) : (
                                    <BiChevronUp className="hidden" />
                                )}
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {groupObj.map((group) => {
                        return (
                            <Link href="/" key={group.label} passHref>
                                <tr
                                    key={group.label}
                                    onClick={() => setFilterSearch(group.label)}
                                    className="pointer table__group"
                                >
                                    <td className="table__item" data-title={'Groupe'}>
                                        {group.label}
                                    </td>
                                    <td className="table__item" data-title={'Événement'}>
                                        {group.data}
                                    </td>
                                </tr>
                            </Link>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
