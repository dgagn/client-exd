import { GetState, SetState } from 'zustand';
import { StoreState } from './use-store';
import filterDatabase, { FilterDatabaseProps } from "../utils/filter-database";

export interface FilterBySlice {
    filterByDate: boolean;
    filterByType: boolean;
    filterByDegreeOfViolence: boolean;
    filterByGroupsInvolved: boolean;
    filterByEvents: boolean;

    toggleFilterByDate: () => void;
    toggleFilterByType: () => void;
    toggleFilterByDegreeOfViolence: () => void;
    toggleFilterByGroupsInvolved: () => void;
    toggleFilterByEvents: () => void;

    filterDatabase: (options: FilterDatabaseProps) => void;
}

export default function createFilterBySlice(set: SetState<StoreState>, get: GetState<StoreState>): FilterBySlice {
    return {
        filterByDate: true,
        filterByDegreeOfViolence: true,
        filterByEvents: true,
        filterByGroupsInvolved: true,
        filterByType: true,

        toggleFilterByDate: () => set({ filterByDate: !get().filterByDate }),
        toggleFilterByDegreeOfViolence: () => set({ filterByDegreeOfViolence: !get().filterByDegreeOfViolence }),
        toggleFilterByEvents: () => set({ filterByEvents: !get().filterByEvents }),
        toggleFilterByGroupsInvolved: () => set({ filterByGroupsInvolved: !get().filterByGroupsInvolved }),
        toggleFilterByType: () => set({ filterByType: !get().filterByType }),

        filterDatabase: (options) => set({ filteredDatabase: filterDatabase(options) })
    };
};