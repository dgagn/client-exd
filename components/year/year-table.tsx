import React, { useEffect } from "react";
import classNames from 'classnames';
import useStore, { StoreState } from "../../store/use-store";
import Link from 'next/link';
import shallow from "zustand/shallow";

type GroupsTableProps = {
    className?: string;
    groupObj: {
        label: string;
        data: number;
    }[];
};

const yearState = ({ setId, setFilterSearch }: StoreState) => ({ setId, setFilterSearch })

export default function YearTable({ className, groupObj }: GroupsTableProps) {
    const { setId, setFilterSearch } = useStore(yearState, shallow);

    useEffect(() => {
        setId('')
    }, [])

    return (
        <>
            <table className={classNames('table', className)}>
                <thead>
                    <tr className="table__heading-group">
                        <th className="table__heading w-full">Année</th>
                        <th className="table__heading pr-3xl">Nombre d&apos;événements</th>
                    </tr>
                </thead>
                <tbody>
                    {groupObj.map((group) => {
                        return (
                            <Link href="/" key={group.label} passHref>
                                <tr
                                    key={group.label}
                                    onClick={() => {
                                        setId('')
                                        setFilterSearch(group.label)
                                    }}
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
