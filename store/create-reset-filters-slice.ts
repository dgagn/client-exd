import { GetState, SetState } from 'zustand';
import { StoreState } from './use-store';

export interface ResetFiltersSlice {
    resetFilters: () => void;
}

export default function createResetFiltersSlice(set: SetState<StoreState>, get: GetState<StoreState>): ResetFiltersSlice {
    return {
        resetFilters: () => {
            set({
                filterSearch: "",
                filterByDate: true,
                filterByType: true,
                filterByDegreeOfViolence: true,
                filterByGroupsInvolved: true,
                filterByEvents: true,
                filteredDatabase: get().database,
                orderByDate: 'none',
                orderByEvents: 'none',
                orderByType: 'none',
                orderByDegreeOfViolence: 'none',
                orderByGroupsInvolved: 'none'
            });
        }
    };
};
