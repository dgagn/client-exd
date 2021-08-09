import React, { useEffect } from 'react';
import useStore from '../store/use-store';
import useDatabase from '../hooks/use-database';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { database } from './index';
import { flatten, orderBy, uniq } from 'lodash';
import GroupsTable from "../components/groups/groups-table";
import SearchInput from "../components/search-input";

export async function getStaticProps() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery('database', database, { staleTime: 30000 });

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

export default function IncidentParGroupes() {
    const database = useDatabase();

    const groupsDatabase = uniq(flatten(database.map((entry) => entry.groupeImplique.split('\n'))));

    const filteredGroupsData = groupsDatabase.map((group) => {
        const filtered = database.filter((entry) => entry.groupeImplique.includes(group));
        return {
            data: filtered.length,
            label: group
        };
    });

    const filterObj = orderBy(
        filteredGroupsData,
        'data',
        'desc'
    );

    return (
        <div className="container max-w-xl">
            <div className="mt-2xl mb-lg">
                <h3>
                    Incidents par groupe - {filteredGroupsData?.length == 0 ? 88 : filteredGroupsData.length} résultats
                </h3>
                <p className="mt-md mb-lg" aria-label="Informations sur la recherche">
                    Vous pouvez cliquer sur un groupe pour appliquer le filtre.
                </p>
                <GroupsTable groupObj={filterObj} />
            </div>
        </div>
    );
}
