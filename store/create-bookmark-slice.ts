import { GetState, SetState } from 'zustand';
import { PersistantStoreState } from './use-persistant-store';

export interface BookmarkSlice {
    bookmarkIds: string[];
    toggleBookmarkId: (id: string) => void;
}

export default function createBookmarkSlice(set: SetState<PersistantStoreState>, get: GetState<PersistantStoreState>): BookmarkSlice {
    return {
        bookmarkIds: [],
        toggleBookmarkId: (id) => {
            const hasId = get().bookmarkIds.includes(id);
            if (!hasId) {
                set({ bookmarkIds: [...get().bookmarkIds, id] });
                console.log(get().bookmarkIds);
            } else {
                set({ bookmarkIds: [...get().bookmarkIds.filter((bookmarkId) => bookmarkId !== id)] });
                console.log(get().bookmarkIds);
            }
        }
    };
};
