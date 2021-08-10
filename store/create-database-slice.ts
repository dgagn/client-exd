import { GetState, SetState } from 'zustand';
import { StoreState } from './use-store';
import { Database } from '../utils/fetch-database';

export interface DatabaseSlice {
    database: Database[];
    filteredDatabase: Database[];
    loadDatabase: (database: Database[]) => any;
}

export default function createDatabaseSlice(set: SetState<StoreState>, get: GetState<StoreState>): DatabaseSlice {
    return {
        database: [],
        filteredDatabase: [],
        loadDatabase: (database) => set({ database: database, filteredDatabase: database })
    };
};
