import React, { useEffect, useMemo } from 'react';
import { orderBy } from 'lodash';
import GroupsTable from '../components/groups/groups-table';
import Head from 'next/head';
import getDatabase, { Database } from '../utils/fetch-database';
import useStore, { StoreState } from '../store/use-store';
import shallow from 'zustand/shallow';
import SearchGroupsFilter from "../components/search-groups-filter";
import useGroupsFilter from "../hooks/use-groups-filter";
import useColors from "../hooks/use-colors";

interface IncidentsParGroupeProps {
    database: Database[];
}

export async function getStaticProps() {
    const db = await getDatabase();

    return {
        props: {
            database: db,
        },
    };
}

const eventsByGroups = ({ setDatabaseByGroups, filteredDatabaseByGroups }: StoreState) => ({
    setDatabaseByGroups,
    filteredDatabaseByGroups,
});

export default function EvenementsParGroupe({ database }: IncidentsParGroupeProps) {
    const { setDatabaseByGroups,  filteredDatabaseByGroups } = useStore(eventsByGroups, shallow);

    useEffect(() => {
        setDatabaseByGroups(database);
    }, [database, setDatabaseByGroups]);

    useGroupsFilter()


    return (
        <>
            <Head>
                <title>CEFIR - Événements par groupe</title>
            </Head>
            <div className="container max-w-xl mb-xl">
                <div className="mt-xl mb-lg">
                    <h3>
                        Événements par groupe{' '}
                        <span className="resultat">{filteredDatabaseByGroups?.length} résultats</span>
                    </h3>
                    <p className="mt-md mb-lg" aria-label="Informations sur la recherche">
                        Vous pouvez cliquer sur un groupe pour appliquer le filtre.
                    </p>

                    <SearchGroupsFilter className='mb-xl' />
                    <p
                            className="font-italic mt-lg mb-sm"
                            aria-label="Informations sur les balises"
                    >
                        Cliquer sur une colonne pour l&apos;ordonner.
                    </p>
                    <GroupsTable groupObj={filteredDatabaseByGroups} />
                </div>
            </div>
        </>
    );
}