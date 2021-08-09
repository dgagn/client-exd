import { Database } from "../hooks/use-database";
import { GetState, SetState } from "zustand";
import { StoreState } from "./use-store";
import { ChangeEvent } from "react";
import { filterDatabase, FilterDatabaseProps } from "./filter-database";
import { flatten, uniq } from "lodash";

export interface FilterSlice {
    database: Database[]
    filteredDatabase: Database[]
    loadDatabase: (database: Database[]) => any

    filterByDate: boolean
    filterByType: boolean
    filterByDegreeOfViolence: boolean
    filterByGroupsInvolved: boolean
    filterByEvents: boolean

    toggleFilterByDate: () => void
    toggleFilterByType: () => void
    toggleFilterByDegreeOfViolence: () => void
    toggleFilterByGroupsInvolved: () => void
    toggleFilterByEvents: () => void

    filterSearch: string
    setFilterSearch: (value: string) => void
    handleFilterSearch: (e: ChangeEvent<HTMLInputElement>) => void

    resetFilters: () => void

    filterDatabase: (options: FilterDatabaseProps) => void

    showMoreFilters: boolean
    toggleShowMoreFilters: () => void
}

const createFilterSlice = (set: SetState<StoreState>, get: GetState<StoreState>) => ({
    database: [],
    filteredDatabase: [],
    loadDatabase: (database: Database[]) => {
        set({ database: database, filteredDatabase: database })
    },

    filterByDate: true,
    filterByType: true,
    filterByDegreeOfViolence: true,
    filterByGroupsInvolved: true,
    filterByEvents: true,

    toggleFilterByDate: () => set({ filterByDate: !get().filterByDate }),
    toggleFilterByType: () => set({ filterByType: !get().filterByType }),
    toggleFilterByDegreeOfViolence: () => set({ filterByDegreeOfViolence: !get().filterByDegreeOfViolence }),
    toggleFilterByGroupsInvolved: () => set({ filterByGroupsInvolved: !get().filterByGroupsInvolved }),
    toggleFilterByEvents: () => set({ filterByEvents: !get().filterByEvents }),

    filterSearch: '',
    handleFilterSearch: (e: ChangeEvent<HTMLInputElement>) => {
        get().setFilterSearch(e.target.value)
    },
    setFilterSearch: (value: string) => {
        set({ filterSearch: value })
    },

    filterDatabase: (options: FilterDatabaseProps) => {
        set({ filteredDatabase: filterDatabase(options) })
    },

    resetFilters: () => {
        set({
            filterSearch: '',
            filterByDate: true,
            filterByType: true,
            filterByDegreeOfViolence: true,
            filterByGroupsInvolved: true,
            filterByEvents: true,
            filteredDatabase: get().database
        })
    },

    showMoreFilters: false,
    toggleShowMoreFilters: () => {
        set({ showMoreFilters: !get().showMoreFilters })
    }
});

export default createFilterSlice