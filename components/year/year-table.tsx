import React from 'react';
import classNames from 'classnames';
import useStore from '../../store/use-store';
import Link from 'next/link';

type GroupsTableProps = {
    className?: string;
    groupObj: {
        label: string;
        data: number;
    }[];
};

export default function YearTable({ className, groupObj }: GroupsTableProps) {
    const setFilterSearch = useStore((state) => state.setFilterSearch);

    return (
        <>
            <table className={classNames('table', className)}>
                <thead>
                    <tr className="table__heading-group">
                        <th className="table__heading w-full">Année</th>
                        <th className="table__heading pr-3xl">Nombre d&apos;incidents</th>
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
