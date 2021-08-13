import React from 'react';
import YearTable from '../components/year/year-table';
import { sortBy, uniq } from 'lodash';
import Head from 'next/head';
import getDatabase, { Database } from '../utils/fetch-database';

interface IncidentsParAnneeProps {
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

export default function EvenementsParAnnee({ database }: IncidentsParAnneeProps) {
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
                <title>CEFIR - Événements par année</title>
            </Head>
            <div className="container max-w-xl">
                <div className="mt-2xl mb-lg">
                    <h3>
                        Événements par année{' '}
                        <span className='resultat'>{filteredGroupsData?.length} résultats</span>
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