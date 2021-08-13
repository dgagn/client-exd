import { GetState, SetState } from 'zustand';
import { StoreState } from './use-store';
import { ChangeEvent } from 'react';

export interface SearchSlice {
    filterSearch: string;
    setFilterSearch: (value: string) => void;
    handleFilterSearch: (e: ChangeEvent<HTMLInputElement>) => void;

    groupsFilterSearch: string;
    handleGroupsFilterSearch: (e: ChangeEvent<HTMLInputElement>) => void
    setGroupsFilterSearch: (value: string) => void;
}

export default function createSearchSlice(set: SetState<StoreState>, get: GetState<StoreState>): SearchSlice {
    return {
        filterSearch: "",
        setFilterSearch: (value) => {
            set({ filterSearch: value });
        },
        handleFilterSearch: (e) => {
            get().setFilterSearch(e.target.value);
        },

        groupsFilterSearch: "",
        setGroupsFilterSearch: (value) => {
            set({ groupsFilterSearch: value });
        },
        handleGroupsFilterSearch: (e) => {
            get().setGroupsFilterSearch(e.target.value);
        }
    };
};
