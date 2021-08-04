import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import axios from 'axios';
import useDatabase, { Database } from '../hooks/use-database';
import { useEffect, useMemo } from 'react';
import create from 'zustand';
import { devtools } from 'zustand/middleware';
import DatabaseTable from '../components/database/database-table';
import { debounce, deburr, trim } from 'lodash';
import Tag from '../components/tag';
import { isMobile } from 'react-device-detect'

export async function database() {
    const { data } = await axios.get('https://server-exd.herokuapp.com/database');
    return data;
}

export async function getStaticProps() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery('database', database);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

type DatabaseState = {
    database: Database[];
    filteredDatabase: Database[];
    setDatabase: (filteredDatabase: Database[]) => any;
    searchValue: string;
    setSearchValue: (s: string) => any;

    setDegreViolence: (value: boolean) => any;
    degreViolence: boolean;

    date: boolean;
    setDate: (value: boolean) => any;

    type: boolean;
    setType: (value: boolean) => any;

    groupeImplique: boolean;
    setGroupeImplique: (value: boolean) => any;

    evenement: boolean;
    setEvenement: (value: boolean) => any;

    resetFilters: () => any;
};

type FilterDatabaseProps = {
    database: Database[];
    searchValue: string;
    groupeImplique: boolean;
    degreViolence: boolean;
    date: boolean;
    type: boolean;
    evenement: boolean;
};

function filterDatabase({
    database,
    searchValue,
    date,
    degreViolence,
    evenement,
    groupeImplique,
    type,
}: FilterDatabaseProps) {
    return database.filter((entry) => {
        const normalizedEvenement = deburr(entry.evenement.toLowerCase());
        const normalizedGroupeImplique = deburr(entry.groupeImplique.toLowerCase());
        const normalizedDegreViolence = deburr(entry.degreViolence.toLowerCase());
        const normalizedDate = deburr(entry.date.toLowerCase());
        const normalizedType = deburr(entry.type.toLowerCase());
        const normalizedSearch = trim(deburr(searchValue.toLowerCase()));
        const multipleSearch = normalizedSearch.split(',');
        if (multipleSearch.length > 1) {
            const newMap = multipleSearch.map(
                (s) =>
                    (evenement && normalizedEvenement.includes(trim(s))) ||
                    (groupeImplique && normalizedGroupeImplique.includes(trim(s))) ||
                    (degreViolence && normalizedDegreViolence.includes(trim(s))) ||
                    (date && normalizedDate.includes(trim(s))) ||
                    (type && normalizedType.includes(trim(s)))
            );
            return newMap.reduce((prev, current) => prev && current);
        }

        return (
            (evenement && normalizedEvenement.includes(normalizedSearch)) ||
            (groupeImplique && normalizedGroupeImplique.includes(normalizedSearch)) ||
            (degreViolence && normalizedDegreViolence.includes(normalizedSearch)) ||
            (date && normalizedDate.includes(normalizedSearch)) ||
            (type && normalizedType.includes(normalizedSearch))
        );
    });
}

const store = create<DatabaseState>(
    devtools((set) => ({
        filteredDatabase: [],

        database: [],
        setDatabase: (database: Database[]) => set({ database, filteredDatabase: database }),

        date: true,
        setDate: (value: boolean) =>
            set((prev) => ({
                date: value,
                filteredDatabase: filterDatabase({
                    database: prev.database,
                    date: value,
                    type: prev.type,
                    groupeImplique: prev.groupeImplique,
                    searchValue: prev.searchValue,
                    evenement: prev.evenement,
                    degreViolence: prev.degreViolence,
                }),
            })),

        type: true,
        setType: (value: boolean) =>
            set((prev) => ({
                type: value,
                filteredDatabase: filterDatabase({
                    database: prev.database,
                    date: prev.date,
                    type: value,
                    groupeImplique: prev.groupeImplique,
                    searchValue: prev.searchValue,
                    evenement: prev.evenement,
                    degreViolence: prev.degreViolence,
                }),
            })),

        degreViolence: true,
        setDegreViolence: (value: boolean) =>
            set((prev) => ({
                degreViolence: value,
                filteredDatabase: filterDatabase({
                    database: prev.database,
                    date: prev.date,
                    type: prev.type,
                    groupeImplique: prev.groupeImplique,
                    searchValue: prev.searchValue,
                    evenement: prev.evenement,
                    degreViolence: value,
                }),
            })),

        evenement: true,
        setEvenement: (value: boolean) =>
            set((prev) => ({
                evenement: value,
                filteredDatabase: filterDatabase({
                    database: prev.database,
                    date: prev.date,
                    type: prev.type,
                    groupeImplique: prev.groupeImplique,
                    searchValue: prev.searchValue,
                    evenement: value,
                    degreViolence: prev.degreViolence,
                }),
            })),

        groupeImplique: true,
        setGroupeImplique: (value: boolean) =>
            set((prev) => ({
                groupeImplique: value,
                filteredDatabase: filterDatabase({
                    database: prev.database,
                    date: prev.date,
                    type: prev.type,
                    groupeImplique: value,
                    searchValue: prev.searchValue,
                    evenement: prev.evenement,
                    degreViolence: prev.degreViolence,
                }),
            })),

        resetFilters: () =>
            set((prev) => ({
                searchValue: '',
                evenement: true,
                type: true,
                date: true,
                groupeImplique: true,
                degreViolence: true,
                filteredDatabase: prev.database,
            })),

        searchValue: '',
        setSearchValue: (s) =>
            set((prev) => ({
                searchValue: s,
                filteredDatabase: filterDatabase({
                    database: prev.database,
                    date: prev.date,
                    type: prev.type,
                    groupeImplique: prev.groupeImplique,
                    searchValue: s,
                    evenement: prev.evenement,
                    degreViolence: prev.degreViolence,
                }),
            })),
    }))
);

export default function Home() {
    const database = useDatabase();
    const {
        setDatabase,
        searchValue,
        setSearchValue,
        filteredDatabase,
        setDate,
        date,
        degreViolence,
        setDegreViolence,
        setType,
        type,
        groupeImplique,
        setGroupeImplique,
        setEvenement,
        evenement,
        resetFilters,
    } = store();

    const handleDebounce = debounce(() => {

    }, 500)

    useEffect(() => setDatabase(database), [database]);

    const length = useMemo(() => filteredDatabase.length, [filteredDatabase]);

    return (
        <>
            <div className="container max-w-xl">

                <ul className="flex gap-x-md gap-y-xs flex-wrap font-bold">
                    <Tag onClick={() => setDate(!date)} isSelected={date}>
                        Date
                    </Tag>
                    <Tag onClick={() => setType(!type)} isSelected={type}>
                        Type d’événement
                    </Tag>
                    <Tag
                        onClick={() => setDegreViolence(!degreViolence)}
                        isSelected={degreViolence}
                    >
                        Degré de violence
                    </Tag>
                    <Tag
                        onClick={() => setGroupeImplique(!groupeImplique)}
                        isSelected={groupeImplique}
                    >
                        Groupe(s) impliqué(s)
                    </Tag>
                    <Tag onClick={() => setEvenement(!evenement)} isSelected={evenement}>
                        Événement
                    </Tag>
                </ul>
                { isMobile && (
                        <p>La performance de la page à été modifier pour votre téléphone mobile.</p>
                )}
                {length}
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                />

                <button onClick={() => resetFilters()}>reset</button>

                <DatabaseTable database={filteredDatabase} className={'mb-2xl'} />
            </div>
        </>
    );
}
