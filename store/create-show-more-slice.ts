import { GetState, SetState } from 'zustand';
import { StoreState } from './use-store';

export interface ShowMoreSlice {
    showMoreFilters: boolean;
    toggleShowMoreFilters: () => void;
}

export default function createShowMoreSlice(set: SetState<StoreState>, get: GetState<StoreState>): ShowMoreSlice {
    return {
        showMoreFilters: false,
        toggleShowMoreFilters: () => set({ showMoreFilters: !get().showMoreFilters })
    };
};
