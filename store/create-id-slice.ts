import { GetState, SetState } from 'zustand';
import { StoreState } from './use-store';

export interface IdSlice {
    id: string;
    setId: (id: string) => void;
}

export default function createIdSlice(set: SetState<StoreState>, get: GetState<StoreState>): IdSlice {
    return {
        id: "",
        setId: (id) => {
           set({ id })
        }
    };
};
