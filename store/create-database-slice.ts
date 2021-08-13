import { GetState, SetState } from 'zustand';
import { StoreState } from './use-store';
import { Database } from '../utils/fetch-database';
import { capitalize, flatten, orderBy, trim, uniq } from "lodash";

export interface DatabaseByGroups {
    label: string;
    data: number;
}

export interface DatabaseSlice {
    database: Database[];
    filteredDatabase: Database[];
    loadDatabase: (database: Database[]) => void;
    databaseByGroups: DatabaseByGroups[]
    setDatabaseByGroups: (database: Database[]) => void
    filteredDatabaseByGroups: DatabaseByGroups[]
}

export default function createDatabaseSlice(set: SetState<StoreState>, get: GetState<StoreState>): DatabaseSlice {
    const groupsDatabase = (database: Database[]) => uniq(flatten(database.map((entry) => entry.groupeImplique.split("\n"))).map((g) => trim(g)));
    return {
        database: [],
        filteredDatabase: [],
        databaseByGroups: [],
        filteredDatabaseByGroups: [],
        setDatabaseByGroups: (database) => {
            const db = groupsDatabase(database).map((group) => {
                const filtered = orderBy(database.filter((entry) => entry.groupeImplique.includes(group)), 'data');

                return {
                    data: filtered.length,
                    label: group
                };
            })
            set({ databaseByGroups: db })
        },

        loadDatabase: (database) => set({ database: database, filteredDatabase: database })
    };
};
