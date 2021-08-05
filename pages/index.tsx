import React, { useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import useStore from "../store/use-store";
//import Tags from '../components/tags';
import axios from "axios";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import useDatabase from "../hooks/use-database";
//import SearchInput from '../components/search-input';
import useFilter from "../hooks/use-filter";
//import DatabaseTable from '../components/database/database-table';
//import ShowMore from '../components/show-more';
//import ShowMoreFilters from '../components/show-more-filters';

const SearchInput = dynamic(() => import("../components/search-input"));
const DatabaseTable = dynamic(() => import("../components/database/database-table"));
const ShowMore = dynamic(() => import("../components/show-more"));
const ShowMoreFilters = dynamic(() => import("../components/show-more-filters"));
const Tags = dynamic(() => import("../components/tags"));

export async function database() {
    const { data } = await axios.get("https://server-exd.herokuapp.com/database");
    return data;
}

export async function getStaticProps() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery("database", database, { staleTime: 30000 });

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    };
}

export default function Home() {
    const filteredDatabase = useStore((state) => state.filteredDatabase);
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
                            🔍{" "}
                        </span>
                            Rechercher - {filteredDatabase?.length == 0 ? 516 : filteredDatabase.length} résultats
                        </h3>
                        <p className="mt-md mb-lg" aria-label="Informations sur la recherche">
                            Par défaut, la recherche va inclure toutes les colonnes. Vous pouvez cliquer
                            sur les balises pour les exclure.
                        </p>

                        <Tags />
                        <SearchInput className={"mt-md"} />
                        <ShowMore />
                        <ShowMoreFilters />

                        <DatabaseTable database={filteredDatabase.slice(0, 50)} className={"mb-2xl"} />
                    </div>
                </div>
            </>
    );
}

