import React from 'react';
import { Database } from '../hooks/use-database';
import { flatten, orderBy, uniq } from 'lodash';
import GroupsTable from '../components/groups/groups-table';
import Head from 'next/head';
import getDatabase from '../utils/database-fetch';

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

export default function IncidentsParGroupe({ database }: IncidentsParGroupeProps) {
    const groupsDatabase = uniq(flatten(database.map((entry) => entry.groupeImplique.split('\n'))));
    const filteredGroupsData = groupsDatabase.map((group) => {
        const filtered = database.filter((entry) => entry.groupeImplique.includes(group));
        return {
            data: filtered.length,
            label: group,
        };
    });
    const filterObj = orderBy(filteredGroupsData, 'data', 'desc');

    return (
        <>
            <Head>
                <title>CEFIR - Incident par groupe</title>
            </Head>
            <div className="container max-w-xl">
                <div className="mt-2xl mb-lg">
                    <h3>
                        Incidents par groupe -{' '}
                        {filteredGroupsData?.length == 0 ? 0 : filteredGroupsData.length} résultats
                    </h3>
                    <p className="mt-md mb-lg" aria-label="Informations sur la recherche">
                        Vous pouvez cliquer sur un groupe pour appliquer le filtre.
                    </p>
                    <GroupsTable groupObj={filterObj} />
                </div>
            </div>
        </>
    );
}
