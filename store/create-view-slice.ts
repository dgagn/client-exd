import { GetState, SetState } from 'zustand';
import { PersistantStoreState } from "./use-persistant-store";

export interface ViewSlice {
    viewedIds: string[]
    setPersistantViewedIds: (id: string) => void
}

export default function createViewSlice(set: SetState<PersistantStoreState>, get: GetState<PersistantStoreState>): ViewSlice {
    return {
        viewedIds: [],
        setPersistantViewedIds: (id: string) => {
            const hasId = get().viewedIds.includes(id)
            if(!hasId) {
                set({ viewedIds: [...get().viewedIds, id] })
            }
        }
    };
};
