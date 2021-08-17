import React, { useEffect, useMemo } from "react";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import useStore, { StoreState } from '../store/use-store';
import getDatabase, { Database } from '../utils/fetch-database';
import shallow from 'zustand/shallow';
import { useRouter } from "next/router";
import usePersistantStore, { PersistantStoreState } from "../store/use-persistant-store";
import useColors from "../hooks/use-colors";

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

const homeState = ({ filteredDatabase, loadDatabase, database, id }: StoreState) => ({
    filteredDatabase,
    loadDatabase,
    database,
    id
});
const homePersistState = ({ viewedIds }: PersistantStoreState) => ({ viewedIds });


export default function Home({ database }: HomeProps) {
    const { filteredDatabase, loadDatabase, database: db, id } = useStore(homeState, shallow);
    const { viewedIds } = usePersistantStore(homePersistState, shallow);
    useEffect(() => loadDatabase(database), []);

    useEffect(() => {
        const elem = id !== '' && document.getElementById(`${id}`)
        console.log(elem);
        if(elem) {
            elem!.scrollIntoView()
        }
    }, [id])

    const percent = useMemo(() => {
        return ((viewedIds.length / database.length) * 100)
    }, [viewedIds.length, database.length])

    return db.length > 0 && database.length > 0 ? (
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
                        Rechercher{' '}
                        <span className="resultat">{filteredDatabase?.length} résultats!</span>
                    </h3>
                    <p className="mt-md mb-lg max-w-sm" aria-label="Informations sur les balises">
                        Cliquer sur les balises pour exclure les colonnes dans la recherche. {percent > 0 && (
                            <span className='block mt-xs'>
                                Vous avez vu{' '}
                                <span className='text-primary-600'>{percent.toFixed(2).replace('.', ',')} %</span>
                                {' '}soit <span className="text-primary-600">{viewedIds.length} sur {database.length}</span> événements
                            </span>
                        )}
                    </p>

                    <Tags />

                    <SearchInput className={'mt-md'} />
                    <p
                        className="font-italic mt-lg mb-sm"
                        aria-label="Informations sur les balises"
                    >
                        <span role="img" aria-label="Une icône de punaise">
                            📌
                        </span>{' '}
                        séparer les mots par des virgules pour faire des recherches complexes.
                        Ajouter un point d&apos;exclamation avant les mots pour les exclure.
                    </p>
                    <ShowMore />
                    <ShowMoreFilters />
                    <p
                        className="font-italic mt-lg mb-sm"
                        aria-label="Informations sur les balises"
                    >
                        Cliquer sur une colonne pour l&apos;ordonner.
                    </p>
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
                        Rechercher <span className="resultat">{database?.length} résultats</span>
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

