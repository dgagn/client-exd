import { Database } from '../hooks/use-database';
import { GetState, SetState } from 'zustand';
import { StoreState } from './use-store';
import { ChangeEvent } from 'react';
import { filterDatabase, FilterDatabaseProps } from './filter-database';
import { orderBy } from 'lodash';


type OrderByValues = 'asc' | 'desc' | 'none';
type OrderByKeys = 'date' | 'type' | 'degreViolence' | 'evenement' | 'groupeImplique';

export interface FilterSlice {
    database: Database[];
    filteredDatabase: Database[];
    loadDatabase: (database: Database[]) => any;

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

    filterSearch: string;
    setFilterSearch: (value: string) => void;
    handleFilterSearch: (e: ChangeEvent<HTMLInputElement>) => void;

    resetFilters: () => void;

    filterDatabase: (options: FilterDatabaseProps) => void;

    showMoreFilters: boolean;
    toggleShowMoreFilters: () => void;

    orderDatabase: () => void;

    toggleOrderByDate: () => void
    orderByDate: string

    toggleOrderByType: () => void
    orderByType: string

    orderByDegreeOfViolence: string
    toggleOrderByDegreeOfViolence: () => void;

    orderByGroupsInvolved: string
    toggleOrderByGroupsInvolved: () => void;

    orderByEvents: string
    toggleOrderByEvents: () => void;
}

const createFilterSlice = (set: SetState<StoreState>, get: GetState<StoreState>) => ({
    database: [],
    filteredDatabase: [],
    loadDatabase: (database: Database[]) => {
        set({ database: database, filteredDatabase: database });
    },

    filterByDate: true,
    filterByType: true,
    filterByDegreeOfViolence: true,
    filterByGroupsInvolved: true,
    filterByEvents: true,

    toggleFilterByDate: () => set({ filterByDate: !get().filterByDate }),
    toggleFilterByType: () => set({ filterByType: !get().filterByType }),
    toggleFilterByDegreeOfViolence: () =>
        set({ filterByDegreeOfViolence: !get().filterByDegreeOfViolence }),
    toggleFilterByGroupsInvolved: () =>
        set({ filterByGroupsInvolved: !get().filterByGroupsInvolved }),
    toggleFilterByEvents: () => set({ filterByEvents: !get().filterByEvents }),

    filterSearch: '',
    handleFilterSearch: (e: ChangeEvent<HTMLInputElement>) => {
        get().setFilterSearch(e.target.value);
    },
    setFilterSearch: (value: string) => {
        set({ filterSearch: value });
    },

    filterDatabase: (options: FilterDatabaseProps) => {
        set({ filteredDatabase: filterDatabase(options) });
    },

    orderDatabase: () => {
        const keys: OrderByKeys[] & Function[] = []
        const orders: any[] = []

        get().orderByDate !== 'none' && keys.push((o: Database) => {
            return get().orderByDegreeOfViolence !== 'none' ? new Date(o.date).getFullYear() : o.date
        }) && orders.push(get().orderByDate)
        get().orderByType !== 'none' && keys.push('type') && orders.push(get().orderByType)
        get().orderByEvents !== 'none' && keys.push('evenement') && orders.push(get().orderByEvents)
        get().orderByGroupsInvolved !== 'none' && keys.push('groupeImplique') && orders.push(get().orderByGroupsInvolved)
        get().orderByDegreeOfViolence !== 'none' && keys.push((o: Database) => o.degreViolence.replace(/.*\(/gmi, '')) && orders.push(get().orderByDegreeOfViolence)

        if (keys.length <= 0 && orders.length <= 0) {
            set({
                filteredDatabase: filterDatabase({
                    database: get().database,
                    searchValue: get().filterSearch,
                    evenement: get().filterByEvents,
                    date: get().filterByDate,
                    degreViolence: get().filterByDegreeOfViolence,
                    groupeImplique: get().filterByGroupsInvolved,
                    type: get().filterByType,
                }),
            });
        } else {
            set({
                filteredDatabase: orderBy(get().filteredDatabase, keys, orders)
            })
        }
    },

    orderByDate: 'none',
    toggleOrderByDate: () => {
        const value = get().orderByDate
        if(value === 'none') {
            set({ orderByDate: 'desc' })
            get().orderDatabase()
        } else if(value === 'desc') {
            set({ orderByDate: 'asc' })
            get().orderDatabase()
        } else if(value === 'asc') {
            set({ orderByDate: 'none' })
            get().orderDatabase()
        }
    },

    orderByType: 'none',
    toggleOrderByType: () => {
        const value = get().orderByType
        if(value === 'none') {
            set({ orderByType: 'desc' })
            get().orderDatabase()
        } else if(value === 'desc') {
            set({ orderByType: 'asc' })
            get().orderDatabase()
        } else if(value === 'asc') {
            set({ orderByType: 'none' })
            get().orderDatabase()
        }
    },

    orderByDegreeOfViolence: 'none',
    toggleOrderByDegreeOfViolence: () => {
        const value = get().orderByDegreeOfViolence
        if(value === 'none') {
            set({ orderByDegreeOfViolence: 'desc' })
            get().orderDatabase()
        } else if(value === 'desc') {
            set({ orderByDegreeOfViolence: 'asc' })
            get().orderDatabase()
        } else if(value === 'asc') {
            set({ orderByDegreeOfViolence: 'none' })
            get().orderDatabase()
        }
    },

    orderByGroupsInvolved: 'none',
    toggleOrderByGroupsInvolved: () => {
        const value = get().orderByGroupsInvolved
        if(value === 'none') {
            set({ orderByGroupsInvolved: 'desc' })
            get().orderDatabase()
        } else if(value === 'desc') {
            set({ orderByGroupsInvolved: 'asc' })
            get().orderDatabase()
        } else if(value === 'asc') {
            set({ orderByGroupsInvolved: 'none' })
            get().orderDatabase()
        }
    },

    orderByEvents: 'none',
    toggleOrderByEvents: () => {
        const value = get().orderByEvents
        if(value === 'none') {
            set({ orderByEvents: 'desc' })
            get().orderDatabase()
        } else if(value === 'desc') {
            set({ orderByEvents: 'asc' })
            get().orderDatabase()
        } else if(value === 'asc') {
            set({ orderByEvents: 'none' })
            get().orderDatabase()
        }
    },

    resetFilters: () => {
        set({
            filterSearch: '',
            filterByDate: true,
            filterByType: true,
            filterByDegreeOfViolence: true,
            filterByGroupsInvolved: true,
            filterByEvents: true,
            filteredDatabase: get().database,
        });
    },

    showMoreFilters: false,
    toggleShowMoreFilters: () => {
        set({ showMoreFilters: !get().showMoreFilters });
    },
});

export default createFilterSlice;