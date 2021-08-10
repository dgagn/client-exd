import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import useStore, { StoreState } from '../store/use-store';
import getDatabase, { Database } from '../utils/fetch-database';
import shallow from 'zustand/shallow';

const SearchInput = dynamic(() => import('../components/search-input'));
const DatabaseTable = dynamic(() => import('../components/database/database-table'));
const ShowMore = dynamic(() => import('../components/show-more'));
const ShowMoreFilters = dynamic(() => import('../components/show-more-filters'));
const Tags = dynamic(() => import('../components/tags'));

interface HomeProps {
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

const homeState = ({ filteredDatabase, loadDatabase, database }: StoreState) => ({
    filteredDatabase,
    loadDatabase,
    database,
});

export default function Home({ database }: HomeProps) {
    const { filteredDatabase, loadDatabase, database: db } = useStore(homeState, shallow);
    console.log('render home');
    useEffect(() => loadDatabase(database), []);

    return db.length > 0 ? (
        <>
            <Head>
                <title>CEFIR - Accueil</title>
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
                    <ShowMore />
                    <ShowMoreFilters />
                    <DatabaseTable database={filteredDatabase.slice(0, 50)} className={'mb-2xl'} />
                </div>
            </div>
        </>
    ) : (
        <>
            <Head>
                <title>CEFIR - Accueil</title>
            </Head>
            <div className="container max-w-xl">
                <div className="mt-2xl mb-lg">
                    <h3>
                        <span role="img" aria-label="Un pictogramme de recherche">
                            🔍{' '}
                        </span>
                        Rechercher - {database.length} résultats
                    </h3>
                    <p className="mt-md mb-lg" aria-label="Informations sur la recherche">
                        Par défaut, la recherche va inclure toutes les colonnes. Vous pouvez cliquer
                        sur les balises pour les exclure.
                    </p>

                    <Tags />
                    <SearchInput className={'mt-md'} />
                    <ShowMore />
                    <ShowMoreFilters />
                    <DatabaseTable database={database.slice(0, 50)} className={'mb-2xl'} />
                </div>
            </div>
        </>
    );
}

