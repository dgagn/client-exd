import React, { useCallback, useEffect } from 'react';
import Head from 'next/head';
import useStore from '../store/use-store';
import Tags from '../components/tags';
import axios from 'axios';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import useDatabase from '../hooks/use-database';
import SearchInput from '../components/search-input';
import useFilter from '../hooks/use-filter';
import DatabaseTable from '../components/database/database-table';
import ShowMore from '../components/show-more';
import ShowMoreFilters from '../components/show-more-filters';

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

export default function Home() {
    const filteredDatabase = useStore(useCallback((state) => state.filteredDatabase, []));
    const loadDatabase = useStore((state) => state.loadDatabase);

    const database = useDatabase();
    useEffect(() => loadDatabase(database), [database, loadDatabase]);
    const filters = useFilter();

    return (
        <>
            <Head>
                <title>CEFIR - Méthodologie</title>
            </Head>
            <div className="container max-w-xl">
                <div className="mt-2xl mb-lg">
                    <h3>
                        <span role="img" aria-label="Un pictogramme de recherche">
                            🔍{' '}
                        </span>
                        Rechercher - {filteredDatabase?.length} résultats
                    </h3>
                    <p className="mt-md mb-lg" aria-label="Informations sur la recherche">
                        Par défaut, la recherche va inclure toutes les colonnes. Vous pouvez cliquer
                        sur les balises pour les exclure.
                    </p>
                    <Tags />
                    <SearchInput className={'mt-md'} />
                    <div className="mt-sm mb-lg">Date</div>

                    <ShowMore />
                    <ShowMoreFilters />

                    <DatabaseTable database={filteredDatabase.slice(0, 50)} className={'mb-2xl'} />
                </div>
            </div>
        </>
    );
}
