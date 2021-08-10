import React from 'react';
import classNames from 'classnames';
import useStore from '../../store/use-store';
import Link from 'next/link';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

type GroupsTableProps = {
    className?: string;
    groupObj: {
        label: string;
        data: number;
    }[];
};

export default function GroupsTable({ className, groupObj }: GroupsTableProps) {
    const setFilterSearch = useStore((state) => state.setFilterSearch);
    const toggleOrderIncidentByGroup = useStore((state) => state.toggleOrderIncidentByGroup);
    const orderIncidentByGroup = useStore((state) => state.orderIncidentByGroup);
    const toggleOrderGroupByIncident = useStore((state) => state.toggleOrderGroupByIncident);
    const orderGroupByIncident = useStore((state) => state.orderGroupByIncident);

    const keys = [];
    const orders = [];

    return (
        <>
            <table className={classNames('table', className)}>
                <thead>
                    <tr className="table__heading-group">
                        <th className="table__heading w-full" onClick={toggleOrderIncidentByGroup}>
                            Groupe{' '}
                            <span>
                                {orderIncidentByGroup === 'desc' ? (
                                    <BiChevronUp />
                                ) : orderIncidentByGroup === 'asc' ? (
                                    <BiChevronDown />
                                ) : null}
                            </span>
                        </th>
                        <th className="table__heading pr-3xl" onClick={toggleOrderGroupByIncident}>
                            Nombre d&apos;incidents{' '}
                            <span>
                                {orderGroupByIncident === 'desc' ? (
                                    <BiChevronUp />
                                ) : orderGroupByIncident === 'asc' ? (
                                    <BiChevronDown />
                                ) : null}
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
                                    <td className="table__item" data-title={'Incidents'}>
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
