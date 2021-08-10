import React from 'react';
import { QueryClient } from 'react-query';
import { database } from './index';
import { dehydrate } from 'react-query/hydration';
import useDatabase from '../hooks/use-database';
import YearTable from '../components/year/year-table';
import { sortBy, uniq } from 'lodash';
import Head from "next/head";

export async function getStaticProps() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery('database', database, { staleTime: 30000 });

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

export default function IncidentsParAnnee() {
    const database = useDatabase();

    const yearDatabase = sortBy(uniq(database.map((entry) => new Date(entry.date).getFullYear())));

    const filteredGroupsData = yearDatabase.map((year) => {
        const filtered = database.filter((entry) => entry.date.includes(`${year}`));
        return {
            label: year.toString(),
            data: filtered.length,
        };
    });

    return (
        <>
            <Head>
                <title>CEFIR - Incident par année</title>
            </Head>
            <div className="container max-w-xl">
                <div className="mt-2xl mb-lg">
                    <h3>
                        Incidents par année -{' '}
                        {filteredGroupsData?.length == 0 ? 0 : filteredGroupsData.length} résultats
                    </h3>
                    <p className="mt-md mb-lg" aria-label="Informations sur la recherche">
                        Vous pouvez cliquer sur une année pour appliquer le filtre.
                    </p>

                    <YearTable groupObj={filteredGroupsData} />
                </div>
            </div>
        </>
    );
}