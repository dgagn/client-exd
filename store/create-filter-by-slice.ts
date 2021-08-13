import { GetState, SetState } from 'zustand';
import { StoreState } from './use-store';
import filterDatabase, { FilterDatabaseProps } from "../utils/filter-database";
import { deburr, trim } from 'lodash';

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

    filterSubDatabase: () => void;
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

        filterDatabase: (options) => set({ filteredDatabase: get().orderDatabase(filterDatabase(options)) }),

        filterSubDatabase: () => {
            const search = get().groupsFilterSearch
            const database = get().databaseByGroups

            const filtered = database.filter((entry) => {
                const normalizedLabel = deburr(trim(entry.label.toLowerCase()))
                const normalizedSearch = deburr(trim(search.toLowerCase()))
                return normalizedLabel.includes(normalizedSearch)
            })

            set({ filteredDatabaseByGroups: get().orderSubDatabase(filtered) })
        }
    };
};